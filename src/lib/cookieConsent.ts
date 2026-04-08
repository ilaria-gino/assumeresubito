export type CookiePreferences = {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "as_cookie_preferences_v1";

export const defaultEssentialOnly: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  updatedAt: new Date().toISOString(),
};

export const defaultAcceptAll: CookiePreferences = {
  necessary: true,
  preferences: true,
  analytics: true,
  marketing: true,
  updatedAt: new Date().toISOString(),
};

export function loadCookiePreferences(): CookiePreferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(p: CookiePreferences): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...p, updatedAt: new Date().toISOString() }));
}

export function hasConsentChoice(): boolean {
  return loadCookiePreferences() !== null;
}
