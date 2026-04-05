import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SectorPage } from "./pages/SectorPage";
import { Prezzi } from "./pages/Prezzi";
import { ChiSiamo } from "./pages/ChiSiamo";
import { Privacy } from "./pages/Privacy";
import { Termini } from "./pages/Termini";
import { Contatti } from "./pages/Contatti";
import { Registrazione } from "./pages/Registrazione";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settori/:slug" element={<SectorPage />} />
        <Route path="prezzi" element={<Prezzi />} />
        <Route path="chi-siamo" element={<ChiSiamo />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="termini" element={<Termini />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="registrazione" element={<Registrazione />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
