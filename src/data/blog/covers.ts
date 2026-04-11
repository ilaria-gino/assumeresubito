/** Immagini dedicate (Unsplash) e categorie editoriali per il layout blog. */
import { SETTORI_VERTICALI_SLUGS } from "./posts/settori-articoli-verticali";

export type BlogVisual = {
  category: string;
  coverImage: string;
  imageAlt: string;
};

const SETTORI_VERTICALI_VISUAL: BlogVisual = {
  category: "Verticali di settore",
  coverImage:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&auto=format&fit=crop",
  imageAlt: "Professionisti in contesto di lavoro strutturato",
};

const SETTORI_VERTICALI_COVER_MAP = Object.fromEntries(
  SETTORI_VERTICALI_SLUGS.map((slug) => [slug, SETTORI_VERTICALI_VISUAL]),
) as Record<string, BlogVisual>;

export const BLOG_VISUALS: Record<string, BlogVisual> = {
  ...SETTORI_VERTICALI_COVER_MAP,
  "smart-working-obblighi-aprile-2026": {
    category: "Normativa & agile",
    coverImage:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Postazione di lavoro professionale con laptop in ambiente luminoso",
  },
  "annuncio-lavoro-efficace-scrittura-selezione": {
    category: "Recruiting",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Scrivania con documenti e pianificazione",
  },
  "colloquio-lavoro-domande-preparazione-2026": {
    category: "Colloquio",
    coverImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Professionisti in conversazione in ambiente formale",
  },
  "tempo-indeterminato-determinato-apprendistato": {
    category: "Contratti",
    coverImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Documenti legali e firma contrattuale",
  },
  "ral-netto-ccnl-cosa-verificare-contratto": {
    category: "Retribuzione",
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Analisi numerica e documentazione economica",
  },
  "selezione-personale-pmi-processi-errori": {
    category: "PMI & HR",
    coverImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b5b57?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Team aziendale in riunione strategica",
  },
};

const DEFAULT_VISUAL: BlogVisual = {
  category: "Approfondimenti",
  coverImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop",
  imageAlt: "Collaborazione professionale",
};

export function getBlogVisual(slug: string): BlogVisual {
  return BLOG_VISUALS[slug] ?? DEFAULT_VISUAL;
}

export const BLOG_CATEGORIES = [
  "Tutti",
  "Verticali di settore",
  "Normativa & agile",
  "Recruiting",
  "Colloquio",
  "Contratti",
  "Retribuzione",
  "PMI & HR",
] as const;
