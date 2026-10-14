import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { SiteShell } from "@/components/site-shell";
import { SITE_LOCALES } from "@/lib/languages";
import { isLocaleId, LOCALE_COOKIE } from "@/lib/locale-pref";
import { getText } from "@/server/locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const instant = false;

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: {
      default: text.home.meta.title,
      template: "%s · A.C.E.",
    },
    description: text.home.meta.description,
    other: {
      google: "notranslate",
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const chosen = jar.get(LOCALE_COOKIE)?.value;
  const localeId = isLocaleId(chosen) ? chosen : "en";
  const locale =
    SITE_LOCALES.find((item) => item.id === localeId) ??
    SITE_LOCALES.find((item) => item.id === "en")!;

  return (
    <html
      lang={locale.code}
      dir={locale.dir}
      translate="no"
      suppressHydrationWarning
      className={`notranslate ${locale.dir === "rtl" ? "ace-rtl " : ""}${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#020203] font-sans text-ace-text">
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ACE_LOCALE=${JSON.stringify(locale.id)}`,
          }}
        />
        <SiteShell initialLocale={locale.id}>{children}</SiteShell>
      </body>
    </html>
  );
}
