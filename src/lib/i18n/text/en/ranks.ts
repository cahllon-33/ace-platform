export const ranks = {
  "rpRules": {
    "kicker": "A.C.E RATING POINTS RULES",
    "title": "How Rating Points move",
    "lede": "Rules version {version}. Every new player starts at {start} RP in tier 3, {tier}. The ladder is slow on purpose: each tier above the middle takes more wins than the one before it.",
    "tableTitle": "The rules",
    "colRule": "Rule",
    "colValue": "Value",
    "rStart": "Starting rating",
    "vStart": "{start} RP, tier 3 ({tier})",
    "rWin": "Win against an equal team",
    "vWin": "+{win} RP",
    "rLoss": "Loss against an equal team",
    "vLoss": "−{loss} RP",
    "rOdds": "Opponent strength",
    "vOdds": "Your rating is compared with the other team's average rating (scale {scale}). Beating a stronger team pays more and losing to it costs less; against a weaker team it is the other way round.",
    "rClamp": "Limits per match",
    "vClamp": "A win gives +{winMin} to +{winMax} RP. A loss costs −{lossMin} to −{lossMax} RP.",
    "rTier": "High-tier wins",
    "vTier": "Win gains are multiplied by {t7} in tiers 7–9 and by {t10} in tier 10 ({top}). Losses are never reduced.",
    "rMvp": "Match MVP",
    "vMvp": "The player with the most kills; ties go to more damage, then fewer deaths. +{mvp} RP on a win, {mvp} RP less lost on a loss, never beyond the per-match limits. Coming soon: the server does not record kills yet, so no MVP bonus is applied today.",
    "rPlacement": "Placement",
    "vPlacement": "Your first {n} matches. During placement your rating cannot rise above tier {maxTier} ({cap} RP).",
    "rDraw": "Draw",
    "vDraw": "0 RP for everyone.",
    "rAbandon": "Abandoning or leaving a match",
    "vAbandon": "−{abandon} RP, whatever the result, and no MVP bonus.",
    "rLimits": "Rating range",
    "vLimits": "{floor} to {ceiling} RP",
    "rDecay": "Inactivity",
    "vDecay": "No decay. Your rating does not drop while you are away.",
    "rPaid": "Paid plans",
    "vPaid": "No effect. Free, Plus and Premium players move by exactly the same rules.",
    "tierTableTitle": "Per tier, against an equal team",
    "colTier": "Tier",
    "colFloor": "From",
    "colWin": "Win",
    "colLoss": "Loss",
    "examplesTitle": "Worked examples",
    "ex1": "From {start} to {elite} RP ({top}) against equal teams, with wins only: {w1} wins at +15 through tier 6, then {w2} wins at +{win7} through tiers 7–9. That is {total} wins in total.",
    "ex2": "Every loss along the way adds more wins. In tiers 7–9 a win gives +{win7} but a loss still costs −{loss}, so you need to win at least {breakEven}% of equal matches to keep climbing.",
    "ex3": "Against a team averaging 200 RP more than you, a win gives +{strongWin} and a loss costs −{strongLoss}.",
    "ex4": "Against a team averaging 200 RP less than you, a win gives +{weakWin} and a loss costs −{weakLoss}.",
    "note": "These figures are worked out by the same code that applies a verified match result. They are examples, not stored matches."
  },
  "premiumCodex": {
    "kicker": "PREMIUM RANK CODEX",
    "title": "Premium rank codex",
    "lede": "Ten illustrated crystal emblems, one for each rank. This is cosmetic profile art on the same Rating Points ladder as the standard ranks. It changes no rating, no matchmaking and no queue.",
    "cosmetic": "Cosmetic art · same RP ladder · A.C.E Premium $7/month only",
    "imgAlt": "{name} Premium rank art, level {level}"
  },
  "meta": {
    "title": "Competitive Ranks",
    "description": "The ten A.C.E. ranks, from Iron Recruit to A.C.E. Legend, with divisions and rating floors."
  },
  "hero": {
    "kicker": "CALIBRATION",
    "title": "Competitive Ranks",
    "lede": "Ten tiers from Recruit to A.C.E. Legend, each with divisions {divisions}. Drag or use the arrow keys to rotate an emblem. Signed in, you see your own rating; otherwise each tier floor."
  },
  "codexLink": "Open the Calibration Codex",
  "document": {
    "title": "Ten-tier calibration document",
    "body": "Engine names are the official ladder. Crystal aliases are lobby art. Win-rate chips on the board are showcase figures until ranked matchmaking launches. Paid cosmetics never move a player between these floors.",
    "level": "LEVEL {level} · {crystal}",
    "detail": "Minimum rating {rating}. Material study: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "ENTRY CALIBRATION",
      "material": "Raw Iron / Obsidian plate texture"
    },
    "2": {
      "tagline": "FIELD OPERATIVE",
      "material": "Brushed Bronze crystal core"
    },
    "3": {
      "tagline": "FORWARD EDGE",
      "material": "Rose Gold shards with dark deep red undertones"
    },
    "4": {
      "tagline": "PRECISION CRAFT",
      "material": "Chrome Silver diamond shard block"
    },
    "5": {
      "tagline": "SEASONED CORE",
      "material": "Aged Brass molten core aura"
    },
    "6": {
      "tagline": "GOLD STANDARD",
      "material": "Vibrant Gold shard crystal flare"
    },
    "7": {
      "tagline": "CYAN ASCENT",
      "material": "Cyan Blue Plasma crystal matrix"
    },
    "8": {
      "tagline": "SAPPHIRE STORM",
      "material": "Sapphire Blue hyper-glowing lightning crystal core"
    },
    "9": {
      "tagline": "VOID CROWN",
      "material": "Deep Cosmic Void Purple stellar shard core"
    },
    "10": {
      "tagline": "THE ELITE OF ELITE",
      "material": "Luxury Molten Radiant Gold Crown framework"
    }
  },
  "board": {
    "selectEmblem": "Select A.C.E. {name} rank emblem, level {level}",
    "emblemAlt": "A.C.E. Custom 3D Crystalline Level {level} {crystal} {name} emblem profile badge",
    "emblemAltLegend": "A.C.E. Custom 3D Crystalline Level {level} Emblem Profile Badge",
    "premium": "TOP TIER"
  },
  "division": {
    "label": "Division {division}",
    "select": "Select division {division}",
    "summary": "{divisions} Divisions Each / {levels} Levels Total"
  },
  "card": {
    "rank": "Rank {level}",
    "targetWinRate": "{winRate} target win-rate",
    "floor": "Floor"
  },
  "turntable": {
    "stageLabel": "{name} orbital emblem. Drag to rotate.",
    "dragToRotate": "DRAG TO ROTATE",
    "rankSystem": "RANK SYSTEM"
  },
  "emblem": {
    "kicker": "Calibration mark",
    "rankLabel": "Rank {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} placement marks are filled from stored wins and losses. These nodes do not start a match."
  },
  "premiumRanks": {
    "kicker": "PREMIUM RANKS",
    "plan": "A.C.E PREMIUM · $7/month only",
    "title": "Premium rank art",
    "lede": "The original illustrated A.C.E. rank set: ten crystal emblems with III/II/I divisions, the rating protocol, the Legend detail card and the drag-to-rotate 3D viewer. It is profile art for Premium members. It reads the same Rating Points ladder as the standard ranks and gives no competitive advantage.",
    "demo": "Demo values: progress, win-rate and division figures on this board are samples, not live stats. When you are signed in, the rating shown is your stored rating.",
    "locked": "Coming soon: checkout does not exist yet, so no account is Premium today. The server applies Premium rank art to a profile only when its stored plan is Premium.",
    "standardKicker": "STANDARD RANKS",
    "standardNote": "Every account wears these 3D vector emblems.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Rank art on your profile",
    "pickerStandard": "Standard",
    "pickerPremium": "Premium",
    "pickerLocked": "Premium rank art is for A.C.E Premium ($7/month). Coming soon: checkout does not exist yet.",
    "pickerSaved": "Saved.",
    "pickerFailed": "Not saved. Premium rank art requires A.C.E Premium."
  }
}as const;
