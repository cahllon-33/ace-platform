import type React from "react";
import { RanksTabs } from "@/components/ranks-tabs";

export default function RanksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto w-full max-w-[90rem] px-4 pt-8 sm:px-6">
        <RanksTabs />
      </div>
      {children}
    </>
  );
}
