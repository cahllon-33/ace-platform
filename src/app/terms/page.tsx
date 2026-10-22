import type { Metadata } from "next";
import { LegalR49 } from "@/components/legal-r49";
import { TERMS } from "@/lib/legal-r49";

export const metadata: Metadata = { title: TERMS.title, description: "A.C.E Terms of Service: accounts, fair play, plans, cosmetics, non-cash tournament prizes and Paddle payments." };

export default function Page() {
  return <LegalR49 doc={TERMS} />;
}
