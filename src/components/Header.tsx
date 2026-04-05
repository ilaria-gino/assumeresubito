import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SECTORS } from "../data/sectors";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? "bg-teal-100 text-teal-900" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-teal-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-sm text-white">
            AS
          </span>
          <span className="hidden sm:inline">AssumereSubito.it</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principale">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              aria-expanded={false}
            >
              Settori
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[200px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                {SECTORS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/settori/${s.slug}`}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-900"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/prezzi" className={navClass}>
            Prezzi
          </NavLink>
          <NavLink to="/chi-siamo" className={navClass}>
            Chi siamo
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            to="/registrazione#candidato"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Cerco lavoro
          </Link>
          <Link
            to="/registrazione#azienda"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
          >
            Sono un&apos;azienda
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <NavLink to="/" className={navClass} end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                to={`/settori/${s.slug}`}
                className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}
            <NavLink to="/prezzi" className={navClass} onClick={() => setOpen(false)}>
              Prezzi
            </NavLink>
            <NavLink to="/chi-siamo" className={navClass} onClick={() => setOpen(false)}>
              Chi siamo
            </NavLink>
            <Link
              to="/registrazione#candidato"
              className="mt-2 rounded-lg border border-slate-200 py-2 text-center text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Cerco lavoro
            </Link>
            <Link
              to="/registrazione#azienda"
              className="rounded-lg bg-teal-600 py-2 text-center text-sm font-semibold text-white"
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
