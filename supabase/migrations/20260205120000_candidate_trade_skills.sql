-- Competenze operative (tag) per candidati — form pubblico
alter table public.candidate_leads
  add column if not exists trade_skills jsonb not null default '[]'::jsonb;

comment on column public.candidate_leads.trade_skills is 'Elenco di competenze specifiche selezionate (JSON array di stringhe)';
