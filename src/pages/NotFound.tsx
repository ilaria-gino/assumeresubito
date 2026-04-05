import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Pagina non trovata</h1>
      <p className="mt-2 text-slate-600">Il link potrebbe essere sbagliato o la pagina è stata spostata.</p>
      <Link to="/" className="mt-6 inline-block rounded-xl bg-teal-600 px-6 py-3 font-bold text-white">
        Torna alla home
      </Link>
    </div>
  );
}
