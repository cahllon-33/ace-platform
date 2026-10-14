import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Hrát",
    description: "Rankingové párování 5v5 zůstává při selhání uzavřené, dokud anti-cheat nebude skutečný.",
  },
  boards: {
    label: "Tabule front",
    title: "Tři tabule 5v5",
    note: "Volba zůstává na této stránce. Rankingové hledání je zavřené a výběr tabule nehledá soupeře.",
    items: {
      open: {
        name: "Otevřená tabule",
        rules: [
          "Skupina libovolné velikosti, až pět hráčů",
          "Žádné rozpětí hodnocení",
          "Kontrolou identity je Steam OpenID",
          "Určeno pro otevřený trénink, až bude fronta existovat",
        ],
      },
      calibration: {
        name: "Kalibrační tabule",
        rules: [
          "Sólo, duo nebo trio",
          "Plánované rozpětí {points} bodů hodnocení",
          "Profil Steam už musí být uložen",
          "Používá pravidlo hodnocení A.C.E., bez živého hledání",
        ],
      },
      elite: {
        name: "Elitní tabule",
        rules: [
          "Sólo nebo duo",
          "Plánované rozpětí {points} bodů hodnocení",
          "Uložené členství musí být Plus nebo Premium",
          "Přísnější psaná podmínka vstupu. Není připojen žádný fond cen",
        ],
      },
    },
  },
  veto: {
    kicker: "VETO MAP",
    title: "Vyberte mapu",
    lede: "Odmítejte mapy, dokud nezůstane jediná. Tato lobby nespouští Counter-Strike 2 a neotevírá server.",
    mapSelected: "Vybraná mapa: {map}",
    yourBan: "Váš zákaz",
    opponentBan: "Zákaz soupeře",
    selected: "Vybráno",
    declined: "Odmítnuto",
    decline: "Odmítnout",
    reset: "Resetovat veto",
    declinedToast: "Mapa {map} byla odmítnuta. Tato stránka neotevírá server.",
    lockKicker: "ROZVRŽENÍ 5v5",
    lockTitle: "Zbývající mapou je {map}",
    lockBody:
      "Soupiska níže je rozvržení. Tato stránka nenačítá soutěžní zápas, nepřesouvá hráče do hry a neposílá adresu serveru.",
    close: "Zavřít",
  },
  arena: {
    ariaLabel: "Náhled rozvržení nalezeného zápasu",
    captain: "Kapitán",
    ping: "Ping {ping}",
    mapPlates: "Destičky map",
    selectMap: "Vybrat destičku mapy {map} v rozvržení",
    settings: {
      region: "Region",
      mode: "Režim",
      antiCheat: "Anti-cheat",
      simulator: "Simulátor",
    },
    chat: {
      title: "TÝMOVÝ CHAT",
      kicker: "SMYŠLENÝ TERMINÁL · BEZ SÍŤOVÉHO PŘIPOJENÍ",
      captainName: "{name} (kapitán)",
      layoutName: "{name} (rozvržení)",
      samples: ["gl hf", "jdeme na to", "dust 2 nám sedí", "připraven"],
      inputLabel: "Zpráva chatu v rozvržení",
      placeholder: "Napsat týmu… (pouze rozvržení)",
      send: "Přidat řádek chatu v rozvržení",
    },
    tiles: {
      map: "Mapa",
      server: "Server",
      serverValue: "EU západ · {ping} (ukázka)",
      mode: "Režim",
    },
    identity: {
      title: "OVĚŘENÍ IDENTITY",
      kicker: "KONTROLY ROZVRŽENÍ · NEJDE O ŽIVÉ POSKYTOVATELE",
      rows: [
        "Kód e-mailu ověřen (rozvržení)",
        "Telefonní kód SMS ověřen (rozvržení)",
        "Živý sken obličeje ověřen (rozvržení)",
      ],
    },
    security: {
      title: "ZABEZPEČENÍ ZÁPASU",
      kicker: "SIMULÁTOR · AI NENÍ NASAZENA",
      rows: [
        "Ochrana anti-cheatu — pulz rozvržení",
        "Kontrola integrity serveru — maketa",
        "Data zápasu šifrována — koncept",
      ],
    },
    findMatchReason: "NAJÍT ZÁPAS nemůže otevřít živý server CS2. Ranking je při selhání uzavřený. Populace je 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} není zařazen do této soupisky rozvržení.",
    banner: "ROZVRŽENÍ ARÉNY · NEJDE O ŽIVÝ ZÁPAS",
    mapPlate: "DESTIČKA MAPY · DUST II · ŽÁDNÝ SERVER SE 128 TICKY",
    rosterNote: "Volací znaky rozvržení. Nejde o připojenou soupisku.",
    teamA: "TÝM A · TAKTICKÁ ALIANCE",
    teamB: "TÝM B · SHADOW LEGION",
    clockLabel: "HODINY ROZVRŽENÍ",
    clockNote: "Tyto hodiny běží ve smyčce. Fronta je zavřená.",
    chatKicker: "TÝMOVÝ CHAT",
    chatLines: [
      "Držíme rozvržení, dokud se hodiny nevynulují.",
      "Dust II je na této stránce destička mapy.",
      "Pro tuto soupisku není připojen žádný server.",
    ],
    chatField: "Zprávy se neodesílají.",
    identityKicker: "MŘÍŽKA IDENTITY",
    identityRows: [
      "E-mail se vstupenkou na zápas se neodesílá.",
      "Neběží žádná kontrola jádra.",
      "Není připojen žádný živý telemetrický proud.",
    ],
    findMatch: "NAJÍT SOUTĚŽNÍ ZÁPAS",
    closedNotice: "Toto tlačítko neotevírá server. Rankingová fronta je zavřená. Populace je 0.",
  },
};
