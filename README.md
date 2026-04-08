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

1. Apri il progetto su [Supabase Dashboard](https://supabase.com/dashboard).
2. **SQL Editor** → incolla ed esegui il file `supabase/migrations/20260121000000_initial_leads.sql`.

Crea le tabelle `company_leads` e `candidate_leads` con RLS: solo **INSERT** per il ruolo `anon` (chiave pubblica), nessuna lettura anonima.

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
| `/registrazione` | Form → Supabase (se `.env`)  |
| `/prezzi`, …     | Pagine istituzionali         |

Slug settori: `immobiliare`, `ristorazione`, `logistica`, `edilizia`, `uffici`, `commercio`.

## Cosa fare se l’insert fallisce

- Hai eseguito la migration SQL sullo **stesso** progetto dell’URL in `.env`?
- La chiave è **anon**, non service_role?
- In **Table Editor** verifica che le tabelle esistano e prova a vedere le righe come amministratore dalla dashboard.
