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
      subtitle={`Condizioni d'uso di ${BRAND.siteUrl}: bacheca digitale tra utenti, non agenzia per il lavoro.`}
      showMarketplaceFootnote={false}
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
              <strong>Starter</strong>, <strong>Basic</strong> o <strong>Full</strong>), di accedere ai dati nei limiti
              contrattuali.
            </li>
          </ul>
          <p>
            Il servizio è espressamente configurato come <strong>bacheca digitale / portale di pubblicazione annunci</strong>
            , in logica assimilabile a un <strong>marketplace on-line</strong> tra utenti.{" "}
            <strong>
              Il Titolare non è un&apos;agenzia per il lavoro e non svolge attività di intermediazione, mediazione o
              collocamento
            </strong>{" "}
            dei lavoratori, né attività riservate per legge a soggetti autorizzati in tal senso.
          </p>
          <p>
            Il corrispettivo dovuto dalle imprese (ove previsto) e da eventuali candidati per piani a pagamento{" "}
            <strong>attiene esclusivamente all&apos;accesso e all&apos;uso degli strumenti informatici</strong> della
            piattaforma, <strong>non</strong> all&apos;assunzione, al superamento di selezioni o ad altri esiti del rapporto
            tra candidato e impresa.
          </p>
          <p>
            Gli utenti restano <strong>liberi</strong> di dare seguito o meno a contatti e offerte; eventuali rapporti di
            lavoro o contratti professionali nascono <strong>solo</strong> tra candidato e impresa, senza che il Titolare
            sia parte di tali rapporti né imponga esiti.
          </p>
          <p>
            Per le imprese non è previsto un piano gratuito: l&apos;accesso alle funzioni riservate è subordinato alla
            sottoscrizione di uno dei piani di abbonamento offerti, alle condizioni di volta in volta comunicate e
            accettate.
          </p>
          <p>
            I candidati possono utilizzare un <strong>profilo base gratuito</strong> per essere contattati dalle imprese.
            L&apos;accesso a funzioni aggiuntive di <strong>consultazione attiva dei profili aziendali</strong> può essere
            subordinato a un <strong>piano a pagamento per candidati</strong> (es. formula semestrale), alle condizioni
            pubblicate nella pagina di iscrizione (piani affiancati al modulo) e nel contratto applicabile, con attivazione
            dopo pagamento ove previsto.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>3. Modalità di funzionamento</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>I profili dei candidati sono inizialmente anonimizzati.</li>
            <li>Le imprese accedono ai dati completi tramite abbonamento (Starter, Basic o Full), secondo contratto.</li>
            <li>Il contatto e ogni eventuale rapporto tra le parti avvengono in autonomia.</li>
          </ul>
          <p className="mt-4">
            Con i piani <strong>Starter</strong> e <strong>Basic</strong>, l&apos;avvio del contatto diretto tra le parti,
            dopo le fasi previste dal servizio, è in capo all&apos;<strong>impresa</strong> (es. dopo sblocco profilo).
            Con il piano <strong>Full (piano top)</strong>, l&apos;impresa può ottenere — ove previsto e abilitato nel
            contratto — la funzione che consente ai <strong>candidati</strong> di manifestare interesse o contattare
            l&apos;impresa, secondo le modalità tecniche e legali concordate. Tali funzioni restano{" "}
            <strong>strumenti di messaggistica o di visibilità tra utenti</strong> e{" "}
            <strong>non implicano attività di collocamento o selezione da parte del Titolare</strong>.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>4. Ruolo della piattaforma</h2>
          <p>
            Il Titolare <strong>non è un&apos;agenzia per il lavoro</strong> e, nell&apos;ambito del servizio digitale:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              <strong>non seleziona</strong> né valuta candidati per conto delle imprese;
            </li>
            <li>
              <strong>non propone abbinamenti vincolanti</strong> né shortlist con giudizio di idoneità professionale;
            </li>
            <li>
              <strong>non partecipa</strong> a colloqui, trattative, negoziazione contrattuale o assunzioni;
            </li>
            <li>
              <strong>non garantisce</strong> esiti di ricerca, tempi di copertura del ruolo o idoneità dei profili.
            </li>
          </ul>
          <p>
            La piattaforma <strong>non è parte</strong> di alcun rapporto di lavoro, negoziale o contrattuale tra
            candidati e imprese.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>5. Corrispondenza tecnica tra annunci e profili (non intermediazione)</h2>
          <p>
            Eventuali funzioni di ordinamento, filtro, ricerca o messa in evidenza dei profili si basano su{" "}
            <strong>criteri oggettivi e dichiarati dagli utenti</strong> (es. settore, area geografica, disponibilità,
            dati inseriti nel modulo) e su logiche informatiche predefinite. Tali strumenti hanno la sola finalità di
            facilitare la <strong>consultazione della bacheca</strong> e{" "}
            <strong>non costituiscono attività di intermediazione o collocamento</strong> e non sostituiscono la valutazione
            delle imprese o dei candidati.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>6. Rapporti tra utenti, controversie e sollevamento</h2>
          <p>
            Gli utenti <strong>riconoscono esplicitamente</strong> che il Titolare{" "}
            <strong>non è un&apos;agenzia per il lavoro</strong> e che il servizio è limitato alla messa a disposizione
            della piattaforma digitale secondo i presenti termini.
          </p>
          <p>
            Le controversie relative a selezione, assunzione, esecuzione o cessazione del rapporto di lavoro, nonché alla
            veridicità delle informazioni scambiate <strong>tra candidati e imprese</strong>, sono di competenza delle{" "}
            <strong>parti interessate</strong>. Il Titolare non è parte di tali rapporti.
          </p>
          <p>
            Nei limiti consentiti dalla legge applicabile e fermo restando quanto di inderogabile, gli utenti convengono
            che il Titolare non potrà essere richiesto di rispondere per pretese connesse a rapporti nati esclusivamente
            tra utenti, salvo che non emerga responsabilità propria del Titolare distinta dalla mera gestione tecnica del
            servizio.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>7. Responsabilità degli utenti</h2>
          <p>Gli utenti (candidati e imprese):</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>garantiscono la veridicità dei dati inseriti;</li>
            <li>sono responsabili dei contenuti pubblicati;</li>
            <li>si impegnano a non inserire informazioni false o ingannevoli;</li>
            <li>
              si impegnano a non rappresentare il Titolare come <strong>agenzia per il lavoro</strong> o intermediario al
              collocamento nei propri rapporti con terzi.
            </li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>8. Limitazione di responsabilità</h2>
          <p>
            Fermo restando quanto previsto dagli articoli inderogabili del Codice civile e dalle altre norme applicabili,
            il Titolare non è responsabile per:
          </p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>veridicità dei dati inseriti dagli utenti;</li>
            <li>esito di colloqui o rapporti di lavoro;</li>
            <li>comportamenti delle parti.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>9. Utilizzo corretto della piattaforma</h2>
          <p>È vietato:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              usare i dati per finalità diverse da quelle connesse alla ricerca o offerta di lavoro nel rispetto della
              legge;
            </li>
            <li>copiare o diffondere informazioni senza autorizzazione;</li>
            <li>utilizzare la piattaforma per attività illecite.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>10. Sospensione o cancellazione account</h2>
          <p>Il Titolare si riserva il diritto di sospendere o cancellare account in caso di uso improprio.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>11. Modifiche</h2>
          <p>Il Titolare può modificare i presenti termini in qualsiasi momento.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>12. Legge applicabile</h2>
          <p>Il presente accordo è regolato dalla legge italiana.</p>
        </section>

        <p className="mt-12 text-sm text-[#6b7a8d]">
          Per il trattamento dei dati personali vedi la{" "}
          <Link to="/privacy" className="premium-link">
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-4 text-sm text-[#6b7a8d]">
          Ultimo aggiornamento sostanziale:{" "}
          {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}.
        </p>
      </article>
    </PremiumPageShell>
  );
}
