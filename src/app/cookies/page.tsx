import type { Metadata } from "next";
import { LegalR49 } from "@/components/legal-r49";
import { COOKIES } from "@/lib/legal-r49";

export const metadata: Metadata = { title: COOKIES.title, description: "A.C.E Cookie Policy: strictly necessary cookies only, local storage and Paddle checkout cookies." };

export default function Page() {
  return <LegalR49 doc={COOKIES} />;
}
