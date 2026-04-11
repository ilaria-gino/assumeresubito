-- Ricerca anonima via RPC: niente email/nominativi completi; esclude sempre is_seed.
-- SECURITY DEFINER: il client anon non ha SELECT sulle tabelle base.

create or replace function public.list_anonymous_candidates(p_search text default '')
returns table (
  id uuid,
  initials text,
  sector text,
  region text,
  city text,
  country text,
  travel_radius_km integer,
  experience_years integer,
  has_car boolean,
  has_license boolean,
  registration_mode text,
  trade_skills jsonb,
  allow_unlock boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select
    cl.id,
    upper(
      concat(
        left(nullif(trim(cl.first_name), ''), 1),
        '.',
        left(nullif(trim(cl.last_name), ''), 1),
        '.'
      )
    ) as initials,
    cl.sector,
    cl.region,
    cl.city,
    cl.country,
    cl.travel_radius_km,
    cl.experience_years,
    cl.has_car,
    cl.has_license,
    cl.registration_mode,
    coalesce(cl.trade_skills, '[]'::jsonb),
    cl.allow_unlock
  from public.candidate_leads cl
  where coalesce(cl.is_seed, false) = false
    and (
      nullif(trim(p_search), '') is null
      or cl.sector ilike '%' || trim(p_search) || '%'
      or cl.region ilike '%' || trim(p_search) || '%'
      or cl.city ilike '%' || trim(p_search) || '%'
      or cl.country ilike '%' || trim(p_search) || '%'
    );
$$;

create or replace function public.list_anonymous_companies(p_search text default '')
returns table (
  id uuid,
  masked_name text,
  sector text,
  region text,
  city text,
  allow_unlock boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select
    co.id,
    ('Azienda · ' || co.sector || ' · ' || co.region || ' · ' || co.city)::text as masked_name,
    co.sector,
    co.region,
    co.city,
    co.allow_unlock
  from public.company_leads co
  where coalesce(co.is_seed, false) = false
    and (
      nullif(trim(p_search), '') is null
      or co.sector ilike '%' || trim(p_search) || '%'
      or co.region ilike '%' || trim(p_search) || '%'
      or co.city ilike '%' || trim(p_search) || '%'
      or co.company_name ilike '%' || trim(p_search) || '%'
    );
$$;

revoke all on function public.list_anonymous_candidates(text) from public;
revoke all on function public.list_anonymous_companies(text) from public;

grant execute on function public.list_anonymous_candidates(text) to anon, authenticated;
grant execute on function public.list_anonymous_companies(text) to anon, authenticated;

comment on function public.list_anonymous_candidates(text) is
  'Elenco candidati anonimo per ricerca; esclude is_seed; niente PII oltre iniziali.';
comment on function public.list_anonymous_companies(text) is
  'Elenco imprese anonimo per ricerca; esclude is_seed; niente ragione sociale in chiaro.';
