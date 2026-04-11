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
    "Bacheca digitale tra domanda e offerta di lavoro (stile marketplace annunci), verticali di settore e abbonamenti Basic/Full per le imprese — non agenzia per il lavoro.",
};

export function mailtoContact(subject?: string) {
  const base = `mailto:${BRAND.email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
