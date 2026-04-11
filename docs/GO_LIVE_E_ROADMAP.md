# Lavoro48h — Istruzioni go-live e roadmap

Documento di riferimento per operatore e sviluppatore. Aggiornare man mano che si completano le attività.

## Password staging (accesso temporaneo al sito)

**Valore concordato:** `ilariagino` (solo per uso interno finché il prodotto non è pronto.)

**Come attivare il blocco schermo nel front-end**

1. Nel file **`.env`** (non versionato), aggiungi:
   ```bash
   VITE_STAGING_PASSWORD=ilariagino
   ```
2. Riavvia `npm run dev` (o rifai build se usi preview).

**Come disattivare il blocco quando il sito è pronto**

- Rimuovi la riga `VITE_STAGING_PASSWORD` dal `.env`, oppure lasciala **vuota**:
  ```bash
  VITE_STAGING_PASSWORD=
  ```
- Ricostruisci e ridistribuisci. Senza variabile valorizzata, la schermata di accesso **non compare**.

### Avvertenza importante (sicurezza)

Le variabili `VITE_*` finiscono nel **bundle JavaScript** visibile in rete se fai build con quella password impostata. Questo blocco serve a **scoraggiare visitatori casuali** e a lavorare in team, **non** a proteggere dati sensibili da chi analizza il sito.

Per un sito delicato in **produzione pubblica** conviene almeno una di:

- protezione lato **hosting** (es. password su deploy preview, Vercel/Netlify protection, Basic Auth sul server);
- non pubblicare l’URL finché non sei pronto;
- autenticazione reale + dati solo dietro sessione server-side.

---

## Cosa manca da fare (roadmap tecnica)

Ordine indicativo; adattare in base alle priorità legali/commerciali.

1. **Pagamenti** — Integrazione provider (es. Stripe), webhook che aggiornano stato abbonamento / piano «Cerca aziende» sul database.
2. **Autenticazione** — Supabase Auth (o equivalente): account impresa e candidato, sessione non falsificabile dal solo `localStorage`.
3. **Piani e sblocchi lato server** — Tabelle o campi per Starter/Basic/Full, crediti di sblocco, consumo tracciato; le RPC o le policy devono rispettare questi limiti.
4. **Collegamento lead → profilo utente** — Oggi i form scrivono `company_leads` / `candidate_leads`; in produzione serve legame con `user_id` e permessi coerenti.
5. **RLS e permessi** — Rivedere chi può leggere/scrivere cosa; le RPC attuali sono `SECURITY DEFINER` e vanno ristrette o affiancate a ruoli quando c’è auth.
6. **Privacy e conservazione** — Retention, export/cancellazione richieste dall’interessato, informative aggiornate al flusso reale.
7. **Rate limiting e abuso** — Limiti sulle RPC pubbliche, monitoraggio.
8. **Rimozione staging** — Variabile `VITE_STAGING_PASSWORD` disattivata; eventuale protezione hosting come sopra.

---

## Riferimenti nel codice

- Gate staging: `src/components/StagingGate.tsx` (usato in `Layout`).
- Ricerca anonima DB: RPC `list_anonymous_candidates`, `list_anonymous_companies` (migration `20260412110000_public_search_rpc.sql`).
- Pagina ricerca UI: `src/pages/Candidati.tsx`.
