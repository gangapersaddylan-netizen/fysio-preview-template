import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


/** Focuspunt van een foto (0..1 vanaf linksboven), bepaald door de pipeline: waar het gezicht zit. */
export type FotoFocus = { x: number; y: number };

// Slimme foto-proxy: externe teamfoto's worden op tegelverhouding gesneden.
// Met een focuspunt (uit praktijk.fotoFocus) snijdt weserv rond het gezicht (a=focal);
// zonder focuspunt valt hij terug op aandacht-detectie, die bij boeken of riet naast het gezicht kan grijpen.
export function slimmeFoto(url: string, w: number, h: number, fit: "cover" | "contain" = "cover", focus?: FotoFocus | null): string {
  if (!url || url.startsWith("data:") || url.includes("res.cloudinary.com") || url.includes("images.weserv.nl")) return url;
  if (fit === "contain") {
    // Volledige afbeelding tonen (bv. team-collages of staande groepsfoto's): niet croppen.
    return "https://images.weserv.nl/?url=" + encodeURIComponent(url) + "&w=" + w + "&h=" + h + "&fit=contain&cbg=%23f4f1ea&output=jpg&q=82";
  }
  const klem = (v: number) => Math.min(1, Math.max(0, v));
  const uitlijning =
    focus && Number.isFinite(focus.x) && Number.isFinite(focus.y)
      ? "&a=focal&fpx=" + klem(focus.x).toFixed(3) + "&fpy=" + klem(focus.y).toFixed(3)
      : "&a=attention";
  return "https://images.weserv.nl/?url=" + encodeURIComponent(url) + "&w=" + w + "&h=" + h + "&fit=cover" + uitlijning + "&output=jpg&q=82";
}

/** Zoekt het focuspunt van een foto op in de map die de pipeline meegeeft (praktijk.fotoFocus). */
export function focusVoor(map: Record<string, FotoFocus> | undefined, url: string): FotoFocus | null {
  if (!map || !url) return null;
  const f = map[url];
  return f && Number.isFinite(f.x) && Number.isFinite(f.y) ? f : null;
}
