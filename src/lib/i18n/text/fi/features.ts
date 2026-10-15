import type { TextBag } from "../types";

export const features: TextBag["features"] = {
  "page": {
    "meta": {
      "title": "Ominaisuudet",
      "description": "Määritelty A.C.E. Anti-Cheat -ytimen arkkitehtuuri, biometrinen Face Scan -kytkentä ja kymmenen taitokalibrointitasoa. Nämä järjestelmät eivät ole käytössä tällä sivustolla."
    },
    "header": {
      "kicker": "ACE-OMINAISUUDET / YDIN / FACE-SCAN / KALIBROINTI",
      "title": "Alustan ominaisuusmäärittely",
      "lede": "Tämä sivu on tuotantotason tekninen kartta kolmelle suunnitellulle A.C.E.-järjestelmälle: autonominen huijauksenestoydin, biometrinen Face Scan -kytkentä ja kymmenportainen taitokalibrointi. Mikään tällä sivulla ei ole toimiva ydin, toimiva kameratuote tai toimiva ranked-jono. Steam OpenID, 5v5-joukkueet, kaavioasettelut ja Elo-tyyppinen luokituslaskenta ovat tässä repositoriossa. Omistettuja CS2-palvelimia, maksuja, palkintoja ja ladattavaa eheysasiakasta ei ole."
    },
    "kernel": {
      "title": "Anti-Cheat-ytimen arkkitehtuuri",
      "paragraphs": [
        "Määritelty Autonomous Secure Shell on laitteistoon sidottu eheysasiakas, joka toimisi Counter-Strike 2:n rinnalla pelaajan koneella ja raportoisi allekirjoitetun ALLOW- tai DENY-tilan A.C.E.:n hallinnoimille palvelimille. Ytimen suunnittelu on fail-closed: jos asiakas puuttuu, on pysäytetty, vanhentunut, väärennetty tai vahvistamaton, ranked-pääsy evätään. Selain ei koskaan ole kelpoisuuden ratkaisija. Ranked ETSI OTTELU tällä sivustolla on jo suljettu tästä syystä.",
        "Suunniteltuihin ydinkerroksiin kuuluvat käyttäjätilan kättely, joka sitoo vahvistetun 64-bittisen SteamID:n A.C.E.-tiliin, laitteistotunnisteen (HWID) todennuspinta, tunnettujen huijausperheiden allekirjoitusseurantalista ja jaetulla salaisuudella suojattu palvelimelta palvelimelle -kelpoisuusreitti. Huijausallekirjoituksen tunnistus, kieltäytyminen eheystarkistuksesta tai väärennetty laitetunniste on määritelty aiheuttamaan välittömän tilin tilamuutoksen BANNED- tai PERM_BANNED-tilaan ja, kun laskutustuote on olemassa, ennalta maksetun tilausajan täydellisen menetyksen ilman hyvitysvelvollisuutta. Tällaista asiakasta ei toimiteta tämän sivuston mukana. Tulossa pian -latauskortit ovat vain asettelua."
      ],
      "stats": [
        {
          "label": "YTIMEN TILA",
          "value": "Kehitteillä"
        },
        {
          "label": "RANKED-JONO",
          "value": "Fail-closed"
        },
        {
          "label": "HWID-VARASTO",
          "value": "Ei kerätä tällä sivustolla"
        }
      ]
    },
    "faceScan": {
      "title": "Biometrinen Face Scan -kytkentä",
      "paragraphs": [
        "Face Scan on määritelty tuleva identiteetin sidontakerros, ei kameratuote tällä sivustolla. Suunniteltu malli sitoisi vain nimenomaisen suostumuksen ja erillisen oikeudellisen arvioinnin jälkeen elävyystarkistetun kasvopohjan samaan A.C.E.-tiliin, jolla on jo palvelimen vahvistama SteamID. Tarkoitus on estää tilien jakamista aiemman rajoituksen kiertämiseksi. A.C.E. ei tänään kerää kasvokuvia, kasvoupotuksia, sähköpostiosoitteita tai laitteistosormenjälkiä. Voimassa oleva tietosuojalinja on Välttämättömyys: vain vahvistettu 64-bittinen SteamID ja julkinen Steam-näyttönimi.",
        "Jos Face Scan koskaan toteutetaan, se ei korvaa Steam OpenID:tä, sitä ei käytetä käyttäytymispohjaisen mainonnan myyntiin, eikä se yksinään avaa ranked-jonoja. Ranked-pääsy vaatii edelleen vahvistetun huijauksenestopolun. Kunnes arviointi on tehty, mikä tahansa aulan Face Scan -paneeli on suunnitteluesikatselu."
      ]
    },
    "calibration": {
      "title": "Kymmenen taitokalibrointitasoa",
      "intro": "Kilpailullinen kalibrointi käyttää dokumentoitua Elo-tyyppistä kaavaa (versio {version}, K-kerroin {kFactor}, asteikko {scale}). Uudet tilit alkavat rankingista 1 (Recruit), FREE-tilauksella, ACTIVE-tilassa ja kilpailuluokituksella {startingRating}. Aulan kristallimerkinnät ovat visuaalisia aliaksia. Maksulliset kosmetiikat eivät koskaan osta luokitusta, helpompia vastustajia, 128-tick-palvelimia tai jonoetusijaa. Toimivaa 128-tick-tuotetta ei ole myynnissä.",
      "table": {
        "level": "Taso",
        "engineName": "Moottorin nimi",
        "crystalAlias": "Kristallialias",
        "minRating": "Vähimmäisluokitus"
      },
      "divisions": {
        "before": "Aulan divisioonat I, II ja III ovat esittelymerkkejä. Ne muuttavat vain asettelumittoja. Divisioonakohtaista live-matchmakingia ei ole. Katso ",
        "middle": " 3D-kiertopöytää varten ja ",
        "after": " sitovaa kilpailutekstiä varten."
      }
    }
  },
  "loot": {
    "kicker": "Kosmetiikka · tulossa pian",
    "title": "A.C.E. LOOT-ARKKITEHTUURI — ASEPUDOTUKSET",
    "lede": "Alkuperäiset A.C.E.-viimeistelyt saapuvat kaupan myötä. Kosmetiikka ei koskaan vaikuta kilpailuun.",
    "mockDrop": "Tulossa pian",
    "multiplierLabel": "Voittoprosentin kerroinvaatimukset",
    "ladderLabel": "Viikoittaiset tikapuupudotukset",
    "multiplierValue": "{multiplier}× pohja",
    "ladderValue": "Viikkopaikka · tulossa pian",
    "checkout": "Kassa · tulossa pian"
  },
  "communityRail": {
    "kicker": "Syöte · tulossa pian",
    "newsTitle": "Uusimmat tikapuu-uutiset",
    "newsItems": [
      "Kaavio on yhä tyhjä — 0 / 100 joukkuetta.",
      "Ranked-haku pysyy suljettuna, kunnes huijauksenesto on olemassa."
    ],
    "prizesTitle": "Päivittäiset skinipalkinnot",
    "prizesBody": "Palkinnot ja kassa avautuvat kauden 1 myötä."
  },
  "identityPreview": {
    "badge": "Esikatselu — ei vahvistettu",
    "cards": {
      "faceScan": {
        "title": "Live Face Scan vahvistettu",
        "copy": "Identiteetin elävyys on suunniteltu palveluntarjoajan tarkistus. Biometrisiä tietoja ei kerätä tänään."
      },
      "hardwareId": {
        "title": "Laitteistotunnus linkitetty",
        "copy": "Laitesidonta on suunniteltu eheyssignaali. Laitteistotunnisteita ei kerätä tänään."
      }
    }
  },
  "preview": {
    "fallbackTitle": "Esikatselu",
    "kicker": "Tulossa pian",
    "returnHome": "Palaa etusivulle",
    "pages": {
      "support": {
        "title": "Tuki",
        "body": "Julkinen tukipisteemme avautuu kilpailubetan myötä."
      },
      "anti-cheat": {
        "title": "Huijauksenesto yleiskatsaus",
        "body": "A.C.E.:llä ei ole toimivaa huijauksenestotuotetta. Ranked-matchmaking pysyy suljettuna, kunnes todellinen integraatio on olemassa."
      },
      "download-client": {
        "title": "Lataa asiakas",
        "body": "Ladattavaa A.C.E.-työpöytäasiakasta ei ole. Natiiviasiakas ei kuulu nykyiseen verkkovaiheeseen."
      },
      "mobile-app": {
        "title": "Mobiilisovellus",
        "body": "A.C.E.-mobiilisovellus on tiekartalla."
      },
      "news": {
        "title": "Uutiset",
        "body": "A.C.E.-uutishuone avautuu pian."
      },
      "about": {
        "title": "Tietoa meistä",
        "body": "A.C.E. on itsenäinen Counter-Strike 2 -kilpailusivusto julkisessa esikatseluvaiheessa. Se ei ole Valven kumppani."
      },
      "advertising": {
        "title": "Mainonta",
        "body": "Kumppanuus- ja mainostiedustelut avautuvat pian."
      },
      "developers": {
        "title": "Kehittäjät",
        "body": "Julkista kehittäjäohjelmaa ei vielä ole. Tämän repositorion palvelinkelpoisuus-API:t ovat sisäisiä sovittimia, eivät kumppanien SDK."
      },
      "press": {
        "title": "Lehdistö",
        "body": "Lehdistöpaketti on tulossa pian."
      },
      "jobs": {
        "title": "Työpaikat",
        "body": "Avoimet tehtävät listataan tänne."
      },
      "terms": {
        "title": "Käyttöehdot",
        "body": "Sitovat käyttöehdot on julkaistu osoitteessa /terms. Turnauksen sääntökirja on osoitteessa /rules."
      },
      "privacy": {
        "title": "Tietosuojakäytäntö",
        "body": "Tietosuojakäytäntö on julkaistu osoitteessa /privacy. Steam OpenID on ainoa kirjautumistapa; Steam-salasanoja ei koskaan kerätä."
      },
      "eula": {
        "title": "Anti-Cheat EULA",
        "body": "Anti-Cheat EULA:ta ei ole, koska huijauksenesto ei ole käytössä. Ranked pysyy suljettuna."
      }
    }
  }
};
