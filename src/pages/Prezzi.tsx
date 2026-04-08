import { Link } from "react-router-dom";
import { mailtoContact } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { btnPrimary, btnSecondary } from "../components/ui/ButtonStyles";

export function Prezzi() {
  return (
    <PremiumPageShell
      eyebrow="Trasparenza"
      title="Prezzi e condizioni economiche"
      subtitle="Struttura tariffaria comunicata in anticipo: i candidati non sostengono costi di iscrizione; le aziende scelgono il modello in base alle esigenze operative."
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
            Pay per hire
          </span>
          <p className="text-sm font-bold uppercase tracking-wide text-[#2C4A6E]">Paghi solo se assumi</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">1 mensilità</p>
          <p className="text-sm text-[#6b7a8d]">oppure % sulla RAL (definizione legale in contratto)</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Candidati filtrati per settore e disponibilità</li>
            <li>Timer 48h e priorità operativa</li>
            <li>Allineamento incentivi: costo solo a risultato</li>
          </ul>
          <Link to="/registrazione#azienda" className={`${btnPrimary} mt-8 w-full justify-center text-center`}>
            Registra l&apos;azienda
          </Link>
        </div>

        <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Premium</p>
          <p className="mt-2 font-luxury-display text-3xl font-semibold text-[#152435]">Su misura</p>
          <p className="mt-1 text-sm text-[#6b7a8d]">Più visibilità e servizi</p>
          <ul className="mt-6 space-y-3 text-[#152435]/90">
            <li>Priorità in evidenza nelle ricerche</li>
            <li>Filtri avanzati e shortlist</li>
            <li>Opzionale: consulenza HR / onboarding</li>
          </ul>
          <a
            href={mailtoContact("Preventivo Premium")}
            className="mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-[#2C4A6E]/25 bg-white py-3 text-center font-bold text-[#2C4A6E] shadow-[0_4px_0_#e1dbd1] transition hover:-translate-y-0.5 hover:bg-[#f7f5f1]"
          >
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </PremiumPageShell>
  );
}
