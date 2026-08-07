"use client";

import { praktijk } from "@/content/praktijk";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";

export function Hero() {
  return (
    <div id="top">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={praktijk.heroVideo}
        title={praktijk.heroTitel}
        date={`Fysiotherapie in ${praktijk.plaats}`}
        scrollToExpand="Scroll om de video te openen"
        textBlend
      >
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="h2 text-white">
            Weer tillen, rennen en slapen zonder erover na te denken
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed text-white/80">
            Een vaste therapeut, een behandelplan met een einddatum en binnen
            twee dagen je eerste afspraak. Zonder verwijzing van de huisarts.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={praktijk.boekUrl}
              className={buttonVariants({ variant: "light", size: "lg" })}
            >
              Plan je intake
            </a>
            <a
              href={praktijk.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
              WhatsApp ons
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Online boeken kan ook &apos;s avonds. Bevestiging binnen een werkdag.
          </p>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
