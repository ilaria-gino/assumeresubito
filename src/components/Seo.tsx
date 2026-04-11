import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { BRAND } from "../config/brand";
import { getArticleBySlug } from "../data/blog/posts";
import { getSector } from "../data/sectors";
import { getRegion } from "../data/regions";

const BASE = BRAND.domain;

const ROUTES: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${BRAND.name} | Bacheca lavoro — non agenzia per il lavoro`,
    description: `Strumento digitale per incontrare liberamente domanda e offerta (non agenzia né collocamento). Marketplace di annunci, verticali, Italia (regione, città, km). Piani imprese Starter, Basic, Full; candidato base gratis. Contratti di lavoro solo tra le parti.`,
  },
  "/registrazione": {
    title: `Registrazione | Scegli percorso | ${BASE}`,
    description:
      "Hub iscrizione: candidato o impresa. Bacheca digitale tra utenti, non agenzia per il lavoro. Modulo e condizioni economiche affiancate.",
  },
  "/registrazione/azienda": {
    title: `Iscrizione imprese e piani Starter, Basic, Full | ${BASE}`,
    description:
      "Modulo richiesta azienda con piani e sblocchi indicativi affiancati. +IVA. Non agenzia per il lavoro.",
  },
  "/registrazione/candidato": {
    title: `Iscrizione candidato | Gratis o Cerca aziende | ${BASE}`,
    description:
      "Non agenzia né collocamento: profilo e annunci in autonomia. Modulo gratuito o piano per consultare imprese; prezzi nel riquadro accanto.",
  },
  "/chi-siamo": {
    title: `Chi siamo | ${BASE}`,
    description:
      "Strumento digitale per incontrare domanda e offerta in libertà: bacheca su tutta Italia, non agenzia. Verticali; piani imprese; regole contatto in FAQ e Termini.",
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
    description: `Recapiti per informazioni commerciali e assistenza: ${BRAND.email}. Lavoro48h non è un'agenzia per il lavoro.`,
  },
  "/blog": {
    title: `Blog | Lavoro, annunci e buone pratiche (non agenzia) | ${BASE}`,
    description:
      "Approfondimenti su annunci, colloqui, contratti e smart working per imprese e candidati. Lavoro48h resta bacheca digitale, non agenzia per il lavoro. FAQ in chiusura, tono istituzionale.",
  },
  "/faq": {
    title: `FAQ | Imprese e candidati | ${BASE}`,
    description:
      "FAQ: non agenzia per il lavoro, libertà tra le parti, privacy, piani Starter/Basic/Full, sblocchi profilo, retribuzioni orientative. Risposte divulgative.",
  },
  "/retribuzioni-orientative": {
    title: `Retribuzioni orientative di mercato | ${BASE}`,
    description:
      "Bande indicative lordo mensile per ruoli operativi (edilizia, termoidraulica, elettrico), esempi su più aree italiane: confronto di mercato, non CCNL né consulenza.",
  },
  "/candidati": {
    title: `Cerca profili candidati | ${BASE}`,
    description:
      "Bacheca digitale (non agenzia): anteprima ricerca imprese/candidati dopo registrazione. Profili per settore e area, anonimato ove previsto, 48 h ove applicabile.",
  },
  "/italia": {
    title: `Annunci e incontro domanda-offerta per regione | Italia | ${BASE}`,
    description:
      "Venti pagine geografiche: contesto locale, verticali, iscrizione imprese e candidati. Strumento di annunci tra utenti, non agenzia per il lavoro.",
  },
  "/risorse/checklist-annuncio": {
    title: `Checklist annuncio di lavoro | Risorse imprese | ${BASE}`,
    description:
      "Elenco operativo prima di pubblicare una ricerca: titolo, sede, mansioni, requisiti, contratto, privacy. Contenuto divulgativo.",
  },
};

function metaForPath(pathname: string) {
  if (pathname.startsWith("/italia/")) {
    const slug = pathname.replace(/^\/italia\//, "");
    const region = slug ? getRegion(slug) : undefined;
    if (region) {
      const desc =
        region.intro.length > 158 ? `${region.intro.slice(0, 155).trim()}…` : region.intro;
      return {
        title: `Lavoro in ${region.name} | bacheca annunci, non agenzia | ${BASE}`,
        description: desc,
      };
    }
    return ROUTES["/italia"];
  }
  if (pathname.startsWith("/settori/")) {
    const slug = pathname.replace(/^\/settori\//, "");
    const sector = slug ? getSector(slug) : undefined;
    if (sector) {
      const desc =
        sector.heroSubtitle.length > 158 ? `${sector.heroSubtitle.slice(0, 155).trim()}…` : sector.heroSubtitle;
      return {
        title: `${sector.title}: annunci e profili | non agenzia | ${BASE}`,
        description: desc,
      };
    }
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
