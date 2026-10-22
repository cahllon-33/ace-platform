import type { Metadata } from "next";
import { LegalR49 } from "@/components/legal-r49";
import { REFUNDS } from "@/lib/legal-r49";

export const metadata: Metadata = { title: REFUNDS.title, description: "A.C.E Refund Policy: 14-day refunds for plans and cosmetics, tournament entry fees, processed by Paddle." };

export default function Page() {
  return <LegalR49 doc={REFUNDS} />;
}
