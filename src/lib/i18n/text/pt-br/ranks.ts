import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  "showcase": {
    "rankTier": "Nível de ranque {n}",
    "chip": "Premium",
    "artAlt": "Arte de ranque Premium {rank}"
  },
  "rpRules": {
    "kicker": "REGRAS DE RATING POINTS DA A.C.E",
    "title": "Como os Rating Points mudam",
    "lede": "Regras versão {version}. Cada novo jogador começa com {start} RP no nível 3, {tier}. A escada é lenta de propósito: cada nível acima do meio exige mais vitórias do que o anterior.",
    "tableTitle": "As regras",
    "colRule": "Regra",
    "colValue": "Valor",
    "rStart": "Pontuação inicial",
    "vStart": "{start} RP, nível 3 ({tier})",
    "rWin": "Vitória contra uma time equilibrada",
    "vWin": "+{win} RP",
    "rLoss": "Derrota contra uma time equilibrada",
    "vLoss": "−{loss} RP",
    "rOdds": "Força do adversário",
    "vOdds": "A sua pontuação é comparada com a pontuação média da outra time (escala {scale}). Vencer uma time mais forte dá mais e perder contra ela custa menos; contra uma time mais fraca é o contrário.",
    "rClamp": "Limites por partida",
    "vClamp": "Uma vitória dá de +{winMin} a +{winMax} RP. Uma derrota custa de −{lossMin} a −{lossMax} RP.",
    "rTier": "Vitórias nos níveis altos",
    "vTier": "Os ganhos por vitória são multiplicados por {t7} nos níveis 7–9 e por {t10} no nível 10 ({top}). As derrotas nunca são reduzidas.",
    "rMvp": "MVP da partida",
    "vMvp": "O jogador com mais abates; em caso de empate, mais dano e depois menos mortes. +{mvp} RP numa vitória e menos {mvp} RP perdidos numa derrota, nunca além dos limites por partida. Em breve: o servidor ainda não registra abates, por isso hoje não é aplicado nenhum bônus MVP.",
    "rPlacement": "Colocação",
    "vPlacement": "Suas primeiras {n} partidas. Durante a colocação a sua pontuação não pode subir acima do nível {maxTier} ({cap} RP).",
    "rDraw": "Empate",
    "vDraw": "0 RP para todos.",
    "rAbandon": "Abandonar ou sair de uma partida",
    "vAbandon": "−{abandon} RP, seja qual for o resultado, e sem bônus MVP.",
    "rLimits": "Intervalo de pontuação",
    "vLimits": "De {floor} a {ceiling} RP",
    "rDecay": "Inatividade",
    "vDecay": "Sem decaimento. A sua pontuação não desce enquanto você está ausente.",
    "rPaid": "Planos pagos",
    "vPaid": "Nenhum efeito. Jogadores Free, Plus e Premium seguem exatamente as mesmas regras.",
    "tierTableTitle": "Por nível, contra uma time equilibrada",
    "colTier": "Nível",
    "colFloor": "Desde",
    "colWin": "Vitória",
    "colLoss": "Derrota",
    "examplesTitle": "Exemplos práticos",
    "ex1": "De {start} a {elite} RP ({top}) contra times equilibradas, só com vitórias: {w1} vitórias a +{win} até o nível 6 e depois {w2} vitórias a +{win7} nos níveis 7–9. Ao todo, {total} vitórias.",
    "ex2": "Cada derrota no caminho acrescenta vitórias. Nos níveis 7–9 uma vitória dá +{win7}, mas uma derrota continua custando −{loss}, por isso você precisa vencer pelo menos {breakEven}% das partidas equilibradas para continuar subindo.",
    "ex3": "Contra uma time com mais 200 RP de média do que você, uma vitória dá +{strongWin} e uma derrota custa −{strongLoss}.",
    "ex4": "Contra uma time com menos 200 RP de média do que você, uma vitória dá +{weakWin} e uma derrota custa −{weakLoss}.",
    "note": "Estes números são calculados pelo mesmo código que aplica um resultado de partida verificado. São exemplos, não partidas salvas."
  },
  "premiumCodex": {
    "kicker": "CÓDICE DE RANKS PREMIUM",
    "title": "Códice de ranks Premium",
    "lede": "Dez emblemas de cristal ilustrados, um por rank. É arte de perfil cosmética na mesma escada de Rating Points dos ranks padrão. Não altera o rating, o matchmaking nem a fila.",
    "cosmetic": "Arte cosmética · mesma escada RP · apenas A.C.E Premium US$ 7/mês",
    "imgAlt": "Arte de rank Premium {name}, nível {level}"
  },
  "premiumRanks": {
    "kicker": "RANKS PREMIUM",
    "plan": "A.C.E PREMIUM · somente US$ 7/mês",
    "title": "Arte de rank Premium",
    "lede": "O conjunto original ilustrado de ranks A.C.E: dez emblemas de cristal com divisões III/II/I, o protocolo de rating, o card de detalhe Legend e o visualizador 3D que gira ao arrastar. É arte de perfil para membros Premium. Lê a mesma escada de Rating Points dos ranks padrão e não dá nenhuma vantagem competitiva.",
    "demo": "Valores de demonstração: progresso, taxa de vitórias e divisões neste painel são exemplos, não estatísticas ao vivo. Com login feito, o rating mostrado é o seu rating salvo.",
    "locked": "A arte de rank Premium faz parte do A.C.E Premium, comprado pelo checkout da Paddle. O servidor só a aplica a um perfil quando o plano salvo é Premium.",
    "standardKicker": "RANKS PADRÃO",
    "standardNote": "Todas as contas usam estes emblemas vetoriais 3D.",
    "legendTag": "PREMIUM",
    "pickerTitle": "Arte de rank no seu perfil",
    "pickerStandard": "Padrão",
    "pickerPremium": "Premium",
    "pickerLocked": "A arte de rank Premium é do A.C.E Premium (US$ 7/mês), disponível pelo checkout da Paddle.",
    "pickerSaved": "Salvo.",
    "pickerFailed": "Não salvo. A arte de rank Premium exige A.C.E Premium."
  },
  "meta": {
    "title": "Ranks competitivos",
    "description": "As dez patentes A.C.E, de Iron Recruit a A.C.E Legend, com divisões e pisos de classificação."
  },
  "hero": {
    "kicker": "CALIBRAÇÃO",
    "title": "Ranks competitivos",
    "lede": "Dez patamares de Recruit a A.C.E Legend, cada um com as divisões {divisions}. Arraste ou use as setas para girar um emblema. Conectado, você vê sua própria classificação; senão, o piso de cada patamar."
  },
  "codexLink": "Abrir o Códice de Calibração",
  "document": {
    "title": "Documento de calibração em dez patentes",
    "body": "Os nomes do motor são a escada oficial. Os apelidos de cristal são arte do lobby. As taxas de vitória no quadro são números de vitrine até o lançamento do matchmaking ranqueado. Cosméticos pagos nunca movem um jogador entre esses patamares.",
    "level": "NÍVEL {level} · {crystal}",
    "detail": "Rating mínimo {rating}. Estudo de material: {material}."
  },
  "tiers": {
    "1": {
      "tagline": "CALIBRAÇÃO INICIAL",
      "material": "Textura de placa de ferro bruto / obsidiana"
    },
    "2": {
      "tagline": "OPERADOR DE CAMPO",
      "material": "Núcleo de cristal de bronze escovado"
    },
    "3": {
      "tagline": "LINHA DE FRENTE",
      "material": "Fragmentos de ouro rosé com nuances vermelho-escuras profundas"
    },
    "4": {
      "tagline": "OFÍCIO DE PRECISÃO",
      "material": "Bloco de fragmentos de diamante em prata cromada"
    },
    "5": {
      "tagline": "NÚCLEO EXPERIENTE",
      "material": "Aura de núcleo fundido de latão envelhecido"
    },
    "6": {
      "tagline": "PADRÃO OURO",
      "material": "Brilho de cristal em fragmentos de ouro vibrante"
    },
    "7": {
      "tagline": "ASCENSÃO CIANO",
      "material": "Matriz de cristal de plasma azul-ciano"
    },
    "8": {
      "tagline": "TEMPESTADE DE SAFIRA",
      "material": "Núcleo de cristal relâmpago azul-safira hiperluminoso"
    },
    "9": {
      "tagline": "COROA DO VAZIO",
      "material": "Núcleo de fragmentos estelares roxo do vazio cósmico profundo"
    },
    "10": {
      "tagline": "A ELITE DA ELITE",
      "material": "Estrutura de coroa de ouro radiante fundido de luxo"
    }
  },
  "board": {
    "selectEmblem": "Selecionar o emblema do rank A.C.E {name}, nível {level}",
    "emblemAlt": "Emblema de perfil cristalino 3D personalizado A.C.E, nível {level}, {crystal}, {name}",
    "emblemAltLegend": "Emblema de perfil cristalino 3D personalizado A.C.E, nível {level}",
    "premium": "PATAMAR MÁXIMO"
  },
  "division": {
    "label": "Divisão {division}",
    "select": "Selecionar a divisão {division}",
    "summary": "{divisions} divisões cada / {levels} níveis no total"
  },
  "card": {
    "rank": "Rank {level}",
    "targetWinRate": "Meta de {winRate} de vitórias",
    "floor": "Piso"
  },
  "turntable": {
    "stageLabel": "Emblema orbital {name}. Arraste para girar.",
    "dragToRotate": "ARRASTE PARA GIRAR",
    "rankSystem": "SISTEMA DE RANKS"
  },
  "emblem": {
    "kicker": "Marca de calibração",
    "rankLabel": "Rank {level} · {name}"
  },
  "calibration": {
    "placementNote": "{complete} / {total} marcas de colocação são preenchidas a partir das vitórias e derrotas salvas. Estes nós não iniciam uma partida."
  }
};
