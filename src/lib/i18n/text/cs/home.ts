import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  meta: {
    title: "A.C.E. — soutěžní platforma CS2",
    description:
      "A.C.E. je plánovaná soutěžní platforma pro Counter-Strike 2 zaměřená na identitu hráčů, kalibraci, týmy a turnaje. Tento veřejný web je náhled. Rankingové párování, anti-cheat, platby a ceny nejsou aktivní.",
  },
  opening: {
    dialogLabel: "Úvod A.C.E.",
    line: "A.C.E: autonomní anti-cheat, soutěžní kalibrace, elitní hráči",
    enter: "Vstoupit na web",
  },
  hero: {
    logoAlt: "A.C.E. — autonomní anti-cheat, soutěžní kalibrace, elitní hráči",
    arenaAlt:
      "Destička arény A.C.E. Původní obrázek scény, nejde o grafiku Valve. Obrazovka je označena jako herní televize. Živé vysílání je vypnuto.",
  },
  broadcast: {
    kicker: "SLEDOVÁNÍ TURNAJŮ",
    title: "Vysílací pult",
    lede: "Na tomto pultu leží soutěžní sada map: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis a Train. Jde o původní destičky. Žádný turnaj se nevysílá a tato stránka nepřehrává zápas Valve.",
    offAir: "MIMO VYSÍLÁNÍ · {map}",
  },
  jumpNav: {
    label: "Kategorie úvodní stránky",
    play: "Hrát",
    prizes: "Ceny",
    teams: "Týmy",
    leaderboard: "Žebříček",
    ranks: "Hodnosti",
    systems: "Systémy",
  },
  charter: {
    kicker: "HLAVNÍ PRACOVNÍ PROSTOR LOBBY",
    title: "SOUTĚŽNÍ PÁROVACÍ LOBBY A DISPEČINK A.C.E.",
    badge: "ŽÁDNÝ ŽIVÝ SERVER",
    lede: "Tato lobby nepřiděluje server, nespouští klienta anti-cheatu a nevyplácí žádnou cenu.",
    modules: [
      {
        kicker: "ZÁPAS NALEZEN · 5v5",
        copy: "Rámec 5v5 na této stránce je uzavřená fronta. Nepřiděluje server.",
        chips: ["ŽÁDNÝ SERVER SE 128 TICKY", "FRONTA ZAVŘENÁ"],
      },
      {
        kicker: "PEVNÉ 3D HODNOSTI",
        copy: "Deset stupňů od Recruit po A.C.E. Legend. Uložené hodnocení se zobrazí po přihlášení přes Steam. Tato stránka nezapočítává žádný zápas.",
        chips: ["PRAVIDLO HODNOCENÍ JE ZDOKUMENTOVÁNO", "OTOČNÝ STOJAN NA TÉTO STRÁNCE"],
      },
      {
        kicker: "ODMĚNY VE SKINECH",
        copy: "Karty skinů jsou příklady. Žádná zbraň se nedoručuje a žádná cena není financována.",
        chips: ["ŽÁDNÝ PŘEDMĚT SE NEDORUČUJE", "ŽÁDNÉ OVĚŘENÍ DROPU"],
      },
    ],
  },
  identity: {
    profilePlaceholder: "[Profil_hráče]",
    notAvailable: "n/d",
    elite: "ELITA",
  },
  membership: {
    compareLink: "Zobrazit úplnou srovnávací tabulku",
  },
  loot: {
    exampleCard: "Ukázková karta · nejde o předmět Valve",
    wear: {
      factoryNew: "Zcela nový",
      minimalWear: "Minimálně opotřebený",
    },
  },
  serverHub: {
    badge: "ŽÁDNÉ ŽIVÉ HERNÍ SERVERY",
    nodes: {
      fra: "Frankfurt – okrajový uzel",
      sto: "Stockholm – jádro",
      tlv: "Tel Aviv – přenosový uzel",
    },
    tileAria: "{name}. Dlaždice rozvržení. Žádný server není připojen.",
    tileSample: "Ukázka rozvržení {sample}. Žádný server není připojen.",
    note: "Tato jména a ukázky latence jsou rozvržení. Tento web nemá herní server se 128 ticky ani regionální uzel.",
  },
  telemetry: {
    badge: "NEJDE O ŽIVÉHO KLIENTA",
    lines: [
      "AC-KERNEL: NEPŘIPOJENO",
      "MATICE HARDWAROVÝCH ZÁKAZŮ: ŽÁDNÝ IDENTIFIKÁTOR SE NESBÍRÁ",
      "SPOJENÍ ŠTÍTU A.C.E.: ŽÁDNÝ KLIENT NENÍ NAINSTALOVÁN",
    ],
    note: "Tento web nespouští klienta jádra, neskenuje paměť a nevydává hardwarový zákaz.",
  },
  comingSoon: {
    badge: "NENÍ K DISPOZICI",
    body: "Desktopový klient A.C.E. není nabízen ke stažení. 1. sezóna na tomto webu neinstaluje software ani neotevírá registraci.",
  },
  operative: {
    kicker: "Filmový taktický výhled · původní prostředí CSS · nejde o grafiku Valve",
    title: "Ponořte se hlouběji do CS2: dokonalá soutěžní platforma",
    lede: "Férovější zápasy, lepší spoluhráči. Hodnosti, na kterých záleží, odměny, které se počítají.",
    note: "Kampaňový text. Rankingové fronty, živé servery a ceny nejsou aktivní.",
    hudLeft: "CT — STANOVIŠTĚ A",
    hudRight: "T — TLAK STŘEDEM",
    hudCenter: "PROSTŘEDÍ TÝMU · ROZVRŽENÍ",
    plannedReason: "Rankingová hra zůstává zavřená, dokud nebude implementována a ověřena skutečná integrace anti-cheatu.",
  },
  howStatus: {
    label: "REGISTRAČNÍ SUBSYSTÉM A.C.E. — KALIBRAČNÍ ENGINE PŘIPRAVEN",
    note: "Stavový widget rozvržení. Rankingové fronty, anti-cheat a živá kalibrace nejsou aktivní.",
  },
  shell: {
    primaryNav: "Hlavní",
    mobileNav: "Mobilní",
    elite: "ELITA",
    notificationsTitle: "Žádný živý kanál oznámení",
    notificationsAria: "Oznámení. Žádná nepřečtená.",
    connectProfileTitle: "Připojit profil",
    openProfileAria: "Otevřít profil ve velitelském pultu",
    connectProfileAria: "Připojit profil přes Steam OpenID",
    signOutAria: "Odhlásit se z A.C.E.",
  },
  notFound: {
    kicker: "VÝJIMKA MŘÍŽKY",
    title: "CHYBA 404 — TELEMETRIE RADARU ZTRACENA",
    body: "Souřadnice, kterou jste požadovali, v naší aktivní mřížce serverů neexistuje.",
    homeAria: "Zpět do lobby na úvodní stránce A.C.E.",
    cta: "ZPĚT DO LOBBY",
  },
  error: {
    kicker: "Chyba",
    title: "Něco se pokazilo",
    body: "Tuto veřejnou stránku nebylo možné zobrazit. Můžete to zkusit znovu. Na tomto náhledovém webu nebyla vyžádána žádná data účtu.",
    retryAria: "Znovu načíst tuto stránku",
    retry: "Zkusit znovu",
  },
};
