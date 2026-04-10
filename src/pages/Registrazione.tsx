import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "../config/brand";
import { getSupabase, isSupabaseConfigured } from "../lib/supabase";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { tradeSkillGroupsForSector } from "../data/candidateTradeSkills";
import { TRAVEL_RADIUS_OPTIONS } from "../data/italyGeo";
import { RegionCitySelects } from "../components/RegionCitySelects";

const legalBox =
  "space-y-3 rounded-xl border border-slate-200 bg-slate-50/90 p-4 text-sm text-slate-800 [&_a]:underline [&_a]:underline-offset-2";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Registrazione() {
  const { hash } = useLocation();
  const [azStatus, setAzStatus] = useState<FormStatus>("idle");
  const [azMessage, setAzMessage] = useState("");
  const [cdStatus, setCdStatus] = useState<FormStatus>("idle");
  const [cdMessage, setCdMessage] = useState("");
  const [cdSector, setCdSector] = useState("");
  const [azRegion, setAzRegion] = useState("");
  const [azCity, setAzCity] = useState("");
  const [cdRegion, setCdRegion] = useState("");
  const [cdCity, setCdCity] = useState("");
  const [cdTravelKm, setCdTravelKm] = useState("");

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
              const email = String(fd.get("email") ?? "").trim();
              if (!azRegion.trim() || !azCity.trim()) {
                setAzStatus("error");
                setAzMessage("Seleziona regione e città di riferimento per l’attività.");
                return;
              }
              const region = azRegion.trim();
              const city = azCity.trim();

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
                city,
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
            2–3 minuti. Per edilizia e impianti puoi indicare{" "}
            <strong className="font-medium text-slate-800">competenze specifiche</strong> (es. cartongesso,
            termoidraulica): aiuta le imprese a capire subito se sei in linea. Il contatto diretto da parte tua verso
            l&apos;azienda è previsto solo per imprese con piano <strong>Full (top)</strong>, come da{" "}
            <Link to="/prezzi" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
              Prezzi
            </Link>{" "}
            e contratto.
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
              if (!cdRegion.trim() || !cdCity.trim()) {
                setCdStatus("error");
                setCdMessage("Seleziona regione e città di residenza o di riferimento.");
                return;
              }
              const travelRadiusRaw = cdTravelKm === "" ? NaN : Number(cdTravelKm);
              if (!Number.isFinite(travelRadiusRaw)) {
                setCdStatus("error");
                setCdMessage("Indica quanti chilometri sei disposto a spostarti per lavoro.");
                return;
              }
              const region = cdRegion.trim();
              const city = cdCity.trim();
              const sector = String(fd.get("settore") ?? "").trim();
              const expRaw = fd.get("esperienza");
              const experience_years =
                expRaw === "" || expRaw === null ? null : Number(expRaw);
              const has_car = fd.get("automunito") === "on";
              const has_license = fd.get("patente") === "on";
              const email = String(fd.get("email") ?? "").trim();
              const trade_skills = fd.getAll("trade_skill").map(String);

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
                city,
                travel_radius_km: travelRadiusRaw,
                sector,
                experience_years: Number.isFinite(experience_years as number) ? experience_years : null,
                has_car,
                has_license,
                email,
                trade_skills,
              });

              if (error) {
                setCdStatus("error");
                setCdMessage(error.message || "Impossibile completare l'invio. Riprova o contattaci.");
                return;
              }

              setCdStatus("success");
              setCdMessage("Profilo inviato. Riceverai aggiornamenti via email.");
              form.reset();
              setCdSector("");
              setCdRegion("");
              setCdCity("");
              setCdTravelKm("");
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
            <RegionCitySelects
              regionId="cd-region"
              cityId="cd-city"
              regionName={cdRegion}
              cityName={cdCity}
              disabled={cdStatus === "loading"}
              onRegionChange={setCdRegion}
              onCityChange={setCdCity}
              regionLabel="Regione (Italia)"
              cityLabel="Città di residenza o di riferimento"
            />
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-travel-km">
                Quanti km sei disposto a spostarti per lavoro?
              </label>
              <select
                id="cd-travel-km"
                required
                value={cdTravelKm}
                onChange={(e) => setCdTravelKm(e.target.value)}
                disabled={cdStatus === "loading"}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 disabled:opacity-60"
              >
                <option value="">Scegli…</option>
                {TRAVEL_RADIUS_OPTIONS.map((o) => (
                  <option key={o.value} value={String(o.value)}>
                    {o.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-slate-600">
                Le imprese usano questo dato per capire se la sede o il cantiere possono essere compatibili con la tua
                disponibilità (non è un impegno contrattuale).
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700" htmlFor="cd-settore">
                Settore di interesse
              </label>
              <select
                id="cd-settore"
                name="settore"
                required
                value={cdSector}
                onChange={(e) => setCdSector(e.target.value)}
                disabled={cdStatus === "loading"}
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
            {tradeSkillGroupsForSector(cdSector).length > 0 && (
              <fieldset
                className="space-y-4 rounded-xl border border-[#FF6B35]/25 bg-[#fff7ed]/40 p-4"
                disabled={cdStatus === "loading"}
              >
                <legend className="text-sm font-semibold text-[#152435]">
                  Competenze che ti rappresentano (seleziona tutte le pertinenti)
                </legend>
                <p className="text-xs text-slate-600">
                  Così le aziende capiscono se cerchi davvero il loro tipo di lavoro (muratura vs cartongesso, civile vs
                  climatizzazione, ecc.).
                </p>
                {tradeSkillGroupsForSector(cdSector).map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#6b7a8d]">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.skills.map((s) => (
                        <label
                          key={s.id}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
                        >
                          <input type="checkbox" name="trade_skill" value={s.id} className="rounded border-slate-300" />
                          {s.label}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </fieldset>
            )}
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
