import { describe, expect, it } from "vitest";
import { parseBroadcastEmbed, readBroadcastConfig } from "@/lib/broadcast";

describe("broadcast embed", () => {
  it("is off air when unset", () => {
    expect(readBroadcastConfig({})).toEqual({ state: "off-air", next: null });
  });

  it("accepts Twitch and YouTube embed players", () => {
    expect(parseBroadcastEmbed("https://player.twitch.tv/?channel=ace&parent=example.com")?.provider).toBe("twitch");
    expect(parseBroadcastEmbed("https://www.youtube.com/embed/abc123")?.provider).toBe("youtube");
  });

  it("rejects other hosts, plain http, and non-embed paths", () => {
    expect(parseBroadcastEmbed("https://evil.example/embed/x")).toBeNull();
    expect(parseBroadcastEmbed("http://www.youtube.com/embed/abc")).toBeNull();
    expect(parseBroadcastEmbed("https://www.youtube.com/watch?v=abc")).toBeNull();
    expect(parseBroadcastEmbed("https://player.twitch.tv/")).toBeNull();
    expect(parseBroadcastEmbed("javascript:alert(1)")).toBeNull();
  });

  it("keeps the next-broadcast note when off air", () => {
    expect(readBroadcastConfig({ ACE_BROADCAST_NEXT: "Saturday 18:00 UTC" })).toEqual({
      state: "off-air",
      next: "Saturday 18:00 UTC",
    });
  });
});

import { parseEnvFeeds } from "./broadcast";
describe("parseEnvFeeds", () => {
  it("returns nothing for empty input", () => {
    expect(parseEnvFeeds(undefined)).toEqual([]);
    expect(parseEnvFeeds("")).toEqual([]);
  });
  it("keeps only valid https embeds and caps at 16", () => {
    const ok = "Main|https://www.youtube.com/embed/abc123";
    const feeds = parseEnvFeeds([ok, "Bad|http://evil.example/x", "nourl"].join(";"));
    expect(feeds).toHaveLength(1);
    expect(feeds[0].title).toBe("Main");
    expect(feeds[0].source).toBe("env");
    expect(parseEnvFeeds(Array(20).fill(ok).join("\n")).length).toBeLessThanOrEqual(16);
  });
});
