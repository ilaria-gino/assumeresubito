-- Localizzazione Italia: regione + città (capoluogo) e raggio spostamento candidato (km)

alter table public.company_leads
  add column if not exists city text;

comment on column public.company_leads.region is 'Regione italiana (nome ufficiale)';
comment on column public.company_leads.city is 'Città di riferimento (es. capoluogo di provincia / sede operativa)';

alter table public.candidate_leads
  add column if not exists city text;

comment on column public.candidate_leads.region is 'Regione italiana (nome ufficiale)';
comment on column public.candidate_leads.city is 'Città di riferimento (es. capoluogo di provincia / residenza)';

alter table public.candidate_leads
  add column if not exists travel_radius_km integer;

comment on column public.candidate_leads.travel_radius_km is
  'Distanza massima disposta a percorrere per lavoro (km). 0 = zona immediata; 9999 = tutta Italia.';

alter table public.candidate_leads
  drop constraint if exists candidate_leads_travel_radius_km_check;

alter table public.candidate_leads
  add constraint candidate_leads_travel_radius_km_check
  check (
    travel_radius_km is null
    or travel_radius_km in (0, 10, 25, 50, 100, 150, 200, 300, 500, 9999)
  );
