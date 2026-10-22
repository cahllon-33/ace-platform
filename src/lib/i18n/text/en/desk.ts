export const desk = {
  shop: {
    meta: {
      title: "A.C.E Marketplace",
      description:
        "Championship reward cards. The shop and rewards open soon.",
    },
    heroHonesty:
      "A first look at upcoming championship rewards. The shop opens soon; nothing is charged today.",
    prizeBanner: "🏆 CHAMPIONSHIP REWARDS · COMING SOON",
    notice:
      "These showcases are previews with no cash value. Nothing is delivered or charged, and the inspect button does not start a purchase.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ COVERT LEADERBOARD DROPS",
        price: "Coming soon",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ CLASSIFIED UPGRADE TIER",
        price: "Coming soon",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ COVERT SPECIAL DROP",
        price: "Coming soon",
      },
      crown: {
        name: "A.C.E Crown Avatar Frame",
        tag: "Profile Flair",
        price: "Coming soon",
      },
      shimmer: {
        name: "Golden Profile Laser Shimmer",
        tag: "Chat Customization",
        price: "Coming soon",
      },
      pass: {
        name: "Tournament Golden Pass",
        tag: "League Access Token",
        price: "Coming soon",
      },
    },
  },
  support: {
    meta: {
      title: "Support",
      description:
        "A.C.E help center. Anti-cheat, ranked and billing desks open with the competitive beta.",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "Contact A.C.E. The online form opens soon.",
    },
  },
  contactEmail: {
    label: "SET VERIFIED TELEMETRY EMAIL",
    hintSignedIn:
      "Saves the signed-in account only. No confirmation message is sent, so the address is not verified.",
    hintSignedOut: "Sign in with Steam to save a contact email on your account.",
    saving: "SAVING",
    save: "SAVE CONTACT EMAIL",
    results: {
      signInFirst: "Sign in with Steam before saving a contact email.",
      invalid: "Enter a single email address, or leave the field empty to clear it.",
      failed: "That address is already saved on another account, or the database is unavailable.",
      saved: "Contact address saved on this account. No confirmation message was sent, so it is not verified.",
      cleared: "Contact address cleared.",
    },
  },
} as const;
