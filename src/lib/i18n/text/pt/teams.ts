import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  "meta": {
    "title": "Gestão de esquadrões A.C.E.",
    "description": "O seu espaço de esquadrão 5v5. Os convites exigem uma sessão Steam verificada; as verificações anti-cheat chegam com o A.C.E Shield."
  },
  "hero": {
    "kicker": "EQUIPAS",
    "title": "Esquadrões",
    "lede": "Cinco lugares abertos em fila. Um clã só é guardado após o início de sessão na Steam e a criação de uma equipa."
  },
  "gate": {
    "kickerPremium": "Registo de clã após a escolha do plano",
    "kickerDefault": "Registo do clã",
    "title": "São uma equipa de cinco?",
    "intro": "O lugar 1 é o jogador com sessão iniciada na Steam. Os lugares 2 a 5 já têm de ter contas A.C.E. Guardar um clã não cobra $7, não envia e-mail e não coloca o clã no quadro de 100 equipas.",
    "yes": "Sim, cinco jogadores",
    "no": "Não, deixar os lugares abertos",
    "seatsOpen": "Os cinco lugares continuam abertos. Nada foi guardado.",
    "connectSteam": "Ligue primeiro a Steam. O botão regressa a esta página. A A.C.E. nunca pede a palavra-passe da Steam.",
    "alreadyMember": "{name} já pertence a {team}. Este formulário não cria um segundo clã.",
    "thisAccount": "Esta conta",
    "acceptTerms": "Aceite os termos antes de guardar um clã.",
    "notStored": "O clã não foi guardado.",
    "clanName": "Nome do clã",
    "captainSeat": "Lugar 1, capitão: {name}",
    "signedInSteam": "Conta Steam com sessão iniciada",
    "seatLabel": "SteamID ou ID de conta A.C.E. do lugar {seat}",
    "submit": "Guardar o clã de cinco jogadores",
    "saved": "O nome do clã foi guardado e há quatro convites pendentes. Esses jogadores não fazem parte do plantel até aceitarem. Isto não é um lugar no quadro de 100 equipas. Nada foi cobrado."
  },
  "squadDesk": {
    "kicker": "Balcão do esquadrão",
    "title": "Perguntas sobre as regras escritas",
    "intro": "Este balcão só lê os factos publicados nesta página. Não deteta cheats, não abre uma partida nem altera uma conta.",
    "questionLabel": "Pergunta",
    "placeholder": "Pergunte sobre os cinco lugares, os planos ou o suporte",
    "ask": "Perguntar",
    "fallback": "Este balcão só responde com as regras escritas nesta página: os planos, os cinco lugares, Steam OpenID e suporte.",
    "facts": {
      "email": "Nenhum e-mail é enviado. Os recibos de plano ficam neste site.",
      "charge": "O Premium custa $7 por mês. Em breve: ainda não há pagamento, por isso nada é cobrado.",
      "board": "Um clã guardado é um registo de plantel. Não é colocado no quadro de 100 equipas. Esse quadro continua a mostrar 0 registadas até abrir uma temporada.",
      "steam": "O início de sessão usa o Steam OpenID oficial. A A.C.E. nunca pede a palavra-passe da Steam. A partir desta página, a Steam regressa aqui.",
      "roster": "O lugar 1 é o capitão com sessão iniciada. Os lugares 2 a 5 já têm de ter contas A.C.E. Os convites ficam pendentes até cada jogador aceitar.",
      "badge": "Os emblemas de lugar passam a ser verificações reais do A.C.E Shield quando o anti-cheat for lançado.",
      "support": "Abra Suporte ou Contacto neste sítio. Um pedido de suporte não abre um ticket, e o texto escrito em Contacto não é entregue.",
      "rating": "Uma pontuação nova começa em 1.200. Esta página não vende pontuação, não abre uma fila, não liga um servidor de CS2 nem entrega prémios."
    }
  },
  "squad": {
    "roles": {
      "awper": "AWPer",
      "entryFragger": "Entry fragger",
      "lurker": "Lurker",
      "igl": "IGL",
      "support": "Suporte"
    },
    "rankLabel": "Rank {level}",
    "noAgents": "Ainda não há jogadores sem equipa guardados.",
    "notice": "Os convites só são enviados por um capitão com sessão iniciada. O emblema num lugar não é uma verificação anti-cheat ao vivo."
  },
  "tournaments": {
    "meta": {
      "title": "Campeonato A.C.E. — Eliminatória de elite com 100 equipas",
      "description": "A eliminatória de 100 equipas. Clique num clã para abrir o plantel e depois cada perfil de jogador. As inscrições abrem em breve."
    },
    "intro": {
      "title": "CAMPEONATO A.C.E. — ELIMINATÓRIA DE ELITE COM 100 EQUIPAS",
      "lede": "O quadro publicado é uma eliminatória com 100 equipas. O gráfico abaixo é esse layout. Clicar num clã abre o painel do plantel. Inscrições: 0 de 100. Nenhum prémio em dinheiro é anunciado ou financiado.",
      "formatValue": "Matriz de chave com 100 equipas",
      "briefTitle": "Briefing de operações com 100 equipas",
      "briefBody": "Um único formato competitivo abrange as 100 equipas. Quando as inscrições abrirem, os primeiros 28 clãs aceites passam diretamente à ronda 2. Os restantes 72 clãs jogam a ronda 1. Os nomes nas vagas livres são provisórios até os clãs se inscreverem. O regulamento completo está por baixo da árvore. Os lobbies de jogo abrem com a beta competitiva, e os prémios são confirmados em cada evento."
    },
    "bracket": {
      "kicker": "Eliminatória de 100 equipas · em breve",
      "title": "Matriz de chave com 100 equipas",
      "statusUnavailable": "As inscrições abrem em breve. Até lá, a árvore mostra clãs de pré-visualização.",
      "statusEmpty": "As inscrições abrem em breve. Até lá, a árvore mostra clãs de pré-visualização.",
      "statusStored": "Os {count} clãs inscritos são colocados primeiro. Os lugares restantes mostram clãs de pré-visualização. As rondas seguintes são preenchidas à medida que os jogos são registados.",
      "openSlot": "Vaga aberta",
      "openCompetitorSlot": "Vaga de participante aberta",
      "openRoster": "Abrir o plantel de {name}",
      "bye": "👑 [ISENÇÃO - CABEÇA DE SÉRIE NA RONDA 2]",
      "championStage": "FASE DO CAMPEÃO",
      "leftWing": "Ala esquerda",
      "rightWing": "Ala direita",
      "emptySlotNotice": "Esta vaga de participante está vazia. Ainda não há nenhum clã guardado.",
      "grandFinalNotice": "A grande final fica em aberto até ambas as meias-finais estarem registadas.",
      "rounds": {
        "r128": "R1",
        "r64": "R64",
        "r32": "R32",
        "r16": "R16",
        "qf": "QF",
        "sf": "MF"
      }
    },
    "profile": {
      "closeBackdrop": "Fechar o perfil da equipa",
      "kicker": "Perfil de campeonato · pré-visualização",
      "matchesPlayed": "Partidas jogadas",
      "winRate": "Taxa de vitórias combinada",
      "streak": "Sequência ativa no torneio",
      "rosterHeading": "Matriz do plantel de 5 jogadores",
      "openSeat": "Lugar aberto {seat}",
      "noPlayer": "Nenhum jogador guardado",
      "previous": "Clã anterior",
      "count": "Clã {index} de {total}",
      "next": "Clã seguinte",
      "close": "Fechar perfil",
      "disclosure": "As configurações e inventários dos jogadores aparecem aqui quando estes optarem por partilhá-los. A A.C.E. não recolhe dados de hardware."
    },
    "player": {
      "level": "NÍV. {level} · RP {rating}",
      "record": "V–D {wins}–{losses}",
      "kdNotStored": "K/D não guardado",
      "openProfileAria": "Abrir o perfil de {name}",
      "openProfile": "Abrir perfil",
      "badge": "PRONTO / CONFORME ANTI-CHEAT",
      "badgeNote": "Verificação A.C.E Shield · em breve",
      "gear": {
        "processor": "CPU",
        "gpu": "GPU",
        "mouse": "Rato",
        "dpi": "DPI",
        "keyboard": "Teclado",
        "monitor": "Monitor",
        "headset": "Auscultadores"
      }
    }
  },
  "gearPlaceholder": {
    "processor": "CPU · não partilhado",
    "gpu": "GPU · não partilhada",
    "mouse": "Rato · não partilhado",
    "dpi": "DPI · não partilhado",
    "keyboard": "Não partilhado",
    "monitor": "Taxa de atualização · não partilhada",
    "headset": "Não partilhado"
  },
  "profileDisclosure": "A A.C.E. não guarda inventários de hardware e não executa um cliente anti-cheat. Os gráficos de tendência de desempenho e a matriz de combate exigem uma sessão A.C.E. Plus ou Premium. Uma ligação de perfil Steam escrita nesta página não é guardada e não é um identificador oficial.",
  "errors": {
    "signInRequired": "É necessário iniciar sessão.",
    "nameLength": "Os nomes de equipa têm de ter entre 2 e 32 caracteres.",
    "alreadyCaptain": "Esta conta já é capitã de uma equipa.",
    "nameTaken": "Já existe uma equipa com esse nome.",
    "idRequired": "É necessário um SteamID ou um ID de conta A.C.E.",
    "noAccountForToken": "Não existe nenhuma conta A.C.E. para esse SteamID ou ID de conta.",
    "clanNeedsFour": "Um clã de cinco jogadores precisa do capitão com sessão iniciada e de mais quatro SteamIDs.",
    "seatNeedsId": "Cada um dos quatro lugares precisa de um SteamID ou de um ID de conta A.C.E.",
    "seatsDistinct": "Cada lugar precisa de um jogador diferente.",
    "captainHoldsSeat": "O capitão já ocupa o lugar 1. Use outros quatro jogadores.",
    "fewerThanFour": "Esses IDs pertencem a menos de quatro contas.",
    "selfInvite": "Um capitão não pode convidar a sua própria conta.",
    "captainOnly": "Só o capitão designado pode enviar convites.",
    "rosterLimit": "Um plantel de CS2 tem cinco jogadores, incluindo o capitão.",
    "alreadyOnRoster": "Esse jogador já está no plantel.",
    "noAccountForId": "Não existe nenhuma conta A.C.E. para esse ID.",
    "inviteNotFound": "Convite não encontrado.",
    "inviteNotPending": "Este convite já não está pendente.",
    "rosterFull": "O plantel já está completo.",
    "createFailed": "Não foi possível criar a equipa.",
    "inviteFailed": "O convite falhou.",
    "updateInviteFailed": "Não foi possível atualizar o convite."
  }
};
