import { SECTORS, type SectorSlug } from "./sectors";

const blogSlugToSector = new Map<string, SectorSlug>();
for (const s of SECTORS) {
  for (const slug of s.relatedArticleSlugs) {
    blogSlugToSector.set(slug, s.slug);
  }
}

export function getSectorSlugForBlogArticle(articleSlug: string): SectorSlug | undefined {
  return blogSlugToSector.get(articleSlug);
}
