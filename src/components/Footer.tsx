import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-bold text-teal-800">AssumereSubito.it</p>
            <p className="mt-2 text-sm text-slate-600">
              Il modo più veloce per assumere senza perdere tempo. Paghi solo se assumi.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Piattaforma</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/prezzi" className="hover:text-teal-700">
                  Prezzi
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="hover:text-teal-700">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to="/registrazione" className="hover:text-teal-700">
                  Registrati
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Legale</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/privacy" className="hover:text-teal-700">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/termini" className="hover:text-teal-700">
                  Termini
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-teal-700">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Slogan</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              <li>Paghi solo se assumi</li>
              <li>Candidati pronti in 48 ore</li>
              <li>Stop CV inutili</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} AssumereSubito.it — Demo front-end locale, senza servizi esterni a pagamento.
        </p>
      </div>
    </footer>
  );
}
