import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "../config/brand";
import { getSupabase, isSupabaseConfigured } from "../lib/supabase";
import { PremiumPageShell } from "../components/PremiumPageShell";

const legalBox =
  "space-y-3 rounded-xl border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-800 [&_a]:underline [&_a]:underline-offset-2";

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
    <PremiumPageShell
      eyebrow="Accesso"
      title="Registrazione"
      subtitle={`Accesso al servizio ${BRAND.name} (${BRAND.domain}). Scegli il percorso. I dati sono trattati secondo la Privacy Policy e la Cookie Policy.`}
      maxWidth="wide"
    >
      {!configured && (
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-[#6b7a8d]" role="status">
          Invio modulo temporaneamente non disponibile. Per urgenze usa la pagina Contatti.
        </p>
      )}

      <div className="grid gap-10 lg:grid-cols-2">
        <section
          id="azienda"
          className="scroll-mt-24 rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-[#152435]">Sono un&apos;azienda</h2>
          <p className="mt-2 text-sm text-[#6b7a8d]">Passo 1: dati azienda. Poi inserisci la posizione aperta.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const consents = [
                "az_corretti",
                "az_termini",
                "az_privacy",
                "az_selezione",
                "az_verifiche",
              ] as const;
              for (const name of consents) {
                if (fd.get(name) !== "on") {
                  setAzStatus("error");
                  setAzMessage("Per proseguire devi accettare tutte le dichiarazioni obbligatorie in calce al modulo.");
                  return;
                }
              }

              const company_name = String(fd.get("nome") ?? "").trim();
              const sector = String(fd.get("settore") ?? "").trim();
              const region = String(fd.get("zona") ?? "").trim();
              const email = String(fd.get("email") ?? "").trim();

              const sb = getSupabase();
              if (!sb) {
                setAzStatus("error");
                setAzMessage("Servizio non disponibile. Riprova più tardi o contattaci.");
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
                setAzMessage(error.message || "Impossibile completare l'invio. Riprova o contattaci.");
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
                    ? "bg-emerald-50 text-emerald-950"
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
            <fieldset className={legalBox} disabled={azStatus === "loading"}>
              <legend className="mb-2 text-sm font-semibold text-slate-900">Dichiarazioni obbligatorie</legend>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="az_corretti" className="mt-1 shrink-0" required />
                <span>Dichiaro che i dati aziendali inseriti sono corretti</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="az_termini" className="mt-1 shrink-0" required />
                <span>
                  Ho letto e accetto i{" "}
                  <Link to="/termini" target="_blank" rel="noreferrer">
                    termini di utilizzo
                  </Link>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="az_privacy" className="mt-1 shrink-0" required />
                <span>
                  Ho letto la{" "}
                  <Link to="/privacy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="az_selezione" className="mt-1 shrink-0" required />
                <span>Mi impegno a utilizzare i dati dei candidati esclusivamente per finalità di selezione</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="az_verifiche" className="mt-1 shrink-0" required />
                <span>
                  Mi assumo la responsabilità delle verifiche sui candidati e delle eventuali assunzioni
                </span>
              </label>
            </fieldset>
            <button
              type="submit"
              disabled={azStatus === "loading"}
              className="w-full rounded-xl bg-[#FF6B35] py-3 font-bold text-[#0A0F1C] transition hover:bg-[#FF8F5E] disabled:opacity-60"
            >
              {azStatus === "loading" ? "Invio…" : "Invia richiesta"}
            </button>
          </form>
        </section>

        <section
          id="candidato"
          className="scroll-mt-24 rounded-3xl border border-[#FF6B35]/20 bg-[#fff7ed]/60 p-8 shadow-sm"
        >
          <h2 className="text-xl font-bold text-slate-900">Cerco lavoro</h2>
          <p className="mt-2 text-sm text-slate-600">
            2–3 minuti. Avatar coerente con il ruolo dopo la compilazione.
          </p>
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const cdConsents = [
                "cd_veritieri",
                "cd_privacy",
                "cd_trattamento",
                "cd_anon",
                "cd_comunicazione",
              ] as const;
              for (const name of cdConsents) {
                if (fd.get(name) !== "on") {
                  setCdStatus("error");
                  setCdMessage("Per proseguire devi accettare tutte le dichiarazioni obbligatorie in calce al modulo.");
                  return;
                }
              }

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
                setCdMessage("Servizio non disponibile. Riprova più tardi o contattaci.");
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
                setCdMessage(error.message || "Impossibile completare l'invio. Riprova o contattaci.");
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
                    ? "bg-emerald-50 text-emerald-950"
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
            <fieldset className={legalBox} disabled={cdStatus === "loading"}>
              <legend className="mb-2 text-sm font-semibold text-slate-900">Dichiarazioni obbligatorie</legend>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="cd_veritieri" className="mt-1 shrink-0" required />
                <span>Dichiaro che i dati inseriti sono veritieri</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="cd_privacy" className="mt-1 shrink-0" required />
                <span>
                  Ho letto e accetto la{" "}
                  <Link to="/privacy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="cd_trattamento" className="mt-1 shrink-0" required />
                <span>Acconsento al trattamento dei miei dati personali per finalità di inserimento nella piattaforma</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="cd_anon" className="mt-1 shrink-0" required />
                <span>Acconsento alla visualizzazione del mio profilo in forma anonimizzata</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2">
                <input type="checkbox" name="cd_comunicazione" className="mt-1 shrink-0" required />
                <span>
                  Acconsento alla comunicazione dei miei dati alle aziende registrate secondo le modalità del servizio
                </span>
              </label>
            </fieldset>
            <button
              type="submit"
              disabled={cdStatus === "loading"}
              className="w-full rounded-xl bg-[#152435] py-3 font-bold text-white transition hover:bg-[#2C4A6E] disabled:opacity-60"
            >
              {cdStatus === "loading" ? "Invio…" : "Invia profilo"}
            </button>
          </form>
        </section>
      </div>
    </PremiumPageShell>
  );
}
