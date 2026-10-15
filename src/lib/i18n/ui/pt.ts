import type { Ui } from "./en";

export const UI_PT: Ui = {
  "nav": {
    "home": "Início",
    "play": "Jogar",
    "ranks": "Patentes",
    "tournaments": "Torneios",
    "leaderboard": "Classificação",
    "teams": "Equipas",
    "getPremium": "Aderir ao Premium",
    "more": "Mais",
    "maps": "Mapas",
    "prizes": "Prémios",
    "shop": "Loja",
    "rules": "Regras",
    "antiCheat": "Anti-batota",
    "features": "Funcionalidades",
    "pricing": "Preços",
    "compete": "Competir",
    "explore": "Explorar"
  },
  "footer": {
    "legalLine": "© 2026 A.C.E. Competitions Ltd. Plataforma independente, sem afiliação à Valve. Counter-Strike e CS2 são marcas da Valve Corporation."
  },
  "soon": {
    "label": "Em breve"
  },
  "cta": {
    "kicker": "Temporada 1",
    "title": "Pronto para competir?",
    "body": "Liga o Steam, calibra e sobe.",
    "play": "Jogar A.C.E",
    "ranks": "Explorar as patentes"
  },
  "status": {
    "title": "Estado da plataforma",
    "steam": "Início de sessão Steam OpenID",
    "shield": "A.C.E Shield · fase de implementação",
    "servers": "Servidores competitivos · beta competitiva",
    "billing": "Integração de pagamentos",
    "available": "Disponível",
    "inDevelopment": "Em desenvolvimento",
    "comingSoon": "Em breve",
    "designed": "Concebido"
  },
  "ranksTabs": {
    "label": "Patentes",
    "tiers": "Escalões e divisões",
    "codex": "Códice de calibração"
  },
  "maps": {
    "kicker": "Conjunto de mapas competitivo",
    "title": "Mapas e transmissão",
    "lede": "Sete mapas compõem o conjunto competitivo da A.C.E. As equipas banem e escolhem a partir dele no veto definido no regulamento. As transmissões de torneios aparecem no ecrã abaixo.",
    "rulebook": "Ler as regras do veto",
    "screen": "Ecrã de transmissão",
    "offAir": "Fora do ar",
    "noBroadcast": "Não há nenhuma transmissão neste momento.",
    "nextLabel": "Próxima transmissão",
    "notScheduled": "anunciada aqui em breve",
    "embeddedFrom": "Em direto a partir de {provider}.",
    "pool": "Conjunto de mapas ativo",
    "poolMeta": "{count} mapas · veto BO1 / BO3",
    "mapLabel": "Mapa {n}",
    "settings": {
      "dust": "Vila no deserto",
      "mirage": "Bairro do mercado",
      "inferno": "Aldeia antiga",
      "nuke": "Instalação industrial",
      "ancient": "Ruínas na selva",
      "anubis": "Templo dos canais",
      "train": "Parque ferroviário"
    },
    "notes": {
      "dust": "Linhas de visão longas em A, portas do meio apertadas.",
      "mirage": "O controlo do meio decide a maioria das rondas.",
      "inferno": "Passagens estreitas e execuções com muita utilidade.",
      "nuke": "Locais sobrepostos e rotações verticais rápidas.",
      "ancient": "A pressão do meio para B define a parte.",
      "anubis": "Meio aquático e ataques abertos a B.",
      "train": "Cobertura entre vagões e corredores longos em A."
    }
  },
  "prizes": {
    "kicker": "Prémios do campeonato",
    "title": "Prémios",
    "lede": "A seleção de recompensas que estamos a preparar para os campeões da Temporada 1. Os prémios são confirmados na página de cada evento quando anunciados, nos termos da secção 18 do regulamento.",
    "rulebook": "Regras dos prémios",
    "cardKicker": "Recompensa lendária",
    "slots": {
      "first": "1.º lugar · por jogador",
      "second": "2.º lugar · por jogador",
      "mvp": "Prémio MVP"
    },
    "facts": {
      "pool": "Prémio total",
      "items": "Itens de recompensa",
      "delivery": "Entrega",
      "season": "Temporada"
    },
    "factValues": {
      "season": "Temporada 1"
    }
  },
  "rules": {
    "kicker": "Regulamento de competição A.C.E.",
    "title": "Regras de competição",
    "version": "Versão {version} · em vigor a partir de {date}",
    "intro": "As regras de todas as competições A.C.E. As cláusulas marcadas com «Aplica-se após a implementação» entram em vigor quando o sistema de que dependem for lançado.",
    "pending": "Aplica-se após a implementação",
    "contents": "Índice",
    "penalties": {
      "offence": "Infração",
      "first": "Primeira infração",
      "repeat": "Reincidência",
      "rule": "Regra"
    },
    "englishNote": "O texto das cláusulas é apresentado em inglês; a versão inglesa é a que prevalece.",
    "sections": [
      "Âmbito e definições",
      "Elegibilidade",
      "Contas e identidade",
      "Equipas e plantéis",
      "Capitães",
      "Conjunto de mapas e veto",
      "Procedimento do jogo",
      "Definições do jogo",
      "Problemas de servidor e técnicos",
      "Pausas",
      "Desconexões",
      "Desistências e faltas de comparência",
      "Conduta",
      "Batota e integridade competitiva",
      "Litígios e recursos",
      "Sanções",
      "Transmissão",
      "Prémios",
      "Alterações"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Anti-batota",
    "lede": "O A.C.E Shield é o sistema de integridade em construção para cada jogo A.C.E.: verificações de cliente, servidor, jogo e comportamento a trabalhar em conjunto, com a privacidade em primeiro lugar.",
    "statusLabel": "Fase de implementação",
    "pillarsTitle": "Pilares da arquitetura",
    "pillars": {
      "client": {
        "title": "Integridade do cliente",
        "body": "Um cliente leve verifica o ambiente de jogo durante a partida e reporta sinais de adulteração."
      },
      "server": {
        "title": "Integridade do servidor",
        "body": "Os servidores usam configurações bloqueadas, plugins assinados e registos à prova de adulteração."
      },
      "match": {
        "title": "Integridade do jogo",
        "body": "Cada ronda é gravada com demos e registos de eventos para que qualquer resultado possa ser revisto."
      },
      "behaviour": {
        "title": "Análise comportamental",
        "body": "Modelos estatísticos assinalam padrões anómalos de mira, reação e informação para revisão humana."
      },
      "identity": {
        "title": "Identidade",
        "body": "Contas Steam OpenID, um jogador por conta, com verificações contra a evasão de banimentos."
      }
    },
    "roadmapTitle": "Roteiro",
    "phases": {
      "p1": {
        "title": "Fase 1 · Arquitetura",
        "body": "Modelo de ameaças, fluxos de dados e conceção da privacidade."
      },
      "p2": {
        "title": "Fase 2 · Integridade de servidor e jogo",
        "body": "Configurações bloqueadas, captura de demos e registos à prova de adulteração."
      },
      "p3": {
        "title": "Fase 3 · Análise comportamental",
        "body": "Ferramentas de revisão e primeiros modelos estatísticos."
      },
      "p4": {
        "title": "Fase 4 · Integridade do cliente",
        "body": "Beta do cliente Shield com auditoria de segurança pública."
      },
      "p5": {
        "title": "Fase 5 · Beta competitiva",
        "body": "Shield obrigatório em jogos competitivos e torneios."
      }
    },
    "privacyTitle": "Princípios de privacidade",
    "privacy": [
      "Recolhemos apenas o necessário para proteger um jogo e dizemos exatamente o quê.",
      "Não são recolhidos identificadores de hardware até existir uma implementação segura, documentada e auditada de forma independente.",
      "Os dados dos jogos são guardados durante um período fixo e depois apagados.",
      "Qualquer sanção pode ser objeto de recurso, analisado por uma pessoa."
    ],
    "faqTitle": "Perguntas",
    "faq": [
      {
        "q": "O A.C.E Shield já está ativo?",
        "a": "Ainda não. Está em desenvolvimento; cada fase acima mostra o seu estado atual."
      },
      {
        "q": "Vai precisar de acesso ao kernel?",
        "a": "O design começa com verificações em modo de utilizador e análise do lado do servidor. Qualquer acesso mais profundo seria primeiro documentado e revisto publicamente."
      },
      {
        "q": "O Premium afeta o anti-batota?",
        "a": "Não. As regras de integridade são iguais para todos. Os planos pagos nunca compram vantagem competitiva."
      },
      {
        "q": "Como denuncio um batoteiro?",
        "a": "Na página de contacto. As denúncias são analisadas nos termos da secção 14 do regulamento."
      }
    ]
  }
};
