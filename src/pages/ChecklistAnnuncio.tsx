import { Link } from "react-router-dom";

const ITEMS = [
  "Titolo del ruolo comprensibile a chi non conosce la vostra organizzazione interna",
  "Sede o zone operative e, se utile, modalità di lavoro (presenza, ibrido)",
  "Mansioni principali in ordine di priorità, senza elenchi infiniti di sinonimi",
  "Requisiti obbligatori distinti da quelli preferenziali",
  "Contratto e orario indicati con realismo (o chiaro “da definire” se non ancora deciso)",
  "Retribuzione o politica: banda indicativa, oppure motivazione seria se non comunicata",
  "Benefit concreti (formazione, strumenti, buoni pasto, assicurazioni) evitando formule vuote",
  "Processo di candidatura: cosa inviare, dove, entro quando e tempi di feedback attesi",
  "Allineamento con privacy policy e consensi se usate form o piattaforme",
  "Revisione ortografica e coerenza con la job description interna",
  "Piano di chiusura annuncio quando il ruolo è coperto (evitare candidature “a vuoto”)",
];

export function ChecklistAnnuncio() {
  return (
    <div className="luxury-page font-luxury-sans pb-24">
      <header className="border-b border-[#e1dbd1] bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#2C4A6E]">Risorse</p>
          <h1 className="font-luxury-display mt-3 text-3xl font-semibold text-[#152435] sm:text-4xl">
            Checklist prima di pubblicare un annuncio
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Elenco operativo per imprese e HR. Lavoro48h è una bacheca digitale tra utenti, non un&apos;agenzia per il
            lavoro. Non sostituisce consulenza legale o del lavoro. Per il metodo completo vedi anche l&apos;articolo sul
            blog e le{" "}
            <Link to="/faq" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
              FAQ
            </Link>
            .
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <ol className="space-y-4 rounded-2xl border border-[#e1dbd1] bg-[#faf8f5] p-6 sm:p-8">
          {ITEMS.map((text, i) => (
            <li key={text} className="flex gap-4 text-[#152435]">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-[#2C4A6E]/30 bg-white text-sm font-bold text-[#2C4A6E]"
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="pt-1 text-sm leading-relaxed sm:text-base">{text}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/blog/annuncio-lavoro-efficace-scrittura-selezione"
            className="rounded-xl bg-[#2C4A6E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3a5f8c]"
          >
            Articolo: annuncio efficace
          </Link>
          <Link
            to="/registrazione/azienda"
            className="rounded-xl border border-[#e1dbd1] bg-white px-5 py-2.5 text-sm font-semibold text-[#152435] hover:border-[#2C4A6E]/40"
          >
            Iscrizione imprese
          </Link>
        </div>
      </div>
    </div>
  );
}
