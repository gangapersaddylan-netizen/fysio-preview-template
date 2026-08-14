"use client";

import { useEffect, useRef, useState } from "react";

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

export default function OpnameOudePagina() {
  const [src, setSrc] = useState<string | null>(null);
  const gestart = useRef(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setSrc(p.get("img"));
  }, []);

  useEffect(() => {
    if (gestart.current || !src) return;
    gestart.current = true;

    const p = new URLSearchParams(window.location.search);
    const duren = (p.get("duren") || "")
      .split(",")
      .map((x) => parseFloat(x))
      .filter((x) => !isNaN(x));
    const start = parseFloat(p.get("start") || "0.5");

    (async () => {
      await new Promise<void>((resolve) => {
        const img = document.getElementById("opname-img") as HTMLImageElement | null;
        if (img && img.complete) return resolve();
        img?.addEventListener("load", () => resolve(), { once: true });
        setTimeout(() => resolve(), 6000);
      });
      await wacht(start * 1000);

      const totaalScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (totaalScroll <= 0 || duren.length === 0) return;

      const grenzen = duren.map((_, i) => (totaalScroll * (i + 1)) / duren.length);
      let huidigeY = 0;
      for (let i = 0; i < duren.length; i++) {
        const doelY = grenzen[i];
        const scrollDuur = Math.min(3000, Math.max(600, duren[i] * 1000 * 0.25));
        await animeer(scrollDuur, (t) => {
          window.scrollTo(0, huidigeY + (doelY - huidigeY) * t);
        });
        huidigeY = doelY;
        const restMs = Math.max(0, duren[i] * 1000 - scrollDuur);
        await wacht(restMs);
      }
    })();
  }, [src]);

  if (!src) return null;

  return (
    <div style={{ margin: 0, padding: 0, background: "#fff" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="opname-img"
        src={src}
        alt=""
        style={{ display: "block", width: "100vw", height: "auto" }}
      />
    </div>
  );
}
