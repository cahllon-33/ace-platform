import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
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
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-white">{copy.title}</h1>
      <p className="mt-4 text-ace-muted">
        {reason === "steam-not-configured"
          ? copy.notConfigured
          : reason === "steam-unavailable"
            ? copy.unavailable
            : copy.unverified}
      </p>
      <div className="mt-8">
        <ButtonLink href="/">{copy.returnHome}</ButtonLink>
      </div>
    </main>
  );
}
