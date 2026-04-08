import { useState } from "react";
import { Link } from "react-router-dom";
import {
  defaultAcceptAll,
  defaultEssentialOnly,
  hasConsentChoice,
  saveCookiePreferences,
} from "../lib/cookieConsent";

export function CookieBanner() {
  const [open, setOpen] = useState(() => !hasConsentChoice());

  if (!open) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#e1dbd1] bg-[#fdfbf7]/98 p-4 shadow-[0_-8px_32px_rgba(21,36,53,0.12)] backdrop-blur-md sm:p-5"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-sm text-[#152435]/90">
          <p id="cookie-banner-title" className="font-semibold text-[#152435]">
            Utilizziamo cookie e tecnologie simili
          </p>
          <p className="mt-1 leading-relaxed text-[#6b7a8d]">
            I cookie <strong className="text-[#152435]">strictly necessary</strong> servono al funzionamento del sito e
            non richiedono consenso. Per statistiche, preferenze e contenuti personalizzati serve il tuo consenso, come
            da GDPR e linee guida italiane. Leggi l&apos;{" "}
            <Link to="/privacy" className="premium-link">
              informativa privacy
            </Link>{" "}
            e la{" "}
            <Link to="/cookie-policy" className="premium-link">
              cookie policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            className="rounded-xl border border-[#e1dbd1] bg-white px-4 py-2.5 text-sm font-semibold text-[#152435] shadow-sm transition hover:bg-[#ece7df]"
            onClick={() => {
              saveCookiePreferences(defaultEssentialOnly);
              setOpen(false);
            }}
          >
            Solo necessari
          </button>
          <button
            type="button"
            className="rounded-xl bg-[#FF6B35] px-4 py-2.5 text-sm font-bold text-[#0A0F1C] shadow-md transition hover:bg-[#FF8F5E]"
            onClick={() => {
              saveCookiePreferences(defaultAcceptAll);
              setOpen(false);
            }}
          >
            Accetta tutti
          </button>
          <Link
            to="/cookie-policy"
            className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-[#2C4A6E] underline hover:text-[#FF6B35]"
            onClick={() => setOpen(false)}
          >
            Personalizza (cookie policy)
          </Link>
        </div>
      </div>
    </div>
  );
}
