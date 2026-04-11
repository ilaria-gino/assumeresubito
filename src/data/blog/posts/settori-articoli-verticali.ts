import type { BlogArticle, BlogFaqItem, BlogSection } from "../types";

const disc =
  "Contenuto informativo sul settore. Non sostituisce consulenza del lavoro, sicurezza sul lavoro né verifiche su patenti, abilitazioni o credenziali professionali.";

function article(
  slug: string,
  title: string,
  dateIso: string,
  date: string,
  readTimeMin: number,
  excerpt: string,
  intro: string,
  sections: BlogSection[],
  faqs: BlogFaqItem[],
): BlogArticle {
  return { slug, title, date, dateIso, readTimeMin, excerpt, intro, sections, faqs, disclaimer: disc };
}

export const SETTORI_VERTICALI_ARTICLES: BlogArticle[] = [
  article(
    "immobiliare-annuncio-zona-primo-contatto",
    "Agenti immobiliari: annuncio, zona e primo contatto senza perdere tempo",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Come scrivere ricerche credibili nel settore immobiliare: zona, tipologia di incarico, strumenti e tempi di risposta, con focus su annunci chiari e colloqui mirati.",
    "Nel mercato immobiliare la credibilità dello studio o della rete immobiliare passa anche da come comunica le ricerche di personale: annunci vaghi attraggono candidature generiche, mentre richieste troppo restrittive possono escludere profili utili in fase di affiancamento. Questo contributo offre un quadro pratico per allineare annuncio, primo contatto e criteri di verifica iniziale, nel rispetto della privacy e senza promettere risultati non sostenibili (contenuto generico sul settore, non servizio di agenzia per il lavoro).",
    [
      {
        heading: "Cosa dichiarare subito: zona, ruolo e tipologia di attività",
        paragraphs: [
          "Indicate con chiarezza se la ricerca riguarda acquisizione, vendita, affitti brevi o gestione portafogli, e in quale area operate abitualmente. I candidati valutano spostamenti e target di clientela: omettere la zona genera domande ripetitive e allunga i tempi.",
          "Separate requisiti obbligatori da preferenze: patente, disponibilità a orari flessibili, esperienza documentabile in trattative analoghe.",
        ],
      },
      {
        heading: "Primo contatto: obiettivi e tono professionale",
        paragraphs: [
          "Il primo scambio dovrebbe chiarire aspettative su formazione, strumenti (CRM, portali), modalità di collaborazione e metriche di riferimento, senza entrare in dettagli riservati prima delle fasi previste dal vostro processo.",
          "Evitate promesse su guadagni o volumi non verificabili: riducono la qualità percepita e possono creare attriti in fase contrattuale.",
        ],
      },
      {
        heading: "Coerenza con piattaforme verticali e tempi di risposta",
        paragraphs: [
          "Se utilizzate servizi che organizzano verticali di settore e tempi orientati alle 48 ore ove applicabile, allineate l’annuncio a quanto potete realmente gestire in termini di feedback e colloqui.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Un annuncio preciso e un primo contatto ordinato filtrano meglio le candidature e proteggono la reputazione dello studio o della rete. Per domande trasversali su privacy e processi in azienda, consultate le FAQ del sito.",
        ],
      },
    ],
    [
      { question: "Conviene indicare la provvigione?", answer: "Dipende da policy interne e normativa applicabile; in ogni caso evitate cifre fuorvianti e privilegiate la chiarezza su struttura e tempi." },
      { question: "Come ridurre candidature fuori zona?", answer: "Geografia esplicita, raggio d’azione e modalità di presenza in sede o su territorio." },
      { question: "Cosa verificare al primo colloquio?", answer: "Esperienza pertinente, strumenti usati, motivazione e coerenza con il tipo di clientela servita." },
    ],
  ),
  article(
    "immobiliare-selezione-affidabilita-agenti",
    "Selezione nel settore immobiliare: affidabilità, errori comuni e verifiche iniziali",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Errori frequenti nella selezione di agenti e come impostare verifiche iniziali utili, tra reputazione, strumenti digitali e allineamento culturale.",
    "Assumere nel comparto immobiliare significa affidare al nuovo ingresso relazioni con clienti e controparti: oltre alle competenze dichiarate, conta la coerenza con processi interni e la capacità di rispettare tempi e regole. L’articolo riassume errori ricorrenti e suggerisce verifiche proporzionate, senza sostituire controlli legali o deontologici specifici.",
    [
      {
        heading: "Errori comuni",
        paragraphs: [
          "Scelta solo su curriculum senza prova di risultati o referenze verificabili; eccessiva fretta che salta step di allineamento su strumenti e compliance; annunci che non riflettono la reale organizzazione del lavoro in studio immobiliare.",
        ],
      },
      {
        heading: "Verifiche proporzionate",
        paragraphs: [
          "Griglie semplici su esperienza, portafoglio o fase di carriera, padronanza degli strumenti, gestione del cliente. Documentate le valutazioni nel rispetto della privacy.",
        ],
      },
      {
        heading: "Onboarding e prime settimane",
        paragraphs: [
          "Pianificate accessi a CRM, affiancamento e obiettivi progressivi: riduce turnover precoci e contestazioni su aspettative.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Un processo ordinato costa meno di un turnover continuo. Per approfondimenti su annunci, vedi l’articolo gemello sul vertical immobiliare e il blog generale sulla ricerca di personale.",
        ],
      },
    ],
    [
      { question: "Servono test psicoattitudinali?", answer: "Valutate necessità, costi e normativa; spesso una griglia comportamentale in colloquio ben condotto è sufficiente per ruoli standard." },
      { question: "Come gestire il periodo di prova?", answer: "Obiettivi chiari, feedback frequenti e documentazione nel rispetto del contratto e delle norme." },
      { question: "Cosa se il mercato è saturo di candidati?", answer: "Affinate i criteri e i canali: volume alto richiede screening più rapido e comunicazione trasparente sui tempi." },
    ],
  ),
  article(
    "ristorazione-annunci-turni-ruoli-chiari",
    "Ristorazione: annunci chiari su turni, ruoli e picchi di lavoro",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Sala, cucina, bar: come scrivere annunci credibili con turni, tipologia di servizio e urgenze, riducendo candidature impreparate.",
    "La ristorazione italiana convive con stagionalità, weekend e coperture last minute: un annuncio che nasconde gli orari o il tipo di servizio genera assenze e turnover. Di seguito, elementi minimi da dichiarare per attrarre profili realmente disponibili.",
    [
      {
        heading: "Ruolo e contesto operativo",
        paragraphs: [
          "Specificate sala, cucina, bancone, delivery, catering. Indicate fascia oraria tipica, chiusura settimanale e picchi previsti (prenotazioni, eventi).",
        ],
      },
      {
        heading: "Contratto e disponibilità",
        paragraphs: [
          "Part-time, full-time, chiamata: siate espliciti. La mancata chiarezza sui weekend è una delle prime cause di abbandono in prova.",
        ],
      },
      {
        heading: "Sicurezza alimentare e formazione",
        paragraphs: [
          "Se richiedete HACCP o aggiornamenti, indicatelo come requisito o come formazione offerta in ingresso.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Più trasparenza in annuncio significa meno colloqui inutili e staff più stabile. Collegate il vertical ristorazione alle FAQ su tempi di selezione.",
        ],
      },
    ],
    [
      { question: "Come gestire urgenze nel weekend?", answer: "Canali dedicati, bonus chiari se previsti e aspettative realistiche in annuncio." },
      { question: "Conviene assumere solo con esperienza?", answer: "Dipende dal ruolo: per ruoli junior dichiarate formazione e tutoraggio." },
      { question: "Cosa evitare in annuncio?", answer: "Promesse vaghe su orari ‘flessibili’ senza dettaglio; benefit non reali." },
    ],
  ),
  article(
    "ristorazione-assumere-sala-cucina-tempi",
    "Assumere per sala e cucina: tempi più stretti senza scendere in qualità",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Metodo snello per coprire turni: pre-screening, prove pratiche proporzionate e comunicazione ai candidati, nel rispetto delle regole.",
    "Quando serve personale in pochi giorni, il rischio è saltare verifiche minime. Si possono accorciare i tempi mantenendo standard: colloquio breve mirato, prova in servizio controllata e feedback immediato.",
    [
      {
        heading: "Pre-screening rapido ma coerente",
        paragraphs: [
          "Elenco di cinque domande su disponibilità, esperienza su volumi analoghi, gestione dello stress. Evitate checklist infinite.",
        ],
      },
      {
        heading: "Prove pratiche",
        paragraphs: [
          "Per cucina, assaggi o mise en place; per sala, simulazione ordine. Durata contenuta e valutazione su scala condivisa.",
        ],
      },
      {
        heading: "Comunicazione sui tempi",
        paragraphs: [
          "Comunicate quando deciderete e rispettate le tempistiche dichiarate: in mercati tesi la reputazione del locale conta.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Velocità e qualità non sono in contrasto se il processo è disegnato una volta e ripetuto. Utile anche l’articolo sugli annunci nel vertical ristorazione.",
        ],
      },
    ],
    [
      { question: "Si può fare tutto in un solo colloquio?", answer: "Per ruoli operativi spesso sì, con prova breve; per chef o responsabili servono più step." },
      { question: "Come ridurre no-show?", answer: "Conferma via canale tracciato, orario chiaro e sintesi dell’annuncio in reminder." },
      { question: "Cosa documentare?", answer: "Solo quanto necessario e lecito; verificate obblighi privacy e conservazione." },
    ],
  ),
  article(
    "logistica-magazzino-annuncio-patenti-disponibilita",
    "Logistica e magazzino: annunci efficaci su patenti, turni e disponibilità",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Patenti, muletto, automunito, turni notturni: come dichiararli in annuncio per una corrispondenza più precisa tra ricerca e profili nel vertical logistica.",
    "In logistica, la precisione su mezzi, abilitazioni e fascia oraria negli annunci riduce colloqui con candidati che non possono legalmente o logisticamente coprire il turno. Questo testo elenca elementi utili da inserire e come collegarli al processo di ricerca del personale in azienda.",
    [
      {
        heading: "Abilitazioni e mezzi",
        paragraphs: [
          "Patente B, C, CQC, carrello elevatore: indicate se obbligatori o preferenziali e se offrite rettifica o aggiornamento.",
        ],
      },
      {
        heading: "Fisicità del lavoro e ambienti",
        paragraphs: [
          "Temperature, sollevamenti, uso di DPI: descrizioni oneste riducono abbandoni in prova e infortuni da mancata idoneità percepita.",
        ],
      },
      {
        heading: "Pianificazione turni",
        paragraphs: [
          "Notturno, weekend, straordinari: criteri e limiti normativi vanno rispettati; in annuncio indicate almeno il modello tipico.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Annunci dettagliati accelerano il time-to-hire in magazzino e consegne. Per errori di selezione, vedi l’articolo complementare sul vertical logistica.",
        ],
      },
    ],
    [
      { question: "Conviene richiedere automunito?", answer: "Solo se pertinente al ruolo e senza criteri discriminatori non giustificati." },
      { question: "Come verificare patenti?", answer: "Secondo procedure interne e normativa; non conservate copie non necessarie." },
      { question: "Cosa se i turni cambiano spesso?", answer: "Comunicatelo: il candidato deve poter valutare sostenibilità." },
    ],
  ),
  article(
    "logistica-selezione-operatori-errori-comuni",
    "Selezione in logistica: errori comuni e come verificare competenze reali",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Dalla gestione dei picchi alla verifica dell’esperienza: errori che aumentano turnover e costi nel magazzino e nella distribuzione.",
    "Assumere operatori logistici senza allineamento su ritmi, sicurezza e strumenti (WMS, scanner) produce errori operativi e tensioni di squadra. L’articolo sintetizza errori frequenti e contromisure pratiche.",
    [
      {
        heading: "Sottovalutare sicurezza e formazione",
        paragraphs: [
          "Ingresso accelerato senza briefing su DPI e percorsi pedonali aumenta rischi. Pianificate micro-formazione il primo giorno.",
        ],
      },
      {
        heading: "Misurare solo velocità",
        paragraphs: [
          "La produttività senza accuratezza genera resi e contestazioni. Valutate entrambe con prove brevi.",
        ],
      },
      {
        heading: "Onboarding su strumenti",
        paragraphs: [
          "Accessi a terminali, codici, procedure di imballo: checklist il primo settimana riducono errori ripetuti.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Un operatore allineato costa meno di un errore su spedizione. Incrociate con annunci chiari sul vertical logistica.",
        ],
      },
    ],
    [
      { question: "Serve test fisico?", answer: "Solo se strettamente connesso alle mansioni e nel rispetto della normativa." },
      { question: "Come trattenere i talenti?", answer: "Chiarezza su carriera, orari e retribuzione, feedback regolari." },
      { question: "Cosa fare in picco stagionale?", answer: "Contratti e piani chiari, comunicazione anticipata delle esigenze." },
    ],
  ),
  article(
    "edilizia-annuncio-cantiere-competenze-verificabili",
    "Edilizia: annunci di cantiere con competenze verificabili e zona chiara",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Muratura, cartongesso, ristrutturazioni: come descrivere il lavoro reale e la prossimità al cantiere per ridurre CV generici.",
    "Il comparto edile soffre di annunci troppo generici che attraggono manovalanza senza esperienza sul tipo di commessa. Specificare tipologia di intervento, strumenti, altezze e durata stimata del lavoro migliora la coerenza tra zona, commessa e profili che rispondono all’annuncio.",
    [
      {
        heading: "Tipologia di intervento",
        paragraphs: [
          "Nuova costruzione, ristrutturazione, finiture: ognuna richiede abilità diverse. Indicate materiali ricorrenti e presenza di subappalti.",
        ],
      },
      {
        heading: "Zona e spostamenti",
        paragraphs: [
          "La vicinanza al cantiere incide su puntualità e costi; dichiarate sede di partenza o raggiungibilità con mezzi pubblici se rilevante.",
        ],
      },
      {
        heading: "Sicurezza e DPI",
        paragraphs: [
          "CSE, carte, corsi base: ciò che è obbligatorio va rispettato; in annuncio potete indicare formazione fornita in cantiere.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Più precisione tecnica equivale a meno turnover sul cantiere. Per bande retributive orientative, usate lo strumento dedicato sul sito.",
        ],
      },
    ],
    [
      { question: "Come evitare profili fuori zona?", answer: "Indicare comuni o raggi entro cui operate abitualmente." },
      { question: "Cosa chiedere in fase iniziale?", answer: "Esperienza su lavori analoghi, referenze verificabili, disponibilità a straordinari se previsti." },
      { question: "Annuncio breve o lungo?", answer: "Completo ma leggibile: mansioni e rischi principali in evidenza." },
    ],
  ),
  article(
    "edilizia-assumere-operai-tempi-sicurezza",
    "Edilizia: assumere operai con tempi serrati e senza trascurare la sicurezza",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Urgenze di commessa, verifiche minime sulle competenze e cultura della sicurezza: equilibrio pratico per imprese e cooperative.",
    "Le urgenze di cantiere spingono a scorciatoie pericolose. È possibile accelerare mantenendo verifiche su formazione base, uso DPI e affiancamento nei primi giorni.",
    [
      {
        heading: "Urgenza e responsabilità",
        paragraphs: [
          "La rapidità non esime dalla compliance: documentate briefing sicurezza e presenza di figure abilitate sul cantiere.",
        ],
      },
      {
        heading: "Prove pratiche brevi",
        paragraphs: [
          "Mostra di tecnica su campione controllato, dove applicabile, riduce errori costosi su finiture visibili.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Pagamenti puntuali e chiarezza su durata commessa aumentano permanenza più di bonus spot non strutturati.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Sicurezza e velocità convivono con processi ripetibili. Leggete anche l’articolo sugli annunci nel vertical edilizia.",
        ],
      },
    ],
    [
      { question: "Cosa verificare il primo giorno?", answer: "DPI, accessi, procedure di emergenza, compiti assegnati e referente di affiancamento." },
      { question: "Come ridurre infortuni con nuovi ingressi?", answer: "Micro-briefing quotidiani le prime settimane e segnalazione canali sicuri." },
      { question: "Subappalto e selezione?", answer: "Allineate criteri con il capocommessa e la documentazione contrattuale." },
    ],
  ),
  article(
    "termoidraulica-annuncio-specializzazioni-impianto",
    "Termoidraulica: annunci mirati su tipo di impianto e specializzazione",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Climatizzazione, sanitario, centrale termica: perché distinguere le specializzazioni riduce colloqui inutili con idraulici non allineati.",
    "Sotto l’etichetta ‘idraulico’ convivono profili molto diversi. Annunci che specificano impianti, marche ricorrenti e tipologia di cliente (civile, condominiale, industriale leggero) migliorano la pertinenza delle candidature rispetto alla commessa.",
    [
      {
        heading: "Specializzazioni e strumenti",
        paragraphs: [
          "Indicate se prevalgono installazioni, manutenzione o riparazioni d’urgenza; se servono strumenti propri o aziendali.",
        ],
      },
      {
        heading: "Raggio operativo",
        paragraphs: [
          "Interventi in giornata richiedono pianificazione: dichiarate area e tolleranza agli spostamenti.",
        ],
      },
      {
        heading: "Certificazioni e aggiornamenti",
        paragraphs: [
          "F-gas o altre abilitazioni: obbligatorietà o preferenza va esplicitata per evitare colloqui improduttivi.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Chiarezza tecnica nell’annuncio risparmia tempo a installatori e clienti. Strumento utile: pagina retribuzioni orientative per ruoli tecnici.",
        ],
      },
    ],
    [
      { question: "Come gestire urgenze notturne?", answer: "Turni e compensi definiti internamente, comunicati in fase di assunzione." },
      { question: "Cosa se il candidato è polivalente?", answer: "Valorizzatelo ma verificate priorità reali del ruolo per evitare sovraccarico." },
      { question: "Garanzie su tempi di intervento?", answer: "Allineate promesse commerciali con capacità operative effettive." },
    ],
  ),
  article(
    "termoidraulica-idraulico-urgenze-commessa",
    "Idraulico e termoidraulico: urgenze di commessa e selezione rapida",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Quando la commessa stringe: come selezionare in tempi brevi mantenendo verifiche su competenza e sicurezza.",
    "Le urgenze su impianti richiedono risposta veloce ma assumere figure non idonee genera callback e danni reputazionali. Un mini-processo con verifica documentale essenziale e domande tecniche mirate riduce il rischio.",
    [
      {
        heading: "Priorità in 24–48 ore",
        paragraphs: [
          "Checklist su esperienza su guasti analoghi, disponibilità, strumenti. Evitate colloqui generici senza referente tecnico.",
        ],
      },
      {
        heading: "Prova sul campo controllata",
        paragraphs: [
          "Accompagnamento su intervento non critico o verifica supervisionata, nel rispetto delle norme.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Rapidità con un referente tecnico in selezione paga più della quantità di colloqui. Completate con l’articolo sulle specializzazioni in annuncio.",
        ],
      },
    ],
    [
      { question: "Si può usare solo video colloquio?", answer: "Utile per screening iniziale; per ruoli tecnici spesso serve un passaggio in presenza o prova supervisionata." },
      { question: "Come trattenere tecnici scarsi sul mercato?", answer: "Percorso di crescita, strumenti moderni e chiarezza economica." },
      { question: "Errori da evitare?", answer: "Promettere interventi fuori competenza o senza pezzi disponibili." },
    ],
  ),
  article(
    "impianti-elettrici-annuncio-civile-industriale-domotica",
    "Impianti elettrici: annunci distinti per civile, quadri, domotica e fotovoltaico",
    "2026-04-10",
    "10 aprile 2026",
    10,
    "Perché ‘elettricista’ non basta: come chiarire il fabbisogno e attrarre cablatori o manutentori pertinenti.",
    "La domanda di elettricisti qualificati è alta; l’offerta è frammentata. Annunci che distinguono installazione civile, industriale leggera, domotica o manutenzione migliorano conversione e riducono errori in cantiere.",
    [
      {
        heading: "Ambito e complessità",
        paragraphs: [
          "Specificate tensioni, tipologie di commessa, lettura schemi, lavoro in squadra con altre maestranze.",
        ],
      },
      {
        heading: "Aggiornamento normativo",
        paragraphs: [
          "Indicate se richiedete conoscenza aggiornata su CEI o se fornite formazione aziendale.",
        ],
      },
      {
        heading: "Sicurezza",
        paragraphs: [
          "Lavori in tensione o solo de-energizzati: criteri chiari proteggono operatori e clienti.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Più specificità tecnica, meno mismatch. Per orientamento economico generico, vedi retribuzioni orientative sul sito.",
        ],
      },
    ],
    [
      { question: "Fotovoltaico: cosa chiedere?", answer: "Esperienza su stringhe, inverter, sicurezza in copertura e DPI specifici." },
      { question: "Domotica?", answer: "Protocolli e brand gestiti, integrazione con impianti esistenti." },
      { question: "Come competere sul mercato?", answer: "Chiarezza su orari, mezzi, crescita e strumenti di lavoro." },
    ],
  ),
  article(
    "impianti-elettrici-elettricista-mercato-teso",
    "Elettricista: mercato teso, retention e selezione senza promesse impossibili",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Con carenza di manodopera qualificata, come presentare l’azienda e il percorso senza overpromise e con focus sulla sostenibilità degli incarichi.",
    "Quando i tecnici sono ricercati, la selezione diventa anche vendita dell’employer brand interno: orari rispettabili, mezzi, formazione e chiarezza su commesse. L’articolo suggerisce leve realistiche.",
    [
      {
        heading: "Cosa attrae oltre al compenso",
        paragraphs: [
          "Pianificazione chiara, riduzione chiamate notturne non retribuite, aggiornamento professionale continuo.",
        ],
      },
      {
        heading: "Evitare turnover da overload",
        paragraphs: [
          "Allineate carico commesse con capacità reale del team; monitorate straordinari e recuperi.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Le promesse non mantenute espellono i migliori tecnici. Incrociate con annunci tecnici specifici sul vertical elettrico.",
        ],
      },
    ],
    [
      { question: "Come usare benefit non monetari?", answer: "Strumenti, veicoli, formazione certificata: siano reali e verificabili." },
      { question: "Apprendistato?", answer: "Percorsi regolamentati possono allargare il bacino se gestiti con tutoraggio." },
      { question: "Errori in selezione?", answer: "Sottovalutare la sicurezza o assumere senza verifica su tipologia di impianti gestiti." },
    ],
  ),
  article(
    "uffici-amministrazione-annuncio-chiaro",
    "Uffici e amministrazione: annunci chiari per impiegati e back office",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Segreteria, contabilità, amministrazione: come evitare CV lunghi ma poco pertinenti con requisiti misurabili.",
    "Negli uffici il rischio è valutare solo titoli senza verificare software, volumi documentali e precisione. Annunci con stack strumentale, tipologia di flussi e livello di autonomia migliorano lo screening.",
    [
      {
        heading: "Software e processi",
        paragraphs: [
          "ERP, gestionali, Excel avanzato, fatturazione elettronica: indicate livello richiesto e formazione offerta.",
        ],
      },
      {
        heading: "Modalità di lavoro",
        paragraphs: [
          "Presenza, ibrido, orari flessibili: siano coerenti con policy reali.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Requisiti misurabili riducono colloqui generici. Per colloqui strutturati, vedi articoli sul blog e le FAQ.",
        ],
      },
    ],
    [
      { question: "Test Excel in selezione?", answer: "Proporzionati al ruolo; evitate esercizi irrilevanti o troppo lunghi." },
      { question: "Lingue?", answer: "Specificate contesto d’uso (email, telefono, contratti)." },
      { question: "Privacy documenti?", answer: "Procedure su accessi e conservazione secondo policy aziendale e GDPR." },
    ],
  ),
  article(
    "uffici-selezione-back-office-colloquio",
    "Selezione per back office: colloquio efficace e valutazione della precisione",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Domande mirate, piccole prove documentali e valutazione dell’affidabilità senza invadere la sfera privata.",
    "Il back office regge errori amministrativi costosi. Il colloquio dovrebbe verificare attenzione al dettaglio, gestione priorità e comunicazione con interni ed esterni.",
    [
      {
        heading: "Domande comportamentali utili",
        paragraphs: [
          "Esempi di gestione scadenze, errori recuperati, collaborazione con altre funzioni.",
        ],
      },
      {
        heading: "Prove brevi",
        paragraphs: [
          "Correzione bozza, priorità su elenco attività, redazione email professionale: durata contenuta.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Standardizzate una griglia leggera per confrontare candidati in modo equo. Richiamo all’articolo sugli annunci amministrativi.",
        ],
      },
    ],
    [
      { question: "Quanti step di colloquio?", answer: "Spesso due: HR/titolare e responsabile di funzione." },
      { question: "Smart working?", answer: "Definite KPI e presenza minima se ibrido." },
      { question: "Diversity in ufficio?", answer: "Processi trasparenti e criteri legati alle mansioni." },
    ],
  ),
  article(
    "commercio-negozio-annuncio-turni-weekend",
    "Commercio al dettaglio: annunci con turni, weekend e reparto chiaro",
    "2026-04-10",
    "10 aprile 2026",
    9,
    "Cassa, vendita, magazzino di negozio: come comunicare orari e picchi per assumere commessi allineati.",
    "Il retail italiano dipende da weekend e stagionalità. Annunci che nascondono la presenza obbligatoria il sabato generano turnover. Indicare reparto, aperture straordinarie e formazione iniziale migliora la qualità delle candidature.",
    [
      {
        heading: "Turni e flessibilità reale",
        paragraphs: [
          "Part-time spezzato, chiusure serali, inventari: dichiarate eventi ricorrenti oltre alla routine.",
        ],
      },
      {
        heading: "Esperienza cliente",
        paragraphs: [
          "Se cercate orientamento al cliente, usate esempi concreti in colloquio invece di sole auto-dichiarazioni.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "Trasparenza sugli orari è leva di retention. Articolo gemello su assunzione rapida nel vertical commercio.",
        ],
      },
    ],
    [
      { question: "Assunzioni stagionali?", answer: "Tempi e obiettivi chiari fin dall’annuncio." },
      { question: "Giovani prima esperienza?", answer: "Programmi di affiancamento e obiettivi progressivi." },
      { question: "Furti e sicurezza?", answer: "Formazione su procedure senza mettere il commesso a rischio." },
    ],
  ),
  article(
    "commercio-vendita-dettaglio-assunzione-rapida",
    "Vendita al dettaglio: assumere in tempi brevi con standard minimi di servizio",
    "2026-04-10",
    "10 aprile 2026",
    8,
    "Checklist per coprire il punto vendita rapidamente: screening, prova in negozio supervisionata e onboarding express.",
    "Picchi di affluenza o assenze improvvise spingono a coprire subito il punto vendita. Un processo corto con prova in negozio e kit di benvenuto riduce errori di immagine.",
    [
      {
        heading: "Screening in 30 minuti",
        paragraphs: [
          "Disponibilità, esperienza cassa o vendita, gestione code. Allineamento su dress code e regole del brand.",
        ],
      },
      {
        heading: "Prova in negozio",
        paragraphs: [
          "Shadowing o turno breve supervisionato, con focus su accoglienza e procedure POS.",
        ],
      },
      {
        heading: "Conclusioni",
        paragraphs: [
          "La velocità con supervisione batte l’improvvisazione. Completate con l’articolo sugli annunci retail.",
        ],
      },
    ],
    [
      { question: "Formazione minima obbligatoria?", answer: "POS, politiche resi, sicurezza: checklist primo giorno." },
      { question: "KPI utili?", answer: "Soddisfazione cliente, errori cassa, assenteismo — misurate con equità." },
      { question: "Multistore?", answer: "Chiarezza su trasferte e rimborsi." },
    ],
  ),
];

export const SETTORI_VERTICALI_SLUGS = SETTORI_VERTICALI_ARTICLES.map((a) => a.slug);
