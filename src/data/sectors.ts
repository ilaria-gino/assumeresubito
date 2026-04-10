export type SectorSlug =
  | "immobiliare"
  | "ristorazione"
  | "logistica"
  | "edilizia"
  | "termoidraulica"
  | "impianti-elettrici"
  | "uffici"
  | "commercio";

export interface SectorContent {
  slug: SectorSlug;
  title: string;
  roleLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  problems: string[];
  solutions: string[];
  cta: string;
  /** Per avatar / illustrazione locale */
  avatarHint: "suit" | "chef" | "warehouse" | "hardhat" | "desk" | "retail";
}

export const SECTORS: SectorContent[] = [
  {
    slug: "immobiliare",
    title: "Immobiliare",
    roleLabel: "agenti immobiliari",
    heroTitle: "Assumi agenti immobiliari in meno di 48 ore",
    heroSubtitle:
      "Persone motivate, con esperienza o pronte a partire. Meno tempo perso, più colloqui utili.",
    problems: ["Candidati poco seri", "Troppi CV generici", "Turnover alto", "Urgenza su trattative"],
    solutions: ["Profili filtrati per zona e esperienza", "Disponibilità chiara fin da subito", "Contatto rapido", "Anonimato che attira risposte"],
    cta: "Trova agenti disponibili ora",
    avatarHint: "suit",
  },
  {
    slug: "ristorazione",
    title: "Ristorazione",
    roleLabel: "camerieri, cuochi, sala",
    heroTitle: "Assumi staff per sala e cucina in meno di 48 ore",
    heroSubtitle: "Turni, stagionalità, picchi: ti servono persone subito, non promesse.",
    problems: ["Coperture last minute", "Assenze improvvise", "Candidati inesperti"],
    solutions: ["Disponibilità turni evidenziata", "Esperienza in sala/cucina", "Match per zona"],
    cta: "Trova personale per il locale",
    avatarHint: "chef",
  },
  {
    slug: "logistica",
    title: "Logistica",
    roleLabel: "magazzino, consegne, carrellisti",
    heroTitle: "Assumi per magazzino e consegne in meno di 48 ore",
    heroSubtitle: "Patente, carrello, disponibilità: vedi subito chi è pronto.",
    problems: ["Turni notturni difficili da coprire", "Patenti e abilitazioni da verificare", "Picchi di ordini"],
    solutions: ["Filtri patente e automunito", "Disponibilità immediata", "Profili con esperienza logistica"],
    cta: "Trova operatori disponibili",
    avatarHint: "warehouse",
  },
  {
    slug: "edilizia",
    title: "Edilizia",
    roleLabel: "operaio, muratore, manovale",
    heroTitle: "Assumi operai e tecnici in meno di 48 ore",
    heroSubtitle:
      "Cantiere che riparte: ti servono persone abituate al campo. Su tutto il territorio nazionale la vicinanza al cantiere conta: meglio specificare ristrutturazioni, nuove costruzioni, rifiniture o cartongesso così trovi il muratore giusto, non un generico.",
    problems: ["Candidati senza esperienza in cantiere", "Sicurezza e abitudine al lavoro fisico", "Urgenze su commessa"],
    solutions: [
      "Tag competenze (finiture, cartongesso, ristrutturazioni…)",
      "Zona e disponibilità",
      "Profili coerenti col ruolo",
    ],
    cta: "Trova operai disponibili",
    avatarHint: "hardhat",
  },
  {
    slug: "termoidraulica",
    title: "Termoidraulica / impianti idraulici",
    roleLabel: "idraulico, termoidraulico",
    heroTitle: "Assumi termoidraulici e idraulici in meno di 48 ore",
    heroSubtitle:
      "Impianti civili, climatizzazione, centrali termiche: le figure si differenziano molto. Con competenze esplicite riduci colloqui con profili non allineati. La prossimità tra sede commessa e candidato resta decisiva ovunque in Italia.",
    problems: ["Specializzazioni diverse sotto lo stesso nome", "Urgenze su commessa", "Verifica competenze reali"],
    solutions: ["Tag su tipi di impianto e materiali", "Zona operativa chiara", "Match su esperienza dichiarata"],
    cta: "Trova installatori disponibili",
    avatarHint: "hardhat",
  },
  {
    slug: "impianti-elettrici",
    title: "Impianti elettrici",
    roleLabel: "elettricista, cablatore",
    heroTitle: "Assumi elettricisti in meno di 48 ore",
    heroSubtitle:
      "Civile, quadri, domotica o fotovoltaico: chiarisci il fabbisogno e filtra i profili. Mercato teso: la prossimità geografica conta.",
    problems: ["Requisiti tecnici eterogenei", "Carenza di manodopera qualificata", "Commesse con scadenze strette"],
    solutions: ["Competenze granulari nel profilo", "Disponibilità e raggio d’azione", "Contatto rapido dopo sblocco"],
    cta: "Trova elettricisti disponibili",
    avatarHint: "hardhat",
  },
  {
    slug: "uffici",
    title: "Uffici e amministrazione",
    roleLabel: "impiegati, amministrazione, back office",
    heroTitle: "Assumi impiegati e amministrazione in meno di 48 ore",
    heroSubtitle: "Segreteria, contabilità, supporto: profili ordinati e verificabili.",
    problems: ["CV lunghi e poco chiari", "Mancanza di disponibilità immediata", "Troppi colloqui inutili"],
    solutions: ["Scheda sintetica e leggibile", "Match su competenze e zona", "Contatto entro 48 ore"],
    cta: "Trova profili amministrativi",
    avatarHint: "desk",
  },
  {
    slug: "commercio",
    title: "Commercio",
    roleLabel: "vendita al dettaglio, cassa, negozio",
    heroTitle: "Assumi per negozio e vendita in meno di 48 ore",
    heroSubtitle: "Weekend, cassa, reparto: chi è disponibile lo vedi subito.",
    problems: ["Picchi nei weekend", "Turni spezzati", "Personale instabile"],
    solutions: ["Full-time / part-time chiaro", "Esperienza vendita", "Zona e disponibilità"],
    cta: "Trova commessi disponibili",
    avatarHint: "retail",
  },
];

export function getSector(slug: string): SectorContent | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
