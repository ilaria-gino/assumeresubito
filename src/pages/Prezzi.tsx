import { Link } from "react-router-dom";
import { mailtoContact } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { btnPrimary } from "../components/ui/ButtonStyles";

export function Prezzi() {
  return (
    <PremiumPageShell
      eyebrow="Trasparenza"
      title="Prezzi e condizioni economiche"
      subtitle="I candidati non pagano per l’iscrizione al profilo. Le imprese utilizzano la piattaforma solo tramite abbonamento (Basic o Full): importi e clausole sono definiti in contratto."
      maxWidth="wide"
    >
      <div className="mt-6 rounded-2xl border border-[#2C4A6E]/20 bg-[#f7f5f1] px-5 py-4 text-center text-sm text-[#152435]/90 sm:text-base">
        <strong className="text-[#152435]">Candidati:</strong> registrazione e profilo base{" "}
        <strong>sempre gratuiti</strong>.{" "}
        <Link to="/registrazione#candidato" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
          Cerco lavoro
        </Link>
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#6b7a8d]">
        Per le imprese non è previsto un accesso gratuito: solo due piani di abbonamento, pensati come uso di uno
        strumento digitale (bacheca annunci), non come fee legate all’assunzione.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="relative rounded-3xl border-2 border-[#FF6B35] bg-gradient-to-b from-[#fff7ed] to-white p-8 shadow-[0_16px_48px_rgba(255,107,53,0.18)] transition hover:-translate-y-1">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-bold text-[#0A0F1C] shadow">
            Abbonamento
          </span>
          <p className="text-sm font-bold uppercase tracking-wide text-[#2C4A6E]">Piano Basic</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">Annuale</p>
          <p className="text-sm text-[#6b7a8d]">
            Accesso alla piattaforma con consultazione dei profili e sblocco dei dati completi fino a un numero massimo di
            candidati per anno contrattuale (soglia definita in offerta), strumenti essenziali di ricerca per settore e
            zona.
          </p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Corrispettivo per uso del servizio digitale, non legato all’assunzione</li>
            <li>Profili anonimizzati in prima istanza; dettaglio secondo limiti del piano</li>
            <li>Adatto a PMI con volumi di contatto contenuti e prevedibili</li>
          </ul>
          <Link to="/registrazione#azienda" className={`${btnPrimary} mt-8 w-full justify-center text-center`}>
            Richiedi Basic
          </Link>
        </div>

        <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Piano Full</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">Su misura</p>
          <p className="mt-1 text-sm text-[#6b7a8d]">Abbonamento annuale con accesso esteso e funzioni avanzate</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Accesso ai profili senza il tetto del Piano Basic (nei limiti contrattuali)</li>
            <li>Priorità in evidenza, filtri avanzati, shortlist e strumenti operativi aggiuntivi</li>
            <li>Opzionale: supporto HR / onboarding — da concordare</li>
          </ul>
          <a
            href={mailtoContact("Preventivo Piano Full")}
            className="mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-[#2C4A6E]/25 bg-white py-3 text-center font-bold text-[#2C4A6E] shadow-[0_4px_0_#e1dbd1] transition hover:-translate-y-0.5 hover:bg-[#f7f5f1]"
          >
            Richiedi preventivo Full
          </a>
        </div>
      </div>
    </PremiumPageShell>
  );
}
