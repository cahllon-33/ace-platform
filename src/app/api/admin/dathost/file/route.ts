import { NextResponse } from "next/server";
import { readIsSteamOwner } from "@/server/admin-gate";
import { dathost, DathostError, readDathostConfig, safeServerPath } from "@/server/dathost";

/** Owner-only file download (GET ?path=) and upload (POST multipart: path dir + file). Streams through; credentials stay server-side. */
export async function GET(request: Request) {
  if (!(await readIsSteamOwner())) return NextResponse.json({ ok: false, error: "owner-only" }, { status: 403 });
  const cfg = readDathostConfig();
  const p = safeServerPath(new URL(request.url).searchParams.get("path") ?? "");
  if (!cfg || !p || p.endsWith("/")) return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  try {
    const res = await dathost(cfg).downloadFile(p);
    const name = p.split("/").pop() || "file";
    return new NextResponse(res.body, {
      headers: { "Content-Type": "application/octet-stream", "Content-Disposition": `attachment; filename="${name.replace(/[^\w.\-]/g, "_")}"`, "Cache-Control": "no-store" },
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof DathostError ? e.message : "download-failed" }, { status: 502 });
  }
}

const MAX_UPLOAD = 100 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await readIsSteamOwner())) return NextResponse.json({ ok: false, error: "owner-only" }, { status: 403 });
  const cfg = readDathostConfig();
  if (!cfg) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 500 });
  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  const dir = safeServerPath(String(form?.get("dir") ?? ""));
  if (!(file instanceof File) || dir === null) return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  if (file.size > MAX_UPLOAD) return NextResponse.json({ ok: false, error: "File is larger than 100 MB." }, { status: 413 });
  const name = file.name.replace(/[/\\]/g, "_");
  const target = safeServerPath(`${dir.replace(/\/?$/, "/")}${name}`.replace(/^\//, ""));
  if (!target) return NextResponse.json({ ok: false, error: "bad-path" }, { status: 400 });
  try {
    await dathost(cfg).uploadFile(target, file, name);
    return NextResponse.json({ ok: true, path: target });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof DathostError ? e.message : "upload-failed" }, { status: 502 });
  }
}
