import { Link } from "react-router-dom";
import { ITALIAN_REGIONS } from "../data/regions";

export function ItaliaIndex() {
  return (
    <div className="luxury-page font-luxury-sans pb-20">
      <header className="border-b border-[#e1dbd1] bg-gradient-to-br from-[#152435] via-[#1e3a5f] to-[#0f172a] px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#8AB4CE]">Italia</p>
          <h1 className="font-luxury-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
            Selezione e lavoro per regione
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/75">
            Pagine di approfondimento geografico: come Lavoro48h supporta incontri tra imprese e candidati su tutta Italia,
            con regione, città e chilometri di spostamento dichiarati. Non siamo un&apos;agenzia per il lavoro: bacheca
            digitale strutturata.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              to="/registrazione/azienda"
              className="rounded-xl bg-[#FF6B35] px-5 py-2.5 font-bold text-[#0A0F1C] shadow-lg hover:brightness-105"
            >
              Iscrizione imprese
            </Link>
            <Link
              to="/registrazione/candidato"
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 font-semibold backdrop-blur-sm hover:bg-white/20"
            >
              Iscrizione candidato
            </Link>
            <Link to="/faq" className="rounded-xl border border-white/20 px-5 py-2.5 font-semibold hover:bg-white/10">
              FAQ
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-sm text-[#6b7a8d]">
          Venti regioni — scegli la tua per leggere il contesto locale e accedere ai verticali di settore.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITALIAN_REGIONS.map((r) => (
            <li key={r.slug}>
              <Link
                to={`/italia/${r.slug}`}
                className="flex h-full flex-col rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2C4A6E]/35 hover:shadow-md"
              >
                <span className="font-luxury-display text-lg font-semibold text-[#152435]">{r.name}</span>
                <span className="mt-2 line-clamp-2 text-sm text-[#6b7a8d]">{r.intro.slice(0, 120)}…</span>
                <span className="mt-3 text-sm font-semibold text-[#2C4A6E]">Apri pagina →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
