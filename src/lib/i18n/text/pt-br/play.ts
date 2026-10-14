import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Jogar",
    description: "O pareamento ranqueado 5v5 fica fechado em caso de falha até o Anti-Cheat ser real.",
  },
  boards: {
    label: "Modalidades de fila",
    title: "Três modalidades 5v5",
    note: "A escolha fica nesta página. A busca ranqueada está fechada, e escolher uma modalidade não procura adversários.",
    items: {
      open: {
        name: "Modalidade Aberta",
        rules: [
          "Grupo de qualquer tamanho, até cinco",
          "Sem faixa de rating",
          "O Steam OpenID é a verificação de identidade",
          "Pensada para treino aberto quando existir uma fila",
        ],
      },
      calibration: {
        name: "Modalidade de Calibração",
        rules: [
          "Solo, dupla ou trio",
          "Uma faixa planejada de {points} pontos de rating",
          "Um perfil Steam já precisa estar salvo",
          "Usa a regra de rating da A.C.E., sem busca ao vivo",
        ],
      },
      elite: {
        name: "Modalidade Elite",
        rules: [
          "Solo ou dupla",
          "Uma faixa planejada de {points} pontos de rating",
          "A assinatura salva precisa ser Plus ou Premium",
          "Entrada escrita mais rígida. Nenhuma premiação vinculada",
        ],
      },
    },
  },
  veto: {
    kicker: "VETO DE MAPAS",
    title: "Escolha o mapa",
    lede: "Recuse mapas até sobrar um. Este lobby não inicia o Counter-Strike 2 e não abre um servidor.",
    mapSelected: "Mapa selecionado: {map}",
    yourBan: "Seu veto",
    opponentBan: "Veto do adversário",
    selected: "Selecionado",
    declined: "Recusado",
    decline: "Recusar",
    reset: "Reiniciar veto",
    declinedToast: "{map} foi recusado. Esta página não abre um servidor.",
    lockKicker: "LAYOUT 5v5",
    lockTitle: "{map} é o mapa restante",
    lockBody:
      "O elenco abaixo é um layout. Esta página não carrega uma partida competitiva, não coloca jogadores em um jogo e não envia endereço de servidor.",
    close: "Fechar",
  },
  arena: {
    ariaLabel: "Prévia do layout de partida encontrada",
    captain: "Capitão",
    ping: "Ping {ping}",
    mapPlates: "Placas de mapa",
    selectMap: "Selecionar a placa de mapa de layout {map}",
    settings: {
      region: "Região",
      mode: "Modo",
      antiCheat: "Anti-Cheat",
      simulator: "Simulador",
    },
    chat: {
      title: "CHAT DA EQUIPE",
      kicker: "TERMINAL SIMULADO · SEM REDE",
      captainName: "{name} (Capitão)",
      layoutName: "{name} (layout)",
      samples: ["gl hf", "bora pra cima", "a dust 2 é boa pra gente", "pronto"],
      inputLabel: "Mensagem de chat de layout",
      placeholder: "Mensagem para a equipe… (apenas layout)",
      send: "Adicionar linha de chat de layout",
    },
    tiles: {
      map: "Mapa",
      server: "Servidor",
      serverValue: "EU West · {ping} (amostra)",
      mode: "Modo",
    },
    identity: {
      title: "VERIFICAÇÃO DE IDENTIDADE",
      kicker: "VERIFICAÇÕES DE LAYOUT · NÃO SÃO PROVEDORES AO VIVO",
      rows: [
        "Código de e-mail verificado (layout)",
        "Código SMS de telefone verificado (layout)",
        "Face scan ao vivo verificado (layout)",
      ],
    },
    security: {
      title: "SEGURANÇA DA PARTIDA",
      kicker: "SIMULADOR · IA NÃO IMPLANTADA",
      rows: [
        "Proteção Anti-Cheat — pulso de layout",
        "Verificação de integridade do servidor — simulada",
        "Dados da partida criptografados — conceitual",
      ],
    },
    findMatchReason: "ENCONTRAR PARTIDA não pode abrir um servidor de CS2 ao vivo. O modo ranqueado está fechado em caso de falha. População: 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} não está neste elenco de layout.",
    banner: "LAYOUT DA ARENA · NENHUMA PARTIDA AO VIVO",
    mapPlate: "PLACA DE MAPA · DUST II · SEM SERVIDOR 128-TICK",
    rosterNote: "Apelidos de layout. Não é um elenco conectado.",
    teamA: "EQUIPE A · TACTICAL ALLIANCE",
    teamB: "EQUIPE B · SHADOW LEGION",
    clockLabel: "RELÓGIO DE LAYOUT",
    clockNote: "Este relógio roda em loop. A fila está fechada.",
    chatKicker: "CHAT DA EQUIPE",
    chatLines: [
      "Segurando o layout até o relógio reiniciar.",
      "Dust II é uma placa de mapa nesta página.",
      "Nenhum servidor está conectado a este elenco.",
    ],
    chatField: "As mensagens não são enviadas.",
    identityKicker: "GRADE DE IDENTIDADE",
    identityRows: [
      "O e-mail com o ticket da partida não é enviado.",
      "Nenhuma verificação de kernel está em execução.",
      "Nenhum fluxo de telemetria ao vivo está conectado.",
    ],
    findMatch: "ENCONTRAR PARTIDA COMPETITIVA",
    closedNotice: "Este botão não abre um servidor. A fila ranqueada está fechada. População: 0.",
  },
};
