import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";

type Variant = "box" | "compact" | "inline" | "darkHero";

function linksLight() {
  return (
    <>
      <Link to="/termini" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
        Termini
      </Link>
      {" · "}
      <Link to="/chi-siamo" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
        Chi siamo
      </Link>
      {" · "}
      <Link to="/faq" className="font-semibold text-[#2C4A6E] underline underline-offset-2">
        FAQ
      </Link>
    </>
  );
}

function linksDark() {
  return (
    <>
      <Link to="/termini" className="font-semibold text-amber-200/95 underline decoration-amber-500/50 underline-offset-2">
        Termini
      </Link>
      {" · "}
      <Link to="/chi-siamo" className="font-semibold text-amber-200/95 underline decoration-amber-500/50 underline-offset-2">
        Chi siamo
      </Link>
      {" · "}
      <Link to="/faq" className="font-semibold text-amber-200/95 underline decoration-amber-500/50 underline-offset-2">
        FAQ
      </Link>
    </>
  );
}

/** Richiamo istituzionale: marketplace / bacheca, non agenzia per il lavoro (riuso su più pagine). */
export function MarketplaceNotice({ variant = "box" }: { variant?: Variant }) {
  const coreLight = (
    <>
      <strong className="font-semibold text-[#152435]">{BRAND.name}</strong> è un{" "}
      <strong className="font-semibold text-[#152435]">marketplace di annunci</strong> (bacheca digitale tra utenti),{" "}
      <strong className="font-semibold text-[#152435]">non</strong> un&apos;agenzia per il lavoro e non svolge
      intermediazione o collocamento. Il sito mette a disposizione strumenti semplici per incontrare domanda e offerta,
      senza imporre vincoli o contratti di lavoro tra voi e {BRAND.name}; contratti e adempimenti restano tra le parti e
      i professionisti che scegliete.
    </>
  );

  const coreDark = (
    <>
      <strong className="font-semibold text-white">{BRAND.name}</strong> è un{" "}
      <strong className="font-semibold text-white">marketplace di annunci</strong>, non un&apos;agenzia per il lavoro: niente
      intermediazione. Gli articoli descrivono mercato e buone pratiche; contratti e adempimenti restano tra le parti e i
      professionisti abilitati.
    </>
  );

  if (variant === "darkHero") {
    return (
      <aside
        className="mt-4 max-w-xl rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-xs leading-relaxed text-white/85"
        role="note"
      >
        {coreDark} <span className="text-white/90">{linksDark()}</span>
      </aside>
    );
  }

  if (variant === "inline") {
    return (
      <p className="text-xs leading-relaxed text-[#6b7a8d]">
        {coreLight} {linksLight()}
      </p>
    );
  }

  if (variant === "compact") {
    return (
      <p className="text-center text-xs leading-relaxed text-[#6b7a8d]">
        {coreLight} {linksLight()}
      </p>
    );
  }

  return (
    <aside
      className="rounded-xl border border-[#2C4A6E]/20 bg-[#f0f6fb] px-4 py-3 text-sm leading-relaxed text-[#152435]/90 shadow-sm"
      role="note"
    >
      {coreLight} {linksLight()}
    </aside>
  );
}
