import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { BrandWordmark } from "./BrandLogo";

const footLink = "text-sm text-white/65 transition-colors hover:text-[#FF8F5E]";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0a1628] via-[#0f2138] to-[#0a1628] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-luxury-display text-xl font-semibold tracking-tight text-white">
              <BrandWordmark size="sm" variant="light" showDomain />
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{BRAND.shortDescription}</p>
          </div>
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8AB4CE]">Piattaforma</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/registrazione/azienda" className={footLink}>
                  Iscrizione imprese e piani
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className={footLink}>
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link to="/registrazione" className={footLink}>
                  Registrazione (scelta percorso)
                </Link>
              </li>
              <li>
                <Link to="/registrazione/candidato" className={footLink}>
                  Iscrizione candidato
                </Link>
              </li>
              <li>
                <Link to="/blog" className={footLink}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className={footLink}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/retribuzioni-orientative" className={footLink}>
                  Retribuzioni orientative
                </Link>
              </li>
              <li>
                <Link to="/italia" className={footLink}>
                  Italia per regione
                </Link>
              </li>
              <li>
                <Link to="/risorse/checklist-annuncio" className={footLink}>
                  Checklist annuncio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8AB4CE]">Legale</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/privacy" className={footLink}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className={footLink}>
                  Cookie
                </Link>
              </li>
              <li>
                <Link to="/termini" className={footLink}>
                  Termini
                </Link>
              </li>
              <li>
                <Link to="/contatti" className={footLink}>
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8AB4CE]">Servizio</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Iscrizione candidati gratuita</li>
              <li>Contributi aziendali legati al modello scelto</li>
              <li>Contatto iniziato dal candidato solo con piano Full (top), se abilitato</li>
              <li>Verticali per settore e tempi di risposta definiti</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-[11px] text-white/35">
          Contenuti multimediali utilizzati secondo licenza dei fornitori.
        </p>
        <p className="mt-6 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {BRAND.domain}
        </p>
      </div>
    </footer>
  );
}
