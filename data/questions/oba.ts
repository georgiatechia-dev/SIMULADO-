import { Question } from '../types';

export const obaQuestions: Question[] = [
  {
    id: 1,
    subject: "Astronomia",
    topic: "Sistema Solar e Planetas Telúricos",
    statement: "Qual dos seguintes corpos celestes do Sistema Solar NÃO é classificado como um planeta rochoso (ou telúrico)?",
    options: [
      { id: "A", text: "Mercúrio" },
      { id: "B", text: "Vênus" },
      { id: "C", text: "Marte" },
      { id: "D", text: "Júpiter" },
      { id: "E", text: "Terra" }
    ],
    correctAnswer: "D",
    explanation: "Os planetas do Sistema Solar dividem-se em rochosos/telúricos (Mercúrio, Vênus, Terra e Marte) e gigantes gasosos/gelados (Júpiter, Saturno, Urano e Netuno). Júpiter é um gigante gasoso composto predominantemente por hidrogênio e hélio.",
    distractorTips: "Os 4 primeiros a partir do Sol são rochosos; os 4 seguintes são gasosos ou gigantes de gelo."
  },
  {
    id: 2,
    subject: "Astronomia",
    topic: "Estações do Ano e Movimento da Terra",
    statement: "As quatro estações do ano na Terra ocorrem primordialmente em razão de qual combinação de fatores astronômicos?",
    options: [
      { id: "A", text: "A variação da distância entre a Terra e o Sol devido à órbita elíptica terrestre." },
      { id: "B", text: "A inclinação do eixo de rotação da Terra (cerca de 23,5°) combinada com o movimento de translação ao redor do Sol." },
      { id: "C", text: "As erupções e tempestades geomagnéticas na fotosfera solar periódicas." },
      { id: "D", text: "A atração gravitacional combinada da Lua e dos planetas vizinhos Vênus e Marte." },
      { id: "E", text: "A rotação da Via Láctea em torno do buraco negro supermassivo central Sagittarius A*." }
    ],
    correctAnswer: "B",
    explanation: "A inclinação constante de aproximadamente 23,5° do eixo terrestre em relação ao plano de sua órbita (eclíptica), aliada à translação, faz com que a incidência da radiação solar varie ao longo do ano em cada hemisfério, originando solstícios e equinócios.",
    distractorTips: "Erro muito comum: pensar que as estações decorrem da proximidade com o Sol (o periélio ocorre em janeiro, auge do verão no hemisfério sul, mas inverno no norte)."
  },
  {
    id: 3,
    subject: "Astronomia",
    topic: "Fases da Lua e Eclipses",
    statement: "Um eclipse solar total somente pode ocorrer durante qual fase do ciclo lunar?",
    options: [
      { id: "A", text: "Lua Cheia" },
      { id: "B", text: "Lua Nova" },
      { id: "C", text: "Quarto Crescente" },
      { id: "D", text: "Quarto Minguante" },
      { id: "E", text: "Em qualquer fase da Lua" }
    ],
    correctAnswer: "B",
    explanation: "No eclipse solar, a Lua passa exatamente entre o Sol e a Terra, projetando sua sombra (umbra e penumbra) sobre a superfície terrestre. Esse alinhamento Sol-Lua-Terra ocorre apenas na fase de Lua Nova.",
    distractorTips: "O eclipse lunar (quando a Terra fica entre o Sol e a Lua) ocorre apenas na fase de Lua Cheia."
  },
  {
    id: 4,
    subject: "Astronáutica",
    topic: "Exploração Espacial e Programa Apollo",
    statement: "Em 20 de julho de 1969, astronautas pousaram na superfície da Lua pela primeira vez na história na missão Apollo 11. O módulo lunar pousou em qual região da superfície lunar?",
    options: [
      { id: "A", text: "Cratera Tycho" },
      { id: "B", text: "Mar da Serenidade" },
      { id: "C", text: "Mar da Tranquilidade (Mare Tranquillitatis)" },
      { id: "D", text: "Oceano das Tempestades" },
      { id: "E", text: "Polo Sul lunar na cratera Shackleton" }
    ],
    correctAnswer: "C",
    explanation: "Neil Armstrong e Buzz Aldrin alunissaram com o módulo 'Eagle' no Mar da Tranquilidade (Mare Tranquillitatis), uma vasta planície basáltica de lava escura que oferecia terreno relativamente plano e seguro.",
    distractorTips: "A frase histórica transmitida à Terra foi: 'Houston, Tranquility Base here. The Eagle has landed'."
  },
  {
    id: 5,
    subject: "Astronomia",
    topic: "Leis de Kepler e Gravitação Universal",
    statement: "De acordo com a Terceira Lei de Kepler (Lei dos Períodos), a razão entre o quadrado do período orbital (T²) e o cubo do raio médio da órbita (R³) é constante para todos os planetas que orbitam uma mesma estrela. A partir dessa lei, deduz-se que:",
    options: [
      { id: "A", text: "Planetas mais distantes do Sol possuem velocidade orbital menor e levam mais tempo para completar uma volta." },
      { id: "B", text: "Planetas mais próximos do Sol levam mais tempo para completar uma volta que os planetas distantes." },
      { id: "C", text: "A velocidade dos planetas em sua órbita elíptica é absolutamente constante em todos os pontos." },
      { id: "D", text: "A massa do planeta determina diretamente a duração do seu ano orbital." },
      { id: "E", text: "Todos os planetas do Sistema Solar giram com a mesma velocidade escalar média." }
    ],
    correctAnswer: "A",
    explanation: "Como T² ∝ R³, quanto maior o semieixo maior R, muito maior é o período T. Mercúrio completa uma volta em 88 dias terrestres, enquanto Netuno leva cerca de 165 anos terrestres. A velocidade orbital diminui com a distância (v ∝ 1/√R).",
    distractorTips: "A velocidade orbital não é constante (2ª lei: velocidade é maior no periélio e menor no afélio)."
  },
  {
    id: 6,
    subject: "Astronáutica",
    topic: "Foguetes e Terceira Lei de Newton",
    statement: "Os motores dos foguetes espaciais são capazes de acelerar e manobrar até mesmo no vácuo do espaço interestelar. Esse princípio de funcionamento fundamenta-se:",
    options: [
      { id: "A", text: "No empuxo atmosférico gerado pelas hélices da carcaça do foguete." },
      { id: "B", text: "No Princípio da Ação e Reação (Terceira Lei de Newton), pela ejeção de gases em altíssima velocidade para trás." },
      { id: "C", text: "Na atração magnética com as partículas de vento solar." },
      { id: "D", text: "No atrito com a poeira cósmica presente na termosfera." },
      { id: "E", text: "Na repulsão eletrostática entre o foguete e os cinturões de Van Allen." }
    ],
    correctAnswer: "B",
    explanation: "Pela conservação do momento linear e Terceira Lei de Newton, ao queimar propelente (combustível + oxidante) e expelir gases em altíssima velocidade no sentido oposto, os gases exercem uma força de reação para frente que impulsiona o foguete, dispensando qualquer ar atmosférico de apoio.",
    distractorTips: "Muitos leigos pensam erradamente que o foguete precisa 'empurrar o ar' da atmosfera para se mover."
  },
  {
    id: 7,
    subject: "Astronomia",
    topic: "Constelações do Hemisfério Sul",
    statement: "Qual é a constelação símbolo do céu noturno brasileiro, presente na bandeira nacional e tradicionalmente utilizada para localizar o ponto cardeal Sul?",
    options: [
      { id: "A", text: "Órion (com as Três Marias)" },
      { id: "B", text: "Cruzeiro do Sul (Crux)" },
      { id: "C", text: "Ursa Maior" },
      { id: "D", text: "Escorpião" },
      { id: "E", text: "Centauro" }
    ],
    correctAnswer: "B",
    explanation: "O Cruzeiro do Sul (Crux) é a menor das 88 constelações modernas e a mais emblemática do hemisfério sul. Prolongando o braço maior da cruz quatro vezes e meia no sentido de sua base e baixando uma linha perpendicular ao horizonte, localiza-se o Polo Sul celeste.",
    distractorTips: "Ursa Maior e Ursa Menor são constelações do hemisfério norte."
  },
  {
    id: 8,
    subject: "Astrofísica",
    topic: "Evolução Estelar e o Sol",
    statement: "O Sol produz sua imensa energia luminosa e térmica em seu núcleo por meio de qual processo físico primordial?",
    options: [
      { id: "A", text: "Fissão nuclear de núcleos pesados de urânio e plutônio." },
      { id: "B", text: "Fusão termonuclear de núcleos de hidrogênio gerando núcleos de hélio." },
      { id: "C", text: "Combustão química convencional de carvão mineral e oxigênio." },
      { id: "D", text: "Decaimento radioativo alfa de elementos pesados da crosta solar." },
      { id: "E", text: "Reações de oxidação geradas pela presença de metano na coroa solar." }
    ],
    correctAnswer: "B",
    explanation: "No núcleo solar, sob temperaturas superiores a 15 milhões de kelvins e pressões extremas, ocorre a cadeia próton-próton (fusão nuclear), onde 4 prótons de hidrogênio fundem-se formando 1 núcleo de hélio-4, convertendo fração de massa em energia (E = mc²).",
    distractorTips: "Fissão é a quebra de núcleos pesados (usinas nucleares na Terra); fusão é a união de núcleos leves (estrelas)."
  },
  {
    id: 9,
    subject: "Astronomia",
    topic: "Telescópios Espaciais",
    statement: "Lançado no final de 2021 e posicionado no ponto de Lagrange L2 a 1,5 milhão de km da Terra, qual é o mais avançado telescópio espacial atual, projetado para observar o universo primordial no espectro infravermelho?",
    options: [
      { id: "A", text: "Telescópio Espacial Hubble" },
      { id: "B", text: "Telescópio Espacial James Webb (JWST)" },
      { id: "C", text: "Observatório de Raios-X Chandra" },
      { id: "D", text: "Telescópio Espacial Spitzer" },
      { id: "E", text: "Observatório Espacial Kepler" }
    ],
    correctAnswer: "B",
    explanation: "O Telescópio Espacial James Webb (JWST) da NASA/ESA/CSA possui espelho segmentado dourado de 6,5 metros e opera na faixa do infravermelho para estudar as primeiras galáxias formadas após o Big Bang e atmosferas de exoplanetas.",
    distractorTips: "O Hubble foi lançado em 1990 e orbita em órbita baixa da Terra (LEO), observando primordialmente na luz visível e ultravioleta."
  },
  {
    id: 10,
    subject: "Astronomia",
    topic: "Unidades de Medida Astronômicas",
    statement: "A distância média entre a Terra e o Sol é de aproximadamente 149.600.000 km. Essa distância define qual unidade astronômica fundamental?",
    options: [
      { id: "A", text: "1 Ano-luz (al)" },
      { id: "B", text: "1 Parsec (pc)" },
      { id: "C", text: "1 Unidade Astronômica (UA)" },
      { id: "D", text: "1 Quiloparsec (kpc)" },
      { id: "E", text: "1 Raio de Schwarzschild" }
    ],
    correctAnswer: "C",
    explanation: "A Unidade Astronômica (UA ou AU) é definida pela distância média Terra-Sol (~149,6 milhões de km), muito útil para medir distâncias dentro do Sistema Solar.",
    distractorTips: "Ano-luz é a distância que a luz percorre em um ano no vácuo (~9,46 trilhões de km), usada para distâncias interestelares."
  },
  {
    id: 11,
    subject: "Astronomia",
    topic: "Planetas Anões e Cinturão de Kuiper",
    statement: "Em 2006, a União Astronômica Internacional (IAU) reclassificou Plutão como 'planeta anão'. Qual dos três critérios para ser um planeta pleno Plutão não atende?",
    options: [
      { id: "A", text: "Estar em órbita ao redor do Sol." },
      { id: "B", text: "Ter massa suficiente para que sua própria gravidade lhe confira equilíbrio hidrostático (forma quase esférica)." },
      { id: "C", text: "Ter limpado a vizinhança ao redor de sua órbita de outros corpos comparáveis." },
      { id: "D", text: "Possuir pelo menos uma lua natural em sua órbita." },
      { id: "E", text: "Possuir atmosfera respirável com oxigênio molecular." }
    ],
    correctAnswer: "C",
    explanation: "Os três critérios da IAU são: 1. Orbitar o Sol; 2. Ter forma esférica (equilíbrio hidrostático); 3. Ter limpado a vizinhança de sua órbita. Plutão cruza a órbita do Cinturão de Kuiper e sua massa é muito menor que a soma dos corpos restantes na sua zona orbital.",
    distractorTips: "Plutão tem 5 luas conhecidas (Caronte, Nix, Hidra, Cérbero e Estige), logo ter luas não é o impedimento."
  },
  {
    id: 12,
    subject: "Astronomia",
    topic: "Cometas e Meteoros",
    statement: "Qual é a diferença fundamental entre um meteoro e um meteorito?",
    options: [
      { id: "A", text: "Meteoro é composto de gelo; meteorito é composto exclusivamente de gás hélio." },
      { id: "B", text: "Meteoro é o fenômeno luminoso ('estrela cadente') produzido pelo atrito do fragmento com a atmosfera; meteorito é o fragmento rochoso ou metálico que sobrevive à travessia atmosférica e atinge o solo." },
      { id: "C", text: "Meteoro é um corpo de fora da Via Láctea; meteorito é um asteroide em órbita de Marte." },
      { id: "D", text: "Meteoro e meteorito são sinônimos exatos sem nenhuma distinção científica." },
      { id: "E", text: "Meteoro atinge o solo marítimo; meteorito atinge o solo continental." }
    ],
    correctAnswer: "B",
    explanation: "Meteoróide é o fragmento no espaço; meteoro é o rastro luminoso de ionização e queima gerado pela entrada veloz na atmosfera; meteorito é o fragmento que sobrevive e é encontrado na superfície.",
    distractorTips: "Estrela cadente é o termo popular para o meteoro (fenômeno de luminosidade)."
  },
  {
    id: 13,
    subject: "Astronomia",
    topic: "Velocidade da Luz e Tempo de Chegada",
    statement: "Sabendo que a velocidade da luz no vácuo é de aproximadamente 300.000 km/s e que a distância Terra-Sol é de 150.000.000 km, quanto tempo a luz solar leva para chegar à Terra?",
    options: [
      { id: "A", text: "8 segundos" },
      { id: "B", text: "50 segundos" },
      { id: "C", text: "8 minutos e 20 segundos (500 segundos)" },
      { id: "D", text: "1 hora e 20 minutos" },
      { id: "E", text: "24 horas" }
    ],
    correctAnswer: "C",
    explanation: "Tempo = Distância / Velocidade = 150.000.000 km / 300.000 km/s = 500 segundos. Dividindo 500 por 60 segundos: 500 = 8 * 60 + 20 = 8 minutos e 20 segundos.",
    distractorTips: "A luz do Sol que enxergamos saiu dele há pouco mais de 8 minutos."
  },
  {
    id: 14,
    subject: "Astronomia",
    topic: "Marés Oceânicas",
    statement: "As marés vivas (ou marés de sizígia), que apresentam as maiores amplitudes de variação do nível do mar, ocorrem quando:",
    options: [
      { id: "A", text: "A Terra, a Lua e o Sol estão alinhados, nas fases de Lua Nova e Lua Cheia." },
      { id: "B", text: "A Lua está em quadratura nas fases de Quarto Crescente e Minguante." },
      { id: "C", text: "Ocorre um eclipse total da Lua apenas no hemisfério norte." },
      { id: "D", text: "O vento marítimo sopra perpendicularmente à costa com tempestades tropicais." },
      { id: "E", text: "A órbita de Júpiter cruza o plano da eclíptica solar." }
    ],
    correctAnswer: "A",
    explanation: "Quando Sol, Terra e Lua estão alinhados (sizígia, nas fases Nova e Cheia), as forças diferenciais de maré causadas pela atração gravitacional da Lua e do Sol somam-se construtivamente, gerando as marés mais altas e mais baixas (marés vivas).",
    distractorTips: "Nas fases de quarto (Crescente e Minguante), as forças formam ângulo reto de 90° e se contrapõem parcialmente, gerando marés mortas (de quadratura)."
  },
  {
    id: 15,
    subject: "Astronáutica",
    topic: "Estação Espacial Internacional (ISS)",
    statement: "A Estação Espacial Internacional (ISS) orbita a Terra a uma altitude média de cerca de 400 km. Os astronautas a bordo flutuam porque:",
    options: [
      { id: "A", text: "A gravidade da Terra nessa altitude é exatamente zero (0 m/s²)." },
      { id: "B", text: "A estação e os astronautas estão em constante queda livre em torno da Terra (estado de microgravidade aparente)." },
      { id: "C", text: "O ar dentro da cabine é pressurizado com gás hélio superleve." },
      { id: "D", text: "Os motores da estação geram um campo de repulsão eletromagnética antigravitacional." },
      { id: "E", text: "O campo magnético solar anula o peso dos corpos a essa altura." }
    ],
    correctAnswer: "B",
    explanation: "A 400 km de altitude, a gravidade terrestre ainda vale cerca de 90% da superfície (~8,8 m/s²). A sensação de flutuação ocorre porque a estação e tudo o que está dentro dela caem em direção à Terra na mesma taxa, mas como possuem velocidade orbital tangencial de ~27.600 km/h, a curvatura da queda acompanha a curvatura do planeta.",
    distractorTips: "Erro frequente: achar que no espaço próximo 'não existe gravidade'."
  },
  {
    id: 16,
    subject: "Astronomia",
    topic: "Exoplanetas e Zona Habitável",
    statement: "Na astrobiologia e na busca por exoplanetas, a 'Zona Habitável' de uma estrela é definida como a região orbital em que:",
    options: [
      { id: "A", text: "Nenhum asteroide jamais colide com a superfície planetária." },
      { id: "B", text: "A temperatura superficial permite a existência de água no estado líquido na superfície do planeta com atmosfera adequada." },
      { id: "C", text: "O oxigênio puro compõe 100% da atmosfera planetária." },
      { id: "D", text: "A gravidade é idêntica à de Júpiter para proteger a magnetosfera." },
      { id: "E", text: "A estrela mãe nunca emite radiação ultravioleta ou solar." }
    ],
    correctAnswer: "B",
    explanation: "A Zona Habitável (ou 'zona de Cachinhos Dourados') é a faixa orbital onde a energia recebida da estrela nem ferve nem congela a água, permitindo a estabilidade de oceanos e rios líquidos, essencial para a vida como conhecemos.",
    distractorTips: "A presença na zona habitável é condição necessária, mas não suficiente (depende também de espessura de atmosfera e campo magnético)."
  },
  {
    id: 17,
    subject: "Astronomia",
    topic: "Estrelas e Cores",
    statement: "Ao observar o céu noturno, vemos estrelas com cores distintas: avermelhadas, amareladas e azuladas. Fisicamente, a cor de uma estrela está diretamente associada à sua:",
    options: [
      { id: "A", text: "Distância em relação à Terra." },
      { id: "B", text: "Temperatura efetiva da sua superfície (fotosfera)." },
      { id: "C", text: "Velocidade de rotação em torno de si mesma." },
      { id: "D", text: "Quantidade de luas ou anéis que orbitam a estrela." },
      { id: "E", text: "Composição de poeira cósmica em seu manto." }
    ],
    correctAnswer: "B",
    explanation: "Pela Lei do Deslocamento de Wien para corpos negros, a cor de uma estrela depende de sua temperatura de superfície. Estrelas mais frias emitem na faixa vermelha (~3.000 K, como Betelgeuse); estrelas médias são amareladas (~5.800 K, como o Sol); e estrelas extremamente quentes são branco-azuladas (> 10.000 K, como Rigel ou Spica).",
    distractorTips: "Ao contrário das torneiras convencionais, na física o azul é muito mais quente que o vermelho."
  },
  {
    id: 18,
    subject: "Astronáutica",
    topic: "Programa Espacial Brasileiro",
    statement: "O Centro de Lançamento de Alcântara (CLA), localizado no estado do Maranhão, possui grande vantagem geoestratégica global para o lançamento de satélites porque:",
    options: [
      { id: "A", text: "Encontra-se muito próximo à Linha do Equador (~2° de latitude Sul), aproveitando ao máximo a velocidade de rotação linear da Terra para economizar combustível." },
      { id: "B", text: "Possui clima nevado constante que refrigera as turbinas dos lançadores." },
      { id: "C", text: "Está no ponto mais alto da Cordilheira dos Andes." },
      { id: "D", text: "É a única base espacial imune à atração da gravidade lunar." },
      { id: "E", text: "Localiza-se no centro exato da placa tectônica do Pacífico." }
    ],
    correctAnswer: "A",
    explanation: "A velocidade de rotação da Terra é máxima no Equador (~1.670 km/h). Lançando foguetes próximos à Linha do Equador no sentido de rotação da Terra (para leste), economiza-se até 30% de propelente em relação a bases em altas latitudes (como Cabo Canaveral ou Baikonur).",
    distractorTips: "Essa vantagem geográfica permite colocar satélites mais pesados em órbita com menor consumo energético."
  },
  {
    id: 19,
    subject: "Astronomia",
    topic: "Buracos Negros e Horizonte de Eventos",
    statement: "O que é o 'horizonte de eventos' de um buraco negro?",
    options: [
      { id: "A", text: "A superfície sólida interna onde a matéria fica congelada a zero kelvin." },
      { id: "B", text: "A fronteira limite além da qual a velocidade de escape supera a velocidade da luz no vácuo, de onde nada, nem mesmo a luz, pode escapar." },
      { id: "C", text: "O halo de asteroides de gelo que circunda a órbita de Netuno." },
      { id: "D", text: "O ponto em que a gravidade atrai apenas partículas com carga elétrica positiva." },
      { id: "E", text: "A zona em que os átomos se transformam em matéria escura líquida." }
    ],
    correctAnswer: "B",
    explanation: "O horizonte de eventos é a fronteira teórica descrita pela Relatividade Geral de Einstein que delimita o buraco negro. Dentro desse raio (Raio de Schwarzschild), a velocidade de escape é superior a c (300.000 km/s), tornando qualquer retorno impossível.",
    distractorTips: "A singularidade é o ponto central de densidade teoricamente infinita; o horizonte de eventos é a fronteira externa invisível."
  },
  {
    id: 20,
    subject: "Astronomia",
    topic: "Via Láctea e Estrutura Cósmica",
    statement: "A nossa galáxia, a Via Láctea, é morfologicamente classificada como uma galáxia do tipo:",
    options: [
      { id: "A", text: "Elíptica gigante (E0)" },
      { id: "B", text: "Espiral barrada (SBb/SBc)" },
      { id: "C", text: "Irregular amorfa sem braços definidos" },
      { id: "D", text: "Lenticular sem gás interestelar (S0)" },
      { id: "E", text: "Galáxia anular gerada por colisão direta" }
    ],
    correctAnswer: "B",
    explanation: "Observações astronômicas modernas comprovam que a Via Láctea possui uma barra central estelar alongada conectando braços espirais (como os braços de Perseu e Escudo-Centauro), classificando-se como galáxia espiral barrada.",
    distractorTips: "O Sol localiza-se no Braço de Órion, a cerca de 26.000 anos-luz do centro galáctico."
  }
];
