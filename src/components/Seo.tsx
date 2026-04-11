import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { BRAND } from "../config/brand";
import { getArticleBySlug } from "../data/blog/posts";

const BASE = BRAND.domain;

const ROUTES: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${BRAND.name} | Selezione tra aziende e candidati, verticali di settore`,
    description: `${BRAND.shortDescription} Ricerca su tutta Italia (regione, città; i candidati dichiarano i km di spostamento). Starter, Basic e Full (piano top): contatto da candidato solo con Full se in contratto. Candidati gratis.`,
  },
  "/prezzi": {
    title: `Prezzi e condizioni | ${BASE}`,
    description:
      "Imprese: Starter, Basic, Full (top). Candidati: gratis o piano Cerca aziende (indicativo 99€/6 mesi). Sblocchi e contatti come da pagina. +IVA indicativa.",
  },
  "/registrazione": {
    title: `Registrazione azienda o candidato | ${BASE}`,
    description:
      "Candidato: gratis se solo contattato, opzione a pagamento per cercare aziende; Paese e località con raggio km. Imprese: richiesta accesso. Privacy e cookie.",
  },
  "/chi-siamo": {
    title: `Chi siamo | ${BASE}`,
    description:
      "Bacheca digitale su tutta Italia (regione, città, raggio km per i candidati), non agenzia; verticali e abbonamenti imprese; contatto da candidato solo con Full (top) se in contratto.",
  },
  "/privacy": {
    title: `Privacy Policy (GDPR) | ${BASE}`,
    description:
      "GDPR: titolare, natura marketplace (non agenzia), abbonamenti Starter/Basic/Full, diritti artt. 15-22, cookie.",
  },
  "/cookie-policy": {
    title: `Cookie Policy | ${BASE}`,
    description:
      "Informativa su cookie e tecnologie simili: tipologie, consenso, base giuridica, gestione preferenze e diritti.",
  },
  "/termini": {
    title: `Termini e condizioni di utilizzo | ${BASE}`,
    description:
      "Termini: bacheca annunci; Starter/Basic/Full; iniziativa contatto da candidato solo con Full (top) se abilitato; non agenzia; legge italiana.",
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
      "FAQ imprese e lavoratori: selezione, privacy, piani Starter/Basic/Full, contatto da candidato solo con Full (top) se abilitato, sblocchi profilo, retribuzioni orientative. Risposte divulgative.",
  },
  "/retribuzioni-orientative": {
    title: `Retribuzioni orientative di mercato | ${BASE}`,
    description:
      "Bande indicative lordo mensile per ruoli operativi (edilizia, termoidraulica, elettrico), esempi su più aree italiane: confronto di mercato, non CCNL né consulenza.",
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
