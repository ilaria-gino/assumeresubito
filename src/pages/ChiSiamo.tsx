import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";

export function ChiSiamo() {
  return (
    <PremiumPageShell
      eyebrow="Chi siamo"
      title="Il servizio Lavoro48h"
      subtitle={`${BRAND.name} struttura l'incontro tra organizzazioni e candidati, con percorsi distinti e attenzione ai settori di riferimento.`}
    >
      <p className="text-lg leading-relaxed text-[#152435]/90">
        <strong className="font-semibold text-[#152435]">{BRAND.name}</strong> ({BRAND.domain}) è un servizio digitale
        finalizzato a strutturare l&apos;incontro tra organizzazioni che cercano personale e persone che cercano
        occupazione, con percorsi distinti per ciascun profilo e con attenzione ai settori economici di riferimento.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-[#152435]/90">
        Il modello prevede una prima fase con informazioni proporzionate e, ove applicabile, profili presentati in forma
        non completamente identificativa, per orientare la selezione su competenze e disponibilità. I tempi di risposta
        sono definiti nel rispetto delle possibilità operative delle parti e, dove previsto dal servizio, con
        riferimento a finestre orientate alle quarantotto ore.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-[#152435]/90">
        Le condizioni economiche per le aziende sono descritte in trasparenza nella sezione{" "}
        <Link to="/prezzi" className="premium-link">
          Prezzi
        </Link>
        ; l&apos;iscrizione dei candidati al profilo base non comporta corrispettivo.
      </p>
      <ul className="mt-8 list-inside list-disc space-y-2 text-[#152435]/90">
        <li>Verticali per ambiti professionali (immobiliare, ristorazione, logistica, edilizia, uffici, commercio)</li>
        <li>Trattamento dei dati secondo normativa privacy e documentazione accessibile dal sito</li>
        <li>Recapiti ufficiali nella pagina Contatti per commerciale e assistenza</li>
      </ul>
      <Link to="/contatti" className="premium-link mt-10 inline-block font-semibold">
        Contatti
      </Link>
    </PremiumPageShell>
  );
}
