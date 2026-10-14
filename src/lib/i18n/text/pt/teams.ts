import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Gestão de esquadrões A.C.E.",
    description:
      "Espaço conceptual de esquadrão 5v5. Plantéis, jogadores livres e emblemas anti-cheat são layouts de pré-visualização. Os convites reais exigem uma sessão Steam verificada.",
  },
  hero: {
    kicker: "EQUIPAS",
    title: "Esquadrões",
    lede: "Cinco lugares abertos em fila. Um clã só é guardado após o início de sessão na Steam e a criação de uma equipa.",
  },
  gate: {
    kickerPremium: "Depois da carta Premium",
    kickerDefault: "Registo do clã",
    title: "São uma equipa de cinco?",
    intro:
      "O lugar 1 é o jogador com sessão iniciada na Steam. Os lugares 2 a 5 já têm de ter contas A.C.E. Guardar um clã não cobra $7.00, não envia e-mail e não coloca o clã no quadro de 100 equipas.",
    yes: "Sim, cinco jogadores",
    no: "Não, deixar os lugares abertos",
    seatsOpen: "Os cinco lugares continuam abertos. Nada foi guardado.",
    connectSteam:
      "Ligue primeiro a Steam. O botão regressa a esta página. A A.C.E. nunca pede a palavra-passe da Steam.",
    alreadyMember: "{name} já pertence a {team}. Este formulário não cria um segundo clã.",
    thisAccount: "Esta conta",
    acceptTerms: "Aceite os termos antes de guardar um clã.",
    notStored: "O clã não foi guardado.",
    clanName: "Nome do clã",
    captainSeat: "Lugar 1, capitão: {name}",
    signedInSteam: "Conta Steam com sessão iniciada",
    seatLabel: "SteamID ou ID de conta A.C.E. do lugar {seat}",
    submit: "Guardar o clã de cinco jogadores",
    saved:
      "O nome do clã foi guardado e há quatro convites pendentes. Esses jogadores não fazem parte do plantel até aceitarem. Isto não é um lugar no quadro de 100 equipas. Nada foi cobrado.",
  },
  squadDesk: {
    kicker: "Balcão do esquadrão",
    title: "Perguntas sobre as regras escritas",
    intro:
      "Este balcão só lê os factos publicados nesta página. Não deteta cheats, não abre uma partida nem altera uma conta.",
    questionLabel: "Pergunta",
    placeholder: "Pergunte sobre os cinco lugares, a carta de $7 ou o suporte",
    ask: "Perguntar",
    fallback:
      "Este balcão só responde com base nas regras escritas nesta página: a carta Premium, os cinco lugares, o Steam OpenID e o Suporte.",
    facts: {
      email: "Não é enviado nenhum e-mail. A carta Premium fica em /premium/receipt.",
      charge:
        "Nada é cobrado. O Premium a $7.00 por mês é um preço de apresentação. O pagamento não está ativo, e a patente guardada não muda.",
      board:
        "Um clã guardado é um registo de plantel. Não é colocado no quadro de 100 equipas. Esse quadro continua a mostrar 0 registadas até abrir uma temporada.",
      steam:
        "O início de sessão usa o Steam OpenID oficial. A A.C.E. nunca pede a palavra-passe da Steam. A partir desta página, a Steam regressa aqui.",
      roster:
        "O lugar 1 é o capitão com sessão iniciada. Os lugares 2 a 5 já têm de ter contas A.C.E. Os convites ficam pendentes até cada jogador aceitar.",
      badge:
        "O emblema num lugar é uma amostra de layout. Não é uma verificação anti-cheat ao vivo, e nada é transferido.",
      support:
        "Abra Suporte ou Contacto neste sítio. Um pedido de suporte não abre um ticket, e o texto escrito em Contacto não é entregue.",
      rating:
        "Uma pontuação nova começa em 1000. Esta página não vende pontuação, não abre uma fila, não liga um servidor CS2 nem entrega prémios.",
    },
  },
  squad: {
    roles: {
      awper: "AWPer",
      entryFragger: "Entry fragger",
      lurker: "Lurker",
      igl: "IGL",
      support: "Suporte",
    },
    rankLabel: "Rank {level}",
    noAgents: "Ainda não há jogadores sem equipa guardados.",
    notice:
      "Os convites só são enviados por um capitão com sessão iniciada. O emblema num lugar não é uma verificação anti-cheat ao vivo.",
  },
  tournaments: {
    meta: {
      title: "Campeonato A.C.E. — Eliminatória de elite com 100 equipas",
      description:
        "Layout de eliminatória com 100 equipas. Clique num clã para abrir o plantel e depois abra o perfil de cada jogador. Inscrições: 0 de 100.",
    },
    intro: {
      title: "CAMPEONATO A.C.E. — ELIMINATÓRIA DE ELITE COM 100 EQUIPAS",
      lede: "O quadro publicado é uma eliminatória com 100 equipas. O gráfico abaixo é esse layout. Clicar num clã abre o painel do plantel. Inscrições: 0 de 100. Nenhum prémio em dinheiro é anunciado ou financiado.",
      formatValue: "Matriz de chave com 100 equipas",
      briefTitle: "Briefing de operações com 100 equipas",
      briefBody:
        "Um único layout competitivo cobre todo o quadro de 100 equipas. Quando as inscrições abrirem, os primeiros 28 clãs aceites recebem uma isenção na Ronda 1 e avançam para a Ronda 2. Os outros 72 clãs jogam a Ronda 1. Os nomes nas vagas por preencher são etiquetas provisórias, não participantes inscritos. O código completo está por baixo da árvore. Nenhum lobby de partida está aberto e nenhum prize pool está financiado.",
    },
    timeline: {
      ariaLabel: "Calendário de lançamento do torneio",
      kicker: "ROTEIRO DO CAMPEONATO",
      title: "CALENDÁRIO DE LANÇAMENTO DO TORNEIO",
      stageLabel: "Fase {id}",
      stages: {
        registrations: { title: "Inscrições abertas", state: "PULSO DE PRÉ-VISUALIZAÇÃO" },
        calibration: { title: "Chaves de calibração regionais", state: "BLOQUEADO" },
        quarterFinals: { title: "Quartos de final Elite Pro", state: "BLOQUEADO" },
        finals: { title: "Grandes Finais Apex", state: "BLOQUEADO" },
      },
      disclaimer:
        "A Fase 01 pulsa como pré-visualização de layout. As inscrições não estão abertas (0 de 100). As Fases 02–04 estão bloqueadas. As Grandes Finais Apex incluem apenas um valor conceptual de $50,000 — nenhum prize pool está financiado.",
    },
    bracket: {
      kicker: "Eliminatória com 100 equipas · pré-visualização de layout",
      title: "Matriz de chave com 100 equipas",
      statusUnavailable:
        "O PostgreSQL não está ligado. As 100 vagas de participantes usam nomes de clãs provisórios, não equipas inscritas. Os resultados das séries ficam em 0.",
      statusEmpty:
        "Ainda não há clãs guardados. Os 100 nomes de participantes são um layout provisório. Não são um quadro com check-in feito.",
      statusStored:
        "{count} clãs da base de dados são colocados primeiro. As restantes vagas de participantes usam nomes provisórios. As rondas seguintes ficam em aberto até serem registadas partidas.",
      openSlot: "Vaga aberta",
      openCompetitorSlot: "Vaga de participante aberta",
      openRoster: "Abrir o plantel de {name}",
      bye: "👑 [ISENÇÃO - CABEÇA DE SÉRIE NA RONDA 2]",
      championStage: "FASE DO CAMPEÃO",
      leftWing: "Ala esquerda",
      rightWing: "Ala direita",
      emptySlotNotice: "Esta vaga de participante está vazia. Ainda não há nenhum clã guardado.",
      grandFinalNotice: "A grande final fica em aberto até ambas as meias-finais estarem registadas.",
      rounds: {
        r128: "R1",
        r64: "R64",
        r32: "R32",
        r16: "R16",
        qf: "QF",
        sf: "MF",
      },
    },
    profile: {
      closeBackdrop: "Fechar o perfil da equipa",
      kicker: "Perfil principal do campeonato · amostra de layout",
      matchesPlayed: "Partidas jogadas",
      winRate: "Taxa de vitórias combinada",
      streak: "Sequência ativa no torneio",
      rosterHeading: "Matriz do plantel de 5 jogadores",
      openSeat: "Lugar aberto {seat}",
      noPlayer: "Nenhum jogador guardado",
      previous: "Clã anterior",
      count: "Clã {index} de {total}",
      next: "Clã seguinte",
      close: "Fechar perfil",
      disclosure:
        "Maqueta de teste: todas as configurações de sistema, inventários de jogadores e variáveis de base de dados neste perfil são amostras conceptuais de layout de pré-inscrição. Nenhum cliente anti-cheat está em execução, nenhum hardware é guardado e estes valores não são resultados de partidas.",
    },
    player: {
      level: "NÍV. {level} · RP {rating}",
      record: "V–D {wins}–{losses}",
      kdNotStored: "K/D não guardado",
      openProfileAria: "Abrir o perfil de {name}",
      openProfile: "Abrir perfil",
      badge: "PRONTO / CONFORME ANTI-CHEAT",
      badgeNote: "Amostra de layout · não é uma verificação ao vivo",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Rato",
        dpi: "DPI",
        keyboard: "Teclado",
        monitor: "Monitor",
        headset: "Auscultadores",
      },
    },
  },
  gearPlaceholder: {
    processor: "Marcador · CPU não recolhido",
    gpu: "Marcador · GPU não recolhida",
    mouse: "Marcador · modelo de rato não recolhido",
    dpi: "Marcador · DPI não recolhido",
    keyboard: "Marcador · não recolhido",
    monitor: "Marcador · Hz não recolhido",
    headset: "Marcador · não recolhido",
  },
  profileDisclosure:
    "A A.C.E. não guarda inventários de hardware e não executa um cliente anti-cheat. Os gráficos de tendência de desempenho e a matriz de combate exigem uma sessão A.C.E. Plus ou Premium. Uma ligação de perfil Steam escrita nesta página não é guardada e não é um identificador oficial.",
  errors: {
    signInRequired: "É necessário iniciar sessão.",
    nameLength: "Os nomes de equipa têm de ter entre 2 e 32 caracteres.",
    alreadyCaptain: "Esta conta já é capitã de uma equipa.",
    nameTaken: "Já existe uma equipa com esse nome.",
    idRequired: "É necessário um SteamID ou um ID de conta A.C.E.",
    noAccountForToken: "Não existe nenhuma conta A.C.E. para esse SteamID ou ID de conta.",
    clanNeedsFour: "Um clã de cinco jogadores precisa do capitão com sessão iniciada e de mais quatro SteamIDs.",
    seatNeedsId: "Cada um dos quatro lugares precisa de um SteamID ou de um ID de conta A.C.E.",
    seatsDistinct: "Cada lugar precisa de um jogador diferente.",
    captainHoldsSeat: "O capitão já ocupa o lugar 1. Use outros quatro jogadores.",
    fewerThanFour: "Esses IDs pertencem a menos de quatro contas.",
    selfInvite: "Um capitão não pode convidar a sua própria conta.",
    captainOnly: "Só o capitão designado pode enviar convites.",
    rosterLimit: "Um plantel de CS2 tem cinco jogadores, incluindo o capitão.",
    alreadyOnRoster: "Esse jogador já está no plantel.",
    noAccountForId: "Não existe nenhuma conta A.C.E. para esse ID.",
    inviteNotFound: "Convite não encontrado.",
    inviteNotPending: "Este convite já não está pendente.",
    rosterFull: "O plantel já está completo.",
    createFailed: "Não foi possível criar a equipa.",
    inviteFailed: "O convite falhou.",
    updateInviteFailed: "Não foi possível atualizar o convite.",
  },
};
