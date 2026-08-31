"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { ShieldCheck, CalendarClock, BadgeCheck } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { Stars } from "@/components/ui/stars";

function CountUp({
  target,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  const format = (v: number) =>
    v.toFixed(decimals).replace(".", ",") + suffix;

  useEffect(() => {
    if (reduce || !inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, decimals, suffix, reduce]);

  return <span ref={ref}>{format(target)}</span>;
}

export function Trustbalk() {
  const { trust } = praktijk;
  return (
    <section id="vertrouwen" aria-label="Vertrouwen en kwaliteit" className="border-y border-line bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 min-[860px]:grid-cols-4">
        <div className="flex flex-col gap-1.5 py-7 pr-4">
          <div className="flex items-center gap-2">
            <span className="display text-2xl text-ink">
              <CountUp target={trust.googleScore} decimals={1} />
            </span>
            <Stars value={5} />
          </div>
          <p className="text-sm text-muted">
            <CountUp target={trust.aantalReviews} /> reviews op Google
          </p>
        </div>

        <div className="flex flex-col gap-1.5 py-7 pr-4 min-[860px]:pl-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <span className="h3 text-ink">
              {((praktijk as unknown) as { algemeneVervanging?: { trustTitel?: string } }).algemeneVervanging?.trustTitel ??
                "Vergoed door alle zorgverzekeraars"}
            </span>
          </div>
          <p className="text-sm text-muted">
            {((praktijk as unknown) as { algemeneVervanging?: { trustSub?: string } }).algemeneVervanging?.trustSub ??
              "Geen verwijzing nodig"}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 py-7 pr-4 min-[860px]:pl-6">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-accent" />
            <span className="h3 text-ink">
              Binnen {trust.wachttijdDagen} dagen terecht
            </span>
          </div>
          <p className="text-sm text-muted">Actuele wachttijd</p>
        </div>

        <div className="flex flex-col gap-1.5 py-7 min-[860px]:pl-6">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-accent" />
            <span className="h3 text-ink">{trust.bigRegistratie}</span>
          </div>
          <p className="text-sm text-muted">{trust.bigSub}</p>
        </div>
      </div>
    </section>
  );
}
