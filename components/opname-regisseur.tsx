"use client";

import { useEffect } from "react";

const VOLGORDE_MET_VERZEKERING: string[] = [
  "hero", "geruststelling", "vertrouwen", "waar_heb_je_last_van",
  "reviews", "herkenbaar", "zo_werkt_het", "team", "verzekering", "faq", "cta",
];
const VOLGORDE_ZONDER_VERZEKERING: string[] = [
  "hero", "geruststelling", "vertrouwen", "waar_heb_je_last_van",
  "reviews", "herkenbaar", "zo_werkt_het", "team", "faq", "cta",
];
// geruststelling heeft nu een eigen anker (binnen de hero-component), zodat de
// pagina daadwerkelijk doorscrolt wanneer de spreker bij dat deel is.
const ANKER: Record<string, string> = {
  hero: "hero", geruststelling: "geruststelling", vertrouwen: "vertrouwen",
  waar_heb_je_last_van: "waar_heb_je_last_van", reviews: "reviews",
  herkenbaar: "herkenbaar", zo_werkt_het: "zo_werkt_het", team: "team",
  verzekering: "verzekering", faq: "faq", cta: "cta",
};

function wachtOp(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Timergebaseerd (setInterval): requestAnimationFrame pauzeert in een onzichtbaar tabblad.
function scrollMetEase(doelY: number, duurMs: number): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const start = Date.now();
    const interval = window.setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duurMs);
      const ease = 1 - Math.pow(1 - t, 3);
      window.scrollTo(0, startY + (doelY - startY) * ease);
      if (t >= 1) { window.clearInterval(interval); resolve(); }
    }, 25);
  });
}

// Lineair, voor rustige doorloop-scroll binnen een sectie (geen versnelling).
function scrollLineair(doelY: number, duurMs: number): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const start = Date.now();
    const interval = window.setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / duurMs);
      window.scrollTo(0, startY + (doelY - startY) * t);
      if (t >= 1) { window.clearInterval(interval); resolve(); }
    }, 25);
  });
}

function maxScroll(): number {
  const vh = window.innerHeight || 900;
  return Math.max(0, document.documentElement.scrollHeight - vh);
}

export function OpnameRegisseur() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ruw = params.get("autoscroll");
    if (!ruw) return;

    const duren = ruw.split(",").map((x) => parseFloat(x)).filter((x) => !isNaN(x) && x > 0);
    if (duren.length < 2) return;

    const vorigeBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    let geannuleerd = false;

    async function speelAf() {
      await wachtOp(400);
      if (geannuleerd) return;
      const vh = window.innerHeight || 900;

      // INTRO-MODUS (opening + stilte, 2-3 waardes): openingszin bovenaan laten,
      // daarna een rustige teaser-scroll over het eerste stuk van de site.
      if (duren.length < 6) {
        const openingMs = duren[0] * 1000;
        const restMs = duren.slice(1).reduce((a, b) => a + b, 0) * 1000;
        await wachtOp(openingMs);
        if (geannuleerd) return;
        const doel = Math.min(maxScroll(), vh * 1.6);
        await scrollLineair(doel, restMs);
        return;
      }

      const volgorde = duren.length === 11 ? VOLGORDE_MET_VERZEKERING : VOLGORDE_ZONDER_VERZEKERING;

      const stappen: { anker: string; duurSec: number }[] = [];
      volgorde.forEach((key, i) => {
        const duur = duren[i] != null ? duren[i] : 3;
        const anker = ANKER[key] || key;
        const laatste = stappen[stappen.length - 1];
        if (laatste && laatste.anker === anker) laatste.duurSec += duur;
        else stappen.push({ anker: anker, duurSec: duur });
      });

      for (let i = 0; i < stappen.length; i++) {
        if (geannuleerd) return;
        const stap = stappen[i];
        const beschikbaarMs = stap.duurSec * 1000;

        // Hero: bovenaan blijven; de hero-component klapt zichzelf geanimeerd open.
        if (i === 0) { await wachtOp(beschikbaarMs); continue; }

        const el = document.querySelector('[data-opname="' + stap.anker + '"]');
        if (!el) { await wachtOp(beschikbaarMs); continue; }

        const rect = el.getBoundingClientRect();
        const topY = Math.min(maxScroll(), rect.top + window.scrollY);
        const hoogte = rect.height;

        const sprongMs = Math.min(700, beschikbaarMs * 0.2);
        await scrollMetEase(topY, sprongMs);
        if (geannuleerd) return;
        let restMs = beschikbaarMs - sprongMs;

        const overloop = hoogte - vh;
        if (overloop > vh * 0.15) {
          // Sectie is hoger dan het scherm: er rustig en gelijkmatig doorheen scrollen
          // (scrollgevoelige secties zoals herkenbaar en team komen zo tot hun recht).
          const stilVoorMs = Math.min(1200, restMs * 0.2);
          const stilNaMs = Math.min(900, restMs * 0.15);
          const scrollMs = Math.max(600, restMs - stilVoorMs - stilNaMs);
          await wachtOp(stilVoorMs);
          if (geannuleerd) return;
          const eindY = Math.min(maxScroll(), topY + overloop);
          await scrollLineair(eindY, scrollMs);
          if (geannuleerd) return;
          await wachtOp(stilNaMs);
        } else {
          await wachtOp(restMs);
        }
      }
    }

    speelAf();
    return () => {
      geannuleerd = true;
      document.documentElement.style.scrollBehavior = vorigeBehavior;
    };
  }, []);

  return null;
}
