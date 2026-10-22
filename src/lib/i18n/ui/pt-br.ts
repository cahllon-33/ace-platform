import type { Ui } from "./en";

export const UI_PT_BR: Ui = {
  "nav": {
    "home": "Início",
    "play": "Jogar",
    "ranks": "Ranks",
    "tournaments": "Torneios",
    "leaderboard": "Classificação",
    "teams": "Equipes",
    "getPremium": "Assine o Premium",
    "maps": "Mapas",
    "prizes": "Prêmios",
    "shop": "Loja",
    "rules": "Regras",
    "antiCheat": "Anti-cheat",
    "features": "Funcionalidades",
    "pricing": "Preços",
    "compete": "Competir",
    "explore": "Explorar"
  },
  "footer": {
    "platform": "Plataforma",
    "competition": "Competição",
    "company": "Empresa",
    "legal": "Jurídico",
    "tagline": "Rankings competitivos de Counter-Strike 2, feitos em torno do jogo limpo.",
    "follow": "Siga a A.C.E",
    "rights": "Todos os direitos reservados.",
    "legalLine": "© 2026 A.C.E. Plataforma independente, sem afiliação à Valve. Counter-Strike e CS2 são marcas da Valve Corporation."
  },
  "soon": {
    "label": "Em breve"
  },
  "cta": {
    "kicker": "Temporada 1",
    "title": "Pronto para competir?",
    "body": "Conecte o Steam, calibre e suba.",
    "play": "Jogar A.C.E",
    "ranks": "Explorar as ranks"
  },
  "status": {
    "title": "Estado da plataforma",
    "steam": "Login Steam OpenID",
    "shield": "A.C.E Shield · fase de implementação",
    "servers": "Servidores competitivos · beta competitiva",
    "billing": "Integração de pagamentos",
    "available": "Disponível",
    "inDevelopment": "Em desenvolvimento",
    "comingSoon": "Em breve",
    "designed": "Projetado"
  },
  "ranksTabs": {
    "label": "Ranks",
    "tiers": "Níveis e divisões",
    "codex": "Códice de calibração"
  },
  "maps": {
    "kicker": "Conjunto de mapas competitivo",
    "title": "Mapas e transmissão",
    "lede": "Sete mapas compõem o conjunto competitivo da A.C.E. As equipes banem e escolhem a partir dele no veto definido no regulamento. As transmissões de torneios aparecem no tela abaixo.",
    "rulebook": "Ler as regras do veto",
    "screen": "Tela de transmissão",
    "offAir": "Fora do ar",
    "noBroadcast": "Não há nenhuma transmissão neste momento.",
    "nextLabel": "Próxima transmissão",
    "notScheduled": "anunciada aqui em breve",
    "embeddedFrom": "Ao vivo a partir de {provider}.",
    "pool": "Conjunto de mapas ativo",
    "poolMeta": "{count} mapas · veto BO1 / BO3",
    "mapLabel": "Mapa {n}",
    "settings": {
      "dust": "Vila no deserto",
      "mirage": "Bairro do mercado",
      "inferno": "Vila antiga",
      "nuke": "Instalação industrial",
      "ancient": "Ruínas na selva",
      "anubis": "Templo dos canais",
      "train": "Pátio ferroviário"
    },
    "notes": {
      "dust": "Linhas de visão longas em A, portas do meio apertadas.",
      "mirage": "O controle do meio decide a maioria das rodadas.",
      "inferno": "Passagens estreitas e execuções com muita utilidade.",
      "nuke": "Locais sobrepostos e rotações verticais rápidas.",
      "ancient": "A pressão do meio para B define a parte.",
      "anubis": "Meio aquático e ataques abertos a B.",
      "train": "Cobertura entre vagões e corredores longos em A."
    }
  },
  "prizes": {
    "kicker": "Prêmios do campeonato",
    "title": "Prêmios",
    "lede": "A seleção de recompensas que estamos preparando para os campeões da Temporada 1. Os prêmios são confirmados na página de cada evento quando anunciados, nos termos da secção 18 do regulamento.",
    "rulebook": "Regras dos prêmios",
    "cardKicker": "Recompensa lendária",
    "slots": {
      "first": "1.º lugar · por jogador",
      "second": "2.º lugar · por jogador",
      "mvp": "Prêmio MVP"
    },
    "facts": {
      "pool": "Prêmio total",
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
      "Equipes e elencos",
      "Capitães",
      "Conjunto de mapas e veto",
      "Procedimento do jogo",
      "Definições do jogo",
      "Problemas de servidor e técnicos",
      "Pausas",
      "Desconexões",
      "W.O. e ausências",
      "Conduta",
      "Trapaça e integridade competitiva",
      "Litígios e recursos",
      "Sanções",
      "Transmissão",
      "Prêmios",
      "Rating Points",
      "Alterações"
    ]
  },
  "antiCheat": {
    "kicker": "A.C.E Shield",
    "title": "Anti-cheat",
    "lede": "O A.C.E Shield é o sistema de integridade em construção para cada jogo A.C.E: verificações de cliente, servidor, jogo e comportamento trabalhando em conjunto, com a privacidade em primeiro lugar.",
    "statusLabel": "Fase de implementação",
    "pillarsTitle": "Pilares da arquitetura",
    "pillars": {
      "client": {
        "title": "Integridade do cliente",
        "body": "Um cliente leve verifica o ambiente de jogo durante a partida e relata sinais de adulteração."
      },
      "server": {
        "title": "Integridade do servidor",
        "body": "Os servidores usam configurações bloqueadas, plugins assinados e registros à prova de adulteração."
      },
      "match": {
        "title": "Integridade do jogo",
        "body": "Cada rodada é gravada com demos e registros de eventos para que qualquer resultado possa ser revisto."
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
        "body": "Modelo de ameaças, fluxos de dados e concepção da privacidade."
      },
      "p2": {
        "title": "Fase 2 · Integridade de servidor e jogo",
        "body": "Configurações bloqueadas, captura de demos e registros à prova de adulteração."
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
        "a": "O design começa com verificações em modo de usuário e análise do lado do servidor. Qualquer acesso mais profundo seria primeiro documentado e revisto publicamente."
      },
      {
        "q": "O Premium afeta o anti-cheat?",
        "a": "Não. As regras de integridade são iguais para todos. Os planos pagos nunca compram vantagem competitiva."
      },
      {
        "q": "Como denuncio um trapaceiro?",
        "a": "Na página de contato. As denúncias são analisadas nos termos da secção 14 do regulamento."
      }
    ]
  },
  "r38": {
    "hero": {
      "expansion1": "Autonomous Anti-Cheat",
      "expansion2": "Competitive Calibration",
      "expansion3": "Elite Players",
      "line": "Construa sua identidade competitiva. Calibre sua habilidade. Suba nas ranks da A.C.E.",
      "connectSteam": "Conectar Steam",
      "openDashboard": "Abrir painel",
      "exploreRanks": "Explorar ranks"
    },
    "status": {
      "title": "Status da plataforma",
      "steam": "Login com Steam",
      "shield": "A.C.E Shield",
      "servers": "Servidores competitivos",
      "tournaments": "Torneios",
      "billing": "Cobrança",
      "available": "Disponível",
      "inDevelopment": "Em desenvolvimento",
      "comingSoon": "Em breve",
      "preparing": "Em preparação",
      "billingOff": "Não configurado · checkout mostra Em breve",
      "billingOn": "Ativo · checkout da Paddle"
    },
    "card": {
      "matches": "Partidas",
      "wl": "V/D",
      "kd": "K/D",
      "noMatches": "Nenhuma partida registrada",
      "division": "Divisão {division}"
    },
    "journey": {
      "title": "Sua jornada competitiva",
      "currentRp": "RP atual",
      "current": "Atual",
      "next": "Próxima",
      "toGo": "{rp} RP até a próxima divisão",
      "top": "Divisão mais alta alcançada",
      "basis": "Calculado a partir do seu RP salvo e da tabela de ranks publicada."
    },
    "board": {
      "emptyTitle": "Ainda não há partidas ranqueadas",
      "emptyBody": "Os jogadores aparecem aqui após a primeira partida ranqueada registrada. Nada neste quadro é inventado.",
      "previewTag": "PRÉVIA",
      "lobbyTitle": "Lobby",
      "matchFoundTitle": "Partida encontrada",
      "previewNote": "Apenas uma prévia do layout: nenhuma fila ou servidor está rodando, e os nomes são fictícios.",
      "accept": "Aceitar",
      "waiting": "Aguardando jogadores",
      "note": "Contas reais com pelo menos uma partida ranqueada registrada, ordenadas pelo RP salvo. Sem linhas de exemplo ou inventadas."
    },
    "toast": {
      "region": "Notificações",
      "dismiss": "Fechar notificação",
      "signedIn": "Conectado como {name}",
      "signedOut": "Você saiu da conta.",
      "authFailed": "O login com Steam não foi concluído. Tente novamente."
    },
    "sound": {
      "on": "Sons da interface: ligados",
      "off": "Sons da interface: desligados"
    },
    "chat": {
      "open": "Abrir chat de suporte",
      "close": "Fechar chat de suporte",
      "title": "Suporte A.C.E",
      "greeting": "Oi! Sou o assistente de suporte da A.C.E. Pergunte sobre ranks, planos, regras ou sua conta.",
      "placeholder": "Digite sua pergunta…",
      "send": "Enviar",
      "unavailable": "O chat de suporte ainda não está disponível.",
      "disclaimer": "Respostas automáticas podem estar erradas. Banimentos e decisões de conta são tomados apenas pela administração.",
      "escalate": "Enviar para a equipe",
      "escalated": "Salvo como ticket de suporte. A administração vai analisar.",
      "error": "Algo deu errado. Tente novamente.",
      "rateLimited": "Mensagens demais. Aguarde um momento.",
      "thinking": "Digitando…",
      "tooLong": "Mensagem longa demais (máx. {max} caracteres)."
    }
  },
  "r39": {
    "home": {
      "kicker": "Counter-Strike 2 · Plataforma competitiva",
      "h1a": "Compita.",
      "h1b": "Calibre.",
      "h1c": "Suba.",
      "sub": "CS2 ranqueado com login Steam, uma escada de RP pública e planos que nunca compram vantagem.",
      "trust1": "Só CS2",
      "trust2": "Login com Steam OpenID",
      "trust3": "$0 · $4 · $7 — sem pagar para ganhar",
      "trust4": "10 ranks · comece com 1.200 RP",
      "stepsKicker": "Como funciona",
      "stepsTitle": "Três passos até seu primeiro rank",
      "step1t": "Conecte a Steam",
      "step1b": "Entre com Steam OpenID. A A.C.E nunca vê sua senha da Steam.",
      "step2t": "Calibre",
      "step2b": "Você começa no nível 3 com 1.200 RP. Cada partida registrada muda seus RP por regras publicadas.",
      "step3t": "Suba",
      "step3b": "Uma vitória dá até +30 RP (+32 como melhor jogador); uma derrota custa até −30. Seu rank sempre segue seus RP.",
      "ranksTitle": "Dez ranks. Uma tabela pública.",
      "ranksBody": "As cores dos emblemas são fixas por nível e seu rank é sempre calculado a partir dos RP salvos.",
      "ranksCta": "Ver todos os ranks",
      "plansTitle": "Planos que nunca compram vitórias",
      "plansBody": "Planos pagos são apenas cosméticos e de conveniência. O pagamento é feito pela Paddle; enquanto os pagamentos não estiverem configurados, o botão mostra Em breve.",
      "plansCta": "Comparar planos",
      "free": "Grátis",
      "perMonth": "/mês",
      "signedInKicker": "Bem-vindo de volta"
    },
    "profile": {
      "kicker": "JOGADOR",
      "notFound": "Jogador não encontrado",
      "notFoundBody": "Nenhuma conta A.C.E usa este Steam ID, ou o perfil não é público.",
      "rating": "Pontuação",
      "rank": "Rank",
      "record": "Histórico",
      "memberSince": "Membro desde {date}",
      "steamProfile": "Perfil Steam",
      "yourProfile": "Este é o seu perfil",
      "backToBoard": "Voltar ao ranking"
    },
    "board": {
      "podium": "Melhores jogadores",
      "viewProfile": "Ver perfil"
    },
    "chat": {
      "sources": "Fontes",
      "noMatch": "Não encontrei isso no conteúdo do site da A.C.E. Você pode enviar sua pergunta para a equipe como ticket.",
      "s1": "Quanto custa o Premium?",
      "s2": "Como ganho RP?",
      "s3": "Como denuncio um trapaceiro?",
      "kbNote": "As respostas vêm do conteúdo do site da A.C.E."
    }
  },
  "r40": {
    "dash": {
      "kicker": "Central de comando",
      "welcome": "Bem-vindo de volta, {name}",
      "quick": "Ações rápidas",
      "qProfile": "Perfil público",
      "qBoard": "Ranking",
      "qRanks": "Tabela de patentes",
      "qPlay": "Jogar",
      "statRp": "Pontuação",
      "statRank": "Patente",
      "statRecord": "Histórico",
      "statWinRate": "Taxa de vitórias",
      "statPlan": "Plano",
      "toNext": "{rp} RP até {next}",
      "top": "Topo do ranking",
      "activity": "Atividade recente",
      "activityEmpty": "Ainda não há atividade registrada. Partidas e logins aparecem aqui assim que acontecem.",
      "evSignIn": "Login com Steam",
      "evRating": "Pontuação {before} → {after}",
      "noRecord": "Nenhuma partida ainda",
      "account": "Conta"
    },
    "nf": {
      "code": "Erro 404",
      "title": "Esta página está fora do mapa",
      "body": "O link pode estar antigo ou digitado errado. Todo o A.C.E está a um clique daqui.",
      "home": "Voltar ao início",
      "ranks": "Ver patentes"
    },
    "err": {
      "code": "Algo deu errado",
      "title": "Ocorreu um erro inesperado",
      "body": "Nada foi cobrado e sua conta está segura. Tente de novo ou volte ao início.",
      "retry": "Tentar de novo"
    }
  },
  "r41": {
    "vf": {
      "label": "Jogador verificado",
      "tip": "Verificado: Steam vinculado, conta em dia, revisada pela A.C.E."
    },
    "st": {
      "kicker": "Desempenho",
      "title": "Estatísticas do jogador",
      "lede": "Cada número vem de partidas registradas da A.C.E. Nada é estimado.",
      "empty": "Ainda não há partidas registradas. As estatísticas aparecem após a primeira partida ranqueada.",
      "winRate": "Taxa de vitórias",
      "adr": "ADR",
      "kr": "K/R",
      "hs": "HS%",
      "clutch": "Clutches vencidos",
      "entry": "Sucesso de entrada",
      "utility": "Dano de utilitários",
      "heatmap": "Atividade",
      "heatmapEmpty": "Nenhum dia de jogo ainda",
      "rpChart": "Progresso de RP",
      "rpEmpty": "Nenhuma mudança de pontuação ainda",
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
      "title": "Sobre a A.C.E",
      "lede": "Uma plataforma de competição de Counter-Strike 2 construída em torno de uma tabela de patentes pública e planos que nunca compram vantagem.",
      "b1": "A A.C.E organiza partidas ranqueadas, ladders e torneios de CS2. O login é via Steam OpenID; nunca vemos sua senha do Steam.",
      "b2": "Sua patente é calculada só a partir de resultados registrados com regras publicadas. Os planos pagos são apenas cosméticos e de conveniência.",
      "b3": "A A.C.E é uma plataforma independente e não é afiliada à Valve."
    },
    "ss": {
      "title": "Status dos servidores",
      "lede": "Verificações ao vivo deste servidor no momento em que você abriu a página. Nada é estimado.",
      "web": "Site",
      "db": "Banco de dados",
      "match": "Servidores de partida",
      "ok": "Operacional",
      "down": "Indisponível",
      "notLive": "Ainda não ativo",
      "checked": "Verificado {time}"
    },
    "rp": {
      "title": "Denunciar jogador",
      "lede": "Conte aos operadores o que aconteceu. Cada denúncia é analisada por uma pessoa.",
      "target": "SteamID64 do jogador",
      "reason": "Motivo",
      "rCheat": "Trapaça",
      "rToxic": "Comportamento abusivo",
      "rOther": "Outro",
      "details": "Detalhes (opcional)",
      "submit": "Enviar denúncia",
      "signIn": "Entre com Steam para enviar uma denúncia.",
      "sent": "Denúncia recebida. Os operadores analisam cada denúncia.",
      "invalid": "Digite um SteamID64 válido (17 dígitos).",
      "open": "Denunciar jogador"
    },
    "nt": {
      "title": "Notificações",
      "empty": "Tudo em dia.",
      "markRead": "Marcar tudo como lido"
    },
    "se": {
      "title": "Temporadas",
      "lede": "As temporadas vão zerar a classificação e dar emblemas de fim de temporada.",
      "none": "Nenhuma temporada começou ainda. A primeira será anunciada aqui."
    }
  },
  "r41b": {
    "lv": {
      "nav": "Ao vivo",
      "title": "Transmissões ao vivo",
      "lede": "Streams oficiais dos torneios A.C.E. Uma transmissão só aparece aqui enquanto os operadores a deixam no ar.",
      "none": "Nenhuma transmissão ao vivo agora",
      "noneBody": "Quando um stream oficial entrar no ar, ele aparece aqui. Enquanto isso, veja os torneios abaixo.",
      "schedule": "Próximos torneios",
      "noSchedule": "Ainda não há torneios agendados.",
      "onAir": "No ar",
      "watch": "Assistir ao vivo"
    }
  },
  "r46": {
    "aria": "O que a A.C.E representa",
    "fair": "Proteção ao Fair Play",
    "fairSub": "Login pela Steam, regras publicadas e denúncias de jogadores revisadas por admins.",
    "calib": "Calibração Competitiva",
    "calibSub": "Partidas de posicionamento e um ranking público de RP de 100 a 3.000.",
    "elite": "Jogadores de Elite",
    "eliteSub": "Dez tiers e cinco insígnias de prestígio, conquistados só com RP."
  },
  "r45": {
    "title": "Além do Legend",
    "lede": "Cinco insígnias de prestígio acima do A.C.E Legend, uma a cada 200 RP de 2.150 a 2.950. Conquistadas só jogando.",
    "plus": "Plus · platina",
    "premium": "Premium · fogo dourado",
    "fair": "O mesmo RP para todos. Limites de prestígio, matchmaking e rating são iguais em todos os planos. Nada aqui pode ser comprado.",
    "finish": "O acabamento de prestígio exige Plus ou Premium. Jogadores Free alcançam os mesmos limites e os veem como marco em texto.",
    "link": "Regras completas das insígnias"
  },
  "r44": {
    "kicker": "Seu rank",
    "next": "Próximo",
    "winRate": "Taxa de vitória",
    "noMatches": "Ainda sem partidas ranqueadas. Seu primeiro resultado aparecerá aqui.",
    "finishPlus": "Plus · acabamento platina",
    "finishPremium": "Premium · acabamento fogo dourado",
    "progressAria": "Progresso até {name}",
    "matches": "Partidas"
  },
  "r42": {
    "playTitle": "Jogar agora",
    "playSub": "Encontre uma partida ranqueada de CS2 e suba",
    "newPill": "NOVO",
    "shopAria": "Abrir a loja"
  },
  "r41c": {
    "v5": {
      "vTier": "Vitórias e derrotas são multiplicadas por {t7} nos níveis 7–9 e por {t10} no nível 10 ({top}), então um histórico de 50% mantém seu rank em qualquer nível.",
      "vPlacement": "Suas primeiras {n} partidas andam {pk}× mais rápido para você achar seu nível logo. Durante a colocação seu rating não passa do nível {maxTier} ({cap} RP).",
      "vAbandon": "Conta como derrota dobrada, pelo menos −{abandon} RP, seja qual for o resultado, e sem bônus de MVP.",
      "ex2": "Cada derrota no caminho soma vitórias. Nos níveis 7–9 uma vitória dá +{win7} e uma derrota custa −{loss7}, então vencer mais de {breakEven}% das partidas equilibradas mantém você subindo."
    },
    "pr": {
      "kicker": "Prestígio",
      "title": "Regras dos emblemas",
      "lede": "Como cada emblema A.C.E é conquistado. Emblemas são só cosméticos: nunca mudam o matchmaking, os RP ou qualquer regra.",
      "ranks": "Os emblemas de rank (níveis 1–10) seguem seus RP. Todo mundo vê o mesmo rank e a mesma cor fixa de nível.",
      "prestige": "Os emblemas de prestígio são cinco metas de longo prazo acima de {elite} RP: um a cada 200 RP, de 2.150 a 2.950.",
      "free": "Free: seu emblema continua A.C.E Legend e o nível de prestígio aparece como marco em texto. Seus RP nunca têm limite.",
      "plus": "Plus: o conjunto de prestígio em platina.",
      "premium": "Premium: o conjunto de prestígio dourado animado.",
      "lose": "Se cair abaixo de um limite de prestígio, o emblema acompanha seus RP; ao atingir de novo, ele volta.",
      "level": "Prestígio {n} · {name}",
      "from": "A partir de {rp} RP",
      "milestone": "Prestígio {n} alcançado",
      "perk": "Conjunto de emblemas de prestígio (2.150–3.000 RP), conquistado com RP",
      "open": "Regras dos emblemas",
      "wins": "Cerca de {n} vitórias em partidas equilibradas após o nível anterior"
    }
  },
  "r48": {
    "kicker": "Ranqueada 5v5",
    "title": "Fila solo",
    "lede": "Entre sozinho. Quando dez jogadores estiverem na fila, a A.C.E equilibra dois times por RP, faz uma checagem de prontos e um veto de mapas entre capitães, e começa a partida no nosso servidor.",
    "inQueue": "Na fila",
    "count": "{n} / {total} jogadores na fila",
    "waiting": "Faltam {n}",
    "elapsed": "Procurando há {time}",
    "join": "Entrar na fila",
    "leave": "Sair da fila",
    "signIn": "Entre com a Steam para entrar na fila",
    "serverBusy": "Tem uma partida rodando no servidor. O próximo lobby abre quando ela acabar; você ainda pode entrar na fila.",
    "readyTitle": "Partida encontrada",
    "readyLede": "Aceite em {s} segundos. Quem não aceitar sai e o resto volta para a fila.",
    "accept": "Aceitar",
    "decline": "Recusar",
    "accepted": "{n} / {total} aceitaram",
    "youAccepted": "Você aceitou. Esperando os outros.",
    "vetoTitle": "Veto de mapas",
    "vetoLede": "Os capitães (maior RP de cada lado) vetam alternadamente até sobrar um mapa Active Duty.",
    "yourTurn": "Sua vez: vete um mapa",
    "theirTurn": "O capitão do {team} está vetando",
    "turnLeft": "Faltam {s} s",
    "ban": "Vetar",
    "bannedBy": "Vetado por {team}",
    "autoBan": "Vetado automaticamente (tempo esgotado)",
    "teamA": "Time Alfa",
    "teamB": "Time Bravo",
    "captain": "Capitão",
    "launching": "Criando a partida no servidor…",
    "liveTitle": "Partida pronta",
    "connect": "Conectar ao servidor",
    "connectNote": "Abre o CS2 pela Steam. Você tem 5 minutos para entrar, senão a partida é cancelada.",
    "console": "Ou cole no console do CS2: connect {address}",
    "map": "Mapa",
    "avgRp": "Média {rp} RP",
    "cancelled": "O lobby foi cancelado. Quem aceitou voltou para a fila.",
    "failed": "O servidor não conseguiu iniciar a partida. Ninguém perdeu RP. Entre na fila de novo.",
    "done": "Partida encerrada. Resultados e RP vêm do relatório do servidor.",
    "testTag": "Lobby de teste",
    "lobbyNote": "Só jogadores reais da A.C.E aparecem aqui. Ranks e RP são os valores salvos.",
    "errors": {
      "steam-required": "Vincule uma conta Steam para entrar na fila.",
      "not-eligible": "Sua conta não pode entrar na fila agora.",
      "in-match": "Você já está em um lobby.",
      "not-your-turn": "Espere a sua vez.",
      "not-captain": "Só capitães vetam mapas.",
      "unavailable": "A fila está indisponível. Tente de novo em instantes.",
      "sign-in": "Entre com a Steam primeiro."
    }
  },
  "r48b": {
    "estimate": "Espera estimada {time}",
    "estimateNone": "A estimativa aparece depois de algumas partidas",
    "region": "Região do servidor: {region}",
    "latency": "Latência do site {ms} ms · o ping do jogo aparece ao conectar",
    "alertsOn": "Ativar alertas de partida",
    "alertsActive": "Alertas de partida ativados",
    "soundOn": "Som ligado",
    "soundOff": "Som desligado",
    "notifTitle": "Partida A.C.E encontrada",
    "notifBody": "Aceite em 20 segundos.",
    "winChance": "Chance de vitória {p}%",
    "leaverWarn": "Sair de uma partida em andamento ou não conectar gera espera na fila: 30 minutos, até 7 dias se repetir.",
    "dodgeWarn": "Recusar ou perder a checagem gera espera: 2, 5, 15, 30 e depois 60 minutos em 24 horas.",
    "copyIp": "Copiar IP",
    "copied": "Copiado",
    "liveScore": "Placar ao vivo",
    "round": "Round {n}",
    "activeMatch": "Você tem uma partida em andamento",
    "reconnect": "Reconectar",
    "resultsTitle": "Resultado da partida",
    "win": "Vitória",
    "loss": "Derrota",
    "draw": "Empate",
    "rpChange": "{delta} RP",
    "rpPending": "O RP aparece quando o relatório do servidor for verificado.",
    "kills": "Abates",
    "deaths": "Mortes",
    "assists": "Assistências",
    "damage": "Dano",
    "mvps": "MVPs",
    "hs": "Headshots",
    "cooldown": "Espera na fila: faltam {time}",
    "banned": "Você está banido da fila.",
    "bannedUntil": "Banido da fila até {date}",
    "errBanned": "Você está banido da fila.",
    "errCooldown": "Você está com espera na fila."
  },
  "r48c": {
    "launching": "Abrindo o CS2 e conectando você…",
    "hint": "Se o CS2 não abriu, o navegador bloqueou a abertura. Use Entrar na partida.",
    "join": "Entrar na partida",
    "watch": "Assistir ao vivo"
  },
  "r49": {
    "soon": "Pagamento em breve",
    "signIn": "Entre com a Steam para assinar",
    "subscribe": "Assinar {plan}",
    "opening": "Abrindo pagamento seguro…",
    "failed": "Não foi possível abrir o pagamento. Tente de novo.",
    "processing": "Pagamento enviado ao Paddle. Seu plano muda assim que o Paddle confirmar, geralmente em um minuto.",
    "current": "Seu plano atual",
    "agree": "Ao assinar, você concorda com os Termos, a Política de reembolso e a Política de privacidade. O Paddle processa o pagamento como Merchant of Record.",
    "terms": "Termos",
    "refunds": "Política de reembolso",
    "privacy": "Privacidade",
    "cookies": "Política de cookies",
    "planTitle": "Assinatura",
    "renews": "Renova ou termina em {date}",
    "pastDue": "O pagamento falhou. O Paddle vai tentar de novo; atualize sua forma de pagamento para manter o plano.",
    "canceled": "Assinatura encerrada. Você está no Free.",
    "manage": "Gerenciar assinatura",
    "manageNote": "Altere a forma de pagamento, baixe faturas ou cancele no portal do cliente Paddle.",
    "seePlans": "Ver planos",
    "legalEnglish": "Esta página jurídica está em inglês. O texto em inglês é a versão vinculante.",
    "signInBuy": "Entre com a Steam para comprar",
    "pendingConfirm": "Pagamento enviado ao Paddle. É adicionado assim que o Paddle confirmar.",
    "shopTitle": "Cosméticos",
    "shopEmpty": "Ainda não há cosméticos à venda.",
    "shopDown": "A loja está indisponível no momento.",
    "cosmeticOnly": "Apenas cosmético. Sem vantagem no jogo e sem efeito no matchmaking ou no RP.",
    "kindFrame": "Moldura de perfil",
    "kindBanner": "Banner",
    "kindEffect": "Efeito do card de rank",
    "kindName": "Cor do nome",
    "buy": "Comprar · {price}",
    "owned": "Adquirido",
    "equip": "Equipar",
    "unequip": "Remover",
    "entryTitle": "Inscrição no torneio",
    "entryFee": "Taxa de inscrição: {price}",
    "freeEntry": "Inscrição gratuita",
    "payEnter": "Pagar e inscrever",
    "registered": "Inscrito",
    "team": "Time",
    "captainOnly": "Apenas o capitão pode inscrever o time.",
    "prizeNote": "Os prêmios são apenas não monetários: cosméticos ou tempo de assinatura. As taxas nunca financiam prêmios em dinheiro.",
    "communityTitle": "Comunidade",
    "communityLede": "Siga a A.C.E para notícias de partidas, torneios e destaques.",
    "followOn": "A.C.E no {network}",
    "changePlan": "Mudar para {plan}",
    "changing": "Mudando de plano…",
    "changed": "Mudança de plano enviada à Paddle. Seu plano atualiza assim que a Paddle confirmar.",
    "changeFailed": "A mudança de plano falhou. Tente de novo ou use Gerenciar assinatura.",
    "manualNote": "Seu plano atual foi concedido pela A.C.E, não comprado. Assinar inicia uma assinatura Paddle separada.",
    "checkoutError": "A Paddle não conseguiu abrir o checkout: {reason}"
  },
  "r49b": {
    "title": "Inventário Steam",
    "private": "Inventário privado",
    "privateBody": "O inventário Steam deste jogador é privado.",
    "empty": "Nenhum item de CS2 no inventário público.",
    "unavailable": "Não foi possível carregar o inventário Steam agora.",
    "hiddenOwner": "Sua vitrine de inventário está oculta no perfil.",
    "hide": "Ocultar vitrine",
    "show": "Mostrar vitrine",
    "priceSource": "Preços: menor oferta do Mercado da Comunidade Steam, em cache.",
    "note": "Apenas vitrine. A A.C.E nunca compra, vende ou troca itens Steam.",
    "updated": "Atualizado em {date}",
    "more": "+{n} itens"
  }
};
