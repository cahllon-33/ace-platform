import type { TextBag } from "../types";

export const ranks: TextBag["ranks"] = {
  meta: {
    title: "Ranks competitivos",
    description:
      "Dez ranks A.C.E. em um giratório 3D de CSS que gira ao arrastar. Modelos GLTF do estúdio podem substituir as imagens fixas quando forem entregues.",
  },
  hero: {
    kicker: "CALIBRAÇÃO",
    title: "Ranks competitivos",
    lede: "De Recruit até A.C.E. Legend, divisões {divisions}. Cada emblema é uma imagem conceitual em um giratório 3D de CSS (arraste ou use as setas do teclado). Um GLTF poderá ser colocado depois no espaço documentado — ainda não há arquivos de modelo no repositório. O rating mostrado é o da sua conta real quando você está conectado; caso contrário, é o piso de calibração.",
  },
  codexLink: "Abrir o Códice de Calibração",
  document: {
    title: "Documento de calibração em dez patentes",
    body: "Os nomes do motor formam a escada oficial. Os apelidos de cristal são arte do lobby. As fichas de taxa de vitórias no quadro são amostras de vitrine, não pareamento ao vivo. Cosméticos pagos nunca movem um jogador entre esses patamares.",
    level: "NÍVEL {level} · {crystal}",
    detail: "Rating mínimo {rating}. Estudo de material: {material}.",
  },
  tiers: {
    1: { tagline: "CALIBRAÇÃO INICIAL", material: "Textura de placa de ferro bruto / obsidiana" },
    2: { tagline: "OPERADOR DE CAMPO", material: "Núcleo de cristal de bronze escovado" },
    3: { tagline: "LINHA DE FRENTE", material: "Fragmentos de ouro rosé com nuances vermelho-escuras profundas" },
    4: { tagline: "OFÍCIO DE PRECISÃO", material: "Bloco de fragmentos de diamante em prata cromada" },
    5: { tagline: "NÚCLEO EXPERIENTE", material: "Aura de núcleo fundido de latão envelhecido" },
    6: { tagline: "PADRÃO OURO", material: "Brilho de cristal em fragmentos de ouro vibrante" },
    7: { tagline: "ASCENSÃO CIANO", material: "Matriz de cristal de plasma azul-ciano" },
    8: { tagline: "TEMPESTADE DE SAFIRA", material: "Núcleo de cristal relâmpago azul-safira hiperluminoso" },
    9: { tagline: "COROA DO VAZIO", material: "Núcleo de fragmentos estelares roxo do vazio cósmico profundo" },
    10: { tagline: "A ELITE DA ELITE", material: "Estrutura de coroa de ouro radiante fundido de luxo" },
  },
  board: {
    selectEmblem: "Selecionar o emblema do rank A.C.E. {name}, nível {level}",
    emblemAlt: "Emblema de perfil cristalino 3D personalizado A.C.E., nível {level}, {crystal}, {name}",
    emblemAltLegend: "Emblema de perfil cristalino 3D personalizado A.C.E., nível {level}",
    premium: "PREMIUM",
  },
  division: {
    label: "Divisão {division}",
    select: "Selecionar a divisão {division}",
    summary: "{divisions} divisões cada / {levels} níveis no total",
  },
  card: {
    rank: "Rank {level}",
    targetWinRate: "Meta de {winRate} de vitórias",
    calibrationTarget: "Meta de calibração",
    floor: "Piso",
    samplesNote: "Amostras de layout. Não é telemetria ao vivo.",
    progressMockup: "Simulação de progresso",
  },
  turntable: {
    stageLabel: "Emblema orbital {name}. Arraste para girar.",
    dragToRotate: "ARRASTE PARA GIRAR",
    rankSystem: "SISTEMA DE RANKS",
  },
  emblem: {
    kicker: "Marca de calibração",
    rankLabel: "Rank {level} · {name}",
  },
  calibration: {
    placementNote:
      "{complete} / {total} marcas de colocação são preenchidas a partir das vitórias e derrotas salvas. Estes nós não iniciam uma partida.",
  },
};
