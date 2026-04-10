/** FAQ divulgative: non sostituiscono consulenza legale o del lavoro. */

export type FaqItem = { id: string; question: string; answer: string };

export const FAQ_EMPRESA: FaqItem[] = [
  {
    id: "e1",
    question: "Come pubblicare una ricerca in modo conforme alla privacy?",
    answer:
      "Raccogliere solo dati necessari, informativa chiara, conservazione limitata, sicurezza dei canali e rispetto dei diritti degli interessati.",
  },
  {
    id: "e2",
    question: "Posso chiedere il curriculum via WhatsApp?",
    answer:
      "Valutate policy aziendali e tracciabilità; spesso è preferibile un canale controllato e documentato.",
  },
  {
    id: "e3",
    question: "Come definire i requisiti senza discriminare?",
    answer:
      "Collegare ogni requisito a mansioni effettive; evitare criteri non pertinenti; documentare la scelta.",
  },
  {
    id: "e4",
    question: "Cosa valutare in un colloquio oltre alle competenze tecniche?",
    answer:
      "Affidabilità, collaborazione, adattamento, chiarezza comunicativa, coerenza con valori dichiarati.",
  },
  {
    id: "e5",
    question: "Quanto tempo può durare una selezione?",
    answer:
      "Dipende dal ruolo e dal mercato; comunicate tempi realistici per ridurre abbandoni e recensioni negative.",
  },
  {
    id: "e6",
    question: "Serve la nomina del responsabile del trattamento?",
    answer:
      "Dipende da ruoli e trattamenti; verificate il GDPR e la documentazione privacy aziendale.",
  },
  {
    id: "e7",
    question: "Come gestire le referenze dei candidati?",
    answer:
      "Richiedete consenso, verificate fonti e limitatevi a informazioni pertinenti al ruolo.",
  },
  {
    id: "e8",
    question: "Posso usare test psicoattitudinali?",
    answer:
      "Solo se strumenti validati e pertinenti; informare il candidato e rispettare norme e CCNL.",
  },
  {
    id: "e9",
    question: "Come ridurre il turnover post-assunzione?",
    answer:
      "Onboarding strutturato, obiettivi chiari, feedback precoci e aspettative allineate al contratto.",
  },
  {
    id: "e10",
    question: "Cosa includere in un contratto di prova?",
    answer:
      "Durata conforme al quadro normativo, mansioni, sede, orario, retribuzione e criteri di valutazione.",
  },
  {
    id: "e11",
    question: "Come trattare dati particolari ricevuti dai candidati?",
    answer:
      "Solo se strettamente necessari, con base giuridica e misure di sicurezza rafforzate.",
  },
  {
    id: "e12",
    question: "Posso cercare candidati sui social?",
    answer:
      "Sì, nel rispetto della normativa, evitando valutazioni su caratteristiche non pertinenti.",
  },
  {
    id: "e13",
    question: "Come calcolare il costo di un errore di assunzione?",
    answer:
      "Considerate tempo dei selezionatori, formazione, produttività persa, eventuale risoluzione e re-hiring.",
  },
  {
    id: "e14",
    question: "Serve un registro delle offerte pubblicate?",
    answer:
      "È buona prassi per coerenza interna e, ove applicabile, adempimenti di trasparenza.",
  },
  {
    id: "e15",
    question: "Come gestire le candidature spontanee?",
    answer:
      "Risposta standard, conservazione temporanea, informativa privacy e criteri di eventuale ricontatto.",
  },
  {
    id: "e16",
    question: "Cosa valutare in un colloquio di gruppo?",
    answer:
      "Collaborazione, ascolto, rispetto turni, contributo; evitate dinamiche imbarazzanti o non pertinenti.",
  },
  {
    id: "e17",
    question: "Come definire una policy di smart working in selezione?",
    answer:
      "Chiarezza su giorni in sede, strumenti, sicurezza; coerenza con policy interne e contratti.",
  },
  {
    id: "e18",
    question: "Posso chiedere la disponibilità a trasferte in annuncio?",
    answer:
      "Sì se è requisito essenziale; indicate percentuale e aree tipiche.",
  },
  {
    id: "e19",
    question: "Come trattare le candidature dei dipendenti interni?",
    answer:
      "Procedure eque, riservatezza, confronto con il responsabile e criteri non discriminatori.",
  },
  {
    id: "e20",
    question: "Cosa sono gli indicatori di qualità della selezione?",
    answer:
      "Time-to-hire, tasso di offerte accettate, retention a 6/12 mesi, soddisfazione dei candidati.",
  },
  {
    id: "e21",
    question: "Come integrare la diversità in PMI?",
    answer:
      "Annunci inclusivi, pannelli di valutazione misti, formazione anti-bias.",
  },
  {
    id: "e22",
    question: "Serve la verifica documentale prima dell’assunzione?",
    answer:
      "Per molti ruoli sì (titoli, certificazioni); seguite norme e consigli del consulente del lavoro.",
  },
  {
    id: "e23",
    question: "Come gestire le aspettative retributive?",
    answer:
      "Trasparenza su bande o criteri, evitando promesse non confermate in contratto.",
  },
  {
    id: "e24",
    question: "Come ridurre il ghosting dei candidati?",
    answer:
      "Comunicazione veloce, processi chiari, rispetto e feedback anche in caso di esito negativo.",
  },
  {
    id: "e25",
    question: "Cosa documentare a fine selezione?",
    answer:
      "Motivazioni sintetiche delle scelte, nel rispetto della privacy e delle policy interne.",
  },
  {
    id: "e26",
    question: "Come usare un servizio di matching verticale?",
    answer:
      "Definire settore, profilo, tempi di risposta e coerenza con quanto pubblicato su prezzi e termini.",
  },
  {
    id: "e27",
    question: "Sul piano Full (top) cosa significa che il candidato può contattare la mia impresa?",
    answer:
      "È una funzione aggiuntiva rispetto a Starter e Basic: solo con il piano Full (top), se abilitata nel contratto, i candidati possono manifestare interesse o contattarvi secondo le modalità del servizio. Va comunicata chiaramente al vostro team come vantaggio del piano top.",
  },
  {
    id: "e28",
    question: "Ho sbloccato un profilo e il candidato non risponde o non è idoneo: lo sblocco si recupera?",
    answer:
      "Di regola lo sblocco è consumato quando avete accesso ai dati completi, perché remunera l’uso dello strumento e non l’esito del colloquio o l’assunzione. Eventuali eccezioni commerciali vanno definite nel contratto; non sono automatiche.",
  },
  {
    id: "e29",
    question: "Categorie protette, NASpI o sgravi fiscali in assunzione: cosa c’entra la piattaforma?",
    answer:
      "Lavoro48h è una bacheca digitale, non svolge consulenza fiscale o del lavoro. Agevolazioni e requisiti dipendono da norme vigenti e dalla vostra situazione: rivolgetevi a professionisti abilitati e usate fonti istituzionali. Potete trovare orientamento generico in FAQ e blog, senza valore vincolante.",
  },
];

export const FAQ_LAVORATORE: FaqItem[] = [
  {
    id: "l1",
    question: "Come preparare un curriculum efficace nel 2026?",
    answer:
      "Struttura chiara, risultati quantificabili, parole chiave del settore, aggiornamento date e veridicità.",
  },
  {
    id: "l2",
    question: "Cosa valutare in un annuncio prima di candidarsi?",
    answer:
      "Tipo di contratto, sede, orario, retribuzione o banda, modalità di lavoro, requisiti e tempi di risposta.",
  },
  {
    id: "l3",
    question: "Come comportarsi in videocolloquio?",
    answer:
      "Prova tecnica anticipata, ambiente silenzioso, abbigliamento professionale, sguardo verso la fotocamera.",
  },
  {
    id: "l4",
    question: "Posso chiedere il motivo di un rifiuto?",
    answer:
      "Potete chiedere; non sempre c’è obbligo di dettaglio. Mantenete tono professionale.",
  },
  {
    id: "l5",
    question: "Come negoziare la RAL senza esagerare?",
    answer:
      "Portate dati di mercato, mostrate impatto e flessibilità su benefit; ascoltate il quadro aziendale.",
  },
  {
    id: "l6",
    question: "Cosa sono gli ammortizzatori sociali in caso di crisi?",
    answer:
      "Strumenti variabili (cig, ecc.) secondo norme vigenti; informatevi con fonti istituzionali.",
  },
  {
    id: "l7",
    question: "Come verificare se un’offerta è seria?",
    answer:
      "Sito web, partita IVA, recapiti, coerenza con colloquio e assenza di richieste di pagamento per accedere.",
  },
  {
    id: "l8",
    question: "Posso rifiutare un’offerta dopo aver accettato verbalmente?",
    answer:
      "Possono esserci implicazioni reputazionali; valutate caso per caso e comunicate tempestivamente.",
  },
  {
    id: "l9",
    question: "Come gestire un buco nel CV?",
    answer:
      "Spiegazione breve e onesta, focus su aggiornamento competenze e disponibilità.",
  },
  {
    id: "l10",
    question: "Cosa sono gli obblighi di comunicazione del datore?",
    answer:
      "Dipende da contratto e norme; informativa su mansioni, retribuzione e sicurezza sono centrali.",
  },
  {
    id: "l11",
    question: "Come funziona il periodo di prova per il lavoratore?",
    answer:
      "È una fase valutativa con durata definita; chiedete cosa viene osservato e come ricevere feedback.",
  },
  {
    id: "l12",
    question: "Posso lavorare in smart working con figli piccoli?",
    answer:
      "Dipende da accordi e organizzazione; richiedete chiarezza su orari e disponibilità.",
  },
  {
    id: "l13",
    question: "Come aggiornare le competenze mentre cerco lavoro?",
    answer:
      "Corsi brevi certificati, progetti personali, volontariato settoriale, community professionali.",
  },
  {
    id: "l14",
    question: "Cosa valutare in un contratto prima di firmare?",
    answer:
      "Mansioni, sede, orario, retribuzione, livello, durata, prova, ferie, permessi, clausole particolari.",
  },
  {
    id: "l15",
    question: "Come reagire a domande illegali in colloquio?",
    answer:
      "Declinate con cortesia, riportate al ruolo; se persistono, valutate se l’azienda è adatta a voi.",
  },
  {
    id: "l16",
    question: "Cosa è il diritto alla disconnessione?",
    answer:
      "Quadro di tutele sulla connessione fuori orario; dettagli in norme e contratti applicabili.",
  },
  {
    id: "l17",
    question: "Come funzionano ferie e permessi nel primo anno?",
    answer:
      "Dipende da CCNL e maturazione; chiedete policy aziendale e pianificazione.",
  },
  {
    id: "l18",
    question: "Posso usare lo stesso CV per tutti i settori?",
    answer:
      "Meglio adattare titolo, competenze evidenziate e parole chiave al settore e al ruolo.",
  },
  {
    id: "l19",
    question: "Come trattare la prova tecnica richiesta?",
    answer:
      "Chiarite tempi, criteri di valutazione e uso dei risultati; attenzione a materiali riservati.",
  },
  {
    id: "l20",
    question: "Cosa fare se non ricevo risposta dopo il colloquio?",
    answer:
      "Un sollecito educato dopo i tempi dichiarati; poi valutate altre opportunità.",
  },
  {
    id: "l21",
    question: "Come dichiarare le aspettative economiche?",
    answer:
      "Fornite una banda o riferimento di mercato, restando aperti a benefit e crescita.",
  },
  {
    id: "l22",
    question: "Serve la lettera di presentazione?",
    answer:
      "Non sempre; quando richiesta, sia personalizzata e breve, collegata a esigenze dell’azienda.",
  },
  {
    id: "l23",
    question: "Come gestire più offerte contemporaneamente?",
    answer:
      "Trasparenza su tempi decisionali, senza firmare in fretta; confrontate condizioni complete.",
  },
  {
    id: "l24",
    question: "Cosa valutare in un benefit package?",
    answer:
      "Salute, welfare, formazione, flessibilità, strumenti, buoni pasto, equilibrio con netto.",
  },
  {
    id: "l25",
    question: "Come proteggere i dati personali in candidatura?",
    answer:
      "Inviate solo documenti necessari, usate canali sicuri, leggete informative privacy.",
  },
  {
    id: "l26",
    question: "Come usare un servizio di matching verticale come candidato?",
    answer:
      "Profilo veritiero, disponibilità, zona e competenze aggiornate; risposte rapide alle richieste.",
  },
  {
    id: "l27",
    question: "Posso contattare io un’azienda dalla piattaforma?",
    answer:
      "Di norma l’iniziativa è dell’impresa dopo lo sblocco del profilo. Solo se l’azienda ha il piano Full (top) e la funzione è attiva (come da contratto tra voi e il servizio), può essere possibile manifestare interesse o contattarla. Controllate la pagina Prezzi e le comunicazioni ufficiali.",
  },
  {
    id: "l28",
    question: "Perché mi chiedono competenze specifiche (muratura, cartongesso, termoidraulica…)?",
    answer:
      "Nei mestieri operativi il titolo generico non basta: così le imprese filtrano meglio e voi ricevete contatti più pertinenti. Compilate con onestà.",
  },
  {
    id: "l29",
    question: "Dove vedo una fascia di stipendi di mercato per la mia zona?",
    answer:
      "Nella pagina Retribuzioni orientative trovate bande indicative (non CCNL) con esempi su più aree italiane. Usatele solo come confronto generico; la retribuzione si definisce in offerta e contratto.",
  },
];
