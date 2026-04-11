/** Paesi per località candidato (distanze coerenti con il raggio km dichiarato). */
export const CANDIDATE_COUNTRIES = [
  "Italia",
  "San Marino",
  "Svizzera",
  "Austria",
  "Francia",
  "Germania",
  "Slovenia",
  "Croazia",
  "Altri Paesi UE",
  "Extra UE / altro",
] as const;

export type CandidateCountry = (typeof CANDIDATE_COUNTRIES)[number];
