import type { Metadata } from "next";
import { RulesLocaleDocument } from "@/components/rules-locale-document";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.rules.meta.title,
    description: text.rules.meta.description,
  };
}

export default function RulesPage() {
  return (
    <main className="px-4 py-14 sm:px-6">
      <RulesLocaleDocument />
    </main>
  );
}
