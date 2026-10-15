import type { TextBag } from "../types";

export const play: TextBag["play"] = {
  "premium": {
    "tag": "PREMIUM",
    "sample": "AMOSTRA PREMIUM",
    "note": "Os lugares marcados como Amostra Premium mostram a arte de patente ilustrada Premium apenas para demonstração. São jogadores de amostra, não assinantes. A arte Premium é apenas cosmética e nunca altera a classificação nem o matchmaking.",
    "artAlt": "Arte de patente ilustrada Premium {rank}"
  },
  "room": {
    "showcaseTag": "MOSTRA · Jogadores de exemplo, não é uma partida em direto. A fila está fechada.",
    "showcaseShort": "MOSTRA",
    "queueClosed": "FILA FECHADA",
    "floorRp": "Piso do rank {rp} RP",
    "yourRp": "{rp} RP",
    "avatarAlt": "Avatar de {name}",
    "sampleChat": "Linhas de exemplo. Não enviadas, não em direto.",
    "sampleLine": "EXEMPLO",
    "operatorA": "Arte original de operador A.C.E para a Equipa A: um operador tático de capacete com equipamento grafite e detalhes dourados",
    "operatorB": "Arte original de operador A.C.E para a Equipa B: um combatente rebelde encapuzado com equipamento grafite e detalhes dourados",
    "artNote": "Arte original de personagens A.C.E. Não são modelos do jogo."
  },
  "meta": {
    "title": "Jogar",
    "description": "O matchmaking classificativo 5v5 abre quando o anti-cheat A.C.E Shield estiver ativo."
  },
  "boards": {
    "label": "Quadros de fila",
    "title": "Três quadros 5v5",
    "note": "A escolha fica nesta página. A procura ranqueada está fechada, e escolher um quadro não procura adversários.",
    "items": {
      "open": {
        "name": "Quadro Aberto",
        "rules": [
          "Um grupo de qualquer tamanho, até cinco",
          "Sem intervalo de pontuação",
          "O Steam OpenID é a verificação de identidade",
          "Pensado para treino aberto quando existir uma fila"
        ]
      },
      "calibration": {
        "name": "Quadro de Calibração",
        "rules": [
          "Sozinho, em dupla ou em trio",
          "Um intervalo planeado de {points} pontos de pontuação",
          "Um perfil Steam já tem de estar guardado",
          "Usa a regra de classificação A.C.E. · pesquisa em breve"
        ]
      },
      "elite": {
        "name": "Quadro de Elite",
        "rules": [
          "Sozinho ou em dupla",
          "Um intervalo planeado de {points} pontos de pontuação",
          "A subscrição guardada tem de ser Plus ou Premium",
          "Entrada escrita mais rigorosa. Não há prize pool associado"
        ]
      }
    }
  },
  "veto": {
    "kicker": "VETO DE MAPAS",
    "title": "Escolha o mapa",
    "lede": "Recuse mapas até restar apenas um. Este lobby não inicia o Counter-Strike 2 e não abre um servidor.",
    "mapSelected": "Mapa selecionado: {map}",
    "yourBan": "O seu veto",
    "opponentBan": "Veto do adversário",
    "selected": "Selecionado",
    "declined": "Recusado",
    "decline": "Recusar",
    "reset": "Repor veto",
    "declinedToast": "{map} foi recusado. Esta página não abre um servidor.",
    "lockKicker": "SALA DE JOGO 5v5",
    "lockTitle": "{map} é o mapa restante",
    "lockBody": "A sua sala de jogo. Os jogos competitivos começam aqui quando a beta competitiva abrir.",
    "close": "Fechar"
  },
  "arena": {
    "ariaLabel": "Pré-visualização da sala de jogo",
    "captain": "Capitão",
    "mapPlates": "Placas de mapas",
    "selectMap": "Selecionar {map}",
    "settings": {
      "region": "Região",
      "mode": "Modo",
      "antiCheat": "Anti-Cheat",
      "simulator": "Pré-visualização"
    },
    "chat": {
      "title": "CHAT DA EQUIPA",
      "kicker": "CHAT DA EQUIPA · EM BREVE",
      "captainName": "{name} (Capitão)",
      "layoutName": "{name}",
      "samples": [
        "boa sorte, divirtam-se",
        "vamos a isso",
        "a dust 2 dá-nos jeito",
        "pronto"
      ],
      "inputLabel": "Mensagem do chat da equipa",
      "placeholder": "Mensagem para a equipa…",
      "send": "Enviar"
    },
    "tiles": {
      "map": "Mapa",
      "server": "Servidor",
      "serverValue": "EU Oeste · em breve",
      "mode": "Modo"
    },
    "identity": {
      "title": "VERIFICAÇÃO DE IDENTIDADE",
      "kicker": "VERIFICAÇÕES DE IDENTIDADE · EM BREVE",
      "rows": [
        "Verificação de e-mail · em breve",
        "Verificação de telefone · em breve",
        "Verificação facial · em breve"
      ]
    },
    "security": {
      "title": "SEGURANÇA DA PARTIDA",
      "kicker": "A.C.E SHIELD · EM DESENVOLVIMENTO",
      "rows": [
        "Proteção anti-cheat · em desenvolvimento",
        "Verificação de integridade do servidor · em desenvolvimento",
        "Encriptação dos dados do jogo · em desenvolvimento"
      ]
    },
    "findMatchReason": "O matchmaking abre com a beta competitiva. As filas classificativas ainda não estão em funcionamento."
  }
};
