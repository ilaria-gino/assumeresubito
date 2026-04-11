import { Link } from "react-router-dom";
import { btnPrimary, btnSecondary } from "../../components/ui/ButtonStyles";

/** Piani candidato affiancati al modulo (ex sezione Prezzi). */
export function CandidatePricingSidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border-2 border-[#152435]/20 bg-gradient-to-br from-[#ecfdf5] via-white to-[#fff7ed] p-5 shadow-sm sm:p-6">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#2C4A6E]">
          Due possibilità chiare
        </p>
        <h3 className="mt-2 text-center font-luxury-display text-xl font-semibold text-[#152435] sm:text-2xl">
          Scegli un solo percorso nel modulo
        </h3>
        <div className="mt-4 grid gap-3 sm:gap-4">
          <div className="rounded-2xl border-2 border-emerald-600/35 bg-white p-4 text-center shadow-sm">
            <span className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase text-white">
              Gratis
            </span>
            <p className="mt-3 font-bold text-[#152435]">Resti contattabile</p>
            <p className="mt-2 text-sm leading-snug text-[#152435]/85">
              Ti iscrivi senza pagare: le imprese abbonate possono trovarti. Il contatto parte in genere da loro.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-[#FF6B35] bg-white p-4 text-center shadow-sm ring-2 ring-[#FF6B35]/10">
            <span className="inline-flex rounded-full bg-[#FF6B35] px-3 py-1 text-xs font-bold uppercase text-[#0A0F1C]">
              A pagamento
            </span>
            <p className="mt-3 font-bold text-[#152435]">Cerchi anche tu le aziende</p>
            <p className="mt-2 text-sm leading-snug text-[#152435]/85">
              Dopo pagamento e attivazione, accesso alle funzioni per consultare profili imprese in linea con il tuo profilo.
            </p>
          </div>
        </div>
      </div>

      <div
        id="piano-cerca-aziende"
        className="scroll-mt-28 rounded-2xl border-2 border-[#FF6B35]/30 bg-gradient-to-b from-[#fff7ed] to-white p-5 shadow-sm sm:p-6"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-[#FF6B35]">Piano «Cerca aziende»</p>
        <h2 className="mt-2 font-luxury-display text-xl font-semibold text-[#152435] sm:text-2xl">
          Per chi vuole cercare attivamente
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#152435]/90">
          Oltre al profilo <strong>gratuito</strong>, puoi richiedere l&apos;accesso per{" "}
          <strong>consultare le schede delle imprese</strong> coerenti con settore e zona, dopo contratto e pagamento.{" "}
          <strong>Paese</strong>, <strong>città</strong>, <strong>CAP</strong> e <strong>km</strong> nel modulo devono
          essere coerenti.
        </p>
        <p className="mt-4 font-luxury-display text-3xl font-semibold text-[#152435]">
          99 €<span className="text-lg font-semibold text-[#6b7a8d]"> / 6 mesi</span>
        </p>
        <p className="text-xs text-[#6b7a8d]">+ IVA · importo indicativo · fa fede il contratto</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#152435]/90">
          <li>Durata semestrale, rinnovo secondo condizioni pubblicate.</li>
          <li>Attivazione dopo verifica e pagamento (riceverai istruzioni via email).</li>
          <li>Non sostituisce le regole lato impresa (es. piano Full per certi contatti).</li>
        </ul>
        <Link
          to="/registrazione/candidato#candidato"
          className={`${btnPrimary} mt-5 inline-flex w-full justify-center py-3 text-sm`}
        >
          Torna su al modulo
        </Link>
        <Link to="/faq" className={`${btnSecondary} mt-2 inline-flex w-full justify-center py-3 text-sm`}>
          Domande frequenti
        </Link>
      </div>
    </div>
  );
}
