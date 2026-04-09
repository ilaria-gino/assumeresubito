import { Link } from "react-router-dom";
import { mailtoContact } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { btnPrimary, btnSecondary } from "../components/ui/ButtonStyles";

export function Prezzi() {
  return (
    <PremiumPageShell
      eyebrow="Trasparenza"
      title="Prezzi e condizioni economiche"
      subtitle="I candidati non pagano per l’iscrizione al profilo base. Le aziende accedono alla piattaforma tramite abbonamento: ogni piano definisce limiti e funzionalità; importi e clausole sono nel contratto."
      maxWidth="wide"
    >
      <div className="mt-4 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Gratuito</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">€0</p>
          <p className="mt-1 text-sm text-[#6b7a8d]">Ingresso e prova del flusso</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Registrazione candidati sempre gratuita</li>
            <li>Accesso base per aziende (limiti da definire in contratto)</li>
            <li>Visibilità delle landing per settore</li>
          </ul>
          <Link to="/registrazione" className={`${btnSecondary} mt-8 w-full justify-center text-center`}>
            Inizia gratis
          </Link>
        </div>

        <div className="relative rounded-3xl border-2 border-[#FF6B35] bg-gradient-to-b from-[#fff7ed] to-white p-8 shadow-[0_16px_48px_rgba(255,107,53,0.18)] transition hover:-translate-y-1">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-bold text-[#0A0F1C] shadow">
            Abbonamento
          </span>
          <p className="text-sm font-bold uppercase tracking-wide text-[#2C4A6E]">Piano Base</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">Annuale</p>
          <p className="text-sm text-[#6b7a8d]">Accesso alla piattaforma; dati completi fino a un numero massimo di candidati per anno (es. 5), come da contratto</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Ricerche e candidature in linea con ruolo e zona</li>
            <li>Profili con livelli di dettaglio progressivi</li>
            <li>Corrispettivo per uso del servizio digitale, non legato all’assunzione</li>
          </ul>
          <Link to="/registrazione#azienda" className={`${btnPrimary} mt-8 w-full justify-center text-center`}>
            Registra l&apos;azienda
          </Link>
        </div>

        <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Piano Top</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">Su misura</p>
          <p className="mt-1 text-sm text-[#6b7a8d]">Abbonamento annuale con accesso esteso</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Accesso ai profili senza il limite del Piano Base</li>
            <li>Priorità in evidenza, filtri avanzati e shortlist</li>
            <li>Opzionale: consulenza HR / onboarding</li>
          </ul>
          <a
            href={mailtoContact("Preventivo Piano Top")}
            className="mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-[#2C4A6E]/25 bg-white py-3 text-center font-bold text-[#2C4A6E] shadow-[0_4px_0_#e1dbd1] transition hover:-translate-y-0.5 hover:bg-[#f7f5f1]"
          >
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </PremiumPageShell>
  );
}
