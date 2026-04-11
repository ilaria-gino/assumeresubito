-- ============================================================================
-- RIPARAZIONE MANUALE — eseguire SOLO in SQL Editor se le tabelle sono vuote
-- o sono state create con poche colonne (es. solo id, created_at, first_name).
-- Progetto: Lavoro48h — lead da form pubblico.
-- ============================================================================

-- Candidati: schema allineato al front-end e alle migration del repo
DROP TABLE IF EXISTS public.candidate_leads CASCADE;

CREATE TABLE public.candidate_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  age integer NOT NULL CHECK (age >= 16 AND age <= 100),
  region text NOT NULL,
  sector text NOT NULL,
  experience_years integer CHECK (experience_years IS NULL OR (experience_years >= 0 AND experience_years <= 60)),
  has_car boolean NOT NULL DEFAULT false,
  has_license boolean NOT NULL DEFAULT false,
  email text NOT NULL,
  trade_skills jsonb NOT NULL DEFAULT '[]'::jsonb,
  city text,
  travel_radius_km integer,
  country text NOT NULL DEFAULT 'Italia',
  registration_mode text NOT NULL DEFAULT 'contact_only',
  postal_code text,
  CONSTRAINT candidate_leads_travel_radius_km_check CHECK (
    travel_radius_km IS NULL
    OR travel_radius_km IN (0, 10, 25, 50, 100, 150, 200, 300, 500, 9999)
  ),
  CONSTRAINT candidate_leads_registration_mode_check CHECK (
    registration_mode IN ('contact_only', 'active_search')
  )
);

COMMENT ON TABLE public.candidate_leads IS 'Registrazioni candidati da form (POC)';
COMMENT ON COLUMN public.candidate_leads.trade_skills IS 'Elenco di competenze specifiche selezionate (JSON array di stringhe)';
COMMENT ON COLUMN public.candidate_leads.country IS 'Paese di residenza o di riferimento (coerente con città e raggio km).';
COMMENT ON COLUMN public.candidate_leads.registration_mode IS 'contact_only = profilo gratis; active_search = piano a pagamento per consultare aziende.';
COMMENT ON COLUMN public.candidate_leads.postal_code IS 'CAP italiano (5 cifre) o codice postale estero.';

ALTER TABLE public.candidate_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_candidate_leads"
  ON public.candidate_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON TABLE public.candidate_leads TO anon;

-- Aziende: ricrea solo se mancano colonne (opzionale — decommentare se company_leads è incompleta)
-- DROP TABLE IF EXISTS public.company_leads CASCADE;
--
-- CREATE TABLE public.company_leads (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   created_at timestamptz NOT NULL DEFAULT now(),
--   company_name text NOT NULL,
--   sector text NOT NULL,
--   region text NOT NULL,
--   city text,
--   email text NOT NULL
-- );
-- COMMENT ON TABLE public.company_leads IS 'Richieste da form azienda (POC)';
-- ALTER TABLE public.company_leads ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "anon_insert_company_leads"
--   ON public.company_leads FOR INSERT TO anon WITH CHECK (true);
-- GRANT INSERT ON TABLE public.company_leads TO anon;
