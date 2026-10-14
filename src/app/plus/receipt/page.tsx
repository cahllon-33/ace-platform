import type { Metadata } from "next";
import { MembershipLetter } from "@/components/membership-letter";
import { PLUS_PRICE } from "@/lib/pricing";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const receipt = (await getText()).pricing.receipt.plus;
  return {
    title: receipt.metaTitle,
    description: receipt.metaDescription,
  };
}

export default async function PlusReceiptPage() {
  const receipt = (await getText()).pricing.receipt.plus;
  return (
    <MembershipLetter
      planName={receipt.planName}
      price={PLUS_PRICE}
      nextHref="/"
      nextLabel={receipt.nextLabel}
      nextBody={receipt.nextBody}
    />
  );
}
