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
  hero: "hero", geruststelling: "hero", vertrouwen: "vertrouwen",
  waar_heb_je_last_van: "waar_heb_je_last_van", reviews: "reviews",
  herkenbaar: "herkenbaar", zo_werkt_het: "zo_werkt_het", team: "team",
  verzekering: "verzekering", faq: "faq", cta: "cta",
};

function wachtOp(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function scrollNaarBinnenTijd(el: Element, duurMs: number): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const doelY = startY + el.getBoundingClientRect().top;
    const start = performance.now();
    function stap(nu: number) {
      const t = Math.min(1, (nu - start) / duurMs);
      const ease = 1 - Math.pow(1 - t, 3);
      window.scrollTo(0, startY + (doelY - startY) * ease);
      if (t < 1) requestAnimationFrame(stap);
      else resolve();
    }
    requestAnimationFrame(stap);
  });
}

export function OpnameRegisseur() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ruw = params.get("autoscroll");
    if (!ruw) return;

    const duren = ruw.split(",").map((x) => parseFloat(x)).filter((x) => !isNaN(x) && x > 0);
    if (duren.length < 2) return;

    let geannuleerd = false;

    async function speelAf() {
      await wachtOp(300);
      if (geannuleerd) return;

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
        if (i > 0) {
          const el = document.querySelector('[data-opname="' + stap.anker + '"]');
          if (el) await scrollNaarBinnenTijd(el, 700);
          await wachtOp(Math.max(0, stap.duurSec * 1000 - 700));
        } else {
          await wachtOp(stap.duurSec * 1000);
        }
      }
    }

    speelAf();
    return () => { geannuleerd = true; };
  }, []);

  return null;
}
