import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BRAND } from "../../config/brand";
import { PremiumPageShell } from "../../components/PremiumPageShell";
import { btnPrimary, btnSecondary } from "../../components/ui/ButtonStyles";

/** Scelta iniziale: percorso candidato o impresa (con prezzi sulle pagine dedicate). */
export function RegistrazioneHub() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#azienda") {
      navigate("/registrazione/azienda", { replace: true });
    } else if (hash === "#candidato") {
      navigate("/registrazione/candidato", { replace: true });
    }
  }, [hash, navigate]);

  return (
    <PremiumPageShell
      eyebrow="Accesso"
      title="Come vuoi iscriverti?"
      subtitle={`Scegli un percorso. Su ogni pagina trovi il modulo e, accanto, i costi e le condizioni per il tuo ruolo — così da telefono è chiaro chi paga cosa (${BRAND.domain}).`}
      maxWidth="wide"
    >
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-8">
        <Link
          to="/registrazione/candidato"
          className="group flex flex-col rounded-3xl border-2 border-[#FF6B35]/35 bg-gradient-to-b from-[#fff7ed] to-white p-8 shadow-lg transition hover:border-[#FF6B35]/55 hover:shadow-xl"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-[#FF6B35]">Cerco lavoro</span>
          <h2 className="mt-3 font-luxury-display text-2xl font-semibold text-[#152435] group-hover:text-[#2C4A6E]">
            Sono un candidato
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[#152435]/85">
            Modulo + riquadro con percorso <strong>gratis</strong> (ti contattano) o <strong>a pagamento</strong> (cercare
            le aziende). Tutto sulla stessa pagina.
          </p>
          <span className={`${btnPrimary} mt-8 w-full justify-center`}>Continua</span>
        </Link>

        <Link
          to="/registrazione/azienda"
          className="group flex flex-col rounded-3xl border-2 border-[#2C4A6E]/25 bg-white p-8 shadow-lg transition hover:border-[#2C4A6E]/45 hover:shadow-xl"
        >
          <span className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Assumo personale</span>
          <h2 className="mt-3 font-luxury-display text-2xl font-semibold text-[#152435] group-hover:text-[#2C4A6E]">
            Sono un&apos;impresa
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[#152435]/85">
            Modulo richiesta + <strong>Starter, Basic e Full</strong> con prezzi e sblocchi affiancati. Poi pagamento
            secondo offerta.
          </p>
          <span className={`${btnSecondary} mt-8 w-full justify-center border-2 border-[#2C4A6E]/30`}>Continua</span>
        </Link>
      </div>
      <p className="mt-10 text-center text-sm text-[#152435]/75">
        <Link to="/#dopo-iscrizione" className="font-semibold text-[#2C4A6E] underline decoration-[#2C4A6E]/30 underline-offset-4">
          Cosa succede dopo l&apos;iscrizione
        </Link>{" "}
        (tempi orientati alle 48 ore ove applicabile, match per settore e area).
      </p>
    </PremiumPageShell>
  );
}
