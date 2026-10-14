import Link from "next/link";

export function PremiumReceiptLink({
  label,
  ariaLabel,
  href = "/premium/receipt",
}: {
  label: string;
  ariaLabel?: string;
  href?: "/plus/receipt" | "/premium/receipt";
}) {
  return (
    <Link className="ace-plan-cta" href={href} aria-label={ariaLabel ?? label}>
      {label}
    </Link>
  );
}
