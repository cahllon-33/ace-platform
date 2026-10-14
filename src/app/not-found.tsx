import Link from "next/link";
import { getText } from "@/server/locale";

export default async function NotFound() {
  const copy = (await getText()).home.notFound;

  return (
    <main className="ace-not-found relative flex min-h-[70vh] flex-1 flex-col items-center justify-center bg-[#020203] px-4 py-24 text-center">
      <p className="font-mono text-xs tracking-[0.28em] text-[#FFD700]">{copy.kicker}</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#F5F3EC] sm:text-5xl">{copy.title}</h1>
      <p className="ace-not-found-sub mt-6 max-w-xl text-lg leading-8">{copy.body}</p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-[#FFD700] px-8 text-sm font-semibold tracking-[0.14em] text-[#020203] shadow-[0_0_32px_rgba(255,215,0,0.35)]"
        aria-label={copy.homeAria}
      >
        {copy.cta}
      </Link>
    </main>
  );
}
