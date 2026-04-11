import { Link } from "react-router-dom";
import { PremiumPageShell } from "../components/PremiumPageShell";

export function RetribuzioniOrientative() {
  return (
    <PremiumPageShell
      eyebrow="Strumenti"
      title="Retribuzioni orientative di mercato"
      subtitle="Quadro indicativo per confrontare offerte e aspettative — non sostituisce CCNL, contratti né consulenza del lavoro. Lavoro48h non è un'agenzia per il lavoro."
    >
      <p className="text-[#152435]/90 leading-relaxed">
        <strong>Bande retributive indicative</strong> per settore, seniority e area geografica in Italia, utili per
        confrontare un’offerta o calibrare un annuncio. Sono stime di mercato riviste periodicamente (osservazioni sul
        territorio, annunci, fonti pubbliche) e <strong>non sostituiscono CCNL, accordi aziendali né consulenza del
        lavoro</strong>. Ogni rapporto va definito in contratto.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-[#e1dbd1] bg-white shadow-sm">
        <table className="w-full min-w-[320px] text-left text-sm">
          <caption className="border-b border-[#e1dbd1] px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-[#6b7a8d]">
            Esempi orientativi (lordo mensile — aree di riferimento, aggiornare con i vostri dati)
          </caption>
          <thead>
            <tr className="border-b border-[#e1dbd1] bg-[#f7f5f1]">
              <th className="px-4 py-3 font-semibold text-[#152435]">Settore / ruolo</th>
              <th className="px-4 py-3 font-semibold text-[#152435]">Seniority</th>
              <th className="px-4 py-3 font-semibold text-[#152435]">Area</th>
              <th className="px-4 py-3 font-semibold text-[#152435]">Banda indicativa (€ lordo / mese o RAL)</th>
            </tr>
          </thead>
          <tbody className="text-[#152435]/85">
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-4 py-3">Operaio edile qualificato</td>
              <td className="px-4 py-3">2–5 anni</td>
              <td className="px-4 py-3">Nord / Centro (es. Veneto, Lombardia)</td>
              <td className="px-4 py-3">ca. 1.550–1.950 € lordo / mese</td>
            </tr>
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-4 py-3">Idraulico / termoidraulico</td>
              <td className="px-4 py-3">5+ anni</td>
              <td className="px-4 py-3">Nord / Centro (es. Veneto, Lombardia)</td>
              <td className="px-4 py-3">ca. 1.900–2.450 € lordo / mese</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Elettricista impianti civili</td>
              <td className="px-4 py-3">3–8 anni</td>
              <td className="px-4 py-3">Nord / Centro (es. Veneto, Lombardia)</td>
              <td className="px-4 py-3">ca. 1.700–2.200 € lordo / mese</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[#6b7a8d]">
        Le cifre sono arrotondate e possono variare per turni, straordinari, benefit, dimensione dell’impresa e
        contrattualistica applicabile. Non costituiscono offerta né parere professionale.
      </p>
      <p className="mt-8 text-sm text-[#6b7a8d]">
        Per approfondimenti su contratti e diritti:{" "}
        <Link to="/faq" className="premium-link">
          FAQ
        </Link>
        . Per le condizioni del servizio:{" "}
        <Link to="/termini" className="premium-link">
          Termini
        </Link>
        .
      </p>
    </PremiumPageShell>
  );
}
