import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";

export function ChiSiamo() {
  return (
    <PremiumPageShell
      eyebrow="Chi siamo"
      title="Il servizio Lavoro48h"
      subtitle={`${BRAND.name} è uno strumento digitale per far incontrare, in autonomia, organizzazioni e candidati — esplicitamente non un'agenzia per il lavoro.`}
    >
      <div className="rounded-2xl border border-[#2C4A6E]/25 bg-[#f0f6fb] px-5 py-4 text-sm leading-relaxed text-[#152435]">
        <strong className="font-semibold text-[#152435]">Attenzione:</strong> {BRAND.name}{" "}
        <strong>non è un&apos;agenzia per il lavoro</strong>, non opera in regime di intermediazione o collocamento
        autorizzato e non seleziona candidati al posto delle imprese. Il servizio equivale a un{" "}
        <strong>marketplace / bacheca on-line di annunci</strong> con strumenti tecnici di consultazione. L&apos;iscrizione
        non crea rapporto di lavoro con il titolare del sito né obblighi di esito tra utenti.
      </div>
      <p className="mt-6 text-lg leading-relaxed text-[#152435]/90">
        <strong className="font-semibold text-[#152435]">{BRAND.name}</strong> ({BRAND.domain}) mette in relazione
        domanda e offerta — bisogni spesso complementari — con filtri e livelli di dettaglio progressivi, così che le
        parti possano incontrarsi liberamente. Ogni valutazione, colloquio e assunzione resta in capo a{" "}
        <strong>candidati e imprese</strong>.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-[#152435]/90">
        Il modello prevede una prima fase con informazioni proporzionate e, ove applicabile, profili presentati in forma
        non completamente identificativa, per orientare la prima scelta su competenze e disponibilità (la selezione
        finale è in azienda). I tempi di risposta
        sono definiti nel rispetto delle possibilità operative delle parti e, dove previsto dal servizio, con
        riferimento a finestre orientate alle quarantotto ore.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-[#152435]/90">
        Le imprese accedono tramite abbonamento (<strong>Starter</strong>, <strong>Basic</strong> o{" "}
        <strong>Full</strong>), come descritto in{" "}
        <Link to="/registrazione/azienda" className="premium-link">
          Iscrizione imprese e piani
        </Link>
        ; i candidati non pagano per il <strong>profilo base</strong> (solo contattati dalle imprese). Chi richiede anche
        le funzioni per <strong>cercare attivamente le aziende</strong> può sottoscrivere un piano candidato a parte, come
        da{" "}
        <Link to="/registrazione/candidato#piano-cerca-aziende" className="premium-link">
          Piano candidato «Cerca aziende»
        </Link>
        . Con <strong>Starter</strong> e <strong>Basic</strong> l’iniziativa di
        contatto dopo lo sblocco resta in capo all’impresa; il piano <strong>Full</strong> (top) può includere, se abilitato
        nel contratto, la possibilità per il candidato di manifestare interesse o contattare l’azienda — un vantaggio
        commerciale da comunicare chiaramente al team che sottoscrive l’abbonamento.
      </p>
      <ul className="mt-8 list-inside list-disc space-y-2 text-[#152435]/90">
        <li>
          Verticali per ambiti professionali (immobiliare, ristorazione, logistica, edilizia, termoidraulica, impianti
          elettrici, uffici, commercio)
        </li>
        <li>
          Ricerca geografica su <strong>tutta Italia</strong>: regione e città di riferimento; i candidati possono dichiarare
          il raggio in chilometri che sono disposti a percorrere per lavoro
        </li>
        <li>Trattamento dei dati secondo normativa privacy e documentazione accessibile dal sito</li>
        <li>Recapiti ufficiali nella pagina Contatti per commerciale e assistenza</li>
      </ul>
      <Link to="/contatti" className="premium-link mt-10 inline-block font-semibold">
        Contatti
      </Link>
    </PremiumPageShell>
  );
}
