import { Link } from "react-router-dom";
import { SECTORS } from "../data/sectors";
import { RoleAvatar } from "../components/RoleAvatar";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              AssumereSubito.it
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Assumi personale qualificato in meno di 48 ore
            </h1>
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">
              Niente CV inutili. Solo candidati pronti, già filtrati e disponibili.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/registrazione#azienda"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
              >
                Sono un&apos;azienda
              </Link>
              <Link
                to="/registrazione#candidato"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-800 transition hover:border-teal-300 hover:bg-teal-50/50"
              >
                Cerco lavoro
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">Registrazione candidati gratuita · Paghi solo se assumi</p>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {SECTORS.slice(0, 4).map((s, i) => (
              <RoleAvatar
                key={s.slug}
                hint={s.avatarHint}
                initials={["M.R.", "L.B.", "G.T.", "A.F."][i] ?? "?.?"}
                size="lg"
                className="ring-4 ring-white shadow-xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Stai perdendo tempo con candidati che non rispondono?
          </h2>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 text-slate-700 sm:grid-cols-3">
            {["Ricevi CV inutili?", "Risposte lente o assenti?", "Hai urgenza ma nessuno è davvero disponibile?"].map(
              (t) => (
                <li
                  key={t}
                  className="rounded-2xl border border-red-100 bg-red-50/80 px-4 py-5 text-center text-sm font-medium text-red-900"
                >
                  {t}
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Con AssumereSubito</h2>
          <ul className="mx-auto mt-10 grid gap-6 sm:grid-cols-3">
            {[
              "Ricevi solo candidati filtrati",
              "Vedi profili anonimi (meno perdite di tempo)",
              "Contatti entro 48 ore i profili migliori",
            ].map((t) => (
              <li
                key={t}
                className="rounded-2xl border border-teal-100 bg-white p-6 text-center shadow-sm"
              >
                <span className="text-lg font-semibold text-teal-800">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Come funziona</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-teal-600">Per aziende</p>
              <ol className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-800">
                    1
                  </span>
                  <span>Pubblica la ricerca</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-800">
                    2
                  </span>
                  <span>Ricevi candidati filtrati</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-800">
                    3
                  </span>
                  <span>Contatta entro 48 ore</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-900">Assumi — paghi solo se assumi</span>
                </li>
              </ol>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-600">Per candidati</p>
              <ol className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-800">
                    1
                  </span>
                  <span>Registrazione gratuita</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-800">
                    2
                  </span>
                  <span>Compili il profilo (2–3 minuti)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-800">
                    3
                  </span>
                  <span>Sei proposto alle aziende</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 font-bold text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-900">Ricevi richieste di colloquio</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Non è un portale di lavoro classico</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            È un sistema che ti porta persone pronte. Niente linguaggio HR complicato: solo risultati.
          </p>
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-teal-600 to-teal-800 px-6 py-12 text-white">
            <h3 className="text-xl font-bold">Anonimato che aiuta</h3>
            <p className="mx-auto mt-3 max-w-xl text-teal-100">
              I profili mostrano solo iniziali e un avatar realistico per ruolo. Più curiosità, più contatti, meno
              pregiudizi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Scegli il tuo settore</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Pagine dedicate con messaggi e filtri pensati per il tuo mondo.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/settori/${s.slug}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-300 hover:shadow-md"
                >
                  <RoleAvatar hint={s.avatarHint} initials="••" size="sm" />
                  <div>
                    <p className="font-bold text-slate-900">{s.title}</p>
                    <p className="text-sm text-slate-500">{s.roleLabel}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Vuoi assumere subito?</h2>
          <p className="mt-3 text-slate-300">Registrati gratis e vedi come funziona in pochi minuti.</p>
          <Link
            to="/registrazione"
            className="mt-8 inline-flex rounded-xl bg-teal-500 px-8 py-4 font-bold text-white hover:bg-teal-400"
          >
            Registrati gratis
          </Link>
        </div>
      </section>
    </>
  );
}
