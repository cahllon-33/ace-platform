import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. Trupphantering",
    "description": "Arbetsytan för din 5v5-trupp. Inbjudningar kräver en verifierad Steam-session; anti-fusk-kontroller kommer med A.C.E Shield."
  },
  "hero": {
    "kicker": "LAG",
    "title": "Trupper",
    "lede": "Fem öppna platser i rad. En klan sparas först efter Steam-inloggning och ett skapat lag."
  },
  "gate": {
    "kickerPremium": "Klanpost efter ditt planval",
    "kickerDefault": "Klanpost",
    "title": "Är ni ett lag på fem?",
    "intro": "Plats 1 är spelaren som är inloggad med Steam. Plats 2 till 5 måste redan ha A.C.E-konton. Att spara en klan debiterar inte $7, skickar ingen e-post och placerar inte klanen på 100-lagstavlan.",
    "yes": "Ja, fem spelare",
    "no": "Nej, lämna platserna öppna",
    "seatsOpen": "De fem platserna förblir öppna. Inget sparades.",
    "connectSteam": "Koppla Steam först. Knappen leder tillbaka hit. A.C.E ber aldrig om ett Steam-lösenord.",
    "alreadyMember": "{name} tillhör redan {team}. En andra klan skapas inte från det här formuläret.",
    "thisAccount": "Det här kontot",
    "acceptTerms": "Godkänn villkoren innan du sparar en klan.",
    "notStored": "Klanen sparades inte.",
    "clanName": "Klannamn",
    "captainSeat": "Plats 1, kapten: {name}",
    "signedInSteam": "Inloggat Steam-konto",
    "seatLabel": "SteamID eller A.C.E-konto-ID för plats {seat}",
    "submit": "Spara klanen med fem spelare",
    "saved": "Klannamnet är sparat och fyra inbjudningar väntar. Spelarna ingår inte i truppen förrän de accepterar. Det här är ingen plats på 100-lagstavlan. Inget debiterades."
  },
  "squadDesk": {
    "kicker": "Truppdesk",
    "title": "Frågor utifrån de skrivna reglerna",
    "intro": "Den här desken läser bara fakta som publiceras på den här sidan. Den upptäcker inte fusk, öppnar ingen match och ändrar inget konto.",
    "questionLabel": "Fråga",
    "placeholder": "Fråga om de fem platserna, planer eller support",
    "ask": "Fråga",
    "fallback": "Den här disken svarar bara utifrån de skrivna reglerna på sidan: planer, de fem platserna, Steam OpenID och support.",
    "facts": {
      "email": "Inget e-postmeddelande skickas. Plankvitton stannar på den här webbplatsen.",
      "charge": "Premium kostar $7 per månad. Kommer snart: det finns ingen betalning än, så inget debiteras.",
      "board": "En sparad klan är en truppost. Den placeras inte på 100-lagstavlan. Tavlan visar 0 registrerade tills en säsong öppnar.",
      "steam": "Inloggningen använder officiellt Steam OpenID. A.C.E ber aldrig om ett Steam-lösenord. Från den här sidan skickar Steam dig tillbaka hit.",
      "roster": "Plats 1 är den inloggade kaptenen. Plats 2 till 5 måste redan ha A.C.E-konton. Inbjudningar väntar tills varje spelare accepterar.",
      "badge": "Platsmärkena blir riktiga A.C.E Shield-kontroller när anti-fusket lanseras.",
      "support": "Öppna Support eller Kontakt på den här webbplatsen. En supportförfrågan öppnar inget ärende, och text som skrivs på Kontakt skickas inte.",
      "rating": "En ny rating börjar på 1 200. Den här sidan säljer inte rating, öppnar ingen kö, ansluter ingen CS2-server och delar inte ut priser."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Support"
    },
    "rankLabel": "Rank {level}",
    "noAgents": "Inga fristående spelare är sparade ännu.",
    "notice": "Inbjudningar skickas bara av en inloggad kapten. Märket på en plats är ingen aktiv anti-fusk-kontroll."
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E. Mästerskap — elitutslagning med 100 lag",
      "description": "Utslagningen med 100 lag. Klicka på en klan för att öppna truppen och sedan varje spelarprofil. Registreringen öppnar snart."
    },
    "intro": {
      "title": "A.C.E. MÄSTERSKAP — ELITUTSLAGNING MED 100 LAG",
      "lede": "Det publicerade fältet är en utslagning med 100 lag. Grafen nedan är den layouten. Ett klick på en klan öppnar truppanelen. Registrerade: 0 av 100. Inget kontantpris annonseras eller finansieras.",
      "formatValue": "Slutspelsmatris för 100 lag",
      "briefTitle": "Driftsöversikt för 100 lag",
      "briefBody": "En tävlingslayout täcker hela fältet på 100 lag. När anmälan öppnar får de första 28 godkända klanerna frilott i omgång 1 och går vidare till omgång 2. De övriga 72 klanerna spelar omgång 1. Namn på ej fyllda platser är platshållare tills klaner registrerar sig. Hela regelboken finns under trädet. Matchlobbyer öppnar med tävlingsbetan, och priser bekräftas per evenemang."
    },
    "bracket": {
      "kicker": "Utslagning med 100 lag · kommer snart",
      "title": "Slutspelsmatris för 100 lag",
      "statusUnavailable": "Registreringen öppnar snart. Till dess visar slutspelsträdet exempelklaner.",
      "statusEmpty": "Registreringen öppnar snart. Till dess visar slutspelsträdet exempelklaner.",
      "statusStored": "{count} registrerade klaner placeras först. Övriga platser visar exempelklaner. Senare omgångar fylls när matcher registreras.",
      "openSlot": "Öppen plats",
      "openCompetitorSlot": "Öppen deltagarplats",
      "openRoster": "Öppna truppen för {name}",
      "bye": "👑 [FRILOTT – SEEDAD TILL OMGÅNG 2]",
      "championStage": "MÄSTARSCEN",
      "leftWing": "Vänster flygel",
      "rightWing": "Höger flygel",
      "emptySlotNotice": "Den här deltagarplatsen är tom. Ingen klan är sparad ännu.",
      "grandFinalNotice": "Den stora finalen förblir öppen tills båda semifinalerna är registrerade.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "KF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Stäng lagprofil",
      "kicker": "Mästerskapsprofil · förhandsvisning",
      "matchesPlayed": "Spelade matcher",
      "winRate": "Sammanlagd vinstprocent",
      "streak": "Aktuell vinstsvit i turneringen",
      "rosterHeading": "Truppmatris med 5 spelare",
      "openSeat": "Öppen plats {seat}",
      "noPlayer": "Ingen spelare sparad",
      "previous": "Föregående klan",
      "count": "Klan {index} av {total}",
      "next": "Nästa klan",
      "close": "Stäng profil",
      "disclosure": "Spelarnas utrustning och inventarier visas här när de väljer att dela dem. A.C.E samlar inte in hårdvarudata."
    },
    "player": {
      "level": "NIVÅ {level} · RP {rating}",
      "record": "V–F {wins}–{losses}",
      "kdNotStored": "K/D inte sparat",
      "openProfileAria": "Öppna profilen för {name}",
      "openProfile": "Öppna profil",
      "badge": "REDO / ANTI-FUSK-GODKÄND",
      "badgeNote": "A.C.E Shield-kontroll · kommer snart",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Mus",
        "dpi": "DPI",
        "keyboard": "Tangentbord",
        "monitor": "Skärm",
        "headset": "Headset"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · inte delad",
    "gpu": "GPU · inte delad",
    "mouse": "Mus · inte delad",
    "dpi": "DPI · inte delad",
    "keyboard": "Inte delad",
    "monitor": "Uppdateringsfrekvens · inte delad",
    "headset": "Inte delad"
  },
  "profileDisclosure": "A.C.E lagrar inga hårdvaruinventarier och kör ingen anti-fusk-klient. Trenddiagram och stridsmatrisen kräver en A.C.E Plus- eller Premium-session. En Steam-profillänk som skrivs på den här sidan sparas inte och är inget officiellt användarnamn.",
  "errors": {
    "signInRequired": "Inloggning krävs.",
    "nameLength": "Lagnamn måste vara mellan 2 och 32 tecken.",
    "alreadyCaptain": "Det här kontot är redan kapten för ett lag.",
    "nameTaken": "Ett lag med det namnet finns redan.",
    "idRequired": "Ett SteamID eller A.C.E-konto-ID krävs.",
    "noAccountForToken": "Det finns inget A.C.E-konto för det SteamID:t eller konto-ID:t.",
    "clanNeedsFour": "En klan med fem spelare behöver den inloggade kaptenen plus fyra SteamID:n.",
    "seatNeedsId": "Var och en av de fyra platserna behöver ett SteamID eller ett A.C.E-konto-ID.",
    "seatsDistinct": "Varje plats behöver en annan spelare.",
    "captainHoldsSeat": "Kaptenen har redan plats 1. Ange fyra andra spelare.",
    "fewerThanFour": "Dessa ID:n tillhör färre än fyra konton.",
    "selfInvite": "En kapten kan inte bjuda in sitt eget konto.",
    "captainOnly": "Endast den utsedda kaptenen får skicka inbjudningar.",
    "rosterLimit": "En CS2-trupp består av fem spelare inklusive kaptenen.",
    "alreadyOnRoster": "Den spelaren finns redan i truppen.",
    "noAccountForId": "Det finns inget A.C.E-konto för det ID:t.",
    "inviteNotFound": "Inbjudan hittades inte.",
    "inviteNotPending": "Den här inbjudan väntar inte längre.",
    "rosterFull": "Truppen är redan full.",
    "createFailed": "Kunde inte skapa laget.",
    "inviteFailed": "Inbjudan misslyckades.",
    "updateInviteFailed": "Kunde inte uppdatera inbjudan."
  }
};
