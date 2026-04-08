import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SECTORS } from "../data/sectors";
import { BrandLogoLink } from "./BrandLogo";
import { btnGhostSm, btnPrimarySm } from "./ui/ButtonStyles";

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    setScrolled(!isHome);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const [open, setOpen] = useState(false);
  const transparent = isHome && !scrolled;
  const navVariant = transparent ? "light" : "dark";

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors ${
      transparent
        ? isActive
          ? "bg-white/15 text-white"
          : "text-white/85 hover:bg-white/10 hover:text-white"
        : isActive
          ? "bg-[#2C4A6E]/10 text-[#2C4A6E]"
          : "text-[#152435]/80 hover:bg-[#ece7df]/80 hover:text-[#152435]"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? "bg-[#2C4A6E]/10 text-[#2C4A6E]" : "text-[#152435] hover:bg-[#ece7df]/80"
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background,border,box-shadow] duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[#2C4A6E]/12 bg-[#fdfbf7]/98 shadow-[0_2px_32px_rgba(21,36,53,0.08)] backdrop-blur-md"
      }`}
      style={{ minHeight: "var(--nav-h)" }}
    >
      <div className="mx-auto flex h-[var(--nav-h)] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="min-w-0 shrink">
          <BrandLogoLink size="sm" variant={navVariant} />
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principale">
          <NavLink to="/" className={desktopLink} end>
            Home
          </NavLink>
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] ${
                transparent ? "text-white/85 hover:bg-white/10" : "text-[#152435]/80 hover:bg-[#ece7df]/80"
              }`}
              aria-expanded={false}
            >
              Settori
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[220px] rounded-xl border border-[#e1dbd1] bg-[#fdfbf7] py-2 shadow-xl">
                {SECTORS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/settori/${s.slug}`}
                      className="block px-4 py-2 text-sm text-[#152435] hover:bg-[#ece7df] hover:text-[#2C4A6E]"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/prezzi" className={desktopLink}>
            Prezzi
          </NavLink>
          <NavLink to="/chi-siamo" className={desktopLink}>
            Chi siamo
          </NavLink>
          <NavLink to="/blog" className={desktopLink}>
            Blog
          </NavLink>
          <NavLink to="/faq" className={desktopLink}>
            FAQ
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link to="/registrazione#candidato" className={btnGhostSm}>
            Cerco lavoro
          </Link>
          <Link to="/registrazione#azienda" className={btnPrimarySm}>
            Sono un&apos;azienda
          </Link>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${
            transparent ? "text-white hover:bg-white/10" : "text-[#152435] hover:bg-[#ece7df]/80"
          }`}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-var(--nav-h))] overflow-y-auto border-t border-[#e1dbd1] bg-[#fdfbf7] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <NavLink to="/" className={mobileLink} end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                to={`/settori/${s.slug}`}
                className="rounded-lg px-3 py-2 text-sm text-[#152435] hover:bg-[#ece7df]"
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}
            <NavLink to="/prezzi" className={mobileLink} onClick={() => setOpen(false)}>
              Prezzi
            </NavLink>
            <NavLink to="/chi-siamo" className={mobileLink} onClick={() => setOpen(false)}>
              Chi siamo
            </NavLink>
            <NavLink to="/blog" className={mobileLink} onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/faq" className={mobileLink} onClick={() => setOpen(false)}>
              FAQ
            </NavLink>
            <Link
              to="/registrazione#candidato"
              className={`${btnGhostSm} mt-2 w-full justify-center`}
              onClick={() => setOpen(false)}
            >
              Cerco lavoro
            </Link>
            <Link
              to="/registrazione#azienda"
              className={`${btnPrimarySm} w-full justify-center`}
              onClick={() => setOpen(false)}
            >
              Sono un&apos;azienda
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
