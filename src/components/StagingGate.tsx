import {
  type FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "l48h_staging_unlocked";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) {
    out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return out === 0;
}

export function StagingGate({ children }: { children: ReactNode }) {
  const expected = useMemo(() => (import.meta.env.VITE_STAGING_PASSWORD as string | undefined)?.trim() ?? "", []);

  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    if (!expected) return true;
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const locked = Boolean(expected) && !unlocked;

  useEffect(() => {
    if (!locked) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [locked]);

  const submit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!expected) {
        setUnlocked(true);
        return;
      }
      const fromDom = new FormData(e.currentTarget).get("staging-password");
      const pwd = (typeof fromDom === "string" ? fromDom : password).trim();
      const ok = timingSafeEqual(pwd, expected);
      if (ok) {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        setUnlocked(true);
        setError(false);
      } else {
        setError(true);
      }
    },
    [expected, password],
  );

  if (!expected || unlocked) {
    return <>{children}</>;
  }

  const overlay = (
    <div
      className="fixed inset-0 z-[2147483647] box-border flex min-h-screen min-h-[100dvh] w-full max-w-none flex-col items-center justify-center overflow-y-auto overscroll-none bg-[#0f172a] px-4 py-6 [-webkit-overflow-scrolling:touch]"
      style={{
        paddingTop: "max(1.5rem, env(safe-area-inset-top))",
        paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        minHeight: "-webkit-fill-available",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="staging-gate-title"
    >
      <div className="w-full max-w-md shrink-0 rounded-2xl border border-white/10 bg-[#152435] p-6 shadow-2xl sm:p-8">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8AB4CE]">Lavoro48h</p>
        <h1 id="staging-gate-title" className="mt-3 text-center text-lg font-semibold text-white sm:text-xl">
          Accesso staging
        </h1>
        <p className="mt-2 text-center text-sm text-white/70">
          Ambiente non pubblico. Inserisci la password condivisa dal team.
        </p>
        <form className="mt-6 space-y-4 sm:mt-8" onSubmit={submit} noValidate>
          <label className="sr-only" htmlFor="staging-password">
            Password
          </label>
          <input
            id="staging-password"
            type="password"
            name="staging-password"
            autoComplete="current-password"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            enterKeyHint="go"
            inputMode="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onInput={(e) => {
              setPassword((e.target as HTMLInputElement).value);
              setError(false);
            }}
            className="min-h-[48px] w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/25"
            placeholder="Password"
          />
          {error && <p className="text-center text-sm text-red-300">Password non valida.</p>}
          <button
            type="submit"
            className="min-h-[48px] w-full cursor-pointer touch-manipulation rounded-xl bg-gradient-to-b from-orange-300 to-[#FF6B35] py-3 text-base font-bold text-[#0A0F1C] shadow-lg transition hover:brightness-105 active:brightness-95"
          >
            Accedi
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-white/45">
          Su cellulare, in navigazione privata alcuni browser limitano la memoria: se la password non resta memorizzata,
          è normale — reinseriscila. Chiudendo la scheda potrebbe essere richiesta di nuovo.
        </p>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
