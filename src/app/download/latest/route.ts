import { connection } from "next/server";

const REPO = "cahllon-33/ace-desktop-releases";
const FALLBACK = `https://github.com/${REPO}/releases/latest`;

/** Always redirects to the installer (.exe) of the newest published GitHub release, so the download link never goes stale. */
export async function GET() {
  await connection();
  try {
    const r = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "ace-platform" },
      next: { revalidate: 300 },
    });
    if (r.ok) {
      const rel = (await r.json()) as { assets?: { name: string; browser_download_url: string }[] };
      const exe = rel.assets?.find((a) => /^ACE-Setup-.*\.exe$/i.test(a.name)) ?? rel.assets?.find((a) => /\.exe$/i.test(a.name));
      if (exe) return Response.redirect(exe.browser_download_url, 302);
    }
  } catch { /* fall through */ }
  return Response.redirect(FALLBACK, 302);
}
