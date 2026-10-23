import { Suspense } from "react";
import { LobbyHome } from "@/components/public/lobby-home";
import { HomeHeroV2 } from "@/components/public/home-v2";
import { SocialLinks } from "@/components/social-links";
import { getUi } from "@/server/locale";

/** Static hero shell shown while the personalised home streams in, so the headline paints with the first HTML. */
async function HomeShellFallback() {
  const ui = await getUi();
  return (
    <main>
      <HomeHeroV2 ui={ui} signedIn={false} actions={<div className="h39-actions-ph" aria-hidden="true" />} />
    </main>
  );
}

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HomeShellFallback />}>
        <LobbyHome />
      </Suspense>
      <SocialLinks variant="community" />
    </>
  );
}
