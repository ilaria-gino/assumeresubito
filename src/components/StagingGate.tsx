import { type FormEvent, type ReactNode, useCallback, useMemo, useState } from "react";

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

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (!expected) {
        setUnlocked(true);
        return;
      }
      const ok = timingSafeEqual(password, expected);
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

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-[#0f172a] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#152435] p-8 shadow-2xl">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#8AB4CE]">Lavoro48h</p>
        <h1 className="mt-3 text-center font-semibold text-white">Accesso staging</h1>
        <p className="mt-2 text-center text-sm text-white/70">
          Ambiente non pubblico. Inserisci la password condivisa dal team.
        </p>
        <form className="mt-8 space-y-4" onSubmit={submit}>
          <label className="sr-only" htmlFor="staging-password">
            Password
          </label>
          <input
            id="staging-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#FF6B35]/60 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/25"
            placeholder="Password"
          />
          {error && <p className="text-center text-sm text-red-300">Password non valida.</p>}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-b from-orange-300 to-[#FF6B35] py-3 text-sm font-bold text-[#0A0F1C] shadow-lg transition hover:brightness-105"
          >
            Accedi
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-white/45">
          Sessione browser: chiudendo la scheda potrebbe essere richiesta di nuovo la password.
        </p>
      </div>
    </div>
  );
}
