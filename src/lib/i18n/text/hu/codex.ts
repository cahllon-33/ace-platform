import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kalibrációs kódex",
    "description": "Az A.C.E. rangjai magyarázva. Minden kérdés teljes választ nyit a Rating Pointsról és az adott rang szabályairól. A kódex nem rögzít meccset.",
    "articleTitle": "{title} — Kalibrációs kódex"
  },
  "groups": {
    "ladder": {
      "title": "A létra",
      "kicker": "Hogyan olvasható egy rang"
    },
    "points": {
      "title": "Rating Points",
      "kicker": "Az egyetlen tárolt szám"
    },
    "ranks": {
      "title": "Minden rang",
      "kicker": "A jelzés szabályai"
    },
    "desk": {
      "title": "Meccspult",
      "kicker": "Mit tud és mit nem tud a pult"
    }
  },
  "index": {
    "title": "Kalibrációs kódex",
    "lede": "Tíz rang. Egy tárolt szám. Nyiss meg bármelyik kérdést a teljes válaszért. A meccspult a későbbi oldalakon folytatódik.",
    "status": "Ez a kódex az írott létrát magyarázza. Nem rögzít meccset, és nem módosít tárolt értékelést.",
    "searchLabel": "Keresés a kódexben",
    "searchPlaceholder": "Próbáld: 1950, Recruit vagy döntetlen",
    "empty": "Egyetlen bejegyzés sem felel meg a keresésnek.",
    "columnLabel": "A.C.E. oszlop {n}",
    "pagerLabel": "Kódexoldalak",
    "first": "Első",
    "previous": "Előző",
    "next": "Következő",
    "last": "Utolsó",
    "pageOf": "{n}. oldal / {m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Kalibrációs kódex",
    "status": "Ez az oldal az írott létrát magyarázza. Nem rögzít meccset, és nem módosít tárolt értékelést.",
    "emblemAlt": "{name} embléma, {level}. rang",
    "emblemCaption": "{level}. rang · {name} · {crystal}",
    "examples": {
      "heading": "Kidolgozott példák a motorból",
      "intro": "Minden sor ugyanazt a Rating Point függvényt hívja, amit a létra használ. A bemenetek példák. Nem mentődnek fiókba.",
      "columns": {
        "yourPoints": "Pontjaid",
        "otherSide": "Másik oldal",
        "result": "Eredmény",
        "storedAfter": "Tárolva utána",
        "change": "Változás"
      },
      "results": {
        "win": "Győzelem",
        "loss": "Vereség",
        "draw": "Döntetlen"
      }
    },
    "turnLabel": "Tovább a kódexben",
    "previous": "Előző",
    "next": "Következő",
    "alsoIn": "Szintén az A.C.E.-ben",
    "backToBoard": "Vissza a rangtáblához"
  },
  "rankArticle": {
    "title": "{name} — {level}. rang",
    "band": {
      "heading": "A sáv",
      "range": "{name} a(z) {level}. rang. Az emblémán lévő kristálycímke: {crystal}. A {from} és {to} közötti tárolt értékelés ezt a rangot viseli."
    },
    "code": {
      "heading": "Rangszabály",
      "hold": "Tartás. A fiók addig viseli a(z) {name} rangot, amíg a tárolt Rating Points ebben a sávban van. A rang a számból olvasható ki. Nem menüből választják.",
      "gateNext": "Kapu. A következő rang {next} Rating Pointnál nyílik.",
      "gateLast": "Kapu. Nincs következő rang. A sáv 3000 Rating Pointnál ér véget.",
      "record": "Rögzítés. A rang csak akkor változik, ha egy rögzített eredmény megváltoztatja a Rating Pointsot. Az oldal megnyitása nem rögzít eredményt.",
      "emblem": "Embléma. A kép azonosítja a rangot. Vásárlás, skin-előnézet vagy kozmetikum nem mozdítja az alsó határt."
    },
    "emblem": {
      "heading": "Mire való az embléma",
      "material": "A jelzés anyagtanulmánya: {material}. Ez a sor a grafikát írja le. Nem statisztika és nem követelmény.",
      "sample": "A rangtáblán az embléma mellett látható győzelmi arány mintacímke. Nem kell elérni ahhoz, hogy a rang viselhető legyen."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "A Recruit a belépő lap. Az új fiókok már nem itt kezdenek: 1200 Rating Points-szal indulnak a Vanguardban. A Recruitba csak pontvesztéssel lehet eljutni.",
      "detail": "Az Operative kapuja 1100. A létratábla a Recruitot 0-nál nyitja, de a motor nem tárol 100 alatti értékelést. 100 és 1099 között a fiók Recruit marad."
    },
    "rank-2-operative": {
      "stance": "Az Operative közvetlenül a kezdőszám alatt van. Az 1200 alá eső fiók ide kerül, mielőtt elérné a Recruitot.",
      "detail": "A sáv száz pont széles. 1199-nél zárul. A Vanguard 1200-nál nyílik."
    },
    "rank-3-vanguard": {
      "stance": "A Vanguard minden új fiók kezdőhelye, 1200 Rating Points-szal. Innen feljebb lépni az első valódi lépés a létrán.",
      "detail": "A sáv 1200-tól 1299-ig tart. A Specialist 1300-nál nyílik."
    },
    "rank-4-specialist": {
      "stance": "A Specialist a mesterségbeli rang. Az embléma kristálycímkéje GOLD. A létrában tárolt hivatalos név Specialist. Ugyanaz a szint.",
      "detail": "A sáv 1300-tól 1399-ig tart. A Veteran 1400-nál nyílik."
    },
    "rank-5-veteran": {
      "stance": "A Veteran a középső jelzés. Négy rang van e szint alatt, öt fölötte.",
      "detail": "A sáv 1400-tól 1499-ig tart. Az Elite 1500-nál nyílik. Ennek az emblémának a kristálycímkéje PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Az Elite a motor neve. A DIAMOND ugyanazon embléma kristálycímkéje. Egyik sem második értékelés.",
      "detail": "A sáv 1500-tól 1599-ig tart. A Master 1600-nál nyílik."
    },
    "rank-7-master": {
      "stance": "A Master az első rang, amelynek kristálycímkéje és hivatalos neve ugyanaz a szó. Az alsó határ 1600.",
      "detail": "A sáv 1600-tól 1699-ig tart. A Grandmaster 1700-nál nyílik."
    },
    "rank-8-grandmaster": {
      "stance": "A Grandmaster a zafír lépcső. Az alsó határ 1700, továbbra is száz pont széles, a Sovereign pedig 1800-nál vár.",
      "detail": "A sáv 1700-tól 1799-ig tart. Ezen az oldalon semmi sem költ meccset az átlépésére."
    },
    "rank-9-sovereign": {
      "stance": "A Sovereign a széles lépcső a Legend előtt. A kristálycímke IMMORTAL. A hivatalos név Sovereign.",
      "detail": "A sáv 1800-tól 1949-ig tart. Ez 150 pont, nem 100. Az 1949 még Sovereign. A Legend 1950-nél nyílik."
    },
    "rank-10-a-c-e-legend": {
      "stance": "Az A.C.E. Legend az utolsó jelzés. A kristálycímke ACE ELITE. A hivatalos név A.C.E. Legend.",
      "detail": "A sáv 1950-nél nyílik és a motor plafonjánál, 3000-nél ér véget. Nincs tizenegyedik rang. A tárolt értékelés nem emelkedhet 3000 fölé."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Mi az A.C.E. rang",
      "lede": "A rang az a jelzés, amely a tárolt Rating Pointsodat tartalmazza. Tíz jelzés fedi le az egész létrát, a Recruittól az A.C.E. Legendig.",
      "sections": [
        {
          "heading": "Egy szám, egy jelzés",
          "paragraphs": [
            "A fiók versenyértékelést tárol. A létra kiolvassa a számot, és azt a legmagasabb rangot adja vissza, amelynek alsó határát a szám elérte. Egyszerre nem lehet két rangod.",
            "A Recruit az 1. rang. Az A.C.E. Legend a 10. rang. A hivatalos név a létrában szereplő név. Az emblémán lévő rövidebb szó ugyanannak a rangnak a kristálycímkéje.",
            "Ez a kódex az írott létrát magyarázza. Nem rögzít meccset, és nem módosít tárolt értékelést."
          ]
        },
        {
          "heading": "Hogyan helyezkednek el az alsó határok",
          "paragraphs": [
            "A Recruit fedi a létra elejét. Az Operative 1100-nál nyílik. A Vanguardtól a Grandmasterig minden új alsó határ 100 ponttal magasabb: 1200, 1300, 1400, 1500, 1600, majd 1700.",
            "A Sovereign 1800-nál nyílik, és 1949-ig tartja a fiókot. Az A.C.E. Legend 1950-nél nyílik. A motor plafonja 3000, így a Legend a leghosszabb sáv."
          ]
        },
        {
          "heading": "Mi nem a rang",
          "paragraphs": [
            "A rang nem létszámkorlát. A Legend alsó határ, nem ezer fiók listája.",
            "A rang nem díj, nem skin és nem sor. A nyilvános oldal megmutathatja a jelzést. Nem futtat olyan meccset, amely újat írna."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Hivatalos név és kristálynév",
      "lede": "Minden rangnak két címkéje van. A hivatalos név a létráé. A kristálynév az emblémába vésett szó.",
      "sections": [
        {
          "heading": "Miért létezik mindkettő",
          "paragraphs": [
            "A motor és a profil a hivatalos nevet használja: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Az emblémán kristálycímke is van: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. A címke grafika. Nem hoz létre tizenegyedik rangot, és nem tárol második számot."
          ]
        },
        {
          "heading": "Hol térnek el",
          "paragraphs": [
            "A Specialist kristálycímkéje GOLD. A Veterané PLATINUM. Az Elite-é DIAMOND. A Sovereigné IMMORTAL. Az A.C.E. Legendé ACE ELITE. Az alsó határ minden esetben a hivatalos névhez tartozik.",
            "A Master és a Grandmaster mindkét helyen ugyanazt a szót használja."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "A tábla három divíziója",
      "lede": "A III., II. és I. divízió olvasási segédlet, amelyet a rang sávjára festettek. A fiók nem tárol divíziót.",
      "sections": [
        {
          "heading": "Mi tárolódik",
          "paragraphs": [
            "Egy bejelentkezett fiók ranglépcsőt és versenyértékelést tárol. A ranglépcső az értékelést követi. Mellettük nincs divízió-oszlop.",
            "A rangtáblán a kiválasztott rang sávja három megjelenítési lépésre oszlik, hogy a szem lássa a szint alját, közepét és tetejét. A III. divízió a sáv alsó vége. Az I. divízió a felső."
          ]
        },
        {
          "heading": "Mik a címkék",
          "paragraphs": [
            "A címkéken lévő győzelmi arányok és haladásjelek minták. Nem második létra, és nem teljesítendő cél.",
            "A divíziócímke váltása nem módosítja a tárolt értékelést. Erre csak egy rögzített eredmény képes, és ez az oldal nem rögzít ilyet."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Mi nem mozdíthat rangot",
      "lede": "A jelzés a tárolt Rating Pointsot követi. Az oldalon minden más a helyén hagyja a jelzést.",
      "sections": [
        {
          "heading": "A motoron kívül",
          "paragraphs": [
            "Skin-előnézet, bolti kártya, előfizetési címke és kozmetikum nem ad Rating Pointsot. Egy csomag kifizetése nem rang.",
            "A rangtábla megnyitása, egy embléma forgatása vagy a kódex olvasása nem rögzít meccset.",
            "Bejelentés, ügyfélszolgálati jegyzet és tornaelrendezés nem írja felül a tárolt értékelést."
          ]
        },
        {
          "heading": "Az egyetlen út",
          "paragraphs": [
            "Az írott út egy rögzített meccseredmény, amely átmegy a Rating Point motoron. Ma az oldal egyetlen nyilvános lapja sem ír ilyen eredményt.",
            "Amíg nincs eredmény, egy új fiók a kezdő értékelésén marad, egy meglévő pedig megtartja a már tárolt értékelést."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Mi a Rating Points",
      "lede": "A Rating Points a fiókon tárolt versenyszám. A rang csak az a sáv, amelybe a szám esik.",
      "sections": [
        {
          "heading": "A tárolt mező",
          "paragraphs": [
            "A motor verziója {version}. Egy új fiók {startingRating} Rating Pointtal indul. A tárolt szám nem eshet {minRating} alá és nem emelkedhet {maxRating} fölé.",
            "A profilok és a rangtábla akkor olvassák ezt a számot, ha be vagy jelentkezve. Ha nem, a tábla a kiválasztott embléma kalibrációs alsó határát mutatja. Ez minta, nem a fiókod."
          ]
        },
        {
          "heading": "Mit mér a szám",
          "paragraphs": [
            "A motor az értékelésedet az ellenfél átlagos értékelésével veti össze. Nem vezet külön pontszámot egyéni díjra, fejlövés-arányra vagy utility-re. Ezek nem részei ennek a verziónak.",
            "A magasabb szám azt jelenti, hogy a létra szerint gyakrabban nyersz egy alacsonyabb szám ellen. A rangnevek a skála nyilvános olvasatai."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Hol indul egy új fiók",
      "lede": "A Steam-bejelentkezés 1200 Rating Points-szal hozza létre a fiókot, 3. rang, Vanguard, győzelmek és vereségek nélkül.",
      "sections": [
        {
          "heading": "A kezdő jelzés",
          "paragraphs": [
            "Az 1200 a Vanguard alsó határa. Az Operative és a Recruit alatta van, így egy új fiók a létra korai részének közepén kezd, nem a legalján.",
            "Az újbóli bejelentkezés nem állítja vissza a már tárolt értékszámot. Az első 10 rögzített meccs besoroló: ezek alatt az értékszám nem emelkedhet az 5. szint fölé. A kódex nem talál ki győzelem–vereség mérleget."
          ]
        },
        {
          "heading": "Hogyan láthatod",
          "paragraphs": [
            "Steam-bejelentkezés után az irányítópult és a rangtábla megjelenítheti a tárolt értékelést. Ha az adatbázis elérhetetlen, az oldal ezt közli, ahelyett hogy számot találna ki.",
            "A kezdő rang Vanguard marad, amíg egy rögzített eredmény ki nem viszi az értékszámot az 1200–1299 sávból. Ez az oldal ma nem ír ilyen eredményt."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Hogyan mozdítja egy rögzített eredmény a Rating Pointsot",
      "lede": "Egy rögzített győzelmet vagy vereséget a másik csapat átlagos értékszámához mérünk. Egyenlő csapat ellen a győzelem +25, a vereség −25. A teljes szabályok a Rangok oldalon vannak.",
      "sections": [
        {
          "heading": "A lépés",
          "paragraphs": [
            "A várható eredmény az az esély, amelyet a motor a meccs előtt kizárólag a két értékszám alapján rendel. Egyenlő értékszámnál ez fél, így egy győzelem 25 Rating Points-ot ér, egy vereség 25-be kerül.",
            "Magasabb értékszám ellen a győzelem többet ér 25-nél, a vereség kevesebbe kerül. Alacsonyabb ellen fordítva. Egy győzelem mindig 10–40-et ad, egy vereség mindig 10–40-be kerül. A 7–9. szinten a győzelmi nyereséget 0,8-del, a 10. szinten 0,7-del szorozzuk, így a létra csúcsa tovább tart. Az értékszám 100 és 3000 között marad.",
            "Csapateredménynél minden játékost a másik csapat átlagos értékszámához mérünk. A 3 RP-s meccs-MVP-bónusz arra az időre van tervezve, amikor a szerver rögzíti az öléseket; addig nincs személyes bónusz."
          ]
        },
        {
          "heading": "Döntetlen",
          "paragraphs": [
            "A döntetlen semmit nem változtat: minden játékos megtartja az értékszámát. Egy meccs elhagyása vagy félbehagyása 50 RP-be kerül, az eredménytől függetlenül.",
            "Az oldalon lévő táblázat a motor példabemenetekkel. A sorok nem tárolt meccsek, és nem a fiókod."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Alsó határ, plafon és átugrott rang",
      "lede": "A tárolt szám 100-nál és 3000-nél megáll. A rang mindig a számot követi, így gombbal nem ugorható át rang.",
      "sections": [
        {
          "heading": "A megállók",
          "paragraphs": [
            "Vereség 100 Rating Pointnál 100-on marad. Győzelem 3000-nél 3000-en marad. A Recruit létrabeli alsó határa 0-ként szerepel, de a tárolt szám sosem használja a 100 alatti rést.",
            "Az 1949 Sovereign. Az 1950 A.C.E. Legend. Nincs köztes jelzés."
          ]
        },
        {
          "heading": "Nincs ugrás",
          "paragraphs": [
            "Ha egy rögzített eredmény 1050-ről 1260-ra ugratná a számot, a fiók Vanguardot viselne, mert 1260 abban a sávban van. A köztes rangok nem állnak sorba külön előléptetésként. A számot egyszer olvassák ki.",
            "Az oldal egyetlen lapja sem hajt végre ilyen ugrást. A példa csak azt mutatja, hogyan olvassa a létra a számot."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Hol jelenne meg a meccslink",
      "lede": "A meccslink egy játékszerver címe. Ez a weboldal nem ad ki ilyet.",
      "sections": [
        {
          "heading": "A pult, amit megnyithatsz",
          "paragraphs": [
            "A játékoldal tízfős elrendezést és FIND MATCH vezérlőt mutat. A vezérlő zárva marad. Nem tud Counter-Strike 2 szervert nyitni, és senkinek nem ad címet.",
            "A weboldalon lévők száma nem a játékban lévők száma. A meccs létszáma 0."
          ]
        },
        {
          "heading": "Hol lenne a link később",
          "paragraphs": [
            "Ha létezne meccsszerver, a cím és a jelszava a meccspulton jelenne meg, miután a tíz játékos elfogadta. A játékos Steamről csatlakozna. Ezen az oldalon nincs tárolt cím, és nem generálódik jelszó.",
            "A Steam-bejelentkezés összeköti a fiókot. Nem dob le játékost egy pályára."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Mi a ranked pult",
      "lede": "A ranked pult a játékoldal 5v5 elrendezése. Zárt pult, nem nyitott sor.",
      "sections": [
        {
          "heading": "Mi van megrajzolva",
          "paragraphs": [
            "Két oldal, egyenként öt hellyel, és kapitánycímke az első helyen. A pályalista és a mellettük lévő chatsor ugyanannak az elrendezésnek a része.",
            "Az oldal biztonsági sorai az állapotukkal vannak jelölve. Egyik sem futó ellenőrzés még; az ütemterv a /anti-cheat oldalon van."
          ]
        },
        {
          "heading": "Mit nem csinál a pult",
          "paragraphs": [
            "A FIND MATCH nem keres ellenfeleket. Nem változtatja a Rating Pointsot. A fiók rangja továbbra is a tárolt szám, amelyet a kódex létrája olvas ki.",
            "Nincs külön csúcssor a Legend fölött. Az A.C.E. Legend az utolsó jelzés, és 1950 Rating Pointnál nyílik."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Segítség a meccspulttól",
      "lede": "Ezen a weboldalon az ügyfélszolgálat írásos pult. Nem nyit élő hangvonalat egy meccsen belül.",
      "sections": [
        {
          "heading": "Mit csinál a támogatási oldal",
          "paragraphs": [
            "A támogatási oldal felsorolja a pultokat és jegyvezérlőt kínál. A vezérlő kiválasztása nem hoz létre ügyet, és meccs közben nem ér el senkit, mert nem fut meccs.",
            "A szabálykérdés a /rules versenyszabályzatához tartozik. A létrakérdés ebbe a kódexbe."
          ]
        },
        {
          "heading": "Óvás, ha már létezik meccs",
          "paragraphs": [
            "Az írott szabályzat szerint a kapitány a következő pálya kezdete előtt óvást nyújthat be, megnevezve a pályát, a kört és a cikket. Ez a weboldal nem tárol demókat és nem futtat játékszervereket, így a beadványnak ma nincs hová kerülnie.",
            "Egy elrendezés-eredmény nem lejátszott meccs. A stáb csak egy valódi sorozat után írna sorozateredményt."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "Várakozás tíz játékosra",
      "lede": "Egy versenypályához tíz kezdő kell. A pult ma nem tartja ezt a várakozást.",
      "sections": [
        {
          "heading": "Az írott óra",
          "paragraphs": [
            "Amint egy meccsnek közzétett kezdése van, egy oldal öt kezdőjének 15 perccel a kezdés előtt jelen kell lennie. Ez a mondat a versenyszabályzatban van. Az óra nem indul el ezen a weboldalon, mert nincs közzétett meccs.",
            "A játékoldalon látható nevek előnézetek. Nem sorban ülő emberek."
          ]
        },
        {
          "heading": "Mi nem történik, amíg nézed",
          "paragraphs": [
            "Az oldal nem foglal szervert, nem küld értesítést, és nem számol vissza elfogadásig. Az oldal elhagyása nem meccselhagyás, mert nem voltál meccsben."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "A kapitány a pultnál",
      "lede": "Egy kapitány beszél egy oldal nevében. A lobbiszerepek a versenybétával élesednek.",
      "sections": [
        {
          "heading": "Mit jelöl ki a szabályzat",
          "paragraphs": [
            "A kapitány intézi a vétót, a szüneteket és az óvást. A többi kezdő játszik. Cserejátékos csak pályák között ülhet be.",
            "Egy pályánál a kapitányok egyenként bannolnak pályákat, amíg egy marad. A pool: Ancient, Anubis, Dust II, Inferno, Mirage, Nuke és Train. A magasabb kiemelt a Team A, és ő dönti el, elsőként vagy másodikként bannol; egyenlő kiemelésnél pénzfeldobás dönt. Ma nincs nyitott vétó."
          ]
        },
        {
          "heading": "Szünetek",
          "paragraphs": [
            "A szünetek csak akkor érvényesek, ha létezik meccsszerver. Itt nincs. Az írott keret csapatonként egy pályán három 30 másodperces taktikai szünet, plusz egy a hosszabbításban, és összesen 10 perc technikai szünet. A teljes szöveg a /rules oldalon.",
            "A csapatok oldalán a kapitány az a tagság is, amely keretmeghívót küldhet. A meghívó külön van a meccslobbitól."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Ha egy oldal nem kész",
      "lede": "A versenyszabályzat leírja a feladást egy közzétett kezdésű meccsre. Ez a weboldal nem ad ki ilyen feladást.",
      "sections": [
        {
          "heading": "Az írott szabály",
          "paragraphs": [
            "Öt kezdőnek 15 perccel a közzétett kezdés előtt készen kell állnia. Az az oldal, amely 15 perccel a kezdés után is hiányos, elveszíti a sorozatot, amint létezik meccs. Ha mindkét oldal hiányzik, mindkettőt eltávolítják, és a stáb írja a helyet.",
            "Az a klán, amely öt jogosult kezdőnél kevesebbel kezd egy pályát, és nincs beülni képes cseréje, elveszíti azt a pályát."
          ]
        },
        {
          "heading": "Mit nem fog tenni ez az oldal",
          "paragraphs": [
            "Itt semmi nem figyeli a lobbit és ír magától feladást. A játékoldal gombja nem adhat fel egy sosem betöltött pályát.",
            "A tornafa elrendezés-eredménye nem lejátszott meccs és nem feladás."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Belépés a 100 klános kieséses tornába",
      "lede": "A tornaoldal egy 100 klános fa. A regisztráció 0/100. A nevezés nincs nyitva.",
      "sections": [
        {
          "heading": "Mit nyithatsz meg",
          "paragraphs": [
            "Kattints egy klánra a fán a keret megtekintéséhez, majd nyiss meg egy játékost. A nyitott helyeken lévő nevek előnézetek, nem elfogadott nevezések.",
            "A fa nem állít be szervert és nem küld meccslinket."
          ]
        },
        {
          "heading": "Erőnyerő, amikor nyílik a nevezés",
          "paragraphs": [
            "Az írott szabály egy jövőbeli nevezéshez: az első 28 elfogadott klán kihagyja az 1. kört. Az erőnyerés nem díj, és nem igényelhető, amíg a regisztráció 0/100.",
            "A sorozathossz, a pályapool és az óvások a /rules versenyszabályzatában vannak."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Hogyan áll össze egy keret",
      "lede": "Egy kapitány olyan játékost hív meg, akinek már van A.C.E.-fiókja. Nincs nyilvános megosztási link, és Steam-jelszót soha nem kérnek.",
      "sections": [
        {
          "heading": "A létező meghívó",
          "paragraphs": [
            "A csapatok oldalán egy bejelentkezett kapitány beilleszt egy SteamID64-et vagy A.C.E.-fiókazonosítót. A fióknak már Steam OpenID-n keresztül összekötöttnek kell lennie. A szerver függő meghívót ír, amikor az adatbázis elfogadja.",
            "A keret öt játékost tartalmaz, a kapitánnyal együtt. Kapitány nem hívhatja meg a saját fiókját. A már keretben lévő játékost elutasítja. Ha az adatbázis nem elérhető, a meghívó sikertelen, és nem tárolódik meghívás."
          ]
        },
        {
          "heading": "Mi nem a meghívó",
          "paragraphs": [
            "A meghívó nem küld levelet, nem nyit privát lobbit, és nem generál közzétehető linket. Nem helyezi a klánt a kieséses tornába.",
            "A kieséses szabályzat két megnevezett cserét enged, amint létezik tornanevezés. A nevezés nincs nyitva, így ezek a helyek ma nem használható belépők."
          ]
        }
      ]
    }
  }
};
