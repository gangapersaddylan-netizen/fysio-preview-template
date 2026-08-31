"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { Reveal } from "@/components/anim/reveal";

type VergoedingVervanger = {
  eyebrow?: string;
  titel?: string;
  punten?: { titel: string; tekst: string }[];
  ctaTekst?: string;
};

export function Vergoeding() {
  // Hook altijd bovenaan en onvoorwaardelijk aanroepen (rules-of-hooks) - ook in de niet-fysio
  // tak hieronder, ook al wordt hij daar niet gebruikt, blijft de aanroeper-volgorde zo altijd gelijk.
  const [gekozen, setGekozen] = useState<string>("");

  const uitgebreid = (praktijk as unknown) as {
    niche?: string;
    vergoedingVervanger?: VergoedingVervanger | null;
  };

  // Niet-fysio praktijken hebben geen zorgverzekeraars: in plaats van de verzekeraar-kiezer
  // hieronder tonen we hier het sterkste vertrouwenspunt dat uit hun eigen site komt (31-08-2026,
  // afgesproken met Dylan). Zelfde sectie-id en dezelfde plek op de pagina, dus de scroll-opname
  // (W5) hoeft dit niet apart te weten.
  if (uitgebreid.niche === "overig" && uitgebreid.vergoedingVervanger) {
    const { eyebrow, titel, punten, ctaTekst } = uitgebreid.vergoedingVervanger;
    return (
      <section
        id="vergoeding"
        aria-labelledby="vergoeding-titel"
        className="border-y border-line bg-card"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">{eyebrow || "Waarom dit werkt"}</p>
            <h2 id="vergoeding-titel" className="h2 mt-3 text-ink">
              {titel || ""}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex max-w-2xl flex-col gap-6">
              {(punten || []).map((p) => (
                <li key={p.titel} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="block h3 text-ink">{p.titel}</span>
                    <span className="mt-1 block text-ink-soft">{p.tekst}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {ctaTekst && (
            <a
              href={praktijk.boekUrl}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-medium text-white transition-all hover:brightness-110"
            >
              {ctaTekst}
            </a>
          )}
        </div>
      </section>
    );
  }

  const { feiten, verzekeraars, disclaimer } = praktijk.vergoeding;

  const actief = verzekeraars.find((v) => v.naam === gekozen);
  const gecontracteerd = verzekeraars.filter((v) => v.gecontracteerd);

  return (
    <section
      id="vergoeding"
      aria-labelledby="vergoeding-titel"
      className="border-y border-line bg-card"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">Kosten en vergoeding</p>
          <h2 id="vergoeding-titel" className="h2 mt-3 text-ink">
            Krijg je dit vergoed? Bijna altijd wel
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="flex flex-col gap-6">
              {feiten.map((f) => (
                <li key={f.titel} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="block h3 text-ink">{f.titel}</span>
                    <span className="mt-1 block text-ink-soft">{f.tekst}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[18px] border border-line bg-paper p-6">
              <label
                htmlFor="verzekeraar"
                className="block text-sm font-medium text-ink"
              >
                Bij welke verzekeraar zit je?
              </label>
              <div className="relative mt-2">
                <select
                  id="verzekeraar"
                  value={gekozen}
                  onChange={(e) => setGekozen(e.target.value)}
                  className="w-full appearance-none rounded-full border border-line bg-card px-4 py-3 pr-10 text-ink transition-colors hover:border-accent focus-visible:outline-none"
                >
                  <option value="">Kies je verzekeraar…</option>
                  {verzekeraars.map((v) => (
                    <option key={v.naam} value={v.naam}>
                      {v.naam}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>

              <div role="status" aria-live="polite" className="mt-4">
                {actief && (
                  <div
                    className={`rounded-[12px] border p-4 text-sm ${
                      actief.gecontracteerd
                        ? "border-accent/30 bg-accent-soft text-ink"
                        : "border-amber/40 bg-amber/10 text-ink"
                    }`}
                  >
                    <p className="flex items-center gap-2 font-medium">
                      {actief.gecontracteerd ? (
                        <>
                          <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
                          Wij hebben een contract met {actief.naam}
                        </>
                      ) : (
                        <>Geen contract met {actief.naam}</>
                      )}
                    </p>
                    <p className="mt-1.5 text-ink-soft">{actief.toelichting}</p>
                  </div>
                )}
              </div>

              <a
                href={praktijk.boekUrl}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-medium text-white transition-all hover:brightness-110"
              >
                Laat het gratis uitzoeken
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {gecontracteerd.map((v) => (
            <span
              key={v.naam}
              className="logo-grey flex h-11 items-center rounded-[10px] border border-line bg-card px-4 text-sm font-medium text-ink-soft"
            >
              {v.naam}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-[70ch] text-xs leading-relaxed text-muted">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
