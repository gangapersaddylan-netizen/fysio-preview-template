"use client";

import { praktijk } from "@/content/praktijk";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { Reveal, RevealCard } from "@/components/anim/reveal";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { buttonVariants } from "@/components/ui/button";

const fotoLabels = [
  "Foto: intakegesprek",
  "Foto: behandelplan",
  "Foto: oefenzaal",
];

const stagger = ["lg:mt-0", "lg:mt-[34px]", "lg:mt-[68px]"];

export function Aanpak() {
  return (
    <section
      id="aanpak"
      aria-labelledby="aanpak-titel"
      className="mx-auto max-w-6xl px-5 py-16 lg:py-24"
    >
      <Reveal>
        <p className="eyebrow">Zo werkt het</p>
        <h2 id="aanpak-titel" className="h2 mt-3 text-ink">
          {((praktijk as unknown) as { stappenKop?: string }).stappenKop ?? "Van je eerste afspraak tot weer kunnen wat je wilt zonder pijn"}
        </h2>
        <p className="lead mt-4">
          {((praktijk as unknown) as { stappenSub?: string }).stappenSub ?? "Je weet vooraf wat er gebeurt, hoeveel tijd het kost en waar we naartoe werken."}
        </p>
      </Reveal>

      <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
        {praktijk.stappen.map((ruweStap, i) => {
          const stap = ruweStap as { titel: string; tekst: string; duur: string; foto?: string; video?: string };
          return (
          <RevealCard
            as="li"
            key={i}
            delay={i * 0.15}
            className={stagger[i]}
          >
            <div className="relative overflow-hidden rounded-[18px] border border-line bg-ink">
              {stap.video ? (
                <video
                  className="aspect-[4/3] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={stap.video} type="video/mp4" />
                </video>
              ) : (
                <MediaPlaceholder
                  label={fotoLabels[i]}
                  className="aspect-[4/3] w-full"
                />
              )}
            </div>
            <p className="eyebrow mt-5">
              {((praktijk as unknown) as { stappenModus?: string }).stappenModus === "aanbod" ? stap.duur : <>Stap {i + 1} &nbsp;/&nbsp; {stap.duur}</>}
            </p>
            <h3 className="h3 mt-2 text-lg text-ink">{stap.titel}</h3>
            <p className="mt-2 text-ink-soft">{stap.tekst}</p>
          </RevealCard>
          );
        })}
      </ol>

      <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href={praktijk.boekUrl}
          className={buttonVariants({ variant: "primary", size: "lg" })}
        >
          Plan je intake
        </a>
        <a
          href={praktijk.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
          WhatsApp ons
        </a>
      </Reveal>
    </section>
  );
}
