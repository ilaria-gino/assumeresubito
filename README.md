# Lavoro48h (lavoro48h.it)

Front-end marketing + registrazioni collegate a **Supabase**. Repository GitHub: [ilaria-gino/assumeresubito](https://github.com/ilaria-gino/assumeresubito). Brief prodotto: `skill.md` (storico repo: [ginocapon/assumere-subito](https://github.com/ginocapon/assumere-subito)).

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Supabase JS](https://supabase.com/docs/reference/javascript/introduction) (salvataggio lead da `/registrazione`)

## Requisiti

- Node.js **20+** (`.nvmrc`)

## Setup locale

```bash
cd /Users/macbook/Documents/progetti/assumere-subito
npm install
cp .env.example .env
```

In `.env` imposta:

- `VITE_SUPABASE_URL` — es. `https://suyrbiitbtfftdzjikig.supabase.co`
- `VITE_SUPABASE_ANON_KEY` — **Project API keys → anon public** (Dashboard Supabase → Settings → API)

Non committare `.env` (è in `.gitignore`). Non usare la **service_role** nel front-end.

## Database Supabase

Le migration sono in `supabase/migrations/`. Eseguile **in ordine** sullo stesso progetto indicato in `.env`.

| File | Contenuto |
|------|-----------|
| `20260121000000_initial_leads.sql` | Tabelle `company_leads`, `candidate_leads` + RLS (solo **INSERT** per `anon`) |
| `20260205120000_candidate_trade_skills.sql` | Colonna `trade_skills` (jsonb) su `candidate_leads` |
| `20260206120000_location_city_travel_km.sql` | Colonne `city` su entrambe le lead; `travel_radius_km` su `candidate_leads` |
| `20260211180000_candidate_mode_country.sql` | `country`, `registration_mode` su `candidate_leads` (percorso gratis vs cerca aziende) |
| `20260211190000_candidate_postal_code.sql` | `postal_code` (CAP / codice postale) su `candidate_leads` |
| `20260411120000_seed_demo_leads.sql` | Colonne `is_seed`, `allow_unlock` su `company_leads` e `candidate_leads` + 8 righe seed imprese e 8 candidati (non esporre in produzione) |
| `20260412110000_public_search_rpc.sql` | RPC `list_anonymous_candidates` / `list_anonymous_companies` (anonimo, esclude `is_seed`) per la pagina Candidati |

### Opzione A — Dashboard (senza CLI)

1. [Supabase Dashboard](https://supabase.com/dashboard) → progetto → **SQL Editor** → **New query**.
2. Incolla il contenuto del primo file, **Run**; ripeti per **tutti gli altri file** della tabella, nello stesso ordine.

### Opzione B — Supabase CLI

```bash
# una tantum: installazione (macOS)
brew install supabase/tap/supabase

# dalla cartella del progetto (dove c’è supabase/migrations/)
supabase login
supabase link --project-ref TUO_PROJECT_REF   # ref in Dashboard → Settings → General → Reference ID

# applica tutte le migration pendenti al progetto collegato
supabase db push
```

`TUO_PROJECT_REF` è la stringa tipo `abcdefghijklmnop` nell’URL del progetto (`https://supabase.com/dashboard/project/abcdefghijklmnop`).

Crea le tabelle con RLS: solo **INSERT** per il ruolo **anon** (chiave pubblica), nessuna lettura anonima.

## Comandi

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Git e GitHub

```bash
git init
git add .
git commit -m "Initial commit: AssumereSubito + Supabase lead forms"
git branch -M main
git remote add origin https://github.com/ilaria-gino/assumeresubito.git
git push -u origin main
```

Se il repository remoto non è vuoto, segui le istruzioni GitHub per il primo push.

## Route principali

| Percorso         | Contenuto                    |
| ---------------- | ---------------------------- |
| `/`              | Homepage                     |
| `/settori/:slug` | Landing verticali            |
| `/registrazione` | Scelta percorso (hub)        |
| `/registrazione/azienda`, `/registrazione/candidato` | Modulo + piani affiancati → Supabase (se `.env`) |

Slug settori: `immobiliare`, `ristorazione`, `logistica`, `edilizia`, `termoidraulica`, `impianti-elettrici`, `uffici`, `commercio`.

## Cosa fare se l’insert fallisce

- Hai eseguito la migration SQL sullo **stesso** progetto dell’URL in `.env`?
- La chiave è **anon**, non service_role?
- In **Table Editor** verifica che le tabelle esistano e prova a vedere le righe come amministratore dalla dashboard.
