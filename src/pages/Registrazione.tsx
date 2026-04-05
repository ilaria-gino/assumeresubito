import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSupabase, isSupabaseConfigured } from "../lib/supabase";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Registrazione() {
  const { hash } = useLocation();
  const [azStatus, setAzStatus] = useState<FormStatus>("idle");
  const [azMessage, setAzMessage] = useState("");
  const [cdStatus, setCdStatus] = useState<FormStatus>("idle");
  const [cdMessage, setCdMessage] = useState("");

  useEffect(() => {
    if (hash === "#azienda" || hash === "#candidato") {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const configured = isSupabaseConfigured();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">Registrazione</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        Scegli il tuo percorso. Con Supabase configurato i dati vengono salvati nel database del progetto.
      </p>

      {!configured && (
        <div
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950"
          role="status"
        >
          <strong>Supabase non configurato.</strong> Copia <code className="rounded bg-amber-100 px-1">.env.example</code> in{" "}
          <code className="rounded bg-amber-100 px-1">.env</code> e incolla la chiave <em>anon</em> da Dashboard → Settings →
          API.
        </div>
      )}

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section
          id="azienda"
          className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-slate-900">Sono un&apos;azienda</h2>
          <p className="mt-2 text-sm text-slate-600">Passo 1: dati azienda. Poi inserisci la posizione aperta.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const company_name = String(fd.get("nome") ?? "").trim();
              const sector = String(fd.get("settore") ?? "").trim();
              const region = String(fd.get("zona") ?? "").trim();
              const email = String(fd.get("email") ?? "").trim();

              const sb = getSupabase();
              if (!sb) {
                setAzStatus("error");
                setAzMessage("Configura il file .env con URL e chiave anon di Supabase.");
                return;
              }

              setAzStatus("loading");
              setAzMessage("");
              const { error } = await sb.from("company_leads").insert({
                company_name,
                sector,
                region,
                email,
              });

              if (error) {
                setAzStatus("error");
                setAzMessage(error.message || "Errore durante il salvataggio. Controlla che la tabella esista e le policy RLS siano applicate.");
                return;
              }

              setAzStatus("success");
              setAzMessage("Richiesta registrata. Ti contatteremo al più presto.");
              form.reset();
            }}
          >
            {azStatus !== "idle" && (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  azStatus === "success"
                    ? "bg-teal-50 text-teal-900"
                    : azStatus === "error"
                      ? "bg-red-50 text-red-900"
                      : "bg-slate-100 text-slate-700"
                }`}
                role="status"
              >
                {azStatus === "loading" ? "Invio in corso…" : azMessage}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="az-nome">
                Nome azienda
              </label>
              <input
                id="az-nome"
                name="nome"
                required
                disabled={azStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
                placeholder="Es. Bar Mario Srl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="az-settore">
                Settore
              </label>
              <select
                id="az-settore"
                name="settore"
                required
                disabled={azStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              >
                <option value="">Scegli…</option>
                <option>Immobiliare</option>
                <option>Ristorazione</option>
                <option>Logistica</option>
                <option>Edilizia</option>
                <option>Uffici / amministrazione</option>
                <option>Commercio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="az-zona">
                Provincia o regione
              </label>
              <input
                id="az-zona"
                name="zona"
                required
                disabled={azStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
                placeholder="Es. Milano"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="az-email">
                Email
              </label>
              <input
                id="az-email"
                name="email"
                type="email"
                required
                disabled={azStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={azStatus === "loading"}
              className="w-full rounded-xl bg-teal-600 py-3 font-bold text-white hover:bg-teal-700 disabled:opacity-60"
            >
              {azStatus === "loading" ? "Invio…" : "Invia richiesta"}
            </button>
          </form>
        </section>

        <section
          id="candidato"
          className="scroll-mt-24 rounded-3xl border border-teal-100 bg-teal-50/40 p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-slate-900">Cerco lavoro</h2>
          <p className="mt-2 text-sm text-slate-600">
            2–3 minuti al massimo. Poi avatar automatico in base al ruolo (nella versione completa).
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const first_name = String(fd.get("nome") ?? "").trim();
              const last_name = String(fd.get("cognome") ?? "").trim();
              const age = Number(fd.get("eta"));
              const region = String(fd.get("zona") ?? "").trim();
              const sector = String(fd.get("settore") ?? "").trim();
              const expRaw = fd.get("esperienza");
              const experience_years =
                expRaw === "" || expRaw === null ? null : Number(expRaw);
              const has_car = fd.get("automunito") === "on";
              const has_license = fd.get("patente") === "on";
              const email = String(fd.get("email") ?? "").trim();

              const sb = getSupabase();
              if (!sb) {
                setCdStatus("error");
                setCdMessage("Configura il file .env con URL e chiave anon di Supabase.");
                return;
              }

              setCdStatus("loading");
              setCdMessage("");
              const { error } = await sb.from("candidate_leads").insert({
                first_name,
                last_name,
                age,
                region,
                sector,
                experience_years: Number.isFinite(experience_years as number) ? experience_years : null,
                has_car,
                has_license,
                email,
              });

              if (error) {
                setCdStatus("error");
                setCdMessage(error.message || "Errore durante il salvataggio. Controlla che la tabella esista e le policy RLS siano applicate.");
                return;
              }

              setCdStatus("success");
              setCdMessage("Profilo inviato. Riceverai aggiornamenti via email.");
              form.reset();
            }}
          >
            {cdStatus !== "idle" && (
              <p
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  cdStatus === "success"
                    ? "bg-teal-100 text-teal-950"
                    : cdStatus === "error"
                      ? "bg-red-50 text-red-900"
                      : "bg-slate-100 text-slate-700"
                }`}
                role="status"
              >
                {cdStatus === "loading" ? "Invio in corso…" : cdMessage}
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="cd-nome">
                  Nome
                </label>
                <input
                  id="cd-nome"
                  name="nome"
                  required
                  disabled={cdStatus === "loading"}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700" htmlFor="cd-cognome">
                  Cognome
                </label>
                <input
                  id="cd-cognome"
                  name="cognome"
                  required
                  disabled={cdStatus === "loading"}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-eta">
                Età
              </label>
              <input
                id="cd-eta"
                name="eta"
                type="number"
                min={16}
                max={80}
                required
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-zona">
                Provincia / regione
              </label>
              <input
                id="cd-zona"
                name="zona"
                required
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-settore">
                Settore di interesse
              </label>
              <select
                id="cd-settore"
                name="settore"
                required
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              >
                <option value="">Scegli…</option>
                <option>Immobiliare</option>
                <option>Ristorazione</option>
                <option>Logistica</option>
                <option>Edilizia</option>
                <option>Uffici / amministrazione</option>
                <option>Commercio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-exp">
                Anni di esperienza
              </label>
              <input
                id="cd-exp"
                name="esperienza"
                type="number"
                min={0}
                max={50}
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              />
            </div>
            <fieldset className="space-y-2" disabled={cdStatus === "loading"}>
              <legend className="text-sm font-medium text-slate-700">Disponibilità</legend>
              <label className="flex items-center gap-2 text-slate-700">
                <input type="checkbox" name="automunito" /> Automunito
              </label>
              <label className="flex items-center gap-2 text-slate-700">
                <input type="checkbox" name="patente" /> Patente
              </label>
            </fieldset>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-email">
                Email
              </label>
              <input
                id="cd-email"
                name="email"
                type="email"
                required
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={cdStatus === "loading"}
              className="w-full rounded-xl bg-slate-900 py-3 font-bold text-white hover:bg-slate-800 disabled:opacity-60"
            >
              {cdStatus === "loading" ? "Invio…" : "Invia profilo"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
