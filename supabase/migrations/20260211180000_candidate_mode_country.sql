-- Percorso candidato: solo contattato vs cerca aziende (piano a pagamento); Paese per localizzazione precisa

alter table public.candidate_leads
  add column if not exists country text not null default 'Italia';

comment on column public.candidate_leads.country is
  'Paese di residenza o di riferimento (coerente con città e raggio km).';

alter table public.candidate_leads
  add column if not exists registration_mode text not null default 'contact_only';

comment on column public.candidate_leads.registration_mode is
  'contact_only = profilo gratis, solo contattato dalle imprese; active_search = intenzione piano a pagamento per consultare aziende (attivazione dopo pagamento).';

alter table public.candidate_leads
  drop constraint if exists candidate_leads_registration_mode_check;

alter table public.candidate_leads
  add constraint candidate_leads_registration_mode_check
  check (registration_mode in ('contact_only', 'active_search'));
