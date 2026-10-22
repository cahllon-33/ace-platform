import type { Metadata } from "next";
import { LegalR49 } from "@/components/legal-r49";
import { PRIVACY } from "@/lib/legal-r49";

export const metadata: Metadata = { title: PRIVACY.title, description: "A.C.E Privacy Policy: Steam sign-in data, match stats, demos and GOTV, cookies, Paddle and your GDPR rights." };

export default function Page() {
  return <LegalR49 doc={PRIVACY} />;
}
