import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "A.C.E. -ryhmänhallinta",
    "description": "5v5-ryhmäsi työtila. Kutsut vaativat vahvistetun Steam-istunnon; huijauksenestotarkistukset saapuvat A.C.E Shieldin myötä."
  },
  "hero": {
    "kicker": "JOUKKUEET",
    "title": "Squads",
    "lede": "Viisi avointa paikkaa rivissä. Klaani tallennetaan vasta Steam-kirjautumisen ja luodun joukkueen jälkeen."
  },
  "gate": {
    "kickerPremium": "Klaanitietue tilausvalinnan jälkeen",
    "kickerDefault": "Klaanitietue",
    "title": "Oletteko viiden hengen joukkue?",
    "intro": "Paikka 1 on Steamilla kirjautunut pelaaja. Paikoilla 2–5 on oltava jo A.C.E.-tilit. Klaanin tallentaminen ei veloita 7 $, ei lähetä sähköpostia eikä sijoita klaania 100 joukkueen tauluun.",
    "yes": "Kyllä, viisi pelaajaa",
    "no": "Ei, jätä paikat avoimiksi",
    "seatsOpen": "Viisi paikkaa pysyy avoimena. Mitään ei tallennettu.",
    "connectSteam": "Yhdistä Steam ensin. Painike palaa tälle sivulle. A.C.E. ei koskaan kysy Steam-salasanaa.",
    "alreadyMember": "{name} kuuluu jo joukkueeseen {team}. Tällä lomakkeella ei luoda toista klaania.",
    "thisAccount": "Tämä tili",
    "acceptTerms": "Hyväksy ehdot ennen klaanin tallentamista.",
    "notStored": "Klaania ei tallennettu.",
    "clanName": "Klaanin nimi",
    "captainSeat": "Paikka 1, kapteeni: {name}",
    "signedInSteam": "Kirjautunut Steam-tili",
    "seatLabel": "Paikan {seat} SteamID tai A.C.E.-tilitunnus",
    "submit": "Tallenna viiden pelaajan klaani",
    "saved": "Klaanin nimi on tallennettu ja neljä kutsua odottaa. Nämä pelaajat eivät ole kokoonpanossa ennen kuin he hyväksyvät. Tämä ei ole paikka 100 joukkueen taulussa. Mitään ei veloitettu."
  },
  "squadDesk": {
    "kicker": "Ryhmäpiste",
    "title": "Kysymyksiä kirjatuista säännöistä",
    "intro": "Tämä piste lukee vain tällä sivulla julkaistut tosiasiat. Se ei tunnista huijauksia, avaa ottelua eikä muuta tiliä.",
    "questionLabel": "Kysymys",
    "placeholder": "Kysy viidestä paikasta, tilauksista tai tuesta",
    "ask": "Kysy",
    "fallback": "Tämä tiski vastaa vain tämän sivun kirjallisten sääntöjen perusteella: tilaukset, viisi paikkaa, Steam OpenID ja tuki.",
    "facts": {
      "email": "Sähköpostia ei lähetetä. Tilauskuitit pysyvät tällä sivustolla.",
      "charge": "Premium maksaa 7 $ kuukaudessa. Tulossa pian: maksutoimintoa ei vielä ole, joten mitään ei veloiteta.",
      "board": "Tallennettu klaani on kokoonpanotietue. Sitä ei sijoiteta 100 joukkueen tauluun. Taulu näyttää yhä 0 rekisteröitynyttä, kunnes kausi alkaa.",
      "steam": "Kirjautuminen käyttää virallista Steam OpenID:tä. A.C.E. ei koskaan kysy Steam-salasanaa. Tältä sivulta Steam palaa tänne.",
      "roster": "Paikka 1 on kirjautunut kapteeni. Paikoilla 2–5 on oltava jo A.C.E.-tilit. Kutsut odottavat, kunnes kukin pelaaja hyväksyy.",
      "badge": "Paikkamerkeistä tulee live-A.C.E Shield -tarkistuksia, kun huijauksenesto käynnistyy.",
      "support": "Avaa tällä sivustolla Tuki tai Yhteystiedot. Tukikehote ei avaa tukipyyntöä, eikä Yhteystiedot-sivulle kirjoitettua tekstiä toimiteta.",
      "rating": "Uusi luokitus alkaa 1 000:sta. Tämä sivu ei myy luokitusta, avaa jonoa, yhdistä CS2-palvelinta tai toimita palkintoa."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry Fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Tuki"
    },
    "rankLabel": "Ranking {level}",
    "noAgents": "Vapaita pelaajia ei ole vielä tallennettu.",
    "notice": "Kutsut lähtevät vain kirjautuneelta kapteenilta. Paikan merkki ei ole live-huijauksenestotarkistus."
  },
  "tournaments": {
    "meta": {
      "title": "A.C.E.-mestaruus — 100 joukkueen eliittipudotuspelit",
      "description": "100 joukkueen pudotuspelit. Napsauta klaania avataksesi sen kokoonpanon ja sitten kunkin pelaajaprofiilin. Ilmoittautuminen avautuu pian."
    },
    "intro": {
      "title": "A.C.E.-MESTARUUS — 100 JOUKKUEEN ELIITTIPUDOTUSPELIT",
      "lede": "Julkaistu kenttä on 100 joukkueen pudotuspelit. Alla oleva kaavio on tämä asettelu. Klaanin napsauttaminen avaa kokoonpanolaatikon. Ilmoittautuneita 0 / 100. Rahapalkintoa ei mainosteta eikä rahoiteta.",
      "formatValue": "100 joukkueen kaaviomatriisi",
      "briefTitle": "100 joukkueen operaatiokatsaus",
      "briefBody": "Yksi kilpailuasettelu kattaa koko 100 joukkueen kentän. Kun ilmoittautuminen avautuu, ensimmäiset 28 hyväksyttyä klaania saavat vapaakierroksen 1. kierrokselta ja etenevät 2. kierrokselle. Muut 72 klaania pelaavat 1. kierroksen. Täyttämättömien paikkojen nimet ovat paikkamerkkejä, kunnes klaanit ilmoittautuvat. Koko sääntökirja on puun alla. Otteluaulat avautuvat kilpailubetan myötä, ja palkinnot vahvistetaan tapahtumakohtaisesti."
    },
    "timeline": {
      "ariaLabel": "Turnauksen julkaisuaikataulu",
      "kicker": "MESTARUUDEN TIEKARTTA",
      "title": "TURNAUKSEN JULKAISUAIKATAULU",
      "stageLabel": "Vaihe {id}",
      "stages": {
        "registrations": {
          "title": "Avoimet ilmoittautumiset",
          "state": "ESIKATSELUPULSSI"
        },
        "calibration": {
          "title": "Alueelliset kalibrointikaaviot",
          "state": "LUKITTU"
        },
        "quarterFinals": {
          "title": "Elite Pro -puolivälierät",
          "state": "LUKITTU"
        },
        "finals": {
          "title": "Grand Apex -finaalit",
          "state": "LUKITTU"
        }
      },
      "disclaimer": "Vaihe 01 avautuu ensin, kun ilmoittautuminen alkaa. Vaiheet 02–04 seuraavat. Palkintopotit vahvistetaan tapahtumasivulla, kun ne julkistetaan."
    },
    "bracket": {
      "kicker": "100 joukkueen pudotuspelit · tulossa pian",
      "title": "100 joukkueen kaaviomatriisi",
      "statusUnavailable": "Ilmoittautuminen avautuu pian. Kaavio näyttää siihen asti esikatseluklaaneja.",
      "statusEmpty": "Ilmoittautuminen avautuu pian. Siihen asti kaavio näyttää esikatseluklaaneja.",
      "statusStored": "{count} ilmoittautunutta klaania sijoitetaan ensin. Jäljellä olevat paikat näyttävät esikatseluklaaneja. Myöhemmät kierrokset täyttyvät, kun otteluita kirjataan.",
      "openSlot": "Avoin paikka",
      "openCompetitorSlot": "Avoin kilpailijapaikka",
      "openRoster": "Avaa kokoonpano: {name}",
      "bye": "👑 [VAPAAKIERROS - SIJOITETTU 2. KIERROKSELLE]",
      "championStage": "MESTARUUSVAIHE",
      "leftWing": "Vasen siipi",
      "rightWing": "Oikea siipi",
      "emptySlotNotice": "Tämä kilpailijapaikka on tyhjä. Klaania ei ole vielä tallennettu.",
      "grandFinalNotice": "Loppuottelu pysyy avoimena, kunnes molemmat välierät on kirjattu.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "SF"
      }
    },
    "profile": {
      "closeBackdrop": "Sulje joukkueprofiili",
      "kicker": "Mestaruusprofiili · esikatselu",
      "matchesPlayed": "Pelatut ottelut",
      "winRate": "Yhdistetty voittoprosentti",
      "streak": "Aktiivinen turnausputki",
      "rosterHeading": "5 pelaajan kokoonpanomatriisi",
      "openSeat": "Avoin paikka {seat}",
      "noPlayer": "Pelaajaa ei tallennettu",
      "previous": "Edellinen klaani",
      "count": "Klaani {index} / {total}",
      "next": "Seuraava klaani",
      "close": "Sulje profiili",
      "disclosure": "Pelaajien laitteistot ja inventaariot näkyvät täällä, kun pelaajat päättävät jakaa ne. A.C.E. ei kerää laitteistotietoja."
    },
    "player": {
      "level": "TASO {level} · RP {rating}",
      "record": "V–T {wins}–{losses}",
      "kdNotStored": "K/D ei tallennettu",
      "openProfileAria": "Avaa profiili: {name}",
      "openProfile": "Avaa profiili",
      "badge": "VALMIS / HUIJAUKSENESTO-YHTEENSOPIVA",
      "badgeNote": "A.C.E Shield -tarkistus · tulossa pian",
      "gear": {
        "processor": "Suoritin",
        "gpu": "Näytönohjain",
        "mouse": "Hiiri",
        "dpi": "DPI",
        "keyboard": "Näppäimistö",
        "monitor": "Näyttö",
        "headset": "Kuulokkeet"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "Suoritin · ei jaettu",
    "gpu": "Näytönohjain · ei jaettu",
    "mouse": "Hiiri · ei jaettu",
    "dpi": "DPI · ei jaettu",
    "keyboard": "Ei jaettu",
    "monitor": "Virkistystaajuus · ei jaettu",
    "headset": "Ei jaettu"
  },
  "profileDisclosure": "A.C.E. ei tallenna laitteistoinventaarioita eikä aja huijauksenestoasiakasta. Suorituskyvyn trendikaaviot ja taistelumatriisi vaativat A.C.E. Plus- tai Premium-istunnon. Tälle sivulle kirjoitettu Steam-profiilin linkki ei tallennu eikä ole virallinen tunnus.",
  "errors": {
    "signInRequired": "Kirjautuminen vaaditaan.",
    "nameLength": "Joukkueen nimen on oltava 2–32 merkkiä.",
    "alreadyCaptain": "Tämä tili on jo joukkueen kapteeni.",
    "nameTaken": "Samanniminen joukkue on jo olemassa.",
    "idRequired": "SteamID tai A.C.E.-tilitunnus vaaditaan.",
    "noAccountForToken": "Tälle SteamID:lle tai tilitunnukselle ei ole A.C.E.-tiliä.",
    "clanNeedsFour": "Viiden pelaajan klaani tarvitsee kirjautuneen kapteenin ja neljä SteamID:tä.",
    "seatNeedsId": "Jokainen neljästä paikasta tarvitsee SteamID:n tai A.C.E.-tilitunnuksen.",
    "seatsDistinct": "Jokaisella paikalla on oltava eri pelaaja.",
    "captainHoldsSeat": "Kapteeni on jo paikalla 1. Käytä neljää muuta pelaajaa.",
    "fewerThanFour": "Nämä tunnukset kuuluvat alle neljään tiliin.",
    "selfInvite": "Kapteeni ei voi kutsua omaa tiliään.",
    "captainOnly": "Vain nimetty kapteeni voi lähettää kutsuja.",
    "rosterLimit": "CS2-kokoonpano on viisi pelaajaa kapteeni mukaan lukien.",
    "alreadyOnRoster": "Pelaaja on jo kokoonpanossa.",
    "noAccountForId": "Tälle tunnukselle ei ole A.C.E.-tiliä.",
    "inviteNotFound": "Kutsua ei löytynyt.",
    "inviteNotPending": "Tämä kutsu ei ole enää odottamassa.",
    "rosterFull": "Kokoonpano on jo täynnä.",
    "createFailed": "Joukkuetta ei voitu luoda.",
    "inviteFailed": "Kutsu epäonnistui.",
    "updateInviteFailed": "Kutsua ei voitu päivittää."
  }
};
