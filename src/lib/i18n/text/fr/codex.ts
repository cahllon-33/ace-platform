import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Codex de calibrage",
    description:
      "Les rangs A.C.E. expliqués. Chaque question ouvre une réponse complète sur les points de cote et le code de ce rang. Le codex n’applique aucun match.",
    articleTitle: "{title} — Codex de calibrage",
  },
  groups: {
    ladder: {
      title: "L’échelle",
      kicker: "Comment lire un rang",
    },
    points: {
      title: "Points de cote",
      kicker: "Le seul nombre enregistré",
    },
    ranks: {
      title: "Chaque rang",
      kicker: "Le code de ce palier",
    },
    desk: {
      title: "L’espace de match",
      kicker: "Ce que l’espace peut faire ou non",
    },
  },
  index: {
    title: "Codex de calibrage",
    lede: "Dix rangs. Un seul nombre enregistré. Ouvrez n’importe quelle question pour lire la réponse complète. L’espace de match est traité dans les pages suivantes.",
    status:
      "Ce codex explique l’échelle écrite. Il n’applique aucun match et ne modifie aucune cote enregistrée.",
    searchLabel: "Rechercher dans le codex",
    searchPlaceholder: "Essayez 1950, Recruit ou nul",
    empty: "Aucune entrée ne correspond à cette recherche.",
    columnLabel: "Colonne A.C.E. {n}",
    pagerLabel: "Pages du codex",
    first: "Première",
    previous: "Précédente",
    next: "Suivante",
    last: "Dernière",
    pageOf: "Page {n} sur {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Codex de calibrage",
    status:
      "Cette page explique l’échelle écrite. Elle n’applique aucun match et ne modifie aucune cote enregistrée.",
    emblemAlt: "Emblème {name}, rang {level}",
    emblemCaption: "Rang {level} · {name} · {crystal}",
    examples: {
      heading: "Exemples calculés par le moteur",
      intro:
        "Chaque ligne appelle la même fonction de points de cote que celle utilisée par l’échelle. Les valeurs d’entrée sont des exemples. Elles ne sont enregistrées sur aucun compte.",
      columns: {
        yourPoints: "Vos points",
        otherSide: "Camp adverse",
        result: "Résultat",
        storedAfter: "Enregistré après",
        change: "Variation",
      },
      results: {
        win: "Victoire",
        loss: "Défaite",
        draw: "Nul",
      },
    },
    turnLabel: "Poursuivre la lecture du codex",
    previous: "Précédent",
    next: "Suivant",
    alsoIn: "À voir aussi sur A.C.E.",
    backToBoard: "Retour au tableau des rangs",
  },
  rankArticle: {
    title: "{name} — Rang {level}",
    band: {
      heading: "La tranche",
      range:
        "{name} est le rang {level}. Le libellé cristal de l’emblème est {crystal}. Une cote enregistrée comprise entre {from} et {to} correspond à ce rang.",
    },
    code: {
      heading: "Code du rang",
      hold: "Maintien. Le compte porte le rang {name} tant que ses points de cote enregistrés restent dans cette tranche. Le rang se lit à partir du nombre. Il ne se choisit pas dans un menu.",
      gateNext: "Seuil. Le rang suivant s’ouvre à {next} points de cote.",
      gateLast: "Seuil. Il n’y a pas de rang suivant. La tranche se termine à 3 000 points de cote.",
      record:
        "Enregistrement. Un rang ne change que lorsqu’un résultat enregistré modifie les points de cote. Ouvrir cette page n’enregistre aucun résultat.",
      emblem:
        "Emblème. L’image identifie le rang. Un achat, un aperçu de skin ou un cosmétique ne déplace pas le plancher.",
    },
    emblem: {
      heading: "À quoi sert l’emblème",
      material:
        "L’étude de matériau de ce palier est : {material}. Cette ligne décrit l’illustration. Ce n’est ni une statistique ni une exigence.",
      sample:
        "Le taux de victoire affiché à côté de cet emblème sur le tableau des rangs est une pastille d’exemple. Il n’est pas nécessaire de l’atteindre pour porter ce rang.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit est la plaque d'entrée. Les nouveaux comptes ne commencent plus ici : ils démarrent à 1 200 Rating Points, en Vanguard. On n'atteint Recruit qu'en perdant du terrain.",
      detail:
        "Le seuil d’Operative est à 1 100. Le tableau de l’échelle fait commencer Recruit à 0, mais le moteur n’enregistre aucune cote inférieure à 100. Entre 100 et 1 099, le compte reste Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative se situe juste sous le nombre de départ. Un compte qui passe sous 1 200 arrive ici avant d'atteindre Recruit.",
      detail: "La tranche fait cent points de large. Elle se termine à 1 199. Vanguard s’ouvre à 1 200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard est le point de départ de chaque nouveau compte, à 1 200 Rating Points. Monter à partir d'ici est le premier vrai pas sur l'échelle.",
      detail: "La tranche va de 1 200 à 1 299. Specialist s’ouvre à 1 300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist est le rang du savoir-faire. Le libellé cristal de l’emblème indique GOLD. Le nom officiel enregistré dans l’échelle est Specialist. Il s’agit du même plancher.",
      detail: "La tranche va de 1 300 à 1 399. Veteran s’ouvre à 1 400.",
    },
    "rank-5-veteran": {
      stance: "Veteran est le palier du milieu. Quatre rangs se situent sous ce plancher, et cinq au-dessus.",
      detail:
        "La tranche va de 1 400 à 1 499. Elite s’ouvre à 1 500. Le libellé cristal de cet emblème est PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite est le nom utilisé par le moteur. DIAMOND est le libellé cristal du même emblème. Aucun de ces deux libellés ne constitue une seconde cote.",
      detail: "La tranche va de 1 500 à 1 599. Master s’ouvre à 1 600.",
    },
    "rank-7-master": {
      stance:
        "Master est le premier rang dont le libellé cristal et le nom officiel utilisent le même mot. Le plancher est à 1 600.",
      detail: "La tranche va de 1 600 à 1 699. Grandmaster s’ouvre à 1 700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster est la marche saphir. Le plancher est à 1 700, la tranche fait toujours cent points de large, et Sovereign attend à 1 800.",
      detail:
        "La tranche va de 1 700 à 1 799. Rien sur cette page ne consomme un match pour la franchir.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign est la large marche qui précède Legend. Le libellé cristal est IMMORTAL. Le nom officiel est Sovereign.",
      detail:
        "La tranche va de 1 800 à 1 949. Cela représente 150 points, et non 100. 1 949 correspond encore à Sovereign. Legend s’ouvre à 1 950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend est le dernier palier. Le libellé cristal est ACE ELITE. Le nom officiel est A.C.E. Legend.",
      detail:
        "La tranche s’ouvre à 1 950 et se termine au plafond du moteur, 3 000. Il n’existe pas de onzième rang. Une cote enregistrée ne peut pas dépasser 3 000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "Qu’est-ce qu’un rang A.C.E. ?",
      lede: "Un rang est le palier qui contient vos points de cote enregistrés. Dix paliers couvrent toute l’échelle, de Recruit à A.C.E. Legend.",
      sections: [
        {
          heading: "Un nombre, un palier",
          paragraphs: [
            "Le compte enregistre une cote compétitive. L’échelle lit ce nombre et renvoie le rang le plus élevé dont le plancher a été atteint. Vous ne détenez jamais deux rangs à la fois.",
            "Recruit est le rang 1. A.C.E. Legend est le rang 10. Le nom officiel est celui qui figure dans l’échelle. Le mot plus court gravé sur l’emblème est le libellé cristal du même rang.",
            "Ce codex explique l’échelle écrite. Il n’applique aucun match et ne modifie aucune cote enregistrée.",
          ],
        },
        {
          heading: "Comment se répartissent les planchers",
          paragraphs: [
            "Recruit couvre le début de l’échelle. Operative s’ouvre à 1 100. De Vanguard à Grandmaster, chaque nouveau plancher se situe 100 points plus haut : 1 200, 1 300, 1 400, 1 500, 1 600, puis 1 700.",
            "Sovereign s’ouvre à 1 800 et conserve le compte jusqu’à 1 949. A.C.E. Legend s’ouvre à 1 950. Le plafond du moteur est de 3 000, si bien que Legend est la tranche la plus longue.",
          ],
        },
        {
          heading: "Ce qu’un rang n’est pas",
          paragraphs: [
            "Un rang n’est pas un quota de population. Legend est un plancher, pas une liste de mille comptes.",
            "Un rang n’est ni un prix, ni un skin, ni une file d’attente. Le site public peut afficher le palier. Il ne lance aucun match capable d’en inscrire un nouveau.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Nom officiel et nom cristal",
      lede: "Chaque rang porte deux libellés. Le nom officiel est celui de l’échelle. Le nom cristal est le mot gravé dans l’emblème.",
      sections: [
        {
          heading: "Pourquoi les deux existent",
          paragraphs: [
            "Le moteur et le profil utilisent le nom officiel : Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "L’emblème porte aussi un libellé cristal : IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Ce libellé relève de l’illustration. Il ne crée pas de onzième rang et n’enregistre pas de second nombre.",
          ],
        },
        {
          heading: "Là où ils diffèrent",
          paragraphs: [
            "Le libellé cristal de Specialist est GOLD. Celui de Veteran est PLATINUM. Celui d’Elite est DIAMOND. Celui de Sovereign est IMMORTAL. Celui d’A.C.E. Legend est ACE ELITE. Dans chaque cas, le plancher appartient toujours au nom officiel.",
            "Master et Grandmaster utilisent le même mot aux deux endroits.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "Les trois divisions du tableau",
      lede: "Les divisions III, II et I sont une aide à la lecture peinte sur la tranche d’un rang. Le compte n’enregistre aucune division.",
      sections: [
        {
          heading: "Ce qui est enregistré",
          paragraphs: [
            "Un compte connecté enregistre un niveau de rang et une cote compétitive. Le niveau de rang suit la cote. Il n’existe aucune colonne de division à côté.",
            "Sur le tableau des rangs, la tranche du rang sélectionné est découpée en trois étapes d’affichage pour que l’œil distingue le bas, le milieu et le haut de ce palier. La division III correspond au bas de la tranche. La division I correspond au haut.",
          ],
        },
        {
          heading: "Ce que sont les pastilles",
          paragraphs: [
            "Les pourcentages de victoires et les marques de progression de ces pastilles sont des exemples. Ils ne forment pas une seconde échelle et ne constituent pas un objectif à atteindre.",
            "Changer de pastille de division ne modifie pas une cote enregistrée. Seul un résultat enregistré peut le faire, et cette page n’en enregistre aucun.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "Ce qui ne peut pas faire bouger un rang",
      lede: "Le palier suit les points de cote enregistrés. Tout le reste du site laisse le palier là où il est.",
      sections: [
        {
          heading: "En dehors du moteur",
          paragraphs: [
            "Un aperçu de skin, une carte de la boutique, un libellé d’abonnement ou un cosmétique n’ajoute aucun point de cote. Payer un forfait ne donne pas de rang.",
            "Ouvrir le tableau des rangs, faire pivoter un emblème ou lire ce codex n’applique aucun match.",
            "Un signalement, une note d’assistance ou une mise en page de tournoi ne réécrit pas la cote enregistrée.",
          ],
        },
        {
          heading: "La seule voie",
          paragraphs: [
            "La voie écrite est un résultat de match enregistré, traité par le moteur de points de cote. Aucune page publique de ce site n’inscrit un tel résultat aujourd’hui.",
            "Tant qu’aucun résultat n’existe, un nouveau compte reste à sa cote de départ, et un compte existant conserve la cote déjà enregistrée.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "Que sont les points de cote ?",
      lede: "Les points de cote sont le nombre compétitif enregistré sur le compte. Le rang n’est que la tranche dans laquelle ce nombre se situe.",
      sections: [
        {
          heading: "Le champ enregistré",
          paragraphs: [
            "La version du moteur est {version}. Un nouveau compte commence à {startingRating} points de cote. Le nombre enregistré ne peut pas descendre sous {minRating} ni dépasser {maxRating}.",
            "Les profils et le tableau des rangs lisent ce nombre lorsque vous êtes connecté. Lorsque vous ne l’êtes pas, le tableau affiche le plancher de calibrage de l’emblème sélectionné. Ce plancher est un exemple, pas votre compte.",
          ],
        },
        {
          heading: "Ce que mesure ce nombre",
          paragraphs: [
            "Le moteur compare votre cote à la cote moyenne de l’équipe adverse. Il ne tient pas de score distinct pour une distinction individuelle, un taux de headshots ou l’usage des utilitaires. Ces chiffres ne font pas partie de cette version.",
            "Plus le nombre est élevé, plus l’échelle s’attend à ce que vous gagniez souvent face à un nombre plus bas. Les noms de rang sont la lecture publique de cette échelle.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Point de départ d’un nouveau compte",
      lede: "La connexion Steam crée le compte à 1 200 Rating Points, rang 3, Vanguard, sans victoire ni défaite.",
      sections: [
        {
          heading: "Le palier de départ",
          paragraphs: [
            "1 200 est le plancher de Vanguard. Operative et Recruit sont en dessous : un nouveau compte commence donc au milieu de la première partie de l'échelle, pas tout en bas.",
            "Se reconnecter ne réinitialise pas un classement déjà enregistré. Les 10 premiers matchs enregistrés sont des matchs de placement : pendant ceux-ci, le classement ne peut pas dépasser le palier 5. Le codex n'invente aucun bilan de victoires et de défaites.",
          ],
        },
        {
          heading: "Comment la consulter",
          paragraphs: [
            "Après la connexion Steam, le tableau de bord et le tableau des rangs peuvent afficher la cote enregistrée. Si la base de données est injoignable, la page l’indique au lieu d’inventer un nombre.",
            "Le rang de départ reste Vanguard jusqu'à ce qu'un résultat enregistré fasse sortir le classement de la plage 1 200–1 299. Ce site n'écrit aucun résultat de ce type aujourd'hui.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Comment un résultat enregistré fait évoluer les points de cote",
      lede: "Une victoire ou une défaite enregistrée est mesurée par rapport au classement moyen de l'autre équipe. Contre une équipe de même niveau, une victoire vaut +15 et une défaite −15. Les règles complètes sont sur la page Rangs.",
      sections: [
        {
          heading: "Le pas",
          paragraphs: [
            "Le score attendu est la probabilité que le moteur attribue avant le match, d'après les deux classements seulement. À classement égal, elle vaut une moitié : une victoire vaut 15 Rating Points et une défaite en coûte 15.",
            "Contre un classement plus élevé, une victoire vaut plus de 15 et une défaite coûte moins. Contre un classement plus bas, c'est l'inverse. Une victoire rapporte toujours de 8 à 25 et une défaite coûte toujours de 8 à 25. Aux paliers 7 à 9, les gains de victoire sont multipliés par 0,8 et au palier 10 par 0,7 : le haut de l'échelle prend donc plus de temps. Le classement reste entre 100 et 3 000.",
            "Sur un résultat d'équipe, chaque joueur est mesuré par rapport au classement moyen de l'autre équipe. Un bonus MVP de match de 2 RP est prévu lorsque le serveur enregistrera les éliminations ; d'ici là, aucun bonus personnel n'est appliqué.",
          ],
        },
        {
          heading: "Le match nul",
          paragraphs: [
            "Un match nul ne change rien : chaque joueur garde le même classement. Abandonner ou quitter un match coûte 50 RP, quel que soit le résultat.",
            "Le tableau de cette page montre le moteur appliqué à des valeurs d’exemple. Ces lignes ne sont pas des matchs enregistrés, et elles ne concernent pas votre compte.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "Le plancher, le plafond et le rang sauté",
      lede: "Le nombre enregistré s’arrête à 100 et à 3 000. Le rang suit toujours le nombre : aucun bouton ne permet donc de sauter un rang.",
      sections: [
        {
          heading: "Les butées",
          paragraphs: [
            "Une défaite à 100 points de cote laisse le compte à 100. Une victoire à 3 000 le laisse à 3 000. Le plancher de Recruit est écrit à 0 dans l’échelle, mais le nombre enregistré n’utilise jamais l’intervalle sous 100.",
            "1 949 correspond à Sovereign. 1 950 correspond à A.C.E. Legend. Il n’existe aucun palier intermédiaire.",
          ],
        },
        {
          heading: "Pas de saut",
          paragraphs: [
            "Si un résultat enregistré faisait passer le nombre de 1 050 à 1 260, le compte porterait Vanguard, car 1 260 se situe dans cette tranche. Les rangs intermédiaires ne sont pas comptés comme des promotions distinctes. Le nombre est lu une seule fois.",
            "Aucune page de ce site n’effectue ce saut. L’exemple montre seulement comment l’échelle lit un nombre.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Où apparaîtrait un lien de match",
      lede: "Un lien de match est l’adresse d’un serveur de jeu. Ce site n’en délivre aucun.",
      sections: [
        {
          heading: "L’espace que vous pouvez ouvrir",
          paragraphs: [
            "La page Jouer affiche une mise en page à dix joueurs et une commande TROUVER UN MATCH. Cette commande reste fermée. Elle ne peut pas ouvrir de serveur Counter-Strike 2 et ne transmet d’adresse à personne.",
            "Le nombre de personnes sur le site n’est pas un nombre de personnes en jeu. La population d’un match est de 0.",
          ],
        },
        {
          heading: "Où se trouverait un lien plus tard",
          paragraphs: [
            "Si un serveur de match existait, l’adresse et son mot de passe seraient affichés dans l’espace de match une fois que les dix joueurs auraient accepté. Un joueur rejoindrait la partie depuis Steam. Aucune adresse n’est enregistrée sur ce site, et aucun mot de passe n’est généré.",
            "La connexion Steam lie le compte. Elle ne place pas un joueur sur une carte.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "Qu’est-ce que l’espace classé ?",
      lede: "L’espace classé est la mise en page 5v5 de la page Jouer. C’est un espace fermé, pas une file d’attente ouverte.",
      sections: [
        {
          heading: "Ce qui est affiché",
          paragraphs: [
            "Deux équipes de cinq places chacune, et un libellé de capitaine sur la première place. La liste des cartes et la ligne de chat à côté font partie de la même mise en page.",
            "Les lignes de sécurité de cette page indiquent leur statut. Aucune n'est encore une vérification active ; la feuille de route est sur /anti-cheat.",
          ],
        },
        {
          heading: "Ce que l’espace ne fait pas",
          paragraphs: [
            "TROUVER UN MATCH ne recherche pas d’adversaires. Cette commande ne modifie pas les points de cote. Le rang d’un compte reste le nombre enregistré, lu par l’échelle décrite dans ce codex.",
            "Il n’existe aucune file supérieure distincte au-dessus de Legend. A.C.E. Legend est le dernier palier, et il s’ouvre à 1 950 points de cote.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "L’aide de l’espace de match",
      lede: "L’assistance sur ce site est un guichet écrit. Elle n’ouvre aucune ligne vocale en direct pendant un match.",
      sections: [
        {
          heading: "Ce que fait la page d’assistance",
          paragraphs: [
            "La page d’assistance liste les guichets et propose une commande de ticket. Choisir cette commande ne crée aucun dossier et ne permet pas de joindre une personne pendant un match, car aucun match n’est en cours.",
            "Une question de règlement relève du code de compétition à /rules. Une question sur l’échelle relève de ce codex.",
          ],
        },
        {
          heading: "Une réclamation, une fois qu’un match existe",
          paragraphs: [
            "Le code écrit prévoit que le capitaine peut déposer une réclamation avant le début de la carte suivante, en indiquant la carte, la manche et l’article concerné. Ce site ne stocke pas de démos et n’exploite pas de serveurs de jeu : cette réclamation n’a donc aucun endroit où aboutir aujourd’hui.",
            "Un score de mise en page n’est pas un match joué. Le personnel n’inscrirait un résultat de série qu’après une série réelle.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "En attendant dix joueurs",
      lede: "Une carte compétitive nécessite dix titulaires. L’espace ne gère pas cette attente aujourd’hui.",
      sections: [
        {
          heading: "Le chronomètre écrit",
          paragraphs: [
            "Une fois qu’un match a une heure de début publiée, les cinq titulaires d’une équipe doivent être présents 15 minutes avant ce début. Cette phrase figure dans le code de compétition. Le chronomètre ne démarre pas sur ce site, car aucun match n’est publié.",
            "Les noms affichés sur la page de jeu sont un aperçu. Ce ne sont pas des personnes en file d'attente.",
          ],
        },
        {
          heading: "Ce qui ne se passe pas pendant que vous regardez",
          paragraphs: [
            "La page ne réserve aucun serveur, n’envoie aucune notification et n’affiche aucun compte à rebours avant acceptation. Quitter la page n’abandonne aucun match, car vous n’en avez rejoint aucun.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "Le capitaine dans l’espace de match",
      lede: "Un capitaine parle pour chaque camp. Les rôles du lobby s'activeront avec la bêta compétitive.",
      sections: [
        {
          heading: "Ce que le code attribue",
          paragraphs: [
            "Le capitaine gère le veto, les pauses et les réclamations. Les autres titulaires jouent. Un remplaçant ne peut entrer qu’entre deux cartes.",
            "Sur une carte unique, les capitaines bannissent une carte à la fois jusqu'à ce qu'il n'en reste qu'une. Le pool est Ancient, Anubis, Dust II, Inferno, Mirage, Nuke et Train. La tête de série la plus haute est l'équipe A et choisit de bannir en premier ou en second ; à égalité, un tirage à pile ou face tranche. Aucun veto n'est ouvert aujourd'hui.",
          ],
        },
        {
          heading: "Pauses",
          paragraphs: [
            "Les pauses ne s'appliquent que lorsqu'un serveur de match existe. Il n'y en a pas ici. Le quota écrit par équipe et par carte est de trois pauses tactiques de 30 secondes, plus une en prolongation, et 10 minutes de pause technique au total. Le texte complet est sur /rules.",
            "Sur la page Équipes, le rôle de capitaine est aussi celui qui peut envoyer une invitation dans l’effectif. Cette invitation est distincte d’un lobby de match.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Quand une équipe n’est pas prête",
      lede: "Le code de compétition décrit un forfait pour un match dont l’heure de début est publiée. Ce site ne prononce pas ce forfait.",
      sections: [
        {
          heading: "La règle écrite",
          paragraphs: [
            "Cinq titulaires doivent être prêts 15 minutes avant l’heure de début publiée. Une équipe toujours incomplète 15 minutes après le début perd la série par forfait, une fois qu’un match existe. Si les deux équipes sont absentes, elles sont toutes deux retirées et le personnel statue sur l’emplacement.",
            "Un clan qui commence une carte avec moins de cinq titulaires éligibles, sans remplaçant en mesure d’entrer, perd cette carte par forfait.",
          ],
        },
        {
          heading: "Ce que ce site ne fera pas",
          paragraphs: [
            "Rien ici ne surveille un lobby ni n’inscrit un forfait de lui-même. Un bouton de la page Jouer ne peut pas abandonner une carte qui n’a jamais été chargée.",
            "Un score de mise en page sur l’arbre du tournoi n’est ni un match joué ni un forfait.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "S’inscrire au tournoi à élimination directe de 100 clans",
      lede: "La page Tournois présente un arbre de 100 clans. Les inscriptions sont à 0 sur 100. Elles ne sont pas ouvertes.",
      sections: [
        {
          heading: "Ce que vous pouvez ouvrir",
          paragraphs: [
            "Cliquez sur un clan dans l'arbre pour voir son effectif, puis ouvrez un joueur. Les noms sur les places libres sont des aperçus, pas des inscriptions acceptées.",
            "L’arbre n’attribue aucun serveur et n’envoie aucun lien de match.",
          ],
        },
        {
          heading: "L’exemption, à l’ouverture des inscriptions",
          paragraphs: [
            "La règle écrite, pour une future inscription, prévoit que les 28 premiers clans acceptés sont exemptés du premier tour. Cette exemption n’est pas un prix, et elle ne peut pas être obtenue tant que les inscriptions restent à 0 sur 100.",
            "Le format des séries, le pool de cartes et les réclamations figurent dans le code de compétition à /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Comment se constitue un effectif",
      lede: "Un capitaine invite un joueur qui possède déjà un compte A.C.E. Il n’existe aucun lien de partage public, et aucun mot de passe Steam n’est jamais demandé.",
      sections: [
        {
          heading: "L’invitation qui existe",
          paragraphs: [
            "Sur la page Équipes, un capitaine connecté colle un SteamID64 ou un identifiant de compte A.C.E. Le compte doit déjà être lié via Steam OpenID. Le serveur enregistre une invitation en attente lorsque la base de données l’accepte.",
            "L’effectif compte cinq joueurs, capitaine compris. Un capitaine ne peut pas inviter son propre compte. Un joueur qui fait déjà partie de l’effectif est refusé. Si la base de données est indisponible, l’invitation échoue et aucune invitation n’est enregistrée.",
          ],
        },
        {
          heading: "Ce qu’une invitation n’est pas",
          paragraphs: [
            "L’invitation n’envoie aucun courrier, n’ouvre aucun lobby privé et ne génère aucun lien à publier. Elle n’inscrit pas le clan au tournoi à élimination directe.",
            "Le code du tournoi autorise deux remplaçants désignés une fois qu’une inscription au tournoi existe. Les inscriptions ne sont pas ouvertes : ces places ne constituent donc pas un accès utilisable aujourd’hui.",
          ],
        },
      ],
    },
  },
};
