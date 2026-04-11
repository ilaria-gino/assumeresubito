-- Lavoro48h: flag per righe dimostrative + seed iniziale (8 aziende, 8 candidati).
-- Le righe con is_seed = true NON vanno mai esposte in lettura agli utenti in produzione
-- (query: WHERE coalesce(is_seed, false) = false). allow_unlock = false impedisce sblocchi in app.

alter table public.company_leads
  add column if not exists is_seed boolean not null default false;

alter table public.company_leads
  add column if not exists allow_unlock boolean not null default true;

comment on column public.company_leads.is_seed is
  'true = dato solo per popolamento/test iniziale; non mostrare in ricerca pubblica né dopo go-live.';
comment on column public.company_leads.allow_unlock is
  'false = profilo non sbloccabile (es. seed dimostrativi).';

alter table public.candidate_leads
  add column if not exists is_seed boolean not null default false;

alter table public.candidate_leads
  add column if not exists allow_unlock boolean not null default true;

comment on column public.candidate_leads.is_seed is
  'true = dato solo per popolamento/test iniziale; non mostrare in ricerca pubblica né dopo go-live.';
comment on column public.candidate_leads.allow_unlock is
  'false = profilo non sbloccabile (es. seed dimostrativi).';

-- Vincolo: i seed non sono sbloccabili
alter table public.company_leads
  drop constraint if exists company_leads_seed_no_unlock_check;

alter table public.company_leads
  add constraint company_leads_seed_no_unlock_check
  check (not is_seed or allow_unlock = false);

alter table public.candidate_leads
  drop constraint if exists candidate_leads_seed_no_unlock_check;

alter table public.candidate_leads
  add constraint candidate_leads_seed_no_unlock_check
  check (not is_seed or allow_unlock = false);

-- Per i nuovi insert dal form (default): is_seed false, allow_unlock true — nessun cambio al front necessario.

-- ========== 8 imprese seed (email di dominio interno fittizio) ==========
insert into public.company_leads (
  company_name,
  sector,
  region,
  city,
  email,
  is_seed,
  allow_unlock
)
values
  ('Demo Nord Logistica Srl', 'Logistica', 'Lombardia', 'Milano', 'seed-az-01@seed.l48h.invalid', true, false),
  ('Demo Ristorazione Colli', 'Ristorazione', 'Emilia-Romagna', 'Bologna', 'seed-az-02@seed.l48h.invalid', true, false),
  ('Demo Edile Centro Italia', 'Edilizia', 'Lazio', 'Roma', 'seed-az-03@seed.l48h.invalid', true, false),
  ('Demo Termoidraulica Piemonte', 'Termoidraulica / impianti idraulici', 'Piemonte', 'Torino', 'seed-az-04@seed.l48h.invalid', true, false),
  ('Demo Elettro Veneto', 'Impianti elettrici', 'Veneto', 'Padova', 'seed-az-05@seed.l48h.invalid', true, false),
  ('Demo Uffici Sud', 'Uffici / amministrazione', 'Campania', 'Napoli', 'seed-az-06@seed.l48h.invalid', true, false),
  ('Demo Commercio Adriatico', 'Commercio', 'Marche', 'Ancona', 'seed-az-07@seed.l48h.invalid', true, false),
  ('Demo Immobiliare Liguria', 'Immobiliare', 'Liguria', 'Genova', 'seed-az-08@seed.l48h.invalid', true, false);

-- ========== 8 candidati seed ==========
insert into public.candidate_leads (
  first_name,
  last_name,
  age,
  country,
  region,
  city,
  postal_code,
  travel_radius_km,
  registration_mode,
  sector,
  experience_years,
  has_car,
  has_license,
  email,
  trade_skills,
  is_seed,
  allow_unlock
)
values
  ('Mario', 'Rossi', 34, 'Italia', 'Lombardia', 'Milano', '20121', 50, 'contact_only', 'Commercio', 6, true, true, 'seed-cd-01@seed.l48h.invalid', '["Vendita al dettaglio", "Gestione cassa"]'::jsonb, true, false),
  ('Laura', 'Bianchi', 29, 'Italia', 'Emilia-Romagna', 'Bologna', '40121', 25, 'active_search', 'Logistica', 4, false, true, 'seed-cd-02@seed.l48h.invalid', '["Magazzino", "Muletto"]'::jsonb, true, false),
  ('Giuseppe', 'Verdi', 41, 'Italia', 'Lazio', 'Roma', '00185', 100, 'contact_only', 'Ristorazione', 12, true, true, 'seed-cd-03@seed.l48h.invalid', '["Sala", "Bar"]'::jsonb, true, false),
  ('Anna', 'Ferrari', 26, 'Italia', 'Piemonte', 'Torino', '10121', 150, 'contact_only', 'Uffici / amministrazione', 3, false, false, 'seed-cd-04@seed.l48h.invalid', '["Contabilità"]'::jsonb, true, false),
  ('Sara', 'Vitale', 38, 'Italia', 'Veneto', 'Verona', '37121', 50, 'active_search', 'Termoidraulica / impianti idraulici', 10, true, true, 'seed-cd-05@seed.l48h.invalid', '["Installazioni civili"]'::jsonb, true, false),
  ('Paolo', 'Costa', 45, 'Italia', 'Campania', 'Salerno', '84121', 200, 'contact_only', 'Edilizia', 18, true, true, 'seed-cd-06@seed.l48h.invalid', '["Muratura", "Cartongesso"]'::jsonb, true, false),
  ('Elena', 'Marini', 31, 'Italia', 'Toscana', 'Firenze', '50122', 25, 'contact_only', 'Immobiliare', 5, true, true, 'seed-cd-07@seed.l48h.invalid', '["Segreteria di vendita"]'::jsonb, true, false),
  ('Davide', 'Gallo', 22, 'Italia', 'Sicilia', 'Palermo', '90121', 9999, 'active_search', 'Impianti elettrici', 1, false, true, 'seed-cd-08@seed.l48h.invalid', '["Cablaggio civile"]'::jsonb, true, false);
