-- R62: STICKER/BADGE cosmetic kinds + player-facing What's New changelog (additive only).
ALTER TYPE "CosmeticKind" ADD VALUE IF NOT EXISTS 'STICKER';
ALTER TYPE "CosmeticKind" ADD VALUE IF NOT EXISTS 'BADGE';

CREATE TABLE IF NOT EXISTS "ChangelogEntry" (
  "id" TEXT NOT NULL,
  "kind" TEXT NOT NULL DEFAULT 'FEATURE',
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL DEFAULT '',
  "href" TEXT,
  "itemId" TEXT,
  "published" BOOLEAN NOT NULL DEFAULT true,
  "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChangelogEntry_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "ChangelogEntry_itemId_key" ON "ChangelogEntry"("itemId");
CREATE INDEX IF NOT EXISTS "ChangelogEntry_published_publishedAt_idx" ON "ChangelogEntry"("published", "publishedAt");

-- Seed (times = real ship commits, UTC): player-facing features already shipped (idempotent by id).
INSERT INTO "ChangelogEntry" ("id","kind","title","body","href","publishedAt") VALUES
 ('seed-ranks-rp','FEATURE','Ranks & RP','Ten A.C.E ranks with Rank Points earned from ranked matches, plus a public Ranks ladder by season, country and region.','/ranks','2026-10-23 07:16:58'),
 ('seed-my-stats','FEATURE','My Stats','Your own match stats in one place, from verified A.C.E matches. Private to you by default.','/stats','2026-10-23 07:17:38'),
 ('seed-friends-party','FEATURE','Friends & party','Add friends, invite them to a party and queue together from the A.C.E app.',NULL,'2026-10-23 07:27:01'),
 ('seed-match-alerts','FEATURE','Match alerts','The A.C.E app alerts you with sound and a pop-up when your match is found, so you never miss the accept.','/play','2026-10-23 03:54:39'),
 ('seed-auto-update','FEATURE','Automatic app updates','The A.C.E desktop app now updates itself in the background. Restart when prompted to get the newest version.','/download','2026-10-23 07:27:02'),
 ('seed-anticheat','FEATURE','A.C.E Anti-Cheat panel','A dedicated Anti-Cheat page in the app: activate it with one click and see a live status dot. Any detected cheat means an automatic permanent ban.','/anti-cheat','2026-10-23 09:04:36'),
 ('seed-shop','FEATURE','Shop in the app','Browse A.C.E cosmetics (stickers, badges, banners, frames, name colours) right from the app. Cosmetic only, no gameplay effect.','/shop',now())
ON CONFLICT ("id") DO NOTHING;
