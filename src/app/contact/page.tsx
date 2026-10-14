import type { Metadata } from "next";
import { ContactTerminal } from "@/components/contact-terminal";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.desk.contact.meta.title,
    description: text.desk.contact.meta.description,
  };
}

export default function ContactPage() {
  return (
    <main className="ace-desk-page">
      <ContactTerminal />
    </main>
  );
}
