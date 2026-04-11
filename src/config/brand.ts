import { publicSiteUrl } from "./siteUrl";

/** Identità e URL ufficiali del sito (Lavoro48h). */
export const BRAND = {
  /** Nome marchio senza estensione */
  name: "Lavoro48h",
  /** Dominio pubblico */
  domain: "lavoro48h.it",
  /** URL canonico: vedi `siteUrl.ts` e `VITE_SITE_URL` opzionale in `.env` */
  get siteUrl(): string {
    return publicSiteUrl();
  },
  /** Email di contatto istituzionale */
  email: "info@lavoro48h.it",
  /** Descrizione breve per meta e footer */
  shortDescription:
    "Strumento digitale per far incontrare, in autonomia, chi cerca personale e chi cerca lavoro (bisogni complementari): bacheca / marketplace di annunci, non agenzia per il lavoro né collocamento. Verticali; piani imprese Starter, Basic, Full.",
};

export function mailtoContact(subject?: string) {
  const base = `mailto:${BRAND.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
