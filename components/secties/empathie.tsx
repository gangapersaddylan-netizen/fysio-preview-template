"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Slide =
  | { type: "pijn"; tekst: string; afbeelding?: string }
  | { type: "oplossing"; tekst: string; afbeelding?: string };

export function Empathie() {
  const { regels, afsluiting, oplossingAfbeelding } = praktijk.empathie;

  const slides: Slide[] = [
    ...regels.map((r) => ({
      type: "pijn" as const,
      tekst: r.tekst,
      afbeelding: r.afbeelding || undefined,
    })),
    { type: "oplossing", tekst: afsluiting, afbeelding: oplossingAfbeelding },
  ];
  const N = slides.length;

  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [panelHeight, setPanelHeight] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const scrolled = Math.min(Math.max(window.scrollY - top, 0), total);
      const idx = Math.min(N - 1, Math.floor(scrolled / (total / N)));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [N]);

  // Elke slide heeft eigen tekstlengte (verschilt per niche/prospect), dus de hoogte van
  // dit paneel wordt gemeten in plaats van vast te staan (was h-[24rem] md:h-[19rem], afgestemd
  // op de oude fysio-tekst — bij langere tekst (bv. niche=overig) liep de laatste regel over de
  // voortgangsbolletjes eronder heen, zoals bij regel 01 "...zonder altijd moe te zijn.").
  useEffect(() => {
    const measure = () => {
      const el = slideRefs.current[active];
      if (el) setPanelHeight(el.scrollHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, N]);

  const goTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (total / N) * i + 2, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="herkenbaar"
      aria-labelledby="empathie-titel"
      className="relative bg-card"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 md:grid-cols-2">
          <div className="relative flex flex-col justify-center px-5 py-20 md:border-r md:border-line md:px-12">
            <div className="mb-8">
              <p className="eyebrow">Herkenbaar</p>
              <h2 id="empathie-titel" className="h2 mt-3 max-w-md text-ink">
                Je bent hier waarschijnlijk omdat
              </h2>
            </div>

            <div
              className="relative min-h-[19rem] transition-[height] duration-500 ease-out"
              style={panelHeight ? { height: `${panelHeight}px` } : undefined}
            >
              {slides.map((s, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-x-0 top-0 flex flex-col justify-start transition-all duration-700 ease-out",
                    i === active
                      ? "opacity-100 translate-y-0"
                      : "pointer-events-none translate-y-8 opacity-0"
                  )}
                >
                  {s.type === "pijn" ? (
                    <>
                      <span className="display text-5xl text-accent/25 md:text-6xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 max-w-md text-2xl font-medium leading-snug text-ink md:text-[1.9rem]">
                        {s.tekst}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-6 w-6" strokeWidth={2.5} />
                      </span>
                      <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                        {s.tekst}
                      </p>
                      <a
                        href="#aanpak"
                        className={cn(
                          buttonVariants({ variant: "primary", size: "lg" }),
                          "mt-7 self-start"
                        )}
                      >
                        Zo werkt onze aanpak
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ga naar ${i + 1}`}
                  aria-current={i === active}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500 ease-in-out",
                    i === active ? "w-12 bg-accent" : "w-6 bg-line"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="relative hidden items-center justify-center p-8 md:flex">
            <div className="relative aspect-video w-full max-w-[620px] overflow-hidden rounded-[28px] border border-line bg-ink shadow-xl">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out"
                style={{ transform: `translateY(-${active * 100}%)` }}
              >
                {slides.map((s, i) => (
                  <div key={i} className="h-full w-full">
                    {s.afbeelding ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.afbeelding}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <MediaPlaceholder
                        label={
                          s.type === "oplossing"
                            ? "Foto: behandeling"
                            : `Foto ${i + 1}`
                        }
                        className="h-full w-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
