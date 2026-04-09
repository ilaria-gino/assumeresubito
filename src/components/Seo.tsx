import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { BRAND } from "../config/brand";
import { getArticleBySlug } from "../data/blog/posts";

const BASE = BRAND.domain;

const ROUTES: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${BRAND.name} | Selezione tra aziende e candidati, verticali di settore`,
    description: `${BRAND.shortDescription} Anonimato iniziale, filtri per competenza e area, tempi di risposta orientati alle 48 ore ove applicabile. Modelli economici in trasparenza.`,
  },
  "/prezzi": {
    title: `Prezzi e condizioni | ${BASE}`,
    description:
      "Candidati gratis. Imprese: solo abbonamenti Basic o Full (bacheca annunci, non agenzia). Importi in contratto. Dettagli in pagina.",
  },
  "/registrazione": {
    title: `Registrazione azienda o candidato | ${BASE}`,
    description:
      "Accesso al servizio per imprese e per persone in cerca di occupazione. Dati trattati secondo privacy e cookie policy.",
  },
  "/chi-siamo": {
    title: `Chi siamo | ${BASE}`,
    description:
      "Lavoro48h: bacheca digitale tipo marketplace, non agenzia; verticali di settore; imprese Basic/Full, candidati gratis.",
  },
  "/privacy": {
    title: `Privacy Policy (GDPR) | ${BASE}`,
    description:
      "GDPR: titolare, natura marketplace (non agenzia), finalità, abbonamenti Basic/Full, diritti artt. 15-22, cookie.",
  },
  "/cookie-policy": {
    title: `Cookie Policy | ${BASE}`,
    description:
      "Informativa su cookie e tecnologie simili: tipologie, consenso, base giuridica, gestione preferenze e diritti.",
  },
  "/termini": {
    title: `Termini e condizioni di utilizzo | ${BASE}`,
    description:
      "Termini: bacheca annunci, abbonamenti Basic/Full per imprese, nessun ruolo da agenzia, responsabilità, legge italiana.",
  },
  "/contatti": {
    title: `Contatti | ${BASE}`,
    description: `Recapiti per informazioni commerciali, partnership e assistenza: ${BRAND.email}.`,
  },
  "/blog": {
    title: `Blog | Approfondimenti su lavoro e selezione | ${BASE}`,
    description:
      "Articoli informativi su recruiting, contratti, colloqui e smart working. Contenuti utili, FAQ in chiusura, tono istituzionale.",
  },
  "/faq": {
    title: `FAQ | Imprese e candidati | ${BASE}`,
    description:
      "Oltre cinquanta domande frequenti divise tra imprese/HR e lavoratori: selezione, privacy, colloqui, contratti e diritti. Risposte divulgative.",
  },
};

function metaForPath(pathname: string) {
  if (pathname.startsWith("/settori/")) {
    return {
      title: `Settore | ${BASE}`,
      description: `Landing di settore su ${BRAND.domain}: filtri, messaggi e percorsi di registrazione per aziende e candidati.`,
    };
  }
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace(/^\/blog\//, "");
    const article = slug ? getArticleBySlug(slug) : undefined;
    if (article) {
      return {
        title: `${article.title} | Blog ${BASE}`,
        description: article.excerpt,
      };
    }
    return ROUTES["/blog"];
  }
  return ROUTES[pathname] ?? ROUTES["/"];
}

export function Seo() {
  const { pathname } = useLocation();
  const meta = useMemo(() => metaForPath(pathname), [pathname]);

  useEffect(() => {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [meta]);

  return null;
}
