import { Link, useParams } from "react-router-dom";
import { getRegion } from "../data/regions";
import { SECTORS } from "../data/sectors";
import { btnPrimarySm } from "../components/ui/ButtonStyles";
import { MarketplaceNotice } from "../components/MarketplaceNotice";

export function RegionPage() {
  const { slug } = useParams<{ slug: string }>();
  const region = slug ? getRegion(slug) : undefined;

  if (!region) {
    return (
      <div className="mx-auto max-w-lg bg-[#f7f5f1] px-4 py-20 text-center">
        <h1 className="font-luxury-display text-2xl font-semibold text-[#152435]">Regione non trovata</h1>
        <Link to="/italia" className="premium-link mt-4 inline-block">
          Tutte le regioni
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#e1dbd1] bg-gradient-to-br from-[#152435] via-[#1e3a5f] to-[#0f172a] px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6B35]/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#8AB4CE]">
            <Link to="/italia" className="transition hover:text-white">
              Italia
            </Link>
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
            {region.name}
          </p>
          <h1 className="font-luxury-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
            Lavoro in {region.name}: annunci e incontro tra utenti
          </h1>
          <p className="mt-3 max-w-3xl text-sm font-semibold text-[#8AB4CE]">
            Lavoro48h è una bacheca digitale, non un&apos;agenzia per il lavoro: nessun collocamento; contratti di lavoro
            solo tra imprese e candidati.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">{region.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/registrazione/azienda" className={`${btnPrimarySm} px-6 py-3 text-base shadow-lg`}>
              Pubblica una ricerca (imprese)
            </Link>
            <Link
              to="/registrazione/candidato"
              className="inline-flex rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Registrati come candidato
            </Link>
            <Link to="/candidati" className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10">
              Cerca profili
            </Link>
          </div>
          <div className="mt-6 max-w-2xl">
            <MarketplaceNotice variant="darkHero" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-luxury-display text-xl font-semibold text-[#152435]">Verticali di settore</h2>
          <p className="mt-2 text-sm text-[#6b7a8d]">
            Pagine dedicate con messaggi per imprese e candidati — utili in combinazione con l&apos;area geografica.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/settori/${s.slug}`}
                  className="block rounded-xl border border-[#e1dbd1] bg-[#f7f5f1] px-4 py-3 text-sm font-semibold text-[#2C4A6E] transition hover:border-[#FF6B35]/40 hover:bg-white"
                >
                  {s.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#e1dbd1] bg-[#faf8f5] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-luxury-display text-xl font-semibold text-[#152435]">Risorse collegate</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#152435]/90">
            <li>
              <Link to="/blog/annuncio-lavoro-efficace-scrittura-selezione" className="premium-link font-semibold">
                Come scrivere un annuncio efficace
              </Link>
            </li>
            <li>
              <Link to="/blog/selezione-personale-pmi-processi-errori" className="premium-link font-semibold">
                Selezione del personale in PMI
              </Link>
            </li>
            <li>
              <Link to="/risorse/checklist-annuncio" className="premium-link font-semibold">
                Checklist prima di pubblicare un&apos;annuncio
              </Link>
            </li>
            <li>
              <Link to="/retribuzioni-orientative" className="premium-link font-semibold">
                Retribuzioni orientative di mercato
              </Link>
            </li>
            <li>
              <Link to="/faq" className="premium-link font-semibold">
                FAQ imprese e candidati
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
