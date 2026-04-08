import { TESTIMONIALS } from "../data/testimonials";

function Stars() {
  return (
    <span className="flex gap-0.5 text-[#FFB84D]" aria-label="5 stelle su 5">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </span>
  );
}

export function TestimonialsMarquee() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="border-t border-[#e1dbd1] bg-gradient-to-b from-[#f7f5f1] to-white py-14 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#3A5F8C]">Feedback</p>
        <h2
          id="testimonials-heading"
          className="font-luxury-display mt-3 text-center text-3xl font-semibold text-[#152435] sm:text-4xl"
        >
          Cosa dicono le aziende
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#6b7a8d]">
          Rapidità, chiarezza e facilità nel trovare personale.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f5f1] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap py-2">
          {row.map((t, i) => (
            <figure
              key={`${t.author}-${i}`}
              className="mx-3 inline-block w-[min(100vw-2rem,320px)] shrink-0 whitespace-normal rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-md"
            >
              <Stars />
              <blockquote className="mt-3 text-sm leading-relaxed text-[#152435]/85">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-[#152435]">{t.author}</figcaption>
              <p className="text-xs text-[#6b7a8d]">{t.role}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
