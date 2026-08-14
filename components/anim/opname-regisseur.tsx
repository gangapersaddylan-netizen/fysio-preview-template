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

// Lineaire (niet-geëaste) drift: elk stukje van de sectie krijgt evenveel tijd.
// Gebruikt voor secties met meerdere "stappen" (foto's, teamkaarten) zodat de
// laatste stappen niet worden weggesprint door de cubic-ease van animeer().
function driftLineair(vanY: number, naarY: number, duurMs: number): Promise<void> {
  return new Promise((resolve) => {
    if (duurMs <= 0) {
      window.scrollTo(0, naarY);
      resolve();
      return;
    }
    const t0 = performance.now();
    function stap(nu: number) {
      const t = Math.min(1, (nu - t0) / duurMs);
      window.scrollTo(0, vanY + (naarY - vanY) * t);
      if (t < 1) requestAnimationFrame(stap);
      else resolve();
    }
    requestAnimationFrame(stap);
  });
}

// Vloeiende, continue heen-en-weer beweging (raised-cosine) rond basisY.
// Geen losse legs meer die elk apart optrekken/afremmen (dat gaf het happerige
// gevoel) - dit is één doorlopende golf die precies op basisY eindigt.
function scrollOscillatie(
  basisY: number,
  amplitude: number,
  duurMs: number,
  cycli: number
): Promise<void> {
  return new Promise((resolve) => {
    if (duurMs <= 0) {
      window.scrollTo(0, basisY);
      resolve();
      return;
    }
    const t0 = performance.now();
    function stap(nu: number) {
      const t = Math.min(1, (nu - t0) / duurMs);
      const fase = t * cycli * Math.PI * 2;
      const y = basisY + amplitude * 0.5 * (1 - Math.cos(fase));
      window.scrollTo(0, y);
      if (t < 1) requestAnimationFrame(stap);
      else {
        window.scrollTo(0, basisY);
        resolve();
      }
    }
    requestAnimationFrame(stap);
  });
}

function elementTop(id: string): number {
  const el = document.getElementById(id);
  if (!el) return window.scrollY;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_HOOGTE);
}

function sectieInterneHoogte(id: string): number {
  const el = document.getElementById(id);
  return el ? Math.max(0, el.offsetHeight - window.innerHeight) : 0;
}

function scrollNaar(y: number, duurMs: number) {
  const startY = window.scrollY;
  return animeer(duurMs, (t) => {
    window.scrollTo(0, startY + (y - startY) * t);
  });
}

// Generieke "drift door sectie": scrollt naar het begin van de sectie, en als de
// sectie hoger is dan het scherm (dus meerdere stappen/kaarten/foto's bevat),
// glijdt daarna LINEAIR (constante snelheid) door de rest van de sectie zodat
// elke stap evenveel tijd krijgt in plaats van dat latere stappen worden
// weggesprint. Voor korte secties (past in één scherm) gewoon scrollen + wachten.
async function driftDoorSectie(id: string, duurSec: number, entreeMs = 900) {
  const top = elementTop(id);
  const intern = sectieInterneHoogte(id);
  if (intern > 40 && duurSec * 1000 > entreeMs) {
    await scrollNaar(top, entreeMs);
    const restMs = Math.max(0, duurSec * 1000 - entreeMs);
    await driftLineair(top, top + intern, restMs);
  } else {
    const scrollDuur = Math.min(1200, duurSec * 1000);
    await scrollNaar(top, scrollDuur);
    await wacht(Math.max(0, duurSec * 1000 - scrollDuur));
  }
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

  // 2) geruststelling: onder de geopende hero staan de geruststellingen en de twee
  // knoppen (WhatsApp/Plan). Eerst was dit alleen een stille wacht, waardoor het
  // leek alsof de opname er zonder iets te doen voorbij sprintte. Nu een klein,
  // gecontroleerd stapje naar beneden zodat die knoppen echt in beeld komen en
  // even blijven staan, voordat we doorgaan naar vertrouwen.
  if (geruststelling > 0) {
    const stapDuur = Math.min(900, geruststelling * 1000 * 0.45);
    await animeer(stapDuur, (t) => {
      window.scrollTo(0, 190 * t);
    });
    await wacht(Math.max(0, geruststelling * 1000 - stapDuur));
  }

  // 3) vertrouwen
  await scrollNaar(elementTop("vertrouwen"), 1200);
  await wacht(Math.max(0, vertrouwen * 1000 - 1200));

  // 4) waar_heb_je_last_van: naartoe scrollen, dan een vloeiende (niet-happerige)
  // heen-en-weer als interactiviteitsdemo, en daarna een iets rustiger overgang
  // naar reviews (voorheen sprong dit te snel door).
  const klachtenTop = elementTop("klachten");
  const klachtenIntern = sectieInterneHoogte("klachten");
  await scrollNaar(klachtenTop, 1200);
  const restKlachten = Math.max(0, waarLast - 1.2);
  if (restKlachten > 4 && klachtenIntern > 40) {
    const amplitude = klachtenIntern * 0.55;
    const overgangReserve = 600;
    const oscillatieDuur = Math.max(0, restKlachten * 1000 - overgangReserve);
    await scrollOscillatie(klachtenTop, amplitude, oscillatieDuur, 2);
    await wacht(overgangReserve);
  } else {
    await wacht(restKlachten * 1000);
  }

  // 5) reviews (iets langzamere, rustigere overgang dan voorheen)
  await scrollNaar(elementTop("reviews"), 1400);
  await wacht(Math.max(0, reviews * 1000 - 1400));

  // 6) herkenbaar (empathie): meerdere foto's/slides na elkaar. Voorheen liep dit
  // via de geëaste animeer(), waardoor de eerste foto's lang bleven staan en de
  // latere (3, 4, 5) werden weggesprint door de cubic-ease. Nu lineaire drift
  // zodat elke foto ongeveel evenveel tijd krijgt.
  await driftDoorSectie("herkenbaar", herkenbaar, 800);

  // 7) zo_werkt_het (aanpak)
  await scrollNaar(elementTop("aanpak"), 1000);
  await wacht(Math.max(0, zoWerktHet * 1000 - 1000));

  // 8) team: zelfde probleem als herkenbaar als de teamsectie hoger is dan het
  // scherm (meerdere teamkaarten) - nu ook lineaire drift in plaats van een
  // vaste scroll gevolgd door een abrupte sprong naar de volgende sectie.
  await driftDoorSectie("team", team, 900);

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
