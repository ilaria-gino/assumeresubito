/** Tag competenze per mestieri operativi (edilizia / impianti). Chiave = valore option settore nel form. */

export const TRADE_SKILL_GROUPS: Record<string, { label: string; skills: { id: string; label: string }[] }[]> = {
  Edilizia: [
    {
      label: "Tipologia intervento",
      skills: [
        { id: "ed_ristrutturazioni", label: "Ristrutturazioni" },
        { id: "ed_nuove_costruzioni", label: "Nuove costruzioni" },
        { id: "ed_rifiniture", label: "Rifiniture e intonaci" },
        { id: "ed_cartongesso", label: "Cartongesso" },
        { id: "ed_isolamenti", label: "Isolamenti / cappotto" },
        { id: "ed_piastrelle", label: "Piastrellista" },
        { id: "ed_muratura", label: "Muratura tradizionale" },
        { id: "ed_quota", label: "Lavori in quota / tracciati sicurezza" },
      ],
    },
  ],
  "Termoidraulica / impianti idraulici": [
    {
      label: "Ambito",
      skills: [
        { id: "th_idraulica_civile", label: "Impianti idraulici civili" },
        { id: "th_termo", label: "Termoidraulica / riscaldamento" },
        { id: "th_clima", label: "Climatizzazione / split / VRF" },
        { id: "th_solare_termico", label: "Solare termico" },
        { id: "th_tubazioni", label: "Rame / multistrato / polietilene" },
        { id: "th_revo", label: "Rilievi su impianti esistenti" },
        { id: "th_centrale", label: "Centrale termica / caldaie" },
      ],
    },
  ],
  "Impianti elettrici": [
    {
      label: "Ambito",
      skills: [
        { id: "el_civile", label: "Impianti elettrici civili" },
        { id: "el_quadri", label: "Quadri e cablaggi" },
        { id: "el_domotica", label: "Domotica / smart home" },
        { id: "el_illuminazione", label: "Illuminazione" },
        { id: "el_fv", label: "Fotovoltaico (connessione / stringhe)" },
        { id: "el_ups", label: "UPS / continuità" },
        { id: "el_messe", label: "Messe in servizio / verifiche" },
      ],
    },
  ],
};

export function tradeSkillGroupsForSector(sector: string): { label: string; skills: { id: string; label: string }[] }[] {
  const g = TRADE_SKILL_GROUPS[sector];
  return g ?? [];
}
