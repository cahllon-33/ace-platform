import { connection } from "next/server";
import { readPresence } from "@/server/presence";

export async function GET() {
  await connection();
  const presence = await readPresence();
  return Response.json({
    count: presence.count,
    unavailable: presence.unavailable,
  });
}
