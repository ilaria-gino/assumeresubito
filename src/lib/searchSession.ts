/**
 * Sessione ricerca lato browser (POC): impostata al completamento dei moduli in /registrazione.
 * In produzione andrà sostituita con account autenticato e dati da Supabase / pagamenti.
 */

export type SearchRole = "company" | "candidate";

export type CandidateRegistrationMode = "contact_only" | "active_search";

export type EmployerPlan = "starter" | "basic" | "full";

export type SearchSessionV1 = {
  v: 1;
  role: SearchRole;
  updatedAt: string;
  candidateMode?: CandidateRegistrationMode;
  /**
   * Percorso «Cerca aziende»: anteprima schede finché il pagamento non è integrato in piattaforma.
   * Percorso solo contatto: nessuna consultazione imprese.
   */
  companySearchPreview?: boolean;
  employerPlan?: EmployerPlan;
  unlockedCandidateIds?: string[];
  unlockedCompanyIds?: string[];
};

const KEY = "l48h_search_session";
const CUSTOM_EVENT = "l48h-search-session";

export function loadSearchSession(): SearchSessionV1 | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SearchSessionV1;
    if (parsed?.v !== 1 || (parsed.role !== "company" && parsed.role !== "candidate")) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveSearchSession(session: SearchSessionV1): void {
  window.localStorage.setItem(KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(CUSTOM_EVENT));
}

export function clearSearchSession(): void {
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(CUSTOM_EVENT));
}

export function subscribeSearchSession(cb: () => void): () => void {
  const on = () => cb();
  window.addEventListener("storage", on);
  window.addEventListener(CUSTOM_EVENT, on);
  return () => {
    window.removeEventListener("storage", on);
    window.removeEventListener(CUSTOM_EVENT, on);
  };
}

export function employerUnlockLimit(plan: EmployerPlan): number {
  if (plan === "starter") return 1;
  if (plan === "basic") return 5;
  return 999;
}

export function employerUnlockedCount(session: SearchSessionV1): number {
  return session.unlockedCandidateIds?.length ?? 0;
}

export function canEmployerUnlock(session: SearchSessionV1): boolean {
  const plan = session.employerPlan ?? "starter";
  return employerUnlockedCount(session) < employerUnlockLimit(plan);
}

export function registerCompanySession(): void {
  const prev = loadSearchSession();
  const next: SearchSessionV1 = {
    v: 1,
    role: "company",
    updatedAt: new Date().toISOString(),
    employerPlan: prev?.role === "company" ? prev.employerPlan ?? "starter" : "starter",
    unlockedCandidateIds: prev?.role === "company" ? prev.unlockedCandidateIds : [],
    unlockedCompanyIds: [],
  };
  saveSearchSession(next);
}

export function registerCandidateSession(mode: CandidateRegistrationMode): void {
  const next: SearchSessionV1 = {
    v: 1,
    role: "candidate",
    updatedAt: new Date().toISOString(),
    candidateMode: mode,
    companySearchPreview: mode === "active_search",
    unlockedCandidateIds: [],
    unlockedCompanyIds: [],
  };
  saveSearchSession(next);
}
