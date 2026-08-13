"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reset = () => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
    };
    window.addEventListener("resetSection", reset);
    return () => window.removeEventListener("resetSection", reset);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Opnamemodus: forceer directe volledige expansie zonder scroll-wiel-interactie te simuleren.
  useEffect(() => {
    const forceer = () => {
      setScrollProgress(1);
      setMediaFullyExpanded(true);
      setShowContent(true);
    };
    window.addEventListener("opname:expand-hero", forceer);
    return () => window.removeEventListener("opname:expand-hero", forceer);
  }, []);

  useEffect(() => {
    if (mediaFullyExpanded) window.dispatchEvent(new Event("opname:hero-expanded"));
  }, [mediaFullyExpanded]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const advance = (delta: number) => {
      const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
      setScrollProgress(next);
      if (next >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (next < 0.75) {
        setShowContent(false);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (reduce) return;
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        advance(e.deltaY * 0.0009);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (reduce || !touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        advance(deltaY * (deltaY < 0 ? 0.008 : 0.005));
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!reduce && !mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

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

            <motion.section
              className="relative z-10 flex w-full flex-col px-6 py-16 md:px-12 lg:py-24"
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
