import { Question } from '../types';

export const sarespQuestions: Question[] = [
  {
    id: 1,
    subject: "Língua Portuguesa",
    topic: "Interpretação e Inferência de Sentido",
    context: "Texto: 'A pressa é a inimiga da perfeição, diziam nossos avós. Hoje, no entanto, a velocidade tornou-se virtude máxima. Quem não responde a uma mensagem em dois minutos é tido por ausente ou desinteressado. Perdemos o gosto pela lentidão fecunda, aquela que gesta ideias que amadurecem sem alarde.'",
    statement: "No texto, a expressão 'lentidão fecunda' sugere uma reflexão sobre:",
    options: [
      { id: "A", text: "A preguiça e a falta de compromisso no ambiente corporativo contemporâneo." },
      { id: "B", text: "O tempo necessário para que pensamentos e projetos sejam elaborados com qualidade e profundidade." },
      { id: "C", text: "A ineficiência dos meios digitais de comunicação em transmitir informações com agilidade." },
      { id: "D", text: "A nostalgia prejudicial de padrões de vida antigos que impedem o progresso tecnológico." },
      { id: "E", text: "A incapacidade das novas gerações de memorizar conteúdos sem o apoio de máquinas." }
    ],
    correctAnswer: "B",
    explanation: "A palavra 'fecunda' remete a algo que gera vida, frutífero e produtivo. Ao associar lentidão à fecundidade ('aquela que gesta ideias que amadurecem'), o autor defende que o pensamento aprofundado exige tempo de reflexão e maturação.",
    distractorTips: "As alternativas A e D atribuem juízos pejorativos ('preguiça', 'nostalgia prejudicial') que contradizem a tese positiva defendida pelo autor."
  },
  {
    id: 2,
    subject: "Matemática",
    topic: "Equações do 1º Grau e Modelagem",
    statement: "Uma gráfica cobra uma taxa fixa de R$ 35,00 pela criação da arte de um folheto publicitário, mais R$ 0,40 por unidade impressa. Se uma escola encomendou uma tiragem de folhetos e pagou no total R$ 195,00, a quantidade de folhetos impressos foi de:",
    options: [
      { id: "A", text: "350" },
      { id: "B", text: "400" },
      { id: "C", text: "450" },
      { id: "D", text: "500" },
      { id: "E", text: "600" }
    ],
    correctAnswer: "B",
    explanation: "A função custo é C(x) = 35 + 0,40x. Substituindo C(x) = 195: 195 = 35 + 0,40x => 0,40x = 160 => x = 160 / 0,40 = 400 folhetos.",
    distractorTips: "Cuidado ao subtrair a taxa fixa antes da divisão. Se dividir 195 por 0,40 diretamente obteria 487,5."
  },
  {
    id: 3,
    subject: "Língua Portuguesa",
    topic: "Relações Coesivas e Conjunções",
    statement: "Considere a oração: 'O município investiu em novas ciclovias, embora a maioria dos moradores ainda utilize o transporte coletivo sobre trilhos.' O termo destacado 'embora' introduz uma relação semântica de:",
    options: [
      { id: "A", text: "Concessão, estabelecendo uma oposição que não anula a ação principal." },
      { id: "B", text: "Causa, explicando o motivo pelo qual a prefeitura realizou o investimento." },
      { id: "C", text: "Consequência, demonstrando o efeito direto do uso das ciclovias pelos cidadãos." },
      { id: "D", text: "Finalidade, explicitando o objetivo futuro pretendido pelo poder público." },
      { id: "E", text: "Condição, impondo uma exigência para que a obra seja considerada válida." }
    ],
    correctAnswer: "A",
    explanation: "A conjunção subordinativa 'embora' introduz uma oração concessiva: exprime uma ideia de quebra de expectativa ou fato contrário à oração principal, sem, contudo, invalidá-la.",
    distractorTips: "Conjunções de causa seriam 'visto que', 'já que'; de finalidade seriam 'a fim de que', 'para que'."
  },
  {
    id: 4,
    subject: "Matemática",
    topic: "Teorema de Pitágoras e Geometria Plana",
    statement: "Uma escada de 5 metros de comprimento está apoiada em uma parede vertical lisa. A base da escada está situada no chão a 3 metros de distância do pé da parede. A que altura do solo a extremidade superior da escada encosta na parede?",
    options: [
      { id: "A", text: "3,5 metros" },
      { id: "B", text: "4,0 metros" },
      { id: "C", text: "4,2 metros" },
      { id: "D", text: "4,5 metros" },
      { id: "E", text: "4,8 metros" }
    ],
    correctAnswer: "B",
    explanation: "Pelo Teorema de Pitágoras no triângulo retângulo: h² + 3² = 5² => h² + 9 = 25 => h² = 16 => h = 4 metros. Trata-se do clássico triângulo pitagórico 3-4-5.",
    distractorTips: "A hipotenusa é a própria escada (5m). Logo, os catetos medem 3m e 4m."
  },
  {
    id: 5,
    subject: "Língua Portuguesa",
    topic: "Identificação da Tese e Argumentação",
    context: "Trecho de artigo de opinião: 'A inteligência artificial não eliminará a necessidade da leitura crítica; pelo contrário, tornará o discernimento humano ainda mais urgente. Quanto mais farto for o fluxo de dados sintéticos, mais indispensável será a mente capaz de checar premissas, reconhecer falácias e questionar origens.'",
    statement: "Qual é a tese central defendida pelo articulista no trecho?",
    options: [
      { id: "A", text: "O uso da inteligência artificial deve ser banido das escolas por produzir dados falsos." },
      { id: "B", text: "A produção de textos por máquinas tornará obsoleta a interpretação literária humana." },
      { id: "C", text: "O avanço da tecnologia exige o fortalecimento da capacidade crítica do leitor humano." },
      { id: "D", text: "As premissas geradas por algoritmos são invariavelmente superiores às conclusões humanas." },
      { id: "E", text: "A leitura tradicional em papel é o único antídoto seguro contra manipulações digitais." }
    ],
    correctAnswer: "C",
    explanation: "A tese afirma expressamente que a IA 'tornará o discernimento humano ainda mais urgente', valorizando o papel da reflexão crítica frente ao excesso de dados.",
    distractorTips: "As alternativas A e E extrapolam o texto com proibições e restrições materiais não mencionadas."
  },
  {
    id: 6,
    subject: "Matemática",
    topic: "Porcentagem e Descontos Sucessivos",
    statement: "Um casaco custava inicialmente R$ 200,00. No início do inverno, sofreu um aumento de 20%. No final da estação, para liquidar o estoque, a loja anunciou um desconto de 20% sobre o novo preço. Qual o valor final do casaco após o desconto?",
    options: [
      { id: "A", text: "R$ 192,00" },
      { id: "B", text: "R$ 196,00" },
      { id: "C", text: "R$ 200,00" },
      { id: "D", text: "R$ 204,00" },
      { id: "E", text: "R$ 208,00" }
    ],
    correctAnswer: "A",
    explanation: "Após o aumento de 20%: R$ 200 * 1,20 = R$ 240,00. Após o desconto de 20%: R$ 240 * 0,80 = R$ 192,00. O valor final não retorna a 200 porque 20% incidiu sobre uma base maior.",
    distractorTips: "Pegadinha comum: achar que aumento de 20% seguido de desconto de 20% resulta em 0% de variação."
  },
  {
    id: 7,
    subject: "Língua Portuguesa",
    topic: "Figuras de Linguagem",
    statement: "No verso 'O vento sussurrava segredos antigos por entre as frestas da janela de madeira', a figura de linguagem predominante é:",
    options: [
      { id: "A", text: "Metonímia" },
      { id: "B", text: "Hipérbole" },
      { id: "C", text: "Personificação (Prosopopeia)" },
      { id: "D", text: "Pleonasmo" },
      { id: "E", text: "Antítese" }
    ],
    correctAnswer: "C",
    explanation: "A personificação ou prosopopeia consiste em atribuir características, sentimentos ou ações humanas a seres inanimados ou fenômenos naturais, como o ato do vento 'sussurrar segredos'.",
    distractorTips: "Hipérbole seria exagero intencional ('morri de rir'); metonímia seria troca de parte pelo todo ou autor pela obra."
  },
  {
    id: 8,
    subject: "Matemática",
    topic: "Área e Perímetro de Figuras Planas",
    statement: "Um terreno retangular tem 24 metros de comprimento e 15 metros de largura. O proprietário deseja cercar todo o terreno com 4 voltas de arame farpado. Quantos metros lineares de arame serão necessários?",
    options: [
      { id: "A", text: "156 metros" },
      { id: "B", text: "240 metros" },
      { id: "C", text: "312 metros" },
      { id: "D", text: "360 metros" },
      { id: "E", text: "1.440 metros" }
    ],
    correctAnswer: "C",
    explanation: "O perímetro do retângulo é 2*(24 + 15) = 2*39 = 78 metros. Para 4 voltas completas: 78 * 4 = 312 metros.",
    distractorTips: "A área seria 24*15 = 360 m², o que geraria o distrator 1.440 metros se o aluno confundisse área com perímetro."
  },
  {
    id: 9,
    subject: "Língua Portuguesa",
    topic: "Variação Linguística e Registro Formal",
    statement: "Em qual das seguintes situações comunicativas o uso da norma-padrão culta da língua é estritamente exigido?",
    options: [
      { id: "A", text: "Em uma conversa descontraída por aplicativo de mensagens com amigos de infância." },
      { id: "B", text: "Em uma redação de vestibular ou requerimento oficial protocolado em repartição pública." },
      { id: "C", text: "Em um meme humorístico publicado em rede social de entretenimento." },
      { id: "D", text: "Na letra de uma canção popular de ritmo regional que retrata o falar caipira." },
      { id: "E", text: "Em um bilhete rápido colado na geladeira para avisar um familiar sobre o almoço." }
    ],
    correctAnswer: "B",
    explanation: "Documentos oficiais, redações de vestibulares e petições formais exigem o estrito cumprimento da norma-padrão culta da língua portuguesa, garantindo precisão e impessoalidade.",
    distractorTips: "Contextos informais, artísticos e familiares acolhem variações coloquiais e marcas de oralidade."
  },
  {
    id: 10,
    subject: "Matemática",
    topic: "Regra de Três Composta",
    statement: "Cinco operários, trabalhando 8 horas por dia, constroem um muro de 40 metros em 6 dias. Quantos dias serão necessários para que 6 operários, trabalhando 10 horas por dia, construam um muro semelhante de 60 metros?",
    options: [
      { id: "A", text: "4 dias" },
      { id: "B", text: "5 dias" },
      { id: "C", text: "6 dias" },
      { id: "D", text: "7 dias" },
      { id: "E", text: "8 dias" }
    ],
    correctAnswer: "C",
    explanation: "Montando as razões: Dias (d): 6/d. Operários (inversa): 6/5. Horas/dia (inversa): 10/8. Comprimento (direta): 40/60 = 2/3. Logo: 6/d = (6/5) * (10/8) * (2/3) = (6*10*2)/(5*8*3) = 120/120 = 1. Assim, 6/d = 1 => d = 6 dias.",
    distractorTips: "Cuidado ao classificar grandezas diretamente e inversamente proporcionais em relação aos dias."
  },
  {
    id: 11,
    subject: "Língua Portuguesa",
    topic: "Efeitos de Sentido da Pontuação",
    statement: "Analise o trecho: 'A tecnologia trouxe conforto, facilidades, conexões globais... e uma solidão compartilhada.' As reticências foram empregadas com a intenção de:",
    options: [
      { id: "A", text: "Indicar uma citação direta retirada de obra estrangeira." },
      { id: "B", text: "Criar uma pausa reflexiva que prepara o leitor para uma quebra de expectativa ou contraste." },
      { id: "C", text: "Sinalizar que o autor esqueceu os argumentos complementares do período." },
      { id: "D", text: "Substituir uma conjunção explicativa obrigatória pela norma gramatical." },
      { id: "E", text: "Demonstrar hesitação involuntária do autor sobre a veracidade dos dados." }
    ],
    correctAnswer: "B",
    explanation: "As reticências criam uma suspensão rítmica que valoriza o impacto da antítese final ('e uma solidão compartilhada'), quebrando a sequência positiva inicial de conforto e facilidades.",
    distractorTips: "Reticências em prosa literária ou argumentativa têm valor expressivo e retórico planejado, não indicando esquecimento do autor."
  },
  {
    id: 12,
    subject: "Matemática",
    topic: "Estatística Básica - Média e Mediana",
    statement: "As notas de um estudante em cinco avaliações bimestrais foram: 6,0; 8,0; 5,0; 9,0 e 7,0. A média aritmética e a mediana dessas notas são, respectivamente:",
    options: [
      { id: "A", text: "7,0 e 7,0" },
      { id: "B", text: "7,0 e 8,0" },
      { id: "C", text: "7,2 e 7,0" },
      { id: "D", text: "6,8 e 6,0" },
      { id: "E", text: "7,5 e 7,0" }
    ],
    correctAnswer: "A",
    explanation: "Média: (6,0 + 8,0 + 5,0 + 9,0 + 7,0) / 5 = 35,0 / 5 = 7,0. Para a mediana, ordenamos o rol de dados: 5,0; 6,0; 7,0; 8,0; 9,0. O elemento central (3º termo) é exatamente 7,0.",
    distractorTips: "A mediana exige obrigatoriamente a ordenação dos dados (rol). Sem ordenar, o termo do meio seria 5,0."
  },
  {
    id: 13,
    subject: "Língua Portuguesa",
    topic: "Concordância Verbal e Nominal",
    statement: "Assinale a alternativa que obedece rigorosamente às regras de concordância da norma-padrão:",
    options: [
      { id: "A", text: "Fazem dez anos que a escola inaugurou o laboratório de ciências." },
      { id: "B", text: "Haviam muitos alunos ansiosos pelo resultado das provas do Saresp." },
      { id: "C", text: "Mais de um professor comentou as questões mais complexas da avaliação." },
      { id: "D", text: "Precisa-se de novos computadores para a sala de informática." },
      { id: "E", text: "Bastam cinco minutos de conversa para que se resolvam todos os equívocos." }
    ],
    correctAnswer: "E",
    explanation: "Na alternativa E, 'Bastam cinco minutos' (sujeito posposto no plural) e 'se resolvam todos os equívocos' (voz passiva sintética, sujeito plural) estão impecavelmente concordados. Em A e B, 'fazer' (tempo) e 'haver' (existir) são impessoais ('Faz dez anos', 'Havia muitos alunos'). Em C, com 'mais de um', o verbo fica no singular ('comentou' está no singular, mas E traz riqueza adicional de dupla concordância perfeita).",
    distractorTips: "Verbos impessoais (haver no sentido de existir, fazer indicando tempo decorrido) não admitem plural."
  },
  {
    id: 14,
    subject: "Matemática",
    topic: "Probabilidade Simples",
    statement: "Em uma urna há 12 bolas azuis, 8 bolas vermelhas e 5 bolas amarelas, todas idênticas em tamanho e textura. Retirando-se uma bola ao acaso, qual é a probabilidade percentual de ela ser vermelha?",
    options: [
      { id: "A", text: "20%" },
      { id: "B", text: "32%" },
      { id: "C", text: "40%" },
      { id: "D", text: "48%" },
      { id: "E", text: "50%" }
    ],
    correctAnswer: "B",
    explanation: "Total de bolas = 12 + 8 + 5 = 25 bolas. Casos favoráveis (vermelhas) = 8. Probabilidade = 8 / 25 = 32 / 100 = 32%.",
    distractorTips: "Dividir 8 por 20 (esquecendo as amarelas) daria 40%."
  },
  {
    id: 15,
    subject: "Língua Portuguesa",
    topic: "Ambiguidade e Clareza Textual",
    statement: "Considere a frase: 'O coordenador chamou o aluno e seu irmão para a sala dele.' A ocorrência de duplo sentido (ambiguidade) nessa oração deve-se ao uso do termo:",
    options: [
      { id: "A", text: "'chamou', que pode significar gritar ou convocar formalmente." },
      { id: "B", text: "'dele', que deixa incerto se a sala pertence ao coordenador ou ao aluno." },
      { id: "C", text: "'seu', que não especifica a faixa etária do irmão mencionado." },
      { id: "D", text: "'para', que gera dúvida quanto ao local físico de destino." },
      { id: "E", text: "'e', que pode sugerir oposição em vez de adição de pessoas." }
    ],
    correctAnswer: "B",
    explanation: "O pronome possessivo 'dele' gera ambiguidade anafórica clássica: o leitor não sabe se a sala referida é a do coordenador ou a do aluno.",
    distractorTips: "Para sanar essa ambiguidade na norma culta, recomenda-se: '...para a própria sala' ou '...para a sala do coordenador'."
  },
  {
    id: 16,
    subject: "Matemática",
    topic: "Função Afim e Gráficos",
    statement: "O reservatório de água de um colégio, inicialmente com 1.200 litros, apresentou um vazamento constante que perde 40 litros de água por hora. A expressão que fornece o volume V(t) restante no tanque após t horas de vazamento é:",
    options: [
      { id: "A", text: "V(t) = 40t - 1.200" },
      { id: "B", text: "V(t) = 1.200 + 40t" },
      { id: "C", text: "V(t) = 1.200 - 40t" },
      { id: "D", text: "V(t) = 1.200 / 40t" },
      { id: "E", text: "V(t) = 40(1.200 - t)" }
    ],
    correctAnswer: "C",
    explanation: "O volume inicial é de 1.200 L e a taxa de variação é decrescente (-40 L por hora). Logo, a lei da função afim é V(t) = 1.200 - 40t.",
    distractorTips: "A taxa é negativa porque há perda de água; logo, a alternativa B somaria água indevidamente."
  },
  {
    id: 17,
    subject: "Língua Portuguesa",
    topic: "Gêneros Textuais e Intertextualidade",
    statement: "Um cartaz de campanha governamental traz uma imagem impactante de torneira pingando sobre um solo rachado, acompanhada do slogan: 'Economize hoje para não faltar amanhã'. O gênero cartaz publicitário institucional caracteriza-se primordialmente por:",
    options: [
      { id: "A", text: "Narrar uma história de ficção para entreter o leitor em horas vagas." },
      { id: "B", text: "Descrever cientificamente a composição química e molecular da água tratada." },
      { id: "C", text: "Sensibilizar e persuadir a população para a adoção de hábitos de interesse coletivo." },
      { id: "D", text: "Comercializar um produto privado visando o lucro financeiro imediato." },
      { id: "E", text: "Divulgar instruções burocráticas sobre as tarifas cobradas pela companhia de saneamento." }
    ],
    correctAnswer: "C",
    explanation: "Campanhas institucionais têm finalidade persuasiva e cidadã: conscientizar a população para atitudes de benefício social coletivo (função apelativa ou conativa da linguagem).",
    distractorTips: "Diferente da propaganda comercial, a institucional não vende mercadorias, mas ideias e comportamentos."
  },
  {
    id: 18,
    subject: "Matemática",
    topic: "Razão, Proporção e Escala Cartográfica",
    statement: "Em um mapa confeccionado na escala de 1:50.000, a distância em linha reta entre duas escolas estaduais é de 6 centímetros. Qual é a distância real entre essas duas escolas, em quilômetros?",
    options: [
      { id: "A", text: "0,3 km" },
      { id: "B", text: "3,0 km" },
      { id: "C", text: "30 km" },
      { id: "D", text: "300 km" },
      { id: "E", text: "3.000 km" }
    ],
    correctAnswer: "B",
    explanation: "Distância real = 6 cm * 50.000 = 300.000 cm. Como 1 metro tem 100 cm, 300.000 cm = 3.000 m. Como 1 km tem 1.000 m, 3.000 m = 3,0 km.",
    distractorTips: "Erros comuns de conversão de unidades (cm para m e m para km) geram os distratores 0,3 km ou 30 km."
  },
  {
    id: 19,
    subject: "Língua Portuguesa",
    topic: "Crase e Regência Verbal",
    statement: "Assinale a frase em que o uso do acento grave indicativo de crase está CORRETO conforme a norma-padrão:",
    options: [
      { id: "A", text: "O estudante dedicou o resultado das provas à sua querida mãe." },
      { id: "B", text: "Os alunos compareceram à reunião dispostos à colaborar com o grêmio." },
      { id: "C", text: "O professor caminhou até à pé para economizar combustível." },
      { id: "D", text: "Entregamos o documento à um funcionário da secretaria escolar." },
      { id: "E", text: "As inscrições para o simulado serão abertas à partir de amanhã." }
    ],
    correctAnswer: "A",
    explanation: "O verbo dedicar é transitivo direto e indireto ('dedicou algo a alguém'). Antes de pronome possessivo feminino singular ('sua'), o artigo é facultativo, tornando o uso da crase perfeitamente lícito e correto. Nas demais alternativas, há crase indevida antes de verbo ('a colaborar', 'a partir'), antes de palavra masculina ('a pé') e antes de artigo indefinido ('a um').",
    distractorTips: "Nunca ocorre crase antes de verbos ('a partir', 'a colaborar') nem antes de substantivos masculinos ('a pé')."
  },
  {
    id: 20,
    subject: "Matemática",
    topic: "Progressão Aritmética (PA)",
    statement: "Para se preparar fisicamente para as aulas de educação física, um estudante elaborou uma rotina de caminhadas: no 1º dia caminhou 800 metros, no 2º dia caminhou 1.100 metros, no 3º dia 1.400 metros, e assim por diante, aumentando sempre 300 metros por dia. Quantos metros ele caminhará no 15º dia dessa rotina?",
    options: [
      { id: "A", text: "4.200 metros" },
      { id: "B", text: "4.800 metros" },
      { id: "C", text: "5.000 metros" },
      { id: "D", text: "5.300 metros" },
      { id: "E", text: "5.600 metros" }
    ],
    correctAnswer: "C",
    explanation: "Trata-se de uma PA com a1 = 800 e razão r = 300. A fórmula do termo geral é an = a1 + (n - 1)*r. Para n = 15: a15 = 800 + (15 - 1)*300 = 800 + 14*300 = 800 + 4.200 = 5.000 metros.",
    distractorTips: "Cuidado: multiplicar 15 * 300 daria 4.500, esquecendo que o primeiro termo não recebe o acréscimo da razão."
  }
];
