import { Link } from "react-router-dom";
import { PremiumPageShell } from "../components/PremiumPageShell";

const section = "mt-8 space-y-4 text-[#152435]/85 leading-relaxed";
const h2 = "mt-12 text-xl font-bold text-[#152435] sm:text-2xl";
const h3 = "mt-8 text-lg font-semibold text-[#152435]";

export function Privacy() {
  return (
    <PremiumPageShell
      eyebrow="Privacy"
      title="Informativa privacy"
      subtitle='Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 ("GDPR") e degli artt. 13-14 del D.Lgs. 196/2003 ("Codice Privacy") come modificato dal D.Lgs. 101/2018.'
    >
      <article className="prose-p:leading-relaxed">
      <section className={section}>
        <h2 className={h2}>1. Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento dei dati personali è individuato nei recapiti ufficiali pubblicati nella pagina{" "}
          <Link to="/contatti" className="premium-link">
            Contatti
          </Link>{" "}
          del sito (ragione sociale o denominazione, sede legale, PEC ove prevista, e-mail dedicata).
        </p>
        <p>Responsabile della protezione dei dati (DPO): non nominato, salvo successiva comunicazione.</p>
      </section>

      <section className={section}>
        <h2 className={h2}>2. Tipologie di dati trattati</h2>
        <p>Possono essere trattati, a seconda dei servizi utilizzati:</p>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong>Dati identificativi e di contatto:</strong> nome, cognome, ragione sociale, e-mail, telefono,
            indirizzo o area geografica, dati inseriti in moduli di registrazione.
          </li>
          <li>
            <strong>Dati relativi al rapporto di lavoro/ricerca attiva:</strong> esperienza, disponibilità, settore,
            preferenze professionali, documenti caricati se previsti.
          </li>
          <li>
            <strong>Dati di navigazione e tecnici:</strong> indirizzo IP, log, cookie e identificativi tecnici secondo la{" "}
            <Link to="/cookie-policy" className="premium-link">
              Cookie Policy
            </Link>
            .
          </li>
          <li>
            <strong>Dati particolari (categorie particolari):</strong> solo se forniti volontariamente dall&apos;utente e
            se strettamente pertinenti al servizio, con idonea base giuridica e misure di sicurezza rafforzate.
          </li>
        </ul>
      </section>

      <section className={section}>
        <h2 className={h2}>3. Finalità, basi giuridiche e conservazione</h2>

        <h3 className={h3}>3.1 Erogazione del servizio piattaforma</h3>
        <p>
          <strong>Finalità:</strong> registrazione, gestione account, matching tra candidati e aziende, comunicazioni
          strumentali, assistenza.
          <br />
          <strong>Base giuridica:</strong> esecuzione di misure precontrattuali su richiesta dell&apos;interessato e/o
          esecuzione del contratto (art. 6, par. 1, lett. b) GDPR).
          <br />
          <strong>Conservazione:</strong> per la durata del rapporto e, successivamente, per tempi necessari a
          adempiere obblighi di legge o difendere un diritto (art. 2946 e ss. c.c., obblighi contabili, ecc.).
        </p>

        <h3 className={h3}>3.2 Obblighi di legge</h3>
        <p>
          <strong>Finalità:</strong> adempimenti contabili, fiscali, amministrativi, risposte all&apos;autorità.
          <br />
          <strong>Base giuridica:</strong> obbligo legale (art. 6, par. 1, lett. c) GDPR).
        </p>

        <h3 className={h3}>3.3 Marketing diretto (soft spam) su servizi analoghi</h3>
        <p>
          Ove previsto dalla legge applicabile, comunicazioni su servizi analoghi a quelli già acquistati, con possibilità
          di opposizione gratuita in ogni momento. Per ulteriori attività di marketing/profilazione serve consenso
          specifico, se richiesto.
        </p>

        <h3 className={h3}>3.4 Sicurezza e prevenzione abusi</h3>
        <p>
          <strong>Finalità:</strong> sicurezza del sito, prevenzione frodi, abuse detection.
          <br />
          <strong>Base giuridica:</strong> legittimo interesse del titolare, proporzionato e con equilibrio rispetto ai
          diritti dell&apos;interessato (art. 6, par. 1, lett. f) GDPR), ove applicabile.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>4. Natura del conferimento</h2>
        <p>
          Il conferimento dei dati contrassegnati come obbligatori è necessario per registrarsi e utilizzare le funzioni
          principali. Il mancato conferimento può comportare l&apos;impossibilità di erogare il servizio. I dati non
          obbligatori sono facoltativi e la loro mancata comunicazione non impedisce l&apos;uso delle funzioni base,
          salvo diversa indicazione.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>5. Modalità del trattamento</h2>
        <p>
          I dati sono trattati con strumenti informatici e telematici, con logiche strettamente correlate alle finalità
          indicate e mediante misure tecniche e organizzative adeguate (accessi limitati, backup, aggiornamenti di
          sicurezza).
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>6. Destinatari e responsabili</h2>
        <p>I dati possono essere comunicati a:</p>
        <ul className="list-inside list-disc space-y-2 pl-1">
          <li>
            <strong>Fornitori di infrastruttura IT e hosting</strong> (es. provider cloud, database) nominati qualora
            Responsabili del trattamento ai sensi dell&apos;art. 28 GDPR, con contratto di nomina.
          </li>
          <li>
            <strong>Consulenti legali, fiscali, di lavoro</strong>, quando necessario e nel rispetto del segreto
            professionale.
          </li>
          <li>
            <strong>Autorità pubbliche</strong> quando la comunicazione sia imposta dalla legge.
          </li>
        </ul>
        <p>
          Non è prevista la diffusione indiscriminata dei dati. I dati non saranno venduti a terzi per finalità
          commerciali non correlate al servizio senza base giuridica idonea e informativa.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>7. Trasferimenti verso Paesi extra-UE</h2>
        <p>
          Qualora si utilizzino fornitori con sede fuori dallo Spazio Economico Europeo, i trasferimenti avvengono sulla
          base di decisioni di adeguatezza della Commissione UE o di garanzie adeguate (es. Clausole Contrattuali
          Standard), con le informazioni aggiuntive richieste dal GDPR.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>8. Diritti dell&apos;interessato</h2>
        <p>
          L&apos;interessato può esercitare i diritti di cui agli artt. 15-22 GDPR: accesso, rettifica, cancellazione,
          limitazione, portabilità, opposizione, revoca del consenso ove prestato, reclamo al Garante per la protezione
          dei dati personali (
          <a href="https://www.garanteprivacy.it" className="premium-link" target="_blank" rel="noreferrer">
            www.garanteprivacy.it
          </a>
          ).
        </p>
        <p>
          Per esercitare i diritti: utilizzare i canali indicati nella pagina{" "}
          <Link to="/contatti" className="premium-link">
            Contatti
          </Link>
          . È possibile richiedere l&apos;elenco dei responsabili del trattamento e copia delle garanzie per
          trasferimenti extra-UE.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>9. Processo decisionale automatizzato e profilazione</h2>
        <p>
          Non sono adottate decisioni basate unicamente su trattamento automatizzato che producano effetti giuridici o
          incidano in modo analogo significativamente sull&apos;interessato ai sensi dell&apos;art. 22 GDPR, salvo
          diversa comunicazione aggiornata.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>10. Modifiche</h2>
        <p>
          Il titolare può aggiornare la presente informativa: la data di ultimo aggiornamento è indicata in calce.
          Invitiamo a consultarla periodicamente.
        </p>
      </section>

      <section className={section}>
        <h2 className={h2}>11. Cookie</h2>
        <p>
          Per informazioni dettagliate sui cookie:{" "}
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
