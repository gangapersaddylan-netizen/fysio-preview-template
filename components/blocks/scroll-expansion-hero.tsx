"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
import { opnameActief } from "@/lib/opname";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const klem = (v: number) => Math.min(Math.max(v, 0), 1);

// 11-09-2026 (Dylan): de hero is omgedraaid. Hij stond eerst dicht en ging open bij het
// scrollen; nu staat hij bij het laden al OPEN en sluit hij terwijl je naar beneden scrolt.
// Zodra hij dicht is laat hij de pagina los en scrolt de site gewoon door. Scroll je bovenaan
// weer omhoog, dan opent hij opnieuw. Het contentblok onder de video is meteen zichtbaar,
// want er valt niet meer te wachten op een "geopende" toestand.
//
// De voortgang staat in een ref en niet alleen in state: de luisteraars worden eenmalig
// gekoppeld (lege deps) in plaats van bij elke scrolltik opnieuw. Dat scheelt haperingen op
// de opnameserver, die geen GPU heeft.
export default function ScrollExpandMedia({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const [scrollProgress, setScrollProgress] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const voortgang = useRef(1);
  const vergrendeld = useRef(true);
  const extern = useRef(false);
  const touchStartY = useRef(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const zet = (p: number) => {
      voortgang.current = p;
      setScrollProgress(p);
    };

    if (opnameActief()) extern.current = true;

    // Pagina hersteld op een scrollpositie verderop: niet vergrendelen en de hero dicht zetten.
    if (window.scrollY > 5) {
      vergrendeld.current = false;
      if (!reduce) zet(0);
    }

    // Externe aansturing door de OpnameRegisseur. Beide routes doen hetzelfde:
    // het CustomEvent (bestaande regie) en window.__heroProgress (directe aanroep).
    // flushSync zet het beeld binnen dezelfde frame, zodat de opname niet achterloopt.
    const stuur = (waarde: number) => {
      extern.current = true;
      vergrendeld.current = false;
      const p = klem(Number(waarde) || 0);
      voortgang.current = p;
      flushSync(() => setScrollProgress(p));
    };
    (window as unknown as { __heroProgress?: (p: number) => void }).__heroProgress = stuur;

    const onOpnameHero = (e: Event) => {
      const detail = (e as CustomEvent<{ progress: number }>).detail;
      stuur(detail?.progress ?? 0);
    };

    const onReset = () => {
      vergrendeld.current = true;
      zet(1);
    };

    // Naar beneden scrollen (deltaY > 0) sluit de hero, omhoog opent hem.
    const beweeg = (delta: number) => {
      const next = klem(voortgang.current - delta);
      zet(next);
      if (next <= 0) vergrendeld.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (reduce || extern.current) return;
      if (vergrendeld.current) {
        e.preventDefault();
        beweeg(e.deltaY * 0.0009);
      } else if (e.deltaY < 0 && window.scrollY <= 5) {
        vergrendeld.current = true;
        e.preventDefault();
        beweeg(e.deltaY * 0.0009);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (reduce || extern.current || !touchStartY.current) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;
      if (vergrendeld.current || (deltaY < 0 && window.scrollY <= 5)) {
        vergrendeld.current = true;
        e.preventDefault();
        beweeg(deltaY * (deltaY < 0 ? 0.008 : 0.005));
        touchStartY.current = touchY;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
    };

    // Scrollt de pagina toch (toetsenbord, anker, scrollbar), dan is de hero uitgespeeld.
    const handleScroll = () => {
      if (vergrendeld.current && window.scrollY > 5) {
        vergrendeld.current = false;
        if (!reduce && !extern.current) zet(0);
      }
    };

    window.addEventListener("opname:hero", onOpnameHero as EventListener);
    window.addEventListener("resetSection", onReset);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("opname:hero", onOpnameHero as EventListener);
      window.removeEventListener("resetSection", onReset);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      const w = window as unknown as { __heroProgress?: (p: number) => void };
      if (w.__heroProgress === stuur) delete w.__heroProgress;
    };
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden bg-paper transition-colors duration-700 ease-in-out"
    >
      <section className="relative flex min-h-[100svh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100svh] w-full flex-col items-center">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, #f7f5f0 0%, var(--color-accent-grad-soft) 55%, var(--color-accent-grad) 100%)",
            }}
          />
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={bgImageSrc}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
            {bgImageSrc && <div className="absolute inset-0 bg-black/20" />}
          </motion.div>

          <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-start">
            <div className="relative flex h-[100svh] w-full flex-col items-center justify-center gap-2 md:gap-3">
              {title && (
                <h1
                  className={`display shrink-0 text-[clamp(2.2rem,7.5vw,5.5rem)] uppercase leading-[0.9] text-white ${
                    textBlend ? "mix-blend-difference" : ""
                  }`}
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h1>
              )}

              <div
                className="relative z-0 shrink-0 overflow-hidden rounded-[16px] shadow-[0_20px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "78vh",
                }}
              >
                {mediaType === "video" ? (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full rounded-[16px] object-cover object-top"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={mediaSrc}
                    alt={title ?? "media"}
                    className="h-full w-full rounded-[16px] object-cover object-top"
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[16px] bg-black/40"
                  style={{ opacity: 0.5 - scrollProgress * 0.3 }}
                />

                {date && (
                  <p
                    className={`eyebrow absolute inset-x-0 top-5 z-10 text-center text-white/90 ${
                      textBlend ? "mix-blend-difference" : ""
                    }`}
                  >
                    {date}
                  </p>
                )}

                {scrollToExpand && (
                  <div
                    className={`absolute inset-x-0 bottom-4 z-10 flex flex-col items-center gap-2 ${
                      textBlend ? "mix-blend-difference" : ""
                    }`}
                  >
                    <p className="text-sm font-medium text-white/90">
                      {scrollToExpand}
                    </p>
                    <span className="h-9 w-px bg-gradient-to-b from-white/70 to-transparent" />
                  </div>
                )}
              </div>

              {title && restOfTitle && (
                <h1
                  className={`display shrink-0 text-[clamp(2.2rem,7.5vw,5.5rem)] uppercase leading-[0.9] text-white ${
                    textBlend ? "mix-blend-difference" : ""
                  }`}
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </h1>
              )}
            </div>

            <section
              data-opname="geruststelling"
              className="relative z-10 flex w-full flex-col px-6 py-16 md:px-12 lg:py-24"
            >
              {children}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
