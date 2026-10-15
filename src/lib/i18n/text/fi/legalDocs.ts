import type { TextBag } from "../types";

export const legalDocs: TextBag["legalDocs"] = {
  "translationNotice": "Tämä sivu on käännös, joka tarjotaan avuksi. Jos käännös ja englanninkielinen teksti eroavat, sovelletaan englanninkielistä tekstiä.",
  "terms": {
    "meta": {
      "title": "Käyttöehdot",
      "description": "A.C.E.-sivuston käyttöehdot tälle Counter-Strike 2 -kilpailusivustolle. Ranked, maksut ja huijauksenesto eivät ole käytössä."
    },
    "kicker": "ACE-LEGAL / KÄYTTÖEHDOT",
    "title": "Käyttöehdot",
    "lede": "Nämä ehdot koskevat A.C.E.:n julkisen sivuston ja siihen liitettyjen tili-API:en käyttöä. Ottelun pituus, karttapooli, kokoonpanon lukitus ja protestit on kuvattu kilpailusääntökirjassa osoitteessa /rules, joka sisällytetään tähän.",
    "sections": {
      "operator": {
        "title": "1. Ylläpitäjä ja riippumattomuus",
        "paragraphs": [
          "Palvelua ylläpitää A.C.E. Competitions Ltd. (y-tunnus julkaistaan myöhemmin). Sivuston käyttäminen tarkoittaa, että hyväksyt nämä ehdot, tietosuojakäytännön, evästekäytännön ja kilpailusääntökirjan."
        ]
      },
      "eligibility": {
        "title": "2. Kelpoisuus ja tilit",
        "paragraphs": [
          "Sinun on oltava riittävän vanha käyttääksesi Steamia maassasi. Tilit luodaan vain virallisen Steam OpenID:n kautta. Et saa jakaa tiliä rajoituksen kiertämiseksi. A.C.E. ei koskaan kysy Steam-salasanaa."
        ]
      },
      "notActive": {
        "title": "3. Mitä tämä sivusto ei ole",
        "paragraphs": [
          "Ranked-matchmaking, live-CS2-pelipalvelimet, toimiva tekoälypohjainen huijauksenesto, laskutus ja palkinnot eivät ole käytössä. Aulan kellot ja eheyspaneelit ovat esikatseluja, ellei sivu toisin ilmoita."
        ]
      },
      "subscriptions": {
        "title": "4. Ehdotetut tilaukset",
        "paragraphs": [
          "Plus (4 $/kk) ja Premium (7 $/kk) ovat näyttöhintoja. Tällä sivustolla ei vielä ole maksutoimintoa, ja pakettien painikkeissa lukee Tulossa pian. Kun laskutus on olemassa, sovelletaan sivun /pricing peruutussääntöä: kuukausittain jatkuva tilaus, peruminen hallintapaneelin asetuksista, osittaisia kuukausia ei hyvitetä."
        ]
      },
      "antiCheat": {
        "title": "5. Huijauksenestoasiakas (ei julkaistu)",
        "paragraphs": [
          "Tällä sivustolla ei ole ladattavaa huijauksenestoasiakasta. Kilpailusäännöt osoitteessa /rules eivät kerää laitteistotunnistetta eivätkä bannaa laitetta. Tilin jakaminen rajoituksen kiertämiseksi on kielletty."
        ]
      },
      "liability": {
        "title": "6. Vastuunrajoitus",
        "paragraphs": [
          "Lain sallimissa rajoissa A.C.E. ei vastaa menetetystä rankingista, menetetyistä kosmetiikoista, jotka eivät koskaan olleet todellisia esineitä, tai kolmannen osapuolen Steam- / CS2-katkoista. Maasi pakottavia kuluttajansuojaoikeuksia ei suljeta pois, jos niistä ei voi luopua."
        ]
      },
      "copyright": {
        "title": "7. Tekijänoikeus sivuston alkuperäiseen materiaaliin",
        "paragraphs": [
          "Tälle sivustolle luotu alkuperäinen teksti, sivuasettelu, emblemit ja grafiikka kuuluvat A.C.E. Competitions Ltd:lle. Et saa kopioida, julkaista uudelleen tai kaapia tätä alkuperäistä materiaalia toiseen tuotteeseen ilman kirjallista lupaa. Lain salliessa A.C.E. voi panna tämän oikeuden täytäntöön, myös vaatimuksella. Tämä ilmoitus ei käynnistä oikeusjuttua, ei määrää vahingonkorvausta eikä takaa tuomioistuimen ratkaisua.",
          "Counter-Strike 2, Steam ja karttojen nimet Dust II, Mirage, Inferno, Nuke, Ancient, Anubis ja Train kuuluvat Valvelle. A.C.E. ei vaadi niitä itselleen. Tämän sivuston avaaminen ei kumoa laillista oikeutta eikä solmi sopimusta."
        ]
      },
      "contact": {
        "title": "8. Yhteystiedot",
        "paragraphs": [
          "support@ace-platform.gg — A.C.E. Competitions Ltd. — Y-tunnus julkaistaan myöhemmin."
        ]
      }
    }
  },
  "privacy": {
    "meta": {
      "title": "Tietosuojakäytäntö",
      "description": "A.C.E.:n tietosuojakäytäntö: vain välttämättömät tiedot, vain Steam OpenID, ei Steam-salasanoja, ei käyttäytymistietojen myyntiä."
    },
    "kicker": "ACE-PRIVACY / GDPR / VÄLTTÄMÄTTÖMYYS",
    "title": "Tietosuojakäytäntö",
    "lede": "Tämä tietosuojakäytäntö selittää, mitä A.C.E. Competitions Ltd. tallentaa, kun käytät tätä sivustoa. Käännökset tarjotaan avuksi; englanninkielinen versio on viiteteksti. Tämä ei ole väite, että jokainen tuleva tuotepinta on jo olemassa.",
    "strictNecessity": {
      "title": "Välttämättömyyden periaate",
      "intro": "Keräämme vähimmäismäärän tilitietoja, joita tarvitaan kilpapelaajan tunnistamiseen ja ilmeisten petosten estämiseen omassa palvelussamme. Emme kerää tarpeettomia lokeja, emme kaavi yksityisiä Steam-inventaarioita emmekä myy kolmansien osapuolten käyttäytymistietoja.",
      "storedIntro": "Tällä hetkellä tallennetaan onnistuneen Steam OpenID -kirjautumisen jälkeen:",
      "stored": [
        {
          "label": "Vahvistettu 64-bittinen SteamID",
          "body": "jonka Steamin virallinen OpenID-vakuutus palauttaa ja joka tarkistetaan palvelimella ennen A.C.E.-tilin luomista tai päivittämistä."
        },
        {
          "label": "Julkinen Steam-näyttönimi",
          "body": "kun Steam Web API -avain on määritetty. Tämä on hahmonimi, ei sähköpostilaatikko."
        },
        {
          "label": "A.C.E.-tilitiedot",
          "body": "kuten rankingtaso, luokituspisteet, voitot/tappiot, joukkuejäsenyys ja istuntotunnisteiden tiivisteet."
        }
      ],
      "notCollected": {
        "before": "Sähköpostiosoitteita ja salattuja laitteistoprofiileja",
        "strong": "ei kerätä tällä sivustolla tänään",
        "after": ". Aulan kasvoskannaus- ja HWID-kortit ovat suunnitteluesikatseluja. Jos tuleva huijauksenestoasiakas tai tukikanava vaatii sähköpostin tai laitteistosormenjäljen, keruu rajoitetaan petosten estämiseen, siitä kerrotaan ensin täällä, eikä sitä myydä mainostietona."
      }
    },
    "neverCollect": {
      "title": "Mitä emme koskaan kerää",
      "items": [
        "Steam-salasanoja. Kirjautuminen tapahtuu vain Steam OpenID:llä / Steamin virallisella prosessilla.",
        "Maksukorttien numeroita. Maksutoimintoa ei ole toteutettu.",
        "Ytimen telemetriaa. Tämän sivuston mukana ei toimiteta huijauksenestoasiakasta."
      ]
    },
    "steamBoundary": {
      "title": "Kolmannen osapuolen upotukset ja Steam OpenID -raja",
      "callback": {
        "before": "Steam-kirjautuminen poistuu A.C.E.:stä, tunnistautuu Steamissa ja palaa osoitteeseen",
        "after": ". Palvelin vahvistaa OpenID-vakuutuksen (mukaan lukien väitetyn identiteetin ja Steamin allekirjoittamat parametrit) ennen istunnon kirjoittamista. Steamin tietosuojakäytäntö koskee Steamin hallussa olevia tietoja. A.C.E. säilyttää vain vahvistetun SteamID:n ja tilin toimintaan tarvittavat julkiset hahmokentät."
      },
      "footerLinks": "Alatunnisteen ulkoisten verkkojen kuvakkeet ovat hakemistolinkkejä julkisille sivustoille. Ne eivät ole virallisia A.C.E.-tilejä eivätkä upota seurantawidgettejä."
    },
    "rights": {
      "title": "GDPR-tyyppiset oikeudet",
      "before": "Jos olet alueella, jolla on henkilötieto-oikeuksia, voit pyytää A.C.E.-tilitietojesi tarkastamista, korjaamista tai poistamista lähettämällä sähköpostia osoitteeseen",
      "after": ". Ranked-huijauksenestoon liittyviä laitteistopitoja ei ole käytössä; sivustotilin poistaminen ei ole CS2 VAC -valitus."
    },
    "cookies": {
      "title": "Evästeet",
      "before": "Katso",
      "link": "Evästekäytäntö",
      "after": "ja suostumuspalkki. Välttämättömät istuntoevästeet vaaditaan kirjautumisen jälkeen. Valinnaisia luokkia ei käytetä, ennen kuin seurain todella lisätään."
    },
    "controller": {
      "title": "Rekisterinpitäjä",
      "body": "A.C.E. Competitions Ltd. Y-tunnus julkaistaan myöhemmin. Yhteys: support@ace-platform.gg."
    }
  },
  "cookiePolicy": {
    "meta": {
      "title": "Evästekäytäntö",
      "description": "A.C.E.:n eväste- ja telemetriatietosuoja-auditointi. Vain välttämättömät istuntoevästeet, ellet valitse varattuja valinnaisia luokkia."
    },
    "kicker": "ACE-PRIVACY / EVÄSTEET / TELEMETRIA-AUDITOINTI",
    "title": "Evästekäytäntö",
    "lede": "Tämä sivu on ace-platform.gg:n telemetrian tietosuoja-auditointi. Se kuvaa evästeet, joita tämä sivusto todella käyttää, myöhemmäksi varatut luokat ja sen, mitä ei kerätä.",
    "audit": {
      "title": "100 % telemetria-auditointi (nykyinen versio)",
      "body": "A.C.E. ei käytä tällä julkisella sivustolla mainospikseleitä, Google Analyticsia, Meta Pixeliä, sormenjälki-SDK:ita tai muita kolmannen osapuolen käyttäytymisseurantoja. Suostumuspalkin valinnaiset ”Analytiikkaseurannat” ja ”Markkinointiseurannat” ovat vain luokkia. Niiden valitseminen ei tänään lataa skriptiä. Jos seurain lisätään myöhemmin, se lukee ensin tallennetun valinnan ja pysyy pois päältä, ellet ole antanut suostumusta."
    },
    "essential": {
      "title": "Välttämättömät evästeet [Pakollinen / lukittu]",
      "session": {
        "label": "Istuntoeväste",
        "body": "— asetetaan vain vahvistetun Steam OpenID -takaisinkutsun jälkeen. HttpOnly, sivun JavaScript ei voi lukea sitä, käytetään pitämään sinut kirjautuneena A.C.E.:hen."
      },
      "necessity": "Nämä evästeet ovat ehdottoman välttämättömiä tunnistetun tilin käyttämiseksi. Ne eivät ole mainostunnisteita."
    },
    "analytics": {
      "title": "Analytiikkaseurannat [Valinnainen]",
      "before": "Varattu. Tuoteanalytiikan toimittajaa ei ole määritetty. Valintasi tallennetaan paikallisesti kohteeseen",
      "after": "jotta tuleva ensimmäisen osapuolen käyttömittari voi kunnioittaa sitä."
    },
    "marketing": {
      "title": "Markkinointiseurannat [Valinnainen]",
      "body": "Varattu. A.C.E. ei myy, vuokraa tai välitä käyttäytymisprofiileja. Tällä sivustolla ei ole markkinoinnin tagienhallintaa."
    },
    "change": {
      "title": "Kuinka muutat valintaasi",
      "body": "Käytä alatunnisteen evästeasetuksia tai tyhjennä sivuston tiedot selaimessasi. Valinnaisten luokkien hylkääminen ei koskaan estä Steam-kirjautumista."
    }
  }
};
