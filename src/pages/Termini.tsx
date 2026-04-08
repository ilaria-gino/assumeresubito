import { PremiumPageShell } from "../components/PremiumPageShell";

export function Termini() {
  return (
    <PremiumPageShell
      eyebrow="Legale"
      title="Termini di utilizzo"
      subtitle="Condizioni d'uso della piattaforma e accesso ai servizi."
    >
      <p className="text-[#152435]/90">
        Le condizioni d&apos;uso della piattaforma disciplinano l&apos;accesso ai servizi, le responsabilità di aziende e
        candidati, le regole su anonimato e comunicazione dei dati dopo il match, nonché le modalità di pagamento
        (pay-per-hire e abbonamento dove previsti).
      </p>
      <p className="mt-4 text-[#152435]/90">
        Il testo completo sarà pubblicato in questa pagina e reso disponibile al momento dell&apos;accettazione in fase
        di registrazione.
      </p>
    </PremiumPageShell>
  );
}
