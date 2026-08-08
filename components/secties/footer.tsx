import { Phone } from "lucide-react";
import { praktijk } from "@/content/praktijk";

const HEADER_FADE =
  "linear-gradient(to bottom, #f7f5f0 0%, var(--color-accent-grad-soft) 55%, var(--color-accent-grad) 100%)";

export function Footer() {
  return (
    <footer className="text-ink-soft" style={{ background: HEADER_FADE }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-lg text-ink">{praktijk.naam}</p>
          <p className="mt-3 text-sm">
            Fysiotherapie in {praktijk.plaats}. Een vaste therapeut en een plan
            met een einddatum.
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <p className="mb-3 font-medium text-ink">Op deze pagina</p>
          <ul className="flex flex-col gap-2">
            <li><a href="#klachten" className="hover:text-ink">Klachten</a></li>
            <li><a href="#aanpak" className="hover:text-ink">Aanpak</a></li>
            <li><a href="#team" className="hover:text-ink">Team</a></li>
            <li><a href="#vergoeding" className="hover:text-ink">Vergoeding</a></li>
            <li><a href="#faq" className="hover:text-ink">Veelgestelde vragen</a></li>
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-3 font-medium text-ink">Contact</p>
          <a
            href={praktijk.telefoonHref}
            className="flex items-center gap-2 hover:text-ink"
          >
            <Phone className="h-4 w-4" />
            {praktijk.telefoon}
          </a>
          <a
            href={praktijk.boekUrl}
            className="mt-2 inline-block hover:text-ink"
          >
            Online een afspraak maken
          </a>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium text-ink">Goed om te weten</p>
          <ul className="flex flex-col gap-2">
            <li>Geen verwijzing nodig</li>
            <li>BIG geregistreerd</li>
            <li>Kwaliteitsregister Fysiotherapie</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {praktijk.vergoeding.peiljaar} {praktijk.naam}. Alle rechten
            voorbehouden.
          </p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Algemene voorwaarden</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
