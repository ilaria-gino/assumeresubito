import { Link, useLocation } from "react-router-dom";

/**
 * Accesso rapido alla home su tutte le pagine tranne home e registrazione
 * (la registrazione resta un percorso dedicato senza escape immediato verso la home).
 */
export function HomeQuickNav() {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname.startsWith("/registrazione")) return null;

  return (
    <Link
      to="/"
      className="fixed bottom-5 left-4 z-40 inline-flex min-h-[48px] max-w-[calc(100vw-2rem)] touch-manipulation items-center gap-2 rounded-2xl border border-[#2C4A6E]/20 bg-[#fdfbf7]/95 px-4 py-3 text-base font-bold text-[#2C4A6E] shadow-[0_8px_30px_rgba(21,36,53,0.12)] backdrop-blur-md transition hover:border-[#2C4A6E]/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C4A6E] sm:bottom-6 sm:left-6 sm:text-sm"
      aria-label="Torna alla home"
    >
      <span aria-hidden className="text-lg leading-none">
        ⌂
      </span>
      <span className="hidden sm:inline">Torna alla home</span>
      <span className="sm:hidden">Home</span>
    </Link>
  );
}
