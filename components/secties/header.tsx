"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Klachten", href: "#klachten" },
  { label: "Aanpak", href: "#aanpak" },
  { label: "Team", href: "#team" },
  { label: "Vergoeding", href: "#vergoeding" },
  { label: "Vragen", href: "#faq" },
];

function lerpHex(a: string, b: string, t: number) {
  const parse = (h: string) =>
    [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const c = (x: number, y: number) => Math.round(x + (y - x) * t);
  return `rgb(${c(ar, br)}, ${c(ag, bg)}, ${c(ab, bb)})`;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const klachtOffset = useRef(1600);
  const { scrollY } = useScroll();

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById("klachten");
      if (el) {
        klachtOffset.current = el.getBoundingClientRect().top + window.scrollY;
      }
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const btnColor = useTransform(scrollY, (y) => {
    const off = klachtOffset.current || 1600;
    const t = Math.min(Math.max(y / off, 0), 1);
    return lerpHex("#3f6ee3", "#1b4de4", t);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-line shadow-[0_8px_28px_-16px_rgba(20,32,29,0.45)] backdrop-blur-md"
          : "border-transparent"
      )}
      style={{ background: scrolled ? "rgba(247,245,240,0.82)" : "transparent" }}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="display text-lg text-ink transition-colors">
          {praktijk.naam}
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 min-[900px]:flex"
          aria-label="Hoofdmenu"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={praktijk.telefoonHref}
            className="hidden items-center gap-2 text-sm font-medium text-ink transition-colors sm:flex"
          >
            <Phone className="h-4 w-4 text-accent" />
            {praktijk.telefoon}
          </a>
          <motion.a
            href={praktijk.boekUrl}
            style={{ backgroundColor: btnColor }}
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Plan je intake
          </motion.a>
        </div>
      </div>
    </header>
  );
}
