/** Hub geografici leggeri (Italia): testo unico per regione + SEO locale senza doorway. */

export type RegionSlug =
  | "abruzzo"
  | "basilicata"
  | "calabria"
  | "campania"
  | "emilia-romagna"
  | "friuli-venezia-giulia"
  | "lazio"
  | "liguria"
  | "lombardia"
  | "marche"
  | "molise"
  | "piemonte"
  | "puglia"
  | "sardegna"
  | "sicilia"
  | "toscana"
  | "trentino-alto-adige"
  | "umbria"
  | "valle-d-aosta"
  | "veneto";

export type RegionContent = {
  slug: RegionSlug;
  name: string;
  /** Paragrafo descrittivo unico (contesto locale + servizio). */
  intro: string;
};

export const ITALIAN_REGIONS: RegionContent[] = [
  {
    slug: "abruzzo",
    name: "Abruzzo",
    intro:
      "Tra costa adriatica e Appennino, l’Abruzzo concentra manifatturiero, turismo e agricoltura: chi assume cerca spesso operai specializzati o profili legati all’ospitalità. Su Lavoro48h imprese e candidati si incontrano tramite annunci e profili (non agenzia per il lavoro), con area, raggio in chilometri, verticali di settore e tempi di risposta orientati alle 48 ore ove applicabile.",
  },
  {
    slug: "basilicata",
    name: "Basilicata",
    intro:
      "Potenza e Matera ancorano un territorio con filiere industriali e un forte richiamo culturale. Chi assume o cerca lavoro beneficia di annunci chiari su zona e disponibilità: la piattaforma struttura l’incontro per competenza e distanza dichiarata, senza sostituirsi a un’agenzia per il lavoro.",
  },
  {
    slug: "calabria",
    name: "Calabria",
    intro:
      "Logistica, turismo costiero e piccole imprese richiedono spesso coperture rapide e verifica di disponibilità reale. Una bacheca con filtri geografici e verticali riduce contatti improduttivi tra province e versanti diversi del territorio.",
  },
  {
    slug: "campania",
    name: "Campania",
    intro:
      "Napoli e l’area metropolitana trainano commercio, servizi e cantieristica; la domanda di profili operativi resta elevata. Pubblicare ricerche con settore, sede e aspettative sui tempi di feedback aiuta a competere sul mercato senza sommergersi di curriculum generici.",
  },
  {
    slug: "emilia-romagna",
    name: "Emilia-Romagna",
    intro:
      "Distretti manifatturieri, logistica e agroalimentare rendono la regione un laboratorio di ricerca di personale strutturata in azienda. Per PMI e filiali, annunci su verticali dedicati (es. logistica, uffici, commercio) e profili con competenze esplicite accelerano il primo screening lato impresa.",
  },
  {
    slug: "friuli-venezia-giulia",
    name: "Friuli-Venezia Giulia",
    intro:
      "Confine e porti influenzano logistica, manifattura e turismo di qualità. Candidati e imprese che dichiarano correttamente zona e spostamento evitano proposte irrealistiche; il servizio resta una bacheca digitale tra domanda e offerta.",
  },
  {
    slug: "lazio",
    name: "Lazio",
    intro:
      "Roma e la provincia concentrano amministrazione, servizi e cantieri infrastrutturali. Annunci precisi su mansioni e contratto aiutano le imprese a incontrare profili pertinenti; i candidati valorizzano disponibilità e settore su schede ordinate — sempre in autonomia tra le parti, senza collocamento da parte della piattaforma.",
  },
  {
    slug: "liguria",
    name: "Liguria",
    intro:
      "Porto, turismo e piccole industrie richiedono flessibilità sugli orari e attenzione agli spostamenti lungo la costa. Indicare chiaramente sede e raggio d’azione riduce attriti in fase iniziale.",
  },
  {
    slug: "lombardia",
    name: "Lombardia",
    intro:
      "Il dinamismo economico milanese e provinciale genera volume e competizione sulle figure qualificate. Distinquere verticali, competenze tecniche e tempi di risposta permette di emergere senza promesse fuori misura.",
  },
  {
    slug: "marche",
    name: "Marche",
    intro:
      "Calzaturiero, meccanica e turismo interno caratterizzano il tessuto locale. Per le imprese, annunci allineati al processo successivo (colloquio, prova) riducono abbandoni; per i candidati, coerenza tra km dichiarati e sedi ricercate è decisiva.",
  },
  {
    slug: "molise",
    name: "Molise",
    intro:
      "Territorio compatto con esigenze di prossimità tra comuni. Una bacheca che mette in evidenza distanza e settore aiuta piccole imprese e lavoratori a trovare annunci e profili coerenti, in autonomia.",
  },
  {
    slug: "piemonte",
    name: "Piemonte",
    intro:
      "Automotive, design e vino animano un mercato che richiede profili tecnici e commerciali. Verticali e schede sintetiche aiutano titolari e chi cura la ricerca del personale a tenere processi snelli.",
  },
  {
    slug: "puglia",
    name: "Puglia",
    intro:
      "Logistica, turismo lungo le coste e servizi urbani creano picchi stagionali. Comunicare turni e urgenze in annuncio migliora la pertinenza delle risposte; i candidati possono indicare disponibilità su fasce orarie e trasferte.",
  },
  {
    slug: "sardegna",
    name: "Sardegna",
    intro:
      "Isola e stagionalità influenzano disponibilità e tempi di copertura. Geografia e raggio dichiarati dai candidati sono centrali per imprese che operano su più centri.",
  },
  {
    slug: "sicilia",
    name: "Sicilia",
    intro:
      "Palermo, Catania e le province costiere combinano servizi, turismo e cantieristica. Processi rapidi in azienda richiedono chiarezza su sede e vertical: una bacheca digitale consente l’incontro iniziale tra annunci e profili, con dettaglio progressivo.",
  },
  {
    slug: "toscana",
    name: "Toscana",
    intro:
      "Manifattura di qualità, turismo culturale e servizi alle imprese convivono. Profili amministrativi e operativi beneficiano di filtri per competenza e area, con FAQ e blog per approfondire annunci e colloqui.",
  },
  {
    slug: "trentino-alto-adige",
    name: "Trentino-Alto Adige",
    intro:
      "Turismo alpino, manifattura specializzata e multilingualità influenzano la ricerca di personale. Indicare lingua e turni in annuncio riduce fraintendimenti; i candidati dichiarano zona e mobilità in modo verificabile.",
  },
  {
    slug: "umbria",
    name: "Umbria",
    intro:
      "Tessile, alimentare e turismo religioso e culturale sostengono il mercato del lavoro regionale. Percorsi strutturati con tempi definiti favoriscono PMI che non dispongono di grandi team HR.",
  },
  {
    slug: "valle-d-aosta",
    name: "Valle d’Aosta",
    intro:
      "Montagna, turismo e commercio di frontiera richiedono flessibilità e spesso competenze linguistiche. Annunci trasparenti su orari e ubicazione migliorano l’incontro tra offerta e domanda.",
  },
  {
    slug: "veneto",
    name: "Veneto",
    intro:
      "Export, manifattura diffusa e servizi rendono il Veneto uno dei motori occupazionali del Paese. Verticali di settore e messaggi coerenti con i piani aziendali aiutano a gestire volumi di candidature senza perdere qualità.",
  },
];

export function getRegion(slug: string): RegionContent | undefined {
  return ITALIAN_REGIONS.find((r) => r.slug === slug);
}
