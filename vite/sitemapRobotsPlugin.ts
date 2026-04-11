import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { ALL_BLOG_ARTICLES } from "../src/data/blog/posts";
import { ITALIAN_REGIONS } from "../src/data/regions";
import { SECTORS } from "../src/data/sectors";

type UrlEntry = { path: string; changefreq: string; priority: string };

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function buildUrlEntries(): UrlEntry[] {
  const staticPages: UrlEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1" },
    { path: "/registrazione", changefreq: "monthly", priority: "0.9" },
    { path: "/registrazione/azienda", changefreq: "monthly", priority: "0.9" },
    { path: "/registrazione/candidato", changefreq: "monthly", priority: "0.9" },
    { path: "/candidati", changefreq: "weekly", priority: "0.85" },
    { path: "/italia", changefreq: "weekly", priority: "0.85" },
    { path: "/faq", changefreq: "monthly", priority: "0.8" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/risorse/checklist-annuncio", changefreq: "monthly", priority: "0.75" },
    { path: "/retribuzioni-orientative", changefreq: "monthly", priority: "0.75" },
    { path: "/chi-siamo", changefreq: "monthly", priority: "0.7" },
    { path: "/contatti", changefreq: "monthly", priority: "0.65" },
    { path: "/privacy", changefreq: "yearly", priority: "0.4" },
    { path: "/cookie-policy", changefreq: "yearly", priority: "0.4" },
    { path: "/termini", changefreq: "yearly", priority: "0.4" },
  ];

  const sectors: UrlEntry[] = SECTORS.map((s) => ({
    path: `/settori/${s.slug}`,
    changefreq: "weekly",
    priority: "0.8",
  }));

  const regions: UrlEntry[] = ITALIAN_REGIONS.map((r) => ({
    path: `/italia/${r.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const posts: UrlEntry[] = ALL_BLOG_ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    changefreq: "yearly",
    priority: "0.55",
  }));

  return [...staticPages, ...sectors, ...regions, ...posts];
}

function buildSitemapXml(base: string, entries: UrlEntry[]): string {
  const lines = entries.map(
    (e) =>
      `  <url><loc>${escapeXml(base + e.path)}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join("\n")}\n</urlset>\n`;
}

export function sitemapRobotsPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, "");

  return {
    name: "sitemap-robots",
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist");
      if (!fs.existsSync(outDir)) return;

      const entries = buildUrlEntries();
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), buildSitemapXml(base, entries), "utf8");

      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
      fs.writeFileSync(path.join(outDir, "robots.txt"), robots, "utf8");
    },
  };
}
