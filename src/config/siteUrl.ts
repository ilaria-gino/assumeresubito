import { DEFAULT_SITE_URL } from "./siteUrlConstants";

/** URL canonico lato client (bundle Vite). */
export function publicSiteUrl(): string {
  const v = import.meta.env.VITE_SITE_URL;
  if (typeof v === "string" && v.trim().length > 0) {
    return v.trim().replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}
