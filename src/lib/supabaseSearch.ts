import { getSupabase, isSupabaseConfigured } from "./supabase";

export type AnonymousCandidateRow = {
  id: string;
  initials: string;
  sector: string;
  region: string;
  city: string;
  country: string;
  travel_radius_km: number | null;
  experience_years: number | null;
  has_car: boolean;
  has_license: boolean;
  registration_mode: string;
  trade_skills: unknown;
  allow_unlock: boolean;
};

export type AnonymousCompanyRow = {
  id: string;
  masked_name: string;
  sector: string;
  region: string;
  city: string;
  allow_unlock: boolean;
};

export function candidateSummaryFromRow(r: AnonymousCandidateRow): string {
  const parts: string[] = [];
  if (r.experience_years != null && Number.isFinite(r.experience_years)) {
    parts.push(`Esperienza indicativa: ${r.experience_years} anni`);
  }
  if (r.travel_radius_km != null) {
    parts.push(`Spostamento fino a ca. ${r.travel_radius_km} km`);
  }
  if (Array.isArray(r.trade_skills) && r.trade_skills.length > 0) {
    parts.push(`Competenze: ${r.trade_skills.slice(0, 4).join(", ")}`);
  }
  if (r.has_license) parts.push("Patente");
  if (r.has_car) parts.push("Automunito");
  if (parts.length === 0) return "Profilo registrato sulla piattaforma.";
  return parts.join(" · ");
}

export function companySummaryFromRow(): string {
  return "Presenza sul marketplace annunci; dettagli contrattuali e contatti secondo piano e termini di servizio.";
}

export async function fetchAnonymousCandidates(search: string): Promise<AnonymousCandidateRow[]> {
  if (!isSupabaseConfigured()) return [];
  const sb = getSupabase();
  if (!sb) return [];
  const { data, error } = await sb.rpc("list_anonymous_candidates", { p_search: search.trim() });
  if (error) throw error;
  return (data ?? []) as AnonymousCandidateRow[];
}

export async function fetchAnonymousCompanies(search: string): Promise<AnonymousCompanyRow[]> {
  if (!isSupabaseConfigured()) return [];
  const sb = getSupabase();
  if (!sb) return [];
  const { data, error } = await sb.rpc("list_anonymous_companies", { p_search: search.trim() });
  if (error) throw error;
  return (data ?? []) as AnonymousCompanyRow[];
}
