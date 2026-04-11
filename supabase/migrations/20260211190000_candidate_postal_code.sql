-- CAP / codice postale (inserito a mano dal candidato) per ancorare la zona insieme a città e km

alter table public.candidate_leads
  add column if not exists postal_code text;

comment on column public.candidate_leads.postal_code is
  'CAP italiano (5 cifre) o codice postale estero, compilato manualmente.';
