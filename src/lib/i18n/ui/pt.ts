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
    "platform": "Plataforma",
    "competition": "Competição",
    "company": "Empresa",
    "legal": "Legal",
    "tagline": "Classificações competitivas de Counter-Strike 2, construídas em torno do fair play.",
    "follow": "Siga a A.C.E.",
    "rights": "Todos os direitos reservados.",
    "legalLine": "© 2026 A.C.E. Plataforma independente, sem afiliação à Valve. Counter-Strike e CS2 são marcas da Valve Corporation."
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
    "englishNote": "",
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
      "Rating Points",
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
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Constrói a tua identidade competitiva. Calibra a tua habilidade. Sobe nos ranks da A.C.E.",
      "connectSteam": "Ligar Steam",
      "openDashboard": "Abrir painel",
      "exploreRanks": "Explorar ranks"
    },
    "status": {
      "title": "Estado da plataforma",
      "steam": "Início de sessão com Steam",
      "shield": "A.C.E. Shield",
      "servers": "Servidores competitivos",
      "tournaments": "Torneios",
      "billing": "Faturação",
      "available": "Disponível",
      "inDevelopment": "Em desenvolvimento",
      "comingSoon": "Brevemente",
      "preparing": "Em preparação",
      "billingOff": "Inativo · não são cobrados pagamentos"
    },
    "card": {
      "matches": "Partidas",
      "wl": "V/D",
      "kd": "K/D",
      "noMatches": "Sem partidas registadas",
      "division": "Divisão {division}"
    },
    "journey": {
      "title": "O teu percurso competitivo",
      "currentRp": "RP atual",
      "current": "Atual",
      "next": "Seguinte",
      "toGo": "{rp} RP até à divisão seguinte",
      "top": "Divisão mais alta alcançada",
      "basis": "Calculado a partir dos teus RP guardados e da tabela de ranks publicada."
    },
    "board": {
      "emptyTitle": "Ainda não há partidas classificadas",
      "emptyBody": "Os jogadores aparecem aqui após a primeira partida classificada registada. Nada neste quadro é inventado.",
      "previewTag": "PRÉ-VISUALIZAÇÃO",
      "lobbyTitle": "Lobby",
      "matchFoundTitle": "Partida encontrada",
      "previewNote": "Apenas uma pré-visualização do layout: nenhuma fila ou servidor está ativo e os nomes são fictícios.",
      "accept": "Aceitar",
      "waiting": "À espera de jogadores",
      "note": "Contas reais com pelo menos uma partida classificada registada, ordenadas pelos RP guardados. Sem linhas de exemplo ou inventadas."
    },
    "toast": {
      "region": "Notificações",
      "dismiss": "Fechar notificação",
      "signedIn": "Sessão iniciada como {name}",
      "signedOut": "Terminaste a sessão.",
      "authFailed": "O início de sessão com Steam não foi concluído. Tenta novamente."
    },
    "sound": {
      "on": "Sons da interface: ligados",
      "off": "Sons da interface: desligados"
    },
    "chat": {
      "open": "Abrir chat de apoio",
      "close": "Fechar chat de apoio",
      "title": "Apoio A.C.E.",
      "greeting": "Olá! Sou o assistente de apoio da A.C.E. Pergunta-me sobre ranks, planos, regras ou a tua conta.",
      "placeholder": "Escreve a tua pergunta…",
      "send": "Enviar",
      "unavailable": "O chat de apoio ainda não está disponível.",
      "disclaimer": "As respostas automáticas podem estar erradas. Banimentos e decisões de conta são tomados apenas pela administração.",
      "escalate": "Enviar à equipa",
      "escalated": "Guardado como pedido de apoio. A administração vai analisá-lo.",
      "error": "Algo correu mal. Tenta novamente.",
      "rateLimited": "Demasiadas mensagens. Aguarda um momento.",
      "thinking": "A escrever…",
      "tooLong": "Mensagem demasiado longa (máx. {max} caracteres)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Plataforma competitiva",
      "h1a": "Compete.",
      "h1b": "Calibra.",
      "h1c": "Sobe.",
      "sub": "CS2 ranqueado com início de sessão Steam, uma escada de RP pública e planos que nunca compram vantagem.",
      "trust1": "Apenas CS2",
      "trust2": "Início de sessão Steam OpenID",
      "trust3": "$0 · $4 · $7 — sem pagar para ganhar",
      "trust4": "10 patentes · começa com 1.200 RP",
      "stepsKicker": "Como funciona",
      "stepsTitle": "Três passos até à primeira patente",
      "step1t": "Liga o Steam",
      "step1b": "Inicia sessão com Steam OpenID. A A.C.E. nunca vê a tua palavra-passe do Steam.",
      "step2t": "Calibra",
      "step2b": "Começas no nível 3 com 1.200 RP. Cada partida registada altera os teus RP segundo regras publicadas.",
      "step3t": "Sobe",
      "step3b": "Uma vitória dá até +30 RP (+32 como melhor jogador); uma derrota custa até −30. A tua patente segue sempre os teus RP.",
      "ranksTitle": "Dez patentes. Uma tabela pública.",
      "ranksBody": "As cores dos emblemas são fixas por nível e a tua patente é sempre calculada a partir dos RP guardados.",
      "ranksCta": "Ver todas as patentes",
      "plansTitle": "Planos que nunca compram vitórias",
      "plansBody": "Os planos pagos são apenas estéticos e de conveniência. O pagamento ainda não está ativo, por isso hoje todos estão no Grátis.",
      "plansCta": "Comparar planos",
      "free": "Grátis",
      "perMonth": "/mês",
      "signedInKicker": "Bem-vindo de volta"
    },
    "profile": {
      "kicker": "JOGADOR",
      "notFound": "Jogador não encontrado",
      "notFoundBody": "Nenhuma conta A.C.E. usa este Steam ID, ou o perfil não é público.",
      "rating": "Pontuação",
      "rank": "Patente",
      "record": "Registo",
      "memberSince": "Membro desde {date}",
      "steamProfile": "Perfil Steam",
      "yourProfile": "Este é o teu perfil",
      "backToBoard": "Voltar à classificação"
    },
    "board": {
      "podium": "Melhores jogadores",
      "viewProfile": "Ver perfil"
    },
    "chat": {
      "sources": "Fontes",
      "noMatch": "Não encontrei isto no conteúdo do site da A.C.E. Podes enviar a tua pergunta à equipa como pedido.",
      "s1": "Quanto custa o Premium?",
      "s2": "Como ganho RP?",
      "s3": "Como denuncio um batoteiro?",
      "kbNote": "As respostas vêm do conteúdo do site da A.C.E."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Centro de comando",
      "welcome": "Bem-vindo de volta, {name}",
      "quick": "Ações rápidas",
      "qProfile": "Perfil público",
      "qBoard": "Classificação",
      "qRanks": "Tabela de patentes",
      "qPlay": "Jogar",
      "statRp": "Pontuação",
      "statRank": "Patente",
      "statRecord": "Registo",
      "statWinRate": "Taxa de vitórias",
      "statPlan": "Plano",
      "toNext": "{rp} RP até {next}",
      "top": "Topo da classificação",
      "activity": "Atividade recente",
      "activityEmpty": "Ainda não há atividade registada. As partidas e os inícios de sessão aparecem aqui à medida que acontecem.",
      "evSignIn": "Sessão iniciada com Steam",
      "evRating": "Pontuação {before} → {after}",
      "noRecord": "Ainda sem partidas",
      "account": "Conta"
    },
    "nf": {
      "code": "Erro 404",
      "title": "Esta página está fora do mapa",
      "body": "A ligação pode estar desatualizada ou mal escrita. Todo o A.C.E. está a um clique daqui.",
      "home": "Voltar ao início",
      "ranks": "Ver patentes"
    },
    "err": {
      "code": "Algo correu mal",
      "title": "Ocorreu um erro inesperado",
      "body": "Nada foi cobrado e a tua conta está segura. Tenta novamente ou volta ao início.",
      "retry": "Tentar novamente"
    }
  },
  "r41": {
    "vf": {
      "label": "Jogador verificado",
      "tip": "Verificado: Steam ligado, conta em boa situação, revista pela A.C.E."
    },
    "st": {
      "kicker": "Desempenho",
      "title": "Estatísticas do jogador",
      "lede": "Cada número vem de partidas A.C.E. registadas. Nada é estimado.",
      "empty": "Ainda não há partidas registadas. As estatísticas aparecem após a primeira partida competitiva.",
      "winRate": "Taxa de vitórias",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Clutches ganhos",
      "entry": "Sucesso de entrada",
      "utility": "Dano de utilitários",
      "heatmap": "Atividade",
      "heatmapEmpty": "Ainda sem dias de jogo",
      "rpChart": "Progresso de RP",
      "rpEmpty": "Ainda sem alterações de pontuação",
      "maps": "Mapas",
      "weapons": "Armas",
      "multi": "Multi-kills",
      "totals": "Totais",
      "matches": "Partidas",
      "kills": "Abates",
      "deaths": "Mortes",
      "open": "Ver estatísticas",
      "less": "Menos",
      "more": "Mais",
      "none": "—"
    },
    "ab": {
      "title": "Sobre a A.C.E.",
      "lede": "Uma plataforma de competição de Counter-Strike 2 assente numa tabela de patentes pública e em planos que nunca compram vantagem.",
      "b1": "A A.C.E. gere partidas competitivas, ladders e torneios de CS2. O início de sessão é via Steam OpenID; nunca vemos a tua palavra-passe Steam.",
      "b2": "A tua patente é calculada apenas a partir de resultados registados e regras publicadas. Os planos pagos são apenas estéticos e de conveniência.",
      "b3": "A A.C.E. é uma plataforma independente e não está associada à Valve."
    },
    "ss": {
      "title": "Estado dos servidores",
      "lede": "Verificações em direto deste servidor no momento em que abriste a página. Nada é estimado.",
      "web": "Site",
      "db": "Base de dados",
      "match": "Servidores de partida",
      "ok": "Operacional",
      "down": "Indisponível",
      "notLive": "Ainda não ativo",
      "checked": "Verificado {time}"
    },
    "rp": {
      "title": "Denunciar jogador",
      "lede": "Diz aos operadores o que aconteceu. Cada denúncia é analisada por uma pessoa.",
      "target": "SteamID64 do jogador",
      "reason": "Motivo",
      "rCheat": "Batota",
      "rToxic": "Comportamento abusivo",
      "rOther": "Outro",
      "details": "Detalhes (opcional)",
      "submit": "Enviar denúncia",
      "signIn": "Inicia sessão com Steam para enviar uma denúncia.",
      "sent": "Denúncia recebida. Os operadores analisam cada denúncia.",
      "invalid": "Introduz um SteamID64 válido (17 dígitos).",
      "open": "Denunciar jogador"
    },
    "nt": {
      "title": "Notificações",
      "empty": "Está tudo em dia.",
      "markRead": "Marcar tudo como lido"
    },
    "se": {
      "title": "Temporadas",
      "lede": "As temporadas vão repor a classificação e atribuir emblemas de fim de temporada.",
      "none": "Ainda não começou nenhuma temporada. A primeira será anunciada aqui."
    }
  },
  "r41b": {
    "lv": {
      "nav": "Em direto",
      "title": "Transmissões em direto",
      "lede": "Streams oficiais dos torneios A.C.E. Uma transmissão só aparece aqui enquanto os operadores a mantêm no ar.",
      "none": "Nenhuma transmissão em direto agora",
      "noneBody": "Quando um stream oficial entrar no ar, aparece aqui. Entretanto, veja os torneios abaixo.",
      "schedule": "Próximos torneios",
      "noSchedule": "Ainda não há torneios agendados.",
      "onAir": "No ar",
      "watch": "Ver em direto"
    }
  },
  "r46": {
    "aria": "O que a A.C.E. representa",
    "fair": "Proteção do Fair Play",
    "fairSub": "Início de sessão Steam, regras publicadas e denúncias de jogadores revistas por admins.",
    "calib": "Calibração Competitiva",
    "calibSub": "Partidas de colocação e uma escada pública de RP de 100 a 3.000.",
    "elite": "Jogadores de Elite",
    "eliteSub": "Dez níveis e cinco insígnias de prestígio, conquistados apenas com RP."
  },
  "r45": {
    "title": "Para lá do Legend",
    "lede": "Cinco insígnias de prestígio acima do A.C.E. Legend, uma a cada 200 RP de 2.150 a 2.950. Conquistadas apenas a jogar.",
    "plus": "Plus · platina",
    "premium": "Premium · fogo dourado",
    "fair": "O mesmo RP para todos. Limiares de prestígio, matchmaking e rating são iguais em todos os planos. Nada aqui se compra.",
    "finish": "O acabamento de prestígio requer Plus ou Premium. Os jogadores Free atingem os mesmos limiares e veem-nos como marco em texto.",
    "link": "Regras completas das insígnias"
  },
  "r44": {
    "kicker": "O teu rank",
    "next": "Seguinte",
    "winRate": "Taxa de vitória",
    "noMatches": "Ainda sem partidas classificadas. O teu primeiro resultado aparecerá aqui.",
    "finishPlus": "Plus · acabamento platina",
    "finishPremium": "Premium · acabamento fogo dourado",
    "progressAria": "Progresso até {name}",
    "matches": "Partidas"
  },
  "r42": {
    "playTitle": "Jogar agora",
    "playSub": "Encontra um jogo competitivo de CS2 e sobe",
    "newPill": "NOVO",
    "shopAria": "Abrir a loja"
  },
  "r41c": {
    "v5": {
      "vTier": "Vitórias e derrotas são multiplicadas por {t7} nos escalões 7–9 e por {t10} no escalão 10 ({top}), por isso um registo de 50% mantém o teu rank em qualquer nível.",
      "vPlacement": "As tuas primeiras {n} partidas movem-se {pk}× mais depressa para encontrares o teu nível. Durante a colocação o rating não passa do escalão {maxTier} ({cap} RP).",
      "vAbandon": "Conta como derrota a dobrar, pelo menos −{abandon} RP, seja qual for o resultado, e sem bónus de MVP.",
      "ex2": "Cada derrota pelo caminho junta vitórias. Nos escalões 7–9 uma vitória dá +{win7} e uma derrota custa −{loss7}, por isso ganhar mais de {breakEven}% das partidas equilibradas mantém-te a subir."
    },
    "pr": {
      "kicker": "Prestígio",
      "title": "Regras dos emblemas",
      "lede": "Como se ganha cada emblema A.C.E. Os emblemas são só estéticos: nunca mudam o matchmaking, os RP ou qualquer regra.",
      "ranks": "Os emblemas de rank (escalões 1–10) seguem os teus RP. Todos veem o mesmo rank e a mesma cor fixa de escalão.",
      "prestige": "Os emblemas de prestígio são cinco metas de longo prazo acima de {elite} RP: um a cada 200 RP, de 2.150 a 2.950.",
      "free": "Free: o teu emblema continua A.C.E. Legend e o nível de prestígio aparece como marco em texto. Os teus RP nunca têm limite.",
      "plus": "Plus: o conjunto de prestígio em platina.",
      "premium": "Premium: o conjunto de prestígio dourado animado.",
      "lose": "Se desceres abaixo de um limiar de prestígio, o emblema acompanha os RP; ao voltares a atingi-lo, regressa.",
      "level": "Prestígio {n} · {name}",
      "from": "A partir de {rp} RP",
      "milestone": "Prestígio {n} alcançado",
      "perk": "Conjunto de emblemas de prestígio (2.150–3.000 RP), ganho com RP",
      "open": "Regras dos emblemas",
      "wins": "Cerca de {n} vitórias em partidas equilibradas após o nível anterior"
    }
  },
  "r48": {
    "kicker": "Competitivo 5v5",
    "title": "Fila a solo",
    "lede": "Entra sozinho. Quando houver dez jogadores, a A.C.E equilibra duas equipas por RP, faz uma verificação de prontidão e um veto de mapas entre capitães, e começa a partida no nosso servidor.",
    "inQueue": "Na fila",
    "count": "{n} / {total} jogadores na fila",
    "waiting": "Faltam {n}",
    "elapsed": "A procurar há {time}",
    "join": "Entrar na fila",
    "leave": "Sair da fila",
    "signIn": "Inicia sessão com o Steam para entrar na fila",
    "serverBusy": "Está a decorrer uma partida no servidor. O próximo lobby forma-se quando terminar; podes continuar na fila.",
    "readyTitle": "Partida encontrada",
    "readyLede": "Aceita em {s} segundos. Quem não aceitar sai e os restantes voltam à fila.",
    "accept": "Aceitar",
    "decline": "Recusar",
    "accepted": "{n} / {total} aceitaram",
    "youAccepted": "Aceitaste. À espera dos outros.",
    "vetoTitle": "Veto de mapas",
    "vetoLede": "Os capitães (maior RP de cada lado) vetam à vez até restar um mapa Active Duty.",
    "yourTurn": "A tua vez: veta um mapa",
    "theirTurn": "O capitão da {team} está a vetar",
    "turnLeft": "Faltam {s} s",
    "ban": "Vetar",
    "bannedBy": "Vetado por {team}",
    "autoBan": "Vetado automaticamente (tempo esgotado)",
    "teamA": "Equipa Alfa",
    "teamB": "Equipa Bravo",
    "captain": "Capitão",
    "launching": "A criar a partida no servidor…",
    "liveTitle": "Partida pronta",
    "connect": "Ligar ao servidor",
    "connectNote": "Abre o CS2 pelo Steam. Tens 5 minutos para entrar, senão a partida é cancelada.",
    "console": "Ou cola na consola do CS2: connect {address}",
    "map": "Mapa",
    "avgRp": "Média {rp} RP",
    "cancelled": "O lobby foi cancelado. Quem aceitou voltou à fila.",
    "failed": "O servidor não conseguiu iniciar a partida. Ninguém perdeu RP. Volta a entrar na fila.",
    "done": "Partida terminada. Resultados e RP vêm do relatório do servidor.",
    "testTag": "Lobby de teste",
    "lobbyNote": "Aqui só aparecem jogadores reais da A.C.E. Patentes e RP são os valores guardados.",
    "errors": {
      "steam-required": "Associa uma conta Steam para entrar na fila.",
      "not-eligible": "A tua conta não pode entrar na fila neste momento.",
      "in-match": "Já estás num lobby.",
      "not-your-turn": "Espera pela tua vez.",
      "not-captain": "Só os capitães vetam mapas.",
      "unavailable": "A fila está indisponível. Tenta novamente daqui a pouco.",
      "sign-in": "Inicia sessão com o Steam primeiro."
    }
  }
};
