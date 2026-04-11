import type { BlogArticle } from "../types";
import { smartWorkingAprile2026 } from "./smart-working-aprile-2026";
import { annuncioLavoroEfficace } from "./annuncio-lavoro-efficace";
import { colloquioLavoroPreparazione } from "./colloquio-lavoro-preparazione";
import { tempoIndeterminatoDeterminato } from "./tempo-indeterminato-determinato";
import { ralRetribuzioneGuida } from "./ral-retribuzione-guida";
import { selezionePersonalePmi } from "./selezione-personale-pmi";
import { SETTORI_VERTICALI_ARTICLES } from "./settori-articoli-verticali";

export const ALL_BLOG_ARTICLES: BlogArticle[] = [
  smartWorkingAprile2026,
  annuncioLavoroEfficace,
  colloquioLavoroPreparazione,
  tempoIndeterminatoDeterminato,
  ralRetribuzioneGuida,
  selezionePersonalePmi,
  ...SETTORI_VERTICALI_ARTICLES,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ALL_BLOG_ARTICLES.find((a) => a.slug === slug);
}
