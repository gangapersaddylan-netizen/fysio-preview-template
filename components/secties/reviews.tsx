import { praktijk, type Review } from "@/content/praktijk";
import { Reveal } from "@/components/anim/reveal";
import { Stars } from "@/components/ui/stars";

function initialen(naam: string) {
  return naam
    .split(" ")
    .map((d) => d[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function ReviewKaart({ r }: { r: Review }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col rounded-[18px] border border-line bg-card p-6">
      <Stars value={r.sterren} />
      <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
        {r.quote}
      </blockquote>
      <hr className="my-5 border-line" />
      <figcaption className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-accent">
          {initialen(r.naam)}
        </span>
        <span className="text-sm">
          <span className="block font-medium text-ink">{r.naam}</span>
          <span className="block text-muted">
            {r.klacht}, {r.plaats}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Rij({ reviews, reverse }: { reviews: Review[]; reverse?: boolean }) {
  const set = [0, 1, 2, 3];
  return (
    <div className="marquee">
      <div className={`marquee-track gap-4 ${reverse ? "reverse" : ""}`}>
        {set.map((s) =>
          reviews.map((r, i) => <ReviewKaart key={`${s}-${i}`} r={r} />)
        )}
      </div>
    </div>
  );
}

export function Reviews() {
  const zichtbaar = praktijk.reviews.filter((r) => r.toestemming);
  const helft = Math.ceil(zichtbaar.length / 2);
  const rijEen = zichtbaar.slice(0, helft);
  const rijTwee = zichtbaar.slice(helft).concat(zichtbaar.slice(0, helft));

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-titel"
      className="border-y border-line bg-paper py-16 lg:py-24"
    >
      <div className="mx-auto mb-10 max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Geverifieerd via Google</p>
          <h2 id="reviews-titel" className="h2 mt-3 text-ink">
            Wat onze patiënten zeggen
          </h2>
        </Reveal>
      </div>

      <div className="relative flex flex-col gap-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
          style={{
            background: "linear-gradient(to right, var(--color-paper), transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
          style={{
            background: "linear-gradient(to left, var(--color-paper), transparent)",
          }}
        />
        <Rij reviews={rijEen} />
        <Rij reviews={rijTwee} reverse />
      </div>
    </section>
  );
}
