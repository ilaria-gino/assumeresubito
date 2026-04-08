# Architettura privacy, ruoli e documenti (bozza tecnica + nota legale)

## Ruoli

| Ruolo | Cosa vede / cosa mostra |
| ----- | ------------------------ |
| **Candidato** (operaio, tecnico, segretaria, ecc.) | Profilo con **iniziali + avatar** verso le aziende. Vede **offerte** con **mansioni** (es. segretaria, commerciale, muratore) e **area geografica** dell’azienda (es. città), non dati sensibili non necessari. |
| **Azienda / imprenditore** | Vede candidati con **iniziali + avatar** e **competenze**; non il nome completo finché non è previsto il passaggio da contratto/regole prodotto. |
| **Admin** | Gestione legale, supporto, audit log (da implementare). |

## Modelli economici

- **Pay per hire:** pagamento legato all’assunzione (condizioni in contratto).
- **Abbonamento:** servizi premium (evidenza, filtri, ecc.).
- **Candidati:** sempre **gratuiti**.

## Documenti legali (obbligatorio: avvocato / consulente)

- **Contratto quadro azienda** (pay-per-hire e/o abbonamento): clausole, responsabilità, fee, recesso, privacy, trattamento dati.
- **Contratto o accettazione digitale** con **PEC** o **firma elettronica qualificata**: va definito con il professionista; non usare bozze “copia-incolla” senza revisione.
- **Informativa privacy e modulo consensi** per il **lavoratore** (art. 13 GDPR, base giuridica, destinatari, trasferimenti, diritti, ecc.) e consenso per comunicare i dati alle aziende interessate.
- **Registro trattamenti** e DPIA se applicabile.

**Nota:** non sono un avvocato. I PDF ufficiali devono essere predisposti da **professionista abilitato** nel vostro ordinamento.

## Invio automatico in iscrizione

Per allegare **PDF** e inviare **PEC** in automatico serve un **backend** (es. Supabase Edge Functions + servizio email/PEC, o server dedicato). Il front-end attuale **non** invia posta: va progettato:

1. Evento `iscrizione_completata` → genera PDF da template (o allega file statici versionati).
2. Invio tramite provider **PEC** certificato o piattaforma di firma.
3. Log di invio, consenso, conservazione prove.

Si può aggiungere in seguito senza cambiare il concept del sito.

## Miglioramenti prodotto suggeriti

1. **Auth** (Supabase Auth): email/password o magic link; ruoli `candidate` / `company` in tabella `profiles`.
2. **RLS** su Postgres: ogni query filtra per ruolo (es. azienda non vedere `full_name` candidato).
3. **Campi:** `display_initials`, `avatar_url`, `city`, `job_titles[]`, `company_city` (solo città verso candidato).
4. **Accettazione contratti:** checkbox + timestamp + versione documento + hash file.
5. **Dashboard** separate candidato / azienda.
