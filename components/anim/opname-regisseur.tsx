"use client";

import { useEffect, useRef } from "react";

type Fase =
  | { modus: "geen" }
  | { modus: "intro"; open: number; stil: number; start: number }
  | { modus: "b"; duren: number[]; start: number };

const HEADER_HOOGTE = 64;

// ---------------------------------------------------------------------------
// SNELHEID TUSSEN SECTIES
// De sprong van de ene sectie naar de volgende duurde hiervoor een VAST aantal
// milliseconden (1400 naar reviews, 1200 naar vertrouwen, enzovoort), ongeacht
// de afstand. Hoe verder de volgende sectie stond, hoe harder hij ging.
// Nu volgt de duur uit de afstand: duur = afstand / snelheid.
//
// Dit is een GEMIDDELDE snelheid. De easing is een sinus in/uit, die halverwege
// op circa 1,57x het gemiddelde piekt en op nul begint en eindigt. 400 px/s
// betekent dus een piek van ongeveer 630 px/s.
//
// Per opname te overschrijven met ?snelheid=300 (of 400, 600, ...).
// Alleen de sprongen TUSSEN secties gebruiken dit. De heen-en-weer demo in de
// klachtensectie en de lineaire drift door herkenbaar/team blijven ongemoeid,
// die worden uit de resterende spreektijd afgeleid en gaan al goed.
// ---------------------------------------------------------------------------
const SNELHEID_STANDAARD = 400;
// Rustiger tempo voor het stuk dat nog DOOR een hoge sectie heen loopt. Dat is
// geen sprong tussen secties maar inhoud die langs moet komen, dus dat mag
// trager. Te overschrijven met ?snelheid_binnen=
const SNELHEID_BINNEN_STANDAARD = 260;
const MIN_SPRONG_MS = 450;

let snelheidPxS = SNELHEID_STANDAARD;
let snelheidBinnenPxS = SNELHEID_BINNEN_STANDAARD;

// Sinus in/uit: start op snelheid nul, versnelt, remt weer af naar nul.
function easeSinus(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

function animeerMet(
  duurMs: number,
  curve: (t: number) => number,
  onTick: (t: number) => void
): Promise<void> {
  return new Promise((resolve) => {
    if (duurMs <= 0) {
      onTick(1);
      resolve();
      return;
    }
    const t0 = performance.now();
    function stap(nu: number) {
      const t = Math.min(1, (nu - t0) / duurMs);
      onTick(curve(t));
      if (t < 1) requestAnimationFrame(stap);
      else resolve();
    }
    requestAnimationFrame(stap);
  });
}

function wacht(ms: number) {
  return new Promise<void>((r) => setTimeout(r, Math.max(0, ms)));
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

// Sprong naar de volgende sectie op een vaste snelheid in px/s.
// Geeft terug hoeveel milliseconden het kostte, zodat de rest van de
// spreektijd als stilstand kan worden opgemaakt.
async function scrollNaarSnelheid(y: number, snelheid?: number): Promise<number> {
  const startY = window.scrollY;
  const afstand = Math.abs(y - startY);
  if (afstand < 1) return 0;
  // De snelheid is leidend, punt. Duurt de overgang langer dan de spreektijd
  // van de volgende sectie, dan schuift de rest van de tijdlijn mee op.
  const px = snelheid && snelheid > 0 ? snelheid : snelheidPxS;
  const duurMs = Math.max(MIN_SPRONG_MS, (afstand / px) * 1000);
  await animeerMet(duurMs, easeSinus, (t) => {
    window.scrollTo(0, startY + (y - startY) * t);
  });
  return duurMs;
}

// Generieke "drift door sectie": scrollt naar het begin van de sectie, en als de
// sectie hoger is dan het scherm (dus meerdere stappen/kaarten/foto's bevat),
// glijdt daarna LINEAIR (constante snelheid) door de rest van de sectie zodat
// elke stap evenveel tijd krijgt in plaats van dat latere stappen worden
// weggesprint. Voor korte secties (past in één scherm) gewoon scrollen + wachten.
async function driftDoorSectie(id: string, duurSec: number) {
  const top = elementTop(id);
  const intern = sectieInterneHoogte(id);
  const entreeMs = await scrollNaarSnelheid(top);
  const restMs = Math.max(0, duurSec * 1000 - entreeMs);
  if (intern > 40 && restMs > 0) {
    // Drift binnen de sectie blijft lineair over de resterende tijd: elke
    // stap/foto/kaart krijgt evenveel tijd. Bewust niet snelheidsgestuurd.
    await driftLineair(top, top + intern, restMs);
  } else {
    await wacht(restMs);
  }
}

function parseFase(): Fase {
  if (typeof window === "undefined") return { modus: "geen" };
  const p = new URLSearchParams(window.location.search);
  const modus = p.get("opname");
  const start = parseFloat(p.get("start") || "0.5");
  const snelheid = parseFloat(p.get("snelheid") || "");
  if (!isNaN(snelheid) && snelheid > 0) snelheidPxS = snelheid;
  const snelheidBinnen = parseFloat(p.get("snelheid_binnen") || "");
  if (!isNaN(snelheidBinnen) && snelheidBinnen > 0) snelheidBinnenPxS = snelheidBinnen;
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
    // Alle afbeeldingen voorladen voordat de tijdlijn start: anders scrollen we
    // tijdens de opname langs secties waarvan de foto's nog aan het laden zijn
    // (lege vlakken in beeld). Max 8s wachten, daarna gewoon starten.
    const afbeeldingenKlaar = Promise.all(
      Array.from(document.images).map(
        (img) =>
          new Promise<void>((r) => {
            if (img.complete) return r();
            img.addEventListener("load", () => r(), { once: true });
            img.addEventListener("error", () => r(), { once: true });
          })
      )
    );
    const maxWachten = new Promise<void>((r) => setTimeout(() => r(), 8000));
    Promise.all([videoKlaar, fontsKlaar, Promise.race([afbeeldingenKlaar, maxWachten])]).then(() => resolve());
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

  // 1) Hero: eerst helemaal stil, dan rustig open, even terug richting dicht om te
  // laten zien dat het echt op scrollen reageert, en dan helemaal open.
  // De eerste opening gaat bewust tot 0,92 en niet tot 1: bij 1 zet de hero zichzelf
  // op "volledig uitgeklapt" en toont hij de tekst, en dan kan hij niet meer dicht.
  const HERO_OPEN_MS = 2600;
  const HERO_DICHT_MS = 1400;
  const HERO_HEROPEN_MS = 2200;
  const heroBewegingMs = HERO_OPEN_MS + HERO_DICHT_MS + HERO_HEROPEN_MS;
  const dichtDuur = Math.max(0, hero * 1000 - heroBewegingMs);
  await wacht(dichtDuur);
  const heroNaar = (van: number, naar: number, duurMs: number) =>
    animeerMet(duurMs, easeSinus, (t) => {
      window.dispatchEvent(
        new CustomEvent("opname:hero", { detail: { progress: van + (naar - van) * t } })
      );
    });
  await heroNaar(0, 0.92, HERO_OPEN_MS);
  await heroNaar(0.92, 0.3, HERO_DICHT_MS);
  await heroNaar(0.3, 1, HERO_HEROPEN_MS);

  // 2) geruststelling: onder de geopende hero staan de geruststellingen en de twee
  // knoppen (WhatsApp/Plan). We zoeken de WhatsApp-knop op en scrollen zo ver dat
  // die op ~60% van het scherm staat (dynamisch gemeten, niet gegokt), zodat de
  // knoppen echt in beeld komen en even blijven staan.
  if (geruststelling > 0) {
    const waKnop = Array.from(document.querySelectorAll("a")).find((a) =>
      ((a as HTMLAnchorElement).href || "").includes("wa.me")
    );
    let doelY = 620;
    if (waKnop) {
      const r = waKnop.getBoundingClientRect();
      doelY = Math.max(0, r.top + window.scrollY - window.innerHeight * 0.6);
    }
    const stapDuur = await scrollNaarSnelheid(doelY);
    await wacht(Math.max(0, geruststelling * 1000 - stapDuur));
  }

  // 3) vertrouwen: de balk is laag (~130px), dus niet bovenaan plakken maar
  // verticaal centreren - dan is de balk echt het onderwerp in beeld.
  {
    const el = document.getElementById("vertrouwen");
    let doelY = elementTop("vertrouwen");
    if (el) {
      const rest = Math.max(0, window.innerHeight - el.offsetHeight);
      doelY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - rest * 0.45);
    }
    const stapDuur = await scrollNaarSnelheid(doelY);
    await wacht(Math.max(0, vertrouwen * 1000 - stapDuur));
  }

  // 4) waar_heb_je_last_van: naartoe scrollen, dan een vloeiende (niet-happerige)
  // heen-en-weer als interactiviteitsdemo, en daarna een iets rustiger overgang
  // naar reviews (voorheen sprong dit te snel door).
  const klachtenTop = elementTop("klachten");
  const klachtenIntern = sectieInterneHoogte("klachten");
  const klachtenEntree = await scrollNaarSnelheid(klachtenTop);
  const restKlachten = Math.max(0, waarLast - klachtenEntree / 1000);
  if (restKlachten > 4 && klachtenIntern > 40) {
    const amplitude = klachtenIntern * 0.55;
    const overgangReserve = 600;
    const oscillatieDuur = Math.max(0, restKlachten * 1000 - overgangReserve);
    await scrollOscillatie(klachtenTop, amplitude, oscillatieDuur, 2);
    await wacht(overgangReserve);
  } else {
    await wacht(restKlachten * 1000);
  }

  // 5) reviews. De heen-en-weer eindigt bovenaan de klachtensectie, en die sectie
  // is hoger dan het scherm. In een keer naar reviews springen betekende dus dat de
  // hele resterende klachtensectie in een klap voorbij vloog. Nu in twee stukken:
  // eerst rustig door de rest van de klachtensectie heen (dat is inhoud, geen
  // sprong, dus op het lagere binnen-tempo), en dan pas de korte sprong naar reviews.
  const reviewsTop = elementTop("reviews");
  const klachtenEind = Math.min(klachtenTop + klachtenIntern, reviewsTop);
  let reviewsEntree = 0;
  if (klachtenIntern > 40 && window.scrollY < klachtenEind - 40) {
    reviewsEntree += await scrollNaarSnelheid(klachtenEind, snelheidBinnenPxS);
  }
  reviewsEntree += await scrollNaarSnelheid(reviewsTop);
  await wacht(Math.max(0, reviews * 1000 - reviewsEntree));

  // 6) herkenbaar (empathie): meerdere foto's/slides na elkaar. Voorheen liep dit
  // via de geëaste animeer(), waardoor de eerste foto's lang bleven staan en de
  // latere (3, 4, 5) werden weggesprint door de cubic-ease. Nu lineaire drift
  // zodat elke foto ongeveer evenveel tijd krijgt.
  await driftDoorSectie("herkenbaar", herkenbaar);

  // 7) zo_werkt_het (aanpak)
  const aanpakEntree = await scrollNaarSnelheid(elementTop("aanpak"));
  await wacht(Math.max(0, zoWerktHet * 1000 - aanpakEntree));

  // 8) team: zelfde probleem als herkenbaar als de teamsectie hoger is dan het
  // scherm (meerdere teamkaarten) - nu ook lineaire drift in plaats van een
  // vaste scroll gevolgd door een abrupte sprong naar de volgende sectie.
  await driftDoorSectie("team", team);

  // 9) verzekering (vergoeding)
  const vergoedingEntree = await scrollNaarSnelheid(elementTop("vergoeding"));
  await wacht(Math.max(0, verzekering * 1000 - vergoedingEntree));

  // 10) faq
  const faqEntree = await scrollNaarSnelheid(elementTop("faq"));
  await wacht(Math.max(0, faq * 1000 - faqEntree));

  // 11) cta
  const ctaEntree = await scrollNaarSnelheid(elementTop("cta"));
  await wacht(Math.max(0, cta * 1000 - ctaEntree));
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
