import { Question } from '../types';

export const fuvestQuestions: Question[] = [
  {
    id: 1,
    subject: "Literatura Brasileira",
    topic: "Romantismo - Memórias de um Sargento de Milícias",
    context: "No romance 'Memórias de um Sargento de Milícias' (1852-1853), de Manuel Antônio de Almeida, acompanhamos as peripécias de Leonardo, filho de uma pisadela e de um beliscão.",
    statement: "Ao analisar a obra, o crítico literário Antonio Candido destacou que o romance se distingue das demais narrativas românticas da época por construir uma:",
    options: [
      { id: "A", text: "'Dialética da malandragem', retratando uma sociedade carioca intermediária regida pelo trânsito flexível entre a ordem e a desordem, desprovida de heróis nobres ou vilões maniqueístas." },
      { id: "B", text: "Tragédia clássica em verso alexandrino na qual o protagonista sucumbe à condenação penal inelutável da justiça imperial." },
      { id: "C", text: "Epopéia nacionalista ufanista que canta a bravura dos soldados que lutaram na Independência da Bahia." },
      { id: "D", text: "Narrativa gótica de horror que explora o sobrenatural nas ruas ermas do Rio colonial." },
      { id: "E", text: "Crítica marxista formal dos meios de produção fabris antes da Revolução Industrial." }
    ],
    correctAnswer: "A",
    explanation: "Em seu seminal ensaio 'Dialética da Malandragem', Antonio Candido demonstra que a obra escapa aos cânones do Romantismo solene: Leonardo não é nem virtuoso nem criminoso abominável; circula entre o lícito e o ilícito na 'terra de ninguém' entre a ordem do Major Vidigal e a malandragem popular carioca do tempo do rei D. João VI.",
    distractorTips: "Memórias de um Sargento de Milícias é o precursor do anti-herói e da malandragem na literatura brasileira."
  },
  {
    id: 2,
    subject: "História",
    topic: "Idade Moderna - A Expansão Marítima Ibérica",
    statement: "O Tratado de Tordesilhas, assinado em 1494 entre as coroas de Portugal e Castela com a mediação papal, estabeleceu:",
    options: [
      { id: "A", text: "O fechamento do Oceano Atlântico à navegação comercial inglesa e holandesa." },
      { id: "B", text: "A partilha do mundo ultramarino entre Portugal e Espanha a partir de um meridiano situado a 370 léguas a oeste do arquipélago de Cabo Verde." },
      { id: "C", text: "A concessão da rota da seda terrestre exclusivamente à corte de Lisboa." },
      { id: "D", text: "O reconhecimento mútuo da independência política das colônias hispânicas na América do Sul." },
      { id: "E", text: "A proibição da extração de ouro e prata pelos conquistadores castelhanos." }
    ],
    correctAnswer: "B",
    explanation: "O Tratado de Tordesilhas (1494) substituiu a Bula Inter Coetera de 1493 (que estipulava 100 léguas), deslocando a linha imaginária para 370 léguas a oeste de Cabo Verde. As terras a leste pertenceriam a Portugal (o que assegurou a posse do litoral brasileiro em 1500) e a oeste à Espanha.",
    distractorTips: "As coroas ibéricas praticavam o princípio do 'Mare Clausum', contestado por Francisco I da França ('Mostrem-me o testamento de Adão')."
  },
  {
    id: 3,
    subject: "Física",
    topic: "Hidrostática - Princípio de Arquimedes e Empuxo",
    statement: "Um bloco de madeira maciça de volume 0,002 m³ e densidade 600 kg/m³ flutua em equilíbrio na superfície de um tanque contendo água (densidade = 1.000 kg/m³). Adotando g = 10 m/s², o volume da parte do bloco que permanece submerso na água é de:",
    options: [
      { id: "A", text: "0,0008 m³" },
      { id: "B", text: "0,0010 m³" },
      { id: "C", text: "0,0012 m³ (60% do volume)" },
      { id: "D", text: "0,0015 m³" },
      { id: "E", text: "0,0020 m³" }
    ],
    correctAnswer: "C",
    explanation: "Na flutuação em equilíbrio: Peso = Empuxo => d_corpo * V_total * g = d_liquido * V_submerso * g. Simplificando g: V_submerso = (d_corpo / d_liquido) * V_total = (600 / 1.000) * 0,002 = 0,60 * 0,002 = 0,0012 m³.",
    distractorTips: "A fração submersa de um corpo que flutua é exatamente igual à razão entre a sua densidade e a densidade do fluido."
  },
  {
    id: 4,
    subject: "Química",
    topic: "Cinética Química - Fatores que Alteram a Velocidade",
    statement: "Ao dissolver um comprimido efervescente em água, observa-se que a velocidade de desprendimento gasoso é significativamente maior quando o comprimido é previamente triturado em pó do que quando colocado inteiro. A justificativa físico-química para esse aumento de velocidade é:",
    options: [
      { id: "A", text: "A diminuição da energia de ativação da reação química." },
      { id: "B", text: "O aumento da área de superfície de contato entre os reagentes sólidos e a água, elevando a frequência de choques efetivos por segundo." },
      { id: "C", text: "A alteração da entalpia da reação que passa de endotérmica para exotérmica." },
      { id: "D", text: "O aumento da constante de equilíbrio químico (Kc) do sistema." },
      { id: "E", text: "A eliminação da barreira termodinâmica de Gibbs." }
    ],
    correctAnswer: "B",
    explanation: "A trituração aumenta a área superficial exposta ao solvente, permitindo que um número muito maior de moléculas colidam com orientação favorável e energia suficiente (choques eficazes) na unidade de tempo. A energia de ativação não muda (apenas catalisadores alteram a energia de ativação).",
    distractorTips: "Cuidado: triturar não adiciona catalisador, portanto a energia de ativação permanece constante!"
  },
  {
    id: 5,
    subject: "Biologia",
    topic: "Citologia - Respiração Celular e Fosforilação Oxidativa",
    statement: "Nas células eucarióticas animais, a maior produção líquida de ATP durante a respiração celular aeróbia ocorre em qual compartimento da mitocôndria?",
    options: [
      { id: "A", text: "Na matriz mitocondrial durante o Ciclo de Krebs." },
      { id: "B", text: "Na membrana mitocondrial interna (cristas mitocondriais) por meio da cadeia respiratória e ATP sintase." },
      { id: "C", text: "No citoplasma hialoplasma durante a glicólise anaeróbia." },
      { id: "D", text: "No espaço intermembranas pela fermentação lática." },
      { id: "E", text: "No complexo de Golgi por digestão lisossômica." }
    ],
    correctAnswer: "B",
    explanation: "A fosforilação oxidativa (cadeia transportadora de elétrons e ATP sintase) ocorre acoplada às cristas da membrana mitocondrial interna, gerando a maior parte do rendimento energético (~26 a 28 ATPs dos ~30 a 32 totais por molécula de glicose oxidada).",
    distractorTips: "O Ciclo de Krebs ocorre na matriz mitocondrial, mas gera diretamente apenas 2 GTP/ATP; a glicólise gera apenas 2 ATP líquidos."
  },
  {
    id: 6,
    subject: "Geografia",
    topic: "Geomorfologia e Placas Tectônicas",
    statement: "A Cordilheira dos Andes, na borda ocidental da América do Sul, é um exemplo clássico de relevo formado por:",
    options: [
      { id: "A", text: "Limite divergente de placas tectônicas com rifteamento continental." },
      { id: "B", text: "Limite convergente de subducção entre a Placa Oceânica de Nazca e a Placa Continental Sul-Americana, provocando dobramentos modernos e vulcanismo ativo." },
      { id: "C", text: "Falhas transformantes puras sem nenhuma atividade sísmica associada." },
      { id: "D", text: "Erosão eólica e intemperismo químico ao longo de bacias sedimentares estáveis." },
      { id: "E", text: "Assoreamento de antigos leitos glaciais do quaternário tardio." }
    ],
    correctAnswer: "B",
    explanation: "A Placa de Nazca (mais densa, basáltica) mergulha sob a Placa Sul-Americana (menos densa, granítica) em uma zona de subducção. A compressão tectônica provocou o soerguimento dos Andes (dobramentos modernos cenozóicos) e forte atividade sísmica e vulcânica.",
    distractorTips: "O Himalaia é convergente continente-continente (Índia e Eurásia); os Andes são oceânica-continental (Nazca e Sul-Americana)."
  },
  {
    id: 7,
    subject: "Matemática",
    topic: "Geometria Analítica - Retas e Distâncias",
    statement: "No plano cartesiano ortogonal, a distância do ponto P(2, 3) à reta r de equação geral 3x + 4y - 8 = 0 é igual a:",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" },
      { id: "E", text: "5" }
    ],
    correctAnswer: "B",
    explanation: "A fórmula da distância de ponto a reta é d = |a*x0 + b*y0 + c| / √(a² + b²). Substituindo: d = |3*(2) + 4*(3) - 8| / √(3² + 4²) = |6 + 12 - 8| / √(9 + 16) = |10| / √25 = 10 / 5 = 2.",
    distractorTips: "Cuidado ao aplicar o módulo no numerador e a raiz quadrada de a² + b² no denominador."
  },
  {
    id: 8,
    subject: "Literatura Brasileira",
    topic: "Modernismo - Alguma Poesia (Carlos Drummond de Andrade)",
    context: "'No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho / tinha uma pedra / no meio do caminho tinha uma pedra.' (Carlos Drummond de Andrade)",
    statement: "Publicado em 1928 na Revista de Antropofagia e depois em 'Alguma Poesia' (1930), o poema causou escândalo na crítica tradicional sobretudo devido:",
    options: [
      { id: "A", text: "Ao vocabulário obsceno e pornográfico utilizado nos tercetos." },
      { id: "B", text: "À insistência obsessiva na repetição rítmica e à aparente banalidade cotidiana elevada a símbolo existencial da condição humana, rompendo com o lirismo retórico parnasiano." },
      { id: "C", text: "À defesa explícita da monarquia absolutista e do clero católico medieval." },
      { id: "D", text: "Ao uso exclusivo de palavras em latim eclesiástico sem tradução." },
      { id: "E", text: "Ao plágio confesso de um soneto de Luís de Camões." }
    ],
    correctAnswer: "B",
    explanation: "O poema foi recebido com sarcasmo pelos parnasianos ('monótono', 'sem metro'). Drummond utilizou a repetição obsessiva da 'pedra' (obstáculo, tropeço íntimo ou social, memória persistente) e a coloquialidade ('tinha uma pedra' em vez de 'havia uma pedra') para fundar uma nova sensibilidade poética moderna.",
    distractorTips: "A pedra é polissêmica: obstáculo concreto, existencial, político ou metafórico."
  },
  {
    id: 9,
    subject: "História",
    topic: "Brasil República - O Estado Novo Varguista (1937-1945)",
    statement: "O Estado Novo, instaurado por Getúlio Vargas em novembro de 1937, legitimou o fechamento autoritário do regime republicano mediante a divulgação de qual documento fraudulento?",
    options: [
      { id: "A", text: "A Carta Testamento" },
      { id: "B", text: "O Plano Cohen (uma falsa conspiração comunista forjada por militares integralistas)" },
      { id: "C", text: "O Manifesto dos Pioneiros da Educação Nova" },
      { id: "D", text: "O Tratado de Petrópolis" },
      { id: "E", text: "A Bula Quanta Cura" }
    ],
    correctAnswer: "B",
    explanation: "Em setembro de 1937, o governo Vargas divulgou na rádio e nos jornais o 'Plano Cohen', forjado pelo capitão integralista Olympio Mourão Filho, que descrevia um suposto plano sanguinário comunista para tomar o poder no Brasil. Essa comoção pública justificou o cancelamento das eleições de 1938 e o golpe que outorgou a Constituição 'Polaca' autoritária.",
    distractorTips: "A Carta Testamento é de 1954, momento do suicídio de Vargas no Palácio do Catete."
  },
  {
    id: 10,
    subject: "Física",
    topic: "Gravitação - Velocidade de Escape e Órbitas",
    statement: "Um satélite geoestacionário de telecomunicações orbita a Terra de modo que parece permanecer sempre imóvel sobre o mesmo ponto do equador terrestre. Para que isso ocorra, o período orbital do satélite e o plano de sua órbita devem ser, respectivamente:",
    options: [
      { id: "A", text: "12 horas e plano polar cruzando os meridianos de Greenwich." },
      { id: "B", text: "24 horas (igual ao período de rotação da Terra) e plano equatorial com sentido de oeste para leste." },
      { id: "C", text: "48 horas e plano inclinado a 45° em relação ao trópico de Câncer." },
      { id: "D", text: "90 minutos e altitude de 200 km." },
      { id: "E", text: "365 dias e plano elíptico na eclíptica solar." }
    ],
    correctAnswer: "B",
    explanation: "Um satélite geoestacionário deve sincronizar sua rotação com a da Terra (período T = 24 horas) e estar contido obrigatoriamente no plano do Equador terrestre, girando no mesmo sentido de rotação da Terra (oeste para leste), a uma altitude fixa de ~35.786 km.",
    distractorTips: "Se o plano fosse inclinado ou polar, o satélite oscilaria no céu (órbita geossíncrona, mas não geoestacionária)."
  },
  {
    id: 11,
    subject: "Química",
    topic: "Radioatividade - Decaimento Alfa e Beta",
    statement: "O isótopo radioativo Urânio-238 (número atômico Z = 92) desintegra-se emitindo sucessivamente uma partícula alfa (α: 2 prótons e 2 nêutrons) e duas partículas beta menos (β⁻: elétrons de origem nuclear). O núcleo filho resultante dessa sequência de emissões terá número de massa (A) e número atômico (Z) iguais a:",
    options: [
      { id: "A", text: "A = 234 e Z = 90" },
      { id: "B", text: "A = 234 e Z = 92 (outro isótopo de Urânio)" },
      { id: "C", text: "A = 238 e Z = 90" },
      { id: "D", text: "A = 230 e Z = 88" },
      { id: "E", text: "A = 236 e Z = 94" }
    ],
    correctAnswer: "B",
    explanation: "Emissão alfa: A diminui em 4 (238 - 4 = 234) e Z diminui em 2 (92 - 2 = 90, formando Tório-234). Emissão de 2 partículas beta menos: a massa não se altera (A = 234) e o número atômico aumenta em 1 para cada beta (90 + 2 = 92). Assim, obtém-se o Urânio-234 (A = 234, Z = 92).",
    distractorTips: "Lembre-se das leis de Soddy, Fajans e Russell para decaimento radioativo."
  },
  {
    id: 12,
    subject: "Biologia",
    topic: "Divisão Celular - Meiose e Crossing-Over",
    statement: "A recombinação gênica (crossing-over ou permutação) que aumenta a variabilidade genética das espécies com reprodução sexuada ocorre especificamente em qual subfase da Meiose I?",
    options: [
      { id: "A", text: "Leptóteno da Prófase I" },
      { id: "B", text: "Paquíteno da Prófase I" },
      { id: "C", text: "Anáfase I" },
      { id: "D", text: "Metáfase II" },
      { id: "E", text: "Telófase II" }
    ],
    correctAnswer: "B",
    explanation: "Na Prófase I da meiose ocorrem as subfases: Leptóteno, Zigóteno (pareamento dos cromossomos homólogos formando tétrades), Paquíteno (onde ocorre o crossing-over / quebra e troca recíproca de segmentos entre cromátides não irmãs) e Diploteno (onde os quiasmas se tornam visíveis).",
    distractorTips: "Mnemônica clássica de citologia: 'Le-Zi-Pa-Di-Di' (Leptóteno, Zigóteno, Paquíteno, Diplóteno, Diacinese)."
  },
  {
    id: 13,
    subject: "Matemática",
    topic: "Polinômios e Relações de Girard",
    statement: "Dada a equação polinomial cúbica x³ - 6x² + 11x - 6 = 0, sabendo que suas raízes são números reais e formam uma progressão aritmética (PA), a menor dessas três raízes vale:",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "3" },
      { id: "E", text: "4" }
    ],
    correctAnswer: "B",
    explanation: "Pelas Relações de Girard, a soma das três raízes r1 + r2 + r3 = -(-6)/1 = 6. Se estão em PA, podemos escrevê-las como (b - r), b, (b + r). A soma é 3b = 6 => b = 2 (a raiz central é 2). O produto das raízes é r1 * r2 * r3 = -(-6)/1 = 6. Logo: (2 - r) * 2 * (2 + r) = 6 => 4 - r² = 3 => r² = 1 => r = 1. As raízes são (2 - 1) = 1, 2 e (2 + 1) = 3. A menor raiz é 1.",
    distractorTips: "As raízes são {1, 2, 3}. De fato: (x - 1)(x - 2)(x - 3) = x³ - 6x² + 11x - 6."
  },
  {
    id: 14,
    subject: "História",
    topic: "Idade Contemporânea - O Nazifascismo e o Totalitarismo",
    statement: "Em 'As Origens do Totalitarismo', a filósofa Hannah Arendt argumenta que regimes totalitários do século XX (como o nazismo alemão e o stalinismo soviético) distinguem-se das tiranias tradicionais por:",
    options: [
      { id: "A", text: "Preservarem a liberdade de imprensa e o pluripartidarismo no poder legislativo." },
      { id: "B", text: "Buscarem o controle total da vida pública e privada por meio da ideologia oficial sistemática, do terror policial, da propaganda de massa e da destruição da individualidade." },
      { id: "C", text: "Governarem sem burocracia estatal nem exércitos regulares." },
      { id: "D", text: "Incentivarem o debate filosófico socrático nas universidades públicas." },
      { id: "E", text: "Limitarem a autoridade governamental estritamente à cobrança de impostos alfandegários." }
    ],
    correctAnswer: "B",
    explanation: "Para Arendt, o totalitarismo é uma forma de dominação inédita: não se contenta em exigir submissão política externa, mas pretende remodelar a natureza humana, atomizar a sociedade civil e dominar a subjetividade por meio do terror institucional e da mentira ideológica organizada.",
    distractorTips: "Totalitarismo é distinto do mero autoritarismo justamente pela pretensão totalizante sobre todos os aspectos da vida humana."
  },
  {
    id: 15,
    subject: "Geografia",
    topic: "Climatologia - O Fenômeno El Niño (ENOS)",
    statement: "O fenômeno oceânico-atmosférico do El Niño é caracterizado pelo aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial e pelo enfraquecimento dos ventos alísios. No Brasil, os efeitos típicos de um El Niño de forte intensidade incluem:",
    options: [
      { id: "A", text: "Secas severas e estiagem prolongada no semiárido do Nordeste e chuvas volumosas com inundações no Sul." },
      { id: "B", text: "Nevascas e congelamento de rios no Pantanal mato-grossense." },
      { id: "C", text: "Inundações sem precedentes no sertão do Ceará e seca extrema no Rio Grande do Sul." },
      { id: "D", text: "Queda generalizada na temperatura das capitais do Sudeste durante o verão." },
      { id: "E", text: "Paralisação total das correntes marítimas do Atlântico Sul." }
    ],
    correctAnswer: "A",
    explanation: "O El Niño altera a circulação de Walker e a corrente de jato polar. No Brasil, o padrão clássico é: intensificação das frentes frias estacionárias no Sul (provocando chuvas torrenciais e enchentes) e bloqueio da umidade no Norte e Nordeste (provocando secas agudas e risco de incêndios na Amazônia e no Semiárido).",
    distractorTips: "A La Niña produz efeitos contrários (chuvas abundantes no Nordeste e estiagem no Sul)."
  },
  {
    id: 16,
    subject: "Física",
    topic: "Eletromagnetismo - Lei de Faraday-Neumann-Lenz",
    statement: "Ao aproximar rapidamente o polo norte de um ímã permanente de uma espira metálica circular condutora em repouso:",
    options: [
      { id: "A", text: "Nenhuma corrente elétrica circula na espira, pois o ímã não encosta nos fios metálicos." },
      { id: "B", text: "Surge na espira uma corrente elétrica induzida cujo campo magnético gerado se opõe à aproximação do ímã (criando um polo norte voltado para o ímã)." },
      { id: "C", text: "A espira é instantaneamente aquecida até sua vaporização atômica." },
      { id: "D", text: "O ímã perde sua magnetização natural permanentemente." },
      { id: "E", text: "A espira atrai o ímã com uma força aceleradora ilimitada." }
    ],
    correctAnswer: "B",
    explanation: "Pela Lei de Faraday, a variação do fluxo magnético através da espira induz uma força eletromotriz. Pela Lei de Lenz, a corrente induzida tem sentido tal que seus efeitos se opõem à causa que lhe deu origem. Ao aproximar o polo norte (aumento de fluxo entrante), a espira cria um polo norte frontal para repelir o ímã.",
    distractorTips: "A Lei de Lenz é uma manifestação direta da conservação da energia: nada é criado de graça."
  },
  {
    id: 17,
    subject: "Química",
    topic: "Química Geral - Ligações Intermoleculares e Ponto de Ebulição",
    statement: "Dentre os compostos CH4 (metano), CH3-CH3 (etano), CH3-O-CH3 (metoximetano) e CH3-CH2-OH (etanol), qual deles apresenta o maior ponto de ebulição sob pressão de 1 atm?",
    options: [
      { id: "A", text: "Metano (CH4)" },
      { id: "B", text: "Etano (CH3-CH3)" },
      { id: "C", text: "Metoximetano (CH3-O-CH3)" },
      { id: "D", text: "Etanol (CH3-CH2-OH)" },
      { id: "E", text: "Todos possuem rigorosamente o mesmo ponto de ebulição por terem massas próximas." }
    ],
    correctAnswer: "D",
    explanation: "O etanol possui o grupo hidroxila (-OH), estabelecendo ligações de hidrogênio (a mais forte das forças intermoleculares clássicas) entre suas moléculas no estado líquido. Por isso, seu ponto de ebulição é de 78 °C, enquanto os outros compostos (apolares por dispersão de London ou dipolo-dipolo fraco) são gases sob temperatura ambiente.",
    distractorTips: "Ligações de hidrogênio (H ligado a F, O ou N) elevam expressivamente os pontos de fusão e ebulição."
  },
  {
    id: 18,
    subject: "Biologia",
    topic: "Zoologia e Evolução dos Cordados",
    statement: "O surgimento do ovo com casca calcária (ovo amniótico) contendo anexos embrionários como o âmnio, o córion e o alantoide representou uma conquista evolutiva crucial porque permitiu:",
    options: [
      { id: "A", text: "A dependência total da água para a fecundação externa de peixes e anfíbios." },
      { id: "B", text: "A independência definitiva da água para a reprodução dos répteis, possibilitando a conquista do ambiente terrestre seco." },
      { id: "C", text: "A hibernação dos mamíferos placentários durante as eras glaciais." },
      { id: "D", text: "A absorção de oxigênio pelas brânquias internas de larvas aquáticas." },
      { id: "E", text: "A nutrição autotrófica do feto por fotossíntese embrionária." }
    ],
    correctAnswer: "B",
    explanation: "O ovo amniótico protege o embrião contra a dessecação graças à casca semipermeável e ao âmnio (bolsa com líquido amniótico que reproduz o meio aquático). O alantoide armazena excretas nitrogenadas (ácido úrico) e participa de trocas gasosas. Isso libertou os répteis (e posteriormente aves e mamíferos) de retornarem à água para desovar.",
    distractorTips: "Anfíbios ainda dependem da água para fecundação e desenvolvimento larval com ovos sem casca."
  },
  {
    id: 19,
    subject: "Matemática",
    topic: "Matrizes e Determinantes",
    statement: "Se A é uma matriz quadrada de ordem 3 com determinante det(A) = 4, qual é o valor do determinante da matriz resultante da multiplicação de A pela constante escalar 2, isto é, det(2A)?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "16" },
      { id: "C", text: "24" },
      { id: "D", text: "32" },
      { id: "E", text: "64" }
    ],
    correctAnswer: "D",
    explanation: "Pela propriedade dos determinantes: det(k * A) = k^n * det(A), onde n é a ordem da matriz quadrada. Como n = 3 e k = 2: det(2A) = 2³ * det(A) = 8 * 4 = 32.",
    distractorTips: "Erro frequente: esquecer de elevar a constante k à ordem n da matriz, calculando 2 * 4 = 8."
  },
  {
    id: 20,
    subject: "Literatura Brasileira",
    topic: "Barroco e Arcadismo - Gregório de Matos",
    statement: "A poesia de Gregório de Matos Guerra, conhecido como o 'Boca do Inferno' no século XVII colonial na Bahia, destaca-se pelo ecletismo temático que combina:",
    options: [
      { id: "A", text: "Crônica mundana positivista e cantigas medievais de amigo em galego-português." },
      { id: "B", text: "Poesia lírico-amorosa neoplatônica, poesia religiosa com o conflito barroco de culpa e salvação, e sátira cortante e virulenta contra a corrupção das autoridades coloniais de Salvador." },
      { id: "C", text: "Elogios cortesãos subservientes a todos os governadores-gerais da colônia portuguesa." },
      { id: "D", text: "Manifestos futuristas exaltando as máquinas a vapor e o dinamismo fabril." },
      { id: "E", text: "Tratados científicos sobre botânica e medicina indígena tropical." }
    ],
    correctAnswer: "B",
    explanation: "A lírica do Boca do Inferno desdobra-se na vertente satírica (ataque furioso aos governadores, padres e fidalgos decaídos da Bahia), na vertente religiosa (tensão barroca entre o pecado da carne e o perdão de Cristo) e na vertente lírico-erótica/amorosa.",
    distractorTips: "Gregório de Matos foi a primeira grande voz poética a flagrar as contradições da sociedade colonial baiana."
  }
];
