import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Správa týmu A.C.E.",
    description:
      "Koncepční pracovní prostor týmu 5v5. Soupisky, volní hráči a odznaky anti-cheatu jsou náhledová rozvržení. Živé pozvánky vyžadují ověřenou relaci Steam.",
  },
  hero: {
    kicker: "TÝMY",
    title: "Týmy",
    lede: "Pět volných míst v řadě. Klan se uloží až po přihlášení přes Steam a založení týmu.",
  },
  gate: {
    kickerPremium: "Po dopisu Premium",
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
    placeholder: "Zeptejte se na pět míst, dopis za $7 nebo podporu",
    ask: "Zeptat se",
    fallback:
      "Tento pult odpovídá pouze podle psaných pravidel na této stránce: dopis Premium, pět míst, Steam OpenID a Podpora.",
    facts: {
      email: "Žádný e-mail se neodesílá. Dopis Premium zůstává na /premium/receipt.",
      charge:
        "Nic se neúčtuje. Premium za $7 měsíčně je zobrazená cena. Pokladna není v provozu a uložený tarif se nemění.",
      board:
        "Uložený klan je záznam soupisky. Není zařazen na tabuli 100 týmů. Tato tabule ukazuje 0 registrovaných, dokud se neotevře sezóna.",
      steam:
        "Přihlášení používá oficiální Steam OpenID. A.C.E. nikdy nežádá heslo ke službě Steam. Z této stránky vás Steam vrátí sem.",
      roster:
        "Místo 1 je přihlášený kapitán. Místa 2 až 5 už musí mít účty A.C.E. Pozvánky čekají, dokud je každý hráč nepřijme.",
      badge:
        "Odznak u místa je ukázka rozvržení. Nejde o živou kontrolu anti-cheatu a nic se nestahuje.",
      support:
        "Otevřete na tomto webu Podporu nebo Kontakt. Výzva podpory neotevírá požadavek a text napsaný na stránce Kontakt se nedoručuje.",
      rating:
        "Nové hodnocení začíná na 1 000. Tato stránka neprodává hodnocení, neotevírá frontu, nepřipojuje server CS2 ani nedoručuje cenu.",
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
        "Rozvržení vyřazovací soutěže 100 týmů. Kliknutím na klan otevřete jeho soupisku a poté profil každého hráče. Registrace je 0 ze 100.",
    },
    intro: {
      title: "ŠAMPIONÁT A.C.E. — ELITNÍ VYŘAZOVACÍ POLE 100 TÝMŮ",
      lede: "Zveřejněné pole je vyřazovací soutěž 100 týmů. Graf níže je toto rozvržení. Kliknutím na klan se otevře panel soupisky. Registrace je 0 ze 100. Žádná peněžní cena se neinzeruje ani nefinancuje.",
      formatValue: "Matice pavouka 100 týmů",
      briefTitle: "Provozní shrnutí pro 100 týmů",
      briefBody:
        "Jedno soutěžní rozvržení pokrývá celé pole 100 týmů. Až se otevře přihlašování, prvních 28 přijatých klanů dostane volný los v 1. kole a postoupí do 2. kola. Zbylých 72 klanů hraje 1. kolo. Jména na neobsazených místech jsou přípravné štítky, ne registrovaní účastníci. Úplný řád je pod stromem. Žádná zápasová lobby není otevřená a žádný fond cen není financován.",
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
        "Fáze 01 pulzuje jako náhled rozvržení. Registrace není otevřená (0 ze 100). Fáze 02–04 jsou uzamčené. Velké vrcholné finále uvádí pouze koncepční částku $50,000 — žádný fond cen není financován.",
    },
    bracket: {
      kicker: "Vyřazovací soutěž 100 týmů · náhled rozvržení",
      title: "Matice pavouka 100 týmů",
      statusUnavailable:
        "PostgreSQL není připojen. 100 míst pro účastníky používá přípravná jména klanů, ne registrované týmy. Skóre sérií zůstává na 0.",
      statusEmpty:
        "Zatím nejsou uloženy žádné klany. 100 jmen účastníků je přípravné rozvržení. Nejde o přihlášené pole.",
      statusStored:
        "Jako první je umístěno {count} klanů z databáze. Zbývající místa pro účastníky používají přípravná jména. Pozdější kola zůstávají otevřená, dokud nebudou zápasy zaznamenány.",
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
      kicker: "Hlavní šampionátní profil · ukázka rozvržení",
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
        "Maketa v pískovišti: všechny sestavy systémů, inventáře hráčů a databázové proměnné v tomto profilu jsou koncepční ukázky rozvržení předběžné registrace. Neběží žádný klient anti-cheatu, neukládá se žádný hardware a tyto údaje nejsou výsledky zápasů.",
    },
    player: {
      level: "ÚR. {level} · RP {rating}",
      record: "V–P {wins}–{losses}",
      kdNotStored: "K/D se neukládá",
      openProfileAria: "Otevřít profil hráče {name}",
      openProfile: "Otevřít profil",
      badge: "PŘIPRAVEN / V SOULADU S ANTI-CHEATEM",
      badgeNote: "Ukázka rozvržení · nejde o živou kontrolu",
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
    processor: "Zástupný údaj · CPU se nesbírá",
    gpu: "Zástupný údaj · GPU se nesbírá",
    mouse: "Zástupný údaj · model myši se nesbírá",
    dpi: "Zástupný údaj · DPI se nesbírá",
    keyboard: "Zástupný údaj · nesbírá se",
    monitor: "Zástupný údaj · Hz se nesbírá",
    headset: "Zástupný údaj · nesbírá se",
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
