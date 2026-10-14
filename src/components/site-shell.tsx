import { Suspense, type ReactNode } from "react";
import { AuthBar } from "@/components/auth-bar";
import { ChampionshipAtmosphere } from "@/components/championship-atmosphere";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { LocaleProvider, T } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TextProvider } from "@/components/text-provider";
import { clientText, textFor } from "@/lib/i18n/text";

export function SiteShell({
  initialLocale = "en",
  children,
}: {
  initialLocale?: string;
  children: ReactNode;
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <TextProvider text={clientText(textFor(initialLocale))}>
      <ChampionshipAtmosphere />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ace-gold focus:px-4 focus:py-2 focus:text-ace-void"
      >
        <T k="skipToContent" />
      </a>
      <Suspense fallback={<div className="h-[4.25rem] border-b border-[#FFD700]/30 bg-[#020203]" />}>
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
      <SiteFooter />
      <CookieConsentBanner />
      </TextProvider>
    </LocaleProvider>
  );
}
