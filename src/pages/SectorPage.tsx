import { Link, useParams } from "react-router-dom";
import { getSector } from "../data/sectors";
import { RoleAvatar } from "../components/RoleAvatar";
import { btnPrimarySm } from "../components/ui/ButtonStyles";

const demoCandidates = [
  { initials: "M.R.", exp: "5 anni", stato: "Disponibile subito", top: true, hours: 32 },
  { initials: "L.B.", exp: "2 anni", stato: "Valutando offerte", top: false, hours: 18 },
  { initials: "G.T.", exp: "8 anni", stato: "Occupato ma interessato", top: true, hours: 41 },
  { initials: "A.F.", exp: "1 anno", stato: "Disponibile subito", top: false, hours: 8 },
];

export function SectorPage() {
  const { slug } = useParams<{ slug: string }>();
  const sector = slug ? getSector(slug) : undefined;

  if (!sector) {
    return (
      <div className="mx-auto max-w-lg bg-[#f7f5f1] px-4 py-20 text-center">
        <h1 className="font-luxury-display text-2xl font-semibold text-[#152435]">Settore non trovato</h1>
        <Link to="/" className="premium-link mt-4 inline-block">
          Torna alla home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#e1dbd1] bg-gradient-to-br from-[#152435] via-[#1e3a5f] to-[#0f172a] px-4 py-14 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6B35]/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#8AB4CE]">{sector.title}</p>
          <h1 className="font-luxury-display mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {sector.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{sector.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/registrazione#azienda"
              className={`${btnPrimarySm} px-6 py-3 text-base shadow-lg`}
            >
              {sector.cta}
            </Link>
            <Link
              to="/registrazione#candidato"
              className="inline-flex rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Registrati come candidato
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-0 border-y border-[#e1dbd1] bg-white lg:grid-cols-2">
        <div className="border-b border-[#e1dbd1] p-8 lg:border-b-0 lg:border-r lg:p-12">
          <h2 className="text-lg font-bold text-[#991b1b]">Problema</h2>
          <ul className="mt-4 space-y-3 text-[#152435]/90">
            {sector.problems.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-red-400" aria-hidden>
                  •
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 lg:p-12">
          <h2 className="text-lg font-bold text-[#2C4A6E]">Soluzione</h2>
          <ul className="mt-4 space-y-3 text-[#152435]/90">
            {sector.solutions.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-[#FF6B35]" aria-hidden>
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7f5f1] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-luxury-display text-2xl font-semibold text-[#152435]">Candidati in evidenza</h2>
              <p className="mt-1 text-[#6b7a8d]">Iniziali, stato e disponibilità come in piattaforma.</p>
            </div>
            <p className="rounded-lg bg-[#FF6B35]/15 px-3 py-2 text-sm font-medium text-[#9a3412] ring-1 ring-[#FF6B35]/30">
              Timer 48h: contatta in tempo
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {demoCandidates.map((c) => (
              <article
                key={c.initials}
                className="flex gap-4 rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm"
              >
                <RoleAvatar hint={sector.avatarHint} initials={c.initials} size="md" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-[#152435]">{c.initials}</span>
                    {c.top && (
                      <span className="rounded-full bg-[#FF6B35]/15 px-2 py-0.5 text-xs font-bold text-[#9a3412]">
                        Top candidato
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[#6b7a8d]">Esperienza: {c.exp}</p>
                  <p className="text-sm font-medium text-[#2C4A6E]">{c.stato}</p>
                  <p className="mt-2 text-xs font-semibold text-[#6b7a8d]">
                    Hai {c.hours} ore per contattare questo candidato
                  </p>
                  <button
                    type="button"
                    className="mt-3 rounded-lg bg-[#FF6B35] px-4 py-2 text-sm font-bold text-[#0A0F1C] transition hover:bg-[#FF8F5E]"
                  >
                    Contatta ora
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#6b7a8d]">
            Filtri: esperienza · disponibilità · automunito / patente · full-time / part-time — nella dashboard
            completa.
          </p>
        </div>
      </section>

      <section className="border-t border-[#e1dbd1] bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-luxury-display text-xl font-semibold text-[#152435]">Un percorso dedicato al settore</h2>
          <p className="mt-2 text-[#6b7a8d]">
            Messaggi e filtri sono calibrati sul vertical di riferimento. Per le condizioni economiche:{" "}
            <Link to="/prezzi" className="premium-link">
              Prezzi
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
