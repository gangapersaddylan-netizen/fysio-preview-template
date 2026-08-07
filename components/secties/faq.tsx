import { Plus } from "lucide-react";
import { praktijk } from "@/content/praktijk";
import { Reveal } from "@/components/anim/reveal";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titel"
      className="mx-auto max-w-3xl px-5 py-16 lg:py-24"
    >
      <Reveal>
        <p className="eyebrow">Voor je belt</p>
        <h2 id="faq-titel" className="h2 mt-3 text-ink">
          Vragen die we vaak krijgen
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {praktijk.faq.map((item, i) => (
          <details
            key={i}
            open={i === 0}
            className="group py-1"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left">
              <span className="h3 text-lg text-ink">{item.vraag}</span>
              <span className="faq-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="pb-5 pr-12 text-ink-soft">{item.antwoord}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
