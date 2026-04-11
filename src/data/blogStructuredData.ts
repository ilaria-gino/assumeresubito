import { BRAND } from "../config/brand";
import type { BlogArticle } from "./blog/types";

const LOGO_URL = `${BRAND.siteUrl}/favicon.svg`;

export function buildBlogArticleJsonLd(article: BlogArticle, canonicalPath: string) {
  const url = `${BRAND.siteUrl}${canonicalPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateIso,
    dateModified: article.dateIso,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

export function buildBreadcrumbListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BRAND.siteUrl}${item.path}`,
    })),
  };
}
