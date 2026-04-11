import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const ItaliaIndex = lazy(() => import("./pages/ItaliaIndex").then((m) => ({ default: m.ItaliaIndex })));
const RegionPage = lazy(() => import("./pages/RegionPage").then((m) => ({ default: m.RegionPage })));
const ChecklistAnnuncio = lazy(() => import("./pages/ChecklistAnnuncio").then((m) => ({ default: m.ChecklistAnnuncio })));
const SectorPage = lazy(() => import("./pages/SectorPage").then((m) => ({ default: m.SectorPage })));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo").then((m) => ({ default: m.ChiSiamo })));
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy").then((m) => ({ default: m.CookiePolicy })));
const Termini = lazy(() => import("./pages/Termini").then((m) => ({ default: m.Termini })));
const Contatti = lazy(() => import("./pages/Contatti").then((m) => ({ default: m.Contatti })));
const BlogIndex = lazy(() => import("./pages/BlogIndex").then((m) => ({ default: m.BlogIndex })));
const BlogPost = lazy(() => import("./pages/BlogPost").then((m) => ({ default: m.BlogPost })));
const Faq = lazy(() => import("./pages/Faq").then((m) => ({ default: m.Faq })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));
const RetribuzioniOrientative = lazy(() =>
  import("./pages/RetribuzioniOrientative").then((m) => ({ default: m.RetribuzioniOrientative })),
);
const Candidati = lazy(() => import("./pages/Candidati").then((m) => ({ default: m.Candidati })));
const RegistrazioneHub = lazy(() =>
  import("./pages/registrazione/RegistrazioneHub").then((m) => ({ default: m.RegistrazioneHub })),
);
const RegistrazioneAziendaPage = lazy(() =>
  import("./pages/registrazione/RegistrazioneAziendaPage").then((m) => ({ default: m.RegistrazioneAziendaPage })),
);
const RegistrazioneCandidatoPage = lazy(() =>
  import("./pages/registrazione/RegistrazioneCandidatoPage").then((m) => ({ default: m.RegistrazioneCandidatoPage })),
);

function RouteFallback() {
  return (
    <div className="flex min-h-[45vh] flex-col items-center justify-center gap-2 bg-[#fdfbf7] px-4 text-sm text-[#6b7a8d]">
      <span className="h-8 w-8 animate-pulse rounded-full bg-[#2C4A6E]/20" aria-hidden />
      Caricamento pagina…
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="italia" element={<ItaliaIndex />} />
          <Route path="italia/:slug" element={<RegionPage />} />
          <Route path="risorse/checklist-annuncio" element={<ChecklistAnnuncio />} />
          <Route path="candidati" element={<Candidati />} />
          <Route path="settori/:slug" element={<SectorPage />} />
          <Route path="prezzi" element={<Navigate to="/registrazione/azienda" replace />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="termini" element={<Termini />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="registrazione" element={<RegistrazioneHub />} />
          <Route path="registrazione/azienda" element={<RegistrazioneAziendaPage />} />
          <Route path="registrazione/candidato" element={<RegistrazioneCandidatoPage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="faq" element={<Faq />} />
          <Route path="retribuzioni-orientative" element={<RetribuzioniOrientative />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
