import { Link } from "react-router-dom";

export function ChiSiamo() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Chi siamo</h1>
      <p className="mt-6 text-lg text-slate-700">
        AssumereSubito.it nasce per un problema concreto: le aziende perdono tempo con CV che non servono e i
        candidati non vengono visti al momento giusto. La piattaforma mette in contatto aziende e persone in modo
        veloce, con filtri chiari e profili inizialmente anonimi (iniziali + avatar per ruolo).
      </p>
      <p className="mt-4 text-lg text-slate-700">
        Non siamo un altro portale generico: siamo orientati ai risultati, ai settori e alla velocità — con urgenza
        reale (es. contatto entro 48 ore) e pagamento solo in caso di assunzione.
      </p>
      <ul className="mt-8 list-inside list-disc space-y-2 text-slate-700">
        <li>Diretti, concreti, zero fuffa HR</li>
        <li>Verticali per immobiliare, ristorazione, logistica, edilizia, uffici, commercio</li>
        <li>Candidati gratis · Aziende pagano solo se assumono</li>
      </ul>
      <Link to="/contatti" className="mt-10 inline-block font-bold text-teal-700 underline">
        Contattaci
      </Link>
    </div>
  );
}
