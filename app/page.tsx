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
import { OpnameRegisseur } from "@/components/opname-regisseur";

export default function Home() {
  return (
    <>
      <OpnameRegisseur />
      <Header />
      <main>
        <div data-opname="hero"><Hero /></div>
        <div data-opname="vertrouwen"><Trustbalk /></div>
        <div data-opname="waar_heb_je_last_van">
          <Klachtselector />
          <div className="mx-auto max-w-6xl px-5">
            <Meetlat />
          </div>
        </div>
        <div data-opname="reviews"><Reviews /></div>
        <div data-opname="herkenbaar">
          <Empathie />
          <div className="mx-auto max-w-6xl px-5">
            <Meetlat />
          </div>
        </div>
        <div data-opname="zo_werkt_het"><Aanpak /></div>
        <div data-opname="team"><Team /></div>
        <div data-opname="verzekering"><Vergoeding /></div>
        <div data-opname="faq"><Faq /></div>
        <div data-opname="cta"><SlotCta /></div>
      </main>
      <Footer />
    </>
  );
}
