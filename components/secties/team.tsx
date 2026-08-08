"use client";

import { ArrowRight } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { slimmeFoto } from "@/lib/utils";
import { Reveal, RevealCard } from "@/components/anim/reveal";
import { buttonVariants } from "@/components/ui/button";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export function Team() {
  const uitgelicht = praktijk.team.filter((t) => t.uitgelicht).slice(0, 6);

  const images = [
    { src: slimmeFoto(praktijk.teamShowcase.groepsfoto, 700, 420), alt: `Het team van ${praktijk.naam}` },
    ...uitgelicht.map((lid) => ({ src: slimmeFoto(lid.foto, 700, 420), alt: lid.naam })),
  ];

  return (
    <section id="team" aria-labelledby="team-titel">
      <div className="mx-auto max-w-6xl px-5 pt-16 lg:pt-24">
        <Reveal>
          <p className="eyebrow">Het team</p>
          <h2 id="team-titel" className="h2 mt-3 text-ink">
            Je weet vooraf wie je behandelt
          </h2>
          <p className="lead mt-4">
            Vaste therapeut van intake tot laatste afspraak. Geen wisselende
            gezichten, geen verhaal dat je elke keer opnieuw moet doen.
          </p>
        </Reveal>
      </div>

      <ZoomParallax images={images} />

      <div className="mx-auto max-w-6xl px-5 pb-16 lg:pb-24">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {uitgelicht.map((lid, i) => (
            <RevealCard key={lid.naam} delay={i * 0.07}>
              <figure>
                <div className="overflow-hidden rounded-[16px] border border-line bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slimmeFoto(lid.foto, 600, 750)}
                    alt={lid.naam}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="h3 text-ink">{lid.naam}</p>
                  <p className="mt-0.5 text-sm text-accent">{lid.functie}</p>
                  <p className="mt-0.5 text-sm text-muted">{lid.specialisatie}</p>
                </figcaption>
              </figure>
            </RevealCard>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Reveal>
            <a
              href="/team"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Bekijk het hele team van {praktijk.team.length}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
