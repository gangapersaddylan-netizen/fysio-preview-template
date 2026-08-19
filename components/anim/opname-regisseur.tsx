"use client";

import { useEffect, useRef } from "react";

type Fase =
  | { modus: "geen" }
  | { modus: "intro"; open: number; stil: number; start: number }
  | { modus: "b"; duren: number[]; start: number; heromarks: number[]; klachtmark: number };

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
// De overgang van de klachtensectie naar reviews is de langste van de site en
// krijgt daarom een eigen, lager tempo. Verder verandert er niets aan die
// beweging: het blijft een doorlopende scroll, alleen rustiger.
// Te overschrijven met ?snelheid_reviews=
const SNELHEID_REVIEWS_STANDAARD = 300;
// Tempo waarmee door de klachtenkaarten wordt gescrold (heen en terug). Rustiger
// dan een sprong, want hier moet je de kaarten een voor een zien verschijnen.
const SNELHEID_KAARTEN = 300;
const MIN_SPRONG_MS = 450;
// De opnamebrowser levert zijn beeldframes niet gelijkmatig aan tijdens het filmen,
// waardoor de beweging hapert terwijl de tijdlijn zelf wel klopt. Een vaste tijdstap via
// setInterval staat los van de framelevering van de compositor en geeft een gelijkmatige
// opname. De positie wordt nog steeds uit de klok berekend, dus de duur blijft exact.
const STAP_MS = 16;

let snelheidPxS = SNELHEID_STANDAARD;
let snelheidReviewsPxS = SNELHEID_REVIEWS_STANDAARD;

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
    const timer = window.setInterval(() => {
      const t = Math.min(1, (performance.now() - t0) / duurMs);
      onTick(curve(t));
      if (t >= 1) {
        window.clearInterval(timer);
        resolve();
      }
    }, STAP_MS);
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
    const timer = window.setInterval(() => {
      const t = Math.min(1, (performance.now() - t0) / duurMs);
      window.scrollTo(0, vanY + (naarY - vanY) * t);
      if (t >= 1) {
        window.clearInterval(timer);
        resolve();
      }
    }, STAP_MS);
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
  const snelheidReviews = parseFloat(p.get("snelheid_reviews") || "");
  if (!isNaN(snelheidReviews) && snelheidReviews > 0) snelheidReviewsPxS = snelheidReviews;
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
    // heromarks=open,dicht,tekst (seconden, audio-relatief). Sync de hero-animatie op de woorden.
    const heromarks = (p.get("heromarks") || "")
      .split(",")
      .map((x) => parseFloat(x))
      .filter((x) => !isNaN(x));
    // klachtmark = seconde waarop de stem over de kaarten begint; pas dan de heen-en-weer demo.
    const klachtmark = parseFloat(p.get("klachtmark") || "");
    return { modus: "b", duren, start, heromarks, klachtmark: isNaN(klachtmark) ? 0 : klachtmark };
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

async function draaiDeelB(
  duren: number[],
  heromarks: number[] = [],
  klachtmark = 0
) {
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

  // ABSOLUTE TIJDLIJN. Voorheen wachtte elke sectie een RELATIEVE tijd (sectie - reistijd).
  // Kleine afrondingen en de extra hero-/klachtenchoreografie stapelden dan op, waardoor
  // het beeld verderop seconden voor kon lopen op de voice-over. Nu rekenen we per sectie
  // een absoluut aankomsttijdstip uit vanaf het begin van deel B, en wachten we exact tot
  // dat tijdstip. Zo kan er geen drift meer ontstaan: elke sectie begint gegarandeerd op de
  // seconde waarop de stem erover begint.
  const t0 = performance.now();
  const verstreken = () => performance.now() - t0;
  const wachtTot = (sec: number) => wacht(Math.max(0, sec * 1000 - verstreken()));
  const grens = [0];
  for (const d of duren) grens.push(grens[grens.length - 1] + d);
  // grens[i] = starttijd van sectie i (0=hero .. 10=cta), grens[11] = einde.

  const heroZet = (progress: number) =>
    window.dispatchEvent(new CustomEvent("opname:hero", { detail: { progress } }));

  // 1) Hero. Als heromarks (open, dicht, tekst) zijn meegegeven, laten we de hero-animatie
  // exact op de gesproken woorden vallen: dicht (de twee titelwoorden zichtbaar) tot "scrollt
  // naar beneden, dan opent hij" -> open; op "scrollt terug, dan sluit hij weer" -> even dicht;
  // dan weer open en open blijven; en op "blijven bewegen" -> weer dicht zodat je de twee
  // uitkomstwoorden ziet. We gaan nooit exact naar 1, want dan zet de hero zichzelf op
  // "volledig uitgeklapt" en kan hij niet meer dicht.
  if (heromarks.length >= 3) {
    const [hOpen, hDicht, hTekst] = heromarks;
    heroZet(0);
    await wachtTot(hOpen);
    await animeerMet(1600, easeSinus, (t) => heroZet(0 + 0.92 * t));
    await wachtTot(hDicht);
    await animeerMet(1400, easeSinus, (t) => heroZet(0.92 + (0.3 - 0.92) * t));
    await animeerMet(1600, easeSinus, (t) => heroZet(0.3 + (0.92 - 0.3) * t));
    await wachtTot(hTekst);
    await animeerMet(1400, easeSinus, (t) => heroZet(0.92 + (0 - 0.92) * t));
    await wachtTot(grens[1]);
  } else {
    // Terugval: oude vaste choreografie aan het einde van het hero-blok.
    const HERO_OPEN_MS = 2600;
    const HERO_DICHT_MS = 1400;
    const HERO_HEROPEN_MS = 2200;
    const heroBewegingMs = HERO_OPEN_MS + HERO_DICHT_MS + HERO_HEROPEN_MS;
    await wacht(Math.max(0, hero * 1000 - heroBewegingMs));
    await animeerMet(HERO_OPEN_MS, easeSinus, (t) => heroZet(0 + 0.92 * t));
    await animeerMet(HERO_DICHT_MS, easeSinus, (t) => heroZet(0.92 + (0.3 - 0.92) * t));
    await animeerMet(HERO_HEROPEN_MS, easeSinus, (t) => heroZet(0.3 + (1 - 0.3) * t));
    await wachtTot(grens[1]);
  }

  // De heldenvideo bleef doordraaien terwijl we wegscrollen. De opnamebrowser heeft geen GPU,
  // dus dat decoderen vecht met de scroll. Hij heeft zijn werk gedaan, dus we zetten hem stil.
  try {
    document.querySelector("video")?.pause();
  } catch {}

  // 2) geruststelling: scroll tot de WhatsApp-knop op ~60% van het scherm staat.
  {
    const waKnop = Array.from(document.querySelectorAll("a")).find((a) =>
      ((a as HTMLAnchorElement).href || "").includes("wa.me")
    );
    let doelY = 620;
    if (waKnop) {
      const r = waKnop.getBoundingClientRect();
      doelY = Math.max(0, r.top + window.scrollY - window.innerHeight * 0.6);
    }
    await scrollNaarSnelheid(doelY);
    await wachtTot(grens[2]);
  }

  // 3) vertrouwen: de balk verticaal centreren zodat die echt het onderwerp in beeld is.
  {
    const el = document.getElementById("vertrouwen");
    let doelY = elementTop("vertrouwen");
    if (el) {
      const rest = Math.max(0, window.innerHeight - el.offsetHeight);
      doelY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - rest * 0.45);
    }
    await scrollNaarSnelheid(doelY);
    await wachtTot(grens[3]);
  }

  // 4) waar_heb_je_last_van. De kaarten verschijnen op scrollvoortgang binnen de vastgepinde
  // sectie. We scrollen meteen tot alle kaarten in beeld staan en HOUDEN dat vast terwijl de
  // stem herkenning en cognitive load uitlegt. Pas op klachtmark ("maar een rij kaarten") doen
  // we de heen-en-weer demo: kaarten 4-6 verdwijnen en komen terug. Zo begint de beweging niet
  // te vroeg, maar precies wanneer de stem over de kaarten praat.
  {
    const klachtenTop = elementTop("klachten");
    const klachtenEl = document.getElementById("klachten");
    const klachtenEchteTop = klachtenEl
      ? klachtenEl.getBoundingClientRect().top + window.scrollY
      : klachtenTop + HEADER_HOOGTE;
    const klachtenIntern = sectieInterneHoogte("klachten");
    await scrollNaarSnelheid(klachtenTop);
    if (klachtenIntern > 40) {
      const P_ALLES = 0.76;
      const P_TERUG = 0.35;
      const yAlles = klachtenEchteTop + klachtenIntern * P_ALLES;
      const yTerug = klachtenEchteTop + klachtenIntern * P_TERUG;
      await scrollNaarSnelheid(yAlles, SNELHEID_KAARTEN);
      // vasthouden tot de stem over de kaarten begint
      const demoStart = klachtmark > 0 ? klachtmark : grens[3] + (grens[4] - grens[3]) * 0.6;
      await wachtTot(demoStart);
      // heen-en-weer: kaarten 4-6 weg, even wachten, weer terug
      await scrollNaarSnelheid(yTerug, SNELHEID_KAARTEN);
      await wacht(1500);
      await scrollNaarSnelheid(yAlles, SNELHEID_KAARTEN);
      await wachtTot(grens[4]);
    } else {
      await wachtTot(grens[4]);
    }
  }

  // 5) reviews (rustigere overgang)
  await scrollNaarSnelheid(elementTop("reviews"), snelheidReviewsPxS);
  await wachtTot(grens[5]);

  // 6) herkenbaar: N punten in een vastgepinde sectie. Per punt kort naar het midden van de
  // band, dan stilstaan; de tijd tot de volgende sectie gelijk over de punten verdeeld.
  {
    const el = document.getElementById("herkenbaar");
    const top = elementTop("herkenbaar");
    await scrollNaarSnelheid(top);
    const echteTop = el ? el.getBoundingClientRect().top + window.scrollY : top + HEADER_HOOGTE;
    const totaal = el ? Math.max(0, el.offsetHeight - window.innerHeight) : 0;
    const N = el ? Math.max(1, Math.round(el.offsetHeight / window.innerHeight)) : 1;
    if (totaal > 40 && N > 1) {
      const band = totaal / N;
      for (let i = 0; i < N; i++) {
        const y = echteTop + band * i + band * 0.5;
        await scrollNaarSnelheid(y);
        // verdeel de resterende tijd tot grens[6] gelijk over de nog te tonen punten
        const overige = N - i;
        const doel = verstreken() / 1000 + (grens[6] - verstreken() / 1000) * (1 / overige);
        await wachtTot(doel);
      }
    }
    await wachtTot(grens[6]);
  }

  // 7) zo_werkt_het (aanpak)
  await scrollNaarSnelheid(elementTop("aanpak"));
  await wachtTot(grens[7]);

  // 8) team: lineaire drift door de sectie als die hoger is dan het scherm.
  {
    const top = elementTop("team");
    const intern = sectieInterneHoogte("team");
    await scrollNaarSnelheid(top);
    if (intern > 40) {
      const restMs = Math.max(0, grens[8] * 1000 - verstreken());
      await driftLineair(top, top + intern, restMs);
    }
    await wachtTot(grens[8]);
  }

  // 9) verzekering (vergoeding)
  await scrollNaarSnelheid(elementTop("vergoeding"));
  await wachtTot(grens[9]);

  // 10) faq
  await scrollNaarSnelheid(elementTop("faq"));
  await wachtTot(grens[10]);

  // 11) cta
  await scrollNaarSnelheid(elementTop("cta"));
  await wachtTot(grens[11]);
}

export function OpnameRegisseur() {
  const gestart = useRef(false);

  useEffect(() => {
    if (gestart.current) return;
    const fase = parseFase();
    if (fase.modus === "geen") return;
    gestart.current = true;
    document.documentElement.setAttribute("data-opname", "1");
    // globals.css zet html { scroll-behavior: smooth }. Daardoor animeert de browser elke
    // scrollTo van de regisseur zelf OOK nog eens naar het doel: twee animaties over elkaar.
    // In een gewone browser vangt de GPU dat op, in de opnamebrowser botsen ze en zie je
    // dat als haperen. In opnamemodus is de regisseur de enige die mag bewegen.
    document.documentElement.style.scrollBehavior = "auto";

    (async () => {
      await wachtOpMedia();
      await wacht(fase.start * 1000);
      if (fase.modus === "intro") {
        await draaiIntro(fase.open, fase.stil);
      } else if (fase.modus === "b") {
        await draaiDeelB(fase.duren, fase.heromarks, fase.klachtmark);
      }
      document.documentElement.setAttribute("data-opname-klaar", "1");
    })();
  }, []);

  return null;
}
