import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "ops": {
    "identityKicker": "IDENTITÁSKÖZPONT",
    "signedOutTitle": "Bejelentkezés Steammel",
    "signedOutBody": "Csatlakozz a hivatalos Steam OpenID-val, hogy itt lásd a Steam-avatarodat, a rangemblémádat és a Rating Pointsodat. Az A.C.E. soha nem kér Steam-jelszót.",
    "connect": "Bejelentkezés Steammel",
    "openDeck": "Command Deck megnyitása",
    "avatarAlt": "{name} Steam-avatarja",
    "emblemAlt": "{rank} rangembléma",
    "rp": "Rating Points",
    "wins": "Győzelmek",
    "losses": "Vereségek",
    "winRate": "Győzelmi arány",
    "matches": "Meccsek",
    "kd": "K/D",
    "na": "n/a",
    "kdNote": "A K/D n/a, mert az A.C.E. még nem rögzíti az öléseket és halálokat.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "FEJLESZTÉS ALATT",
    "shieldTitle": "Integritás állapota",
    "shieldBody": "Az A.C.E Shield fejlesztés alatt áll. Ma semmi nincs telepítve, szkennelve vagy megfigyelve, így egyetlen fióknak sincs integritási ítélete.",
    "shieldClient": "Csalásellenes kliens",
    "shieldClientValue": "Nem jelent meg",
    "shieldServer": "Meccsszerverek",
    "shieldServerValue": "Nincsenek csatlakoztatva",
    "shieldHardware": "Hardverszkennelés",
    "shieldHardwareValue": "Nem gyűjtjük",
    "shieldLink": "Így fog működni az A.C.E Shield",
    "seasonKicker": "1. SZEZON",
    "seasonChip": "DÁTUMOK NINCSENEK BEJELENTVE",
    "seasonTitle": "1. szezon követése",
    "seasonBody": "Az 1. szezonnak még nincs kezdő- és záródátuma, ezért nincs visszaszámlálás. A dátumokat a szezon kezdete előtt ezen az oldalon tesszük közzé.",
    "statsKicker": "STATISZTIKÁID",
    "statsSignedOut": "Jelentkezz be Steammel a statisztikáidhoz.",
    "statsEmpty": "Még nincs rögzített meccs. A győzelmek és vereségek az első rögzített A.C.E. meccsed után jelennek meg.",
    "statsLive": "A győzelmek és vereségek a tárolt A.C.E. fiókodból származnak.",
    "statsLink": "Játékosstatisztika megnyitása"
  },
  "meta": {
    "title": "A.C.E. — Versenyszintű CS2 platform",
    "description": "Az A.C.E. egy tervezett Counter-Strike 2 versenyplatform játékosidentitáshoz, kalibrációhoz, csapatokhoz és tornákhoz. Ez a nyilvános weboldal előnézet. A ranked párosítás, a csalásellenes rendszer, a fizetések és a díjak nem aktívak."
  },
  "opening": {
    "dialogLabel": "A.C.E. nyitány",
    "line": "A.C.E: Autonóm csalásellenesség, versenykalibráció, elit játékosok",
    "enter": "Belépés az oldalra"
  },
  "hero": {
    "logoAlt": "A.C.E. Autonóm csalásellenesség, versenykalibráció, elit játékosok",
    "arenaAlt": "A.C.E. aréna-tábla. Eredeti színpadkép, nem Valve-grafika. A képernyőn a játéktelevízió felirat áll. Az élő adás ki van kapcsolva."
  },
  "broadcast": {
    "kicker": "TORNAFIGYELŐ",
    "title": "Közvetítőpult",
    "lede": "A verseny pályakészlete ezen a pulton van: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis és Train. Ezek eredeti táblák. Egy torna sincs adásban, és ez az oldal nem játszik le Valve-meccset.",
    "offAir": "NINCS ADÁSBAN · {map}"
  },
  "jumpNav": {
    "label": "Kezdőlap kategóriái",
    "play": "Játék",
    "prizes": "Díjak",
    "teams": "Csapatok",
    "leaderboard": "Ranglista",
    "ranks": "Rangok",
    "systems": "Rendszerek"
  },
  "charter": {
    "kicker": "FŐ LOBBI MUNKATÉR",
    "title": "A.C.E. VERSENYPÁROSÍTÁSI LOBBI ÉS DISZPÉCSERKÖZPONT",
    "badge": "SZERVEREK · HAMAROSAN",
    "lede": "Ez a lobbi nem rendel szervert, nem indít csalásellenes klienst, és nem fizet díjat.",
    "modules": [
      {
        "kicker": "MECCS MEGVAN · 5v5",
        "copy": "Az oldal 5v5 kerete zárt sor. Nem rendel szervert.",
        "chips": [
          "NINCS 128-TICK SZERVER",
          "SOR ZÁRVA"
        ]
      },
      {
        "kicker": "RÖGZÍTETT 3D RANGOK",
        "copy": "Tíz szint a Recruittól az A.C.E. Legendig. A tárolt értékelés Steam-bejelentkezés után jelenik meg. Ez az oldal nem rögzít meccset.",
        "chips": [
          "ÉRTÉKELÉSI SZABÁLY RÖGZÍTVE",
          "FORGÓASZTAL EZEN AZ OLDALON"
        ]
      },
      {
        "kicker": "SKINJUTALMAK",
        "copy": "A bajnoki jutalmakat minden eseménnyel együtt jelentik be.",
        "chips": [
          "NINCS KISZÁLLÍTOTT TÁRGY",
          "NINCS DROPELLENŐRZÉS"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "A teljes összehasonlító táblázat"
  },
  "loot": {
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "JÁTÉKSZERVEREK · HAMAROSAN",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}. Szerver hamarosan.",
    "note": "A 128-tick regionális szerverek a versenybétával érkeznek."
  },
  "telemetry": {
    "badge": "ELŐNÉZET · HAMAROSAN",
    "lines": [
      "A.C.E SHIELD: FEJLESZTÉS ALATT",
      "HARDVERTILTÁSI MÁTRIX: NEM GYŰJTÜNK AZONOSÍTÓT",
      "A.C.E. SHIELD KAPCSOLAT: NINCS TELEPÍTETT KLIENS"
    ],
    "note": "Ez a weboldal nem futtat kernelklienst, nem vizsgálja a memóriát, és nem ad ki hardvertiltást."
  },
  "comingSoon": {
    "badge": "NEM ELÉRHETŐ",
    "body": "Az A.C.E. asztali kliens nem tölthető le. Az 1. szezon ezen az oldalon nem telepít szoftvert és nem nyit bejelentkezést."
  },
  "operative": {
    "kicker": "Filmes taktikai nézet · eredeti CSS-környezet · nem Valve-grafika",
    "title": "Mélyebben a CS2-be: a végső versenyplatform",
    "lede": "Igazságosabb meccsek, jobb csapattársak. Rangok, amelyek számítanak, jutalmak, amelyek érnek valamit.",
    "note": "Kampányszöveg. A ranked sorok, élő szerverek és díjak nem aktívak.",
    "hudLeft": "CT — A PONT",
    "hudRight": "T — KÖZÉPSŐ NYOMÁS",
    "hudCenter": "OSZTAGKÖRNYEZET",
    "plannedReason": "A ranked játék zárva marad, amíg valódi csalásellenes integráció nincs megvalósítva és ellenőrizve."
  },
  "howStatus": {
    "label": "A.C.E. REGISZTRÁCIÓS ALRENDSZER — KALIBRÁCIÓS MOTOR KÉSZ",
    "note": "A ranked sorok akkor nyílnak, amikor az A.C.E Shield és a kalibráció élesedik."
  },
  "shell": {
    "primaryNav": "Elsődleges",
    "mobileNav": "Mobil",
    "elite": "ELITE",
    "notificationsTitle": "Értesítések · hamarosan",
    "notificationsAria": "Értesítések. Nincs olvasatlan.",
    "connectProfileTitle": "Profil csatlakoztatása",
    "openProfileAria": "Command Deck profil megnyitása",
    "connectProfileAria": "Profil csatlakoztatása Steam OpenID-n keresztül",
    "signOutAria": "Kijelentkezés az A.C.E.-ből"
  },
  "notFound": {
    "kicker": "RÁCSKIVÉTEL",
    "title": "404-ES HIBA — RADARTELEMETRIA ELVESZETT",
    "body": "A kért koordináta nem létezik az aktív szerverrácsunkban.",
    "homeAria": "Vissza az A.C.E. kezdőlap lobbijába",
    "cta": "VISSZA A LOBBIBA"
  },
  "error": {
    "kicker": "Hiba",
    "title": "Valami hiba történt",
    "body": "Ez a nyilvános oldal nem jeleníthető meg. Próbáld újra. Ezen az előnézeti oldalon nem kértünk fiókadatot.",
    "retryAria": "Oldal újratöltése",
    "retry": "Próbáld újra"
  }
};
