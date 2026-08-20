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

// Lineair, voor rustige gelijkmatige scroll (geen versnelling).
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
      const t0 = Date.now();
      await wachtOp(300);
      if (geannuleerd) return;
      const vh = window.innerHeight || 900;

      // INTRO-MODUS (2-3 waardes): eerste ~5 seconden helemaal stil met de hero-video
      // nog klein; rond 5s klapt de hero zichzelf open (zit in de hero-component, oogt
      // als scrollen); daarna rustig en gelijkmatig de hele site door als teaser.
      if (duren.length < 6) {
        const totaalMs = duren.reduce((a, b) => a + b, 0) * 1000;
        // stil + uitklaptijd: tot ~8 seconden na de start niets scrollen
        const wachtTot = Math.min(8000, totaalMs * 0.35);
        await wachtOp(Math.max(0, wachtTot - (Date.now() - t0)));
        if (geannuleerd) return;
        const restMs = Math.max(1000, totaalMs - (Date.now() - t0) - 300);
        await scrollLineair(maxScroll(), restMs);
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

        // Hero: bovenaan blijven; de hero klapt zichzelf geanimeerd open. Tegen het einde
        // van de hero-spreektijd (waar het script de interactiviteit benoemt) doet de hero
        // een open-dicht-demo via het bounce-event.
        if (i === 0) {
          const BOUNCE_MS = 6500; // moment voor het einde waarop de demo start
          if (beschikbaarMs > BOUNCE_MS + 5000) {
            await wachtOp(beschikbaarMs - BOUNCE_MS);
            if (geannuleerd) return;
            window.dispatchEvent(new Event("opname:hero-bounce"));
            await wachtOp(BOUNCE_MS);
          } else {
            await wachtOp(beschikbaarMs);
          }
          continue;
        }

        const el = document.querySelector('[data-opname="' + stap.anker + '"]');
        if (!el) { await wachtOp(beschikbaarMs); continue; }

        const rect = el.getBoundingClientRect();
        const topY = rect.top + window.scrollY;
        const hoogte = rect.height;

        // Korte secties (zoals de trustbalk) niet tegen de bovenrand plakken maar
        // comfortabel in beeld zetten, anders lijkt de pagina te ver doorgescrold.
        let doelY = topY;
        if (hoogte < vh * 0.7) {
          doelY = Math.max(0, topY - (vh - hoogte) * 0.35);
        }
        doelY = Math.min(maxScroll(), doelY);

        const sprongMs = Math.min(700, beschikbaarMs * 0.2);
        await scrollMetEase(doelY, sprongMs);
        if (geannuleerd) return;
        const restMs = beschikbaarMs - sprongMs;

        const overloop = (topY + hoogte) - (doelY + vh);
        if (overloop > vh * 0.15) {
          // Sectie is hoger dan het scherm: er rustig en gelijkmatig doorheen scrollen
          // (scrollgevoelige secties zoals herkenbaar en team komen zo tot hun recht).
          const stilVoorMs = Math.min(1200, restMs * 0.2);
          const stilNaMs = Math.min(900, restMs * 0.15);
          const scrollMs = Math.max(600, restMs - stilVoorMs - stilNaMs);
          await wachtOp(stilVoorMs);
          if (geannuleerd) return;
          const eindY = Math.min(maxScroll(), doelY + overloop);
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
