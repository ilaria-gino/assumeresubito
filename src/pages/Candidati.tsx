import { type ReactNode, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PremiumPageShell } from "../components/PremiumPageShell";
import { btnPrimary, btnSecondary } from "../components/ui/ButtonStyles";
import { filterMockCandidates, filterMockCompanies } from "../data/searchDirectory";
import { isSupabaseConfigured } from "../lib/supabase";
import {
  candidateSummaryFromRow,
  companySummaryFromRow,
  fetchAnonymousCandidates,
  fetchAnonymousCompanies,
} from "../lib/supabaseSearch";
import {
  canEmployerUnlock,
  employerUnlockLimit,
  employerUnlockedCount,
  loadSearchSession,
  saveSearchSession,
  subscribeSearchSession,
  type SearchSessionV1,
} from "../lib/searchSession";

/** Sfondo accattivante: persone in contesto lavorativo (sfocatura applicata in UI). */
const PANEL_BG =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=82&auto=format&fit=crop";

function planLabel(plan: NonNullable<SearchSessionV1["employerPlan"]>): string {
  if (plan === "starter") return "Starter";
  if (plan === "basic") return "Basic";
  return "Full";
}

type DisplayCandidate = {
  id: string;
  initials: string;
  sector: string;
  region: string;
  city: string;
  summary: string;
  allowUnlock: boolean;
};

type DisplayCompany = {
  id: string;
  maskedName: string;
  sector: string;
  region: string;
  city: string;
  summary: string;
  allowUnlock: boolean;
};

export function Candidati() {
  const [session, setSession] = useState<SearchSessionV1 | null>(() => loadSearchSession());
  const [queryEmployer, setQueryEmployer] = useState("");
  const [queryWorker, setQueryWorker] = useState("");
  const [debouncedEmployer, setDebouncedEmployer] = useState("");
  const [debouncedWorker, setDebouncedWorker] = useState("");

  const supabaseOn = isSupabaseConfigured();

  const [employerRemote, setEmployerRemote] = useState<DisplayCandidate[]>([]);
  const [employerLoading, setEmployerLoading] = useState(false);
  const [employerErr, setEmployerErr] = useState<string | null>(null);

  const [companiesRemote, setCompaniesRemote] = useState<DisplayCompany[]>([]);
  const [companiesLoading, setCompaniesLoading] = useState(false);
  const [companiesErr, setCompaniesErr] = useState<string | null>(null);

  useEffect(() => subscribeSearchSession(() => setSession(loadSearchSession())), []);

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedEmployer(queryEmployer.trim()), 350);
    return () => window.clearTimeout(t);
  }, [queryEmployer]);

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedWorker(queryWorker.trim()), 350);
    return () => window.clearTimeout(t);
  }, [queryWorker]);

  const isEmployerActive = session?.role === "company";
  const candidateMode = session?.role === "candidate" ? (session.candidateMode ?? "contact_only") : null;
  const isWorkerSearchActive =
    session?.role === "candidate" &&
    candidateMode === "active_search" &&
    Boolean(session.companySearchPreview);

  useEffect(() => {
    if (!isEmployerActive || !supabaseOn) return;
    let cancelled = false;
    setEmployerLoading(true);
    setEmployerErr(null);
    fetchAnonymousCandidates(debouncedEmployer)
      .then((rows) => {
        if (cancelled) return;
        setEmployerRemote(
          rows.map((r) => ({
            id: r.id,
            initials: !r.initials || r.initials === ".." ? "—" : r.initials,
            sector: r.sector,
            region: r.region,
            city: r.city,
            summary: candidateSummaryFromRow(r),
            allowUnlock: r.allow_unlock,
          })),
        );
      })
      .catch((e: Error) => {
        if (cancelled) return;
        setEmployerErr(e.message ?? "Impossibile caricare i candidati.");
        setEmployerRemote([]);
      })
      .finally(() => {
        if (!cancelled) setEmployerLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isEmployerActive, debouncedEmployer, supabaseOn]);

  useEffect(() => {
    if (!isWorkerSearchActive || !supabaseOn) return;
    let cancelled = false;
    setCompaniesLoading(true);
    setCompaniesErr(null);
    fetchAnonymousCompanies(debouncedWorker)
      .then((rows) => {
        if (cancelled) return;
        setCompaniesRemote(
          rows.map((r) => ({
            id: r.id,
            maskedName: r.masked_name,
            sector: r.sector,
            region: r.region,
            city: r.city,
            summary: companySummaryFromRow(),
            allowUnlock: r.allow_unlock,
          })),
        );
      })
      .catch((e: Error) => {
        if (cancelled) return;
        setCompaniesErr(e.message ?? "Impossibile caricare le imprese.");
        setCompaniesRemote([]);
      })
      .finally(() => {
        if (!cancelled) setCompaniesLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isWorkerSearchActive, debouncedWorker, supabaseOn]);

  const mockEmployerList = useMemo(
    () =>
      filterMockCandidates(debouncedEmployer).map((c) => ({
        id: c.id,
        initials: c.initials,
        sector: c.sector,
        region: c.region,
        city: c.city,
        summary: c.summary,
        allowUnlock: true,
      })),
    [debouncedEmployer],
  );

  const mockCompanyList = useMemo(
    () =>
      filterMockCompanies(debouncedWorker).map((z) => ({
        id: z.id,
        maskedName: z.maskedName,
        sector: z.sector,
        region: z.region,
        city: z.city,
        summary: z.summary,
        allowUnlock: true,
      })),
    [debouncedWorker],
  );

  const employerList = supabaseOn ? employerRemote : mockEmployerList;
  const companyList = supabaseOn ? companiesRemote : mockCompanyList;

  const unlockedCandidates = new Set(session?.unlockedCandidateIds ?? []);
  const unlockedCompanies = new Set(session?.unlockedCompanyIds ?? []);

  const refresh = () => setSession(loadSearchSession());

  const unlockCandidate = (id: string, allowUnlock: boolean) => {
    if (!allowUnlock) return;
    if (!session || session.role !== "company") return;
    if (!canEmployerUnlock(session)) return;
    if (unlockedCandidates.has(id)) return;
    const next: SearchSessionV1 = {
      ...session,
      updatedAt: new Date().toISOString(),
      unlockedCandidateIds: [...(session.unlockedCandidateIds ?? []), id],
    };
    saveSearchSession(next);
    refresh();
  };

  const unlockCompany = (id: string, allowUnlock: boolean) => {
    if (!allowUnlock) return;
    if (!session || session.role !== "candidate") return;
    if (!session.companySearchPreview) return;
    const max = 3;
    const used = session.unlockedCompanyIds?.length ?? 0;
    if (used >= max) return;
    if (unlockedCompanies.has(id)) return;
    const next: SearchSessionV1 = {
      ...session,
      updatedAt: new Date().toISOString(),
      unlockedCompanyIds: [...(session.unlockedCompanyIds ?? []), id],
    };
    saveSearchSession(next);
    refresh();
  };

  const showEmployerVeil = !isEmployerActive;
  const showWorkerVeil = !isWorkerSearchActive;
  const guest = !session;

  return (
    <PremiumPageShell
      eyebrow="Marketplace"
      title="Candidati"
      subtitle="Bacheca digitale tra utenti (non agenzia per il lavoro): due ricerche separate — per chi pubblica ricerche e per chi cerca lavoro. Si attivano dopo la registrazione nel ruolo giusto; nessun collocamento da parte del sito."
      maxWidth="wide"
    >
      {guest && (
        <div
          className="mx-auto mb-6 max-w-3xl rounded-2xl border-2 border-[#FF6B35]/45 bg-gradient-to-br from-[#fff7ed] to-white px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6"
          role="region"
          aria-label="Istruzioni per iniziare"
        >
          <p className="text-lg font-bold leading-snug text-[#152435] sm:text-xl">
            Per usare la ricerca serve la registrazione
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#152435]/85 sm:text-base">
            <strong className="text-[#152435]">Su telefono:</strong> scorri in basso. Trovi{" "}
            <strong className="text-[#2C4A6E]">due riquadri</strong>: uno per le <strong>aziende</strong>, uno per chi{" "}
            <strong>cerca lavoro</strong>. Apri solo quello che ti riguarda e tocca{" "}
            <strong className="text-[#152435]">«Registrati»</strong> nel riquadro — finché non ti iscrivi, la ricerca resta
            bloccata.
          </p>
        </div>
      )}

      {supabaseOn && (
        <p className="mx-auto mb-2 hidden max-w-3xl text-center text-xs text-[#6b7a8d] sm:block">
          Elenco rete: solo profili con <code className="rounded bg-[#ece7df] px-1">is_seed = false</code>.
        </p>
      )}

      <div className="mx-auto mt-4 grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
        <DualPanel
          accent="employer"
          title="Sei un’azienda?"
          subtitle="Cerca candidati (prima in forma anonima). Serve registrazione impresa."
          searchId="cerca-candidati"
          query={queryEmployer}
          setQuery={setQueryEmployer}
          placeholder="Dopo la registrazione: cerca per settore o città…"
          veiled={showEmployerVeil}
          veilHeadline={!session ? "Registrati come azienda" : "Solo per le imprese"}
          veilBullets={
            !session
              ? [
                  "Senza iscrizione non puoi vedere né cercare i candidati qui.",
                  "Tocca il pulsante arancione: compili il modulo azienda.",
                ]
              : [
                  "Hai un profilo candidato.",
                  "Questa colonna è solo per chi ha registrato un’azienda.",
                ]
          }
          veilPrimary={{ to: "/registrazione/azienda", label: "Registrati come azienda" }}
          veilSecondary={!session ? { to: "/registrazione/azienda", label: "Vedi piani accanto al modulo" } : undefined}
        >
          {session?.role === "company" && (
            <>
              <div className="mb-5 rounded-2xl border border-[#2C4A6E]/20 bg-[#f0f4f8]/95 p-4 text-sm text-[#152435] backdrop-blur-sm">
                <p className="font-semibold">Il tuo accesso impresa</p>
                <p className="mt-2 text-[#152435]/85">
                  Piano indicativo: <strong>{planLabel(session.employerPlan ?? "starter")}</strong>. Sblocchi:{" "}
                  <strong>
                    {employerUnlockedCount(session)} / {employerUnlockLimit(session.employerPlan ?? "starter")}
                  </strong>
                  .
                </p>
              </div>
              {employerErr && (
                <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
                  {employerErr}
                </p>
              )}
              {supabaseOn && employerLoading && (
                <p className="mb-4 text-center text-sm text-[#6b7a8d]">Caricamento…</p>
              )}
              <ul className="grid gap-4">
                {employerList.map((c) => (
                  <CandidateCard
                    key={c.id}
                    c={c}
                    unlocked={unlockedCandidates.has(c.id)}
                    canUnlock={canEmployerUnlock(session) && !unlockedCandidates.has(c.id) && c.allowUnlock}
                    onUnlock={() => unlockCandidate(c.id, c.allowUnlock)}
                  />
                ))}
              </ul>
              {!employerLoading && employerList.length === 0 && (
                <p className="mt-4 text-center text-sm text-[#6b7a8d]">Nessun profilo corrisponde alla ricerca.</p>
              )}
            </>
          )}
        </DualPanel>

        <DualPanel
          accent="worker"
          title="Cerchi lavoro?"
          subtitle="Cerca imprese solo dopo registrazione candidato e, se serve, piano dedicato."
          searchId="cerca-aziende"
          query={queryWorker}
          setQuery={setQueryWorker}
          placeholder="Dopo la registrazione: cerca per settore o città…"
          veiled={showWorkerVeil}
          veilHeadline={
            !session
              ? "Registrati come candidato"
              : session.role === "company"
                ? "Qui entra chi cerca lavoro"
                : "Attiva «Cerca aziende»"
          }
          veilBullets={
            !session
              ? [
                  "Senza iscrizione non puoi vedere le aziende da questa pagina.",
                  "Iscrizione gratuita come candidato; per cercare tu le aziende c’è un piano a parte.",
                ]
              : session.role === "company"
                ? [
                    "Hai registrato un’azienda.",
                    "Questo riquadro è per i candidati: usa l’altro modulo.",
                  ]
                : [
                    "Con il percorso gratis le aziende possono contattarti.",
                    "Per cercare tu le imprese da qui serve il piano «Cerca aziende» (a pagamento).",
                  ]
          }
          veilPrimary={
            !session
              ? { to: "/registrazione/candidato", label: "Registrati come candidato" }
              : session.role === "company"
                ? { to: "/registrazione/candidato", label: "Vai al modulo candidato" }
                : {
                    to: "/registrazione/candidato#piano-cerca-aziende",
                    label: "Leggi il piano «Cerca aziende»",
                  }
          }
          veilSecondary={
            !session || session.role === "company"
              ? { to: "/registrazione/azienda", label: "Piani per le imprese" }
              : { to: "/registrazione/candidato", label: "Cambia percorso in iscrizione" }
          }
        >
          {isWorkerSearchActive && session && (
            <>
              <div className="mb-5 rounded-2xl border border-[#FF6B35]/25 bg-[#fff7ed]/95 p-4 text-sm text-[#152435] backdrop-blur-sm">
                <p className="font-semibold">Percorso «Cerca aziende»</p>
                <p className="mt-2 text-[#152435]/90">
                  Anteprima tecnica: fino a <strong>3 sblocchi</strong> dimostrativi; uso pieno subordinato a pagamento e
                  contratto.
                </p>
              </div>
              {companiesErr && (
                <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
                  {companiesErr}
                </p>
              )}
              {supabaseOn && companiesLoading && (
                <p className="mb-4 text-center text-sm text-[#6b7a8d]">Caricamento…</p>
              )}
              <ul className="grid gap-4">
                {companyList.map((z) => (
                  <CompanyCard
                    key={z.id}
                    z={z}
                    unlocked={unlockedCompanies.has(z.id)}
                    canUnlock={
                      (session.unlockedCompanyIds?.length ?? 0) < 3 &&
                      !unlockedCompanies.has(z.id) &&
                      Boolean(session.companySearchPreview) &&
                      z.allowUnlock
                    }
                    onUnlock={() => unlockCompany(z.id, z.allowUnlock)}
                  />
                ))}
              </ul>
              {!companiesLoading && companyList.length === 0 && (
                <p className="mt-4 text-center text-sm text-[#6b7a8d]">Nessuna impresa corrisponde alla ricerca.</p>
              )}
            </>
          )}
        </DualPanel>
      </div>
    </PremiumPageShell>
  );
}

function DualPanel({
  accent,
  title,
  subtitle,
  searchId,
  query,
  setQuery,
  placeholder,
  veiled,
  veilHeadline,
  veilBullets,
  veilPrimary,
  veilSecondary,
  children,
}: {
  accent: "employer" | "worker";
  title: string;
  subtitle: string;
  searchId: string;
  query: string;
  setQuery: (v: string) => void;
  placeholder: string;
  veiled: boolean;
  veilHeadline: string;
  veilBullets: string[];
  veilPrimary: { to: string; label: string };
  veilSecondary?: { to: string; label: string };
  children: ReactNode;
}) {
  const ring = accent === "employer" ? "ring-[#2C4A6E]/20" : "ring-[#FF6B35]/20";
  const titleColor = accent === "employer" ? "text-[#2C4A6E]" : "text-[#c2410c]";

  return (
    <div
      className={`relative flex min-h-[min(85vh,520px)] flex-col overflow-hidden rounded-3xl border border-[#e1dbd1] bg-white shadow-lg ring-2 sm:min-h-[520px] ${ring}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={PANEL_BG}
          alt=""
          className="h-full w-full scale-105 object-cover opacity-35 blur-md"
          width={800}
          height={600}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 ${
            accent === "employer"
              ? "bg-gradient-to-b from-[#f0f4f8]/92 via-white/88 to-[#fdfbf7]/95"
              : "bg-gradient-to-b from-[#fff7ed]/92 via-white/88 to-[#fdfbf7]/95"
          }`}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-6">
        <h2 className={`font-luxury-display text-[1.35rem] font-semibold leading-tight sm:text-2xl ${titleColor}`}>{title}</h2>
        <p className="mt-2 text-[0.9375rem] leading-snug text-[#152435]/85 sm:text-sm sm:leading-relaxed">{subtitle}</p>

        <label htmlFor={searchId} className="sr-only">
          {placeholder}
        </label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={veiled}
          tabIndex={veiled ? -1 : 0}
          className="mt-4 min-h-[48px] w-full touch-manipulation rounded-2xl border border-[#e1dbd1] bg-white/90 px-4 py-3.5 text-base text-[#152435] shadow-sm placeholder:text-[#6b7a8d] backdrop-blur-sm focus:border-[#2C4A6E] focus:outline-none focus:ring-2 focus:ring-[#2C4A6E]/20 disabled:cursor-not-allowed disabled:opacity-55 sm:text-sm"
          autoComplete="off"
        />

        <div className={`relative mt-5 min-h-[160px] flex-1 sm:mt-6 sm:min-h-[200px] ${veiled ? "pointer-events-none select-none opacity-50" : ""}`}>
          {!veiled ? children : (
            <div className="rounded-2xl border border-dashed border-[#e1dbd1] bg-white/40 px-4 py-6 text-center text-sm leading-snug text-[#6b7a8d] backdrop-blur-[1px] sm:p-8">
              I risultati compaiono qui dopo la registrazione nel ruolo giusto.
            </div>
          )}
        </div>
      </div>

      {veiled && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 p-3 backdrop-blur-[3px] sm:p-5"
          style={{ pointerEvents: "auto" }}
        >
          <div className="w-full max-w-[min(100%,22rem)] rounded-2xl border border-[#e1dbd1] bg-[#fdfbf7]/98 p-5 text-center shadow-xl sm:max-w-sm sm:p-6">
            <p className="text-base font-bold leading-snug text-[#152435] sm:text-lg">{veilHeadline}</p>
            <ul className="mt-4 space-y-3 text-left text-sm leading-snug text-[#152435]/90">
              {veilBullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 font-bold text-[#FF6B35]" aria-hidden>
                    •
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to={veilPrimary.to}
                className={`${btnPrimary} min-h-[48px] justify-center px-4 py-3.5 text-base touch-manipulation sm:text-sm`}
              >
                {veilPrimary.label}
              </Link>
              {veilSecondary && (
                <Link
                  to={veilSecondary.to}
                  className={`${btnSecondary} min-h-[48px] justify-center px-4 py-3.5 text-base touch-manipulation sm:text-sm`}
                >
                  {veilSecondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CandidateCard({
  c,
  unlocked,
  canUnlock,
  onUnlock,
}: {
  c: DisplayCandidate;
  unlocked: boolean;
  canUnlock: boolean;
  onUnlock: () => void;
}) {
  return (
    <li className="rounded-2xl border border-[#e1dbd1] bg-white/95 p-5 shadow-sm backdrop-blur-sm">
      <p className="font-mono text-xl font-bold tracking-wider text-[#2C4A6E]">{c.initials}</p>
      <p className="mt-1 text-sm font-semibold text-[#152435]">{c.sector}</p>
      <p className="mt-2 text-sm text-[#6b7a8d]">
        {c.region} · {c.city}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#152435]/90">{c.summary}</p>
      {unlocked ? (
        <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-950">
          Scheda sbloccata (dimostrativo): contatto gestito secondo le modalità contrattuali della piattaforma.
        </p>
      ) : (
        <button
          type="button"
          disabled={!canUnlock}
          onClick={onUnlock}
          className="mt-4 min-h-[48px] w-full touch-manipulation rounded-xl border border-[#2C4A6E]/30 bg-[#2C4A6E]/5 px-4 py-3 text-base font-bold text-[#2C4A6E] transition hover:bg-[#2C4A6E]/10 disabled:cursor-not-allowed disabled:opacity-50 sm:py-2.5 sm:text-sm"
        >
          {!c.allowUnlock
            ? "Profilo non sbloccabile"
            : canUnlock
              ? "Sblocca dettaglio"
              : "Limite sblocchi raggiunto per il piano"}
        </button>
      )}
    </li>
  );
}

function CompanyCard({
  z,
  unlocked,
  canUnlock,
  onUnlock,
}: {
  z: DisplayCompany;
  unlocked: boolean;
  canUnlock: boolean;
  onUnlock: () => void;
}) {
  return (
    <li className="rounded-2xl border border-[#e1dbd1] bg-white/95 p-5 shadow-sm backdrop-blur-sm">
      <p className="text-sm font-semibold text-[#152435]">{z.maskedName}</p>
      <p className="mt-2 text-sm text-[#6b7a8d]">
        {z.sector} · {z.region} · {z.city}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#152435]/90">{z.summary}</p>
      {unlocked ? (
        <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-950">
          Dettaglio sbloccato (dimostrativo): canale di contatto dopo conferma pagamento e termini d’uso.
        </p>
      ) : (
        <button
          type="button"
          disabled={!canUnlock}
          onClick={onUnlock}
          className="mt-4 min-h-[48px] w-full touch-manipulation rounded-xl border border-[#FF6B35]/40 bg-[#fff7ed] px-4 py-3 text-base font-bold text-[#c2410c] transition hover:bg-[#ffedd5] disabled:cursor-not-allowed disabled:opacity-50 sm:py-2.5 sm:text-sm"
        >
          {!z.allowUnlock
            ? "Scheda non sbloccabile"
            : canUnlock
              ? "Sblocca anteprima dettaglio"
              : "Sblocchi esauriti (anteprima)"}
        </button>
      )}
    </li>
  );
}
