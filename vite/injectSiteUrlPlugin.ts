import type { Plugin } from "vite";

/**
 * Sostituisce placeholder in index.html con l'URL canonico di build
 * (stesso valore usato per sitemap/robots).
 */
export function injectSiteUrlPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, "");
  const token = "__CANONICAL_SITE_URL__";

  return {
    name: "inject-site-url",
    transformIndexHtml(html) {
      if (!html.includes(token)) return html;
      return html.split(token).join(base);
    },
  };
}
