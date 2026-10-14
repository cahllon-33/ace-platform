export type CookieConsent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "ace-cookie-consent-v1";

type Store = {
  value: CookieConsent | null;
  booted: boolean;
  listeners: Set<() => void>;
};

const globalStore = globalThis as typeof globalThis & { __aceConsentStore?: Store };

function memory(): Store {
  if (!globalStore.__aceConsentStore) {
    globalStore.__aceConsentStore = { value: null, booted: false, listeners: new Set() };
  }
  return globalStore.__aceConsentStore;
}

function emit() {
  memory().listeners.forEach((listener) => listener());
}

export function subscribeConsent(listener: () => void) {
  memory().listeners.add(listener);
  return () => {
    memory().listeners.delete(listener);
  };
}

export function getConsentSnapshot() {
  const store = memory();
  if (typeof window !== "undefined" && !store.booted) {
    store.booted = true;
    store.value = readStoredConsent();
  }
  return store.value;
}

export function getServerConsentSnapshot(): CookieConsent | null {
  return null;
}

export function readStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (parsed.essential !== true || typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }
    return {
      essential: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      decidedAt: typeof parsed.decidedAt === "string" ? parsed.decidedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(next: Omit<CookieConsent, "essential" | "decidedAt"> & { analytics: boolean; marketing: boolean }) {
  const value: CookieConsent = {
    essential: true,
    analytics: next.analytics,
    marketing: next.marketing,
    decidedAt: new Date().toISOString(),
  };
  memory().value = value;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }
  emit();
}

/** No third-party pixels load on this website. These flags are reserved for future scripts. */
export function analyticsAllowed(consent: CookieConsent | null) {
  return Boolean(consent?.analytics);
}

export function marketingAllowed(consent: CookieConsent | null) {
  return Boolean(consent?.marketing);
}
