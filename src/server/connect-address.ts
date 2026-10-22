import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { buildConnectUrl } from "@/lib/queue";

type Lookup = (host: string) => Promise<string | null>;
const v4: Lookup = async (h) => (await lookup(h, { family: 4 }).catch(() => null))?.address ?? null;

/**
 * R48e: steam://run/730//+connect%20<ipv4>:<port>[%20+password%20<pw>]. Hostnames are resolved to IPv4 server-side because some Steam
 * clients only accept an IP; when resolution fails the hostname is kept.
 */
export async function resolvedConnect(host: string, port: number, password?: string | null, resolve: Lookup = v4) {
  const h = host.trim();
  const ip = isIP(h) === 4 ? h : (await resolve(h)) ?? h;
  const address = `${ip}:${port}`;
  return { address, connectUrl: buildConnectUrl(address, password) };
}

type GotvRaw = { ip: string; ports: { gotv?: number | null }; cs2_settings?: { enable_gotv?: boolean; tv_password?: string } | null };

/** R48g: spectator link to GOTV (steam://run/730//+connect%20<ip>:<gotvport>[%20+password%20<tv_password>]); null when GOTV is off. */
export async function resolvedGotv(raw: GotvRaw | null, resolve?: Lookup): Promise<string | null> {
  if (!raw?.ip || !raw.ports?.gotv || !raw.cs2_settings?.enable_gotv) return null;
  return (await resolvedConnect(raw.ip, raw.ports.gotv, raw.cs2_settings.tv_password, resolve)).connectUrl;
}
