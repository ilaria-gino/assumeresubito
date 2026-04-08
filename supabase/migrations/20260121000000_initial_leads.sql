-- Lavoro48h: lead da form pubblici (POC)
-- Esegui da Supabase Dashboard → SQL → New query, oppure: supabase db push (CLI)
-- (gen_random_uuid() è disponibile su Postgres recenti in Supabase)

-- Aziende (registrazione / contatto)
create table if not exists public.company_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_name text not null,
  sector text not null,
  region text not null,
  email text not null
);

comment on table public.company_leads is 'Richieste da form azienda (POC)';

-- Candidati
create table if not exists public.candidate_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  age integer not null check (age >= 16 and age <= 100),
  region text not null,
  sector text not null,
  experience_years integer check (experience_years is null or (experience_years >= 0 and experience_years <= 60)),
  has_car boolean not null default false,
  has_license boolean not null default false,
  email text not null
);

comment on table public.candidate_leads is 'Registrazioni candidati da form (POC)';

alter table public.company_leads enable row level security;
alter table public.candidate_leads enable row level security;

drop policy if exists "anon_insert_company_leads" on public.company_leads;
drop policy if exists "anon_insert_candidate_leads" on public.candidate_leads;

-- Solo inserimento anonimo dal front (chiave anon). Nessuna lettura pubblica.
create policy "anon_insert_company_leads"
  on public.company_leads
  for insert
  to anon
  with check (true);

create policy "anon_insert_candidate_leads"
  on public.candidate_leads
  for insert
  to anon
  with check (true);

grant usage on schema public to anon;
grant insert on table public.company_leads to anon;
grant insert on table public.candidate_leads to anon;
