import type { Ui } from "./en";

export const UI_FR: Ui = {
  "nav": {
    "home": "Accueil",
    "play": "Jouer",
    "ranks": "Rangs",
    "tournaments": "Tournois",
    "leaderboard": "Classement",
    "teams": "Équipes",
    "getPremium": "Passer Premium",
    "maps": "Cartes",
    "prizes": "Récompenses",
    "shop": "Boutique",
    "rules": "Règlement",
    "antiCheat": "Anti-triche",
    "features": "Fonctionnalités",
    "pricing": "Tarifs",
    "compete": "Compétition",
    "explore": "Découvrir"
  },
  "footer": {
    "platform": "Plateforme",
    "competition": "Compétition",
    "company": "Entreprise",
    "legal": "Mentions légales",
    "tagline": "Des classements compétitifs Counter-Strike 2, construits autour du fair-play.",
    "follow": "Suivre A.C.E",
    "rights": "Tous droits réservés.",
    "legalLine": "© 2026 A.C.E. Plateforme indépendante, non affiliée à Valve. Counter-Strike et CS2 sont des marques de Valve Corporation."
  },
  "soon": {
    "label": "Bientôt"
  },
  "cta": {
    "kicker": "Saison 1",
    "title": "Prêt à concourir ?",
    "body": "Connectez Steam, calibrez-vous et grimpez.",
    "play": "Jouer à A.C.E",
    "ranks": "Découvrir les rangs"
  },
  "status": {
    "title": "État de la plateforme",
    "steam": "Connexion Steam OpenID",
    "shield": "A.C.E Shield · phase de déploiement",
    "servers": "Serveurs compétitifs · bêta compétitive",
    "billing": "Intégration de la facturation",
    "available": "Disponible",
    "inDevelopment": "En développement",
    "comingSoon": "Bientôt",
    "designed": "Conçu"
  },
  "ranksTabs": {
    "label": "Rangs",
    "tiers": "Paliers et divisions",
    "codex": "Codex de calibrage"
  },
  "maps": {
    "kicker": "Pool de cartes compétitif",
    "title": "Cartes et diffusion",
    "lede": "Sept cartes composent le pool compétitif A.C.E. Les équipes bannissent et choisissent parmi elles lors du veto prévu par le règlement. Les diffusions de tournoi apparaissent sur l’écran ci-dessous.",
    "rulebook": "Lire les règles du veto",
    "screen": "Écran de diffusion",
    "offAir": "Hors antenne",
    "noBroadcast": "Aucune diffusion en ce moment.",
    "nextLabel": "Prochaine diffusion",
    "notScheduled": "annoncée ici prochainement",
    "embeddedFrom": "Diffusé depuis {provider}.",
    "pool": "Pool de cartes actif",
    "poolMeta": "{count} cartes · veto BO1 / BO3",
    "mapLabel": "Carte {n}",
    "settings": {
      "dust": "Ville du désert",
      "mirage": "Quartier du marché",
      "inferno": "Vieux village",
      "nuke": "Site industriel",
      "ancient": "Ruines de la jungle",
      "anubis": "Temple des canaux",
      "train": "Gare de triage"
    },
    "notes": {
      "dust": "Longues lignes de vue sur A, portes de mid serrées.",
      "mirage": "Le contrôle du mid décide la plupart des rounds.",
      "inferno": "Passages étroits et exécutions riches en utilitaires.",
      "nuke": "Sites superposés et rotations verticales rapides.",
      "ancient": "La pression du mid vers B façonne la mi-temps.",
      "anubis": "Mid aquatique et attaques ouvertes sur B.",
      "train": "Couverture entre les wagons et longues allées sur A."
    }
  },
  "prizes": {
    "kicker": "Récompenses du championnat",
    "title": "Récompenses",
    "lede": "La sélection de récompenses que nous préparons pour les champions de la saison 1. Les dotations sont confirmées sur la page de chaque événement dès leur annonce, selon la section 18 du règlement.",
    "rulebook": "Règles des récompenses",
    "cardKicker": "Récompense légendaire",
    "slots": {
      "first": "1re place · par joueur",
      "second": "2e place · par joueur",
      "mvp": "Prix MVP"
    },
    "facts": {
      "pool": "Dotation",
      "items": "Objets de récompense",
      "delivery": "Livraison",
      "season": "Saison"
    },
    "factValues": {
      "season": "Saison 1"
    }
  },
  "rules": {
    "kicker": "Règlement de compétition A.C.E.",
    "title": "Règlement de compétition",
    "version": "Version {version} · en vigueur le {date}",
    "intro": "Les règles de chaque compétition A.C.E. Les clauses marquées « S’applique au déploiement » entrent en vigueur au lancement du système dont elles dépendent.",
    "pending": "S’applique au déploiement",
    "contents": "Sommaire",
    "penalties": {
      "offence": "Infraction",
      "first": "Première infraction",
      "repeat": "Récidive",
      "rule": "Article"
    },
    "englishNote": "",
    "sections": [
      "Champ d’application et définitions",
      "Éligibilité",
      "Comptes et identité",
      "Équipes et effectifs",
      "Capitaines",
      "Pool de cartes et veto",
      "Déroulement du match",
      "Paramètres de match",
      "Problèmes serveur et techniques",
      "Pauses",
      "Déconnexions",
      "Forfaits et absences",
      "Comportement",
      "Triche et intégrité sportive",
      "Litiges et appels",
      "Sanctions",
      "Diffusion",
      "Récompenses",
      "Rating Points",
      "Modifications"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Anti-triche",
    "lede": "A.C.E Shield est le système d’intégrité conçu pour chaque match A.C.E : contrôles client, serveur, match et comportement qui travaillent ensemble, pensés d’abord pour la vie privée.",
    "statusLabel": "Phase de déploiement",
    "pillarsTitle": "Piliers de l’architecture",
    "pillars": {
      "client": {
        "title": "Intégrité du client",
        "body": "Un client léger vérifie l’environnement de jeu pendant un match et signale les indices de manipulation."
      },
      "server": {
        "title": "Intégrité du serveur",
        "body": "Les serveurs de match utilisent des configurations verrouillées, des plugins signés et des journaux infalsifiables."
      },
      "match": {
        "title": "Intégrité du match",
        "body": "Chaque round est enregistré avec démos et journaux d’événements pour que tout résultat puisse être revu."
      },
      "behaviour": {
        "title": "Analyse comportementale",
        "body": "Des modèles statistiques signalent les schémas de visée, de réaction et d’information atypiques pour un examen humain."
      },
      "identity": {
        "title": "Identité",
        "body": "Comptes Steam OpenID, un joueur par compte, avec contrôles anti-contournement de bannissement."
      }
    },
    "roadmapTitle": "Feuille de route",
    "phases": {
      "p1": {
        "title": "Phase 1 · Architecture",
        "body": "Modèle de menaces, flux de données et conception de la confidentialité."
      },
      "p2": {
        "title": "Phase 2 · Intégrité serveur et match",
        "body": "Configurations verrouillées, capture des démos, journaux infalsifiables."
      },
      "p3": {
        "title": "Phase 3 · Analyse comportementale",
        "body": "Outils de revue et premiers modèles statistiques."
      },
      "p4": {
        "title": "Phase 4 · Intégrité du client",
        "body": "Bêta du client Shield avec audit de sécurité public."
      },
      "p5": {
        "title": "Phase 5 · Bêta compétitive",
        "body": "Shield obligatoire pour les matchs classés et les tournois."
      }
    },
    "privacyTitle": "Principes de confidentialité",
    "privacy": [
      "Nous ne collectons que ce qui est nécessaire pour protéger un match, et nous disons précisément quoi.",
      "Aucun identifiant matériel n’est collecté avant une mise en œuvre sécurisée, documentée et auditée de façon indépendante.",
      "Les données de match sont conservées pour une durée fixe puis supprimées.",
      "Toute sanction peut faire l’objet d’un appel examiné par une personne."
    ],
    "faqTitle": "Questions",
    "faq": [
      {
        "q": "A.C.E Shield est-il actif aujourd’hui ?",
        "a": "Pas encore. Il est en développement ; chaque phase ci-dessus indique son état actuel."
      },
      {
        "q": "Faudra-t-il un accès noyau ?",
        "a": "La conception commence par des contrôles en mode utilisateur et une analyse côté serveur. Tout accès plus profond serait d’abord documenté et revu publiquement."
      },
      {
        "q": "Premium influence-t-il l’anti-triche ?",
        "a": "Non. Les règles d’intégrité sont identiques pour tous. Les offres payantes n’achètent jamais d’avantage compétitif."
      },
      {
        "q": "Comment signaler un tricheur ?",
        "a": "Via la page de contact. Les signalements sont examinés selon la section 14 du règlement."
      }
    ]
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Construis ton identité compétitive. Calibre ton niveau. Grimpe dans les rangs A.C.E.",
      "connectSteam": "Connecter Steam",
      "openDashboard": "Ouvrir le tableau de bord",
      "exploreRanks": "Découvrir les rangs"
    },
    "status": {
      "title": "État de la plateforme",
      "steam": "Connexion Steam",
      "shield": "A.C.E Shield",
      "servers": "Serveurs compétitifs",
      "tournaments": "Tournois",
      "billing": "Facturation",
      "available": "Disponible",
      "inDevelopment": "En développement",
      "comingSoon": "Bientôt",
      "preparing": "En préparation",
      "billingOff": "Non configuré · le paiement affiche Bientôt",
      "billingOn": "Actif · paiement Paddle"
    },
    "card": {
      "matches": "Matchs",
      "wl": "V/D",
      "kd": "K/D",
      "noMatches": "Aucun match enregistré",
      "division": "Division {division}"
    },
    "journey": {
      "title": "Ton parcours compétitif",
      "currentRp": "RP actuels",
      "current": "Actuel",
      "next": "Suivant",
      "toGo": "{rp} RP avant la division suivante",
      "top": "Division la plus haute atteinte",
      "basis": "Calculé à partir de tes RP enregistrés et du tableau des rangs publié."
    },
    "board": {
      "emptyTitle": "Aucun match classé pour l’instant",
      "emptyBody": "Les joueurs apparaissent ici après leur premier match classé enregistré. Rien sur ce tableau n’est inventé.",
      "previewTag": "APERÇU",
      "lobbyTitle": "Salon",
      "matchFoundTitle": "Match trouvé",
      "previewNote": "Simple aperçu de la mise en page : aucune file ni aucun serveur ne tourne, et les noms sont fictifs.",
      "accept": "Accepter",
      "waiting": "En attente de joueurs",
      "note": "Comptes réels ayant au moins un match classé enregistré, triés par RP enregistrés. Aucune ligne de démonstration ou inventée."
    },
    "toast": {
      "region": "Notifications",
      "dismiss": "Fermer la notification",
      "signedIn": "Connecté en tant que {name}",
      "signedOut": "Tu es déconnecté.",
      "authFailed": "La connexion Steam n’a pas abouti. Réessaie."
    },
    "sound": {
      "on": "Sons de l’interface : activés",
      "off": "Sons de l’interface : désactivés"
    },
    "chat": {
      "open": "Ouvrir le chat d’assistance",
      "close": "Fermer le chat d’assistance",
      "title": "Assistance A.C.E",
      "greeting": "Salut ! Je suis l’assistant d’aide d’A.C.E. Pose-moi tes questions sur les rangs, les offres, les règles ou ton compte.",
      "placeholder": "Écris ta question…",
      "send": "Envoyer",
      "unavailable": "Le chat d’assistance n’est pas encore disponible.",
      "disclaimer": "Les réponses automatiques peuvent se tromper. Les bannissements et décisions de compte relèvent uniquement de l’administration.",
      "escalate": "Envoyer à l’équipe",
      "escalated": "Enregistré comme ticket d’assistance. L’administration l’examinera.",
      "error": "Une erreur est survenue. Réessaie.",
      "rateLimited": "Trop de messages. Patiente un instant.",
      "thinking": "Écrit…",
      "tooLong": "Message trop long ({max} caractères max.)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Plateforme compétitive",
      "h1a": "Affrontez.",
      "h1b": "Calibrez.",
      "h1c": "Montez.",
      "sub": "CS2 classé avec connexion Steam, une échelle de RP publique et des offres qui n'achètent jamais d'avantage.",
      "trust1": "CS2 uniquement",
      "trust2": "Connexion Steam OpenID",
      "trust3": "0 $ · 4 $ · 7 $ — pas de pay-to-win",
      "trust4": "10 rangs · départ à 1 200 RP",
      "stepsKicker": "Comment ça marche",
      "stepsTitle": "Trois étapes vers votre premier rang",
      "step1t": "Connectez Steam",
      "step1b": "Connectez-vous avec Steam OpenID. A.C.E ne voit jamais votre mot de passe Steam.",
      "step2t": "Calibrez",
      "step2b": "Vous commencez au palier 3 avec 1 200 RP. Chaque match enregistré modifie vos RP selon des règles publiées.",
      "step3t": "Montez",
      "step3b": "Une victoire rapporte jusqu'à +30 RP (+32 en meilleur fragger) ; une défaite coûte jusqu'à −30. Votre rang suit toujours vos RP.",
      "ranksTitle": "Dix rangs. Un tableau public.",
      "ranksBody": "Les couleurs des badges sont fixes par palier, et votre rang est toujours calculé à partir de vos RP enregistrés.",
      "ranksCta": "Voir tous les rangs",
      "plansTitle": "Des offres qui n'achètent pas de victoires",
      "plansBody": "Les offres payantes sont uniquement cosmétiques et de confort. Le paiement passe par Paddle ; tant que les paiements ne sont pas configurés, le bouton affiche Bientôt.",
      "plansCta": "Comparer les offres",
      "free": "Gratuit",
      "perMonth": "/mois",
      "signedInKicker": "Bon retour"
    },
    "profile": {
      "kicker": "JOUEUR",
      "notFound": "Joueur introuvable",
      "notFoundBody": "Aucun compte A.C.E n'utilise cet identifiant Steam, ou le profil n'est pas public.",
      "rating": "Classement",
      "rank": "Rang",
      "record": "Bilan",
      "memberSince": "Membre depuis {date}",
      "steamProfile": "Profil Steam",
      "yourProfile": "C'est votre profil",
      "backToBoard": "Retour au classement"
    },
    "board": {
      "podium": "Meilleurs joueurs",
      "viewProfile": "Voir le profil"
    },
    "chat": {
      "sources": "Sources",
      "noMatch": "Je n'ai pas trouvé cela dans le contenu du site A.C.E. Vous pouvez envoyer votre question à l'équipe sous forme de ticket.",
      "s1": "Combien coûte Premium ?",
      "s2": "Comment gagner des RP ?",
      "s3": "Comment signaler un tricheur ?",
      "kbNote": "Les réponses proviennent du contenu du site A.C.E."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Centre de commandement",
      "welcome": "Bon retour, {name}",
      "quick": "Actions rapides",
      "qProfile": "Profil public",
      "qBoard": "Classement",
      "qRanks": "Tableau des rangs",
      "qPlay": "Jouer",
      "statRp": "Score",
      "statRank": "Rang",
      "statRecord": "Bilan",
      "statWinRate": "Taux de victoire",
      "statPlan": "Formule",
      "toNext": "{rp} RP avant {next}",
      "top": "Sommet du classement",
      "activity": "Activité récente",
      "activityEmpty": "Aucune activité enregistrée pour l’instant. Les matchs et connexions apparaîtront ici dès qu’ils auront lieu.",
      "evSignIn": "Connexion via Steam",
      "evRating": "Score {before} → {after}",
      "noRecord": "Aucun match pour l’instant",
      "account": "Compte"
    },
    "nf": {
      "code": "Erreur 404",
      "title": "Cette page est hors de la carte",
      "body": "Le lien est peut-être ancien ou mal saisi. Tout A.C.E est à un clic d’ici.",
      "home": "Retour à l’accueil",
      "ranks": "Voir les rangs"
    },
    "err": {
      "code": "Un problème est survenu",
      "title": "Une erreur inattendue s’est produite",
      "body": "Rien n’a été facturé et ton compte est en sécurité. Réessaie ou reviens à l’accueil.",
      "retry": "Réessayer"
    }
  },
  "r41": {
    "vf": {
      "label": "Joueur vérifié",
      "tip": "Vérifié : Steam associé, compte en règle, contrôlé par A.C.E."
    },
    "st": {
      "kicker": "Performance",
      "title": "Statistiques du joueur",
      "lede": "Chaque chiffre provient de matchs A.C.E enregistrés. Rien n’est estimé.",
      "empty": "Aucun match enregistré pour l’instant. Les statistiques apparaîtront après le premier match classé.",
      "winRate": "Taux de victoire",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Clutchs gagnés",
      "entry": "Réussite en entry",
      "utility": "Dégâts utilitaires",
      "heatmap": "Activité",
      "heatmapEmpty": "Aucun jour de jeu pour l’instant",
      "rpChart": "Progression RP",
      "rpEmpty": "Aucun changement de score pour l’instant",
      "maps": "Cartes",
      "weapons": "Armes",
      "multi": "Multi-kills",
      "totals": "Totaux",
      "matches": "Matchs",
      "kills": "Éliminations",
      "deaths": "Morts",
      "open": "Voir les statistiques",
      "less": "Moins",
      "more": "Plus",
      "none": "—"
    },
    "ab": {
      "title": "À propos d’A.C.E.",
      "lede": "Une plateforme de compétition Counter-Strike 2 bâtie autour d’un tableau de rangs public et de formules qui n’achètent jamais d’avantage.",
      "b1": "A.C.E organise des matchs classés, des ladders et des tournois CS2. La connexion se fait via Steam OpenID ; nous ne voyons jamais ton mot de passe Steam.",
      "b2": "Ton rang est calculé uniquement à partir des résultats enregistrés selon des règles publiées. Les formules payantes sont uniquement esthétiques et pratiques.",
      "b3": "A.C.E est une plateforme indépendante, non affiliée à Valve."
    },
    "ss": {
      "title": "État des serveurs",
      "lede": "Contrôles en direct depuis ce serveur à l’ouverture de la page. Rien n’est estimé.",
      "web": "Site web",
      "db": "Base de données",
      "match": "Serveurs de match",
      "ok": "Opérationnel",
      "down": "Indisponible",
      "notLive": "Pas encore actif",
      "checked": "Vérifié {time}"
    },
    "rp": {
      "title": "Signaler un joueur",
      "lede": "Explique aux opérateurs ce qui s’est passé. Chaque signalement est examiné par une personne.",
      "target": "SteamID64 du joueur",
      "reason": "Motif",
      "rCheat": "Triche",
      "rToxic": "Comportement abusif",
      "rOther": "Autre",
      "details": "Détails (facultatif)",
      "submit": "Envoyer le signalement",
      "signIn": "Connecte-toi avec Steam pour envoyer un signalement.",
      "sent": "Signalement reçu. Les opérateurs examinent chaque signalement.",
      "invalid": "Saisis un SteamID64 valide (17 chiffres).",
      "open": "Signaler un joueur"
    },
    "nt": {
      "title": "Notifications",
      "empty": "Tu es à jour.",
      "markRead": "Tout marquer comme lu"
    },
    "se": {
      "title": "Saisons",
      "lede": "Les saisons réinitialiseront le classement et attribueront des badges de fin de saison.",
      "none": "Aucune saison n’a encore commencé. La première sera annoncée ici."
    }
  },
  "r41b": {
    "lv": {
      "nav": "Direct",
      "title": "Diffusions en direct",
      "lede": "Streams officiels des tournois A.C.E. Une diffusion apparaît ici uniquement lorsque les opérateurs l'ont mise à l'antenne.",
      "none": "Aucune diffusion en direct pour le moment",
      "noneBody": "Dès qu'un stream officiel passe à l'antenne, il apparaît ici. En attendant, voyez les tournois ci-dessous.",
      "schedule": "Tournois à venir",
      "noSchedule": "Aucun tournoi programmé pour l'instant.",
      "onAir": "À l'antenne",
      "watch": "Regarder en direct"
    }
  },
  "r46": {
    "aria": "Ce que défend A.C.E.",
    "fair": "Protection du fair-play",
    "fairSub": "Connexion Steam, règles publiées et signalements de joueurs examinés par les admins.",
    "calib": "Calibrage compétitif",
    "calibSub": "Matchs de placement et une échelle RP publique de 100 à 3 000.",
    "elite": "Joueurs d'élite",
    "eliteSub": "Dix rangs et cinq badges de prestige, gagnés uniquement par le RP."
  },
  "r45": {
    "title": "Au-delà de Legend",
    "lede": "Cinq badges de prestige au-dessus d'A.C.E Legend, un tous les 200 RP de 2 150 à 2 950. Gagnés uniquement en jouant.",
    "plus": "Plus · platine",
    "premium": "Premium · feu doré",
    "fair": "Le même RP pour tous. Seuils de prestige, matchmaking et classement sont identiques sur chaque offre. Rien ici ne s'achète.",
    "finish": "La finition prestige nécessite Plus ou Premium. Les joueurs Free atteignent les mêmes seuils et les voient comme un palier textuel.",
    "link": "Règles complètes des badges"
  },
  "r44": {
    "kicker": "Ton rang",
    "next": "Suivant",
    "winRate": "Taux de victoire",
    "noMatches": "Aucun match classé pour l'instant. Ton premier résultat apparaîtra ici.",
    "finishPlus": "Plus · finition platine",
    "finishPremium": "Premium · finition feu doré",
    "progressAria": "Progression vers {name}",
    "matches": "Matchs"
  },
  "r42": {
    "playTitle": "Jouer maintenant",
    "playSub": "Trouve un match CS2 classé et grimpe",
    "newPill": "NOUVEAU",
    "shopAria": "Ouvrir la boutique"
  },
  "r41c": {
    "v5": {
      "vTier": "Les victoires et les défaites sont multipliées par {t7} aux niveaux 7–9 et par {t10} au niveau 10 ({top}) : un bilan de 50 % maintient donc votre rang à chaque niveau.",
      "vPlacement": "Vos {n} premiers matchs comptent {pk}× plus pour trouver vite votre niveau. Pendant le placement, votre classement ne peut pas dépasser le niveau {maxTier} ({cap} RP).",
      "vAbandon": "Compte comme une double défaite, au moins −{abandon} RP, quel que soit le résultat, et sans bonus MVP.",
      "ex2": "Chaque défaite en chemin ajoute des victoires à faire. Aux niveaux 7–9, une victoire rapporte +{win7} et une défaite coûte −{loss7} : gagner plus de {breakEven} % des matchs équilibrés vous fait progresser."
    },
    "pr": {
      "kicker": "Prestige",
      "title": "Règles des badges",
      "lede": "Comment chaque badge A.C.E s'obtient. Les badges sont purement esthétiques : ils ne changent jamais le matchmaking, les RP ni aucune règle.",
      "ranks": "Les badges de rang (niveaux 1–10) suivent vos RP. Tout le monde voit le même rang et la même couleur fixe de niveau.",
      "prestige": "Les badges de prestige sont cinq objectifs à long terme au-delà de {elite} RP : un tous les 200 RP de 2 150 à 2 950.",
      "free": "Free : votre badge reste A.C.E Legend et votre niveau de prestige s'affiche comme un palier texte. Vos RP ne sont jamais plafonnés.",
      "plus": "Plus : la série de prestige platine.",
      "premium": "Premium : la série de prestige or animée.",
      "lose": "Si vous repassez sous un seuil de prestige, le badge suit vos RP ; en l'atteignant de nouveau, il revient.",
      "level": "Prestige {n} · {name}",
      "from": "Dès {rp} RP",
      "milestone": "Prestige {n} atteint",
      "perk": "Série de badges de prestige (2 150–3 000 RP), gagnée par les RP",
      "open": "Règles des badges",
      "wins": "Environ {n} victoires en matchs équilibrés après le palier précédent"
    }
  },
  "r48": {
    "kicker": "Classé 5v5",
    "title": "File solo",
    "lede": "Rejoignez seul. Dès que dix joueurs sont là, A.C.E équilibre deux équipes selon le RP, lance une vérification de présence et un veto de cartes par les capitaines, puis démarre le match sur notre serveur.",
    "inQueue": "En file",
    "count": "{n} / {total} joueurs en file",
    "waiting": "Encore {n} joueurs",
    "elapsed": "Recherche {time}",
    "join": "Rejoindre la file",
    "leave": "Quitter la file",
    "signIn": "Connectez-vous avec Steam pour rejoindre la file",
    "serverBusy": "Un match est en cours sur le serveur. Le prochain salon se forme à la fin ; vous pouvez quand même rejoindre la file.",
    "readyTitle": "Match trouvé",
    "readyLede": "Acceptez sous {s} secondes. Qui n'accepte pas est retiré, les autres retournent dans la file.",
    "accept": "Accepter",
    "decline": "Refuser",
    "accepted": "{n} / {total} ont accepté",
    "youAccepted": "Vous avez accepté. En attente des autres.",
    "vetoTitle": "Veto des cartes",
    "vetoLede": "Les capitaines (RP le plus élevé de chaque côté) bannissent à tour de rôle jusqu'à ce qu'il reste une carte Active Duty.",
    "yourTurn": "À vous : bannissez une carte",
    "theirTurn": "Le capitaine de {team} bannit",
    "turnLeft": "{s} s restantes",
    "ban": "Bannir",
    "bannedBy": "Bannie par {team}",
    "autoBan": "Bannie automatiquement (temps écoulé)",
    "teamA": "Équipe Alpha",
    "teamB": "Équipe Bravo",
    "captain": "Capitaine",
    "launching": "Création du match sur le serveur…",
    "liveTitle": "Match prêt",
    "connect": "Se connecter au serveur",
    "connectNote": "Ouvre CS2 via Steam. Vous avez 5 minutes pour rejoindre, sinon le match est annulé.",
    "console": "Ou collez dans la console CS2 : connect {address}",
    "map": "Carte",
    "avgRp": "Moyenne {rp} RP",
    "cancelled": "Le salon a été annulé. Les joueurs qui avaient accepté sont de retour dans la file.",
    "failed": "Le serveur n'a pas pu lancer ce match. Personne n'a perdu de RP. Rejoignez la file à nouveau.",
    "done": "Match terminé. Les résultats et le RP viennent du rapport du serveur.",
    "testTag": "Salon de test",
    "lobbyNote": "Seuls de vrais joueurs A.C.E apparaissent ici. Rangs et RP sont leurs valeurs enregistrées.",
    "errors": {
      "steam-required": "Liez un compte Steam pour rejoindre la file.",
      "not-eligible": "Votre compte ne peut pas rejoindre la file pour le moment.",
      "in-match": "Vous êtes déjà dans un salon.",
      "not-your-turn": "Attendez votre tour.",
      "not-captain": "Seuls les capitaines bannissent des cartes.",
      "unavailable": "La file est indisponible. Réessayez dans un instant.",
      "sign-in": "Connectez-vous d'abord avec Steam."
    }
  },
  "r48b": {
    "estimate": "Attente estimée {time}",
    "estimateNone": "Une estimation apparaît après quelques matchs",
    "region": "Région du serveur : {region}",
    "latency": "Latence du site {ms} ms · le ping en jeu s'affiche après connexion",
    "alertsOn": "Activer les alertes de match",
    "alertsActive": "Alertes de match activées",
    "soundOn": "Son activé",
    "soundOff": "Son coupé",
    "notifTitle": "Match A.C.E trouvé",
    "notifBody": "Acceptez sous 20 secondes.",
    "winChance": "Chance de victoire {p} %",
    "leaverWarn": "Quitter un match en cours ou ne pas se connecter ajoute un délai de file : 30 minutes, jusqu'à 7 jours en cas de récidive.",
    "dodgeWarn": "Refuser ou manquer la vérification ajoute un délai : 2, 5, 15, 30 puis 60 minutes sur 24 heures.",
    "copyIp": "Copier l'IP",
    "copied": "Copié",
    "liveScore": "Score en direct",
    "round": "Manche {n}",
    "activeMatch": "Vous avez un match en cours",
    "reconnect": "Se reconnecter",
    "resultsTitle": "Résultat du match",
    "win": "Victoire",
    "loss": "Défaite",
    "draw": "Égalité",
    "rpChange": "{delta} RP",
    "rpPending": "Le RP apparaît une fois le rapport du serveur vérifié.",
    "kills": "Éliminations",
    "deaths": "Morts",
    "assists": "Assistances",
    "damage": "Dégâts",
    "mvps": "MVP",
    "hs": "Tirs à la tête",
    "cooldown": "Délai de file : encore {time}",
    "banned": "Vous êtes banni de la file.",
    "bannedUntil": "Bannissement de file jusqu'au {date}",
    "errBanned": "Vous êtes banni de la file.",
    "errCooldown": "Vous êtes en délai de file."
  },
  "r48c": {
    "launching": "Lancement de CS2 et connexion…",
    "hint": "Si CS2 ne s'est pas ouvert, votre navigateur a bloqué le lancement. Utilisez Rejoindre le match.",
    "join": "Rejoindre le match",
    "watch": "Regarder en direct"
  },
  "r49": {
    "soon": "Paiement bientôt disponible",
    "signIn": "Connecte-toi avec Steam pour t'abonner",
    "subscribe": "S'abonner à {plan}",
    "opening": "Ouverture du paiement sécurisé…",
    "failed": "Impossible d'ouvrir le paiement. Réessaie.",
    "processing": "Paiement envoyé à Paddle. Ton offre change dès que Paddle confirme, généralement en une minute.",
    "current": "Ton offre actuelle",
    "agree": "En t'abonnant, tu acceptes les Conditions, la Politique de remboursement et la Politique de confidentialité. Paddle traite le paiement en tant que Merchant of Record.",
    "terms": "Conditions",
    "refunds": "Politique de remboursement",
    "privacy": "Confidentialité",
    "cookies": "Politique de cookies",
    "planTitle": "Abonnement",
    "renews": "Se renouvelle ou se termine le {date}",
    "pastDue": "Le paiement a échoué. Paddle va réessayer ; mets à jour ton moyen de paiement pour garder ton offre.",
    "canceled": "Abonnement terminé. Tu es en Free.",
    "manage": "Gérer l'abonnement",
    "manageNote": "Change de moyen de paiement, télécharge tes factures ou résilie dans le portail client Paddle.",
    "seePlans": "Voir les offres",
    "legalEnglish": "Cette page juridique est en anglais. Le texte anglais fait foi.",
    "signInBuy": "Connecte-toi avec Steam pour acheter",
    "pendingConfirm": "Paiement envoyé à Paddle. Ajouté dès que Paddle confirme.",
    "shopTitle": "Cosmétiques",
    "shopEmpty": "Aucun cosmétique en vente pour l'instant.",
    "shopDown": "La boutique est indisponible pour le moment.",
    "cosmeticOnly": "Purement cosmétique. Aucun avantage en jeu, aucun effet sur le matchmaking ou le RP.",
    "kindFrame": "Cadre de profil",
    "kindBanner": "Bannière",
    "kindEffect": "Effet de carte de rang",
    "kindName": "Couleur du pseudo",
    "buy": "Acheter · {price}",
    "owned": "Possédé",
    "equip": "Équiper",
    "unequip": "Retirer",
    "entryTitle": "Inscription au tournoi",
    "entryFee": "Frais d'inscription : {price}",
    "freeEntry": "Entrée gratuite",
    "payEnter": "Payer et s'inscrire",
    "registered": "Inscrit",
    "team": "Équipe",
    "captainOnly": "Seul le capitaine peut inscrire une équipe.",
    "prizeNote": "Les prix sont uniquement non monétaires : cosmétiques ou temps d'abonnement. Les frais d'inscription ne financent jamais de prix en argent.",
    "communityTitle": "Communauté",
    "communityLede": "Suis A.C.E pour les infos de matchs, les tournois et les temps forts.",
    "followOn": "A.C.E sur {network}",
    "changePlan": "Passer à {plan}",
    "changing": "Changement d’offre…",
    "changed": "Changement d’offre envoyé à Paddle. Ton offre se met à jour dès que Paddle le confirme.",
    "changeFailed": "Le changement d’offre a échoué. Réessaie ou utilise Gérer l’abonnement.",
    "manualNote": "Ton offre actuelle a été attribuée par A.C.E, pas achetée. S’abonner démarre un abonnement Paddle séparé.",
    "checkoutError": "Paddle n’a pas pu ouvrir le paiement : {reason}"
  },
  "r49b": {
    "title": "Inventaire Steam",
    "private": "Inventaire privé",
    "privateBody": "L’inventaire Steam de ce joueur est privé.",
    "empty": "Aucun objet CS2 dans l’inventaire public.",
    "unavailable": "Impossible de charger l’inventaire Steam pour le moment.",
    "hiddenOwner": "Ta vitrine d’inventaire est masquée sur ton profil.",
    "hide": "Masquer la vitrine",
    "show": "Afficher la vitrine",
    "priceSource": "Prix : offre la plus basse du Marché de la communauté Steam, en cache.",
    "note": "Vitrine uniquement. A.C.E n’achète, ne vend et n’échange jamais d’objets Steam.",
    "updated": "Mis à jour le {date}",
    "more": "+{n} autres objets"
  }
};
