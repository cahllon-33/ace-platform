import type { Ui } from "./en";

export const UI_SV: Ui = {
  "nav": {
    "home": "Hem",
    "play": "Spela",
    "ranks": "Rang",
    "tournaments": "Turneringar",
    "leaderboard": "Topplista",
    "teams": "Lag",
    "getPremium": "Skaffa Premium",
    "more": "Mer",
    "maps": "Kartor",
    "prizes": "Priser",
    "shop": "Butik",
    "rules": "Regler",
    "antiCheat": "Anti-fusk",
    "features": "Funktioner",
    "pricing": "Priser & planer",
    "compete": "Tävla",
    "explore": "Utforska"
  },
  "footer": {
    "legalLine": "© 2026 A.C.E. Competitions Ltd. Oberoende plattform utan koppling till Valve. Counter-Strike och CS2 är varumärken som tillhör Valve Corporation."
  },
  "soon": {
    "label": "Kommer snart"
  },
  "cta": {
    "kicker": "Säsong 1",
    "title": "Redo att tävla?",
    "body": "Koppla Steam, kalibrera och klättra.",
    "play": "Spela A.C.E",
    "ranks": "Utforska rangerna"
  },
  "status": {
    "title": "Plattformsstatus",
    "steam": "Inloggning med Steam OpenID",
    "shield": "A.C.E Shield · driftsättningsfas",
    "servers": "Tävlingsservrar · tävlingsbeta",
    "billing": "Betalintegration",
    "available": "Tillgänglig",
    "inDevelopment": "Under utveckling",
    "comingSoon": "Kommer snart",
    "designed": "Utformad"
  },
  "ranksTabs": {
    "label": "Rang",
    "tiers": "Nivåer och divisioner",
    "codex": "Kalibreringsguide"
  },
  "maps": {
    "kicker": "Tävlingens kartpool",
    "title": "Kartor & sändningar",
    "lede": "Sju kartor utgör A.C.E:s tävlingspool. Lagen bannar och väljer från listan under kartvetot i regelboken. Turneringssändningar visas på skärmen nedan.",
    "rulebook": "Läs veto-reglerna",
    "screen": "Sändningsskärm",
    "offAir": "Ingen sändning",
    "noBroadcast": "Ingen sändning pågår just nu.",
    "nextLabel": "Nästa sändning",
    "notScheduled": "meddelas här snart",
    "embeddedFrom": "Sänds från {provider}.",
    "pool": "Aktiv kartpool",
    "poolMeta": "{count} kartor · BO1 / BO3-veto",
    "mapLabel": "Karta {n}",
    "settings": {
      "dust": "Ökenstad",
      "mirage": "Marknadskvarter",
      "inferno": "Gammal by",
      "nuke": "Industrianläggning",
      "ancient": "Djungelruiner",
      "anubis": "Kanaltempel",
      "train": "Bangård"
    },
    "notes": {
      "dust": "Långa siktlinjer på A, trånga mittdörrar.",
      "mirage": "Mittkontrollen avgör de flesta ronderna.",
      "inferno": "Smala passager och granattunga anfall.",
      "nuke": "Staplade siter och snabba vertikala rotationer.",
      "ancient": "Trycket från mitten mot B formar halvleken.",
      "anubis": "Vattenmitt och öppna B-anfall.",
      "train": "Skydd mellan vagnarna och långa A-linjer."
    }
  },
  "prizes": {
    "kicker": "Mästerskapspriser",
    "title": "Priser",
    "lede": "Prisuppställningen vi förbereder för säsong 1:s mästare. Prispotter bekräftas på varje evenemangssida när de offentliggörs, enligt avsnitt 18 i regelboken.",
    "rulebook": "Prisregler",
    "cardKicker": "Legendarisk belöning",
    "slots": {
      "first": "1:a plats · per spelare",
      "second": "2:a plats · per spelare",
      "mvp": "MVP-pris"
    },
    "facts": {
      "pool": "Prispott",
      "items": "Belöningar",
      "delivery": "Leverans",
      "season": "Säsong"
    },
    "factValues": {
      "season": "Säsong 1"
    }
  },
  "rules": {
    "kicker": "A.C.E:s tävlingsregelbok",
    "title": "Tävlingsregler",
    "version": "Version {version} · gäller från {date}",
    "intro": "Reglerna för varje A.C.E-tävling. Punkter märkta ”Gäller vid driftsättning” träder i kraft när systemet de bygger på lanseras.",
    "pending": "Gäller vid driftsättning",
    "contents": "Innehåll",
    "penalties": {
      "offence": "Förseelse",
      "first": "Första förseelsen",
      "repeat": "Upprepad förseelse",
      "rule": "Punkt"
    },
    "englishNote": "Punkternas text visas på engelska; den engelska versionen gäller.",
    "sections": [
      "Omfattning och definitioner",
      "Behörighet",
      "Konton och identitet",
      "Lag och trupper",
      "Lagkaptener",
      "Kartpool och veto",
      "Matchens genomförande",
      "Matchinställningar",
      "Server- och tekniska problem",
      "Pauser",
      "Frånkopplingar",
      "Walkover och uteblivande",
      "Uppförande",
      "Fusk och tävlingens integritet",
      "Tvister och överklaganden",
      "Påföljder",
      "Sändning",
      "Priser",
      "Ändringar"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Anti-fusk",
    "lede": "A.C.E Shield är integritetssystemet som byggs för varje A.C.E-match: klient-, server-, match- och beteendekontroller som samverkar, med integriteten i första rummet.",
    "statusLabel": "Driftsättningsfas",
    "pillarsTitle": "Arkitekturens pelare",
    "pillars": {
      "client": {
        "title": "Klientintegritet",
        "body": "En lätt klient kontrollerar spelmiljön under matchen och rapporterar tecken på manipulation."
      },
      "server": {
        "title": "Serverintegritet",
        "body": "Matchservrar körs med låsta inställningar, signerade insticksprogram och manipuleringssäkra loggar."
      },
      "match": {
        "title": "Matchintegritet",
        "body": "Varje rond spelas in med demos och händelseloggar så att alla resultat kan granskas."
      },
      "behaviour": {
        "title": "Beteendeanalys",
        "body": "Statistiska modeller flaggar avvikande sikte-, reaktions- och informationsmönster för mänsklig granskning."
      },
      "identity": {
        "title": "Identitet",
        "body": "Steam OpenID-konton, en spelare per konto, med kontroller mot avstängningsundandragande."
      }
    },
    "roadmapTitle": "Färdplan",
    "phases": {
      "p1": {
        "title": "Fas 1 · Arkitektur",
        "body": "Hotmodell, dataflöden och integritetsdesign."
      },
      "p2": {
        "title": "Fas 2 · Server- och matchintegritet",
        "body": "Låsta serverinställningar, demoinspelning, manipuleringssäkra loggar."
      },
      "p3": {
        "title": "Fas 3 · Beteendeanalys",
        "body": "Granskningsverktyg och första statistiska modeller."
      },
      "p4": {
        "title": "Fas 4 · Klientintegritet",
        "body": "Shield-klientens beta med offentlig säkerhetsgranskning."
      },
      "p5": {
        "title": "Fas 5 · Tävlingsbeta",
        "body": "Shield krävs i rankade matcher och turneringar."
      }
    },
    "privacyTitle": "Integritetsprinciper",
    "privacy": [
      "Vi samlar bara in det som behövs för att skydda en match och säger exakt vad det är.",
      "Inga hårdvaruidentifierare samlas in förrän det finns en dokumenterad, oberoende granskad och säker implementation.",
      "Matchdata sparas under en bestämd tid och raderas sedan.",
      "Varje påföljd kan överklagas och granskas av en människa."
    ],
    "faqTitle": "Frågor",
    "faq": [
      {
        "q": "Är A.C.E Shield aktivt i dag?",
        "a": "Inte än. Det är under utveckling; varje fas ovan visar sin aktuella status."
      },
      {
        "q": "Kommer det att kräva kärnåtkomst?",
        "a": "Designen börjar med kontroller i användarläge och analys på serversidan. Djupare åtkomst skulle dokumenteras och granskas offentligt först."
      },
      {
        "q": "Påverkar Premium anti-fusket?",
        "a": "Nej. Integritetsreglerna är desamma för alla. Betalplaner köper aldrig tävlingsfördelar."
      },
      {
        "q": "Hur rapporterar jag en fuskare?",
        "a": "Via kontaktsidan. Rapporter granskas enligt avsnitt 14 i regelboken."
      }
    ]
  }
};
