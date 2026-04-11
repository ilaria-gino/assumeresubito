import { Link } from "react-router-dom";
import { btnPrimarySm } from "../components/ui/ButtonStyles";
import { MarketplaceNotice } from "../components/MarketplaceNotice";

export function NotFound() {
  return (
    <div className="min-h-[50vh] bg-[#f7f5f1] px-4 py-24 text-center">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#3A5F8C]">Errore 404</p>
      <h1 className="font-luxury-display mt-4 text-3xl font-semibold text-[#152435] sm:text-4xl">Pagina non trovata</h1>
      <p className="mx-auto mt-3 max-w-md text-[#6b7a8d]">Il link potrebbe essere sbagliato o la pagina è stata spostata.</p>
      <Link to="/" className={`${btnPrimarySm} mt-8 inline-flex px-8 py-3 text-base`}>
        Torna alla home
      </Link>
      <div className="mx-auto mt-10 max-w-md">
        <MarketplaceNotice variant="inline" />
      </div>
    </div>
  );
}
