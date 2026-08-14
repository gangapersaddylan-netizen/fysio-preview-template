"use client";

import { useEffect, useRef } from "react";

type Fase =
  | { modus: "geen" }
  | { modus: "intro"; open: number; stil: number; start: number }
  | { modus: "b"; duren: number[]; start: number };

const HEADER_HOOGTE = 64;

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function wacht(ms: number) {
  return new Promise<void>((r) => setTimeout(r, Math.max(0, ms)));
}

function animeer(duurMs: number, onTick: (t: number) => void): Promise<void> {
  return new Promise((resolve) => {
    if (duurMs <= 0) {
      onTick(1);
      resolve();
      return;
    }
    const t0 = performance.now();
    function stap(nu: number) {
      const t = Math.min(1, (nu - t0) / duurMs);
      onTick(ease(t));
      if (t < 1) requestAnimationFrame(stap);
      else resolve();
    }
    requestAnimationFrame(stap);
  });
}

function elementTop(id: string): number {
  const el = document.getElementById(id);
  if (!el) return window.scrollY;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_HOOGTE);
}

function scrollNaar(y: number, duurMs: number) {
  const startY = window.scrollY;
  return animeer(duurMs, (t) => {
    window.scrollTo(0, startY + (y - startY) * t);
  });
}

function parseFase(): Fase {
  if (typeof window === "undefined") return { modus: "geen" };
  const p = new URLSearchParams(window.location.search);
  const modus = p.get("opname");
  const start = parseFloat(p.get("start") || "0.5");
  if (modus === "intro") {
    return {
      modus: "intro",
      open: parseFloat(p.get("open") || "4"),
      stil: parseFloat(p.get("stil") || "27"),
      start,
    };
  }
  if (modus === "b") {
    const duren = (p.get("duren") || "")
      .split(",")
      .map((x) => parseFloat(x))
      .filter((x) => !isNaN(x));
    return { modus: "b", duren, start };
  }
  return { modus: "geen" };
}

function wachtOpMedia(): Promise<void> {
  return new Promise((resolve) => {
    const video = document.querySelector("video");
    const videoKlaar = new Promise<void>((r) => {
      if (!video || video.readyState >= 3) return r();
      video.addEventListener("canplay", () => r(), { once: true });
      setTimeout(() => r(), 4000);
    });
    const fontsKlaar = document.fonts ? document.fonts.ready : Promise.resolve();
    Promise.all([videoKlaar, fontsKlaar]).then(() => resolve());
  });
}

async function draaiIntro(open: number, stil: number) {
  // Hero blijft dicht (kleine video, beide titelwoorden zichtbaar) voor de hele introduur.
  await wacht((open + stil) * 1000);
}

async function draaiDeelB(duren: number[]) {
  if (duren.length < 11) {
    // eslint-disable-next-line no-console
    console.warn("opname=b verwacht 11 duren (hero..cta), kreeg " + duren.length);
  }
  const [
    hero = 5,
    geruststelling = 0,
    vertrouwen = 0,
    waarLast = 0,
    reviews = 0,
    herkenbaar = 0,
    zoWerktHet = 0,
    team = 0,
    verzekering = 0,
    faq = 0,
    cta = 0,
  ] = duren;

  // 1) Hero: dicht blijven, dan gecontroleerd open in de laatste ~30% van de sectieduur.
  const openDuur = Math.min(3.5, Math.max(1.5, hero * 0.3));
  const dichtDuur = Math.max(0, hero - openDuur);
  await wacht(dichtDuur * 1000);
  await animeer(openDuur * 1000, (t) => {
    window.dispatchEvent(new CustomEvent("opname:hero", { detail: { progress: t } }));
  });

  // 2) geruststelling: hero-inhoud (sub-headline, WhatsApp-knop) staat er al, even laten staan.
  await wacht(geruststelling * 1000);

  // 3) vertrouwen
  await scrollNaar(elementTop("vertrouwen"), 1200);
  await wacht(Math.max(0, vertrouwen * 1000 - 1200));

  // 4) waar_heb_je_last_van: naartoe scrollen, dan heen-en-weer als interactiviteitsdemo
  const klachtenTop = elementTop("klachten");
  const klachtenEl = document.getElementById("klachten");
  await scrollNaar(klachtenTop, 1200);
  const restKlachten = Math.max(0, waarLast - 1.2);
  const klachtenIntern = klachtenEl ? Math.max(0, klachtenEl.offsetHeight - window.innerHeight) : 0;
  if (restKlachten > 4 && klachtenIntern > 40) {
    const amplitude = klachtenIntern * 0.5;
    const stapTijd = Math.min(1400, (restKlachten * 1000) / 5);
    await animeer(stapTijd, (t) => window.scrollTo(0, klachtenTop + amplitude * t));
    await animeer(stapTijd, (t) => window.scrollTo(0, klachtenTop + amplitude * (1 - t)));
    await animeer(stapTijd, (t) => window.scrollTo(0, klachtenTop + amplitude * t));
    await animeer(stapTijd, (t) => window.scrollTo(0, klachtenTop + amplitude * (1 - t)));
    await wacht(Math.max(0, restKlachten * 1000 - stapTijd * 4));
  } else {
    await wacht(restKlachten * 1000);
  }

  // 5) reviews
  await scrollNaar(elementTop("reviews"), 1000);
  await wacht(Math.max(0, reviews * 1000 - 1000));

  // 6) herkenbaar (empathie): reageert zelf op window.scrollY, dus geleidelijk meebewegen
  const herkenbaarTop = elementTop("herkenbaar");
  const herkenbaarEl = document.getElementById("herkenbaar");
  const herkenbaarIntern = herkenbaarEl ? Math.max(0, herkenbaarEl.offsetHeight - window.innerHeight) : 0;
  if (herkenbaarIntern > 0 && herkenbaar > 0) {
    await scrollNaar(herkenbaarTop, 800);
    await animeer(Math.max(0, herkenbaar * 1000 - 800), (t) => {
      window.scrollTo(0, herkenbaarTop + herkenbaarIntern * t);
    });
  } else {
    await scrollNaar(herkenbaarTop, 1000);
    await wacht(Math.max(0, herkenbaar * 1000 - 1000));
  }

  // 7) zo_werkt_het (aanpak)
  await scrollNaar(elementTop("aanpak"), 1000);
  await wacht(Math.max(0, zoWerktHet * 1000 - 1000));

  // 8) team
  await scrollNaar(elementTop("team"), 1000);
  await wacht(Math.max(0, team * 1000 - 1000));

  // 9) verzekering (vergoeding)
  await scrollNaar(elementTop("vergoeding"), 1000);
  await wacht(Math.max(0, verzekering * 1000 - 1000));

  // 10) faq
  await scrollNaar(elementTop("faq"), 1000);
  await wacht(Math.max(0, faq * 1000 - 1000));

  // 11) cta
  await scrollNaar(elementTop("cta"), 1000);
  await wacht(Math.max(0, cta * 1000 - 1000));
}

export function OpnameRegisseur() {
  const gestart = useRef(false);

  useEffect(() => {
    if (gestart.current) return;
    const fase = parseFase();
    if (fase.modus === "geen") return;
    gestart.current = true;
    document.documentElement.setAttribute("data-opname", "1");

    (async () => {
      await wachtOpMedia();
      await wacht(fase.start * 1000);
      if (fase.modus === "intro") {
        await draaiIntro(fase.open, fase.stil);
      } else if (fase.modus === "b") {
        await draaiDeelB(fase.duren);
      }
      document.documentElement.setAttribute("data-opname-klaar", "1");
    })();
  }, []);

  return null;
}
