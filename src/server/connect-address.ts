import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { buildConnectUrl } from "@/lib/queue";

type Lookup = (host: string) => Promise<string | null>;
const v4: Lookup = async (h) => (await lookup(h, { family: 4 }).catch(() => null))?.address ?? null;

/**
 * R48d: steam://connect/<ipv4>:<port>[/<password>]. Hostnames are resolved to IPv4 server-side because some Steam
 * clients only accept an IP; when resolution fails the hostname is kept.
 */
export async function resolvedConnect(host: string, port: number, password?: string | null, resolve: Lookup = v4) {
  const h = host.trim();
  const ip = isIP(h) === 4 ? h : (await resolve(h)) ?? h;
  const address = `${ip}:${port}`;
  return { address, connectUrl: buildConnectUrl(address, password) };
}
