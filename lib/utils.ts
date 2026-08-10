import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Slimme foto-proxy: externe teamfoto's worden op tegelverhouding gesneden met aandacht-detectie (gezichten blijven in beeld).
export function slimmeFoto(url: string, w: number, h: number, fit: "cover" | "contain" = "cover"): string {
  if (!url || url.startsWith("data:") || url.includes("res.cloudinary.com") || url.includes("images.weserv.nl")) return url;
  if (fit === "contain") {
    // Volledige afbeelding tonen (bv. team-collages of staande groepsfoto's): niet croppen.
    return "https://images.weserv.nl/?url=" + encodeURIComponent(url) + "&w=" + w + "&h=" + h + "&fit=contain&cbg=%23f4f1ea&output=jpg&q=82";
  }
  return "https://images.weserv.nl/?url=" + encodeURIComponent(url) + "&w=" + w + "&h=" + h + "&fit=cover&a=attention&output=jpg&q=82";
}
