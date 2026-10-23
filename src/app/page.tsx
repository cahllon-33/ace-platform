import { Suspense } from "react";
import { HomeLanding } from "@/components/public/home-landing";
import { SocialLinks } from "@/components/social-links";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<main className="hl" style={{ minHeight: "70vh", background: "#141414" }} />}>
        <HomeLanding />
      </Suspense>
      <SocialLinks variant="community" />
    </>
  );
}
