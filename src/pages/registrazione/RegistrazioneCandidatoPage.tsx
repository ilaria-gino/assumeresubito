import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BRAND } from "../../config/brand";
import { PremiumPageShell } from "../../components/PremiumPageShell";
import { CandidateRegistrationForm } from "./CandidateRegistrationForm";
import { CandidatePricingSidebar } from "./CandidatePricingSidebar";

export function RegistrazioneCandidatoPage() {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash === "#piano-cerca-aziende" ? "piano-cerca-aziende" : hash === "#candidato" ? "candidato" : null;
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <PremiumPageShell
      eyebrow="Candidati"
      title="Registrazione candidato"
      subtitle={`Compila il modulo. Non agenzia per il lavoro: profilo e incontro in autonomia con le imprese. Accanto: gratis vs a pagamento e piano «Cerca aziende» — tutto sullo stesso schermo (${BRAND.domain}).`}
      maxWidth="wide"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <aside className="order-1 lg:order-2 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-[#FF6B35] lg:text-left">
            Cosa costa e cosa è gratis
          </p>
          <CandidatePricingSidebar />
        </aside>
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-[#6b7a8d] lg:text-left">
            Modulo iscrizione
          </p>
          <CandidateRegistrationForm />
        </div>
      </div>
    </PremiumPageShell>
  );
}
