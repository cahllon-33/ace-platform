import { Suspense } from "react";
import { LocaleLoading } from "@/components/home-locale-actions";
import { LobbyHome } from "@/components/public/lobby-home";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[60vh] items-center justify-center px-4">
          <LocaleLoading />
        </main>
      }
    >
      <LobbyHome />
    </Suspense>
  );
}
