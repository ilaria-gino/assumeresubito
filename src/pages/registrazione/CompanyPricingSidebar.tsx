import { Link } from "react-router-dom";
import { mailtoContact } from "../../config/brand";
import { btnPrimary, btnSecondary } from "../../components/ui/ButtonStyles";

/** Piani e condizioni per la colonna affiancata al modulo azienda (ex pagina Prezzi). */
export function CompanyPricingSidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-[#2C4A6E]">Come funziona il costo</p>
        <p className="mt-2 text-sm font-bold text-[#152435]">Sblocco profilo completo</p>
        <p className="mt-2 text-sm leading-relaxed text-[#152435]/90">
          Dopo l&apos;anteprima anonima, lo <strong>sblocco</strong> consente di accedere ai dati completi del candidato
          secondo il servizio. Ogni piano fissa <strong>quanti sblocchi</strong> usi nel periodo. Il corrispettivo è per
          l&apos;accesso agli strumenti digitali, <strong>non</strong> per esito di colloquio o assunzione.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#152435]/90">
          Con <strong>Starter</strong> e <strong>Basic</strong> il contatto parte in genere dall&apos;
          <strong>impresa</strong>. Con <strong>Full</strong> puoi ottenere (se in contratto) anche l&apos;iniziativa dal
          candidato.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1">
        <div className="flex flex-col rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-[#6b7a8d]">Starter</p>
          <p className="mt-2 font-luxury-display text-2xl font-semibold text-[#152435]">
            99 €<span className="text-base font-semibold text-[#6b7a8d]">/mese</span>
          </p>
          <p className="text-xs text-[#6b7a8d]">+ IVA · indicativo</p>
          <p className="mt-3 text-sm text-[#152435]/90">
            <strong>1</strong> sblocco al mese, non cumulabile.
          </p>
          <Link
            to="/registrazione/azienda#azienda"
            className={`${btnSecondary} mt-4 w-full justify-center py-3 text-sm`}
          >
            Compila il modulo → pagamento dopo offerta
          </Link>
        </div>

        <div className="relative flex flex-col rounded-2xl border-2 border-[#FF6B35] bg-gradient-to-b from-[#fff7ed] to-white p-5 shadow-md">
          <span className="absolute -top-2.5 left-3 rounded-full bg-[#FF6B35] px-2 py-0.5 text-[0.65rem] font-bold text-[#0A0F1C]">
            Spesso scelto
          </span>
          <p className="text-xs font-bold uppercase text-[#2C4A6E]">Basic</p>
          <p className="mt-2 font-luxury-display text-2xl font-semibold text-[#152435]">
            690 €<span className="text-base font-semibold text-[#6b7a8d]">/anno</span>
          </p>
          <p className="text-xs text-[#6b7a8d]">+ IVA · indicativo</p>
          <p className="mt-3 text-sm text-[#152435]/90">
            <strong>5</strong> sblocchi nell&apos;anno contrattuale · supporto email.
          </p>
          <Link
            to="/registrazione/azienda#azienda"
            className={`${btnPrimary} mt-4 w-full justify-center py-3 text-sm`}
          >
            Compila il modulo → pagamento dopo offerta
          </Link>
        </div>

        <div className="flex flex-col rounded-2xl border border-[#e1dbd1] bg-[#0f172a] p-5 text-white shadow-sm">
          <p className="text-xs font-bold uppercase text-white/80">Full — piano top</p>
          <p className="mt-2 font-luxury-display text-2xl font-semibold text-white">
            1.890 €<span className="text-base font-semibold text-white/70">/anno</span>
          </p>
          <p className="text-xs text-white/60">+ IVA · indicativo</p>
          <p className="mt-3 text-sm text-white/90">
            Sblocchi <strong>illimitati</strong> (fair use) · vantaggi top e opzione contatto da candidato se in contratto.
          </p>
          <a
            href={mailtoContact("Piano Full (top)")}
            className="mt-4 flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 py-3 text-center text-sm font-bold text-white transition hover:bg-white/15"
          >
            Richiedi Full
          </a>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#e1dbd1] bg-white text-sm shadow-sm">
        <table className="w-full min-w-[260px] text-left">
          <thead>
            <tr className="border-b border-[#e1dbd1] bg-[#f7f5f1] text-[#152435]">
              <th className="px-3 py-2 font-semibold">Piano</th>
              <th className="px-3 py-2 font-semibold">Indicativo</th>
              <th className="px-3 py-2 font-semibold">Sblocchi</th>
            </tr>
          </thead>
          <tbody className="text-[#152435]/90">
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-3 py-2">Starter</td>
              <td className="px-3 py-2">99 €/mese</td>
              <td className="px-3 py-2">1 / mese</td>
            </tr>
            <tr className="border-b border-[#e1dbd1]">
              <td className="px-3 py-2">Basic</td>
              <td className="px-3 py-2">690 €/anno</td>
              <td className="px-3 py-2">5 / anno</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Full</td>
              <td className="px-3 py-2">1.890 €/anno</td>
              <td className="px-3 py-2">Illimitati</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-xs text-[#6b7a8d]">
        Bacheca digitale, non agenzia. Dettagli in{" "}
        <Link to="/privacy" className="underline">
          Privacy
        </Link>{" "}
        e{" "}
        <Link to="/termini" className="underline">
          Termini
        </Link>
        .
      </p>
    </div>
  );
}
