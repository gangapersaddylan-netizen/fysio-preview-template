"use client";

import { praktijk } from "@/content/praktijk";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";

// Cloudinary-optimalisatie: kleinere/snellere video + direct zichtbare poster (eerste frame)
function snelleVideo(url: string): string {
  return url.includes("/video/upload/") && !url.includes("/video/upload/q_")
    ? url.replace("/video/upload/", "/video/upload/q_auto,vc_auto,w_1440/")
    : url;
}
function videoPoster(url: string): string | undefined {
  return url.includes("/video/upload/")
    ? url.replace("/video/upload/", "/video/upload/so_0,w_1200,q_auto/").replace(/\.mp4($|\?)/, ".jpg$1")
    : undefined;
}

export function Hero() {
  return (
    <div id="top">
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={snelleVideo(praktijk.heroVideo)}
        posterSrc={videoPoster(praktijk.heroVideo)}
        title={praktijk.heroTitel}
        date={`Fysiotherapie in ${praktijk.plaats}`}
        scrollToExpand="Scroll om de video te openen"
        textBlend
      >
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="h2 text-white">
            {((praktijk as unknown) as { algemeneVervanging?: { heroKop?: string } }).algemeneVervanging?.heroKop ??
              "Weer tillen, rennen en slapen zonder erover na te denken"}
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg leading-relaxed text-white/80">
            {((praktijk as unknown) as { algemeneVervanging?: { heroTekst?: string } }).algemeneVervanging?.heroTekst ??
              "Een vaste therapeut, een behandelplan met een einddatum en binnen twee dagen je eerste afspraak. Zonder verwijzing van de huisarts."}
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
