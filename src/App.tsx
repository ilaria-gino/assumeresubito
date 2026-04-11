import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SectorPage } from "./pages/SectorPage";
import { Prezzi } from "./pages/Prezzi";
import { ChiSiamo } from "./pages/ChiSiamo";
import { Privacy } from "./pages/Privacy";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Termini } from "./pages/Termini";
import { Contatti } from "./pages/Contatti";
import { Registrazione } from "./pages/Registrazione";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";
import { Faq } from "./pages/Faq";
import { NotFound } from "./pages/NotFound";
import { RetribuzioniOrientative } from "./pages/RetribuzioniOrientative";
import { Candidati } from "./pages/Candidati";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="candidati" element={<Candidati />} />
        <Route path="settori/:slug" element={<SectorPage />} />
        <Route path="prezzi" element={<Prezzi />} />
        <Route path="chi-siamo" element={<ChiSiamo />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="termini" element={<Termini />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="registrazione" element={<Registrazione />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="faq" element={<Faq />} />
        <Route path="retribuzioni-orientative" element={<RetribuzioniOrientative />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
