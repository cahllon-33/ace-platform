import type { TextBag } from "../types";

export const teams: TextBag["teams"] = {
  meta: {
    title: "Gestão de esquadrões A.C.E.",
    description:
      "Espaço conceitual de esquadrões 5v5. Elencos, agentes livres e emblemas de anti-cheat são layouts de prévia. Convites ao vivo exigem uma sessão Steam verificada.",
  },
  hero: {
    kicker: "EQUIPES",
    title: "Esquadrões",
    lede: "Cinco vagas abertas lado a lado. Um clã só é salvo depois do login com a Steam e da criação de uma equipe.",
  },
  gate: {
    kickerPremium: "Depois da carta Premium",
    kickerDefault: "Registro do clã",
    title: "Vocês são uma equipe de cinco?",
    intro:
      "A vaga 1 é o jogador conectado pela Steam. As vagas 2 a 5 já precisam ter contas A.C.E. Salvar um clã não cobra $7.00, não envia e-mail e não coloca o clã na chave de 100 equipes.",
    yes: "Sim, cinco jogadores",
    no: "Não, deixar as vagas abertas",
    seatsOpen: "As cinco vagas continuam abertas. Nada foi salvo.",
    connectSteam:
      "Conecte a Steam primeiro. O botão volta para esta página. A A.C.E. nunca pede a senha da Steam.",
    alreadyMember: "{name} já faz parte de {team}. Este formulário não cria um segundo clã.",
    thisAccount: "Esta conta",
    acceptTerms: "Aceite os termos antes de salvar um clã.",
    notStored: "O clã não foi salvo.",
    clanName: "Nome do clã",
    captainSeat: "Vaga 1, capitão: {name}",
    signedInSteam: "Conta Steam conectada",
    seatLabel: "SteamID ou ID da conta A.C.E. da vaga {seat}",
    submit: "Salvar o clã de cinco jogadores",
    saved:
      "O nome do clã foi salvo e quatro convites estão pendentes. Esses jogadores não estão no elenco até aceitarem. Isto não é uma vaga na chave de 100 equipes. Nada foi cobrado.",
  },
  squadDesk: {
    kicker: "Central do esquadrão",
    title: "Perguntas sobre as regras escritas",
    intro:
      "Esta central lê apenas os fatos publicados nesta página. Ela não detecta cheats, não abre partidas e não altera contas.",
    questionLabel: "Pergunta",
    placeholder: "Pergunte sobre as cinco vagas, a carta de $7 ou o suporte",
    ask: "Perguntar",
    fallback:
      "Esta central só responde com base nas regras escritas desta página: a carta Premium, as cinco vagas, o Steam OpenID e o Suporte.",
    facts: {
      email: "Nenhum e-mail é enviado. A carta Premium fica em /premium/receipt.",
      charge:
        "Nada é cobrado. O Premium a $7.00 por mês é um preço de exibição. O pagamento não está ativo, e o plano salvo não muda.",
      board:
        "Um clã salvo é um registro de elenco. Ele não é colocado na chave de 100 equipes. Essa chave continua mostrando 0 inscritas até uma temporada abrir.",
      steam:
        "O login usa o Steam OpenID oficial. A A.C.E. nunca pede a senha da Steam. A partir desta página, a Steam retorna para cá.",
      roster:
        "A vaga 1 é o capitão conectado. As vagas 2 a 5 já precisam ter contas A.C.E. Os convites ficam pendentes até cada jogador aceitar.",
      badge:
        "O emblema em uma vaga é uma amostra de layout. Não é uma verificação de anti-cheat ao vivo, e nada é baixado.",
      support:
        "Abra Suporte ou Contato neste site. Uma solicitação de suporte não abre um chamado, e o texto digitado em Contato não é entregue.",
      rating:
        "Um rating novo começa em 1.000. Esta página não vende rating, não abre fila, não conecta servidor de CS2 e não entrega prêmio.",
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
    noAgents: "Ainda não há jogadores sem equipe salvos.",
    notice:
      "Os convites só são enviados por um capitão conectado. O emblema em uma vaga não é uma verificação de anti-cheat ao vivo.",
  },
  tournaments: {
    meta: {
      title: "Campeonato A.C.E. — Mata-mata de elite com 100 equipes",
      description:
        "Layout de mata-mata com 100 equipes. Clique em um clã para abrir o elenco e depois abra o perfil de cada jogador. Inscrições: 0 de 100.",
    },
    intro: {
      title: "CAMPEONATO A.C.E. — MATA-MATA DE ELITE COM 100 EQUIPES",
      lede: "O campo publicado é um mata-mata com 100 equipes. O gráfico abaixo é esse layout. Clicar em um clã abre a gaveta do elenco. Inscrições: 0 de 100. Nenhum prêmio em dinheiro é anunciado ou financiado.",
      formatValue: "Matriz de chave com 100 equipes",
      briefTitle: "Briefing de operações com 100 equipes",
      briefBody:
        "Um único layout competitivo cobre todo o campo de 100 equipes. Quando as inscrições abrirem, os primeiros 28 clãs aceitos recebem bye na rodada 1 e avançam para a rodada 2. Os outros 72 clãs jogam a rodada 1. Os nomes nas vagas não preenchidas são rótulos provisórios, não inscritos reais. O regulamento completo fica abaixo da árvore. Nenhum lobby de partida está aberto e nenhuma premiação é financiada.",
    },
    timeline: {
      ariaLabel: "Cronograma de lançamento do torneio",
      kicker: "ROTEIRO DO CAMPEONATO",
      title: "CRONOGRAMA DE LANÇAMENTO DO TORNEIO",
      stageLabel: "Etapa {id}",
      stages: {
        registrations: { title: "Inscrições abertas", state: "PULSO DE PRÉVIA" },
        calibration: { title: "Chaves regionais de calibração", state: "BLOQUEADO" },
        quarterFinals: { title: "Quartas de final Elite Pro", state: "BLOQUEADO" },
        finals: { title: "Grande final Apex", state: "BLOQUEADO" },
      },
      disclaimer:
        "A etapa 01 pulsa como prévia de layout. As inscrições não estão abertas (0 de 100). As etapas 02–04 estão bloqueadas. A Grande final Apex inclui apenas um valor conceitual de $50,000 — nenhuma premiação é financiada.",
    },
    bracket: {
      kicker: "Mata-mata com 100 equipes · prévia de layout",
      title: "Matriz de chave com 100 equipes",
      statusUnavailable:
        "O PostgreSQL não está conectado. As 100 vagas de competidores usam nomes de clãs provisórios, não equipes inscritas. Os placares das séries continuam em 0.",
      statusEmpty:
        "Ainda não há clãs salvos. Os 100 nomes de competidores são um layout provisório. Não são um campo com presença confirmada.",
      statusStored:
        "{count} clãs do banco de dados são colocados primeiro. As vagas restantes usam nomes provisórios. As rodadas seguintes continuam abertas até as partidas serem registradas.",
      openSlot: "Vaga aberta",
      openCompetitorSlot: "Vaga de competidor aberta",
      openRoster: "Abrir o elenco de {name}",
      bye: "👑 [BYE - CLASSIFICADO PARA A RODADA 2]",
      championStage: "PALCO DO CAMPEÃO",
      leftWing: "Lado esquerdo",
      rightWing: "Lado direito",
      emptySlotNotice: "Esta vaga de competidor está vazia. Ainda não há clã salvo.",
      grandFinalNotice: "A grande final continua aberta até as duas semifinais serem registradas.",
      rounds: {
        r128: "R1",
        r64: "R64",
        r32: "R32",
        r16: "R16",
        qf: "QF",
        sf: "SF",
      },
    },
    profile: {
      closeBackdrop: "Fechar o perfil da equipe",
      kicker: "Perfil principal do campeonato · amostra de layout",
      matchesPlayed: "Partidas jogadas",
      winRate: "Taxa de vitórias combinada",
      streak: "Sequência ativa no torneio",
      rosterHeading: "Matriz do elenco de 5 jogadores",
      openSeat: "Vaga aberta {seat}",
      noPlayer: "Nenhum jogador salvo",
      previous: "Clã anterior",
      count: "Clã {index} de {total}",
      next: "Próximo clã",
      close: "Fechar perfil",
      disclosure:
        "Simulação de teste: todas as configurações de sistema, inventários de jogadores e variáveis de banco de dados neste perfil são amostras conceituais de layout de pré-inscrição. Nenhum cliente anti-cheat está em execução, nenhum hardware é armazenado, e estes números não são resultados de partidas.",
    },
    player: {
      level: "NÍV. {level} · RP {rating}",
      record: "V–D {wins}–{losses}",
      kdNotStored: "K/D não armazenado",
      openProfileAria: "Abrir o perfil de {name}",
      openProfile: "Abrir perfil",
      badge: "PRONTO / EM CONFORMIDADE COM O ANTI-CHEAT",
      badgeNote: "Amostra de layout · não é uma verificação ao vivo",
      gear: {
        processor: "CPU",
        gpu: "GPU",
        mouse: "Mouse",
        dpi: "DPI",
        keyboard: "Teclado",
        monitor: "Monitor",
        headset: "Headset",
      },
    },
  },
  gearPlaceholder: {
    processor: "Marcador · CPU não coletada",
    gpu: "Marcador · GPU não coletada",
    mouse: "Marcador · modelo do mouse não coletado",
    dpi: "Marcador · DPI não coletado",
    keyboard: "Marcador · não coletado",
    monitor: "Marcador · Hz não coletado",
    headset: "Marcador · não coletado",
  },
  profileDisclosure:
    "A A.C.E. não armazena inventários de hardware e não executa um cliente anti-cheat. Os gráficos de tendência de desempenho e a matriz de combate exigem uma sessão A.C.E. Plus ou Premium. Um link de perfil Steam digitado nesta página não é salvo e não é um identificador oficial.",
  errors: {
    signInRequired: "É necessário fazer login.",
    nameLength: "O nome da equipe deve ter entre 2 e 32 caracteres.",
    alreadyCaptain: "Esta conta já é capitã de uma equipe.",
    nameTaken: "Já existe uma equipe com esse nome.",
    idRequired: "É necessário um SteamID ou um ID de conta A.C.E.",
    noAccountForToken: "Não existe conta A.C.E. para esse SteamID ou ID de conta.",
    clanNeedsFour: "Um clã de cinco jogadores precisa do capitão conectado e de mais quatro SteamIDs.",
    seatNeedsId: "Cada uma das quatro vagas precisa de um SteamID ou de um ID de conta A.C.E.",
    seatsDistinct: "Cada vaga precisa de um jogador diferente.",
    captainHoldsSeat: "O capitão já ocupa a vaga 1. Use outros quatro jogadores.",
    fewerThanFour: "Esses IDs pertencem a menos de quatro contas.",
    selfInvite: "Um capitão não pode convidar a própria conta.",
    captainOnly: "Somente o capitão designado pode enviar convites.",
    rosterLimit: "Um elenco de CS2 tem cinco jogadores, incluindo o capitão.",
    alreadyOnRoster: "Esse jogador já está no elenco.",
    noAccountForId: "Não existe conta A.C.E. para esse ID.",
    inviteNotFound: "Convite não encontrado.",
    inviteNotPending: "Este convite não está mais pendente.",
    rosterFull: "O elenco já está completo.",
    createFailed: "Não foi possível criar a equipe.",
    inviteFailed: "O convite falhou.",
    updateInviteFailed: "Não foi possível atualizar o convite.",
  },
};
