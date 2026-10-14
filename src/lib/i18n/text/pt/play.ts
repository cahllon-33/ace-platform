import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  meta: {
    title: "Jogar",
    description: "O matchmaking ranqueado 5v5 está fechado em caso de falha até o Anti-Cheat ser real.",
  },
  boards: {
    label: "Quadros de fila",
    title: "Três quadros 5v5",
    note: "A escolha fica nesta página. A procura ranqueada está fechada, e escolher um quadro não procura adversários.",
    items: {
      open: {
        name: "Quadro Aberto",
        rules: [
          "Um grupo de qualquer tamanho, até cinco",
          "Sem intervalo de pontuação",
          "O Steam OpenID é a verificação de identidade",
          "Pensado para treino aberto quando existir uma fila",
        ],
      },
      calibration: {
        name: "Quadro de Calibração",
        rules: [
          "Sozinho, em dupla ou em trio",
          "Um intervalo planeado de {points} pontos de pontuação",
          "Um perfil Steam já tem de estar guardado",
          "Usa a regra de pontuação da A.C.E., sem procura ao vivo",
        ],
      },
      elite: {
        name: "Quadro de Elite",
        rules: [
          "Sozinho ou em dupla",
          "Um intervalo planeado de {points} pontos de pontuação",
          "A subscrição guardada tem de ser Plus ou Premium",
          "Entrada escrita mais rigorosa. Não há prize pool associado",
        ],
      },
    },
  },
  veto: {
    kicker: "VETO DE MAPAS",
    title: "Escolha o mapa",
    lede: "Recuse mapas até restar apenas um. Este lobby não inicia o Counter-Strike 2 e não abre um servidor.",
    mapSelected: "Mapa selecionado: {map}",
    yourBan: "O seu veto",
    opponentBan: "Veto do adversário",
    selected: "Selecionado",
    declined: "Recusado",
    decline: "Recusar",
    reset: "Repor veto",
    declinedToast: "{map} foi recusado. Esta página não abre um servidor.",
    lockKicker: "LAYOUT 5v5",
    lockTitle: "{map} é o mapa restante",
    lockBody:
      "O plantel abaixo é um layout. Esta página não carrega uma partida competitiva, não coloca jogadores num jogo e não envia um endereço de servidor.",
    close: "Fechar",
  },
  arena: {
    ariaLabel: "Pré-visualização do layout de partida encontrada",
    captain: "Capitão",
    ping: "Ping {ping}",
    mapPlates: "Placas de mapas",
    selectMap: "Selecionar a placa de layout do mapa {map}",
    settings: {
      region: "Região",
      mode: "Modo",
      antiCheat: "Anti-Cheat",
      simulator: "Simulador",
    },
    chat: {
      title: "CHAT DA EQUIPA",
      kicker: "TERMINAL FICTÍCIO · SEM REDE",
      captainName: "{name} (Capitão)",
      layoutName: "{name} (layout)",
      samples: ["boa sorte, divirtam-se", "vamos a isso", "a dust 2 dá-nos jeito", "pronto"],
      inputLabel: "Mensagem de chat de layout",
      placeholder: "Mensagem para a equipa… (apenas layout)",
      send: "Adicionar linha de chat de layout",
    },
    tiles: {
      map: "Mapa",
      server: "Servidor",
      serverValue: "Europa Ocidental · {ping} (amostra)",
      mode: "Modo",
    },
    identity: {
      title: "VERIFICAÇÃO DE IDENTIDADE",
      kicker: "VERIFICAÇÕES DE LAYOUT · NÃO SÃO FORNECEDORES REAIS",
      rows: [
        "Código de e-mail verificado (layout)",
        "Código SMS do telemóvel verificado (layout)",
        "Face scan ao vivo verificado (layout)",
      ],
    },
    security: {
      title: "SEGURANÇA DA PARTIDA",
      kicker: "SIMULADOR · IA NÃO IMPLEMENTADA",
      rows: [
        "Proteção Anti-Cheat — pulso de layout",
        "Verificação de integridade do servidor — fictícia",
        "Dados da partida encriptados — conceptual",
      ],
    },
    findMatchReason: "ENCONTRAR PARTIDA não consegue abrir um servidor CS2 ao vivo. O ranqueado está fechado em caso de falha. A população é 0.",
  },
  matchFound: {
    ariaSignedIn: "{title}. {name} não está colocado neste plantel de layout.",
    banner: "LAYOUT DA ARENA · SEM PARTIDA AO VIVO",
    mapPlate: "PLACA DE MAPA · DUST II · SEM SERVIDOR DE 128 TICKS",
    rosterNote: "Nomes de código de layout. Não é um plantel ligado.",
    teamA: "EQUIPA A · TACTICAL ALLIANCE",
    teamB: "EQUIPA B · SHADOW LEGION",
    clockLabel: "RELÓGIO DE LAYOUT",
    clockNote: "Este relógio repete-se. A fila está fechada.",
    chatKicker: "CHAT DA EQUIPA",
    chatLines: [
      "A segurar o layout até o relógio reiniciar.",
      "A Dust II é uma placa de mapa nesta página.",
      "Nenhum servidor está ligado a este plantel.",
    ],
    chatField: "As mensagens não são enviadas.",
    identityKicker: "GRELHA DE IDENTIDADE",
    identityRows: [
      "Não é enviado nenhum e-mail de bilhete de partida.",
      "Nenhuma verificação de kernel está em execução.",
      "Nenhum fluxo de telemetria ao vivo está ligado.",
    ],
    findMatch: "ENCONTRAR PARTIDA COMPETITIVA",
    closedNotice: "Este botão não abre um servidor. A fila ranqueada está fechada. A população é 0.",
  },
};
