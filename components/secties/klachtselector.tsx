"use client";

import { useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  PersonStanding,
  Bone,
  Activity,
  Dumbbell,
  Brain,
  HeartPulse,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { praktijk, type Klacht } from "@/content/praktijk";

const icons: Record<string, LucideIcon> = {
  PersonStanding,
  Bone,
  Activity,
  Dumbbell,
  Brain,
  HeartPulse,
};

const CARD_VH = 55;
const REVEAL_SPAN = 0.72;
const REVEAL_DUR = 0.1;
const FADE_START = 0.84;

function KlachtKaart({
  klacht,
  index,
  count,
  scrollYProgress,
}: {
  klacht: Klacht;
  index: number;
  count: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = (index / count) * REVEAL_SPAN;

  const appear = useTransform(scrollYProgress, [start, start + REVEAL_DUR], [0, 1]);
  const fadeOut = useTransform(scrollYProgress, [FADE_START, 1], [1, 0]);
  const opacity = useTransform(() => appear.get() * fadeOut.get());

  const y = useTransform(appear, [0, 1], [48, 0]);
  const scale = useTransform(appear, [0, 1], [0.9, 1]);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? "auto" : "none"));

  const Icon = icons[klacht.icoon] ?? Activity;

  return (
    <motion.a
      href={`/klachten/${klacht.slug}`}
      style={{ opacity, y, scale, pointerEvents }}
      className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[24px] border border-white/70 bg-white/60 p-5 shadow-[0_24px_60px_-28px_rgba(20,32,29,0.5)] backdrop-blur-2xl transition-colors duration-200 hover:border-accent/50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/50"
      />

      <div className="relative flex items-center justify-between">
        <span className="eyebrow text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      {/* flex-1 + mt-auto op de link: tekst mag variëren, "Lees meer" staat in elke
          kaart op dezelfde onderrand. line-clamp is het vangnet tegen te lange copy. */}
      <div className="relative mt-4 flex flex-1 flex-col">
        <h3 className="display line-clamp-2 text-xl leading-tight text-ink break-words hyphens-auto">
          {klacht.label}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm leading-snug text-ink-soft break-words hyphens-auto">
          {klacht.sub}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
          Lees meer
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
}

export function Klachtselector() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const N = praktijk.klachten.length;

  return (
    <section
      id="klachten"
      ref={sectionRef}
      aria-labelledby="klachten-titel"
      className="relative bg-paper"
      style={{ height: `${N * CARD_VH}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-paper">
        <div aria-hidden className="absolute inset-0 z-0">
          <div
            className="absolute -left-24 top-[20%] h-[26rem] w-[26rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(27,77,228,0.12), transparent 70%)",
            }}
          />
          <div
            className="absolute -right-16 top-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(232,163,61,0.11), transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[10%] left-1/3 h-[22rem] w-[22rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,197,94,0.10), transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-20 lg:pt-24">
          <p className="eyebrow">Waar begin je</p>
          <h2 id="klachten-titel" className="h2 mt-3 text-ink">
            Waar heb je last van?
          </h2>
          <p className="lead mt-3">
            Kies je klacht, dan lees je precies hoe wij die aanpakken en wat je
            mag verwachten.
          </p>
        </div>

        <div className="relative z-10 flex flex-1 items-center">
          {/* Kolommen volgen het aantal klachten (max 6): geen lege kolom en geen
              te smalle kaarten bij 4 of 5 klachten. */}
          <div
            className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-5 sm:grid-cols-3 lg:[grid-template-columns:repeat(var(--kolommen),minmax(0,1fr))]"
            style={{ "--kolommen": Math.min(Math.max(N, 1), 6) } as CSSProperties}
          >
            {praktijk.klachten.map((k, i) => (
              <KlachtKaart
                key={k.slug}
                klacht={k}
                index={i}
                count={N}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
