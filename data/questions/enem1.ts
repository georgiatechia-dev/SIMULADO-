import { Question } from '../types';

export const enem1Questions: Question[] = [
  {
    id: 1,
    subject: "Linguagens e Códigos",
    topic: "Funções da Linguagem e Discurso Publicitário",
    context: "'Menos tela, mais afeto. Desconecte-se das notificações e conecte-se com quem está sentado ao seu lado na mesa de jantar.' (Campanha de Conscientização Digital)",
    statement: "No texto da campanha, o emprego dos verbos no modo imperativo ('desconecte-se', 'conecte-se') evidencia o predomínio da função:",
    options: [
      { id: "A", text: "Fática, voltada para assegurar o funcionamento do canal técnico de comunicação." },
      { id: "B", text: "Conativa (ou apelativa), que busca orientar, persuadir ou influenciar a conduta do interlocutor." },
      { id: "C", text: "Metalinguística, que discute o significado lexicográfico de termos digitais." },
      { id: "D", text: "Emotiva, que enfatiza unicamente as emoções subjetivas e particulares do emissor." },
      { id: "E", text: "Referencial, focada exclusivamente na transmissão neutra e impessoal de dados estatísticos." }
    ],
    correctAnswer: "B",
    explanation: "O modo imperativo associado a conselhos e apelos comportamentais visa atingir o receptor da mensagem, persuadindo-o a rever hábitos diários. Essa é a marca estrutural da função conativa ou apelativa da linguagem.",
    distractorTips: "Identifique sempre o foco: se o foco é o interlocutor/comportamento, trata-se da função conativa."
  },
  {
    id: 2,
    subject: "Ciências Humanas",
    topic: "Cidadania e Constituição de 1988",
    context: "A Carta Magna brasileira de 1988, apelidada por Ulysses Guimarães de 'Constituição Cidadã', inaugurou um novo arcabouço jurídico e institucional no país após mais de duas décadas de regime militar autoritário.",
    statement: "Entre as conquistas históricas consagradas pela Constituição de 1988 no âmbito dos direitos sociais e cidadãos, destaca-se:",
    options: [
      { id: "A", text: "A institucionalização da censura prévia governamental sobre peças teatrais e jornais independentes." },
      { id: "B", text: "A criação do Sistema Único de Saúde (SUS), garantindo o acesso universal e gratuito à saúde como dever do Estado." },
      { id: "C", text: "A restrição do direito de voto exclusivamente aos cidadãos com ensino superior completo." },
      { id: "D", text: "A extinção definitiva dos direitos territoriais e culturais de povos indígenas e quilombolas." },
      { id: "E", text: "A proibição expressa de greves e manifestações públicas por sindicatos de trabalhadores." }
    ],
    correctAnswer: "B",
    explanation: "O artigo 196 da CF/88 estabelece que 'a saúde é direito de todos e dever do Estado', criando as bases do SUS como sistema público universal, descentralizado e participativo. A Constituição também reconheceu direitos originários indígenas (art. 231) e estendeu o voto aos analfabetos e jovens de 16 anos.",
    distractorTips: "As alternativas A, C, D e E descrevem retrocessos incompatíveis com o espírito democrático e cidadão da CF/88."
  },
  {
    id: 3,
    subject: "Linguagens e Códigos",
    topic: "Literatura - Romantismo vs. Realismo",
    context: "'Capitu, apesar daqueles olhos que o diabo lhe deu... você já reparou nos olhos dela? São assim de cigana oblíqua e dissimulada.' (Machado de Assis, Dom Casmurro)",
    statement: "No romance Dom Casmurro, a construção da personagem Capitu a partir da perspectiva exclusiva do narrador Bentinho exemplifica uma estratégia realista marcada por:",
    options: [
      { id: "A", text: "Uma visão estritamente documental e imparcial sem intervenção de julgamentos pessoais." },
      { id: "B", text: "A subjetividade de um narrador em primeira pessoa não confiável, cuja obsessão e ciúme moldam a descrição da mulher." },
      { id: "C", text: "A idealização angelical e pura da heroína feminina típica da poesia ultrarromântica." },
      { id: "D", text: "O determinismo biológico absoluto do meio social sobre o destino fatal das personagens naturalistas." },
      { id: "E", text: "A ausência de conflitos psicológicos e a certeza factual incontestável do adultério." }
    ],
    correctAnswer: "B",
    explanation: "Machado de Assis subverte a narrativa convencional ao adotar um narrador em primeira pessoa (Bentinho/Dom Casmurro) com ciúme doentio e memória seletiva. O leitor nunca tem acesso direto à verdade ou à voz autônoma de Capitu, permanecendo a ambiguidade da suposta traição.",
    distractorTips: "Capitu rompe com a mulher angelical do Romantismo, mas o narrador machadiano não é imparcial."
  },
  {
    id: 4,
    subject: "Ciências Humanas",
    topic: "Sociologia do Trabalho e Fordismo/Toyotismo",
    context: "Nas últimas décadas do século XX, o modelo de produção flexível (Toyotismo) substituiu gradativamente o rígido modelo fordista na economia globalizada.",
    statement: "Uma característica essencial do modelo toyotista de organização do trabalho industrial é:",
    options: [
      { id: "A", text: "A produção em massa estocada em imensos galpões antes de qualquer demanda de mercado." },
      { id: "B", text: "O sistema 'just-in-time', com produção puxada pela demanda, eliminação de desperdícios e trabalhadores multifuncionais." },
      { id: "C", text: "A extrema especialização em que cada operário executa a mesma tarefa repetitiva a vida toda." },
      { id: "D", text: "A ausência total de tecnologia de automação ou controle de qualidade na linha de montagem." },
      { id: "E", text: "A garantia de estabilidade vitalícia de emprego para toda a mão de obra terceirizada." }
    ],
    correctAnswer: "B",
    explanation: "O toyotismo caracteriza-se pelo 'just-in-time' (produção no momento exato da demanda para estoque mínimo), células de trabalho flexíveis, polivalência dos operadores (operário multifuncional) e controle de qualidade total (Kaizen).",
    distractorTips: "Produção em massa estocada e operário hiper-especializado são pilares do Fordismo."
  },
  {
    id: 5,
    subject: "Ciências Humanas",
    topic: "Geopolítica e Globalização",
    context: "O geógrafo brasileiro Milton Santos propôs uma divisão da globalização em três dimensões: o mundo como nos fazem vê-lo (a fábula), o mundo como ele é (a perversidade) e o mundo como pode ser (uma outra globalização).",
    statement: "Segundo Milton Santos, a faceta da globalização como 'perversidade' manifesta-se concretamente na:",
    options: [
      { id: "A", text: "Distribuição igualitária dos avanços biotecnológicos a todas as nações periféricas." },
      { id: "B", text: "Aceleração das desigualdades socioespaciais, no desemprego estrutural e no aprofundamento da pobreza." },
      { id: "C", text: "Eliminação espontânea de barreiras alfandegárias pelas potências do Norte global." },
      { id: "D", text: "Universalização da paz diplomática entre todos os continentes do planeta." },
      { id: "E", text: "Erradicação da dívida externa e das crises financeiras especulativas." }
    ],
    correctAnswer: "B",
    explanation: "Para Milton Santos, na 'globalização como perversidade', o discurso da 'aldeia global' harmônica é desmentido pela realidade: tirania do dinheiro e da informação, desemprego em massa, precarização e segregação socioespacial.",
    distractorTips: "A 'fábula' é a ilusão de um mundo homogêneo; a 'perversidade' é a assimetria real perversa do capitalismo tardio."
  },
  {
    id: 6,
    subject: "Linguagens e Códigos",
    topic: "Artes Visuais e Modernismo - Tarsila do Amaral",
    context: "A tela 'Abaporu' (1928), de Tarsila do Amaral, retrata uma figura solitária com pés e mãos descomunais sobre a terra e uma cabeça minúscula ao lado de um cacto sob o sol escaldante.",
    statement: "A pintura inspirou diretamente o Manifesto Antropófago de Oswald de Andrade, cuja proposta estética central consistia em:",
    options: [
      { id: "A", text: "Copiar cegamente as vanguardas europeias sem alterar seus temas originais." },
      { id: "B", text: "Deglutir criticamente a cultura estrangeira assimilando suas inovações e recriando-a com base na identidade e nas raízes brasileiras." },
      { id: "C", text: "Rejeitar qualquer influência externa e defender o isolamento cultural do país." },
      { id: "D", text: "Restaurar a métrica clássica parnasiana nas artes plásticas e na arquitetura barroca." },
      { id: "E", text: "Pintar exclusivamente retratos oficiais de líderes políticos do governo paulista." }
    ],
    correctAnswer: "B",
    explanation: "A Antropofagia modernista simboliza o canibalismo cultural ritual: 'devorar' as novidades da vanguarda ocidental (cubismo, surrealismo) para digeri-las e transformá-las em algo genuinamente nacional, crítico e brasileiro ('Tupy or not tupy, that is the question').",
    distractorTips: "Não era isolacionismo ufanista nem cópia submissa, mas deglutição criativa."
  },
  {
    id: 7,
    subject: "Ciências Humanas",
    topic: "Filosofia - Ética e Iluminismo em Kant",
    statement: "No pensamento filosófico de Immanuel Kant, o 'Imperativo Categórico' estabelece que a ação moralmente correta deve ser orientada pelo princípio:",
    options: [
      { id: "A", text: "'Age segundo a máxima que te garanta o maior prazer físico imediato sem punição civil.'" },
      { id: "B", text: "'Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que se torne lei universal.'" },
      { id: "C", text: "'Os fins justificam os meios em qualquer circunstância política extraordinária.'" },
      { id: "D", text: "'A obediência aos dogmas da tradição religiosa anula o dever da razão autônoma.'" },
      { id: "E", text: "'A moral deve mudar conforme os costumes e a conveniência de cada ocasião social.'" }
    ],
    correctAnswer: "B",
    explanation: "Kant formula o imperativo categórico da seguinte maneira: 'Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne uma lei universal'. É uma ética deontológica (fundada no dever universal e na autonomia da razão humana).",
    distractorTips: "'Os fins justificam os meios' é atribuído popularmente a Maquiavel; a busca do prazer imediato é o hedonismo."
  },
  {
    id: 8,
    subject: "Ciências Humanas",
    topic: "História do Brasil - Ditadura Militar e Resistência",
    statement: "O Ato Institucional nº 5 (AI-5), decretado em dezembro de 1968 durante o governo do general Costa e Silva, marcou o início do período conhecido como 'anos de chumbo'. A principal medida autoritária imposta pelo AI-5 foi:",
    options: [
      { id: "A", text: "A convocação imediata de eleições diretas para a Presidência da República." },
      { id: "B", text: "A suspensão do habeas corpus para crimes políticos, o fechamento do Congresso e a censura prévia institucionalizada." },
      { id: "C", text: "A anistia ampla, geral e irrestrita a todos os opositores exilados." },
      { id: "D", text: "A implantação do voto facultativo para jovens de 16 anos." },
      { id: "E", text: "A substituição dos ministros militares por juízes do Tribunal Penal Internacional." }
    ],
    correctAnswer: "B",
    explanation: "O AI-5 suspendeu garantias constitucionais fundamentais, permitindo o fechamento do Congresso, a cassação arbitrária de mandatos políticos, a intervenção nos estados e a supressão do habeas corpus em crimes contra a segurança nacional, abrindo caminho para a tortura de opositores.",
    distractorTips: "A Lei de Anistia só viria em 1979; as eleições diretas só voltaram em 1989."
  },
  {
    id: 9,
    subject: "Linguagens e Códigos",
    topic: "Linguagem e Cidadania - Norma Culta vs. Preconceito Linguístico",
    context: "'Não existe erro de português; existem variedades linguísticas adequadas a diferentes contextos sociais de comunicação. O preconceito linguístico é, na verdade, uma forma velada de discriminação social.' (Marcos Bagno)",
    statement: "A reflexão sociolinguística apresentada no texto defende que:",
    options: [
      { id: "A", text: "A escola deve abolir completamente o ensino da gramática normativa padrão." },
      { id: "B", text: "Todas as variedades linguísticas possuem coerência interna e sua estigmatização reflete preconceitos contra grupos sociais marginalizados." },
      { id: "C", text: "As pessoas que não dominam a norma culta são incapazes de formular pensamentos lógicos complexos." },
      { id: "D", text: "A norma-padrão deve ser utilizada irrestritamente em qualquer diálogo familiar descontraído." },
      { id: "E", text: "As variações regionais do idioma prejudicam a unidade cultural de um país." }
    ],
    correctAnswer: "B",
    explanation: "A sociolinguística moderna demonstra que toda variedade linguística é estruturada, rica e comunicativamente eficiente. O preconceito não tem fundamento biológico ou gramatical, mas social: discrimina-se a fala de quem pertence a classes economicamente vulneráveis.",
    distractorTips: "A escola não deve abandonar a norma-padrão, mas ensiná-la como uma ferramenta adicional de cidadania, sem menosprezar a língua materna do estudante."
  },
  {
    id: 10,
    subject: "Ciências Humanas",
    topic: "Sociologia - Padrões de Consumo e Indústria Cultural",
    context: "Os filósofos Theodor Adorno e Max Horkheimer, da Escola de Frankfurt, cunharam o conceito de 'Indústria Cultural' para analisar a produção de cultura no capitalismo do século XX.",
    statement: "Segundo a teoria crítica da Indústria Cultural, a transformação da arte em mercadoria serializada provoca:",
    options: [
      { id: "A", text: "A emancipação crítica e política das massas trabalhadoras." },
      { id: "B", text: "A padronização dos gostos, a passividade do consumidor e a manutenção do status quo socioeconômico." },
      { id: "C", text: "O fim das desigualdades econômicas através do entretenimento gratuito." },
      { id: "D", text: "O fortalecimento da criatividade radical de artistas independentes sem financiamento." },
      { id: "E", text: "A eliminação definitiva dos monopólios de mídia televisiva e cinematográfica." }
    ],
    correctAnswer: "B",
    explanation: "Para Adorno e Horkheimer, a Indústria Cultural fabrica produtos culturais em escala industrial com fórmulas previsíveis para entreter e alienar o público, desencorajando o pensamento divergente e consolidando a conformidade social.",
    distractorTips: "A indústria cultural, na visão frankfurtiana, não liberta, mas domestica a capacidade crítica."
  },
  {
    id: 11,
    subject: "Linguagens e Códigos",
    topic: "Estratégias de Argumentação em Artigo de Opinião",
    context: "'Estudos da Organização Mundial da Saúde (OMS) revelam que a cada 1 real investido em saneamento básico, economizam-se 4 reais em gastos com internações e tratamentos na rede pública de saúde.'",
    statement: "Nesse fragmento, o autor utiliza como recurso argumentativo primordial:",
    options: [
      { id: "A", text: "O argumento de autoridade embasado em dados quantitativos e institucionais confiáveis." },
      { id: "B", text: "O apelo à emoção comovente através da narração do drama pessoal de uma família." },
      { id: "C", text: "A ironia sarcástica para ridicularizar os adversários políticos." },
      { id: "D", text: "O recurso a metáforas míticas inspiradas na poesia clássica grega." },
      { id: "E", text: "A generalização vaga sem indicação de fontes oficiais de pesquisa." }
    ],
    correctAnswer: "A",
    explanation: "A citação expressa da OMS (órgão internacional de máxima credibilidade na área) associada a números concretos de retorno econômico (1 para 4) constitui um argumento de autoridade com comprovação estatística.",
    distractorTips: "Dados objetivos de fontes públicas reconhecidas reforçam a credibilidade do texto dissertativo-argumentativo."
  },
  {
    id: 12,
    subject: "Ciências Humanas",
    topic: "Geografia Agrária Brasileira e Fronteira Agrícola",
    statement: "A expansão da fronteira agrícola no Brasil a partir da década de 1970, caracterizada pelo avanço das lavouras de soja e da pecuária bovina sobre o bioma Cerrado, gerou como impacto socioambiental expressivo:",
    options: [
      { id: "A", text: "A recuperação florestal imediata da Mata de Cocais no semiárido nordestino." },
      { id: "B", text: "A perda acelerada de biodiversidade, compactação do solo e conflitos pela posse da terra envolvendo povos tradicionais." },
      { id: "C", text: "O encarecimento artificial da energia hidrelétrica no Sudeste do país." },
      { id: "D", text: "O desaparecimento total das exportações brasileiras de grãos nos portos de Santos e Paranaguá." },
      { id: "E", text: "A extinção dos latifúndios monocultores em favor da agricultura familiar agroecológica." }
    ],
    correctAnswer: "B",
    explanation: "O Cerrado (considerado a 'caixa-d'água' do Brasil por abrigar nascentes de importantes bacias hidrográficas) perdeu mais de 50% de sua cobertura original para monocultivos mecanizados, provocando erosão, assoreamento de rios e conflitos agrários.",
    distractorTips: "O agronegócio impulsionou a balança comercial, mas às custas de graves custos socioambientais locais."
  },
  {
    id: 13,
    subject: "Linguagens e Códigos",
    topic: "Modernismo - Segunda Fase (Geração de 30)",
    context: "'A terra era dura e ressequida. Fabiano caminhava arrastando as alpercatas de couro cru, olhando para o céu límpido e impiedoso. Baleia seguia à frente, farejando os tufos de macambira morta.' (Graciliano Ramos, Vidas Secas)",
    statement: "O romance 'Vidas Secas' insere-se no ciclo regionalista nordestino de 1930, caracterizando-se estilisticamente por:",
    options: [
      { id: "A", text: "Linguagem rebuscada e repleta de adjetivos decorativos no estilo barroco." },
      { id: "B", text: "Linguagem seca, econômica e concisa, espelhando a aridez física da caatinga e a mudez existencial dos retirantes." },
      { id: "C", text: "Humor carnavalesco e sátira política dos grandes centros urbanos litorâneos." },
      { id: "D", text: "Idealização poética da fartura camponesa sob a proteção patriarcal dos coronéis." },
      { id: "E", text: "Uso exclusivo do verso livre rimado em dialeto estrangeiro." }
    ],
    correctAnswer: "B",
    explanation: "A estética de Graciliano Ramos é famosa pela 'palavra exata' e pela contenção verbal: sua prosa cortante e desprovida de excessos reproduz a rudeza da seca e o silêncio trágico de Fabiano e sua família frente à opressão social.",
    distractorTips: "Vidas Secas é o ápice do romance social de 30, desprovido de sentimentalismo romântico."
  },
  {
    id: 14,
    subject: "Ciências Humanas",
    topic: "História Antiga e Cidadania na Grécia Clássica",
    statement: "A democracia ateniense do século V a.C. é frequentemente celebrada como o berço da participação política ocidental. Contudo, em termos de inclusão social, a cidadania ateniense era extremamente excludente porque:",
    options: [
      { id: "A", text: "Apenas militares de alta patente do exército espartano podiam discursar na assembleia popular." },
      { id: "B", text: "Mulheres, escravizados e estrangeiros (metecos) eram completamente privados de direitos políticos e de voto." },
      { id: "C", text: "O cargo de governante supremo era vitalício e transmitido obrigatoriamente de pai para filho." },
      { id: "D", text: "Exigia-se do cidadão a adesão forçada ao monoteísmo cristão romano." },
      { id: "E", text: "As decisões eram tomadas por sorteio secreto em que nenhum cidadão podia votar pessoalmente." }
    ],
    correctAnswer: "B",
    explanation: "Em Atenas, eram considerados cidadãos apenas homens adultos, livres, filhos de pai e mãe atenienses. Mulheres, pessoas escravizadas (a grande maioria da força produtiva) e metecos estavam completamente excluídos da Eclésia (assembleia).",
    distractorTips: "A democracia era direta para os poucos considerados cidadãos (cerca de 10% da população total)."
  },
  {
    id: 15,
    subject: "Ciências Humanas",
    topic: "Patrimônio Cultural e Memória Coletiva",
    statement: "No Brasil contemporâneo, o reconhecimento do Ofício das Baianas de Acarajé e do Samba de Roda do Recôncavo Baiano como Patrimônio Cultural Imaterial pelo IPHAN tem como propósito:",
    options: [
      { id: "A", text: "Proibir a comercialização pública de quitutes típicos fora do estado da Bahia." },
      { id: "B", text: "Valorizar, preservar e salvaguardar saberes tradicionais, identidades e expressões culturais da matriz afro-brasileira." },
      { id: "C", text: "Transformar todos os terreiros e rodas em propriedades exclusivas de investidores privados multinacionais." },
      { id: "D", text: "Substituir os ingredientes culinários locais por produtos ultraprocessados padronizados." },
      { id: "E", text: "Padronizar o figurino de todas as danças folclóricas de acordo com modelos europeus medievais." }
    ],
    correctAnswer: "B",
    explanation: "O patrimônio imaterial abrange práticas, representações, expressões, conhecimentos e técnicas que comunidades reconhecem como parte de seu legado histórico. O tombamento pelo IPHAN visa proteger a herança cultural de matriz africana contra a intolerância e o esquecimento.",
    distractorTips: "Patrimônio imaterial não significa prédios de tijolo (material), mas saberes vivos, ritos e celebrações comunitárias."
  },
  {
    id: 16,
    subject: "Linguagens e Códigos",
    topic: "Gênero Textual - Charge e Humor Gráfico",
    context: "Uma charge mostra um homem em situação de rua dormindo sob um viaduto ao lado de um letreiro imenso que diz: 'O Brasil é o maior exportador mundial de grãos e carnes do planeta'.",
    statement: "O efeito de humor e crítica social da charge constrói-se pela estratégia de:",
    options: [
      { id: "A", text: "Ironia e antítese entre a riqueza pujante do agronegócio e a persistência da fome e da miséria nas calçadas do país." },
      { id: "B", text: "Elogio descompromissado à eficiência da logística de transporte rodoviário nacional." },
      { id: "C", text: "Celebração do conforto urbano propiciado pela arquitetura dos viadutos metropolitanos." },
      { id: "D", text: "Demonstração didática das técnicas agronômicas de cultivo hidropônico de grãos." },
      { id: "E", text: "Negação deliberada da existência de desigualdades sociais nos grandes centros." }
    ],
    correctAnswer: "A",
    explanation: "A charge opera pelo contraste visual chocante (antítese/ironia): o recorde de produção e exportação de alimentos contrasta dolorosamente com o cidadão vulnerável sem acesso básico ao sustento diário.",
    distractorTips: "Charges de vestibular utilizam a linguagem verbo-visual para provocar reflexão crítica sobre contradições estruturais."
  },
  {
    id: 17,
    subject: "Ciências Humanas",
    topic: "Filosofia Política - O Panóptico de Bentham e Foucault",
    context: "Em 'Vigiar e Punir' (1975), Michel Foucault analisa o modelo arquitetônico do Panóptico concebido por Jeremy Bentham, no qual uma única torre central vigia todas as celas radiais de um presídio.",
    statement: "Segundo Foucault, a principal consequência do dispositivo panóptico sobre o indivíduo é:",
    options: [
      { id: "A", text: "A rebelião coletiva espontânea dos prisioneiros contra os guardas armados." },
      { id: "B", text: "A internalização da vigilância, fazendo com que o indivíduo vigie a si próprio e discipline seu comportamento de modo constante." },
      { id: "C", text: "O perdão imediato de todos os delitos cometidos sem aplicação de penas." },
      { id: "D", text: "A substituição total da punição penal pela internação em hospitais psiquiátricos." },
      { id: "E", text: "A autonomia absoluta da vontade individual liberta de qualquer coerção." }
    ],
    correctAnswer: "B",
    explanation: "Como o prisioneiro nunca sabe se o vigilante está ou não olhando para a sua cela naquele exato segundo, ele age como se estivesse sendo continuamente vigiado. A disciplina é interiorizada na mente e no corpo dos indivíduos (sociedade disciplinar).",
    distractorTips: "Esse princípio estende-se a fábricas, escolas, hospitais e hoje aos algoritmos de vigilância de dados digitais."
  },
  {
    id: 18,
    subject: "Ciências Humanas",
    topic: "Geografia - Transição Demográfica no Brasil",
    statement: "O Censo Demográfico brasileiro recente aponta para a queda contínua da taxa de fecundidade (hoje em torno de 1,5 filho por mulher) e o acelerado envelhecimento populacional. Um desafio socioeconômico direto decorrente dessa nova dinâmica demográfica é:",
    options: [
      { id: "A", text: "A falta crônica de vagas em creches devido à explosão recorde no nascimento de bebês." },
      { id: "B", text: "A necessidade de reformular a previdência social e expandir a rede de cuidados e saúde especializada para idosos." },
      { id: "C", text: "A redução da expectativa de vida média do cidadão brasileiro para menos de 50 anos." },
      { id: "D", text: "O abandono dos cursos superiores pela ausência de pessoas com idade economicamente ativa." },
      { id: "E", text: "A proibição governamental de imigração para conter o excesso demográfico urbano." }
    ],
    correctAnswer: "B",
    explanation: "Com a redução na proporção de jovens e o aumento da longevidade dos idosos, a razão de dependência cresce, pressionando os sistemas de previdência e demandando políticas de atenção a doenças crônicas e cuidados de longa duração.",
    distractorTips: "O país já encerrou a fase de 'bônus demográfico' pleno e caminha para uma pirâmide etária de base estreita."
  },
  {
    id: 19,
    subject: "Linguagens e Códigos",
    topic: "Coesão Textual e Pronomes Anafóricos",
    context: "'O desmatamento ilegal na Amazônia compromete o regime de chuvas em todo o Sudeste do país. Esse fenômeno afeta diretamente os reservatórios de hidrelétricas e a produtividade agrícola nacional.'",
    statement: "No trecho, o termo anafórico 'Esse fenômeno' cumpre a função coesiva de:",
    options: [
      { id: "A", text: "Antecipar um dado numérico que será apresentado apenas no próximo parágrafo." },
      { id: "B", text: "Retomar e sintetizar a ideia expressa anteriormente sobre o comprometimento das chuvas decorrente do desmatamento." },
      { id: "C", text: "Contradizer a afirmação do período anterior apontando uma falha metodológica." },
      { id: "D", text: "Substituir um verbo de ação por um pronome interrogativo direto." },
      { id: "E", text: "Criar uma ambiguidade intencional para confundir o leitor sobre a causa das secas." }
    ],
    correctAnswer: "B",
    explanation: "Os mecanismos de coesão referencial anafórica ('esse', 'este fato', 'esse fenômeno') servem para reatar e encapsular ideias previamente desenvolvidas, garantindo a progressão temática sem repetições desgastantes.",
    distractorTips: "Catáfora antecipa; anáfora retoma o que já foi dito."
  },
  {
    id: 20,
    subject: "Ciências Humanas",
    topic: "Sociologia Urbana e Gentrificação",
    statement: "Nas grandes cidades, o processo de 'gentrificação' é caracterizado por:",
    options: [
      { id: "A", text: "A reforma de bairros populares degradados acompanhada por forte valorização imobiliária, o que acaba expulsando os moradores tradicionais de baixa renda devido ao aumento do custo de vida." },
      { id: "B", text: "A destruição de parques públicos para a construção de rodovias de alta velocidade." },
      { id: "C", text: "A distribuição gratuita de lotes urbanos regularizados para comunidades ribeirinhas." },
      { id: "D", text: "O congelamento por lei de todos os aluguéis e impostos residenciais por tempo indeterminado." },
      { id: "E", text: "O êxodo rural em massa em direção a vilas agrícolas do interior." }
    ],
    correctAnswer: "A",
    explanation: "Gentrificação (do inglês 'gentry', nobreza) descreve intervenções urbanísticas que remodelam bairros periféricos ou históricos. Comerciantes sofisticados e moradias de alto padrão instalam-se na região, elevando impostos, aluguéis e preços locais, o que força o deslocamento involuntário dos antigos residentes periféricos.",
    distractorTips: "A gentrificação gera melhorias estéticas visíveis, mas aprofunda a segregação socioespacial dos mais vulneráveis."
  }
];
