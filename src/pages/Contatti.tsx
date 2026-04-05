export function Contatti() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold text-slate-900">Contatti</h1>
      <p className="mt-6 text-slate-700">
        Per domande commerciali o partnership puoi usare un indirizzo email aziendale quando sarà attivo.
      </p>
      <p className="mt-4">
        <span className="text-slate-600">Email (esempio): </span>
        <a className="font-semibold text-teal-700 underline" href="mailto:info@assumeresubito.it">
          info@assumeresubito.it
        </a>
      </p>
      <p className="mt-6 text-sm text-slate-500">
        Nessun modulo esterno: puoi aggiungere in seguito un form che invia al tuo server senza SaaS a pagamento.
      </p>
    </div>
  );
}
