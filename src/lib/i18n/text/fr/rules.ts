import type { TextBag } from "../types";

export const rules: TextBag["rules"] = {
  meta: {
    title: "Règlement compétitif",
    description:
      "Code de compétition A.C.E. pour un arbre Counter-Strike 2 de 100 clans. MR12, prolongation, argent, pauses et exemption du premier tour. Les inscriptions sont fermées. Aucun prix n’est financé.",
  },
  document: {
    header: {
      kicker: "CODE DE COMPÉTITION A.C.E.",
      title: "Règlement compétitif",
      lede: "La durée des matchs, l’argent, le chronomètre et les pauses suivent les paramètres compétitifs publics de Counter-Strike 2. L’arbre de 100 clans, l’exemption du premier tour et l’ordre du veto sont des règles propres à A.C.E. pour ce format. Le code ne s’applique à un clan qu’une fois ce clan accepté. Les inscriptions sont fermées.",
      notice:
        "A.C.E. n’exploite aucun serveur Counter-Strike 2. La connexion Steam passe uniquement par Steam OpenID. Cette page n’attribue aucun prix et ne modifie aucune cote.",
    },
    articleLabel: "ARTICLE {code}",
    articles: [
      {
        title: "Champ d’application",
        paragraphs: [
          "Le présent texte est le code de compétition d’A.C.E. Il ne s’applique à un clan qu’après qu’A.C.E. a accepté ce clan dans un événement. Les inscriptions sont fermées : 0 sur 100. Les files classées, les serveurs de match, les paiements, les prix et un client anti-triche téléchargeable ne sont pas actifs. Un clic dans le navigateur n’est pas une manche gagnée, et une capture d’écran n’est pas un score.",
        ],
      },
      {
        title: "La carte",
        paragraphs: [
          "Un match oppose cinq joueurs à cinq. Le temps réglementaire compte au plus 24 manches. La première équipe à remporter 13 manches gagne la carte, et la carte prend fin à ce moment-là. Les camps sont inversés après 12 manches. À la première manche de la nouvelle mi-temps, chaque joueur repart avec $800.",
        ],
      },
      {
        title: "Le chronomètre",
        paragraphs: [
          "Une manche dure 1 minute 55 secondes. Le minuteur de la bombe est de 40 secondes. Un désamorçage prend 10 secondes, ou 5 secondes avec un kit. Le menu d’achat reste ouvert pendant 20 secondes à partir du début de la manche, et les achats ne sont autorisés que dans la zone d’apparition. Les parties compétitives officielles figent la manche pendant 20 secondes au départ. L’échauffement dure 2 minutes, ou 15 secondes une fois les dix joueurs connectés.",
        ],
      },
      {
        title: "L’argent",
        paragraphs: [
          "Un joueur ne peut pas détenir plus de $16 000. Sur une carte à bombe, l’équipe reçoit $3 250 pour une victoire par élimination ou au temps, $3 500 pour une victoire par explosion de la bombe et $3 500 pour une victoire par désamorçage. Le joueur qui pose la bombe reçoit $300. Le joueur qui la désamorce reçoit $300. Une équipe perdante qui a posé la bombe reçoit $600 supplémentaires.",
          "Une manche perdue rapporte $1 400, plus $500 pour chaque défaite déjà comptée dans la série de ce camp. Le réglage compétitif fait démarrer la série à 1, si bien que la première manche perdue rapporte $1 900. Le bonus passe ensuite à $2 400 puis à $2 900, jusqu’à un plafond de $3 400. Une manche gagnée remet la série à zéro. Une élimination rapporte la récompense fixée pour l’arme utilisée. Lorsque l’arme ne prévoit aucune récompense particulière, l’élimination rapporte $300. Le tir allié est activé, et une balle qui touche un coéquipier inflige 33 % de ses dégâts.",
        ],
      },
      {
        title: "La prolongation",
        paragraphs: [
          "Une carte à égalité 12–12 passe en prolongation. Une séquence de prolongation compte six manches. Les camps sont inversés après trois manches. La première équipe à remporter quatre manches dans la séquence gagne la carte. Une séquence qui se termine sur 3–3 en déclenche une nouvelle, et les séquences s’enchaînent jusqu’à ce qu’une équipe en remporte une. Chaque joueur commence chaque mi-temps de prolongation avec $10 000. Le matchmaking compétitif officiel peut s’arrêter après une séquence et enregistrer un match nul. Cet arbre n’enregistre pas de match nul.",
        ],
      },
      {
        title: "Les pauses",
        paragraphs: [
          "Ces pauses ne s’appliquent qu’une fois qu’un serveur de match existe. Il n’en existe aucun sur ce site. Chaque équipe peut demander trois pauses tactiques de 30 secondes par carte, et ne peut pas en demander une pendant la pause de l’adversaire. Une pause tactique est disponible au début de la première séquence de prolongation. Chaque équipe peut également demander une pause technique de 120 secondes par carte. Si un joueur est déconnecté, le capitaine peut utiliser cette pause technique dans les 30 secondes qui suivent la déconnexion afin que le joueur puisse se reconnecter. Si le joueur n’est pas revenu à la fin de la pause, la carte continue. Demander une pause pour faire traîner une manche perdue constitue un manquement à la conduite.",
        ],
      },
      {
        title: "Le plateau et l’exemption du premier tour",
        paragraphs: [
          "Le format du championnat est un arbre à élimination directe pour 100 clans. Un clan qui perd une série est éliminé. Les noms placés sur les emplacements libres sont des exemples de mise en page, pas des clans acceptés.",
          "À l’ouverture des inscriptions, les clans sont numérotés dans l’ordre où A.C.E. les accepte. Les 28 premiers clans acceptés reçoivent une exemption. L’exemption dispense uniquement du premier tour et place le clan directement au deuxième tour. C’est un passage dans le tableau. Ce n’est ni un billet payant ni un prix. Les clans 29 à 100 jouent le premier tour. Si deux acceptations portent le même horodatage, le clan dont l’effectif de cinq titulaires a été complété en premier passe devant. Un clan qui se retire avant le verrouillage des effectifs perd son exemption, et le clan accepté suivant dans l’ordre la récupère.",
        ],
      },
      {
        title: "Format des séries",
        paragraphs: [
          "Le premier tour, les trente-deuxièmes de finale et les seizièmes de finale se jouent sur une seule carte. Les huitièmes de finale, les quarts de finale et les deux demi-finales se jouent au meilleur des trois cartes. La grande finale se joue au meilleur des cinq cartes.",
        ],
      },
      {
        title: "Les cartes et le veto",
        paragraphs: [
          "Le pool de cartes est la liste compétitive publique : Ancient, Anubis, Cache, Dust II, Inferno, Mirage et Nuke. Si cette liste publique change avant l’ouverture des inscriptions, la liste de remplacement sera publiée sur cette page avant le premier veto.",
          "Pour un match en une carte, les capitaines bannissent une carte à la fois jusqu’à ce qu’il n’en reste qu’une. Le plus petit numéro d’inscription bannit en premier. En BO3, chaque capitaine bannit une fois, puis chacun choisit une carte, puis chacun bannit encore une fois, et la dernière carte est la carte décisive. Le plus petit numéro d’inscription bannit en premier et l’autre capitaine choisit en premier. En BO5, chaque capitaine bannit une fois, puis les capitaines choisissent à tour de rôle jusqu’à ce que quatre cartes soient retenues, et la carte restante est la carte décisive. Le plus petit numéro d’inscription bannit en premier et choisit en troisième. Sur une carte choisie par un capitaine, l’autre capitaine choisit le camp de départ. Sur la dernière carte restante, le plus petit numéro d’inscription choisit le camp de départ. Un capitaine qui reste silencieux pendant dix minutes après l’ouverture du veto cède le bannissement ou le choix suivant à l’adversaire. Aucun veto n’est ouvert aujourd’hui.",
        ],
      },
      {
        title: "L’effectif",
        paragraphs: [
          "Un clan inscrit cinq titulaires et peut désigner deux remplaçants. Chaque titulaire doit disposer d’un compte A.C.E. lié via Steam OpenID. A.C.E. ne demande jamais de mot de passe Steam. Un seul capitaine s’exprime au nom du clan pour le veto, les pauses et les réclamations. Un remplaçant ne peut entrer qu’entre deux cartes. Le partage de compte, l’utilisation d’un compte emprunté et la présence d’un même joueur dans deux clans du même arbre sont interdits. Ce site ne collecte pas d’identifiants matériels et n’exécute aucun client anti-triche.",
        ],
      },
      {
        title: "Disponibilité",
        paragraphs: [
          "Ces délais ne s’appliquent qu’une fois qu’un match existe. Cinq titulaires doivent être prêts 15 minutes avant l’heure de début publiée. Une équipe qui n’est pas prête 15 minutes après l’heure de début publiée perd la série par forfait. Si les deux équipes sont absentes, elles sont toutes deux retirées et le personnel statue sur l’emplacement. Un clan qui commence une carte avec moins de cinq titulaires éligibles, sans remplaçant en mesure d’entrer, perd cette carte par forfait. Rien sur ce site ne prononce de forfait automatique.",
        ],
      },
      {
        title: "Conduite",
        paragraphs: [
          "Le harcèlement, les propos haineux, le trucage de match, les paris sur sa propre série, le ghosting et les retards délibérés constituent des manquements. Un manquement avéré peut entraîner le retrait du clan de l’arbre. Cette page n’analyse aucun joueur et ne déclare aucun joueur blanchi.",
        ],
      },
      {
        title: "Le résultat enregistré",
        paragraphs: [
          "Le capitaine peut déposer une réclamation avant le début de la carte suivante. La réclamation indique la carte, la manche et l’article concerné. Ce site ne stocke pas de démos et n’exploite pas de serveurs de jeu. Le personnel inscrit le résultat de la série dans le tableau. Ce résultat écrit est le score qu’affiche A.C.E. Il ne vaut renonciation à aucun droit légal. Un score de mise en page n’est pas un match joué.",
        ],
      },
      {
        title: "Ce qui ne fonctionne pas",
        paragraphs: [
          "Les inscriptions sont fermées. Aucun serveur de match, aucune diffusion, aucun envoi d’e-mails et aucune cagnotte ne sont en service. Aucun argent, aucun skin et aucun jeton n’est attribué depuis cette page. Les scores de l’arbre restent à 0 tant qu’aucune série réelle n’est enregistrée.",
        ],
      },
    ],
  },
  tournament: {
    roadmap: {
      kicker: "Feuille de route du championnat",
      title: "Calendrier de lancement du tournoi",
      stageLabel: "Étape {n}",
      stages: [
        {
          title: "Ouverture des inscriptions",
          status: "FERMÉES · 0 SUR 100",
          body: "Les 28 premiers clans acceptés à l’ouverture des inscriptions reçoivent une exemption du premier tour et passent directement au deuxième tour. Les 72 autres jouent le premier tour. Aucun e-mail d’inscription n’est envoyé depuis ce site.",
        },
        {
          title: "Tableaux régionaux de calibrage",
          status: "VERROUILLÉ",
          body: "Des trente-deuxièmes aux huitièmes de finale. Une seule carte jusqu’aux huitièmes de finale, puis au meilleur des trois. Aucun programme de diffusion n’est en service.",
        },
        {
          title: "Quarts de finale Elite Pro",
          status: "VERROUILLÉ",
          body: "Les quarts de finale et les demi-finales se jouent au meilleur des trois, selon le veto de cartes décrit dans le code ci-dessous. Aucun relais en direct n’est en service.",
        },
        {
          title: "Grande finale Apex",
          status: "VERROUILLÉ",
          body: "La grande finale se joue au meilleur des cinq. Aucun prix en argent, en skin ou en jeton n’est financé.",
        },
      ],
    },
    code: {
      kicker: "Code de compétition",
      title: "Code d’élimination directe à 100 clans",
      lede: "Règles écrites pour l’arbre de 100 clans, rédigées spécifiquement pour A.C.E. Les inscriptions sont fermées, aucun match n’est en cours et aucun prix n’est financé. Une règle concernant un lobby, une pause ou un forfait ne s’applique qu’une fois qu’une série réelle existe.",
      articleLabel: "Article {id}",
      articles: [
        {
          title: "Plateau",
          body: "Le championnat est un arbre à élimination directe pour 100 clans. Chaque clan est placé dans l’une des deux ailes du tableau. Un clan qui perd une série est éliminé. L’arbre reste une mise en page tant qu’A.C.E. n’a pas ouvert les inscriptions et enregistré de vrais résultats. Les noms de démonstration placés sur les emplacements libres ne sont pas des clans acceptés.",
        },
        {
          title: "Ordre d’inscription et exemption du premier tour",
          body: "Les inscriptions sont fermées : 0 sur 100. À l’ouverture des inscriptions, les clans sont numérotés dans l’ordre où A.C.E. les accepte. Les 28 premiers clans acceptés reçoivent une exemption. Cette exemption dispense uniquement du premier tour et place le clan directement au deuxième tour. C’est un passage dans le tableau, ni un billet payant ni un prix. Les clans 29 à 100 jouent le premier tour. Si deux acceptations portent le même horodatage, le clan dont l’effectif de cinq titulaires a été complété en premier passe devant. Un clan qui se retire avant le verrouillage des effectifs perd son exemption, et le clan accepté suivant dans l’ordre la récupère.",
        },
        {
          title: "Effectif",
          body: "Un clan inscrit cinq titulaires et peut désigner deux remplaçants. Chaque titulaire doit disposer d’un compte A.C.E. lié via Steam OpenID. Un seul capitaine s’exprime au nom du clan pour les vetos, les pauses et les réclamations. Les remplaçants ne peuvent entrer qu’entre deux cartes. Le partage de compte, les comptes empruntés et la présence d’un joueur dans deux clans du même arbre sont interdits. Ce site ne collecte pas d’identifiants matériels et n’exécute aucun client anti-triche.",
        },
        {
          title: "Format des séries",
          body: "Le premier tour, les trente-deuxièmes de finale et les seizièmes de finale se jouent sur une seule carte. Les huitièmes de finale, les quarts de finale et les deux demi-finales se jouent au meilleur des trois. La grande finale se joue au meilleur des cinq. Une carte est remportée par la première équipe à 13 manches. À 12–12, la carte passe en prolongation : la première équipe à 4 manches gagnées l’emporte, les camps sont inversés après 3 manches, et chaque équipe commence la prolongation avec $10 000. Une prolongation à égalité est rejouée selon la même règle.",
        },
        {
          title: "Pool de cartes et veto",
          body: "Le pool de cartes comprend Ancient, Anubis, Cache, Dust II, Inferno, Mirage et Nuke. Pour un match en une carte, les capitaines bannissent une carte à la fois jusqu’à ce qu’il n’en reste qu’une, et le plus petit numéro d’inscription bannit en premier. En BO3, chaque capitaine bannit une fois, puis chacun choisit une carte, puis chacun bannit encore une fois, et la dernière carte est la carte décisive. Le plus petit numéro d’inscription bannit en premier et l’autre capitaine choisit en premier. En BO5, chaque capitaine bannit une fois, puis les capitaines choisissent à tour de rôle jusqu’à ce que quatre cartes soient retenues, et la carte restante est la carte décisive. Le plus petit numéro d’inscription bannit en premier et choisit en troisième. Sur une carte choisie, l’autre capitaine choisit le camp de départ. Sur la dernière carte restante, le plus petit numéro d’inscription choisit le camp de départ. Un capitaine qui reste silencieux pendant dix minutes après l’ouverture du veto cède le bannissement ou le choix suivant à l’adversaire. Le code de match complet se trouve à /rules.",
        },
        {
          title: "Début, pauses et déconnexions",
          body: "Ces délais ne s’appliquent qu’une fois qu’un match existe. Ils ne sont pas appliqués sur ce site, et aucun lobby n’est ouvert. Cinq titulaires doivent être prêts 15 minutes avant l’heure de début publiée. Chaque équipe peut demander trois pauses tactiques de 30 secondes par carte, ainsi qu’une pause technique de 120 secondes. Une pause tactique est disponible au début de la première séquence de prolongation. Un joueur déconnecté peut se reconnecter pendant une pause technique demandée dans les 30 secondes qui suivent la déconnexion. Si le joueur n’est pas revenu à la fin de cette pause, la carte continue sans lui. Rien sur ce site ne prononce de forfait automatique. Le code de match complet se trouve à /rules.",
        },
        {
          title: "Absence",
          body: "Une équipe qui n’est pas prête 15 minutes après l’heure de début publiée perd la série par forfait. Si les deux équipes sont absentes, elles sont toutes deux retirées et l’emplacement suivant reste ouvert jusqu’à ce que le personnel inscrive un résultat. Un clan qui aligne moins de cinq titulaires éligibles au début, sans remplaçant en mesure d’entrer, perd cette carte par forfait.",
        },
        {
          title: "Conduite",
          body: "Le harcèlement, les propos haineux, le trucage de match, les paris sur sa propre série et les retards délibérés constituent des manquements. Un manquement avéré entraîne le retrait du clan de l’arbre. Pendant une série en cours, une fois que des matchs existeront, le chat reste limité à la composition, aux pauses et au score. Cette page n’analyse aucun joueur et ne prétend pas qu’un joueur est blanchi.",
        },
        {
          title: "Réclamations",
          body: "Le capitaine dépose une réclamation dans le canal du match avant le début de la carte suivante. La réclamation indique la carte, la manche et l’article du règlement concerné. Le personnel peut demander aux deux capitaines une démo enregistrée par les joueurs. Ce site ne stocke pas de démos et n’exploite pas de serveurs de jeu. L’arbitre principal inscrit le résultat de la série dans le tableau. Ce résultat écrit est le score qu’affiche A.C.E. Il ne vaut renonciation à aucun droit légal, et il ne transforme pas un score de mise en page en match joué.",
        },
        {
          title: "Ce que cette page ne fait pas",
          body: "Les inscriptions sont fermées. Aucun serveur de match, aucune diffusion, aucun envoi d’e-mails et aucune cagnotte ne sont en service. Aucun argent, aucun skin et aucun jeton n’est attribué depuis cette page. Les scores de l’arbre restent à 0 tant qu’aucune série réelle n’est enregistrée. Le code ci-dessus est la règle écrite pour le format à 100 clans. Il ne s’applique à un clan qu’une fois ce clan réellement accepté.",
        },
      ],
    },
  },
};
