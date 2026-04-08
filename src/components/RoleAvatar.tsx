import { useId } from "react";
import type { SectorContent } from "../data/sectors";

const gradients: Record<SectorContent["avatarHint"], [string, string]> = {
  suit: ["#2C4A6E", "#1e3a5f"],
  chef: ["#c2410c", "#ea580c"],
  warehouse: ["#1e40af", "#2563eb"],
  hardhat: ["#ca8a04", "#eab308"],
  desk: ["#4f46e5", "#6366f1"],
  retail: ["#be185d", "#db2777"],
};

interface RoleAvatarProps {
  hint: SectorContent["avatarHint"];
  initials: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: 48, md: 72, lg: 96 };

export function RoleAvatar({ hint, initials, size = "md", className = "" }: RoleAvatarProps) {
  const gid = useId().replace(/:/g, "");
  const s = sizeMap[size];
  const [c1, c2] = gradients[hint];
  const gradId = `g-${gid}`;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl shadow-md ring-2 ring-white ${className}`}
      style={{ width: s, height: s }}
      role="img"
      aria-label={`Avatar anonimo ${initials}`}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${gradId})`} />
        {/* Silhouette stilizzata per ruolo — niente foto reali, tutto SVG locale */}
        {hint === "suit" && (
          <path
            fill="rgba(255,255,255,0.35)"
            d="M50 22c-6 0-11 5-11 11v8h22v-8c0-6-5-11-11-11zm-18 28v38h36V50l-6-4-6 8-6-8-6 4-6-8z"
          />
        )}
        {hint === "chef" && (
          <>
            <ellipse cx="50" cy="28" rx="14" ry="10" fill="rgba(255,255,255,0.4)" />
            <path fill="rgba(255,255,255,0.35)" d="M32 48h36v32H32zm8-8h20l-4 8h-12z" />
          </>
        )}
        {hint === "warehouse" && (
          <path
            fill="rgba(255,255,255,0.35)"
            d="M28 38h44v42H28zm8-12l14-8 14 8v10H36zm10 22h16v18H38z"
          />
        )}
        {hint === "hardhat" && (
          <>
            <path fill="rgba(255,255,255,0.45)" d="M30 42h40v8H30zm5-6h30c0-8-7-14-15-14s-15 6-15 14z" />
            <path fill="rgba(255,255,255,0.3)" d="M38 52h24v28H38z" />
          </>
        )}
        {hint === "desk" && (
          <path
            fill="rgba(255,255,255,0.35)"
            d="M50 24c-7 0-12 5-12 12v6h24v-6c0-7-5-12-12-12zm-20 26h40v4H30zm4 8h32v30H34z"
          />
        )}
        {hint === "retail" && (
          <path
            fill="rgba(255,255,255,0.35)"
            d="M50 26c-8 0-14 6-14 14v4h28v-4c0-8-6-14-14-14zm-16 26h32l-4 36H38z M42 58h16v8H42z"
          />
        )}
      </svg>
      <span className="pointer-events-none absolute bottom-1 right-1 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm">
        {initials}
      </span>
    </div>
  );
}
