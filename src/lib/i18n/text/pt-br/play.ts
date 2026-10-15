import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  room: {
    "showcaseTag": "VITRINE · Jogadores de exemplo, não é uma partida ao vivo. A fila está fechada.",
    "showcaseShort": "VITRINE",
    "queueClosed": "FILA FECHADA",
    "floorRp": "Piso do rank {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar de {name}",
    "sampleChat": "Linhas de exemplo. Não enviadas, não ao vivo.",
    "sampleLine": "EXEMPLO",
    "operatorA": "Arte original de operador A.C.E para o Time A: um operador tático de capacete com equipamento grafite e detalhes dourados",
    "operatorB": "Arte original de operador A.C.E para o Time B: um combatente rebelde encapuzado com equipamento grafite e detalhes dourados",
    "artNote": "Arte original de personagens A.C.E. Não são modelos do jogo."
  },
  meta: {
    title: "Jogar",
    description: "O matchmaking ranqueado 5v5 abre quando o anti-cheat A.C.E Shield estiver ativo.",
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
          "Usa a regra de classificação A.C.E. · busca em breve",
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
    lockKicker: "SALA DE PARTIDA 5v5",
    lockTitle: "{map} é o mapa restante",
    lockBody:
      "Sua sala de partida. As partidas competitivas começam aqui quando a beta competitiva abrir.",
    close: "Fechar",
  },
  arena: {
    ariaLabel: "Prévia da sala de partida",
    captain: "Capitão",
    ping: "Ping {ping}",
    mapPlates: "Placas de mapa",
    selectMap: "Selecionar {map}",
    settings: {
      region: "Região",
      mode: "Modo",
      antiCheat: "Anti-Cheat",
      simulator: "Prévia",
    },
    chat: {
      title: "CHAT DA EQUIPE",
      kicker: "CHAT DA EQUIPE · EM BREVE",
      captainName: "{name} (Capitão)",
      layoutName: "{name}",
      samples: ["gl hf", "bora pra cima", "a dust 2 é boa pra gente", "pronto"],
      inputLabel: "Mensagem do chat da equipe",
      placeholder: "Mensagem para a equipe…",
      send: "Enviar",
    },
    tiles: {
      map: "Mapa",
      server: "Servidor",
      serverValue: "EU Oeste · em breve",
      mode: "Modo",
    },
    identity: {
      title: "VERIFICAÇÃO DE IDENTIDADE",
      kicker: "VERIFICAÇÕES DE IDENTIDADE · EM BREVE",
      rows: [
        "Verificação de e-mail · em breve",
        "Verificação de telefone · em breve",
        "Verificação facial · em breve",
      ],
    },
    security: {
      title: "SEGURANÇA DA PARTIDA",
      kicker: "A.C.E SHIELD · EM DESENVOLVIMENTO",
      rows: [
        "Proteção anti-cheat · em desenvolvimento",
        "Verificação de integridade do servidor · em desenvolvimento",
        "Criptografia dos dados da partida · em desenvolvimento",
      ],
    },
    findMatchReason: "O matchmaking abre com a beta competitiva. As filas ranqueadas ainda não estão funcionando.",
  },
};
