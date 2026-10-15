import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  "meta": {
    "title": "Kalibracijski kodeks",
    "description": "Rangovi A.C.E. objašnjeni. Svako pitanje otvara potpuni odgovor o Rating Pointsima i pravilima za taj rang. Kodeks ne bilježi meč.",
    "articleTitle": "{title} — Kalibracijski kodeks"
  },
  "groups": {
    "ladder": {
      "title": "Ljestvica",
      "kicker": "Kako se čita rang"
    },
    "points": {
      "title": "Rating Points",
      "kicker": "Jedan spremljeni broj"
    },
    "ranks": {
      "title": "Svaki rang",
      "kicker": "Pravila za tu oznaku"
    },
    "desk": {
      "title": "Stol mečeva",
      "kicker": "Što stol može i ne može"
    }
  },
  "index": {
    "title": "Kalibracijski kodeks",
    "lede": "Deset rangova. Jedan spremljeni broj. Otvori bilo koje pitanje za potpuni odgovor. Stol mečeva nastavlja se na kasnijim stranicama.",
    "status": "Ovaj kodeks objašnjava napisanu ljestvicu. Ne bilježi meč i ne mijenja spremljeni rejting.",
    "searchLabel": "Pretraži kodeks",
    "searchPlaceholder": "Pokušaj 1950, Recruit ili neriješeno",
    "empty": "Nijedan unos ne odgovara pretrazi.",
    "columnLabel": "A.C.E. stupac {n}",
    "pagerLabel": "Stranice kodeksa",
    "first": "Prva",
    "previous": "Prethodna",
    "next": "Sljedeća",
    "last": "Zadnja",
    "pageOf": "Stranica {n} od {m}"
  },
  "article": {
    "breadcrumb": "A.C.E. · Kalibracijski kodeks",
    "status": "Ova stranica objašnjava napisanu ljestvicu. Ne bilježi meč i ne mijenja spremljeni rejting.",
    "emblemAlt": "Amblem {name}, rang {level}",
    "emblemCaption": "Rang {level} · {name} · {crystal}",
    "examples": {
      "heading": "Riješeni primjeri iz motora",
      "intro": "Svaki redak poziva istu Rating Point funkciju koju koristi ljestvica. Ulazi su primjeri. Ne spremaju se na račun.",
      "columns": {
        "yourPoints": "Tvoji bodovi",
        "otherSide": "Druga strana",
        "result": "Rezultat",
        "storedAfter": "Spremljeno nakon",
        "change": "Promjena"
      },
      "results": {
        "win": "Pobjeda",
        "loss": "Poraz",
        "draw": "Neriješeno"
      }
    },
    "turnLabel": "Nastavi kroz kodeks",
    "previous": "Prethodna",
    "next": "Sljedeća",
    "alsoIn": "Također u A.C.E.",
    "backToBoard": "Natrag na ploču rangova"
  },
  "rankArticle": {
    "title": "{name} — Rang {level}",
    "band": {
      "heading": "Raspon",
      "range": "{name} je rang {level}. Kristalna oznaka na amblemu je {crystal}. Spremljeni rejting od {from} do {to} nosi ovaj rang."
    },
    "code": {
      "heading": "Pravila ranga",
      "hold": "Zadržavanje. Račun nosi {name} dok su spremljeni Rating Points unutar ovog raspona. Rang se čita iz broja. Ne bira se iz izbornika.",
      "gateNext": "Vrata. Sljedeći rang otvara se na {next} Rating Pointsa.",
      "gateLast": "Vrata. Nema sljedećeg ranga. Raspon završava na 3.000 Rating Pointsa.",
      "record": "Zapis. Rang se mijenja samo kad zabilježeni rezultat promijeni Rating Points. Otvaranje ove stranice ne bilježi rezultat.",
      "emblem": "Amblem. Slika označava rang. Kupnja, pregled skina ili kozmetika ne pomiču donju granicu."
    },
    "emblem": {
      "heading": "Čemu služi amblem",
      "material": "Materijalna studija za ovu oznaku je: {material}. Taj redak opisuje grafiku. Nije statistika ni uvjet.",
      "sample": "Postotak pobjeda uz ovaj amblem na ploči rangova je primjerna oznaka. Ne mora se dostići prije nošenja ranga."
    }
  },
  "rankReads": {
    "rank-1-recruit": {
      "stance": "Recruit je ulazna pločica. Novi računi više ne počinju ovdje: počinju s 1.200 Rating Points u Vanguardu. Do Recruita se dolazi samo gubitkom bodova.",
      "detail": "Vrata Operativea su 1.100. Tablica ljestvice otvara Recruit na 0, ali motor neće spremiti rejting ispod 100. Između 100 i 1.099 račun ostaje Recruit."
    },
    "rank-2-operative": {
      "stance": "Operative je odmah ispod početnog broja. Račun koji padne ispod 1.200 dolazi ovamo prije nego što stigne do Recruita.",
      "detail": "Raspon je širok sto bodova. Zatvara se na 1.199. Vanguard se otvara na 1.200."
    },
    "rank-3-vanguard": {
      "stance": "Vanguard je mjesto gdje počinje svaki novi račun, s 1.200 Rating Points. Uspon odavde prvi je pravi korak uz ljestvicu.",
      "detail": "Raspon ide od 1.200 do 1.299. Specialist se otvara na 1.300."
    },
    "rank-4-specialist": {
      "stance": "Specialist je rang zanata. Kristalna oznaka amblema glasi GOLD. Službeni naziv spremljen uz ljestvicu je Specialist. To je ista razina.",
      "detail": "Raspon ide od 1.300 do 1.399. Veteran se otvara na 1.400."
    },
    "rank-5-veteran": {
      "stance": "Veteran je srednja oznaka. Četiri ranga su ispod ove razine, a pet iznad.",
      "detail": "Raspon ide od 1.400 do 1.499. Elite se otvara na 1.500. Kristalna oznaka ovog amblema je PLATINUM."
    },
    "rank-6-elite": {
      "stance": "Elite je naziv u motoru. DIAMOND je kristalna oznaka na istom amblemu. Nijedna oznaka nije drugi rejting.",
      "detail": "Raspon ide od 1.500 do 1.599. Master se otvara na 1.600."
    },
    "rank-7-master": {
      "stance": "Master je prvi rang čija kristalna oznaka i službeni naziv koriste istu riječ. Donja granica je 1.600.",
      "detail": "Raspon ide od 1.600 do 1.699. Grandmaster se otvara na 1.700."
    },
    "rank-8-grandmaster": {
      "stance": "Grandmaster je safirna stuba. Donja granica je 1.700, i dalje širok sto bodova, a Sovereign čeka na 1.800.",
      "detail": "Raspon ide od 1.700 do 1.799. Ništa na ovoj stranici ne troši meč da bi ga prešlo."
    },
    "rank-9-sovereign": {
      "stance": "Sovereign je široka stuba prije Legenda. Kristalna oznaka je IMMORTAL. Službeni naziv je Sovereign.",
      "detail": "Raspon ide od 1.800 do 1.949. To je 150 bodova, ne 100. 1.949 i dalje nosi Sovereign. Legend se otvara na 1.950."
    },
    "rank-10-a-c-e-legend": {
      "stance": "A.C.E. Legend je zadnja oznaka. Kristalna oznaka je ACE ELITE. Službeni naziv je A.C.E. Legend.",
      "detail": "Raspon se otvara na 1.950 i završava na stropu motora, 3.000. Nema jedanaestog ranga. Spremljeni rejting ne može narasti iznad 3.000."
    }
  },
  "articles": {
    "what-a-rank-is": {
      "title": "Što je A.C.E. rang",
      "lede": "Rang je oznaka koja sadrži tvoje spremljene Rating Points. Deset oznaka pokriva cijelu ljestvicu, od Recruita do A.C.E. Legenda.",
      "sections": [
        {
          "heading": "Jedan broj, jedna oznaka",
          "paragraphs": [
            "Račun sprema natjecateljski rejting. Ljestvica čita taj broj i vraća najviši rang čiju je donju granicu broj dosegnuo. Ne držiš dva ranga odjednom.",
            "Recruit je rang 1. A.C.E. Legend je rang 10. Službeni naziv je naziv na ljestvici. Kraća riječ na amblemu je kristalna oznaka za isti rang.",
            "Ovaj kodeks objašnjava napisanu ljestvicu. Ne bilježi meč i ne mijenja spremljeni rejting."
          ]
        },
        {
          "heading": "Kako su postavljene donje granice",
          "paragraphs": [
            "Recruit pokriva početak ljestvice. Operative se otvara na 1.100. Od Vanguarda do Grandmastera svaka nova donja granica viša je za 100 bodova: 1.200, 1.300, 1.400, 1.500, 1.600, pa 1.700.",
            "Sovereign se otvara na 1.800 i drži račun do 1.949. A.C.E. Legend se otvara na 1.950. Strop motora je 3.000, pa je Legend najduži raspon."
          ]
        },
        {
          "heading": "Što rang nije",
          "paragraphs": [
            "Rang nije ograničenje broja igrača. Legend je donja granica, ne popis od tisuću računa.",
            "Rang nije nagrada, skin ni red čekanja. Javna stranica može prikazati oznaku. Ne pokreće meč koji bi upisao novu."
          ]
        }
      ]
    },
    "official-name-and-crystal-name": {
      "title": "Službeni naziv i kristalni naziv",
      "lede": "Svaki rang ima dvije oznake. Službeni naziv je ljestvica. Kristalni naziv je riječ urezana u amblem.",
      "sections": [
        {
          "heading": "Zašto postoje obje",
          "paragraphs": [
            "Motor i profil koriste službeni naziv: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "Amblem nosi i kristalnu oznaku: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Ta oznaka je grafika. Ne stvara jedanaesti rang i ne sprema drugi broj."
          ]
        },
        {
          "heading": "Gdje se razlikuju",
          "paragraphs": [
            "Kristalna oznaka Specialista je GOLD. Veterana PLATINUM. Elitea DIAMOND. Sovereigna IMMORTAL. A.C.E. Legenda ACE ELITE. U svakom slučaju donja granica i dalje pripada službenom nazivu.",
            "Master i Grandmaster koriste istu riječ na oba mjesta."
          ]
        }
      ]
    },
    "divisions-on-the-board": {
      "title": "Tri divizije na ploči",
      "lede": "Divizije III, II i I pomoć su pri čitanju naslikana preko raspona ranga. Račun ne sprema diviziju.",
      "sections": [
        {
          "heading": "Što se sprema",
          "paragraphs": [
            "Prijavljeni račun sprema razinu ranga i natjecateljski rejting. Razina ranga prati rejting. Uz njih nema stupca divizije.",
            "Na ploči rangova raspon odabranog ranga podijeljen je u tri koraka prikaza kako bi oko vidjelo dno, sredinu i vrh te razine. Divizija III je donji kraj raspona. Divizija I je gornji."
          ]
        },
        {
          "heading": "Što su oznake",
          "paragraphs": [
            "Postoci pobjeda i oznake napretka na tim oznakama su primjeri. Nisu druga ljestvica ni cilj koji moraš prijeći.",
            "Promjena oznake divizije ne mijenja spremljeni rejting. To može samo zabilježeni rezultat, a ova stranica ga ne bilježi."
          ]
        }
      ]
    },
    "what-cannot-move-a-rank": {
      "title": "Što ne može pomaknuti rang",
      "lede": "Oznaka prati spremljene Rating Points. Sve ostalo na stranici ostavlja oznaku gdje jest.",
      "sections": [
        {
          "heading": "Izvan motora",
          "paragraphs": [
            "Pregled skina, kartica trgovine, oznaka pretplate i kozmetika ne dodaju Rating Points. Plaćanje plana nije rang.",
            "Otvaranje ploče rangova, okretanje amblema ili čitanje ovog kodeksa ne bilježi meč.",
            "Prijava, bilješka podrške i raspored turnira ne prepisuju spremljeni rejting."
          ]
        },
        {
          "heading": "Jedini put",
          "paragraphs": [
            "Napisani put je zabilježeni rezultat meča koji prolazi kroz Rating Point motor. Danas nijedna javna stranica ove stranice ne upisuje takav rezultat.",
            "Dok rezultat ne postoji, novi račun ostaje na početnom rejtingu, a postojeći zadržava već spremljeni rejting."
          ]
        }
      ]
    },
    "what-rating-points-are": {
      "title": "Što su Rating Points",
      "lede": "Rating Points su natjecateljski broj spremljen na računu. Rang je samo raspon u koji taj broj pada.",
      "sections": [
        {
          "heading": "Spremljeno polje",
          "paragraphs": [
            "Verzija motora je {version}. Novi račun počinje s {startingRating} Rating Pointsa. Spremljeni broj ne može pasti ispod {minRating} ni narasti iznad {maxRating}.",
            "Profili i ploča rangova čitaju ovaj broj kad si prijavljen. Kad nisi, ploča prikazuje kalibracijsku donju granicu amblema koji si odabrao. Ta granica je primjer, ne tvoj račun."
          ]
        },
        {
          "heading": "Što broj mjeri",
          "paragraphs": [
            "Motor uspoređuje tvoj rejting s prosječnim rejtingom protivničke strane. Ne vodi zaseban rezultat za pojedinačnu nagradu, postotak headshotova ili utility. Te brojke nisu dio ove verzije.",
            "Viši broj znači da ljestvica očekuje da češće pobjeđuješ protiv nižeg broja. Nazivi rangova javno su čitanje te ljestvice."
          ]
        }
      ]
    },
    "where-a-new-account-starts": {
      "title": "Gdje počinje novi račun",
      "lede": "Prijava putem Steama stvara račun s 1.200 Rating Points, rang 3, Vanguard, bez pobjeda i poraza.",
      "sections": [
        {
          "heading": "Početna oznaka",
          "paragraphs": [
            "1.200 je donja granica Vanguarda. Operative i Recruit su ispod, pa novi račun počinje u sredini ranog dijela ljestvice, a ne na dnu.",
            "Ponovna prijava ne poništava već spremljeni rejting. Prvih 10 zabilježenih mečeva su plasmanski: tijekom njih rejting ne može porasti iznad razine 5. Kodeks ne izmišlja omjer pobjeda i poraza."
          ]
        },
        {
          "heading": "Kako ga vidjeti",
          "paragraphs": [
            "Nakon Steam prijave nadzorna ploča i ploča rangova mogu prikazati spremljeni rejting. Ako baza podataka nije dostupna, stranica to kaže umjesto da izmisli broj.",
            "Početni rang ostaje Vanguard dok zabilježeni rezultat ne izvede rejting iz raspona 1.200–1.299. Ova stranica danas ne zapisuje takav rezultat."
          ]
        }
      ]
    },
    "how-points-move": {
      "title": "Kako zabilježeni rezultat pomiče Rating Points",
      "lede": "Zabilježena pobjeda ili poraz mjeri se u odnosu na prosječni rejting drugog tima. Protiv jednakog tima pobjeda je +15, a poraz −15. Potpuna pravila nalaze se na stranici Rangovi.",
      "sections": [
        {
          "heading": "Korak",
          "paragraphs": [
            "Očekivani rezultat je šansa koju sustav dodjeljuje prije meča, samo na temelju dvaju rejtinga. Pri jednakom rejtingu ona iznosi polovicu, pa pobjeda vrijedi 15 Rating Points, a poraz košta 15.",
            "Protiv višeg rejtinga pobjeda vrijedi više od 15, a poraz košta manje. Protiv nižeg je obrnuto. Pobjeda uvijek donosi od 8 do 20, a poraz uvijek košta od 8 do 23. Na razinama 7–9 dobici od pobjede množe se s 0,8, a na razini 10 s 0,7, pa vrh ljestvice traje dulje. Rejting ostaje između 100 i 3.000.",
            "Kod timskog rezultata svaki se igrač mjeri u odnosu na prosječni rejting drugog tima. MVP bonus meča od 2 RP planiran je za trenutak kad poslužitelj počne bilježiti ubojstva; do tada se ne primjenjuje osobni bonus."
          ]
        },
        {
          "heading": "Neriješeno",
          "paragraphs": [
            "Neriješeno ništa ne mijenja: svaki igrač zadržava svoj rejting. Napuštanje ili izlazak iz meča košta 50 RP bez obzira na rezultat.",
            "Tablica na ovoj stranici je motor koji radi s primjernim ulazima. Ti retci nisu spremljeni mečevi i nisu tvoj račun."
          ]
        }
      ]
    },
    "floor-ceiling-and-a-draw": {
      "title": "Donja granica, strop i preskočeni rang",
      "lede": "Spremljeni broj staje na 100 i 3.000. Rang uvijek prati broj, pa se rang ne može preskočiti gumbom.",
      "sections": [
        {
          "heading": "Graničnici",
          "paragraphs": [
            "Poraz na 100 Rating Pointsa ostaje na 100. Pobjeda na 3.000 ostaje na 3.000. Donja granica Recruita na ljestvici zapisana je kao 0, ali spremljeni broj nikad ne koristi prazninu ispod 100.",
            "1.949 je Sovereign. 1.950 je A.C.E. Legend. Nema međuoznake."
          ]
        },
        {
          "heading": "Nema preskakanja",
          "paragraphs": [
            "Ako bi zabilježeni rezultat podigao broj s 1.050 na 1.260, račun bi nosio Vanguard, jer je 1.260 u tom rasponu. Rangovi između ne stavljaju se u red kao zasebna unapređenja. Broj se čita jednom.",
            "Nijedna stranica na ovoj web-stranici ne izvodi taj skok. Primjer samo pokazuje kako ljestvica čita broj."
          ]
        }
      ]
    },
    "where-a-match-link-would-appear": {
      "title": "Gdje bi se pojavila poveznica meča",
      "lede": "Poveznica meča je adresa poslužitelja igre. Ova web-stranica je ne izdaje.",
      "sections": [
        {
          "heading": "Stol koji možeš otvoriti",
          "paragraphs": [
            "Stranica igre prikazuje raspored za deset igrača i kontrolu FIND MATCH. Ta kontrola ostaje zatvorena. Ne može otvoriti Counter-Strike 2 poslužitelj i nikome ne daje adresu.",
            "Broj ljudi na web-stranici nije broj ljudi u igri. Broj igrača meča je 0."
          ]
        },
        {
          "heading": "Gdje bi poveznica bila kasnije",
          "paragraphs": [
            "Kad bi poslužitelj meča postojao, adresa i lozinka prikazale bi se na stolu meča nakon što deset igrača prihvati. Igrač bi se pridružio iz Steama. Na ovoj stranici nije spremljena adresa i ne generira se lozinka.",
            "Steam prijava povezuje račun. Ne spušta igrača na mapu."
          ]
        }
      ]
    },
    "what-the-ranked-desk-is": {
      "title": "Što je ranked stol",
      "lede": "Ranked stol je raspored stranice igre za 5v5. To je zatvoreni stol, ne otvoreni red.",
      "sections": [
        {
          "heading": "Što je nacrtano",
          "paragraphs": [
            "Dvije strane, svaka s pet mjesta, i oznaka kapetana na prvom mjestu. Popis mapa i redak chata uz njih dio su istog rasporeda.",
            "Sigurnosni retci na toj stranici označeni su statusom. Nijedan još nije aktivna provjera; plan je na /anti-cheat."
          ]
        },
        {
          "heading": "Što stol ne radi",
          "paragraphs": [
            "FIND MATCH ne traži protivnike. Ne mijenja Rating Points. Rang na računu i dalje je spremljeni broj koji čita ljestvica ovog kodeksa.",
            "Nema zasebnog vršnog reda iznad Legenda. A.C.E. Legend je zadnja oznaka i otvara se na 1.950 Rating Pointsa."
          ]
        }
      ]
    },
    "help-from-the-match-desk": {
      "title": "Pomoć sa stola meča",
      "lede": "Podrška na ovoj web-stranici je pisani stol. Ne otvara glasovnu liniju uživo unutar meča.",
      "sections": [
        {
          "heading": "Što radi stranica podrške",
          "paragraphs": [
            "Stranica podrške navodi stolove i nudi kontrolu za tiket. Odabir te kontrole ne stvara slučaj i ne doseže osobu tijekom meča, jer nijedan meč nije u tijeku.",
            "Pitanje o pravilima pripada natjecateljskim pravilima na /rules. Pitanje o ljestvici pripada ovom kodeksu."
          ]
        },
        {
          "heading": "Prigovor, kad meč postoji",
          "paragraphs": [
            "Napisana pravila kažu da kapetan može podnijeti prigovor prije početka sljedeće mape, navodeći mapu, rundu i članak. Ova stranica ne sprema demo snimke i ne pokreće poslužitelje igre, pa taj prigovor danas nema kamo stići.",
            "Rezultat rasporeda nije odigran meč. Osoblje bi upisalo rezultat serije tek nakon stvarne serije."
          ]
        }
      ]
    },
    "waiting-for-ten-players": {
      "title": "Čekanje deset igrača",
      "lede": "Natjecateljska mapa treba deset startera. Stol danas ne drži to čekanje.",
      "sections": [
        {
          "heading": "Napisani sat",
          "paragraphs": [
            "Kad meč ima objavljen početak, pet startera jedne strane mora biti prisutno 15 minuta prije početka. Ta rečenica je u natjecateljskim pravilima. Sat ne počinje na ovoj stranici jer nijedan meč nije objavljen.",
            "Imena na stranici igre su pregledi. Nisu ljudi koji sjede u redu."
          ]
        },
        {
          "heading": "Što se ne događa dok gledaš",
          "paragraphs": [
            "Stranica ne rezervira poslužitelj, ne šalje obavijest i ne odbrojava do prihvaćanja. Napuštanje stranice nije napuštanje meča, jer nisi bio u njemu."
          ]
        }
      ]
    },
    "the-captain-on-the-desk": {
      "title": "Kapetan za stolom",
      "lede": "Jedan kapetan govori za stranu. Uloge u predvorju aktiviraju se s natjecateljskom betom.",
      "sections": [
        {
          "heading": "Što pravila dodjeljuju",
          "paragraphs": [
            "Kapetan vodi veto, pauze i prigovor. Ostali starteri igraju. Zamjena može ući samo između mapa.",
            "Na jednoj mapi kapetani banaju mapu po mapu dok ne ostane jedna. Pool je Ancient, Anubis, Dust II, Inferno, Mirage, Nuke i Train. Viši nositelj je Team A i bira hoće li banati prvi ili drugi; jednake nositelje odlučuje bacanje novčića. Danas nijedan veto nije otvoren."
          ]
        },
        {
          "heading": "Pauze",
          "paragraphs": [
            "Pauze vrijede tek kad postoji poslužitelj meča. Ovdje ga nema. Napisana kvota po timu na mapi je tri taktičke pauze od 30 sekundi, plus jedna u produžetku, i ukupno 10 minuta tehničke pauze. Cijeli tekst je na /rules.",
            "Na stranici timova kapetan je i članstvo koje smije poslati pozivnicu u sastav. Ta pozivnica je odvojena od predvorja meča."
          ]
        }
      ]
    },
    "when-a-side-is-not-ready": {
      "title": "Kad strana nije spremna",
      "lede": "Natjecateljska pravila opisuju predaju za meč s objavljenim početkom. Ova stranica ne izdaje tu predaju.",
      "sections": [
        {
          "heading": "Napisano pravilo",
          "paragraphs": [
            "Pet startera mora biti spremno 15 minuta prije objavljenog početka. Strana kojoj i 15 minuta nakon početka nedostaje igrača predaje seriju, kad meč postoji. Ako su obje strane odsutne, obje se uklanjaju, a osoblje upisuje mjesto.",
            "Klan koji počne mapu s manje od pet podobnih startera, a nema zamjenu koja može ući, predaje tu mapu."
          ]
        },
        {
          "heading": "Što ova stranica neće raditi",
          "paragraphs": [
            "Ništa ovdje ne prati predvorje i ne upisuje predaju samo od sebe. Gumb na stranici igre ne može predati mapu koja nikad nije učitana.",
            "Rezultat rasporeda na turnirskom stablu nije odigran meč i nije predaja."
          ]
        }
      ]
    },
    "entering-the-knockout": {
      "title": "Ulazak u nokaut od 100 klanova",
      "lede": "Stranica turnira je stablo od 100 klanova. Registracija je 0 od 100. Prijave nisu otvorene.",
      "sections": [
        {
          "heading": "Što možeš otvoriti",
          "paragraphs": [
            "Klikni klan na stablu da pročitaš sastav, zatim otvori igrača. Imena na otvorenim mjestima su pregledi, ne prihvaćene prijave.",
            "Stablo ne postavlja poslužitelj i ne šalje poveznicu meča."
          ]
        },
        {
          "heading": "Slobodan prolaz, kad se prijave otvore",
          "paragraphs": [
            "Napisano pravilo za buduće prijave je da prvih 28 prihvaćenih klanova preskače 1. kolo. Slobodan prolaz nije nagrada i ne može se zatražiti dok registracija ostaje 0 od 100.",
            "Duljina serije, pool mapa i prigovori nalaze se u natjecateljskim pravilima na /rules."
          ]
        }
      ]
    },
    "how-a-roster-is-assembled": {
      "title": "Kako se slaže sastav",
      "lede": "Kapetan poziva igrača koji već ima A.C.E. račun. Nema javne poveznice za dijeljenje, a Steam lozinka se nikad ne traži.",
      "sections": [
        {
          "heading": "Pozivnica koja postoji",
          "paragraphs": [
            "Na stranici timova prijavljeni kapetan zalijepi SteamID64 ili ID A.C.E. računa. Račun već mora biti povezan putem Steam OpenID-a. Poslužitelj upisuje pozivnicu na čekanju kad je baza podataka prihvati.",
            "Sastav ima pet igrača, uključujući kapetana. Kapetan ne može pozvati vlastiti račun. Igrač koji je već u sastavu odbija se. Ako baza podataka ne radi, pozivnica ne uspijeva i ništa se ne sprema."
          ]
        },
        {
          "heading": "Što pozivnica nije",
          "paragraphs": [
            "Pozivnica ne šalje pismo, ne otvara privatno predvorje i ne stvara poveznicu koju možeš objaviti. Ne stavlja klan u nokaut.",
            "Pravila nokauta dopuštaju dvije imenovane zamjene kad turnirska prijava postoji. Prijave nisu otvorene, pa ta mjesta danas nisu propusnica koju možeš koristiti."
          ]
        }
      ]
    }
  }
};
