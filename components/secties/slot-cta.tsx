"use client";

import { praktijk } from "@/content/praktijk";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "@/components/anim/reveal";
import { buttonVariants } from "@/components/ui/button";

const HEADER_FADE =
  "linear-gradient(to bottom, #f7f5f0 0%, #8ea6ec 55%, #3f6ee3 100%)";

export function SlotCta() {
  return (
    <section aria-labelledby="slot-titel" className="px-5 py-16 lg:py-24">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] px-6 py-16 text-ink lg:px-16 lg:py-24"
        style={{ background: HEADER_FADE }}
      >
        <Reveal className="relative max-w-2xl">
          <p className="eyebrow">Klaar om te beginnen</p>
          <h2 id="slot-titel" className="h2 mt-3 text-ink">
            Volgende week deze tijd ben je al bezig met het &quot;Pijnvrij
            plan&quot;
          </h2>
          <p className="mt-4 max-w-[46ch] text-ink-soft">
            Plan je intake online, ook &apos;s avonds. Of bel ons even als je
            eerst wil weten of wij de juiste plek voor je zijn.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
