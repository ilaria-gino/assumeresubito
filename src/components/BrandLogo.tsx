import { useId } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";

type Size = "sm" | "md" | "lg";
export type BrandVariant = "light" | "dark";

const sizeText: Record<Size, string> = {
  sm: "text-[0.95rem] sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-2xl",
};

const sizeDomain: Record<Size, string> = {
  sm: "text-[0.65rem] sm:text-xs",
  md: "text-xs sm:text-sm",
  lg: "text-sm sm:text-base",
};

const sizeBadge: Record<Size, string> = {
  sm: "px-1 py-0.5 text-[0.7rem] sm:text-xs",
  md: "px-1.5 py-0.5 text-xs sm:text-sm",
  lg: "px-2 py-1 text-sm sm:text-base",
};

/** Marchio tipografico: Lavoro + 48h (+ .it opzionale) */
export function BrandWordmark({
  className = "",
  size = "md",
  showDomain = true,
  variant = "dark",
}: {
  className?: string;
  size?: Size;
  showDomain?: boolean;
  variant?: BrandVariant;
}) {
  const isLight = variant === "light";
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-0 ${className}`}>
      <span
        className={`font-semibold tracking-tight ${isLight ? "text-white" : "text-[#152435]"} ${sizeText[size]}`}
      >
        Lavoro
      </span>
      <span
        className={`ml-0.5 inline-flex items-baseline rounded-md border font-bold tabular-nums shadow-sm ring-1 ${
          isLight
            ? "border-white/35 bg-white/10 text-white ring-white/10"
            : "border-[#2C4A6E]/90 bg-white text-[#2C4A6E] ring-[#2C4A6E]/10"
        } ${sizeBadge[size]}`}
      >
        48
        <span className="ml-px font-semibold leading-none">h</span>
      </span>
      {showDomain && (
        <span
          className={`ml-1 font-medium tracking-tight ${isLight ? "text-white/70" : "text-[#6b7a8d]"} ${sizeDomain[size]}`}
        >
          .it
        </span>
      )}
    </span>
  );
}

/** Icona quadrata: monogramma compatto */
export function BrandMarkIcon({ className = "" }: { className?: string }) {
  const gradId = useId();
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      <defs>
        <linearGradient id={gradId} x1="8" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C4A6E" />
          <stop offset="1" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      <text
        x="20"
        y="26"
        fill="white"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="700"
        textAnchor="middle"
      >
        L48h
      </text>
    </svg>
  );
}

/** Logo cliccabile: icona + wordmark */
export function BrandLogoLink({
  size = "md",
  variant = "dark",
}: {
  size?: Size;
  variant?: BrandVariant;
}) {
  const ring = variant === "light" ? "ring-white/20" : "ring-[#2C4A6E]/15";
  const focus = variant === "light" ? "focus-visible:ring-white" : "focus-visible:ring-[#2C4A6E]";
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 rounded-lg outline-none ring-0 transition hover:opacity-95 focus-visible:ring-2 ${focus}`}
      aria-label={`${BRAND.name} — Home`}
    >
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-md ring-1 ${ring}`}>
        <BrandMarkIcon className="h-9 w-9" />
      </span>
      <BrandWordmark size={size} showDomain variant={variant} />
    </Link>
  );
}
