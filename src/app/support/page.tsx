import type { Metadata } from "next";
import { SupportHub } from "@/components/support-hub";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.desk.support.meta.title,
    description: text.desk.support.meta.description,
  };
}

export default function SupportPage() {
  return (
    <main className="ace-desk-page">
      <SupportHub />
    </main>
  );
}
