"use client";

/* ============================================================
   PREVIEW-TIMER (07-10-2026)
   Sticky balk bovenaan die aftelt van 7 dagen vanaf het moment
   dat de preview gebouwd is (NEXT_PUBLIC_PREVIEW_GEMAAKT_OP,
   gezet in next.config.ts bij elke build). Na afloop legt hij
   een scherm over de pagina: de preview is offline.
   - Overschrijven per klant: zet in content/praktijk.ts het veld
     `previewVerlooptOp` (ISO-datum), bijv. om hem te verlengen.
   - In de opnamestand (?opname=...) doet hij niets, zodat de
     video's schoon blijven en de regie niet verschuift.
   ============================================================ */

import { useEffect, useState } from "react";
import { praktijk } from "@/content/praktijk";

const DUUR_MS = 7 * 24 * 60 * 60 * 1000;
const HOOGTE = 40;

function eindMoment(): number | null {
  const override = ((praktijk as unknown) as { previewVerlooptOp?: string }).previewVerlooptOp;
  if (override) {
    const t = Date.parse(override);
    if (!isNaN(t)) return t;
  }
  const gemaakt = process.env.NEXT_PUBLIC_PREVIEW_GEMAAKT_OP;
  if (!gemaakt) return null;
  const t = Date.parse(gemaakt);
  return isNaN(t) ? null : t + DUUR_MS;
}

function tweeCijfers(n: number) {
  return String(n).padStart(2, "0");
}

export function PreviewTimer() {
  const [eind, setEind] = useState<number | null>(null);
  const [nu, setNu] = useState<number>(0);
  const [actief, setActief] = useState(false);

  useEffect(() => {
    const opname = new URLSearchParams(window.location.search).has("opname");
    const e = eindMoment();
    if (opname || e === null) return;
    setEind(e);
    setNu(Date.now());
    setActief(true);
    const id = window.setInterval(() => setNu(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!actief) return;
    document.documentElement.style.setProperty("--timerbalk-h", HOOGTE + "px");
    return () => {
      document.documentElement.style.removeProperty("--timerbalk-h");
    };
  }, [actief]);

  if (!actief || eind === null) return null;

  const rest = Math.max(0, eind - nu);

  if (rest <= 0) {
    return (
      <div
        role="alertdialog"
        aria-labelledby="preview-offline-kop"
        className="fixed inset-0 z-[200] flex items-center justify-center px-6"
        style={{ background: "var(--color-paper, #f7f5f0)" }}
      >
        <div className="max-w-md text-center">
          <h1 id="preview-offline-kop" className="display text-3xl text-ink">
            Deze preview is offline
          </h1>
          <p className="mt-4 text-ink-soft">
            De voorbeeldsite voor {praktijk.naam} stond 7 dagen online en is nu verlopen. Wil je hem
            toch nog zien, stuur dan even een bericht, dan zet ik hem weer voor je aan.
          </p>
        </div>
      </div>
    );
  }

  const dagen = Math.floor(rest / 86400000);
  const uren = Math.floor((rest % 86400000) / 3600000);
  const minuten = Math.floor((rest % 3600000) / 60000);
  const seconden = Math.floor((rest % 60000) / 1000);

  return (
    <div
      role="status"
      aria-live="off"
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-2 px-4 text-center text-[13px] font-medium text-white sm:text-sm"
      style={{ height: HOOGTE, background: "var(--color-accent-dark, #1533a8)" }}
    >
      <span className="hidden sm:inline">Persoonlijke preview voor {praktijk.naam}.</span>
      <span>
        Gaat offline over{" "}
        <span className="tabular-nums">
          {dagen} {dagen === 1 ? "dag" : "dagen"} {tweeCijfers(uren)}:{tweeCijfers(minuten)}:{tweeCijfers(seconden)}
        </span>
      </span>
    </div>
  );
}
