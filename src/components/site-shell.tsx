import { Suspense, type ReactNode } from "react";
import { AuthBar } from "@/components/auth-bar";
import { ChampionshipAtmosphere } from "@/components/championship-atmosphere";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { FinalCtaSlot } from "@/components/final-cta-slot";
import { LocaleProvider, T } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SupportChatLazy } from "@/components/support-chat-lazy";
import { ToastHost } from "@/components/toast-host";
import { TextProvider } from "@/components/text-provider";
import { clientText, textFor } from "@/lib/i18n/text";
import { DICTIONARIES, EN, type MessageBag } from "@/lib/i18n";
import { uiFor } from "@/lib/i18n/ui";
import { UiProvider } from "@/components/use-ui";

export function SiteShell({
  initialLocale = "en",
  children,
}: {
  initialLocale?: string;
  children: ReactNode;
}) {
  return (
    <LocaleProvider initialLocale={initialLocale} messages={{ ...EN, ...(DICTIONARIES[initialLocale] ?? {}) } as MessageBag}>
      <UiProvider ui={uiFor(initialLocale)}>
      <TextProvider text={clientText(textFor(initialLocale))}>
      <ChampionshipAtmosphere />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ace-gold focus:px-4 focus:py-2 focus:text-ace-void"
      >
        <T k="skipToContent" />
      </a>
      {/* Rendered before streamed content so the fixed consent tray paints with the shell. */}
      <CookieConsentBanner />
      <Suspense fallback={<div className="h-16 border-b border-[#D4AF37]/15 bg-[#08090D]" />}>
        <SiteHeader
          auth={
            <Suspense fallback={<div className="h-11 w-40" aria-hidden="true" />}>
              <AuthBar />
            </Suspense>
          }
        />
      </Suspense>
      <div id="main-content" className="relative z-10 flex flex-1 flex-col">
        {children}
      </div>
      <FinalCtaSlot />
      <SiteFooter />
      <ToastHost />
      <SupportChatLazy />
      </TextProvider>
      </UiProvider>
    </LocaleProvider>
  );
}
