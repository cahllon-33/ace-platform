import type { TextBag } from "../types";

export const codex: TextBag["codex"] = {
  meta: {
    title: "Códice de calibração",
    description:
      "Os ranks da A.C.E. explicados. Cada pergunta abre uma resposta completa sobre os Pontos de Rating e o código daquele rank. O códice não aplica nenhuma partida.",
    articleTitle: "{title} — Códice de calibração",
  },
  groups: {
    ladder: {
      title: "A escada",
      kicker: "Como um rank é lido",
    },
    points: {
      title: "Pontos de Rating",
      kicker: "O único número armazenado",
    },
    ranks: {
      title: "Cada rank",
      kicker: "O código daquela marca",
    },
    desk: {
      title: "A central de partidas",
      kicker: "O que a central pode e não pode fazer",
    },
  },
  index: {
    title: "Códice de calibração",
    lede: "Dez ranks. Um número armazenado. Abra qualquer pergunta para ver a resposta completa. A central de partidas continua nas páginas seguintes.",
    status:
      "Este códice explica a escada escrita. Ele não aplica nenhuma partida e não altera um rating armazenado.",
    searchLabel: "Pesquisar no códice",
    searchPlaceholder: "Tente 1950, Recruit ou empate",
    empty: "Nenhuma entrada corresponde a essa pesquisa.",
    columnLabel: "Coluna A.C.E. {n}",
    pagerLabel: "Páginas do códice",
    first: "Primeira",
    previous: "Anterior",
    next: "Próxima",
    last: "Última",
    pageOf: "Página {n} de {m}",
  },
  article: {
    breadcrumb: "A.C.E. · Códice de calibração",
    status:
      "Esta página explica a escada escrita. Ela não aplica nenhuma partida e não altera um rating armazenado.",
    emblemAlt: "Emblema de {name}, rank {level}",
    emblemCaption: "Rank {level} · {name} · {crystal}",
    examples: {
      heading: "Exemplos calculados pelo motor",
      intro:
        "Cada linha chama a mesma função de Pontos de Rating que a escada usa. As entradas são exemplos. Elas não são salvas em nenhuma conta.",
      columns: {
        yourPoints: "Seus pontos",
        otherSide: "Outro lado",
        result: "Resultado",
        storedAfter: "Armazenado depois",
        change: "Variação",
      },
      results: {
        win: "Vitória",
        loss: "Derrota",
        draw: "Empate",
      },
    },
    turnLabel: "Continuar pelo códice",
    previous: "Anterior",
    next: "Próxima",
    alsoIn: "Também na A.C.E.",
    backToBoard: "Voltar ao quadro de ranks",
  },
  rankArticle: {
    title: "{name} — Rank {level}",
    band: {
      heading: "A faixa",
      range:
        "{name} é o rank {level}. O rótulo de cristal no emblema é {crystal}. Um rating armazenado de {from} até {to} usa este rank.",
    },
    code: {
      heading: "Código do rank",
      hold: "Permanência. A conta usa {name} enquanto seus Pontos de Rating armazenados estiverem dentro desta faixa. O rank é lido a partir do número. Ele não é escolhido em um menu.",
      gateNext: "Passagem. O próximo rank abre em {next} Pontos de Rating.",
      gateLast: "Passagem. Não há próximo rank. A faixa termina em 3.000 Pontos de Rating.",
      record:
        "Registro. Um rank só muda quando um resultado registrado altera os Pontos de Rating. Abrir esta página não registra nenhum resultado.",
      emblem:
        "Emblema. A imagem identifica o rank. Uma compra, uma pré-visualização de skin ou um cosmético não move o piso.",
    },
    emblem: {
      heading: "Para que serve o emblema",
      material:
        "O estudo de material desta marca é: {material}. Essa linha descreve a arte. Não é uma estatística e não é um requisito.",
      sample:
        "A taxa de vitórias exibida ao lado deste emblema no quadro de ranks é um chip de amostra. Ela não precisa ser alcançada para que o rank possa ser usado.",
    },
  },
  rankReads: {
    "rank-1-recruit": {
      stance:
        "Recruit é a placa de entrada. As contas novas já não começam aqui: começam com 1.200 Rating Points, em Vanguard. Só se chega a Recruit perdendo terreno.",
      detail:
        "A passagem para Operative é 1.100. A tabela da escada abre Recruit em 0, mas o motor não armazena um rating abaixo de 100. Entre 100 e 1.099, a conta continua Recruit.",
    },
    "rank-2-operative": {
      stance:
        "Operative fica logo abaixo do número inicial. Uma conta que desce abaixo de 1.200 chega aqui antes de alcançar Recruit.",
      detail: "A faixa tem cem pontos de largura. Ela fecha em 1.199. Vanguard abre em 1.200.",
    },
    "rank-3-vanguard": {
      stance:
        "Vanguard é onde começa cada conta nova, com 1.200 Rating Points. Subir a partir daqui é o primeiro passo real na escada.",
      detail: "A faixa vai de 1.200 até 1.299. Specialist abre em 1.300.",
    },
    "rank-4-specialist": {
      stance:
        "Specialist é o rank da técnica. O rótulo de cristal do emblema diz GOLD. O nome oficial armazenado na escada é Specialist. Os dois são o mesmo piso.",
      detail: "A faixa vai de 1.300 até 1.399. Veteran abre em 1.400.",
    },
    "rank-5-veteran": {
      stance: "Veteran é a marca do meio. Quatro ranks ficam abaixo deste piso e cinco ficam acima.",
      detail:
        "A faixa vai de 1.400 até 1.499. Elite abre em 1.500. O rótulo de cristal deste emblema é PLATINUM.",
    },
    "rank-6-elite": {
      stance:
        "Elite é o nome usado pelo motor. DIAMOND é o rótulo de cristal do mesmo emblema. Nenhum dos dois rótulos é um segundo rating.",
      detail: "A faixa vai de 1.500 até 1.599. Master abre em 1.600.",
    },
    "rank-7-master": {
      stance:
        "Master é o primeiro rank cujo rótulo de cristal e nome oficial usam a mesma palavra. O piso é 1.600.",
      detail: "A faixa vai de 1.600 até 1.699. Grandmaster abre em 1.700.",
    },
    "rank-8-grandmaster": {
      stance:
        "Grandmaster é o degrau de safira. O piso é 1.700, ainda com cem pontos de largura, e Sovereign espera em 1.800.",
      detail:
        "A faixa vai de 1.700 até 1.799. Nada nesta página gasta uma partida para atravessá-la.",
    },
    "rank-9-sovereign": {
      stance:
        "Sovereign é o degrau largo antes de Legend. O rótulo de cristal é IMMORTAL. O nome oficial é Sovereign.",
      detail:
        "A faixa vai de 1.800 até 1.949. São 150 pontos, não 100. 1.949 ainda corresponde a Sovereign. Legend abre em 1.950.",
    },
    "rank-10-a-c-e-legend": {
      stance:
        "A.C.E. Legend é a última marca. O rótulo de cristal é ACE ELITE. O nome oficial é A.C.E. Legend.",
      detail:
        "A faixa abre em 1.950 e termina no teto do motor, 3.000. Não existe um décimo primeiro rank. Um rating armazenado não pode passar de 3.000.",
    },
  },
  articles: {
    "what-a-rank-is": {
      title: "O que é um rank da A.C.E.",
      lede: "Um rank é a marca que contém seus Pontos de Rating armazenados. Dez marcas cobrem a escada inteira, de Recruit a A.C.E. Legend.",
      sections: [
        {
          heading: "Um número, uma marca",
          paragraphs: [
            "A conta armazena um rating competitivo. A escada lê esse número e retorna o rank mais alto cujo piso o número já alcançou. Você não tem dois ranks ao mesmo tempo.",
            "Recruit é o rank 1. A.C.E. Legend é o rank 10. O nome oficial é o nome que está na escada. A palavra mais curta no emblema é o rótulo de cristal do mesmo rank.",
            "Este códice explica a escada escrita. Ele não aplica nenhuma partida e não altera um rating armazenado.",
          ],
        },
        {
          heading: "Como os pisos se distribuem",
          paragraphs: [
            "Recruit cobre o começo da escada. Operative abre em 1.100. De Vanguard até Grandmaster, cada novo piso fica 100 pontos acima: 1.200, 1.300, 1.400, 1.500, 1.600 e depois 1.700.",
            "Sovereign abre em 1.800 e mantém a conta até 1.949. A.C.E. Legend abre em 1.950. O teto do motor é 3.000, então Legend é a faixa mais longa.",
          ],
        },
        {
          heading: "O que um rank não é",
          paragraphs: [
            "Um rank não é um limite de população. Legend é um piso, não uma lista de mil contas.",
            "Um rank não é um prêmio, uma skin nem uma fila. O site público pode mostrar a marca. Ele não executa uma partida que grave uma nova.",
          ],
        },
      ],
    },
    "official-name-and-crystal-name": {
      title: "Nome oficial e nome de cristal",
      lede: "Todo rank tem dois rótulos. O nome oficial é o da escada. O nome de cristal é a palavra gravada no emblema.",
      sections: [
        {
          heading: "Por que existem os dois",
          paragraphs: [
            "O motor e o perfil usam o nome oficial: Recruit, Operative, Vanguard, Specialist, Veteran, Elite, Master, Grandmaster, Sovereign, A.C.E. Legend.",
            "O emblema também traz um rótulo de cristal: IRON, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, MASTER, GRANDMASTER, IMMORTAL, ACE ELITE. Esse rótulo é arte. Ele não cria um décimo primeiro rank e não armazena um segundo número.",
          ],
        },
        {
          heading: "Onde eles diferem",
          paragraphs: [
            "O rótulo de cristal de Specialist é GOLD. O de Veteran é PLATINUM. O de Elite é DIAMOND. O de Sovereign é IMMORTAL. O de A.C.E. Legend é ACE ELITE. Em todos os casos, o piso continua pertencendo ao nome oficial.",
            "Master e Grandmaster usam a mesma palavra nos dois lugares.",
          ],
        },
      ],
    },
    "divisions-on-the-board": {
      title: "As três divisões no quadro",
      lede: "As Divisões III, II e I são uma ajuda de leitura pintada sobre a faixa de um rank. A conta não armazena divisão.",
      sections: [
        {
          heading: "O que é armazenado",
          paragraphs: [
            "Uma conta conectada armazena um nível de rank e um rating competitivo. O nível de rank acompanha o rating. Não existe uma coluna de divisão ao lado deles.",
            "No quadro de ranks, a faixa do rank selecionado é dividida em três etapas de exibição para que o olho veja a base, o meio e o topo daquele piso. A Divisão III é a parte baixa da faixa. A Divisão I é a parte alta.",
          ],
        },
        {
          heading: "O que são os chips",
          paragraphs: [
            "As porcentagens de taxa de vitórias e as marcas de progresso nesses chips são amostras. Não são uma segunda escada nem uma meta que você precise cumprir.",
            "Trocar o chip de divisão não altera um rating armazenado. Só um resultado registrado pode fazer isso, e esta página não registra nenhum.",
          ],
        },
      ],
    },
    "what-cannot-move-a-rank": {
      title: "O que não pode mover um rank",
      lede: "A marca acompanha os Pontos de Rating armazenados. Todo o resto do site deixa a marca onde está.",
      sections: [
        {
          heading: "Fora do motor",
          paragraphs: [
            "Uma pré-visualização de skin, um cartão da loja, um rótulo de assinatura e um cosmético não adicionam Pontos de Rating. Pagar por um plano não é um rank.",
            "Abrir o quadro de ranks, girar um emblema ou ler este códice não aplica nenhuma partida.",
            "Uma denúncia, uma nota de suporte e um layout de torneio não reescrevem o rating armazenado.",
          ],
        },
        {
          heading: "O único caminho",
          paragraphs: [
            "O caminho escrito é um resultado de partida registrado que passa pelo motor de Pontos de Rating. Nenhuma página pública deste site grava esse resultado hoje.",
            "Até que exista um resultado, uma conta nova permanece no rating inicial, e uma conta existente mantém o rating já armazenado.",
          ],
        },
      ],
    },
    "what-rating-points-are": {
      title: "O que são Pontos de Rating",
      lede: "Pontos de Rating são o número competitivo armazenado na conta. O rank é apenas a faixa em que esse número cai.",
      sections: [
        {
          heading: "O campo armazenado",
          paragraphs: [
            "A versão do motor é {version}. Uma conta nova começa com {startingRating} Pontos de Rating. O número armazenado não pode ficar abaixo de {minRating} nem passar de {maxRating}.",
            "Os perfis e o quadro de ranks leem esse número quando você está conectado. Quando você não está conectado, o quadro mostra o piso de calibração do emblema selecionado. Esse piso é uma amostra, não a sua conta.",
          ],
        },
        {
          heading: "O que o número mede",
          paragraphs: [
            "O motor compara o seu rating com o rating médio do lado adversário. Ele não mantém uma pontuação separada para prêmio individual, taxa de headshots ou uso de utilitários. Esses números não fazem parte desta versão.",
            "Um número mais alto significa que a escada espera que você vença com mais frequência contra um número mais baixo. Os nomes dos ranks são a leitura pública dessa escala.",
          ],
        },
      ],
    },
    "where-a-new-account-starts": {
      title: "Onde uma conta nova começa",
      lede: "O login com a Steam cria a conta com 1.200 Rating Points, patente 3, Vanguard, sem vitórias nem derrotas.",
      sections: [
        {
          heading: "A marca inicial",
          paragraphs: [
            "1.200 é o piso de Vanguard. Operative e Recruit ficam abaixo, por isso uma conta nova começa no meio da primeira parte da escada e não no fundo.",
            "Fazer login de novo não reinicia uma pontuação já salva. As primeiras 10 partidas registradas são de colocação: durante elas a pontuação não pode passar do nível 5. O códice não inventa um registo de vitórias e derrotas.",
          ],
        },
        {
          heading: "Como ver",
          paragraphs: [
            "Depois do login pela Steam, o painel e o quadro de ranks podem mostrar o rating armazenado. Se o banco de dados estiver inacessível, a página informa isso em vez de inventar um número.",
            "A patente inicial continua sendo Vanguard até que um resultado registrado tire a pontuação da faixa 1.200–1.299. Este site não escreve hoje nenhum resultado desses.",
          ],
        },
      ],
    },
    "how-points-move": {
      title: "Como um resultado registrado move os Pontos de Rating",
      lede: "Uma vitória ou derrota registada é medida face à pontuação média da outra time. Contra uma time equilibrada uma vitória vale +20 e uma derrota −20. As regras completas estão na página de Patentes.",
      sections: [
        {
          heading: "O passo",
          paragraphs: [
            "A pontuação esperada é a probabilidade que o motor atribui antes da partida, apenas com base nas duas pontuações. Com pontuações iguais é metade, por isso uma vitória vale 20 Rating Points e uma derrota custa 15.",
            "Contra um rating mais alto, uma vitória vale mais de 20 e uma derrota custa menos. Contra um mais baixo, o contrário. Uma vitória sempre dá de 10 a 30 e uma derrota sempre custa de 10 a 30. Nos níveis 7–9 vitórias e derrotas são multiplicadas por 0,85 e no nível 10 por 0,75, então o topo se move de forma mais estável. O rating fica entre 100 e 3.000.",
            "Num resultado de time, cada jogador é medido face à pontuação média da outra time. Está previsto um bônus MVP de partida de 2 RP para quando o servidor registrar abates; até lá não é aplicado nenhum bônus pessoal.",
          ],
        },
        {
          heading: "Um empate",
          paragraphs: [
            "Um empate não muda nada: cada jogador mantém seu rating. Abandonar ou sair de uma partida custa o dobro de uma derrota normal, pelo menos 30 RP, seja qual for o resultado.",
            "A tabela desta página é o motor trabalhando com entradas de exemplo. Essas linhas não são partidas armazenadas e não são a sua conta.",
          ],
        },
      ],
    },
    "floor-ceiling-and-a-draw": {
      title: "O piso, o teto e um rank pulado",
      lede: "O número armazenado para em 100 e em 3.000. O rank sempre acompanha o número, então um rank não pode ser pulado por um botão.",
      sections: [
        {
          heading: "Os limites",
          paragraphs: [
            "Uma derrota com 100 Pontos de Rating continua em 100. Uma vitória com 3.000 continua em 3.000. O piso de Recruit na escada está escrito como 0, mas o número armazenado nunca usa o intervalo abaixo de 100.",
            "1.949 é Sovereign. 1.950 é A.C.E. Legend. Não existe marca intermediária.",
          ],
        },
        {
          heading: "Sem pulos",
          paragraphs: [
            "Se um resultado registrado levasse o número de 1.050 para 1.260, a conta passaria a usar Vanguard, porque 1.260 está dentro dessa faixa. Os ranks intermediários não entram na fila como promoções separadas. O número é lido uma única vez.",
            "Nenhuma página deste site faz esse salto. O exemplo mostra apenas como a escada lê um número.",
          ],
        },
      ],
    },
    "where-a-match-link-would-appear": {
      title: "Onde apareceria um link de partida",
      lede: "Um link de partida é o endereço de um servidor de jogo. Este site não emite nenhum.",
      sections: [
        {
          heading: "A central que você pode abrir",
          paragraphs: [
            "A página de jogo mostra um layout de dez jogadores e um controle ENCONTRAR PARTIDA. Esse controle permanece fechado. Ele não pode abrir um servidor de Counter-Strike 2 e não entrega um endereço a ninguém.",
            "A contagem de pessoas no site não é uma contagem de pessoas dentro de um jogo. A população para uma partida é 0.",
          ],
        },
        {
          heading: "Onde um link ficaria no futuro",
          paragraphs: [
            "Se existisse um servidor de partida, o endereço e a senha dele seriam mostrados na central de partidas depois que os dez jogadores aceitassem. O jogador entraria pela Steam. Nenhum endereço é armazenado neste site, e nenhuma senha é gerada.",
            "O login pela Steam vincula a conta. Ele não coloca um jogador dentro de um mapa.",
          ],
        },
      ],
    },
    "what-the-ranked-desk-is": {
      title: "O que é a central ranqueada",
      lede: "A central ranqueada é o layout da página de jogo para um 5v5. É uma central fechada, não uma fila aberta.",
      sections: [
        {
          heading: "O que é desenhado",
          paragraphs: [
            "Dois lados, cinco vagas cada, e um rótulo de capitão na primeira vaga. A lista de mapas e a linha de chat ao lado fazem parte do mesmo layout.",
            "As linhas de segurança dessa página indicam o respectivo status. Nenhuma delas é ainda uma verificação ativa; veja o roteiro em /anti-cheat.",
          ],
        },
        {
          heading: "O que a central não faz",
          paragraphs: [
            "ENCONTRAR PARTIDA não procura adversários. Não altera os Pontos de Rating. O rank de uma conta continua sendo o número armazenado, lido pela escada deste códice.",
            "Não existe uma fila superior separada acima de Legend. A.C.E. Legend é a última marca e abre em 1.950 Pontos de Rating.",
          ],
        },
      ],
    },
    "help-from-the-match-desk": {
      title: "Ajuda da central de partidas",
      lede: "O suporte neste site é uma central escrita. Ele não abre uma linha de voz ao vivo dentro de uma partida.",
      sections: [
        {
          heading: "O que a página de suporte faz",
          paragraphs: [
            "A página de suporte lista as centrais e oferece um controle de chamado. Escolher esse controle não cria um caso e não contata uma pessoa durante uma partida, porque nenhuma partida está em andamento.",
            "Uma dúvida sobre regras pertence ao código de competição em /rules. Uma dúvida sobre a escada pertence a este códice.",
          ],
        },
        {
          heading: "Um protesto, quando existir uma partida",
          paragraphs: [
            "O código escrito diz que o capitão pode registrar um protesto antes do início do próximo mapa, indicando o mapa, a rodada e o artigo. Este site não armazena demos e não executa servidores de jogo, então esse registro não tem para onde ir hoje.",
            "Um placar de layout não é uma partida jogada. A organização só registraria o resultado de uma série depois de uma série real.",
          ],
        },
      ],
    },
    "waiting-for-ten-players": {
      title: "Esperando dez jogadores",
      lede: "Um mapa competitivo precisa de dez titulares. A central não faz essa espera hoje.",
      sections: [
        {
          heading: "O relógio escrito",
          paragraphs: [
            "Quando uma partida tiver um início publicado, os cinco titulares de um lado devem estar presentes 15 minutos antes desse início. Essa frase está no código de competição. O relógio não começa neste site, porque nenhuma partida está publicada.",
            "Os nomes exibidos na página de jogo são uma prévia. Não são pessoas esperando na fila.",
          ],
        },
        {
          heading: "O que não acontece enquanto você assiste",
          paragraphs: [
            "A página não reserva um servidor, não envia notificação e não faz contagem regressiva para um aceite. Sair da página não abandona uma partida, porque você não estava em uma.",
          ],
        },
      ],
    },
    "the-captain-on-the-desk": {
      title: "O capitão na central",
      lede: "Um capitão fala por cada lado. As funções do lobby entram em operação com a beta competitiva.",
      sections: [
        {
          heading: "O que o código atribui",
          paragraphs: [
            "O capitão cuida do veto, das pausas e de um protesto. Os outros titulares jogam. Um reserva só pode entrar entre mapas.",
            "Em um mapa único, os capitães banem um mapa por vez até sobrar um. O pool é Ancient, Anubis, Dust II, Inferno, Mirage, Nuke e Train. O seed mais alto é o time A e escolhe se bane primeiro ou segundo; com seeds iguais, decide uma moeda. Hoje não há nenhum veto aberto.",
          ],
        },
        {
          heading: "Pausas",
          paragraphs: [
            "As pausas só valem quando existe um servidor de partida. Aqui não existe. O limite escrito por time e mapa é de três pausas táticas de 30 segundos, mais uma na prorrogação, e 10 minutos de pausa técnica no total. O texto completo está em /rules.",
            "Na página de equipes, capitão também é o membro que pode enviar um convite para o elenco. Esse convite é separado de um lobby de partida.",
          ],
        },
      ],
    },
    "when-a-side-is-not-ready": {
      title: "Quando um lado não está pronto",
      lede: "O código de competição descreve um W.O. para uma partida que tenha início publicado. Este site não aplica esse W.O.",
      sections: [
        {
          heading: "A regra escrita",
          paragraphs: [
            "Cinco titulares devem estar prontos 15 minutos antes do início publicado. Um lado que ainda estiver incompleto 15 minutos depois do início perde a série por W.O., quando existir uma partida. Se os dois lados estiverem ausentes, ambos são removidos e a organização define a vaga.",
            "Um clã que começa um mapa com menos de cinco titulares elegíveis, e não tem reserva que possa entrar, perde esse mapa por W.O.",
          ],
        },
        {
          heading: "O que este site não fará",
          paragraphs: [
            "Nada aqui observa um lobby e registra um W.O. sozinho. Um botão na página de jogo não pode entregar um mapa que nunca foi carregado.",
            "Um placar de layout na chave do torneio não é uma partida jogada e não é um W.O.",
          ],
        },
      ],
    },
    "entering-the-knockout": {
      title: "Entrando no mata-mata de 100 clãs",
      lede: "A página de torneios é uma chave de 100 clãs. As inscrições estão em 0 de 100. As inscrições não estão abertas.",
      sections: [
        {
          heading: "O que você pode abrir",
          paragraphs: [
            "Clique em um clã da chave para ver o elenco e depois abra um jogador. Nomes em vagas livres são prévias, não inscrições aceitas.",
            "A chave não prepara um servidor e não envia um link de partida.",
          ],
        },
        {
          heading: "A isenção, quando as inscrições abrirem",
          paragraphs: [
            "A regra escrita, para uma inscrição futura, é que os primeiros 28 clãs aceitos pulam a rodada 1. Essa isenção não é um prêmio e não pode ser obtida enquanto as inscrições continuarem em 0 de 100.",
            "A duração das séries, o pool de mapas e os protestos estão no código de competição em /rules.",
          ],
        },
      ],
    },
    "how-a-roster-is-assembled": {
      title: "Como um elenco é montado",
      lede: "Um capitão convida um jogador que já tem uma conta A.C.E. Não há link público de compartilhamento, e a senha da Steam nunca é pedida.",
      sections: [
        {
          heading: "O convite que existe",
          paragraphs: [
            "Na página de equipes, um capitão conectado cola um SteamID64 ou um ID de conta A.C.E. A conta já precisa estar vinculada pelo Steam OpenID. O servidor grava um convite pendente quando o banco de dados o aceita.",
            "O elenco tem cinco jogadores, incluindo o capitão. Um capitão não pode convidar a própria conta. Um jogador que já está no elenco é recusado. Se o banco de dados estiver fora do ar, o convite falha e nenhum convite é armazenado.",
          ],
        },
        {
          heading: "O que um convite não é",
          paragraphs: [
            "O convite não envia uma carta, não abre um lobby privado e não gera um link que você possa publicar. Ele não coloca o clã no mata-mata.",
            "O código do mata-mata permite dois reservas nomeados quando existir uma inscrição no torneio. As inscrições não estão abertas, então essas vagas não são um passe que você possa usar hoje.",
          ],
        },
      ],
    },
  },
};
