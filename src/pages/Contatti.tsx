import { BRAND, mailtoContact } from "../config/brand";
import { PremiumPageShell } from "../components/PremiumPageShell";

export function Contatti() {
  return (
    <PremiumPageShell
      eyebrow="Assistenza"
      title="Contatti"
      subtitle="Recapiti per informazioni commerciali, partnership e assistenza. Lavoro48h non è un'agenzia per il lavoro: per collocamento rivolgersi a soggetti autorizzati."
    >
      <p className="text-[#152435]/90">
        Per informazioni commerciali, partnership, assistenza o per la definizione del titolare del trattamento nei
        documenti legali:
      </p>
      <p className="mt-6">
        <a className="premium-link text-lg font-semibold" href={mailtoContact()}>
          {BRAND.email}
        </a>
      </p>
    </PremiumPageShell>
  );
}
