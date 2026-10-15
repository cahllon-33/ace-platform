import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kalibrointikodeksi",
    "description": "A.C.E.-arvot selitettyinä. Jokainen kysymys avaa täyden vastauksen luokituspisteistä ja kyseisen arvon säännöistä. Kodeksi ei kirjaa ottelua.",
    "articleTitle": "{title} — Kalibrointikodeksi"
  },
  "groups": {
    "ladder": {
      "title": "Tikkaat",
      "kicker": "Miten arvo luetaan"
    },
    "points": {
      "title": "Luokituspisteet",
      "kicker": "Yksi tallennettu luku"
    },
    "ranks": {
      "title": "Jokainen arvo",
      "kicker": "Merkin säännöt"
    },
    "desk": {
      "title": "Otteludeski",
      "kicker": "Mitä deski voi ja ei voi tehdä"
    }
  },
  "index": {
    "title": "Kalibrointikodeksi",
    "lede": "Kymmenen arvoa. Yksi tallennettu luku. Avaa mikä tahansa kysymys nähdäksesi täyden vastauksen. Otteludeski jatkuu myöhemmillä sivuilla.",
    "status": "Tämä kodeksi selittää kirjoitetut tikkaat. Se ei kirjaa ottelua eikä muuta tallennettua luokitusta.",
    "searchLabel": "Hae kodeksista",
    "searchPlaceholder": "Kokeile 1950, Recruit tai tasapeli",
    "empty": "Mikään merkintä ei vastaa hakua.",
    "columnLabel": "A.C.E.-sarake {n}",
    "pagerLabel": "Kodeksin sivut",
    "first": "Ensimmäinen",
    "previous": "Edellinen",
    "next": "Seuraava",
    "last": "Viimeinen",
    "pageOf": "Sivu {n}/{m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Kalibrointikodeksi",
    "status": "Tämä sivu selittää kirjoitetut tikkaat. Se ei kirjaa ottelua eikä muuta tallennettua luokitusta.",
    "emblemAlt": "{name}-tunnus, arvo {level}",
    "emblemCaption": "Arvo {level} · {name} · {crystal}",
    "examples": {
      "heading": "Laskuesimerkkejä moottorista",
      "intro": "Jokainen rivi kutsuu samaa luokituspistefunktiota, jota tikkaat käyttävät. Syötteet ovat esimerkkejä. Niitä ei tallenneta tilille.",
      "columns": {
        "yourPoints": "Sinun pisteesi",
        "otherSide": "Vastapuoli",
        "result": "Tulos",
        "storedAfter": "Tallennettu jälkeen",
        "change": "Muutos"
      },
      "results": {
        "win": "Voitto",
        "loss": "Tappio",
        "draw": "Tasapeli"
      }
    },
    "turnLabel": "Jatka kodeksin läpi",
    "previous": "Edellinen",
    "next": "Seuraava",
    "alsoIn": "Myös A.C.E.:ssä",
    "backToBoard": "Takaisin arvotaululle"
  },
  "rankArticle": {
    "title": "{name} — Arvo {level}",
    "band": {
      "heading": "Alue",
      "range": "{name} on arvo {level}. Tunnuksen kristallinimi on {crystal}. Tallennettu luokitus välillä {from}–{to} kantaa tätä arvoa."
    },
    "code": {
      "heading": "Arvon säännöt",
      "hold": "Pito. Tili kantaa arvoa {name}, kun sen tallennetut luokituspisteet ovat tällä alueella. Arvo luetaan luvusta. Sitä ei valita valikosta.",
      "gateNext": "Portti. Seuraava arvo avautuu {next} luokituspisteessä.",
      "gateLast": "Portti. Seuraavaa arvoa ei ole. Alue päättyy 3 000 luokituspisteeseen.",
      "record": "Kirjaus. Arvo muuttuu vain, kun kirjattu tulos muuttaa luokituspisteitä. Tämän sivun avaaminen ei kirjaa tulosta.",
      "emblem": "Tunnus. Kuva yksilöi arvon. Osto, skin-esikatselu tai kosmeettinen esine ei siirrä alarajaa."
    },
    "emblem": {
      "heading": "Mihin tunnus on tarkoitettu",
      "material": "Tämän merkin materiaalitutkielma on: {material}. Rivi kuvaa taideteosta. Se ei ole tilasto eikä vaatimus.",
      "sample": "Arvotaululla tämän tunnuksen vieressä näkyvä voittoprosentti on esimerkkimerkki. Sitä ei tarvitse saavuttaa ennen kuin arvoa voi kantaa."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit on aloituslaatta. Uusi Steamiin linkitetty tili tallennetaan 1 000 luokituspisteeseen, ja 1 000 kantaa yhä Recruit-arvoa.",
      "detail": "Operative-portti on 1 100. Tikastaulukko avaa Recruitin nollasta, mutta moottori ei tallenna alle 100:n luokitusta. Välillä 100–1 099 tili pysyy Recruitina."
    },
    "rank-2-operative": {
      "stance": "Operative on ensimmäinen arvo, jonka alaraja on aloitusluvun yläpuolella. Sen saavuttaminen tarkoittaa, että tallennettu luokitus on jättänyt aloituslaatan.",
      "detail": "Alue on sata pistettä leveä. Se päättyy 1 199:ään. Vanguard avautuu 1 200:ssa."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard on alkutikkaiden etureuna. Tili on jo ohittanut sekä aloitusluokituksen että Operativen alarajan.",
      "detail": "Alue kulkee 1 200:sta 1 299:ään. Specialist avautuu 1 300:ssa."
    },
    "rank-4-specialist": {
      "stance": "Specialist on taitoarvo. Tunnuksen kristallinimi on GOLD. Tikkaisiin tallennettu virallinen nimi on Specialist. Ne ovat sama taso.",
      "detail": "Alue kulkee 1 300:sta 1 399:ään. Veteran avautuu 1 400:ssa."
    },
    "rank-5-veteran": {
      "stance": "Veteran on keskimmäinen merkki. Tämän tason alla on neljä arvoa ja yläpuolella viisi.",
      "detail": "Alue kulkee 1 400:sta 1 499:ään. Elite avautuu 1 500:ssa. Tämän tunnuksen kristallinimi on PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Elite on moottorin nimi. DIAMOND on saman tunnuksen kristallinimi. Kumpikaan ei ole toinen luokitus.",
      "detail": "Alue kulkee 1 500:sta 1 599:ään. Master avautuu 1 600:ssa."
    },
    "rank-7-master": {
      "stance": "Master on ensimmäinen arvo, jonka kristallinimi ja virallinen nimi ovat sama sana. Alaraja on 1 600.",
      "detail": "Alue kulkee 1 600:sta 1 699:ään. Grandmaster avautuu 1 700:ssa."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster on safiiriaskel. Alaraja on 1 700, yhä sata pistettä leveä, ja Sovereign odottaa 1 800:ssa.",
      "detail": "Alue kulkee 1 700:sta 1 799:ään. Mikään tällä sivulla ei käytä ottelua sen ylittämiseen."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign on leveä askel ennen Legendiä. Kristallinimi on IMMORTAL. Virallinen nimi on Sovereign.",
      "detail": "Alue kulkee 1 800:sta 1 949:ään. Se on 150 pistettä, ei 100. 1 949 kantaa yhä Sovereignia. Legend avautuu 1 950:ssä."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend on viimeinen merkki. Kristallinimi on ACE ELITE. Virallinen nimi on A.C.E. Legend.",
      "detail": "Alue avautuu 1 950:ssä ja päättyy moottorin kattoon, 3 000:een. Yhdettätoista arvoa ei ole. Tallennettu luokitus ei voi nousta yli 3 000:n."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Mikä A.C.E.-arvo on",
      "lede": "Arvo on merkki, joka sisältää tallennetut luokituspisteesi. Kymmenen merkkiä kattaa koko tikkaat Recruitista A.C.E. Legendiin.",
      "sections": [
        {
          "heading": "Yksi luku, yksi merkki",
          "paragraphs": [
            "Tili tallentaa kilpailuluokituksen. Tikkaat lukevat luvun ja palauttavat korkeimman arvon, jonka alarajan luku on saavuttanut. Sinulla ei ole kahta arvoa yhtä aikaa.",
            "Recruit on arvo 1. A.C.E. Legend on arvo 10. Virallinen nimi on tikkaiden nimi. Tunnuksen lyhyempi sana on saman arvon kristallinimi.",
            "Tämä kodeksi selittää kirjoitetut tikkaat. Se ei kirjaa ottelua eikä muuta tallennettua luokitusta."
          ]
        },
        {
          "heading": "Miten alarajat asettuvat",
          "paragraphs": [
            "Recruit kattaa tikkaiden alun. Operative avautuu 1 100:ssa. Vanguardista Grandmasteriin jokainen uusi alaraja on 100 pistettä korkeammalla: 1 200, 1 300, 1 400, 1 500, 1 600 ja sitten 1 700.",
            "Sovereign avautuu 1 800:ssa ja pitää tilin 1 949:ään asti. A.C.E. Legend avautuu 1 950:ssä. Moottorin katto on 3 000, joten Legend on pisin alue."
          ]
        },
        {
          "heading": "Mitä arvo ei ole",
          "paragraphs": [
            "Arvo ei ole väkilukukatto. Legend on alaraja, ei tuhannen tilin lista.",
            "Arvo ei ole palkinto, skin tai jono. Julkinen sivusto voi näyttää merkin. Se ei pelaa ottelua, joka kirjoittaisi uuden."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Virallinen nimi ja kristallinimi",
      "lede": "Jokaisella arvolla on kaksi nimeä. Virallinen nimi on tikkaissa. Kristallinimi on tunnukseen kaiverrettu sana.",
      "sections": [
        {
          "heading": "Miksi molemmat ovat olemassa",
          "paragraphs": [
            "Moottori ja profiili käyttävät virallista nimeä: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Tunnuksessa on myös kristallinimi: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Nimi on taidetta. Se ei luo yhdettätoista arvoa eikä tallenna toista lukua."
          ]
        },
        {
          "heading": "Missä ne eroavat",
          "paragraphs": [
            "Specialistin kristallinimi on GOLD. Veteranin PLATINUM. Eliten DIAMOND. Sovereignin IMMORTAL. A.C.E. Legendin ACE ELITE. Jokaisessa tapauksessa alaraja kuuluu yhä viralliselle nimelle.",
            "Master ja Grandmaster käyttävät samaa sanaa molemmissa paikoissa."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "Taulun kolme divisioonaa",
      "lede": "Divisioonat III, II ja I ovat lukuapu, joka on maalattu arvon alueen poikki. Tili ei tallenna divisioonaa.",
      "sections": [
        {
          "heading": "Mitä tallennetaan",
          "paragraphs": [
            "Kirjautunut tili tallentaa arvotason ja kilpailuluokituksen. Arvotaso seuraa luokitusta. Niiden vieressä ei ole divisioonasaraketta.",
            "Arvotaululla valitun arvon alue jaetaan kolmeen näyttöaskeleeseen, jotta silmä näkee tason alaosan, keskikohdan ja yläosan. Divisioona III on alueen alapää. Divisioona I on yläpää."
          ]
        },
        {
          "heading": "Mitä merkit ovat",
          "paragraphs": [
            "Merkkien voittoprosentit ja edistymismerkinnät ovat esimerkkejä. Ne eivät ole toinen tikkaat eivätkä tavoite, joka pitää ylittää.",
            "Divisioonamerkin vaihtaminen ei muuta tallennettua luokitusta. Vain kirjattu tulos voi tehdä sen, eikä tämä sivu kirjaa sellaista."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Mikä ei voi siirtää arvoa",
      "lede": "Merkki seuraa tallennettuja luokituspisteitä. Kaikki muu sivustolla jättää merkin paikalleen.",
      "sections": [
        {
          "heading": "Moottorin ulkopuolella",
          "paragraphs": [
            "Skin-esikatselu, kauppakortti, tilausmerkintä ja kosmeettinen esine eivät lisää luokituspisteitä. Tilauksen maksaminen ei ole arvo.",
            "Arvotaulun avaaminen, tunnuksen pyörittäminen tai tämän kodeksin lukeminen ei kirjaa ottelua.",
            "Ilmoitus, tukimerkintä ja turnausasettelu eivät kirjoita tallennettua luokitusta uudelleen."
          ]
        },
        {
          "heading": "Ainoa polku",
          "paragraphs": [
            "Kirjoitettu polku on kirjattu ottelutulos, joka kulkee luokituspistemoottorin läpi. Mikään tämän sivuston julkinen sivu ei kirjoita sellaista tulosta tänään.",
            "Kunnes tulos on olemassa, uusi tili pysyy aloitusluokituksessaan ja olemassa oleva tili säilyttää jo tallennetun luokituksen."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Mitä luokituspisteet ovat",
      "lede": "Luokituspisteet ovat tilille tallennettu kilpailuluku. Arvo on vain alue, jolle luku osuu.",
      "sections": [
        {
          "heading": "Tallennettu kenttä",
          "paragraphs": [
            "Moottorin versio on {version}. Uusi tili alkaa {startingRating} luokituspisteestä. Tallennettu luku ei voi laskea alle {minRating}:n eikä nousta yli {maxRating}:n.",
            "Profiilit ja arvotaulu lukevat tämän luvun, kun olet kirjautunut. Kun et ole kirjautunut, taulu näyttää valitsemasi tunnuksen kalibrointialarajan. Se on esimerkki, ei tilisi."
          ]
        },
        {
          "heading": "Mitä luku mittaa",
          "paragraphs": [
            "Moottori vertaa luokitustasi vastapuolen keskiluokitukseen. Se ei pidä erillistä pistettä henkilökohtaisesta palkinnosta, pääosumaprosentista tai utility-heitoista. Ne eivät kuulu tähän versioon.",
            "Korkeampi luku tarkoittaa, että tikkaat odottavat sinun voittavan useammin matalampaa lukua vastaan. Arvojen nimet ovat asteikon julkinen tulkinta."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Mistä uusi tili alkaa",
      "lede": "Steam-kirjautuminen luo tilin 1 000 luokituspisteeseen, arvo 1, Recruit, ilman voittoja ja tappioita.",
      "sections": [
        {
          "heading": "Aloitusmerkki",
          "paragraphs": [
            "1 000 on Recruitin sisällä. Operative avautuu vasta 1 100:ssa, joten uusi tili ei ohita aloituslaattaa.",
            "Uudelleenkirjautuminen ei nollaa jo tallennettua luokitusta. Kodeksi ei pelaa sijoitusotteluita eikä keksi voitto–tappio-historiaa."
          ]
        },
        {
          "heading": "Miten sen näkee",
          "paragraphs": [
            "Steam-kirjautumisen jälkeen kojelauta ja arvotaulu voivat näyttää tallennetun luokituksen. Jos tietokantaan ei saada yhteyttä, sivu kertoo sen keksimättä lukua.",
            "Aloitusarvo pysyy Recruitina, kunnes kirjattu tulos siirtää luokituksen yli 1 100:n. Tältä sivustolta ei tänään kirjoiteta sellaista tulosta."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Miten kirjattu tulos siirtää luokituspisteitä",
      "lede": "Moottori käyttää yhtä askelkokoa, 32, ja yhtä asteikkoa, 400. Tulos on voitto, tappio tai tasapeli vastapuolen keskiarvoa vastaan.",
      "sections": [
        {
          "heading": "Askel",
          "paragraphs": [
            "Odotettu tulos on todennäköisyys, jonka moottori antaa ennen ottelua pelkkien kahden luokituksen perusteella. Tasaväkistä luokitusta vastaan se on puolet, joten voitto tuo 16 luokituspistettä ja tappio vie 16.",
            "Korkeampaa luokitusta vastaan voitto tuo yli 16 ja tappio vie alle 16. Matalampaa luokitusta vastaan voitto tuo alle 16 ja tappio vie yli 16. Tulos pyöristetään kokonaisluvuksi ja pidetään välillä 100–3 000.",
            "Joukkuetuloksessa jokaista puolen pelaajaa mitataan vastapuolen keskimääräisiä luokituspisteitä vastaan. Nykyinen moottori antaa jokaiselle puolen pelaajalle saman polun. Se ei lisää bonusta henkilökohtaisesta palkinnosta."
          ]
        },
        {
          "heading": "Tasapeli",
          "paragraphs": [
            "Tasapeli on puolikas tulos. Jos luokitukset ovat tasan, odotettu tulos on jo puolet, joten tasapeli siirtää lukua nollalla.",
            "Tämän sivun taulukko on moottori esimerkkisyötteillä. Rivit eivät ole tallennettuja otteluita eivätkä ne ole tilisi."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Alaraja, katto ja ohitettu arvo",
      "lede": "Tallennettu luku pysähtyy 100:aan ja 3 000:een. Arvo seuraa aina lukua, joten arvoa ei voi ohittaa napilla.",
      "sections": [
        {
          "heading": "Pysäytykset",
          "paragraphs": [
            "Tappio 100 luokituspisteessä pysyy 100:ssa. Voitto 3 000:ssa pysyy 3 000:ssa. Recruitin tikasalaraja on kirjattu nollaksi, mutta tallennettu luku ei koskaan käytä alle 100:n väliä.",
            "1 949 on Sovereign. 1 950 on A.C.E. Legend. Välimerkkiä ei ole."
          ]
        },
        {
          "heading": "Ei ohitusta",
          "paragraphs": [
            "Jos kirjattu tulos hyppäisi luvun 1 050:stä 1 260:een, tili kantaisi Vanguardia, koska 1 260 on sillä alueella. Välissä olevia arvoja ei jonouteta erillisinä ylennyksinä. Luku luetaan kerran.",
            "Mikään tämän sivuston sivu ei tee tuota hyppyä. Esimerkki vain näyttää, miten tikkaat lukevat luvun."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Missä ottelulinkki näkyisi",
      "lede": "Ottelulinkki on pelipalvelimen osoite. Tämä sivusto ei anna sellaista.",
      "sections": [
        {
          "heading": "Deski, jonka voit avata",
          "paragraphs": [
            "Pelisivu näyttää kymmenen pelaajan asettelun ja FIND MATCH -painikkeen. Painike pysyy suljettuna. Se ei voi avata Counter-Strike 2 -palvelinta eikä anna kenellekään osoitetta.",
            "Sivustolla olevien ihmisten määrä ei ole pelissä olevien määrä. Ottelun pelaajamäärä on 0."
          ]
        },
        {
          "heading": "Missä linkki olisi myöhemmin",
          "paragraphs": [
            "Jos ottelupalvelin olisi olemassa, osoite ja sen salasana näytettäisiin otteludeskissä, kun kymmenen pelaajaa on hyväksynyt. Pelaaja liittyisi Steamista. Tälle sivustolle ei tallenneta osoitetta eikä salasanaa luoda.",
            "Steam-kirjautuminen linkittää tilin. Se ei pudota pelaajaa kartalle."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Mikä ranked-deski on",
      "lede": "Ranked-deski on pelisivun asettelu 5v5:lle. Se on suljettu deski, ei avoin jono.",
      "sections": [
        {
          "heading": "Mitä piirretään",
          "paragraphs": [
            "Kaksi puolta, kummallakin viisi paikkaa, ja kapteenimerkintä ensimmäisellä paikalla. Karttalista ja chat-rivi niiden vieressä kuuluvat samaan asetteluun.",
            "Sivun turvallisuusrivit on merkitty tilallaan. Mikään niistä ei ole vielä käynnissä oleva tarkistus; katso tiekartta sivulta /anti-cheat."
          ]
        },
        {
          "heading": "Mitä deski ei tee",
          "paragraphs": [
            "FIND MATCH ei etsi vastustajia. Se ei muuta luokituspisteitä. Tilin arvo on yhä tallennettu luku, jonka tämän kodeksin tikkaat lukevat.",
            "Legendin yläpuolella ei ole erillistä huippujonoa. A.C.E. Legend on viimeinen merkki, ja se avautuu 1 950 luokituspisteessä."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Apua otteludeskistä",
      "lede": "Tämän sivuston tuki on kirjallinen deski. Se ei avaa suoraa äänilinjaa ottelun sisällä.",
      "sections": [
        {
          "heading": "Mitä tukisivu tekee",
          "paragraphs": [
            "Tukisivu listaa deskit ja tarjoaa tikettipainikkeen. Painikkeen valinta ei luo tapausta eikä tavoita ihmistä ottelun aikana, koska yhtään ottelua ei ole käynnissä.",
            "Sääntökysymys kuuluu kilpailusääntöihin sivulla /rules. Tikaskysymys kuuluu tähän kodeksiin."
          ]
        },
        {
          "heading": "Vastalause, kun ottelu on olemassa",
          "paragraphs": [
            "Kirjoitetut säännöt sanovat, että kapteeni voi jättää vastalauseen ennen seuraavan kartan alkua nimeten kartan, kierroksen ja artiklan. Tämä sivusto ei tallenna demoja eikä ylläpidä pelipalvelimia, joten jätetyllä vastalauseella ei ole tänään paikkaa.",
            "Asettelun tulos ei ole pelattu ottelu. Henkilökunta kirjaisi sarjan tuloksen vasta todellisen sarjan jälkeen."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "Kymmenen pelaajan odotus",
      "lede": "Kilpailukartta tarvitsee kymmenen aloittajaa. Deski ei pidä sitä odotusta tänään.",
      "sections": [
        {
          "heading": "Kirjoitettu kello",
          "paragraphs": [
            "Kun ottelulla on julkaistu alkuaika, puolen viiden aloittajan on oltava paikalla 15 minuuttia ennen sitä. Lause on kilpailusäännöissä. Kello ei käynnisty tällä sivustolla, koska ottelua ei ole julkaistu.",
            "Pelisivulla näkyvät nimet ovat esikatseluja. Ne eivät ole jonossa istuvia ihmisiä."
          ]
        },
        {
          "heading": "Mitä ei tapahdu katsoessasi",
          "paragraphs": [
            "Sivu ei varaa palvelinta, lähetä ilmoitusta eikä laske alas hyväksyntään. Sivulta poistuminen ei hylkää ottelua, koska et ollut sellaisessa."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Kapteeni deskillä",
      "lede": "Yksi kapteeni puhuu puolen puolesta. Aularoolit aktivoituvat kilpailubetan myötä.",
      "sections": [
        {
          "heading": "Mitä säännöt määräävät",
          "paragraphs": [
            "Kapteeni hoitaa vetot, tauot ja vastalauseen. Muut aloittajat pelaavat. Vaihtopelaaja voi tulla vain karttojen välillä.",
            "Yhden kartan ottelussa kapteenit bannaavat kartan kerrallaan, kunnes yksi jää. Pooli on Ancient, Anubis, Dust II, Inferno, Mirage, Nuke ja Train. Korkeampi sijoitus on Team A ja valitsee, bannaako ensin vai toisena; tasasijoitukset ratkaistaan kolikonheitolla. Yhtään vetoa ei ole auki tänään."
          ]
        },
        {
          "heading": "Tauot",
          "paragraphs": [
            "Tauot pätevät vasta, kun ottelupalvelin on olemassa. Täällä sellaista ei ole. Kirjoitettu kiintiö joukkuetta kohden kartalla on kolme 30 sekunnin taktista taukoa, lisäksi yksi jatkoajalla, ja yhteensä 10 minuuttia teknistä taukoa. Koko teksti on sivulla /rules.",
            "Joukkuesivulla kapteeni on myös jäsenyys, joka voi lähettää kokoonpanokutsun. Kutsu on erillinen ottelun aulasta."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Kun puoli ei ole valmis",
      "lede": "Kilpailusäännöt kuvaavat luovutuksen ottelulle, jolla on julkaistu alkuaika. Tämä sivusto ei anna sitä luovutusta.",
      "sections": [
        {
          "heading": "Kirjoitettu sääntö",
          "paragraphs": [
            "Viiden aloittajan on oltava valmiina 15 minuuttia ennen julkaistua alkua. Puoli, joka on yhä vajaa 15 minuuttia alun jälkeen, luovuttaa sarjan, kun ottelu on olemassa. Jos molemmat puolet puuttuvat, molemmat poistetaan ja henkilökunta kirjaa paikan.",
            "Klaani, joka aloittaa kartan alle viidellä kelvollisella aloittajalla eikä sillä ole vaihtopelaajaa, luovuttaa sen kartan."
          ]
        },
        {
          "heading": "Mitä tämä sivusto ei tee",
          "paragraphs": [
            "Mikään täällä ei seuraa aulaa eikä kirjaa luovutusta itsestään. Pelisivun painike ei voi luovuttaa karttaa, jota ei koskaan ladattu.",
            "Turnauspuun asettelun tulos ei ole pelattu ottelu eikä luovutus."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Mukaan 100 klaanin pudotuspeleihin",
      "lede": "Turnaussivu on 100 klaanin puu. Rekisteröityminen on 0/100. Ilmoittautuminen ei ole auki.",
      "sections": [
        {
          "heading": "Mitä voit avata",
          "paragraphs": [
            "Napsauta puussa klaania lukeaksesi sen kokoonpanon ja avaa sitten pelaaja. Avoimien paikkojen nimet ovat esikatseluja, eivät hyväksyttyjä ilmoittautumisia.",
            "Puu ei sijoita palvelinta eikä lähetä ottelulinkkiä."
          ]
        },
        {
          "heading": "Vapaakierros, kun ilmoittautuminen avautuu",
          "paragraphs": [
            "Kirjoitettu sääntö tulevalle ilmoittautumiselle on, että 28 ensimmäistä hyväksyttyä klaania ohittaa kierroksen 1. Vapaakierros ei ole palkinto, eikä sitä voi lunastaa, kun rekisteröityminen on 0/100.",
            "Sarjan pituus, karttapooli ja vastalauseet ovat kilpailusäännöissä sivulla /rules."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Miten kokoonpano kootaan",
      "lede": "Kapteeni kutsuu pelaajan, jolla on jo A.C.E.-tili. Julkista jakolinkkiä ei ole, eikä Steam-salasanaa koskaan kysytä.",
      "sections": [
        {
          "heading": "Olemassa oleva kutsu",
          "paragraphs": [
            "Joukkuesivulla kirjautunut kapteeni liittää SteamID64:n tai A.C.E.-tilitunnuksen. Tilin on oltava jo linkitetty Steam OpenID:llä. Palvelin kirjoittaa odottavan kutsun, kun tietokanta hyväksyy sen.",
            "Kokoonpanossa on viisi pelaajaa kapteeni mukaan lukien. Kapteeni ei voi kutsua omaa tiliään. Jo kokoonpanossa oleva pelaaja hylätään. Jos tietokanta on alhaalla, kutsu epäonnistuu eikä kutsua tallenneta."
          ]
        },
        {
          "heading": "Mitä kutsu ei ole",
          "paragraphs": [
            "Kutsu ei lähetä kirjettä, avaa yksityistä aulaa eikä luo julkaistavaa linkkiä. Se ei sijoita klaania pudotuspeleihin.",
            "Pudotuspelisäännöt sallivat kaksi nimettyä vaihtopelaajaa, kun turnausilmoittautuminen on olemassa. Ilmoittautuminen ei ole auki, joten ne paikat eivät ole tänään käytettävä lupa."
          ]
        }
      ]
    }
  }
};
