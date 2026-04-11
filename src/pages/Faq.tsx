import { useMemo } from "react";
import { FAQ_EMPRESA, FAQ_LAVORATORE } from "../data/faqContent";
import { buildFaqPageStructuredData } from "../data/faqPageJsonLd";
import { Link } from "react-router-dom";

const FAQ_HERO_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85&auto=format&fit=crop";

export function Faq() {
  const faqJsonLd = useMemo(() => JSON.stringify(buildFaqPageStructuredData()), []);

  return (
    <div className="luxury-page font-luxury-sans pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FAQ_HERO_IMG}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#152435]/95 via-[#1e3a5f]/85 to-[#152435]/75" />
          <div
            className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-300/90">
            Supporto &amp; chiarezza
          </p>
          <h1 className="font-luxury-display mt-4 max-w-3xl text-4xl font-light leading-[1.12] text-white sm:text-5xl md:text-[3.15rem]">
            Domande frequenti per{" "}
            <span className="font-semibold italic text-amber-100">imprese</span> e{" "}
            <span className="font-semibold italic text-amber-100">candidati</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/55">
            Risposte divulgative ai dubbi più ricorrenti su selezione, privacy, colloqui e contratti. Non sostituiscono
            consulenza legale: per casi specifici rivolgersi a professionisti abilitati.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/40">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              {FAQ_EMPRESA.length} domande · Imprese
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              {FAQ_LAVORATORE.length} domande · Lavoratori
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Separatore decorativo */}
        <div className="-mt-6 flex justify-center sm:-mt-8">
          <div className="flex h-12 w-full max-w-md items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-600/50 to-amber-600/30" />
            <span className="font-luxury-display text-lg italic text-amber-800/80">Lavoro48h</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-600/50 to-amber-600/30" />
          </div>
        </div>

        <section className="mt-14" aria-labelledby="faq-aziende">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="faq-aziende" className="font-luxury-display text-3xl font-semibold text-[#152435]">
                Imprese, HR e selezione
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Processi, documentazione e buone pratiche per chi assume.
              </p>
            </div>
            <div className="hidden h-px w-32 bg-gradient-to-r from-amber-600/40 to-transparent sm:block" aria-hidden />
          </div>

          <div className="mt-8 space-y-3">
            {FAQ_EMPRESA.map((item) => (
              <details
                key={item.id}
                className="group overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm open:shadow-md open:ring-1 open:ring-amber-900/10"
              >
                <summary className="cursor-pointer list-none px-5 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-luxury-display text-lg font-semibold leading-snug text-[#152435]">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1dbd1] bg-[#faf8f5] text-amber-800 transition group-open:rotate-180"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-[#ece8e0] bg-gradient-to-b from-[#faf9f7] to-white px-5 py-4">
                  <p className="text-sm leading-relaxed text-slate-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="my-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200" />
          <span className="rounded-full border border-[#e1dbd1] bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Due mondi, un servizio
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200" />
        </div>

        <section aria-labelledby="faq-lavoratori">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="faq-lavoratori" className="font-luxury-display text-3xl font-semibold text-[#152435]">
                Lavoratori e candidati
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                CV, colloqui, diritti e aspettative in fase di ricerca.
              </p>
            </div>
            <div className="hidden h-px w-32 bg-gradient-to-r from-[#FF6B35]/30 to-transparent sm:block" aria-hidden />
          </div>

          <div className="mt-8 space-y-3">
            {FAQ_LAVORATORE.map((item) => (
              <details
                key={item.id}
                className="group overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm open:shadow-md open:ring-1 open:ring-[#2C4A6E]/10"
              >
                <summary className="cursor-pointer list-none px-5 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-luxury-display text-lg font-semibold leading-snug text-[#152435]">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e1dbd1] bg-[#faf8f5] text-[#2C4A6E] transition group-open:rotate-180"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-[#ece8e0] bg-gradient-to-b from-[#f6fffd] to-white px-5 py-4">
                  <p className="text-sm leading-relaxed text-slate-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[#152435] bg-[#152435] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-amber-600 hover:text-[#152435]"
          >
            Approfondimenti nel blog
          </Link>
        </div>
      </div>
    </div>
  );
}
