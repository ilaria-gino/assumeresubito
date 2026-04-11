import { useState } from "react";
import { Link } from "react-router-dom";
import { getSupabase, isSupabaseConfigured } from "../../lib/supabase";
import { RegionCitySelects } from "../../components/RegionCitySelects";
import { registerCompanySession } from "../../lib/searchSession";

const legalBox =
  "space-y-3 rounded-xl border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-800 [&_a]:underline [&_a]:underline-offset-2";

type FormStatus = "idle" | "loading" | "success" | "error";

export function CompanyRegistrationForm() {
  const [azStatus, setAzStatus] = useState<FormStatus>("idle");
  const [azMessage, setAzMessage] = useState("");
  const [azRegion, setAzRegion] = useState("");
  const [azCity, setAzCity] = useState("");
  const configured = isSupabaseConfigured();

  return (
    <>
      {!configured && (
        <p
          className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
          role="status"
        >
          Invio modulo temporaneamente non disponibile. Per urgenze usa la
          pagina Contatti.
        </p>
      )}
      <section
        id="azienda"
        className="scroll-mt-24 rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm"
      >
        <h2 className="text-xl font-bold text-[#152435]">
          Sono un&apos;azienda
        </h2>
        <p className="mt-2 text-sm text-[#6b7a8d]">
          Passo 1: dati azienda. Poi inserisci la posizione aperta.
        </p>
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
                setAzMessage(
                  "Per proseguire devi accettare tutte le dichiarazioni obbligatorie in calce al modulo.",
                );
                return;
              }
            }

            const company_name = String(fd.get("nome") ?? "").trim();
            const sector = String(fd.get("settore") ?? "").trim();
            const email = String(fd.get("email") ?? "").trim();
            if (!azRegion.trim() || !azCity.trim()) {
              setAzStatus("error");
              setAzMessage(
                "Seleziona regione e città di riferimento per l’attività.",
              );
              return;
            }
            const region = azRegion.trim();
            const city = azCity.trim();

            const sb = getSupabase();
            if (!sb) {
              setAzStatus("error");
              setAzMessage(
                "Servizio non disponibile. Riprova più tardi o contattaci.",
              );
              return;
            }

            setAzStatus("loading");
            setAzMessage("");
            const { error } = await sb.from("company_leads").insert({
              company_name,
              sector,
              region,
              city,
              email,
            });

            if (error) {
              setAzStatus("error");
              setAzMessage(
                error.message ||
                  "Impossibile completare l'invio. Riprova o contattaci.",
              );
              return;
            }

            setAzStatus("success");
            setAzMessage(
              "Richiesta registrata. Ti contatteremo al più presto.",
            );
            registerCompanySession();
            form.reset();
            setAzRegion("");
            setAzCity("");
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
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="az-nome"
            >
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
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="az-settore"
            >
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
              <option>Termoidraulica / impianti idraulici</option>
              <option>Impianti elettrici</option>
              <option>Uffici / amministrazione</option>
              <option>Commercio</option>
            </select>
          </div>
          <RegionCitySelects
            regionId="az-region"
            cityId="az-city"
            regionName={azRegion}
            cityName={azCity}
            disabled={azStatus === "loading"}
            onRegionChange={setAzRegion}
            onCityChange={setAzCity}
            regionLabel="Regione (Italia)"
            cityLabel="Città di riferimento"
          />
          <div>
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="az-email"
            >
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
            <legend className="mb-2 text-sm font-semibold text-slate-900">
              Dichiarazioni obbligatorie
            </legend>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                name="az_corretti"
                className="mt-1 shrink-0"
                required
              />
              <span>Dichiaro che i dati aziendali inseriti sono corretti</span>
            </label>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                name="az_termini"
                className="mt-1 shrink-0"
                required
              />
              <span>
                Ho letto e accetto i{" "}
                <Link to="/termini" target="_blank" rel="noreferrer">
                  termini di utilizzo
                </Link>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                name="az_privacy"
                className="mt-1 shrink-0"
                required
              />
              <span>
                Ho letto la{" "}
                <Link to="/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </Link>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                name="az_selezione"
                className="mt-1 shrink-0"
                required
              />
              <span>
                Mi impegno a utilizzare i dati dei candidati esclusivamente per
                finalità di selezione
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                name="az_verifiche"
                className="mt-1 shrink-0"
                required
              />
              <span>
                Mi assumo la responsabilità delle verifiche sui candidati e
                delle eventuali assunzioni
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
    </>
  );
}
