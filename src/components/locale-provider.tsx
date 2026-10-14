"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { DICTIONARIES, EN, interpolate, type MessageKey } from "@/app/i18n";
import { SITE_LOCALES, type LocaleOption } from "@/lib/languages";
import { isLocaleId, LOCALE_COOKIE, LOCALE_STORAGE_KEY } from "@/lib/locale-pref";

type LocaleContextValue = {
  locale: LocaleOption;
  t: (key: MessageKey, values?: Record<string, string | number>) => string;
  setLocaleId: (id: string) => void;
};

type LocaleStore = {
  id: string;
  pinned: boolean;
  listeners: Set<() => void>;
};

const globalStore = globalThis as typeof globalThis & { __aceLocaleStore?: LocaleStore };

function store(): LocaleStore {
  if (!globalStore.__aceLocaleStore) {
    const stamped =
      typeof window === "undefined"
        ? "en"
        : (window as Window & { __ACE_LOCALE?: string }).__ACE_LOCALE;
    globalStore.__aceLocaleStore = {
      id: isLocaleId(stamped) ? stamped : "en",
      pinned: false,
      listeners: new Set(),
    };
  }
  return globalStore.__aceLocaleStore;
}

function emit() {
  store().listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  store().listeners.add(listener);
  return () => {
    store().listeners.delete(listener);
  };
}

function getSnapshot() {
  return store().id;
}

function resolveLocale(id: string): LocaleOption {
  return SITE_LOCALES.find((item) => item.id === id) ?? SITE_LOCALES.find((item) => item.id === "en")!;
}

function persistLocale(id: string) {
  if (typeof window === "undefined") return;
  (window as Window & { __ACE_LOCALE?: string }).__ACE_LOCALE = id;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, id);
  } catch {
    /* storage can be blocked */
  }
  document.cookie = `${LOCALE_COOKIE}=${id}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function setLocaleId(id: string) {
  if (!isLocaleId(id)) return;
  const memory = store();
  memory.pinned = true;
  persistLocale(id);
  if (memory.id === id) return;
  memory.id = id;
  emit();
  if (typeof window !== "undefined") window.dispatchEvent(new Event("ace-locale"));
}

export function translate(localeId: string, key: MessageKey, values?: Record<string, string | number>) {
  const bag = DICTIONARIES[localeId] ?? EN;
  return interpolate(bag[key] ?? EN[key], values);
}

const ENGLISH = resolveLocale("en");

const LocaleContext = createContext<LocaleContextValue>({
  locale: ENGLISH,
  t: (key, values) => translate("en", key, values),
  setLocaleId,
});

export function LocaleProvider({
  initialLocale = "en",
  children,
}: {
  initialLocale?: string;
  children: ReactNode;
}) {
  const serverLocale = isLocaleId(initialLocale) ? initialLocale : "en";
  const memory = store();
  if (!memory.pinned && memory.id !== serverLocale) {
    memory.id = serverLocale;
  }
  const localeId = useSyncExternalStore(subscribe, getSnapshot, () => serverLocale);
  const locale = resolveLocale(localeId);
  const router = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    root.dir = locale.dir;
    root.lang = locale.code;
    root.classList.toggle("ace-rtl", locale.dir === "rtl");
    document.body?.setAttribute("dir", locale.dir);
    persistLocale(locale.id);
  }, [locale]);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== LOCALE_STORAGE_KEY || !isLocaleId(event.newValue)) return;
      const memory = store();
      if (memory.id === event.newValue) return;
      memory.pinned = true;
      memory.id = event.newValue;
      emit();
      router.refresh();
    }
    function onPick() {
      router.refresh();
    }
    window.addEventListener("storage", onStorage);
    window.addEventListener("ace-locale", onPick);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ace-locale", onPick);
    };
  }, [router]);

  const t = useCallback(
    (key: MessageKey, values?: Record<string, string | number>) => translate(localeId, key, values),
    [localeId],
  );

  const value = useMemo(
    () => ({
      locale,
      t,
      setLocaleId,
    }),
    [locale, t],
  );

  return (
    <LocaleContext.Provider value={value}>
      <div className="flex min-h-full flex-1 flex-col" dir={locale.dir} lang={locale.code}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useI18n() {
  return useContext(LocaleContext);
}

export function T({
  k,
  values,
}: {
  k: MessageKey;
  values?: Record<string, string | number>;
}) {
  const { t } = useI18n();
  return <>{t(k, values)}</>;
}
