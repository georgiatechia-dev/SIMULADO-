import { Question } from '../types';

export const enem2Questions: Question[] = [
  {
    id: 1,
    subject: "Matemática",
    topic: "Matemática Financeira e Juros Compostos",
    statement: "Um microempreendedor tomou um empréstimo bancário de R$ 10.000,00 sob regime de juros compostos com taxa de 10% ao ano. Sabendo que ele quitará a dívida integralmente em um único pagamento ao final de 2 anos, qual será o montante total pago?",
    options: [
      { id: "A", text: "R$ 11.000,00" },
      { id: "B", text: "R$ 12.000,00" },
      { id: "C", text: "R$ 12.100,00" },
      { id: "D", text: "R$ 12.500,00" },
      { id: "E", text: "R$ 13.310,00" }
    ],
    correctAnswer: "C",
    explanation: "Fórmula de juros compostos: M = C * (1 + i)^t. M = 10.000 * (1 + 0,10)² = 10.000 * (1,10)² = 10.000 * 1,21 = R$ 12.100,00. No 1º ano o saldo vai para 11.000; no 2º ano rende 10% sobre 11.000 (+1.100), totalizando 12.100.",
    distractorTips: "R$ 12.000,00 seria o montante sob regime de juros simples (10% + 10% = 20%)."
  },
  {
    id: 2,
    subject: "Física",
    topic: "Óptica Geométrica e Refração",
    statement: "Ao olhar para uma piscina de águas calmas e límpidas a partir da borda, o fundo parece estar mais raso do que sua profundidade real. Esse efeito visual decorre do fenômeno da:",
    options: [
      { id: "A", text: "Reflexão total da luz na superfície da água." },
      { id: "B", text: "Refração da luz, na qual os raios luminosos sofrem desvio ao passar da água para o ar com mudança de velocidade." },
      { id: "C", text: "Difração das ondas luminosas ao contornar as bordas da piscina." },
      { id: "D", text: "Polarização seletiva da luz solar pelas moléculas de cloro." },
      { id: "E", text: "Dispersão cromática com absorção exclusiva da luz vermelha." }
    ],
    correctAnswer: "B",
    explanation: "Os raios de luz provenientes do fundo da piscina refratam ao passar da água (meio mais refringente) para o ar (meio menos refringente), afastando-se da normal. O cérebro humano projeta em linha reta o prolongamento desses raios refratados, formando uma imagem virtual do fundo em posição aparente mais elevada.",
    distractorTips: "Trata-se do fenômeno do dioptro plano (profundidade aparente)."
  },
  {
    id: 3,
    subject: "Química",
    topic: "Chuva Ácida e Poluição Atmosférica",
    statement: "A queima de combustíveis fósseis contendo impurezas de enxofre em usinas termelétricas e veículos automotores gera dióxido de enxofre (SO2). Na atmosfera, o SO2 oxida-se a SO3 e reage com o vapor de água originando a chuva ácida. O principal ácido formado por essa reação é o:",
    options: [
      { id: "A", text: "Ácido sulfúrico (H2SO4)" },
      { id: "B", text: "Ácido clorídrico (HCl)" },
      { id: "C", text: "Ácido fluorídrico (HF)" },
      { id: "D", text: "Ácido acético (CH3COOH)" },
      { id: "E", text: "Ácido carbônico (H2CO3)" }
    ],
    correctAnswer: "A",
    explanation: "A reação do trióxido de enxofre com água líquida ou vapor na atmosfera é: SO3(g) + H2O(l) -> H2SO4(aq). O ácido sulfúrico é um ácido forte diprótico que reduz drasticamente o pH da chuva para valores inferiores a 4,5, provocando corrosão de monumentos e acidificação de solos e corpos hídricos.",
    distractorTips: "O ácido carbônico decorre naturalmente da dissolução do CO2, conferindo à chuva não poluída um pH levemente ácido (~5,6)."
  },
  {
    id: 4,
    subject: "Biologia",
    topic: "Imunologia - Vacinas vs. Soros Terapêuticos",
    statement: "Em caso de picada por uma serpente peçonhenta (como a jararaca), o tratamento médico imediato exige a aplicação de soro antiofídico em vez de vacina. A justificativa biológica para essa conduta é que o soro:",
    options: [
      { id: "A", text: "Estimula o organismo da vítima a produzir anticorpos próprios lentamente ao longo de meses." },
      { id: "B", text: "Contém antígenos atenuados para criar memória imunológica de longo prazo." },
      { id: "C", text: "Contém anticorpos prontos que neutralizam o veneno circulante com ação curativa imediata (imunização passiva)." },
      { id: "D", text: "Funciona como um analgésico sintético sem qualquer interação com o sistema imune." },
      { id: "E", text: "Multiplica as células cancerígenas do fígado para metabolizar as toxinas." }
    ],
    correctAnswer: "C",
    explanation: "A vacina promove imunização ativa (introduz antígenos atenuados/inativados para o corpo produzir anticorpos e células de memória, de ação preventiva e lenta). O soro promove imunização passiva (introduz anticorpos prontos obtidos de outro organismo, com ação rápida e curativa para emergências, sem conferir memória de longo prazo).",
    distractorTips: "Lembre-se da regra mnemônica: Vacina = Ativa e Preventiva; Soro = Passivo e Curativo."
  },
  {
    id: 5,
    subject: "Matemática",
    topic: "Análise Combinatória - Combinações Simples",
    statement: "Uma equipe médica de um hospital universitário conta com 6 pediatras e 5 cirurgiões disponíveis. Deseja-se formar uma comissão de plantão composta por 3 pediatras e 2 cirurgiões. De quantas maneiras diferentes essa comissão pode ser formada?",
    options: [
      { id: "A", text: "50" },
      { id: "B", text: "100" },
      { id: "C", text: "150" },
      { id: "D", text: "200" },
      { id: "E", text: "300" }
    ],
    correctAnswer: "D",
    explanation: "A ordem de escolha não importa, logo usamos combinação simples. Escolha dos 3 pediatras entre 6: C(6,3) = (6*5*4)/(3*2*1) = 20. Escolha dos 2 cirurgiões entre 5: C(5,2) = (5*4)/(2*1) = 10. Pelo princípio multiplicativo: 20 * 10 = 200 comissões distintas.",
    distractorTips: "Cuidado para não somar (20 + 10 = 30) em vez de multiplicar as etapas da comissão."
  },
  {
    id: 6,
    subject: "Física",
    topic: "Energia Mecânica e Conservação",
    statement: "Um carrinho de montanha-russa de massa 400 kg parte do repouso do topo de uma colina a uma altura h = 20 metros em relação ao solo. Desprezando todos os atritos e a resistência do ar e adotando g = 10 m/s², qual é a velocidade do carrinho no ponto mais baixo da pista (ao nível do solo)?",
    options: [
      { id: "A", text: "10 m/s" },
      { id: "B", text: "14 m/s" },
      { id: "C", text: "20 m/s (72 km/h)" },
      { id: "D", text: "28 m/s" },
      { id: "E", text: "40 m/s" }
    ],
    correctAnswer: "C",
    explanation: "Pela conservação da energia mecânica: Em_inicial = Em_final => Ep_gravitacional = Ec_cinética => m * g * h = (m * v²) / 2. A massa se cancela: v² = 2 * g * h = 2 * 10 * 20 = 400 => v = √400 = 20 m/s.",
    distractorTips: "A velocidade independe da massa do carrinho quando o atrito é desconsiderado."
  },
  {
    id: 7,
    subject: "Química",
    topic: "Química Orgânica - Funções Oxigenadas",
    statement: "O aroma característico de banana utilizado em guloseimas artificiais é decorrente do acetato de isoamila. Esse composto orgânico pertence a qual função oxigenada, obtida classicamente pela reação de esterificação entre um ácido carboxílico e um álcool?",
    options: [
      { id: "A", text: "Éter" },
      { id: "B", text: "Éster" },
      { id: "C", text: "Cetona" },
      { id: "D", text: "Aldeído" },
      { id: "E", text: "Fenol" }
    ],
    correctAnswer: "B",
    explanation: "Os ésteres são compostos orgânicos caracterizados pelo grupo funcional R-COO-R', responsáveis pela maioria dos aromas e sabores florais e frutados artificiais (flavorizantes). São obtidos pela reação de Fischer entre ácido carboxílico e álcool.",
    distractorTips: "Éter possui oxigênio entre dois carbonos (R-O-R'); éster possui carbonila ligada a oxigênio (R-COO-R')."
  },
  {
    id: 8,
    subject: "Biologia",
    topic: "Fotossíntese e Respiração Celular",
    statement: "No ciclo das plantas terrestres, o gás oxigênio (O2) liberado para a atmosfera durante o processo fotossintético tem como origem molecular direta a:",
    options: [
      { id: "A", text: "Quebra das moléculas de dióxido de carbono (CO2) na fase escura." },
      { id: "B", text: "Fotólise da água (quebra de moléculas de H2O pela luz) na fase clara (fotoquímica)." },
      { id: "C", text: "Degradação enzimática da sacarose nas mitocôndrias celulares." },
      { id: "D", text: "Fixação biológica de nitrogênio gasoso nas raízes com nódulos bacterianos." },
      { id: "E", text: "Decomposição da celulose presente na parede celular dos cloroplastos." }
    ],
    correctAnswer: "B",
    explanation: "Experimentos clássicos com isótopos de oxigênio (O-18) demonstraram que todo o O2 gasoso desprendido na fotossíntese provém da oxidação (fotólise) da molécula de água (Reação de Hill) no fotossistema II, e não do gás carbônico.",
    distractorTips: "Erro histórico e muito comum: acreditar que o oxigênio liberado vem do CO2 absorvido pelo estômato."
  },
  {
    id: 9,
    subject: "Matemática",
    topic: "Geometria Espacial - Tronco de Pirâmide e Prismas",
    statement: "Uma piscina tem o formato de um paralelepípedo retângulo reto com 10 metros de comprimento, 5 metros de largura e 1,60 metro de profundidade constante. Se a piscina está preenchida até 75% de sua capacidade máxima, quantos litros de água ela contém?",
    options: [
      { id: "A", text: "40.000 litros" },
      { id: "B", text: "60.000 litros" },
      { id: "C", text: "75.000 litros" },
      { id: "D", text: "80.000 litros" },
      { id: "E", text: "100.000 litros" }
    ],
    correctAnswer: "B",
    explanation: "Volume total = 10 * 5 * 1,60 = 80 m³. Como 1 m³ = 1.000 L, a capacidade máxima é de 80.000 litros. Preenchida até 75%: 80.000 * 0,75 = 60.000 litros.",
    distractorTips: "Cuidado: 80.000 litros é o volume total para a piscina transbordando."
  },
  {
    id: 10,
    subject: "Física",
    topic: "Ondulatória e Efeito Doppler",
    statement: "Quando uma ambulância com a sirene ligada se aproxima em alta velocidade de um pedestre parado na calçada e em seguida se afasta, o pedestre percebe:",
    options: [
      { id: "A", text: "Um som mais agudo (frequência aparente maior) na aproximação e mais grave (frequência aparente menor) no afastamento." },
      { id: "B", text: "Um som mais grave durante todo o percurso devido à absorção do ar." },
      { id: "C", text: "Uma frequência sonora inalterada, mudando apenas a intensidade (volume)." },
      { id: "D", text: "A anulação mútua das ondas sonoras com silêncio total na aproximação." },
      { id: "E", text: "Um som mais agudo no afastamento devido à compressão do ar posterior." }
    ],
    correctAnswer: "A",
    explanation: "O Efeito Doppler é a aparente alteração na frequência recebida por um observador em movimento relativo à fonte de ondas. Na aproximação, as frentes de onda são comprimidas, reduzindo o comprimento de onda e aumentando a frequência percebida (som mais agudo). No afastamento, as frentes se distanciam (som mais grave).",
    distractorTips: "Frequência percebida altera a altura musical (grave/agudo), enquanto amplitude altera a intensidade (volume)."
  },
  {
    id: 11,
    subject: "Química",
    topic: "Soluções e Concentração Comum vs. Molaridade",
    statement: "Um técnico de laboratório dissolveu 4,0 gramas de hidróxido de sódio (NaOH) em água destilada suficiente para preparar exatamente 500 mL (0,5 L) de solução aquosa. Sabendo que a massa molar do NaOH é 40 g/mol, a concentração molar (molaridade) dessa solução é de:",
    options: [
      { id: "A", text: "0,1 mol/L" },
      { id: "B", text: "0,2 mol/L" },
      { id: "C", text: "0,4 mol/L" },
      { id: "D", text: "0,5 mol/L" },
      { id: "E", text: "2,0 mol/L" }
    ],
    correctAnswer: "B",
    explanation: "Número de mols de soluto: n = m / M = 4,0 g / 40 g/mol = 0,1 mol. Concentração molar: M = n / V(L) = 0,1 mol / 0,5 L = 0,2 mol/L.",
    distractorTips: "Cuidado: se usar o volume em mL (500) diretamente na fórmula sem converter para litros cometerá erro de fator 1.000."
  },
  {
    id: 12,
    subject: "Biologia",
    topic: "Biotecnologia e Enzimas de Restrição",
    statement: "Na tecnologia do DNA recombinante (engenharia genética), as chamadas 'enzimas de restrição' (ou endonucleases) exercem a função de:",
    options: [
      { id: "A", text: "Unir fragmentos de DNA isolados através de ligações peptídicas." },
      { id: "B", text: "Cortar o DNA em sequências nucleotídicas específicas conhecidas como sítios de restrição (palíndromos)." },
      { id: "C", text: "Duplicar o RNA mensageiro no citoplasma bacteriano." },
      { id: "D", text: "Destruir os ribossomos de células vegetais hospedeiras." },
      { id: "E", text: "Impedir a síntese proteica de animais transgênicos." }
    ],
    correctAnswer: "B",
    explanation: "As enzimas de restrição atuam como 'tesouras moleculares' bacterianas altamente específicas, reconhecendo sequências palindrômicas do DNA e clivando as ligações fosfodiéster para inserção de genes de interesse.",
    distractorTips: "A enzima responsável por colar os fragmentos é a DNA ligase; a que corta é a enzima de restrição."
  },
  {
    id: 13,
    subject: "Matemática",
    topic: "Estatística - Desvio Padrão e Regularidade",
    statement: "Três atletas competem no tiro ao alvo em 5 rodadas. Suas médias finais foram rigorosamente idênticas: 8,0 pontos. No entanto, os desvios-padrão de seus desempenhos foram: Atleta 1 = 0,5; Atleta 2 = 1,8; Atleta 3 = 2,4. O atleta mais regular (com pontuação mais homogênea e constante) foi o:",
    options: [
      { id: "A", text: "Atleta 1, pois possui o menor desvio-padrão." },
      { id: "B", text: "Atleta 2, pois seu desvio-padrão é a mediana dos valores." },
      { id: "C", text: "Atleta 3, pois quanto maior o desvio-padrão, maior a consistência." },
      { id: "D", text: "Todos são igualmente regulares porque tiveram a mesma média de 8,0 pontos." },
      { id: "E", text: "Não é possível concluir sem conhecer a moda das rodadas." }
    ],
    correctAnswer: "A",
    explanation: "O desvio-padrão mede o grau de dispersão dos dados em torno da média aritmética. Quanto menor o desvio-padrão, menor a variação entre os tiros e mais regular, homogêneo e previsível é o desempenho do competidor.",
    distractorTips: "Conceito clássico cobrado anualmente no ENEM: regularidade = menor desvio-padrão."
  },
  {
    id: 14,
    subject: "Física",
    topic: "Termodinâmica e Máquinas Térmicas",
    statement: "De acordo com o Segundo Princípio da Termodinâmica (enunciado de Kelvin-Planck), uma máquina térmica que opera em ciclos:",
    options: [
      { id: "A", text: "Pode converter 100% do calor recebido da fonte quente integralmente em trabalho mecânico." },
      { id: "B", text: "É incapaz de converter integralmente todo o calor retirado da fonte quente em trabalho mecânico, devendo obrigatoriamente rejeitar parte do calor para uma fonte fria." },
      { id: "C", text: "Apresenta rendimento real superior ao rendimento teórico do Ciclo de Carnot." },
      { id: "D", text: "Cria energia nova a partir do vácuo térmico de combustão." },
      { id: "E", text: "Funciona sem que haja qualquer diferença de temperatura entre as fontes." }
    ],
    correctAnswer: "B",
    explanation: "O enunciado de Kelvin-Planck estabelece a impossibilidade de construir uma máquina térmica que, operando em ciclo contínuo, tenha como único efeito retirar calor de uma fonte e transformá-lo integralmente em trabalho. O rendimento térmico é sempre estritamente inferior a 100%.",
    distractorTips: "Nenhuma máquina térmica, nem mesmo no Ciclo de Carnot ideal, atinge rendimento de 100% (violaria a 2ª Lei)."
  },
  {
    id: 15,
    subject: "Química",
    topic: "Equilíbrio Químico e Princípio de Le Chatelier",
    statement: "Considere a reação endotérmica em equilíbrio: N2O4(g) + calor <=> 2 NO2(g). Para deslocar o equilíbrio no sentido de aumentar a produção de gás NO2, deve-se:",
    options: [
      { id: "A", text: "Diminuir a temperatura do sistema reacional." },
      { id: "B", text: "Aumentar a temperatura e diminuir a pressão total sobre o sistema." },
      { id: "C", text: "Aumentar a pressão comprimindo o volume do reator." },
      { id: "D", text: "Adicionar um catalisador sólido heterogêneo." },
      { id: "E", text: "Retirar continuamente as moléculas de N2O4 do vaso reacional." }
    ],
    correctAnswer: "B",
    explanation: "Como a reação direta absorve calor (endotérmica), elevar a temperatura desloca o equilíbrio para a direita (absorve calor). Em termos de número de mols gasosos: 1 mol de N2O4(g) gera 2 mols de NO2(g). Diminuir a pressão favorece o lado com maior volume gasoso (direita). Logo, aumento de T e redução de P maximizam a formação de NO2.",
    distractorTips: "Catalisador não altera o estado de equilíbrio, apenas reduz a energia de ativação e acelera o tempo para atingi-lo."
  },
  {
    id: 16,
    subject: "Biologia",
    topic: "Evolução - Seleção Natural e Resistência Bacteriana",
    statement: "O uso indiscriminado e incorreto de antibióticos por pacientes contribui para o surgimento de 'superbactérias' resistentes. De acordo com a Teoria Sintética da Evolução (neodarwinismo), essa resistência decorre do fato de que o antibiótico:",
    options: [
      { id: "A", text: "Induz diretamente mutações nas bactérias para que elas aprendam a se defender." },
      { id: "B", text: "Atua como agente seletivo, eliminando as bactérias sensíveis e preservando as linhagens que já possuíam previamente mutações vantajosas de resistência." },
      { id: "C", text: "Altera o código genético do paciente tornando-o alérgico ao medicamento." },
      { id: "D", text: "Fortalece a membrana plasmática das bactérias por meio da transmissão de caracteres adquiridos pelo esforço." },
      { id: "E", text: "Estimula a divisão meiótica rápida das bactérias presentes na flora intestinal." }
    ],
    correctAnswer: "B",
    explanation: "Na visão neodarwinista, a variação genética (por mutação aleatória ou recombinação de plasmídeos) pré-existe na população. O medicamento não 'induz' a bactéria a criar resistência (ideia lamarckista do uso e desuso); ele atua como pressão seletiva externa, exterminando as suscetíveis e selecionando as resistentes.",
    distractorTips: "Cuidado com alternativas que usem termos teleológicos como 'as bactérias mutaram para sobreviver' (erro lamarckista)."
  },
  {
    id: 17,
    subject: "Matemática",
    topic: "Função Exponencial e Meia-Vida",
    statement: "Uma substância radioativa utilizada em exames de medicina nuclear tem meia-vida de 6 horas (a cada 6 horas sua massa decai pela metade). Se um paciente recebe inicialmente uma dose contendo 80 mg dessa substância, qual será a massa radioativa restante no organismo após decorridas 24 horas?",
    options: [
      { id: "A", text: "2,5 mg" },
      { id: "B", text: "5,0 mg" },
      { id: "C", text: "10,0 mg" },
      { id: "D", text: "20,0 mg" },
      { id: "E", text: "40,0 mg" }
    ],
    correctAnswer: "B",
    explanation: "Em 24 horas decorrem n = 24 / 6 = 4 meias-vidas. Massa restante: M = M0 / 2^n = 80 / 2⁴ = 80 / 16 = 5,0 mg. (80 -> 40 -> 20 -> 10 -> 5 mg).",
    distractorTips: "Após 4 meias-vidas a quantidade inicial dividiu-se por 16, e não por 4."
  },
  {
    id: 18,
    subject: "Física",
    topic: "Circuitos Elétricos e Associação de Resistores",
    statement: "Em uma residência, as lâmpadas do teto são instaladas em um circuito elétrico associadas em paralelo, e não em série. A principal vantagem prática dessa configuração é que:",
    options: [
      { id: "A", text: "Se uma das lâmpadas queimar, todas as outras permanecem acesas com a mesma tensão de 127 V / 220 V." },
      { id: "B", text: "A corrente elétrica total da casa diminui a cada lâmpada adicional que é acionada." },
      { id: "C", text: "A resistência elétrica equivalente da casa torna-se infinita, impedindo o aquecimento dos fios." },
      { id: "D", text: "O consumo de energia elétrica medido no relógio da concessionária é zerado." },
      { id: "E", text: "Todas as lâmpadas são obrigadas a operar com correntes elétricas rigorosamente nulas." }
    ],
    correctAnswer: "A",
    explanation: "Na ligação em paralelo, todos os ramos recebem a mesma diferença de potencial (ddp) da rede e funcionam de forma independente. Se uma lâmpada queima ou é desligada, o circuito nos outros ramos não é interrompido.",
    distractorTips: "Em série, se uma lâmpada queimar, o circuito inteiro é aberto e todas as outras se apagam (como nos pisca-piscas antigos)."
  },
  {
    id: 19,
    subject: "Química",
    topic: "Polímeros e Reciclagem",
    statement: "O Politereftalato de Etileno (PET), amplamente utilizado na fabricação de garrafas de refrigerantes e água mineral, é classificado como um polímero termoplástico porque:",
    options: [
      { id: "A", text: "Queima instantaneamente sem possibilidade de aquecimento térmico." },
      { id: "B", text: "Pode ser aquecido, amolecido, moldado e resfriado sucessivas vezes sem perder sua estrutura química fundamental, permitindo a reciclagem mecânica." },
      { id: "C", text: "Possui ligações cruzadas rígidas tridimensionais insolúveis que impedem a fusão." },
      { id: "D", text: "É biodegradável e decompõe-se na natureza em menos de 24 horas." },
      { id: "E", text: "É solúvel em água mineral sob temperatura ambiente." }
    ],
    correctAnswer: "B",
    explanation: "Polímeros termoplásticos (como PET, PEAD, PVC, PP) possuem cadeias lineares ou ramificadas unidas por forças intermoleculares que enfraquecem ao aquecer, permitindo fusão e remoldagem repetida (reciclagem mecânica). Já os termorrígidos possuem ligações cruzadas permanentes e não fundem.",
    distractorTips: "Termoplásticos = recicláveis por calor; termorrígidos/termofixos = degradam antes de fundir."
  },
  {
    id: 20,
    subject: "Biologia",
    topic: "Ecologia - Bioacumulação e Magnificação Trófica",
    statement: "Substâncias químicas tóxicas, lipossolúveis e não biodegradáveis (como o agrotóxico DDT ou o mercúrio metálico despejado em garimpos) acumulam-se ao longo da cadeia alimentar aquática. Em uma cadeia composta por fitoplâncton -> zooplâncton -> pequenos peixes -> peixes carnívoros -> garças pescadoras, a maior concentração do poluente por quilo de biomassa será encontrada no:",
    options: [
      { id: "A", text: "Fitoplâncton (produtores primários)" },
      { id: "B", text: "Zooplâncton (consumidores primários)" },
      { id: "C", text: "Pequenos peixes (consumidores secundários)" },
      { id: "D", text: "Peixes carnívoros (consumidores terciários)" },
      { id: "E", text: "Garças pescadoras (consumidores de topo de cadeia)" }
    ],
    correctAnswer: "E",
    explanation: "No fenômeno da magnificação trófica (ou biomagnificação), como os organismos não conseguem excretar nem metabolizar o poluente lipossolúvel, a substância vai se concentrando progressivamente a cada nível trófico superior. O topo da cadeia alimentar (as garças pescadoras) ingere grandes quantidades de biomassa contaminada, acumulando as taxas mais alarmantes e letais do veneno.",
    distractorTips: "Atenção: a energia diminui ao longo da cadeia alimentar, mas a concentração de substâncias bioacumulativas aumenta!"
  }
];
