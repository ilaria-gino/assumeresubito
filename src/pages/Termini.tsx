import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { TitolareAddress } from "../components/legal/TitolareAddress";
import { PremiumPageShell } from "../components/PremiumPageShell";

const section = "mt-8 space-y-4 text-[#152435]/85 leading-relaxed";
const h2 = "mt-12 text-xl font-bold text-[#152435] sm:text-2xl";

export function Termini() {
  return (
    <PremiumPageShell
      eyebrow="Legale"
      title="Termini e condizioni di utilizzo"
      subtitle={`Condizioni d'uso di ${BRAND.siteUrl}`}
    >
      <article className="prose-p:leading-relaxed">
        <section className={section}>
          <h2 className={h2}>1. Titolare del servizio</h2>
          <TitolareAddress />
        </section>

        <section className={section}>
          <h2 className={h2}>2. Oggetto del servizio</h2>
          <p>La piattaforma {BRAND.siteUrl} consente:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>ai candidati di pubblicare richieste di lavoro e profili;</li>
            <li>
              alle imprese di consultare profili in forma anonimizzata e, previo <strong>abbonamento</strong> (piani{" "}
              <strong>Basic</strong> o <strong>Full</strong>), di accedere ai dati nei limiti contrattuali.
            </li>
          </ul>
          <p>
            Il servizio è configurato come <strong>bacheca digitale / portale di pubblicazione annunci</strong>, in
            logica assimilabile a un <strong>marketplace on-line</strong>, e <strong>non</strong> come attività di
            intermediazione del lavoro né come agenzia per il collocamento.
          </p>
          <p>
            Per le imprese non è previsto un piano gratuito: l&apos;accesso alle funzioni riservate è subordinato alla
            sottoscrizione di uno dei piani di abbonamento offerti, alle condizioni di volta in volta comunicate e
            accettate.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>3. Modalità di funzionamento</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>I profili dei candidati sono inizialmente anonimizzati.</li>
            <li>Le imprese accedono ai dati completi tramite abbonamento (Basic o Full), secondo contratto.</li>
            <li>Il contatto e ogni eventuale rapporto tra le parti avvengono in autonomia.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>4. Ruolo della piattaforma</h2>
          <p>Il Titolare:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>non seleziona candidati;</li>
            <li>non propone abbinamenti vincolanti;</li>
            <li>non partecipa alle trattative né alle assunzioni.</li>
          </ul>
          <p>La piattaforma non è parte di alcun rapporto lavorativo o contrattuale tra candidati e imprese.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>5. Responsabilità degli utenti</h2>
          <p>Gli utenti (candidati e imprese):</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>garantiscono la veridicità dei dati inseriti;</li>
            <li>sono responsabili dei contenuti pubblicati;</li>
            <li>si impegnano a non inserire informazioni false o ingannevoli.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>6. Limitazione di responsabilità</h2>
          <p>Il Titolare non è responsabile per:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>veridicità dei dati inseriti dagli utenti;</li>
            <li>esito di colloqui o rapporti di lavoro;</li>
            <li>comportamenti delle parti.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>7. Utilizzo corretto della piattaforma</h2>
          <p>È vietato:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>usare i dati per finalità diverse da quelle connesse alla ricerca o offerta di lavoro nel rispetto della legge;</li>
            <li>copiare o diffondere informazioni senza autorizzazione;</li>
            <li>utilizzare la piattaforma per attività illecite.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>8. Sospensione o cancellazione account</h2>
          <p>Il Titolare si riserva il diritto di sospendere o cancellare account in caso di uso improprio.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>9. Modifiche</h2>
          <p>Il Titolare può modificare i presenti termini in qualsiasi momento.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>10. Legge applicabile</h2>
          <p>Il presente accordo è regolato dalla legge italiana.</p>
        </section>

        <p className="mt-12 text-sm text-[#6b7a8d]">
          Per il trattamento dei dati personali vedi la{" "}
          <Link to="/privacy" className="premium-link">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </PremiumPageShell>
  );
}
