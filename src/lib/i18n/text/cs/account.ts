import type { TextBag } from "../types";

export const account: TextBag["account"] = {
  dashboard: {
    meta: {
      title: "Velitelský pult",
    },
    kicker: "Ověřeno",
    title: "Velitelský pult",
    lede: "Přihlášeno přes Steam OpenID. Relace je uložena v souboru cookie HttpOnly, ne v localStorage. Rankingové hledání zůstává zavřené, dokud anti-cheat nebude skutečný.",
    eliteBadge: "ELITA",
    stats: {
      accountStatus: "Stav účtu",
      subscription: "Předplatné",
      rank: "Hodnost A.C.E.",
      ratingPoints: "Body hodnocení",
      wins: "Výhry",
      losses: "Prohry",
      accountId: "Interní ID účtu",
    },
    accountStatuses: {
      ACTIVE: "Aktivní",
      SUSPENDED: "Pozastavený",
      BANNED: "Zablokovaný",
      TEMP_BANNED: "Dočasně zablokovaný",
      PERM_BANNED: "Trvale zablokovaný",
      UNDER_REVIEW: "Probíhá kontrola",
    },
    tiers: {
      FREE: "Zdarma",
      PLUS: "Plus",
      PREMIUM: "Premium",
    },
    roles: {
      CAPTAIN: "Kapitán",
      PLAYER: "Hráč",
    },
    settings: {
      title: "PROFIL NASTAVENÍ PŘEHLEDU",
      billingNotLive: "Vyúčtování není v provozu. Všechny účty zůstávají v tarifu FREE, dokud nebude existovat pokladna.",
      cancelReason: "Neexistuje žádné účtované předplatné, které by bylo možné zrušit. Pokladna není implementována.",
      cancelButton: "Zrušit předplatné",
    },
    rankedReason: "Rankingové párování je odepřeno, dokud nebude existovat ověřená integrace anti-cheatu.",
    rankedButton: "Najít rankingový zápas",
    roster: {
      title: "Soupiska 5v5",
      body: "Jeden kapitán. Čtyři pozvánky. Kapitáni zvou jiná ID účtů A.C.E., která vznikají až po ověřeném přihlášení přes Steam.",
    },
    pendingInvites: "Čekající pozvánky",
  },
  forms: {
    requestFailed: "Požadavek selhal.",
    createTeam: {
      acceptRequired: "Chcete-li pokračovat, přijměte Podmínky služby, licenční smlouvu anti-cheatu (EULA) a Zásady ochrany soukromí.",
      failed: "Tým se nepodařilo založit.",
      nameLabel: "Název nového týmu 5v5",
      submitAria: "Založit nový tým 5v5",
      submit: "Založit tým",
    },
    invite: {
      failed: "Pozvánka selhala.",
      label: "Pozvat volného hráče přes SteamID nebo ID účtu A.C.E.",
      submitAria: "Odeslat týmovou pozvánku",
      submit: "Odeslat pozvánku",
    },
  },
  profile: {
    meta: {
      notFoundTitle: "Profil hráče",
      title: "{name} · profil A.C.E.",
      description: "Složka hráče A.C.E. Relace Plus a Premium odemykají grafy trendů telemetrie.",
    },
    kicker: "Identita hráče",
    bannerPlaceholder: "Zástupný banner Steam · nejde o grafiku Valve",
    levelBadge: "ÚROVEŇ {level}",
    premiumBadge: "PREMIUM",
    rosterLevel: "Úroveň v soupisce {level}.",
    trend: {
      title: "Výkonnostní trend soutěžního hodnocení",
      note: "Body hodnocení napříč po sobě jdoucími záznamy historie zápasů.",
    },
    combat: {
      title: "Podrobná matice bojových dat",
      kills: "Celkem zabití",
      deaths: "Celkem smrtí",
      kd: "Vypočtené K/D",
      headshots: "Celkem headshotů",
      headshotPct: "Rozsah % headshotů",
      knifeKills: "Speciální zabití nožem",
    },
    weapon: {
      title: "Specializace na typickou zbraň",
      note: "Hlavní kalibrovaná zbraňová platforma",
      accuracy: "Hodnocení přesnosti",
      kills: "Celkem zabití zbraní",
    },
    gear: {
      title: "Specifikace počítače",
      cpu: "CPU",
      gpu: "GPU",
      monitor: "Obnovovací frekvence monitoru (Hz)",
      mouse: "Model myši",
      dpi: "Aktivní nastavení DPI",
    },
    networksTitle: "Odkaz na profil Steam",
    back: "Zpět na soupisku klanu",
  },
  networks: {
    note: "Odkaz zadaný zde zůstává v tomto prohlížeči a neukládá se. A.C.E. nikdy nežádá heslo ke službě Steam.",
    labels: {
      steam: "Profil Steam",
    },
    open: "Otevřít {label} >",
  },
  ratingTrend: {
    chartAria: "Výkonnostní trend soutěžního hodnocení",
    pointAria: "Zápas {match}: hodnocení {rating}",
    axisLabel: "Z{match}",
    idle: "Najeďte na uzel a prohlédněte si záznam hodnocení.",
    readout: "Zápas {match} · hodnocení {rating}",
  },
  loginError: {
    meta: {
      title: "Chyba přihlášení",
    },
    title: "Přihlášení přes Steam nebylo dokončeno",
    notConfigured: "Steam OpenID zatím není na tomto serveru nakonfigurováno. A.C.E. nikdy nežádá heslo ke službě Steam.",
    unavailable: "Steam neodpověděl na ověřovací požadavek. Zkuste to za chvíli znovu. A.C.E. nikdy nežádá heslo ke službě Steam.",
    unverified: "Zpětné volání OpenID se na serveru nepodařilo ověřit. A.C.E. nikdy nežádá heslo ke službě Steam.",
    returnHome: "Zpět domů",
  },
};
