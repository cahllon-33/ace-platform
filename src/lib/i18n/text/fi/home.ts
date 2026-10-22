import type { TextBag } from "../types";

export const home: TextBag["home"] = {
  "liveStats": {
    "kicker": "LIVE",
    "online": "Paikalla nyt",
    "registered": "Rekisteröityneet pelaajat",
    "earlyTitle": "Ennakkokäyttö",
    "earlyBody": "Liity A.C.E:n ensimmäisten pelaajien joukkoon. Live-luvut näkyvät täällä, kun yhteisö kasvaa.",
    "unavailable": "Live-luvut eivät ole juuri nyt saatavilla.",
    "note": "Todelliset luvut, päivittyvät 30 sekunnin välein."
  },
  "ops": {
    "identityKicker": "IDENTITEETTIKESKUS",
    "signedOutTitle": "Kirjaudu Steamilla",
    "signedOutBody": "Yhdistä virallisella Steam OpenID:llä nähdäksesi täällä Steam-avatarisi, arvomerkkisi ja Rating Pointsisi. A.C.E ei koskaan kysy Steam-salasanaa.",
    "connect": "Kirjaudu Steamilla",
    "openDeck": "Avaa Command Deck",
    "avatarAlt": "Pelaajan {name} Steam-avatar",
    "emblemAlt": "Arvomerkki {rank}",
    "rp": "Rating Points",
    "wins": "Voitot",
    "losses": "Tappiot",
    "winRate": "Voittoprosentti",
    "matches": "Ottelut",
    "kd": "K/D",
    "na": "–",
    "kdNote": "K/D näyttää –, koska A.C.E ei vielä tallenna tappoja ja kuolemia.",
    "shieldKicker": "A.C.E SHIELD",
    "shieldChip": "KEHITYKSESSÄ",
    "shieldTitle": "Eheystila",
    "shieldBody": "A.C.E Shield on kehityksessä. Tänään mitään ei asenneta, skannata eikä valvota, joten millään tilillä ei ole eheysarviota.",
    "shieldClient": "Huijauksenestoasiakas",
    "shieldClientValue": "Ei julkaistu",
    "shieldServer": "Otteluserverit",
    "shieldServerValue": "Ei yhdistetty",
    "shieldHardware": "Laitteistoskannaus",
    "shieldHardwareValue": "Ei kerätä",
    "shieldLink": "Miten A.C.E Shield tulee toimimaan",
    "seasonKicker": "KAUSI 1",
    "seasonChip": "PÄIVÄMÄÄRIÄ EI ILMOITETTU",
    "seasonTitle": "Kauden 1 seuranta",
    "seasonBody": "Kaudella 1 ei ole vielä alkamis- eikä päättymispäivää, joten lähtölaskentaa ei ole. Päivämäärät julkaistaan tällä sivustolla ennen kauden alkua.",
    "statsKicker": "TILASTOSI",
    "statsSignedOut": "Kirjaudu Steamilla nähdäksesi tilastosi.",
    "statsEmpty": "Ei vielä tallennettuja otteluita. Voitot ja tappiot näkyvät ensimmäisen tallennetun A.C.E-ottelusi jälkeen.",
    "statsLive": "Voitot ja tappiot tulevat tallennetulta A.C.E-tililtäsi.",
    "statsLink": "Avaa pelaajatilastot"
  },
  "meta": {
    "title": "A.C.E — Kilpailullinen CS2-alusta",
    "description": "A.C.E on suunniteltu Counter-Strike 2 -kilpailualusta pelaajaidentiteetille, kalibroinnille, joukkueille ja turnauksille. Tämä julkinen sivusto on esikatselu. Ranked-matchmaking, huijauksenesto, maksut ja palkinnot eivät ole käytössä."
  },
  "opening": {
    "dialogLabel": "A.C.E-avaus",
    "line": "A.C.E: Autonominen huijauksenesto, kilpailullinen kalibrointi, eliittipelaajat",
    "enter": "Siirry sivustolle"
  },
  "hero": {
    "logoAlt": "A.C.E. Autonominen huijauksenesto, kilpailullinen kalibrointi, eliittipelaajat",
    "arenaAlt": "A.C.E-areenalaatta. Alkuperäinen lavakuva, ei Valven taidetta. Näytössä lukee pelitelevisio. Suora lähetys on pois päältä."
  },
  "broadcast": {
    "kicker": "TURNAUSSEURANTA",
    "title": "Lähetyspöytä",
    "lede": "Kilpailukarttapooli on tällä pöydällä: Dust II, Mirage, Inferno, Nuke, Ancient, Anubis ja Train. Nämä ovat alkuperäisiä laattoja. Mikään turnaus ei ole lähetyksessä, eikä tämä sivu toista Valven ottelua.",
    "offAir": "EI LÄHETYKSESSÄ · {map}"
  },
  "jumpNav": {
    "label": "Etusivun kategoriat",
    "play": "Pelaa",
    "prizes": "Palkinnot",
    "teams": "Joukkueet",
    "leaderboard": "Tulostaulu",
    "ranks": "Rankingit",
    "systems": "Järjestelmät"
  },
  "charter": {
    "kicker": "PÄÄAULAN TYÖTILA",
    "title": "A.C.E:N KILPAILULLINEN MATCHMAKING-AULA JA LÄHETYSKESKUS",
    "badge": "PALVELIMET · TULOSSA PIAN",
    "lede": "Tämä aula ei määritä palvelinta, käynnistä huijauksenestoasiakasta tai maksa palkintoa.",
    "modules": [
      {
        "kicker": "OTTELU LÖYTYI · 5v5",
        "copy": "Tämän sivun 5v5-kehys on suljettu jono. Se ei määritä palvelinta.",
        "chips": [
          "EI 128-TICK-PALVELINTA",
          "JONO SULJETTU"
        ]
      },
      {
        "kicker": "KIINTEÄT 3D-RANKINGIT",
        "copy": "Kymmenen tasoa Recruitista A.C.E Legendiin. Tallennettu luokitus näkyy Steam-kirjautumisen jälkeen. Tämä sivu ei kirjaa ottelua.",
        "chips": [
          "LUOKITUSSÄÄNTÖ TALLESSA",
          "KIERTOPÖYTÄ TÄLLÄ SIVULLA"
        ]
      },
      {
        "kicker": "SKINIPALKINNOT",
        "copy": "Mestaruuspalkinnot julkistetaan kunkin tapahtuman yhteydessä.",
        "chips": [
          "ESINETTÄ EI TOIMITETA",
          "EI PUDOTUSTARKISTUSTA"
        ]
      }
    ]
  },
  "identity": {
    "elite": "ELITE"
  },
  "membership": {
    "compareLink": "Katso koko vertailutaulukko"
  },
  "loot": {
    "wear": {
      "factoryNew": "Factory New",
      "minimalWear": "Minimal Wear"
    }
  },
  "serverHub": {
    "badge": "PELIPALVELIMET · TULOSSA PIAN",
    "nodes": {
      "fra": "Frankfurt Edge",
      "sto": "Stockholm Core",
      "tlv": "Tel Aviv Relay"
    },
    "tileAria": "{name}. Palvelin tulossa pian.",
    "note": "128-tick-aluepalvelimet saapuvat kilpailubetan myötä."
  },
  "telemetry": {
    "badge": "ESIKATSELU · TULOSSA PIAN",
    "lines": [
      "A.C.E SHIELD: KEHITTEILLÄ",
      "LAITTEISTOBANNIMATRIISI: TUNNISTETTA EI KERÄTÄ",
      "A.C.E SHIELD -LINKKI: ASIAKASTA EI OLE ASENNETTU"
    ],
    "note": "Tämä sivusto ei aja ytimen asiakasta, ei skannaa muistia eikä anna laitteistobannia."
  },
  "comingSoon": {
    "badge": "EI SAATAVILLA",
    "body": "A.C.E-työpöytäasiakasta ei tarjota ladattavaksi. Kausi 1 tällä sivustolla ei asenna ohjelmistoa eikä avaa sisäänkirjautumista."
  },
  "operative": {
    "kicker": "Elokuvallinen taktinen näkymä · alkuperäinen CSS-ympäristö · ei Valven taidetta",
    "title": "Syvemmälle CS2:een: lopullinen kilpailualusta",
    "lede": "Reilumpia otteluita, parempia joukkuetovereita. Merkitykselliset rankingit, palkinnot jotka lasketaan.",
    "note": "Kampanjateksti. Ranked-jonot, live-palvelimet ja palkinnot eivät ole käytössä."
  },
  "howStatus": {
    "label": "A.C.E-REKISTERÖINTIALIJÄRJESTELMÄ — KALIBROINTIMOOTTORI VALMIS",
    "note": "Ranked-jonot avautuvat, kun A.C.E Shield ja kalibrointi otetaan käyttöön."
  },
  "shell": {
    "primaryNav": "Ensisijainen",
    "mobileNav": "Mobiili",
    "elite": "ELITE",
    "notificationsTitle": "Ilmoitukset · tulossa pian",
    "notificationsAria": "Ilmoitukset. Ei lukemattomia.",
    "connectProfileTitle": "Yhdistä profiili",
    "openProfileAria": "Avaa Command Deck -profiili",
    "connectProfileAria": "Yhdistä profiili Steam OpenID:n kautta",
    "signOutAria": "Kirjaudu ulos A.C.E:stä"
  },
  "notFound": {
    "kicker": "RUUDUKKOPOIKKEUS",
    "title": "VIRHE 404 — TUTKATELEMETRIA KADONNUT",
    "body": "Pyytämääsi koordinaattia ei ole aktiivisessa palvelinruudukossamme.",
    "homeAria": "Palaa A.C.E-etusivun aulaan",
    "cta": "PALAA AULAAN"
  },
  "error": {
    "kicker": "Virhe",
    "title": "Jokin meni vikaan",
    "body": "Tätä julkista sivua ei voitu näyttää. Voit yrittää uudelleen. Tällä esikatselusivustolla ei pyydetty tilitietoja.",
    "retryAria": "Lataa sivu uudelleen",
    "retry": "Yritä uudelleen"
  }
};
