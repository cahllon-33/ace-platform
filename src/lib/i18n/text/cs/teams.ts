import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Správa týmu A.C.E.",
    description:
      "Pracovní prostor tvého týmu 5v5. Pozvánky vyžadují ověřenou relaci Steam; kontroly anti-cheat přijdou s A.C.E Shield.",
  },
  hero: {
    kicker: "TÝMY",
    title: "Týmy",
    lede: "Pět volných míst v řadě. Klan se uloží až po přihlášení přes Steam a založení týmu.",
  },
  gate: {
    kickerPremium: "Záznam klanu po výběru plánu",
    kickerDefault: "Záznam klanu",
    title: "Jste pětičlenný tým?",
    intro:
      "Místo 1 je hráč přihlášený přes Steam. Místa 2 až 5 už musí mít účty A.C.E. Uložení klanu neúčtuje $7, neodesílá e-mail a nezařazuje klan na tabuli 100 týmů.",
    yes: "Ano, pět hráčů",
    no: "Ne, nechat místa volná",
    seatsOpen: "Pět míst zůstává volných. Nic nebylo uloženo.",
    connectSteam:
      "Nejprve připojte Steam. Tlačítko vás vrátí na tuto stránku. A.C.E. nikdy nežádá heslo ke službě Steam.",
    alreadyMember: "{name} už patří do týmu {team}. Druhý klan se z tohoto formuláře nezakládá.",
    thisAccount: "Tento účet",
    acceptTerms: "Před uložením klanu přijměte podmínky.",
    notStored: "Klan nebyl uložen.",
    clanName: "Název klanu",
    captainSeat: "Místo 1, kapitán: {name}",
    signedInSteam: "Přihlášený účet Steam",
    seatLabel: "Místo {seat}: SteamID nebo ID účtu A.C.E.",
    submit: "Uložit pětičlenný klan",
    saved:
      "Název klanu je uložen a čtyři pozvánky čekají na přijetí. Tito hráči nejsou na soupisce, dokud pozvánku nepřijmou. Nejde o místo na tabuli 100 týmů. Nic nebylo účtováno.",
  },
  squadDesk: {
    kicker: "Týmový pult",
    title: "Otázky k psaným pravidlům",
    intro:
      "Tento pult čte pouze fakta zveřejněná na této stránce. Neodhaluje cheaty, neotevírá zápas a nemění účet.",
    questionLabel: "Otázka",
    placeholder: "Zeptej se na pět míst, plány nebo podporu",
    ask: "Zeptat se",
    fallback:
      "Tento pult odpovídá jen podle psaných pravidel na této stránce: plány, pět míst, Steam OpenID a podpora.",
    facts: {
      email: "Žádný e-mail se neposílá. Potvrzení plánů zůstávají na tomto webu.",
      charge:
        "Premium stojí $7 měsíčně. Již brzy: platba zatím není, takže se nic neúčtuje.",
      board:
        "Uložený klan je záznam soupisky. Není zařazen na tabuli 100 týmů. Tato tabule ukazuje 0 registrovaných, dokud se neotevře sezóna.",
      steam:
        "Přihlášení používá oficiální Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam. Z této stránky vás Steam vrátí sem.",
      roster:
        "Místo 1 je přihlášený kapitán. Místa 2 až 5 už musí mít účty A.C.E. Pozvánky čekají, dokud je každý hráč nepřijme.",
      badge:
        "Odznaky míst se stanou skutečnými kontrolami A.C.E Shield po spuštění anti-cheatu.",
      support:
        "Otevřete na tomto webu Podporu nebo Kontakt. Výzva podpory neotevírá požadavek a text napsaný na stránce Kontakt se nedoručuje.",
      rating:
        "Nové hodnocení začíná na 1 200. Tato stránka neprodává hodnocení, neotevírá frontu, nepřipojuje server CS2 ani nedoručuje ceny.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Vstupní fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Podpora",
    },
    rankLabel: "Hodnost {level}",
    noAgents: "Zatím nejsou uloženi žádní nezařazení hráči.",
    notice:
      "Pozvánky se odesílají jen za přihlášeného kapitána. Odznak u místa není živá kontrola anti-cheatu.",
  },
  tournaments: {
    meta: {
      title: "Šampionát A.C.E. — elitní vyřazovací pole 100 týmů",
      description:
        "Vyřazovací turnaj 100 týmů. Klikni na klan a otevři jeho soupisku a pak profil každého hráče. Registrace se brzy otevře.",
    },
    intro: {
      title: "ŠAMPIONÁT A.C.E. — ELITNÍ VYŘAZOVACÍ POLE 100 TÝMŮ",
      lede: "Zveřejněné pole je vyřazovací soutěž 100 týmů. Graf níže je toto rozvržení. Kliknutím na klan se otevře panel soupisky. Registrace je 0 ze 100. Žádná peněžní cena se neinzeruje ani nefinancuje.",
      formatValue: "Matice pavouka 100 týmů",
      briefTitle: "Provozní shrnutí pro 100 týmů",
      briefBody:
        "Jeden soutěžní formát pokrývá celé pole 100 týmů. Po otevření přihlášek postupuje prvních 28 přijatých klanů přímo do 2. kola. Zbylých 72 klanů hraje 1. kolo. Názvy na neobsazených místech jsou zástupné, dokud se klany nezaregistrují. Úplný řád je pod pavoukem. Herní lobby se otevřou se soutěžní betou a ceny se potvrzují pro každou akci.",
    },
    timeline: {
      ariaLabel: "Časová osa spuštění turnaje",
      kicker: "PLÁN ŠAMPIONÁTU",
      title: "ČASOVÁ OSA SPUŠTĚNÍ TURNAJE",
      stageLabel: "Fáze {id}",
      stages: {
        registrations: { title: "Otevřená registrace", state: "NÁHLEDOVÝ PULZ" },
        calibration: { title: "Regionální kalibrační pavouky", state: "UZAMČENO" },
        quarterFinals: { title: "Elitní profesionální čtvrtfinále", state: "UZAMČENO" },
        finals: { title: "Velké vrcholné finále", state: "UZAMČENO" },
      },
      disclaimer:
        "Fáze 01 se otevře jako první se zahájením registrace. Následují fáze 02–04. Výše cen se potvrzuje na stránce akce po oznámení.",
    },
    bracket: {
      kicker: "Vyřazovací turnaj 100 týmů · již brzy",
      title: "Matice pavouka 100 týmů",
      statusUnavailable:
        "Registrace se brzy otevře. Do té doby pavouk zobrazuje ukázkové klany.",
      statusEmpty:
        "Registrace se brzy otevře. Do té doby pavouk zobrazuje ukázkové klany.",
      statusStored:
        "Nejprve se umístí {count} registrovaných klanů. Zbývající místa ukazují ukázkové klany. Další kola se plní se zaznamenanými zápasy.",
      openSlot: "Volné místo",
      openCompetitorSlot: "Volné místo pro účastníka",
      openRoster: "Otevřít soupisku týmu {name}",
      bye: "👑 [VOLNÝ LOS - NASAZEN DO 2. KOLA]",
      championStage: "FÁZE ŠAMPIONA",
      leftWing: "Levé křídlo",
      rightWing: "Pravé křídlo",
      emptySlotNotice: "Toto místo pro účastníka je prázdné. Zatím není uložen žádný klan.",
      grandFinalNotice: "Velké finále zůstává otevřené, dokud nebudou zaznamenána obě semifinále.",
      rounds: {
        r128: "1. K",
        r64: "K64",
        r32: "K32",
        r16: "K16",
        qf: "ČF",
        sf: "SF",
      },
    },
    profile: {
      closeBackdrop: "Zavřít profil týmu",
      kicker: "Šampionátový profil · náhled",
      matchesPlayed: "Odehrané zápasy",
      winRate: "Společná úspěšnost výher",
      streak: "Aktivní turnajová série",
      rosterHeading: "Matice soupisky 5 hráčů",
      openSeat: "Volné místo {seat}",
      noPlayer: "Žádný hráč není uložen",
      previous: "Předchozí klan",
      count: "Klan {index} z {total}",
      next: "Další klan",
      close: "Zavřít profil",
      disclosure:
        "Sestavy a inventáře hráčů se zde objeví, až se je hráči rozhodnou sdílet. A.C.E. nesbírá údaje o hardwaru.",
    },
    player: {
      level: "ÚR. {level} · RP {rating}",
      record: "V–P {wins}–{losses}",
      kdNotStored: "K/D se neukládá",
      openProfileAria: "Otevřít profil hráče {name}",
      openProfile: "Otevřít profil",
      badge: "PŘIPRAVEN / V SOULADU S ANTI-CHEATEM",
      badgeNote: "Kontrola A.C.E Shield · již brzy",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Myš",
        dpi: "DPI",
        keyboard: "Klávesnice",
        monitor: "Monitor",
        headset: "Sluchátka",
      },
    },
  },
  gearPlaceholder: {
    processor: "CPU · nesdíleno",
    gpu: "GPU · nesdíleno",
    mouse: "Myš · nesdíleno",
    dpi: "DPI · nesdíleno",
    keyboard: "Nesdíleno",
    monitor: "Obnovovací frekvence · nesdíleno",
    headset: "Nesdíleno",
  },
  profileDisclosure:
    "A.C.E. neukládá inventáře hardwaru a nespouští klienta anti-cheatu. Grafy výkonnostních trendů a bojová matice vyžadují relaci A.C.E. Plus nebo Premium. Odkaz na profil Steam zadaný na této stránce se neukládá a není oficiálním identifikátorem.",
  errors: {
    signInRequired: "Je vyžadováno přihlášení.",
    nameLength: "Název týmu musí mít 2 až 32 znaků.",
    alreadyCaptain: "Tento účet už je kapitánem týmu.",
    nameTaken: "Tým s tímto názvem už existuje.",
    idRequired: "Je vyžadováno SteamID nebo ID účtu A.C.E.",
    noAccountForToken: "Pro toto SteamID nebo ID účtu neexistuje žádný účet A.C.E.",
    clanNeedsFour: "Pětičlenný klan potřebuje přihlášeného kapitána a čtyři SteamID.",
    seatNeedsId: "Každé ze čtyř míst potřebuje SteamID nebo ID účtu A.C.E.",
    seatsDistinct: "Každé místo potřebuje jiného hráče.",
    captainHoldsSeat: "Kapitán už obsazuje místo 1. Použijte čtyři další hráče.",
    fewerThanFour: "Tato ID patří méně než čtyřem účtům.",
    selfInvite: "Kapitán nemůže pozvat vlastní účet.",
    captainOnly: "Pozvánky smí odesílat pouze určený kapitán.",
    rosterLimit: "Soupiska CS2 má pět hráčů včetně kapitána.",
    alreadyOnRoster: "Tento hráč už je na soupisce.",
    noAccountForId: "Pro toto ID neexistuje žádný účet A.C.E.",
    inviteNotFound: "Pozvánka nebyla nalezena.",
    inviteNotPending: "Tato pozvánka už nečeká na vyřízení.",
    rosterFull: "Soupiska je již plná.",
    createFailed: "Tým se nepodařilo založit.",
    inviteFailed: "Pozvánka selhala.",
    updateInviteFailed: "Pozvánku se nepodařilo aktualizovat.",
  },
};
