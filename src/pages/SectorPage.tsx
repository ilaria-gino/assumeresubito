import { Link, useParams } from "react-router-dom";
import { getSector } from "../data/sectors";
import { RoleAvatar } from "../components/RoleAvatar";

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
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Settore non trovato</h1>
        <Link to="/" className="mt-4 inline-block text-teal-700 underline">
          Torna alla home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-teal-700">{sector.title}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {sector.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{sector.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/registrazione#azienda"
              className="inline-flex rounded-xl bg-teal-600 px-6 py-3 font-bold text-white shadow-md hover:bg-teal-700"
            >
              {sector.cta}
            </Link>
            <Link
              to="/registrazione#candidato"
              className="inline-flex rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
            >
              Registrati come candidato
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-0 border-y border-slate-100 bg-white lg:grid-cols-2">
        <div className="border-b border-slate-100 p-8 lg:border-b-0 lg:border-r lg:p-12">
          <h2 className="text-lg font-bold text-red-900">Problema</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {sector.problems.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-red-500" aria-hidden>
                  •
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 lg:p-12">
          <h2 className="text-lg font-bold text-teal-900">Soluzione</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {sector.solutions.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-teal-500" aria-hidden>
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Candidati disponibili (esempio)</h2>
              <p className="mt-1 text-slate-600">
                Avatar e iniziali — dati dimostrativi. Dopo il lancio vedrai i profili reali filtrati.
              </p>
            </div>
            <p className="rounded-lg bg-amber-100 px-3 py-2 text-sm font-medium text-amber-900">
              Timer 48h: contatta in tempo
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {demoCandidates.map((c) => (
              <article
                key={c.initials}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <RoleAvatar hint={sector.avatarHint} initials={c.initials} size="md" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{c.initials}</span>
                    {c.top && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                        Top candidato
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-600">Esperienza: {c.exp}</p>
                  <p className="text-sm font-medium text-teal-800">{c.stato}</p>
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    Hai {c.hours} ore per contattare questo candidato
                  </p>
                  <button
                    type="button"
                    className="mt-3 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white hover:bg-teal-700"
                  >
                    Contatta ora
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Filtri: esperienza · disponibilità · automunito / patente · full-time / part-time — nella dashboard
            completa.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-slate-900">Non sei su LinkedIn o Indeed</h2>
          <p className="mt-2 text-slate-600">
            Sei sul modo più veloce per assumere senza perdere tempo.{" "}
            <Link to="/prezzi" className="font-semibold text-teal-700 underline">
              Vedi i prezzi
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
