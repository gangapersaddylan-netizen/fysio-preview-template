import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { praktijk } from "@/content/praktijk";
import { OpnameRegisseur } from "@/components/anim/opname-regisseur";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument",
  display: "swap",
});

const isOverigMeta = ((praktijk as unknown) as { niche?: string }).niche === "overig";
const algemeneVervangingMeta = ((praktijk as unknown) as {
  algemeneVervanging?: { heroTekst?: string };
}).algemeneVervanging;

export const metadata: Metadata = {
  title: isOverigMeta
    ? `${praktijk.naam} — ${praktijk.plaats}`
    : `${praktijk.naam} — Fysiotherapie in ${praktijk.plaats}`,
  description: isOverigMeta
    ? algemeneVervangingMeta?.heroTekst ??
      "Een vaste therapeut, een behandelplan met een einddatum en binnen twee dagen je eerste afspraak. Zonder verwijzing van de huisarts."
    : "Een vaste therapeut, een behandelplan met een einddatum en binnen twee dagen je eerste afspraak. Zonder verwijzing van de huisarts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const kleuren = ((praktijk as unknown) as { kleuren?: { primair: string; donker: string; licht: string } }).kleuren ?? { primair: "#1b4de4", donker: "#1533a8", licht: "#e9eefd" };
  const kleurCss = ":root{--color-accent:" + kleuren.primair + ";--color-accent-soft:" + kleuren.licht + ";--color-accent-dark:" + kleuren.donker + ";--color-primary:" + kleuren.primair + ";--color-ring:" + kleuren.primair + ";}";

  return (
    <html lang="nl" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased"><style dangerouslySetInnerHTML={{ __html: kleurCss }} />{children}<OpnameRegisseur /></body>
    </html>
  );
}
