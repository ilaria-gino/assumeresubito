/** Dati dimostrativi per la pagina Candidati (POC). Non provengono dal database. */

export type MockAnonymousCandidate = {
  id: string;
  initials: string;
  sector: string;
  region: string;
  city: string;
  summary: string;
};

export type MockAnonymousCompany = {
  id: string;
  maskedName: string;
  sector: string;
  region: string;
  city: string;
  summary: string;
};

export const MOCK_ANONYMOUS_CANDIDATES: MockAnonymousCandidate[] = [
  {
    id: "mc1",
    initials: "M.R.",
    sector: "Commercio",
    region: "Lombardia",
    city: "Milano",
    summary: "Vendita e gestione clienti, disponibilità immediata.",
  },
  {
    id: "mc2",
    initials: "L.B.",
    sector: "Logistica",
    region: "Emilia-Romagna",
    city: "Bologna",
    summary: "Magazzino, picking, patente elevabile.",
  },
  {
    id: "mc3",
    initials: "G.T.",
    sector: "Ristorazione",
    region: "Lazio",
    city: "Roma",
    summary: "Sala e bar, turni serali.",
  },
  {
    id: "mc4",
    initials: "A.F.",
    sector: "Uffici / amministrazione",
    region: "Piemonte",
    city: "Torino",
    summary: "Amministrazione e contabilità ordinaria.",
  },
  {
    id: "mc5",
    initials: "S.V.",
    sector: "Termoidraulica",
    region: "Veneto",
    city: "Padova",
    summary: "Installazioni civili, lettura disegni.",
  },
  {
    id: "mc6",
    initials: "P.C.",
    sector: "Edilizia",
    region: "Campania",
    city: "Napoli",
    summary: "Muratura e finiture, disponibilità a spostamenti in provincia.",
  },
];

export const MOCK_ANONYMOUS_COMPANIES: MockAnonymousCompany[] = [
  {
    id: "mz1",
    maskedName: "Impresa · area Milano nord",
    sector: "Logistica",
    region: "Lombardia",
    city: "Milano",
    summary: "Ricerca addetti magazzino, CCNL applicabile in fase contrattuale.",
  },
  {
    id: "mz2",
    maskedName: "Studio · zona Roma",
    sector: "Uffici / amministrazione",
    region: "Lazio",
    city: "Roma",
    summary: "Segreteria amministrativa part-time.",
  },
  {
    id: "mz3",
    maskedName: "Ristorazione · collina bolognese",
    sector: "Ristorazione",
    region: "Emilia-Romagna",
    city: "Bologna",
    summary: "Personale sala, weekend.",
  },
  {
    id: "mz4",
    maskedName: "Cooperativa · Torino",
    sector: "Commercio",
    region: "Piemonte",
    city: "Torino",
    summary: "Addetti punto vendita, formazione in sede.",
  },
  {
    id: "mz5",
    maskedName: "Impianti · provincia Padova",
    sector: "Impianti elettrici",
    region: "Veneto",
    city: "Padova",
    summary: "Manutenzione impianti civili.",
  },
];

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function filterMockCandidates(query: string): MockAnonymousCandidate[] {
  const q = normalize(query);
  if (!q) return MOCK_ANONYMOUS_CANDIDATES;
  return MOCK_ANONYMOUS_CANDIDATES.filter(
    (c) =>
      normalize(c.initials).includes(q) ||
      normalize(c.sector).includes(q) ||
      normalize(c.region).includes(q) ||
      normalize(c.city).includes(q) ||
      normalize(c.summary).includes(q),
  );
}

export function filterMockCompanies(query: string): MockAnonymousCompany[] {
  const q = normalize(query);
  if (!q) return MOCK_ANONYMOUS_COMPANIES;
  return MOCK_ANONYMOUS_COMPANIES.filter(
    (c) =>
      normalize(c.maskedName).includes(q) ||
      normalize(c.sector).includes(q) ||
      normalize(c.region).includes(q) ||
      normalize(c.city).includes(q) ||
      normalize(c.summary).includes(q),
  );
}
