export const desk = {
  shop: {
    meta: {
      title: "A.C.E. Marketplace",
      description:
        "Prize-example weapon cards. Not Valve items, not a funded reward, and checkout does not charge a card.",
    },
    heroHonesty:
      "The weapon cards are prize examples. They are not Valve items, they are not in an inventory, and checkout on this page does not charge a card.",
    prizeBanner: "🏆 TOURNAMENT PRIZE EXAMPLE — PREMIUM REWARD SHOWCASE",
    notice:
      "These showcases have no cash value. No skin is delivered, no prize is funded, and the inspect button does not start a purchase.",
    items: {
      lore: {
        name: "Butterfly Knife | Lore",
        tag: "★ COVERT LEADERBOARD DROPS",
        price: "Example only · no cash value",
      },
      jungle: {
        name: "M4A1-S | Welcome to the Jungle",
        tag: "★ CLASSIFIED UPGRADE TIER",
        price: "Example only · no cash value",
      },
      karambit: {
        name: "Karambit | Lore",
        tag: "★ COVERT SPECIAL DROP",
        price: "Example only · no cash value",
      },
      crown: {
        name: "A.C.E. Crown Avatar Frame",
        tag: "Profile Flair",
        price: "Included in Premium Plan or {rp} RP",
      },
      shimmer: {
        name: "Golden Profile Laser Shimmer",
        tag: "Chat Customization",
        price: "Included in Premium Plan or {rp} RP",
      },
      pass: {
        name: "Premium Tournament Golden Pass",
        tag: "League Access Token",
        price: "{rp} RP / Priority Registration Entry",
      },
    },
  },
  support: {
    meta: {
      title: "Support",
      description:
        "A.C.E. help center layout. Anti-Cheat, ranked queues, and billing desks are not live. Ticket prompts do not create cases.",
    },
  },
  contact: {
    meta: {
      title: "Contact",
      description:
        "A.C.E. corporate contact terminal. Form submissions are sandbox mockups and do not send email or store telemetry.",
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
