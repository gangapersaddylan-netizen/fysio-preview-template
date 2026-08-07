import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { praktijk } from "@/content/praktijk";
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

export const metadata: Metadata = {
  title: `${praktijk.naam} — Fysiotherapie in ${praktijk.plaats}`,
  description:
    "Een vaste therapeut, een behandelplan met een einddatum en binnen twee dagen je eerste afspraak. Zonder verwijzing van de huisarts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
