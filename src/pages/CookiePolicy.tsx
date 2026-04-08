import { Link } from "react-router-dom";
import { PremiumPageShell } from "../components/PremiumPageShell";

export function CookiePolicy() {
  return (
    <PremiumPageShell
      eyebrow="Legale"
      title="Cookie Policy"
      subtitle='Informativa sui cookie e tecnologie simili ai sensi del GDPR e del Codice Privacy, in linea con le linee guida del Garante e le indicazioni europee su cookie e consenso.'
    >
      <article className="space-y-4 text-[#152435]/85 leading-relaxed">
      <h2 className="mt-2 text-xl font-bold text-[#152435]">1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente (computer,
        smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
        Si utilizzano anche tecnologie affini (es. <em>local storage</em>, <em>session storage</em>, pixel) per finalità
        analoghe.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">2. Titolare del trattamento</h2>
      <p>
        Il titolare è individuato nell&apos;{" "}
        <Link to="/privacy" className="premium-link">
          informativa privacy
        </Link>{" "}
        e nei recapiti della pagina{" "}
        <Link to="/contatti" className="premium-link">
          Contatti
        </Link>
        .
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">3. Tipologie di cookie utilizzati</h2>

      <h3 className="mt-6 text-lg font-semibold text-[#152435]">3.1 Cookie tecnici (necessari / &quot;strictly necessary&quot;)</h3>
      <p>
        Servono a erogare il servizio richiesto, navigare, memorizzare preferenze di sessione, sicurezza e
        funzionalità essenziali. In base alla normativa vigente, per questi cookie non è richiesto il consenso, ma
        resta l&apos;obbligo di informativa.
      </p>
      <ul className="list-inside list-disc space-y-2 pl-1">
        <li>
          <strong>Cookie di sessione / navigazione:</strong> garantiscono il corretto funzionamento delle pagine.
        </li>
        <li>
          <strong>Preferenze cookie (consenso):</strong> memorizzazione in <code>localStorage</code> della scelta
          espressa tramite cookie banner (categoria, data aggiornamento), per non ripresentare il banner in modo
          invasivo.
        </li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold text-[#152435]">3.2 Cookie di funzionalità (preferenze)</h3>
      <p>
        Ricordano le scelte dell&apos;utente (es. lingua, area). Sono attivati solo se hai prestato consenso, salvo
        quando strettamente necessari al servizio.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-[#152435]">3.3 Cookie analitici / di misurazione</h3>
      <p>
        Raccolgono informazioni aggregate su visite e comportamento (es. pagine viste). Se gli strumenti
        equivalgono a <em>analytics</em> con identificativi o profilazione, è richiesto il consenso, salvo
        eccezioni documentate e misure di minimizzazione conformi alle indicazioni del Garante/EDPB.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-[#152435]">3.4 Cookie di profilazione / marketing</h3>
      <p>
        Finalizzati a inviare pubblicità in linea con i preferenze manifestate o a profilare l&apos;utente. Richiedono
        consenso esplicito e informativa chiara.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">4. Elenco indicativo (aggiornare in produzione)</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-2 pr-2">Nome</th>
              <th className="py-2 pr-2">Tipologia</th>
              <th className="py-2 pr-2">Finalità</th>
              <th className="py-2">Durata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-2 pr-2 font-mono text-xs">as_cookie_preferences_v1</td>
              <td>Necessario</td>
              <td>Memorizza la scelta sui cookie (localStorage)</td>
              <td>12 mesi</td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-mono text-xs">session</td>
              <td>Necessario</td>
              <td>Sessione applicativa o autenticazione se attiva</td>
              <td>Sessione</td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-mono text-xs">analytics</td>
              <td>Analitico</td>
              <td>Misurazione visite solo previo consenso</td>
              <td>Secondo fornitore</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">5. Base giuridica e consenso</h2>
      <p>
        I cookie tecnici strettamente necessari: interesse legittimo / esecuzione del servizio richiesto. Gli altri
        cookie: consenso dell&apos;utente (art. 6, par. 1, lett. a) GDPR), revocabile in ogni momento senza pregiudicare
        la liceità del trattamento basata sul consenso prima della revoca.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">6. Come gestire o revocare il consenso</h2>
      <p>
        Puoi modificare le tue scelte dalle impostazioni del browser o contattando il titolare ai recapiti indicati
        nell&apos;informativa privacy.
      </p>
      <p>
        I browser consentono di disabilitare i cookie: consulta la guida del tuo browser (Chrome, Firefox, Safari,
        Edge). La disabilitazione dei cookie tecnici può compromettere alcune funzioni.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">7. Trasferimenti extra-UE</h2>
      <p>
        Qualora i fornitori trattino dati fuori dallo Spazio Economico Europeo si applicano le garanzie previste dal
        GDPR (clausole contrattuali standard, decisioni di adeguatezza o altre misure idonee), come descritto nei
        rapporti contrattuali con i responsabili del trattamento.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#152435]">8. Ulteriori informazioni e diritti</h2>
      <p>
        Per i diritti dell&apos;interessato (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione,
        reclamo al Garante) vedi l&apos;{" "}
        <Link to="/privacy" className="premium-link">
          informativa privacy
        </Link>
        .
      </p>

      <p className="mt-10 text-sm text-[#6b7a8d]">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
      </p>
    </article>
    </PremiumPageShell>
  );
}
