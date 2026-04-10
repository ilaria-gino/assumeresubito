/**
 * Copertura Italia: regioni + capoluoghi di provincia (città di riferimento per ricerca lavoro).
 * Per ampliare all’elenco ISTAT dei comuni si può sostituire/estendere questa mappa.
 */
export const ITALIAN_REGIONS = [
  "Abruzzo",
  "Basilicata",
  "Calabria",
  "Campania",
  "Emilia-Romagna",
  "Friuli-Venezia Giulia",
  "Lazio",
  "Liguria",
  "Lombardia",
  "Marche",
  "Molise",
  "Piemonte",
  "Puglia",
  "Sardegna",
  "Sicilia",
  "Toscana",
  "Trentino-Alto Adige",
  "Umbria",
  "Valle d'Aosta",
  "Veneto",
] as const;

export type ItalianRegion = (typeof ITALIAN_REGIONS)[number];

/** Città = sede provinciale / città metropolitana (denominazione usata in annunci). */
export const CITIES_BY_REGION: Record<ItalianRegion, readonly string[]> = {
  Abruzzo: ["Chieti", "L'Aquila", "Pescara", "Teramo"],
  Basilicata: ["Matera", "Potenza"],
  Calabria: ["Catanzaro", "Cosenza", "Crotone", "Reggio Calabria", "Vibo Valentia"],
  Campania: ["Avellino", "Benevento", "Caserta", "Napoli", "Salerno"],
  "Emilia-Romagna": [
    "Bologna",
    "Ferrara",
    "Forlì",
    "Modena",
    "Parma",
    "Piacenza",
    "Ravenna",
    "Reggio Emilia",
    "Rimini",
  ],
  "Friuli-Venezia Giulia": ["Gorizia", "Pordenone", "Trieste", "Udine"],
  Lazio: ["Frosinone", "Latina", "Rieti", "Roma", "Viterbo"],
  Liguria: ["Genova", "Imperia", "La Spezia", "Savona"],
  Lombardia: [
    "Bergamo",
    "Brescia",
    "Como",
    "Cremona",
    "Lecco",
    "Lodi",
    "Mantova",
    "Milano",
    "Monza",
    "Pavia",
    "Sondrio",
    "Varese",
  ],
  Marche: ["Ancona", "Ascoli Piceno", "Fermo", "Macerata", "Pesaro"],
  Molise: ["Campobasso", "Isernia"],
  Piemonte: [
    "Alessandria",
    "Asti",
    "Biella",
    "Cuneo",
    "Novara",
    "Torino",
    "Verbania",
    "Vercelli",
  ],
  Puglia: ["Bari", "Barletta", "Brindisi", "Foggia", "Lecce", "Taranto"],
  Sardegna: ["Cagliari", "Carbonia", "Nuoro", "Oristano", "Sassari"],
  Sicilia: [
    "Agrigento",
    "Caltanissetta",
    "Catania",
    "Enna",
    "Messina",
    "Palermo",
    "Ragusa",
    "Siracusa",
    "Trapani",
  ],
  Toscana: [
    "Arezzo",
    "Firenze",
    "Grosseto",
    "Livorno",
    "Lucca",
    "Massa",
    "Pisa",
    "Pistoia",
    "Prato",
    "Siena",
  ],
  "Trentino-Alto Adige": ["Bolzano", "Trento"],
  Umbria: ["Perugia", "Terni"],
  "Valle d'Aosta": ["Aosta"],
  Veneto: ["Belluno", "Padova", "Rovigo", "Treviso", "Venezia", "Verona", "Vicenza"],
};

export function citiesForRegion(region: string): string[] {
  const list = CITIES_BY_REGION[region as ItalianRegion];
  if (!list) return [];
  return [...list].sort((a, b) => a.localeCompare(b, "it"));
}

/** Valore 9999 = disposto a valutare opportunità su tutta Italia. */
export const TRAVEL_RADIUS_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: "Solo nel comune / zona immediata" },
  { value: 10, label: "Fino a 10 km" },
  { value: 25, label: "Fino a 25 km" },
  { value: 50, label: "Fino a 50 km" },
  { value: 100, label: "Fino a 100 km" },
  { value: 150, label: "Fino a 150 km" },
  { value: 200, label: "Fino a 200 km" },
  { value: 300, label: "Fino a 300 km" },
  { value: 500, label: "Fino a 500 km" },
  { value: 9999, label: "Tutta Italia (disposto a spostarsi)" },
];
