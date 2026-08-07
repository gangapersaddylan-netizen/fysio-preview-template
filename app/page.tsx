import { Header } from "@/components/secties/header";
import { Hero } from "@/components/secties/hero";
import { Trustbalk } from "@/components/secties/trustbalk";
import { Klachtselector } from "@/components/secties/klachtselector";
import { Reviews } from "@/components/secties/reviews";
import { Empathie } from "@/components/secties/empathie";
import { Aanpak } from "@/components/secties/aanpak";
import { Team } from "@/components/secties/team";
import { Vergoeding } from "@/components/secties/vergoeding";
import { Faq } from "@/components/secties/faq";
import { SlotCta } from "@/components/secties/slot-cta";
import { Footer } from "@/components/secties/footer";
import { Meetlat } from "@/components/secties/meetlat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trustbalk />
        <Klachtselector />
        <div className="mx-auto max-w-6xl px-5">
          <Meetlat />
        </div>
        <Reviews />
        <Empathie />
        <div className="mx-auto max-w-6xl px-5">
          <Meetlat />
        </div>
        <Aanpak />
        <Team />
        <Vergoeding />
        <Faq />
        <SlotCta />
      </main>
      <Footer />
    </>
  );
}
