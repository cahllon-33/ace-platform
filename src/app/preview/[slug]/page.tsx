import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PREVIEW_SLUGS, isPreviewSlug } from "@/lib/preview";
import { getText } from "@/server/locale";

export const instant = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PREVIEW_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const text = await getText();
  if (!isPreviewSlug(slug)) {
    return { title: text.features.preview.fallbackTitle };
  }
  return { title: text.features.preview.pages[slug].title };
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params;
  if (!isPreviewSlug(slug)) {
    notFound();
  }
  const text = await getText();
  const page = text.features.preview.pages[slug];

  return (
    <main className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.22em] text-ace-gold">
        {text.features.preview.kicker}
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-white">{page.title}</h1>
      <p className="mt-4 text-lg leading-8 text-ace-muted">{page.body}</p>
      <Link href="/" className="mt-8 inline-flex text-ace-gold-bright">
        {text.features.preview.returnHome}
      </Link>
    </main>
  );
}
