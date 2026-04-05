import { Link } from "react-router-dom";

export function Prezzi() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Prezzi semplici</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
        Niente sorprese: gratis per iniziare, paghi solo quando assumi.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase text-slate-500">Gratuito</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">€0</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Registrazione</li>
            <li>Accesso base</li>
            <li>Candidati: iscrizione sempre gratuita</li>
          </ul>
          <Link
            to="/registrazione"
            className="mt-8 block rounded-xl border-2 border-slate-200 py-3 text-center font-bold text-slate-800 hover:bg-slate-50"
          >
            Inizia gratis
          </Link>
        </div>

        <div className="relative rounded-3xl border-2 border-teal-500 bg-gradient-to-b from-teal-50 to-white p-8 shadow-lg">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-xs font-bold text-white">
            Pay per hire
          </span>
          <p className="text-sm font-bold uppercase text-teal-800">Paghi solo se assumi</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">1 mensilità</p>
          <p className="text-sm text-slate-600">oppure percentuale sulla RAL (da definire in contratto)</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Candidati filtrati e pronti</li>
            <li>Timer 48h per contattare</li>
            <li>Zero costi se non assumi</li>
          </ul>
          <Link
            to="/registrazione#azienda"
            className="mt-8 block rounded-xl bg-teal-600 py-3 text-center font-bold text-white hover:bg-teal-700"
          >
            Registra l&apos;azienda
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase text-slate-500">Premium</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">Abbonamento</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Più visibilità delle ricerche</li>
            <li>Più candidati in evidenza</li>
            <li>Priorità nelle notifiche</li>
            <li>Opzionale: consulenza HR</li>
          </ul>
          <a
            href="mailto:info@assumeresubito.it"
            className="mt-8 block rounded-xl border-2 border-teal-200 py-3 text-center font-bold text-teal-800 hover:bg-teal-50"
          >
            Chiedi informazioni
          </a>
        </div>
      </div>
    </div>
  );
}
