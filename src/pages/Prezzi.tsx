import { Link } from "react-router-dom";
import { mailtoContact } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { btnPrimary, btnSecondary } from "../components/ui/ButtonStyles";

export function Prezzi() {
  return (
    <PremiumPageShell
      eyebrow="Trasparenza"
      title="Prezzi per le imprese"
      subtitle="Tre formule chiare. I candidati non pagano. I prezzi qui sotto sono indicativi (+ IVA); l’offerta vincolante è nel contratto."
      maxWidth="wide"
    >
      <div className="mt-6 rounded-2xl border border-[#2C4A6E]/20 bg-[#f7f5f1] px-5 py-4 text-center text-sm text-[#152435]/90 sm:text-base">
        <strong className="text-[#152435]">Candidati:</strong> percorso <strong>gratuito</strong> se scegli solo di essere
        contattato; opzione <strong>a pagamento</strong> se vuoi anche cercare attivamente le imprese.{" "}
        <Link to="/registrazione#candidato" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
          Registrazione
        </Link>
      </div>

      <div
        id="piano-cerca-aziende"
        className="mx-auto mt-12 max-w-3xl scroll-mt-24 rounded-2xl border-2 border-[#FF6B35]/30 bg-gradient-to-b from-[#fff7ed] to-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-[#FF6B35]">Per chi cerca lavoro</p>
        <h2 className="mt-2 font-luxury-display text-2xl font-semibold text-[#152435] sm:text-3xl">
          Piano «Cerca aziende»
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#152435]/90">
          Oltre al profilo <strong>gratuito</strong> (solo contattato dalle imprese), puoi richiedere l&apos;accesso alle
          funzioni con cui <strong>consultare i profili delle aziende</strong> in linea con settore e zona, dopo
          attivazione contrattuale. <strong>Paese</strong>, <strong>città</strong> e <strong>chilometri</strong> che
          dichiari in registrazione devono essere coerenti: è il modo in cui le imprese capiscono subito se ha senso
          approfondire, senza perdere tempo.
        </p>
        <p className="mt-4 font-luxury-display text-3xl font-semibold text-[#152435]">
          99 €<span className="text-lg font-semibold text-[#6b7a8d]"> / 6 mesi</span>
        </p>
        <p className="text-xs text-[#6b7a8d]">+ IVA · importo indicativo · vincolante nel contratto</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#152435]/90">
          <li>Durata semestrale rinnovabile secondo condizioni pubblicate.</li>
          <li>
            Attivazione dopo verifica e <strong>pagamento</strong> (integrazione gateway in completamento: riceverai link
            o istruzioni via email).
          </li>
          <li>Non sostituisce il piano Full lato impresa per il contatto inverso; convive con le regole pubblicate.</li>
        </ul>
        <Link
          to="/registrazione#candidato"
          className={`${btnPrimary} mt-6 inline-flex w-full justify-center sm:w-auto`}
        >
          Inizia dalla registrazione
        </Link>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#e1dbd1] bg-white p-6 text-sm leading-relaxed text-[#152435]/90 shadow-sm">
        <p className="font-bold text-[#152435]">Cosa significa «sblocco profilo completo»</p>
        <p className="mt-2">
          Dopo l&apos;anteprima anonima, lo <strong>sblocco</strong> è l&apos;operazione che consente alla tua impresa di
          accedere ai <strong>dati completi</strong> del candidato (es. contatto e informazioni identificative) secondo il
          flusso del servizio. Ogni piano fissa <strong>quanti sblocchi</strong> puoi usare nel periodo indicato.
        </p>
        <p className="mt-4 font-bold text-[#152435]">Chi può contattare per primo?</p>
        <p className="mt-2">
          Con <strong>Starter</strong> e <strong>Basic</strong> l&apos;iniziativa del contatto resta in capo
          all&apos;<strong>impresa</strong> dopo lo sblocco. Con il piano <strong>Full (top)</strong> puoi ottenere
          l&apos;<strong>abilitazione</strong> (come da contratto) alla funzione con cui i <strong>candidati</strong>{" "}
          possono manifestare interesse o contattare la tua impresa: è un <strong>vantaggio distintivo</strong> del piano
          top, da comunicare chiaramente al team commerciale e nei materiali contrattuali.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="flex flex-col rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Starter</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#6b7a8d]">Mensile · flessibile</p>
          <p className="mt-3 font-luxury-display text-3xl font-semibold text-[#152435]">
            99 €<span className="text-lg font-semibold text-[#6b7a8d]">/mese</span>
          </p>
          <p className="text-xs text-[#6b7a8d]">+ IVA · importo indicativo</p>
          <div className="mt-6 rounded-xl bg-[#f7f5f1] px-4 py-3 text-center">
            <p className="text-2xl font-bold text-[#2C4A6E]">1</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#152435]/80">
              sblocco profilo completo al mese
            </p>
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-[#152435]/90">
            <li>
              <strong>Non cumulabile:</strong> ogni mese hai diritto a un sblocco; quello non usato nel mese non si
              somma al mese dopo (così il limite resta chiaro).
            </li>
            <li>Ideale per provare il servizio o per un fabbisogno saltuario.</li>
            <li>
              <strong>Contatto da candidato verso l&apos;impresa:</strong> non incluso (solo l&apos;impresa può avviare il
              contatto dopo sblocco).
            </li>
            <li>Rinnovo mensile; dettagli e recesso in contratto.</li>
          </ul>
          <Link to="/registrazione#azienda" className={`${btnSecondary} mt-8 w-full justify-center text-center`}>
            Richiedi Starter
          </Link>
        </div>

        <div className="relative flex flex-col rounded-3xl border-2 border-[#FF6B35] bg-gradient-to-b from-[#fff7ed] to-white p-8 shadow-[0_16px_48px_rgba(255,107,53,0.18)] lg:-mt-2 lg:mb-2">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-bold text-[#0A0F1C] shadow">
            Il più scelto · PMI
          </span>
          <p className="text-sm font-bold uppercase tracking-wide text-[#2C4A6E]">Basic</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#6b7a8d]">Annuale</p>
          <p className="mt-3 font-luxury-display text-3xl font-semibold text-[#152435]">
            690 €<span className="text-lg font-semibold text-[#6b7a8d]">/anno</span>
          </p>
          <p className="text-xs text-[#6b7a8d]">+ IVA · importo indicativo</p>
          <div className="mt-6 rounded-xl bg-white/80 px-4 py-3 text-center ring-1 ring-[#FF6B35]/25">
            <p className="text-2xl font-bold text-[#2C4A6E]">5</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#152435]/80">
              sblocchi profilo completo nell&apos;anno
            </p>
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-[#152435]/90">
            <li>
              I <strong>5 sblocchi</strong> sono disponibili nell&apos;<strong>anno contrattuale</strong> (data inizio/fine
              nel contratto).
            </li>
            <li>Supporto via email.</li>
            <li>
              <strong>Contatto da candidato verso l&apos;impresa:</strong> non incluso (stessa logica dello Starter).
            </li>
            <li>Corrispettivo per uso della piattaforma, non legato all&apos;assunzione.</li>
          </ul>
          <Link to="/registrazione#azienda" className={`${btnPrimary} mt-8 w-full justify-center text-center`}>
            Richiedi Basic
          </Link>
        </div>

        <div className="flex flex-col rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Full — piano top</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#6b7a8d]">Annuale · massima libertà</p>
          <p className="mt-3 font-luxury-display text-3xl font-semibold text-[#152435]">
            1.890 €<span className="text-lg font-semibold text-[#6b7a8d]">/anno</span>
          </p>
          <p className="text-xs text-[#6b7a8d]">+ IVA · importo indicativo</p>
          <div className="mt-6 rounded-xl bg-[#0f172a] px-4 py-3 text-center text-white">
            <p className="text-lg font-bold">Illimitati</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
              sblocchi profilo completo
            </p>
            <p className="mt-1 text-[0.65rem] text-white/70">Nel rispetto del contratto e di un uso lecito (fair use)</p>
          </div>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-[#152435]/90">
            <li>
              <strong>Vantaggio top:</strong> possibilità (da abilitare in contratto) che i candidati possano{" "}
              <strong>manifestare interesse o contattare la tua impresa</strong> — non disponibile su Starter/Basic.
            </li>
            <li>Priorità in evidenza, filtri avanzati e strumenti operativi estesi.</li>
            <li>
              Opzionale: <strong>supporto HR</strong> — da concordare a parte.
            </li>
          </ul>
          <a
            href={mailtoContact("Piano Full (top)")}
            className="mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-[#2C4A6E]/25 bg-white py-3 text-center text-sm font-bold text-[#2C4A6E] shadow-[0_4px_0_#e1dbd1] transition hover:-translate-y-0.5 hover:bg-[#f7f5f1] sm:text-base"
          >
            Richiedi Full
          </a>
        </div>
      </div>

      <div className="mt-14 overflow-x-auto rounded-2xl border border-[#e1dbd1] bg-white shadow-sm">
        <table className="w-full min-w-[280px] text-left text-sm">
          <caption className="border-b border-[#e1dbd1] px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-[#6b7a8d]">
            Riepilogo: cosa include ogni formula
          </caption>
          <thead>
            <tr className="border-b border-[#e1dbd1] bg-[#f7f5f1] text-[#152435]">
              <th className="px-4 py-3 font-semibold">Formula</th>
              <th className="px-4 py-3 font-semibold">Prezzo indicativo</th>
              <th className="px-4 py-3 font-semibold">Sblocchi / anno o mese</th>
              <th className="px-4 py-3 font-semibold">Candidato → impresa</th>
            </tr>
          </thead>
          <tbody className="text-[#152435]/90">
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-4 py-3 font-medium">Starter</td>
              <td className="px-4 py-3">99 €/mese + IVA</td>
              <td className="px-4 py-3">1 al mese (non cumulabile)</td>
              <td className="px-4 py-3">No</td>
            </tr>
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-4 py-3 font-medium">Basic</td>
              <td className="px-4 py-3">690 €/anno + IVA</td>
              <td className="px-4 py-3">5 nell&apos;anno contrattuale</td>
              <td className="px-4 py-3">No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Full (top)</td>
              <td className="px-4 py-3">1.890 €/anno + IVA</td>
              <td className="px-4 py-3">Illimitati (fair use)</td>
              <td className="px-4 py-3">Sì, se abilitato in contratto</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-[#6b7a8d]">
        Il servizio è una bacheca digitale (strumento di pubblicazione e consultazione), non un corrispettivo legato
        all&apos;assunzione. Per privacy e condizioni:{" "}
        <Link to="/privacy" className="premium-link">
          Privacy Policy
        </Link>
        ,{" "}
        <Link to="/termini" className="premium-link">
          Termini
        </Link>
        .
      </p>
    </PremiumPageShell>
  );
}
