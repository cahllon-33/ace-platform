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
    "more": "Plus",
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
  }
};
