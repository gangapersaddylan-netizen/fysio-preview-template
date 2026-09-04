import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/** Focuspunt van een foto (0..1 vanaf linksboven), bepaald door de pipeline: waar het gezicht zit. */
export type FotoFocus = { x: number; y: number };

/** Exacte uitsnede in bronpixels (weserv precrop), per formaat berekend en gecontroleerd door de pipeline. */
export type FotoUitsnede = { cx: number; cy: number; cw: number; ch: number };
export type FotoUitsnedeSet = { tegel?: FotoUitsnede; kaart?: FotoUitsnede; cover?: FotoUitsnede };

// Slimme foto-proxy: externe teamfoto's worden op tegelverhouding gesneden.
// 1. Met een gecontroleerde uitsnede (praktijk.fotoUitsnede, sinds 04-09-2026) snijdt weserv EXACT dat
//    pixelvenster uit (precrop) en schaalt daarna: het gezicht staat dan gegarandeerd waar de pipeline het
//    heeft gecontroleerd. Dit is de enige route die gezichten garandeert.
// 2. Anders, met een focuspunt (praktijk.fotoFocus, oudere content): weserv a=focal. Let op: fpx/fpy is bij
//    weserv de positie van het venster (0 = links/boven, 1 = rechts/onder), niet de positie van het gezicht.
// 3. Zonder beide: aandacht-detectie, die bij boeken of riet naast het gezicht kan grijpen.
export function slimmeFoto(url: string, w: number, h: number, fit: "cover" | "contain" = "cover", focus?: FotoFocus | null, uitsnede?: FotoUitsnede | null): string {
  if (!url || url.startsWith("data:") || url.includes("res.cloudinary.com") || url.includes("images.weserv.nl")) return url;
  const basis = "https://images.weserv.nl/?url=" + encodeURIComponent(url);
  if (fit === "contain") {
    // Volledige afbeelding tonen (bv. team-collages of staande groepsfoto's): niet croppen.
    return basis + "&w=" + w + "&h=" + h + "&fit=contain&cbg=%23f4f1ea&output=jpg&q=82";
  }
  if (uitsnede && [uitsnede.cx, uitsnede.cy, uitsnede.cw, uitsnede.ch].every((v) => Number.isFinite(v)) && uitsnede.cw > 0 && uitsnede.ch > 0) {
    return basis + "&cx=" + Math.round(uitsnede.cx) + "&cy=" + Math.round(uitsnede.cy) + "&cw=" + Math.round(uitsnede.cw) + "&ch=" + Math.round(uitsnede.ch) + "&precrop&w=" + w + "&h=" + h + "&fit=cover&output=jpg&q=82";
  }
  const klem = (v: number) => Math.min(1, Math.max(0, v));
  const uitlijning =
    focus && Number.isFinite(focus.x) && Number.isFinite(focus.y)
      ? "&a=focal&fpx=" + klem(focus.x).toFixed(3) + "&fpy=" + klem(focus.y).toFixed(3)
      : "&a=attention";
  return basis + "&w=" + w + "&h=" + h + "&fit=cover" + uitlijning + "&output=jpg&q=82";
}

/** Zoekt het focuspunt van een foto op in de map die de pipeline meegeeft (praktijk.fotoFocus). */
export function focusVoor(map: Record<string, FotoFocus> | undefined, url: string): FotoFocus | null {
  if (!map || !url) return null;
  const f = map[url];
  return f && Number.isFinite(f.x) && Number.isFinite(f.y) ? f : null;
}

/** Zoekt de gecontroleerde uitsnede van een foto op voor een formaat (praktijk.fotoUitsnede). */
export function uitsnedeVoor(map: Record<string, FotoUitsnedeSet> | undefined, url: string, formaat: keyof FotoUitsnedeSet): FotoUitsnede | null {
  if (!map || !url) return null;
  const set = map[url];
  const u = set ? set[formaat] : undefined;
  return u && Number.isFinite(u.cx) && Number.isFinite(u.cy) && Number.isFinite(u.cw) && Number.isFinite(u.ch) ? u : null;
}
