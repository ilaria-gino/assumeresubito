import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BRAND } from "../../config/brand";
import { PremiumPageShell } from "../../components/PremiumPageShell";
import { CompanyRegistrationForm } from "./CompanyRegistrationForm";
import { CompanyPricingSidebar } from "./CompanyPricingSidebar";

export function RegistrazioneAziendaPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#azienda") {
      document.getElementById("azienda")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <PremiumPageShell
      eyebrow="Imprese"
      title="Registrazione azienda"
      subtitle={`Compila il modulo. ${BRAND.name} non è un'agenzia: paghi per uso piattaforma, non per assunzioni. A destra (o sopra su telefono) piani Starter, Basic e Full con importi e sblocchi — stesso schermo (${BRAND.domain}).`}
      maxWidth="wide"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <aside className="order-1 lg:order-2 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-[#2C4A6E] lg:text-left">
            Piani e condizioni
          </p>
          <CompanyPricingSidebar />
        </aside>
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-[#6b7a8d] lg:text-left">
            Modulo iscrizione
          </p>
          <CompanyRegistrationForm />
        </div>
      </div>
    </PremiumPageShell>
  );
}
