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
    "platform": "Plattform",
    "competition": "Tävling",
    "company": "Företag",
    "legal": "Juridik",
    "tagline": "Tävlingsstegar för Counter-Strike 2, byggda kring fair play.",
    "follow": "Följ A.C.E.",
    "rights": "Med ensamrätt.",
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
    "englishNote": "",
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
      "Rating Points",
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
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Bygg din tävlingsidentitet. Kalibrera din skicklighet. Klättra i A.C.E.-rankerna.",
      "connectSteam": "Anslut Steam",
      "openDashboard": "Öppna instrumentpanelen",
      "exploreRanks": "Utforska rankerna"
    },
    "status": {
      "title": "Plattformsstatus",
      "steam": "Steam-inloggning",
      "shield": "A.C.E. Shield",
      "servers": "Tävlingsservrar",
      "tournaments": "Turneringar",
      "billing": "Betalning",
      "available": "Tillgänglig",
      "inDevelopment": "Under utveckling",
      "comingSoon": "Kommer snart",
      "preparing": "Förbereds",
      "billingOff": "Inte aktiv · inga betalningar tas"
    },
    "card": {
      "matches": "Matcher",
      "wl": "V/F",
      "kd": "K/D",
      "noMatches": "Inga registrerade matcher",
      "division": "Division {division}"
    },
    "journey": {
      "title": "Din tävlingsresa",
      "currentRp": "Nuvarande RP",
      "current": "Nuvarande",
      "next": "Nästa",
      "toGo": "{rp} RP till nästa division",
      "top": "Högsta divisionen nådd",
      "basis": "Beräknat utifrån dina sparade RP och den publicerade ranktabellen."
    },
    "board": {
      "emptyTitle": "Inga rankade matcher än",
      "emptyBody": "Spelare visas här efter sin första registrerade rankade match. Inget på den här tavlan är påhittat.",
      "previewTag": "FÖRHANDSVISNING",
      "lobbyTitle": "Lobby",
      "matchFoundTitle": "Match hittad",
      "previewNote": "Endast en förhandsvisning av layouten: ingen kö eller server körs och namnen är platshållare.",
      "accept": "Acceptera",
      "waiting": "Väntar på spelare",
      "note": "Riktiga konton med minst en registrerad rankad match, sorterade efter sparade RP. Inga visnings- eller påhittade rader."
    },
    "toast": {
      "region": "Aviseringar",
      "dismiss": "Stäng avisering",
      "signedIn": "Inloggad som {name}",
      "signedOut": "Du har loggat ut.",
      "authFailed": "Steam-inloggningen slutfördes inte. Försök igen."
    },
    "sound": {
      "on": "Gränssnittsljud: på",
      "off": "Gränssnittsljud: av"
    },
    "chat": {
      "open": "Öppna supportchatten",
      "close": "Stäng supportchatten",
      "title": "A.C.E. Support",
      "greeting": "Hej! Jag är A.C.E.:s supportassistent. Fråga mig om ranker, planer, regler eller ditt konto.",
      "placeholder": "Skriv din fråga…",
      "send": "Skicka",
      "unavailable": "Supportchatten är inte tillgänglig än.",
      "disclaimer": "Automatiska svar kan vara fel. Avstängningar och kontobeslut fattas endast av administrationen.",
      "escalate": "Skicka till teamet",
      "escalated": "Sparat som supportärende. Administrationen granskar det.",
      "error": "Något gick fel. Försök igen.",
      "rateLimited": "För många meddelanden. Vänta en stund.",
      "thinking": "Skriver…",
      "tooLong": "Meddelandet är för långt (max {max} tecken)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Tävlingsplattform",
      "h1a": "Tävla.",
      "h1b": "Kalibrera.",
      "h1c": "Klättra.",
      "sub": "Rankad CS2 med Steam-inloggning, en offentlig RP-stege och planer som aldrig köper en fördel.",
      "trust1": "Endast CS2",
      "trust2": "Steam OpenID-inloggning",
      "trust3": "$0 · $4 · $7 — ingen pay-to-win",
      "trust4": "10 ranker · start på 1 200 RP",
      "stepsKicker": "Så fungerar det",
      "stepsTitle": "Tre steg till din första rank",
      "step1t": "Anslut Steam",
      "step1b": "Logga in med Steam OpenID. A.C.E. ser aldrig ditt Steam-lösenord.",
      "step2t": "Kalibrera",
      "step2b": "Du börjar på nivå 3 med 1 200 RP. Varje registrerad match ändrar dina RP enligt publicerade regler.",
      "step3t": "Klättra",
      "step3b": "En vinst ger upp till +30 RP (+32 som bästa spelare); en förlust kostar upp till −30. Din rank följer alltid dina RP.",
      "ranksTitle": "Tio ranker. En offentlig tabell.",
      "ranksBody": "Märkenas färger är fasta per nivå och din rank räknas alltid från dina sparade RP.",
      "ranksCta": "Se alla ranker",
      "plansTitle": "Planer som aldrig köper vinster",
      "plansBody": "Betalda planer är bara kosmetika och bekvämlighet. Betalningen är inte aktiv än, så alla har Free i dag.",
      "plansCta": "Jämför planer",
      "free": "Gratis",
      "perMonth": "/mån",
      "signedInKicker": "Välkommen tillbaka"
    },
    "profile": {
      "kicker": "SPELARE",
      "notFound": "Spelaren hittades inte",
      "notFoundBody": "Inget A.C.E.-konto använder detta Steam-ID, eller så är profilen inte offentlig.",
      "rating": "Betyg",
      "rank": "Rank",
      "record": "Resultat",
      "memberSince": "Medlem sedan {date}",
      "steamProfile": "Steam-profil",
      "yourProfile": "Det här är din profil",
      "backToBoard": "Tillbaka till topplistan"
    },
    "board": {
      "podium": "Toppspelare",
      "viewProfile": "Visa profil"
    },
    "chat": {
      "sources": "Källor",
      "noMatch": "Jag hittade inte detta i innehållet på A.C.E.:s webbplats. Du kan skicka frågan till teamet som ett ärende.",
      "s1": "Vad kostar Premium?",
      "s2": "Hur får jag RP?",
      "s3": "Hur anmäler jag en fuskare?",
      "kbNote": "Svaren hämtas från innehållet på A.C.E.:s webbplats."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Kommandocentral",
      "welcome": "Välkommen tillbaka, {name}",
      "quick": "Snabbåtgärder",
      "qProfile": "Offentlig profil",
      "qBoard": "Topplista",
      "qRanks": "Rangtabell",
      "qPlay": "Spela",
      "statRp": "Betyg",
      "statRank": "Rang",
      "statRecord": "Facit",
      "statWinRate": "Vinstandel",
      "statPlan": "Plan",
      "toNext": "{rp} RP till {next}",
      "top": "Toppen av stegen",
      "activity": "Senaste aktivitet",
      "activityEmpty": "Ingen registrerad aktivitet än. Matcher och inloggningar visas här när de sker.",
      "evSignIn": "Inloggad med Steam",
      "evRating": "Betyg {before} → {after}",
      "noRecord": "Inga matcher än",
      "account": "Konto"
    },
    "nf": {
      "code": "Fel 404",
      "title": "Den här sidan är utanför kartan",
      "body": "Länken kan vara gammal eller felstavad. Allt på A.C.E. är ett klick bort härifrån.",
      "home": "Tillbaka till start",
      "ranks": "Visa rangordningar"
    },
    "err": {
      "code": "Något gick sönder",
      "title": "Ett oväntat fel inträffade",
      "body": "Inget har debiterats och ditt konto är säkert. Försök igen eller gå tillbaka till start.",
      "retry": "Försök igen"
    }
  },
  "r41": {
    "vf": {
      "label": "Verifierad spelare",
      "tip": "Verifierad: Steam kopplat, kontot i gott skick, granskat av A.C.E."
    },
    "st": {
      "kicker": "Prestation",
      "title": "Spelarstatistik",
      "lede": "Varje siffra kommer från registrerade A.C.E.-matcher. Inget är uppskattat.",
      "empty": "Inga registrerade matcher än. Statistik visas efter första rankade matchen.",
      "winRate": "Vinstandel",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Vunna clutchar",
      "entry": "Lyckade entrys",
      "utility": "Utility-skada",
      "heatmap": "Aktivitet",
      "heatmapEmpty": "Inga matchdagar än",
      "rpChart": "RP-utveckling",
      "rpEmpty": "Inga betygsändringar än",
      "maps": "Kartor",
      "weapons": "Vapen",
      "multi": "Multikills",
      "totals": "Totalt",
      "matches": "Matcher",
      "kills": "Kills",
      "deaths": "Dödsfall",
      "open": "Visa statistik",
      "less": "Mindre",
      "more": "Mer",
      "none": "—"
    },
    "ab": {
      "title": "Om A.C.E.",
      "lede": "En tävlingsplattform för Counter-Strike 2 byggd kring en offentlig rangtabell och planer som aldrig köper fördelar.",
      "b1": "A.C.E. driver rankat spel, stegar och turneringar i CS2. Inloggning sker med Steam OpenID; vi ser aldrig ditt Steam-lösenord.",
      "b2": "Din rang räknas bara fram ur registrerade resultat enligt publicerade regler. Betalplaner är bara kosmetiska och för bekvämlighet.",
      "b3": "A.C.E. är en oberoende plattform och är inte knuten till Valve."
    },
    "ss": {
      "title": "Serverstatus",
      "lede": "Livekontroller från den här servern när du öppnade sidan. Inget är uppskattat.",
      "web": "Webbplats",
      "db": "Databas",
      "match": "Matchservrar",
      "ok": "I drift",
      "down": "Ej tillgänglig",
      "notLive": "Inte live än",
      "checked": "Kontrollerad {time}"
    },
    "rp": {
      "title": "Rapportera spelare",
      "lede": "Berätta för operatörerna vad som hände. Varje rapport granskas av en människa.",
      "target": "Spelarens SteamID64",
      "reason": "Anledning",
      "rCheat": "Fusk",
      "rToxic": "Kränkande beteende",
      "rOther": "Annat",
      "details": "Detaljer (valfritt)",
      "submit": "Skicka rapport",
      "signIn": "Logga in med Steam för att skicka en rapport.",
      "sent": "Rapporten mottagen. Operatörerna granskar varje rapport.",
      "invalid": "Ange ett giltigt SteamID64 (17 siffror).",
      "open": "Rapportera spelare"
    },
    "nt": {
      "title": "Aviseringar",
      "empty": "Allt är läst.",
      "markRead": "Markera alla som lästa"
    },
    "se": {
      "title": "Säsonger",
      "lede": "Säsonger nollställer placeringen och delar ut säsongsmärken.",
      "none": "Ingen säsong har startat än. Den första annonseras här."
    }
  },
  "r41b": {
    "lv": {
      "nav": "Live",
      "title": "Livesändningar",
      "lede": "Officiella A.C.E.-turneringsstreams. En sändning visas här bara medan operatörerna har den i sändning.",
      "none": "Ingen livesändning just nu",
      "noneBody": "När en officiell stream går i sändning visas den här. Under tiden kan du se turneringarna nedan.",
      "schedule": "Kommande turneringar",
      "noSchedule": "Inga turneringar är schemalagda än.",
      "onAir": "I sändning",
      "watch": "Titta live"
    }
  },
  "r44": {
    "kicker": "Din rank",
    "next": "Nästa",
    "winRate": "Vinstandel",
    "noMatches": "Inga rankade matcher än. Ditt första resultat visas här.",
    "finishPlus": "Plus · platinafinish",
    "finishPremium": "Premium · guldeldsfinish",
    "progressAria": "Framsteg mot {name}",
    "matches": "Matcher"
  },
  "r42": {
    "playTitle": "Spela nu",
    "playSub": "Hitta en rankad CS2-match och klättra",
    "newPill": "NYTT",
    "shopAria": "Öppna butiken"
  },
  "r41c": {
    "v5": {
      "vTier": "Både vinster och förluster multipliceras med {t7} på nivå 7–9 och med {t10} på nivå 10 ({top}), så ett facit på 50 % håller din rang på varje nivå.",
      "vPlacement": "Dina första {n} matcher rör sig {pk}× snabbare så att du hittar din nivå fort. Under placeringen kan ratingen inte gå över nivå {maxTier} ({cap} RP).",
      "vAbandon": "Räknas som en dubbel förlust, minst −{abandon} RP, oavsett resultat, och ingen MVP-bonus.",
      "ex2": "Varje förlust på vägen kräver fler vinster. På nivå 7–9 ger en vinst +{win7} och en förlust kostar −{loss7}, så vinner du mer än {breakEven} % av jämna matcher fortsätter du klättra."
    },
    "pr": {
      "kicker": "Prestige",
      "title": "Märkesregler",
      "lede": "Hur varje A.C.E.-märke tjänas in. Märken är rent kosmetiska: de ändrar aldrig matchning, RP eller någon regel.",
      "ranks": "Rangmärken (nivå 1–10) följer din RP. Alla ser samma rang och samma fasta nivåfärg.",
      "prestige": "Prestigemärken är fem långsiktiga mål över {elite} RP: ett var 200:e RP från 2 150 till 2 950.",
      "free": "Free: ditt märke förblir A.C.E. Legend och din prestigenivå visas som en textmilstolpe. Din RP har aldrig något tak.",
      "plus": "Plus: platinaserien av prestigemärken.",
      "premium": "Premium: den animerade guldserien av prestigemärken.",
      "lose": "Faller du under en prestigegräns följer märket din RP nedåt; når du den igen kommer det tillbaka.",
      "level": "Prestige {n} · {name}",
      "from": "Från {rp} RP",
      "milestone": "Prestige {n} uppnådd",
      "perk": "Prestigemärkesserie (2 150–3 000 RP), intjänad med RP",
      "open": "Märkesregler",
      "wins": "Ungefär {n} vinster i jämna matcher efter föregående steg"
    }
  }
};
