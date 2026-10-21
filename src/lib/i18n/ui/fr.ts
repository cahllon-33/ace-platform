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
    "follow": "Suivre A.C.E.",
    "rights": "Tous droits réservés.",
    "legalLine": "© 2026 A.C.E. Competitions Ltd. Plateforme indépendante, non affiliée à Valve. Counter-Strike et CS2 sont des marques de Valve Corporation."
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
    "lede": "A.C.E Shield est le système d’intégrité conçu pour chaque match A.C.E. : contrôles client, serveur, match et comportement qui travaillent ensemble, pensés d’abord pour la vie privée.",
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
      "shield": "A.C.E. Shield",
      "servers": "Serveurs compétitifs",
      "tournaments": "Tournois",
      "billing": "Facturation",
      "available": "Disponible",
      "inDevelopment": "En développement",
      "comingSoon": "Bientôt",
      "preparing": "En préparation",
      "billingOff": "Inactif · aucun paiement encaissé"
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
      "title": "Assistance A.C.E.",
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
      "step1b": "Connectez-vous avec Steam OpenID. A.C.E. ne voit jamais votre mot de passe Steam.",
      "step2t": "Calibrez",
      "step2b": "Vous commencez au palier 3 avec 1 200 RP. Chaque match enregistré modifie vos RP selon des règles publiées.",
      "step3t": "Montez",
      "step3b": "Une victoire rapporte jusqu'à +20 RP (+22 en meilleur fragger) ; une défaite coûte jusqu'à −23. Votre rang suit toujours vos RP.",
      "ranksTitle": "Dix rangs. Un tableau public.",
      "ranksBody": "Les couleurs des badges sont fixes par palier, et votre rang est toujours calculé à partir de vos RP enregistrés.",
      "ranksCta": "Voir tous les rangs",
      "plansTitle": "Des offres qui n'achètent pas de victoires",
      "plansBody": "Les offres payantes sont uniquement cosmétiques et pratiques. Le paiement n'est pas encore actif : tout le monde est en Gratuit aujourd'hui.",
      "plansCta": "Comparer les offres",
      "free": "Gratuit",
      "perMonth": "/mois",
      "signedInKicker": "Bon retour"
    },
    "profile": {
      "kicker": "JOUEUR",
      "notFound": "Joueur introuvable",
      "notFoundBody": "Aucun compte A.C.E. n'utilise cet identifiant Steam, ou le profil n'est pas public.",
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
      "body": "Le lien est peut-être ancien ou mal saisi. Tout A.C.E. est à un clic d’ici.",
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
      "lede": "Chaque chiffre provient de matchs A.C.E. enregistrés. Rien n’est estimé.",
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
      "b1": "A.C.E. organise des matchs classés, des ladders et des tournois CS2. La connexion se fait via Steam OpenID ; nous ne voyons jamais ton mot de passe Steam.",
      "b2": "Ton rang est calculé uniquement à partir des résultats enregistrés selon des règles publiées. Les formules payantes sont uniquement esthétiques et pratiques.",
      "b3": "A.C.E. est une plateforme indépendante, non affiliée à Valve."
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
  }
};
