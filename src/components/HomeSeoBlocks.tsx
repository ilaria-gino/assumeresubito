import { Link } from "react-router-dom";

/** Per chi è / per chi non è — filtra aspettative e rafforza posizionamento. */
export function AudienceFitSection() {
  return (
    <section
      className="border-y border-[#e1dbd1] bg-[#fdfbf7] px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="audience-fit-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#3A5F8C]">Posizionamento</p>
        <h2
          id="audience-fit-title"
          className="font-luxury-display mt-3 text-center text-2xl font-semibold text-[#152435] sm:text-3xl"
        >
          Per chi è il servizio — e quando conviene altro
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#6b7a8d] sm:text-base">
          Trasparenza sul modello: <strong className="font-semibold text-[#152435]">non siamo un&apos;agenzia per il lavoro</strong>
          — bacheca digitale con verticali e tempi definiti; niente intermediazione o collocamento. Strumento per
          incontrare liberamente domanda e offerta; nessun rapporto di lavoro con noi e nessun obbligo di assumere o di
          accettare un impiego. Non sostituisce consulenza legale o del lavoro.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#2C4A6E]/20 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-[#2C4A6E]">Di solito adatto se…</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#152435]/90">
              <li className="flex gap-2">
                <span className="text-[#FF6B35]" aria-hidden>
                  ✓
                </span>
                Cerchi o offri lavoro con <strong className="font-semibold">settore</strong> e{" "}
                <strong className="font-semibold">zona</strong> chiari, accettando un percorso con informazioni progressive.
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF6B35]" aria-hidden>
                  ✓
                </span>
                Vuoi <strong className="font-semibold">ridurre il rumore</strong> di curriculum generici rispetto a
                portali non strutturati.
              </li>
              <li className="flex gap-2">
                <span className="text-[#FF6B35]" aria-hidden>
                  ✓
                </span>
                Valuti <strong className="font-semibold">tempi di risposta</strong> dichiarati (orientamento alle 48 ore ove
                applicabile) come parte del servizio.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#991b1b]/20 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-[#991b1b]">Meno indicato se…</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#152435]/90">
              <li className="flex gap-2">
                <span className="text-red-400" aria-hidden>
                  •
                </span>
                Ti aspetti <strong className="font-semibold">solo volume massimo</strong> di CV senza filtri o senza
                impegno su processo e feedback.
              </li>
              <li className="flex gap-2">
                <span className="text-red-400" aria-hidden>
                  •
                </span>
                Cerchi <strong className="font-semibold">consulenza del lavoro, legal o fiscale</strong>: rivolgiti a
                professionisti abilitati; FAQ e blog sono divulgativi.
              </li>
              <li className="flex gap-2">
                <span className="text-red-400" aria-hidden>
                  •
                </span>
                Cerchi un&apos;<strong className="font-semibold">agenzia per il lavoro</strong> o un intermediario al
                collocamento autorizzato: <strong className="font-semibold">non lo siamo</strong> e non possiamo svolgere
                quelle funzioni.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const toolCard =
  "flex flex-col rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2C4A6E]/30 hover:shadow-md";

/** Link interni a strumenti e hub (SEO + utilità). */
export function ToolsResourceStrip() {
  return (
    <section className="bg-[#ece7df]/60 px-4 py-14 sm:px-6" aria-labelledby="tools-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="tools-title" className="font-luxury-display text-center text-2xl font-semibold text-[#152435] sm:text-3xl">
          Strumenti e approfondimenti
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#6b7a8d]">
          Pagine utili per imprese e candidati, collegate tra loro per orientarti prima e dopo l&apos;iscrizione.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Link to="/italia" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Geografia</span>
              <span className="mt-2 font-semibold text-[#152435]">Italia per regione</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Contesto locale e link ai verticali.</span>
            </Link>
          </li>
          <li>
            <Link to="/candidati" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#FF6B35]">Profili</span>
              <span className="mt-2 font-semibold text-[#152435]">Cerca candidati</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Anteprima del flusso lato impresa.</span>
            </Link>
          </li>
          <li>
            <Link to="/retribuzioni-orientative" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Mercato</span>
              <span className="mt-2 font-semibold text-[#152435]">Retribuzioni orientative</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Bande indicative, non consulenza.</span>
            </Link>
          </li>
          <li>
            <Link to="/risorse/checklist-annuncio" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Imprese</span>
              <span className="mt-2 font-semibold text-[#152435]">Checklist annuncio</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Prima di pubblicare una ricerca.</span>
            </Link>
          </li>
          <li>
            <Link to="/faq" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Supporto</span>
              <span className="mt-2 font-semibold text-[#152435]">FAQ</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Domande ricorrenti su piani e privacy.</span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className={toolCard}>
              <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Editoriale</span>
              <span className="mt-2 font-semibold text-[#152435]">Blog</span>
              <span className="mt-2 text-sm text-[#6b7a8d]">Guide su annunci e diritti (non sostituisce un&apos;agenzia).</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
