import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SectorPage } from "./pages/SectorPage";
import { ChiSiamo } from "./pages/ChiSiamo";
import { Privacy } from "./pages/Privacy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Termini } from "./pages/Termini";
import { Contatti } from "./pages/Contatti";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";
import { Faq } from "./pages/Faq";
import { NotFound } from "./pages/NotFound";
import { RetribuzioniOrientative } from "./pages/RetribuzioniOrientative";
import { Candidati } from "./pages/Candidati";
import { RegistrazioneHub } from "./pages/registrazione/RegistrazioneHub";
import { RegistrazioneAziendaPage } from "./pages/registrazione/RegistrazioneAziendaPage";
import { RegistrazioneCandidatoPage } from "./pages/registrazione/RegistrazioneCandidatoPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
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
  );
}
