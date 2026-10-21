import type { Metadata } from "next";
import { ToastOnMount } from "@/components/toast-triggers";
import Link from "next/link";
import { STEAM_AUTH_HREF } from "@/lib/site";
import "../status-page.css";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return { title: text.account.loginError.meta.title };
}

export const instant = false;

export default async function LoginErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  const text = await getText();
  const copy = text.account.loginError;
  return (
    <main className="sp40">
      <ToastOnMount kind="authFailed" />
      <div className="sp40-glow" aria-hidden="true" />
      <p className="sp40-big" aria-hidden="true">!</p>
      <p className="sp40-code">STEAM · OPENID</p>
      <h1 className="sp40-title">{copy.title}</h1>
      <p className="sp40-body">
        {reason === "steam-not-configured"
          ? copy.notConfigured
          : reason === "steam-unavailable"
            ? copy.unavailable
            : copy.unverified}
      </p>
      <div className="sp40-actions">
        <Link href="/" className="sp40-primary">{copy.returnHome}</Link>
        {reason === "steam-not-configured" ? null : <a href={STEAM_AUTH_HREF} className="sp40-ghost">Steam</a>}
      </div>
    </main>
  );
}
