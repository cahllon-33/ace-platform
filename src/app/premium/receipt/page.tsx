import type { Metadata } from "next";
import { MembershipLetter } from "@/components/membership-letter";
import { PREMIUM_PRICE } from "@/lib/pricing";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const receipt = (await getText()).pricing.receipt.premium;
  return {
    title: receipt.metaTitle,
    description: receipt.metaDescription,
  };
}

export default async function PremiumReceiptPage() {
  const receipt = (await getText()).pricing.receipt.premium;
  return (
    <MembershipLetter
      planName={receipt.planName}
      price={PREMIUM_PRICE}
      nextHref="/teams?from=premium"
      nextLabel={receipt.nextLabel}
      nextBody={receipt.nextBody}
    />
  );
}
