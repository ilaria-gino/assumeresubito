# Lavoro48h (lavoro48h.it) — Brief prodotto (sintesi)

Marchio e dominio pubblico: **Lavoro48h** / **lavoro48h.it**. Posizionamento: **bacheca digitale / marketplace di annunci** di lavoro (analogia portali tipo Subito per annunci), **non** agenzia per il lavoro né intermediazione. Verticali di settore, profili a livelli progressivi, tempi orientati alle **48 ore** ove applicabile. Candidati: iscrizione gratuita. Imprese: **Starter** (mensile, 1 sblocco/mese non cumulabile), **Basic** (690 €/anno indicativo, 5 sblocchi/anno), **Full** (1.890 €/anno indicativo, illimitato fair use). Nessun piano gratuito per imprese; corrispettivo per uso piattaforma.

## Concept

- Annunci e profili messi in relazione, filtri per competenza e zona.
- Anonimato: solo **iniziali** (es. M.R.) + **avatar** stilizzato coerente col ruolo.
- Urgenza: **contatto entro 48 ore** (timer, reminder in versione full product).

## Settori (landing dedicate)

Immobiliare, ristorazione, logistica, edilizia, **termoidraulica**, **impianti elettrici**, uffici/amministrazione, commercio. Copy con competenze granulari (muratura, impianti, ecc.) dove serve. **Geografia:** tutta Italia in form (regione + città capoluogo); candidati indicano **raggio km** di spostamento. **Retribuzioni orientative:** bande indicative su pagina dedicata, mai sostitutive di CCNL o consulenza.

## Copy hero (homepage)

- **Titolo (riferimento):** Incontro tra imprese e candidati; bacheca digitale, **non** agenzia per il lavoro.  
- **Sottotitolo:** Strumento potente ma neutrale: mette in contatto domanda e offerta (anche bisogni complementari); nessun collocamento; contratti di lavoro solo tra le parti. Piani imprese Starter / Basic / Full.  
- **CTA:** Sono un’azienda · Cerco lavoro · Cerca profili  

## Prezzi (messaggio)

- Candidati: sempre gratis.  
- **Starter (mensile):** 1 sblocco profilo completo al mese, non cumulabile (es. 99 €/mese + IVA indicativo).  
- **Basic (annuale):** 5 sblocchi nell’anno (es. 690 €/anno + IVA indicativo), supporto email.  
- **Full (annuale, piano top):** sblocchi illimitati (fair use), priorità; HR opzionale (es. 1.890 €/anno + IVA indicativo). **Solo Full** può abilitare (se previsto nel contratto) che il **candidato** manifesti interesse o contatti l’impresa; con Starter/Basic l’iniziativa dopo lo sblocco è dell’impresa. Va spiegato come vantaggio del piano top a chi sottoscrive Full.

## Tono

Istituzionale e chiaro; marketplace / bacheca annunci, **mai** collocamento o intermediazione; evitare promesse non coperte dai contratti del servizio digitale. Trasmettere **semplicità d’uso** (paragonabile a piattaforme social per chiarezza dell’esperienza), **senza** suggerire che Lavoro48h indirizzi, costringa o “chiuda” rapporti tra utenti.

## Posizionamento

Servizio **non generico**: verticali, percorsi e tempi definiti sul sito; **non** agenzia per il lavoro; privacy e termini coerenti con ruolo di **piattaforma digitale** (strumento di incontro), non di consulenza del lavoro, fiscalità o redazione contratti.

Messaggi ricorrenti: *candidati gratuiti (profilo base)* · *Starter / Basic / Full con sblocchi espliciti* · *contatto da candidato solo con Full (top) se in contratto* · *tempi di risposta definiti / 48 h ove applicabile* · *non siamo un’agenzia* · *corrispettivo = uso piattaforma, non esito assunzione* · *nessun vincolo tra le parti imposto dal sito* · *contratti e adempimenti tra datore e lavoratore: commercialisti, CAF, professionisti abilitati*.

## Coerenza UI (marketplace su tutto il sito)

- Componente **`MarketplaceNotice`** (`src/components/MarketplaceNotice.tsx`): testo unico su *marketplace di annunci / bacheca*, *non agenzia*, *niente intermediazione*, link a Termini · Chi siamo · FAQ. Varianti: `box`, `compact` (piè pagina), `inline`, `darkHero` (sfondi scuri).
- **`PremiumPageShell`**: di default aggiunge in calce `MarketplaceNotice` compatto; su **Termini**, **Privacy** e **Cookie Policy** usare `showMarketplaceFootnote={false}` (testo già esaustivo nel corpo).
- Presente anche su **Home** (fascia prima del footer), **Blog** (indice + ogni articolo dopo l’intro), **FAQ**, **Italia/regioni**, **SectorPage**, **404**.

## Blog e contenuti editoriali (policy)

Gli **articoli del blog** servono a:

- **Raccontare l’andamento del mercato del lavoro**, contesto economico e territoriale, buone pratiche divulgative, **notizie e approfondimenti generici** utili a imprese e lavoratori.

Non servono a:

- Descrivere **funzioni di intermediazione**, collocamento, mediazione, ricerca e selezione **per conto di** Lavoro48h, né a presentare il sito come chi **assume**, **colloca** o **sceglie** al posto delle imprese.

Cosa è ammesso, con linguaggio **cristallino**:

- **Sponsorizzare un modo di incontrarsi** tramite annunci e profili digitali **senza** che la piattaforma imponga vincoli, contratti di lavoro o obblighi tra utenti: l’incontro è **libero**; eventuali rapporti successivi sono **tra le parti**.
- Richiamare che Lavoro48h è uno **strumento potente e semplice** (intuitivo come l’uso di piattaforme diffuse), ma **privo di coinvolgimento in “convinzioni”, forzature o obblighi** rispetto all’assunzione o alle scelte professionali.
- Indicare esplicitamente che **contratti, clausole, adempimenti fiscali, contributivi e legali** restano **affidati ai professionisti** che le parti scelgono (commercialisti, CAF, consulenti del lavoro, avvocati, ecc.) e alla **trattativa diretta tra le parti**, che **redigeranno** i propri atti.

Formulazioni da evitare nel blog (se riferite a Lavoro48h come soggetto attivo):

- “Vi collochiamo”, “La nostra selezione”, “Intermediazione”, “Vi proponiamo candidati idonei” **come se** fosse compito del sito, “Garantiamo l’assunzione”, “Obbligo di risposta positiva”, ecc.

Formulazioni preferibili:

- “Sul mercato…”, “Le imprese che ricercano personale…”, “I candidati possono…”, “Una bacheca digitale consente di… **senza** che il titolare del sito partecipi al contratto di lavoro.”

Ogni pezzo editoriale deve poter essere letto da un utente e da un revisore legale senza ambiguità: **contenuto divulgativo / di contesto**, non **offerta di servizi di agenzia o di consulenza vincolante**.

---

## Verifica qualità Google (Search / contenuti utili)

Checklist di controllo per pagine e contenuti pubblicati (allineata a linee guida su **contenuti utili**, **spam**, **esperienza di pagina** e segnali di **affidabilità**):

| Area | Cosa verificare |
|------|-----------------|
| **Utilità** | La pagina risponde davvero all’intento (assumere / cercare lavoro / settore)? C’è un’informazione concreta o solo testo generico? |
| **E-E-A-T** | Chi è il titolare/servizio (Chi siamo, Contatti, privacy)? Per YMYL (lavoro) serve chiarezza e aggiornamenti. |
| **Esperienza** | Il contenuto è frutto di esperienza reale del servizio o è solo riempitivo? Evitare testi “solo per SEO”. |
| **Page Experience** | Core Web Vitals (LCP, INP, CLS), HTTPS, usabilità mobile, assenza di interstitial invasivi. |
| **Titoli e meta** | Titolo e descrizione coerenti col contenuto; niente clickbait fuorviante. |
| **Affidabilità** | Privacy, cookie, termini accessibili; recapiti verificabili; testimonianze solo se reali e autorizzate. |
| **Thin content** | Pagine settore con testo duplicato: differenziare ogni verticale con dettagli specifici. |
| **AI / automazione** | Se si usa contenuto generato, revisione umana e fact-check; non pubblicare pagine vuote o incoerenti. |

Riferimenti ufficiali: [Google Search Central](https://developers.google.com/search/docs), [Linee guida sulla qualità](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), documentazione su **spam** e **helpful content**.
