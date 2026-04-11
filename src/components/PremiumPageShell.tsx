import type { ReactNode } from "react";
import { MarketplaceNotice } from "./MarketplaceNotice";

type MaxWidth = "narrow" | "wide";

const maxClass: Record<MaxWidth, string> = {
  narrow: "max-w-3xl",
  wide: "max-w-6xl",
};

export function PremiumPageShell({
  eyebrow,
  title,
  subtitle,
  children,
  maxWidth = "narrow",
  showMarketplaceFootnote = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: MaxWidth;
  /** Su pagine legali già esaustive (Termini, Privacy, Cookie) impostare false per evitare ripetizione eccessiva. */
  showMarketplaceFootnote?: boolean;
}) {
  return (
    <div className="min-h-[40vh] bg-[#f7f5f1]">
      <header className="relative overflow-hidden border-b border-[#e1dbd1] bg-gradient-to-br from-[#152435] via-[#1e3a5f] to-[#0f172a] px-4 py-14 sm:px-6 sm:py-18">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF6B35]/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[#8AB4CE]/10 blur-3xl"
          aria-hidden
        />
        <div className={`relative mx-auto ${maxClass[maxWidth]}`}>
          {eyebrow ? (
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#8AB4CE]">{eyebrow}</p>
          ) : null}
          <h1 className="font-luxury-display mt-3 text-3xl font-semibold leading-[1.12] text-white sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-lg leading-relaxed text-white/75">{subtitle}</p> : null}
        </div>
      </header>
      <div className={`mx-auto px-4 py-12 sm:px-6 sm:py-16 ${maxClass[maxWidth]}`}>
        {children}
        {showMarketplaceFootnote ? (
          <div className="mt-12 border-t border-[#e1dbd1] pt-8">
            <MarketplaceNotice variant="compact" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
