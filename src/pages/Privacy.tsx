import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { TitolareAddress } from "../components/legal/TitolareAddress";
import { PremiumPageShell } from "../components/PremiumPageShell";

const section = "mt-8 space-y-4 text-[#152435]/85 leading-relaxed";
const h2 = "mt-12 text-xl font-bold text-[#152435] sm:text-2xl";

export function Privacy() {
  return (
    <PremiumPageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)"
      showMarketplaceFootnote={false}
    >
      <article className="prose-p:leading-relaxed">
        <section className={section}>
          <h2 className={h2}>1. Titolare del trattamento</h2>
          <TitolareAddress />
          <p className="mt-4 text-sm text-[#6b7a8d]">
            Per l’esercizio dei diritti e per richieste relative al trattamento è possibile utilizzare i recapiti sopra
            indicati, specificando l’oggetto della richiesta.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>2. Natura del servizio e ruolo del Titolare</h2>
          <p>
            {BRAND.name} ({BRAND.siteUrl}) è una <strong>piattaforma digitale di pubblicazione e consultazione di
              annunci e profili</strong>, organizzata per settore e con livelli di dettaglio progressivi, in una logica
            assimilabile a un <strong>marketplace o bacheca on-line</strong> (annunci di domanda e offerta di lavoro).
          </p>
          <p>
            Il Titolare <strong>non è un&apos;agenzia per il lavoro</strong>: non svolge attività di intermediazione,
            mediazione o collocamento dei lavoratori, non opera quale soggetto abilitato a tali finalità ai sensi della
            normativa applicabile, <strong>non seleziona o colloca</strong> lavoratori, non propone abbinamenti
            vincolanti e <strong>non partecipa</strong> ai rapporti contrattuali tra candidati e imprese.
          </p>
          <p>
            Il trattamento dei dati è funzionale esclusivamente all’<strong>uso dello strumento digitale</strong> (bacheca /
            marketplace di annunci: pubblicazione, consultazione nei limiti previsti, gestione account e abbonamenti), non
            all&apos;esito di selezioni o assunzioni.
          </p>
          <p>
            L&apos;iscrizione non instaura un rapporto di lavoro subordinato o di agenzia con il Titolare; le parti
            utilizzano il servizio per incontrare in autonomia esigenze complementari, nei limiti dei Termini.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>3. Categorie di dati personali</h2>
          <p>A seconda del profilo utente possono essere trattati, tra gli altri:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              <strong>Candidati:</strong> dati identificativi, di contatto, professionali (es. competenze, esperienze,
              preferenze di settore),               <strong>Paese</strong>, <strong>località</strong> (regione/città o equivalente),{" "}
              <strong>CAP o codice postale</strong> inserito manualmente,{" "}
              <strong>raggio di spostamento in chilometri</strong>, scelta tra percorso <strong>gratuito</strong> (solo
              contattato) o richiesta di <strong>piano a pagamento</strong> per consultare profili imprese (ove
              attivato), eventuali altri dati inseriti volontariamente nel profilo.
            </li>
            <li>
              <strong>Imprese / richiedenti personale:</strong> dati identificativi e di contatto del referente o della
              società, <strong>regione e città di riferimento dell’attività</strong> o della ricerca, dati necessari alla
              registrazione e alla gestione dell’abbonamento.
            </li>
            <li>
              <strong>Dati di navigazione e tecnici:</strong> log, indirizzo IP, cookie e identificativi secondo la{" "}
              <Link to="/cookie-policy" className="premium-link">
                Cookie Policy
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>4. Finalità del trattamento</h2>
          <p>I dati sono trattati per:</p>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>consentire la registrazione e la gestione degli account (candidati e imprese);</li>
            <li>pubblicare e rendere consultabili i profili secondo le regole di anonimizzazione del servizio;</li>
            <li>
              gestire gli <strong>abbonamenti aziendali</strong> (piani <strong>Starter</strong>,{" "}
              <strong>Basic</strong> e <strong>Full</strong>), i pagamenti e gli obblighi contrattuali connessi;
            </li>
            <li>
              gestire, ove attivati, i <strong>piani a pagamento per candidati</strong> (es. consultazione profili
              imprese) e i relativi pagamenti secondo contratto;
            </li>
            <li>comunicazioni strumentali al servizio (es. conferme, aggiornamenti tecnici);</li>
            <li>
              gestire flussi differenziati di contatto tra candidati e imprese in base al piano (es. iniziativa
              dell&apos;impresa con Starter/Basic; possibilità aggiuntive con <strong>Full (piano top)</strong> se
              contrattualmente abilitate);
            </li>
            <li>adempimenti di legge, contabili e fiscali ove applicabili;</li>
            <li>tutela del servizio e prevenzione di abusi (es. sicurezza informatica), nel rispetto del principio di proporzionalità.</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>5. Modalità del trattamento</h2>
          <p>
            Il trattamento avviene con strumenti prevalentemente informatici e telematici, mediante misure tecniche e
            organizzative idonee a garantire un livello di sicurezza adeguato al rischio, nel rispetto dei principi di
            liceità, correttezza, trasparenza, minimizzazione e limitazione della conservazione.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>6. Anonimizzazione e accesso ai profili (imprese)</h2>
          <p>
            I profili dei candidati sono resi visibili in prima istanza in forma <strong>non direttamente identificativa</strong>
            , secondo le modalità tecniche del servizio. L’accesso ai dati completi da parte delle imprese è subordinato
            alla sottoscrizione di un <strong>abbonamento</strong> (piani <strong>Starter</strong>,{" "}
            <strong>Basic</strong> o <strong>Full</strong>), con <strong>limiti e funzionalità</strong> definiti nel
            contratto: il corrispettivo attiene all’uso della piattaforma, non all’assunzione o a esiti di selezione.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>7. Base giuridica</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              <strong>Candidati:</strong> consenso esplicito ove richiesto (art. 6, par. 1, lett. a) e art. 7 GDPR), e in
              taluni casi misure precontrattuali su richiesta dell’interessato (art. 6, par. 1, lett. b) GDPR), a seconda
              delle funzioni attivate.
            </li>
            <li>
              <strong>Imprese:</strong> esecuzione del contratto di abbonamento e servizi connessi (art. 6, par. 1, lett. b)
              GDPR), e obblighi legali ove applicabili (art. 6, par. 1, lett. c) GDPR).
            </li>
            <li>
              <strong>Legittimo interesse</strong> del Titolare alla sicurezza del sito e alla prevenzione di frodi, nei
              limiti del rapporto con i diritti degli interessati (art. 6, par. 1, lett. f) GDPR), ove pertinente.
            </li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>8. Conservazione</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>
              <strong>Candidati:</strong> per il tempo necessario alle finalità indicate (es. fino a un massimo di 12
              mesi, salvo rinnovo del consenso o obblighi di legge), salvo richiesta di cancellazione anticipata.
            </li>
            <li>
              <strong>Imprese:</strong> per la durata del rapporto contrattuale e, successivamente, per i tempi previsti da
              obblighi fiscali, contabili e di legge.
            </li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>9. Comunicazione e destinatari dei dati</h2>
          <p>
            I dati possono essere resi accessibili, nei limiti delle funzioni del servizio e del piano sottoscritto, ad
            altri utenti della piattaforma (es. imprese abbonate per i profili dei candidati). Possono essere comunicati
            a fornitori di servizi tecnici (hosting, manutenzione) in qualità di responsabili del trattamento o
            incaricati, con obbligo di confidenzialità. Non si effettua vendita dei dati a terzi per finalità estranee al
            servizio.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>10. Trasferimenti verso Paesi extra-UE</h2>
          <p>
            Qualora strumenti o fornitori prevedano trattamenti fuori dallo Spazio Economico Europeo, questi avvengono
            sulla base di una decisione di adeguatezza o di garanzie appropriate (es. Clausole Contrattuali Standard)
            previste dal GDPR.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>11. Diritti dell&apos;interessato</h2>
          <p>
            Ai sensi degli artt. 15-22 GDPR, l&apos;interessato può esercitare i diritti di accesso, rettifica,
            cancellazione (&quot;diritto all&apos;oblio&quot;), limitazione del trattamento, portabilità dei dati (ove
            applicabile), opposizione e revoca del consenso ove basato sul consenso. Può proporre reclamo al Garante per
            la protezione dei dati personali (
            <a href="https://www.garanteprivacy.it" className="premium-link" target="_blank" rel="noreferrer">
              www.garanteprivacy.it
            </a>
            ).
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>12. Revoca del consenso</h2>
          <p>
            Ove il trattamento si basi sul consenso, questo può essere revocato in qualsiasi momento senza pregiudicare
            la liceità del trattamento basata sul consenso prima della revoca.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>13. Sicurezza</h2>
          <p>
            Sono adottate misure tecniche e organizzative appropriate a proteggere i dati da accessi non autorizzati,
            alterazione o distruzione accidentale o illecita.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>14. Modifiche all&apos;informativa</h2>
          <p>
            Il Titolare può aggiornare la presente informativa: si invita a consultarla periodicamente. La data di
            ultimo aggiornamento è indicata in calce.
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>15. Cookie</h2>
          <p>
            Per le informazioni su cookie e preferenze:{" "}
            <Link to="/cookie-policy" className="premium-link font-semibold">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <p className="mt-12 text-sm text-[#6b7a8d]">
          Ultimo aggiornamento:{" "}
          {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </article>
    </PremiumPageShell>
  );
}
