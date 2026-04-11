/**
 * Valori URL condivisi tra build (Vite) e client.
 * Nessun `import.meta` qui: importabile da `vite.config.ts` e plugin Node.
 */
export const DEFAULT_SITE_URL = "https://www.lavoro48h.it";

export function resolveSiteUrlFromProcessEnv(env: Record<string, string | undefined>): string {
  const v = env.VITE_SITE_URL?.trim();
  return (v && v.length > 0 ? v : DEFAULT_SITE_URL).replace(/\/$/, "");
}
