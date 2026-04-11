import { Link } from "react-router-dom";

/** Blocco value proposition: cosa succede dopo l'iscrizione (48h, match, dettaglio progressivo). */
export function PostSignupJourney() {
  return (
    <section
      id="dopo-iscrizione"
      className="scroll-mt-[calc(var(--nav-h)+0.5rem)] border-y border-[#e1dbd1] bg-white px-4 py-14 sm:px-6 sm:py-16"
      aria-labelledby="post-signup-title"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#2C4A6E]">Percorso</p>
        <h2
          id="post-signup-title"
          className="font-luxury-display mt-3 text-center text-2xl font-semibold text-[#152435] sm:text-3xl md:text-[2.15rem]"
        >
          Cosa succede dopo l&apos;iscrizione
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#6b7a8d] sm:text-base">
          Tempi orientati alle <strong className="font-semibold text-[#152435]">48 ore</strong> ove applicabile: il
          servizio organizza incontro tra domanda e offerta con{" "}
          <strong className="font-semibold text-[#152435]">verticali di settore</strong>,{" "}
          <strong className="font-semibold text-[#152435]">area in Italia</strong> e{" "}
          <strong className="font-semibold text-[#152435]">dettaglio progressivo</strong> del profilo secondo le regole
          della piattaforma — non siamo un&apos;agenzia per il lavoro.
        </p>

        <ol className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3 sm:gap-6">
          <li className="relative rounded-2xl border border-[#e1dbd1] bg-[#f7f5f1] p-5 shadow-sm">
            <span
              className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35] text-sm font-bold text-[#0A0F1C] shadow"
              aria-hidden
            >
              1
            </span>
            <h3 className="mt-4 font-semibold text-[#152435]">Modulo e scelta</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7a8d]">
              Compili il percorso da{" "}
              <Link to="/registrazione/candidato" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
                candidato
              </Link>{" "}
              o da{" "}
              <Link to="/registrazione/azienda" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
                impresa
              </Link>
              : piano, settore e dati geografici coerenti con quanto offrite o cercate.
            </p>
          </li>
          <li className="relative rounded-2xl border border-[#e1dbd1] bg-[#f7f5f1] p-5 shadow-sm">
            <span
              className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#2C4A6E] text-sm font-bold text-white shadow"
              aria-hidden
            >
              2
            </span>
            <h3 className="mt-4 font-semibold text-[#152435]">Visibilità e match</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7a8d]">
              Il profilo entra nel vertical di riferimento con filtri su competenze e zona; l&apos;anonimato iniziale
              tutela chi cerca e chi offre fino alle fasi previste.
            </p>
          </li>
          <li className="relative rounded-2xl border border-[#e1dbd1] bg-[#f7f5f1] p-5 shadow-sm sm:col-span-1">
            <span
              className="absolute -top-3 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35] text-sm font-bold text-[#0A0F1C] shadow"
              aria-hidden
            >
              3
            </span>
            <h3 className="mt-4 font-semibold text-[#152435]">Contatto e passi successivi</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7a8d]">
              Le imprese ricevono risposte orientate alle 48 ore ove applicabile; i candidati seguono le regole del proprio
              piano (incluso chi può contattare chi). Per i dettagli:{" "}
              <Link to="/faq" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
                FAQ
              </Link>
              .
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
