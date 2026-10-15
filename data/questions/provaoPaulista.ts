import { Question } from '../types';

export const provaoPaulistaQuestions: Question[] = [
  {
    id: 1,
    subject: "História",
    topic: "Brasil Império e Crise Monárquica",
    statement: "No final do século XIX, a monarquia brasileira enfrentou uma progressiva perda de sustentação política. Dentre os fatores decisivos para a Proclamação da República em 1889, destaca-se:",
    options: [
      { id: "A", text: "A aliança incondicional entre a Igreja Católica e o Partido Conservador após a Questão Religiosa." },
      { id: "B", text: "A insatisfação dos cafeicultores do Vale do Paraíba com a abolição da escravidão em 1888 e o descontentamento militar pós-Guerra do Paraguai." },
      { id: "C", text: "A vitória esmagadora do Partido Liberal nas eleições parlamentares lideradas por intelectuais positivistas." },
      { id: "D", text: "A invasão de tropas estrangeiras no sul do país em virtude do término das relações diplomáticas com a Inglaterra." },
      { id: "E", text: "O fechamento do Congresso Nacional por D. Pedro II ao recusar a assinatura da Lei dos Sexagenários." }
    ],
    correctAnswer: "B",
    explanation: "A crise do Império foi precipitada pelo tripé: Questão Militar (militares descontentes e influenciados pelo positivismo pós-Guerra do Paraguai), Questão Religiosa (conflito entre o imperador e bispos católicos) e Questão Servil (a abolição sem indenização em 1888 alienou a aristocracia cafeeira escravista do Vale do Paraíba, gerando os 'republicanos de última hora').",
    distractorTips: "D. Pedro II não fechou o parlamento autoritariamente em 1889; a Proclamação foi um golpe militar articulado com cafeicultores paulistas e fluminenses."
  },
  {
    id: 2,
    subject: "Biologia",
    topic: "Genética Mendeliana e Grupos Sanguíneos",
    statement: "Um casal em que a mãe possui tipo sanguíneo A (heterozigota) e o pai possui tipo sanguíneo B (heterozigoto) consulta um geneticista sobre a probabilidade de terem um filho com tipo sanguíneo O. A resposta correta do geneticista é:",
    options: [
      { id: "A", text: "0% (impossível)" },
      { id: "B", text: "25%" },
      { id: "C", text: "50%" },
      { id: "D", text: "75%" },
      { id: "E", text: "100%" }
    ],
    correctAnswer: "B",
    explanation: "A mãe é I^A i e o pai é I^B i. Os possíveis genótipos dos descendentes são: I^A I^B (tipo AB - 25%), I^A i (tipo A - 25%), I^B i (tipo B - 25%) e ii (tipo O - 25%). Portanto, a probabilidade de gerar um filho do tipo O (ii) é de 1/4 = 25%.",
    distractorTips: "Se qualquer um dos pais fosse homozigoto (I^A I^A ou I^B I^B), a chance de ter filho O seria 0%."
  },
  {
    id: 3,
    subject: "Física",
    topic: "Cinemática e Movimento Uniformemente Variado",
    statement: "Um trem de passageiros da CPTM trafega a uma velocidade escalar constante de 72 km/h (20 m/s). Ao avistar um sinal vermelho à frente, o maquinista aciona os freios, imprimindo uma desaceleração constante de 2,0 m/s². Qual a distância percorrida pelo trem até a parada completa?",
    options: [
      { id: "A", text: "50 metros" },
      { id: "B", text: "80 metros" },
      { id: "C", text: "100 metros" },
      { id: "D", text: "120 metros" },
      { id: "E", text: "150 metros" }
    ],
    correctAnswer: "C",
    explanation: "Pela Equação de Torricelli: v² = v0² + 2*a*Δs. Na parada completa, v = 0 m/s. Logo: 0 = (20)² + 2*(-2)*Δs => 0 = 400 - 4*Δs => 4*Δs = 400 => Δs = 100 metros.",
    distractorTips: "Cuidado para não usar a velocidade em km/h (72) diretamente nas fórmulas do Sistema Internacional (m/s)."
  },
  {
    id: 4,
    subject: "Química",
    topic: "Estequiometria e Reações de Combustão",
    statement: "A combustão completa de 1 mol de gás propano (C3H8), de acordo com a equação não balanceada C3H8 + O2 -> CO2 + H2O, consome quantos mols de gás oxigênio (O2)?",
    options: [
      { id: "A", text: "3 mols" },
      { id: "B", text: "4 mols" },
      { id: "C", text: "5 mols" },
      { id: "D", text: "7 mols" },
      { id: "E", text: "10 mols" }
    ],
    correctAnswer: "C",
    explanation: "Balanceando a equação: 1 C3H8 + 5 O2 -> 3 CO2 + 4 H2O. O número de átomos de carbono no reagente é 3 (gerando 3 CO2), de hidrogênio é 8 (gerando 4 H2O). Nos produtos temos (3*2) + (4*1) = 6 + 4 = 10 átomos de O, que correspondem a 5 moléculas de O2.",
    distractorTips: "Esquecer de balancear os oxigênios da água (H2O) levaria ao erro de contar apenas os do CO2."
  },
  {
    id: 5,
    subject: "Geografia",
    topic: "Urbanização e Macrometrópole Paulista",
    statement: "O conceito de 'Macrometrópole Paulista' refere-se ao complexo territorial articulado no estado de São Paulo caracterizado por:",
    options: [
      { id: "A", text: "Uma área exclusivamente rural produtora de commodities voltadas à exportação açucareira." },
      { id: "B", text: "Uma rede urbana integrada que interliga as regiões metropolitanas de São Paulo, Campinas, Vale do Paraíba, Baixada Santista e Sorocaba, concentrando grande parte do PIB e da infraestrutura logística do país." },
      { id: "C", text: "A fusão formal de todos os municípios paulistas sob uma única prefeitura distrital autônoma." },
      { id: "D", text: "A desconcentração industrial absoluta com abandono das malhas rodoviárias do Sistema Anchieta-Imigrantes." },
      { id: "E", text: "Uma faixa territorial litorânea restrita dedicada prioritariamente ao ecoturismo sustentável." }
    ],
    correctAnswer: "B",
    explanation: "A Macrometrópole Paulista engloba as RMs de São Paulo, Campinas, Baixada Santista, Vale do Paraíba/Litoral Norte e Sorocaba, além de aglomerações urbanas como Jundiaí e Piracicaba. Concentra mais de 50% da população e mais de 80% do PIB paulista.",
    distractorTips: "Não se trata de uma única prefeitura política unificada, mas de uma conurbação e integração socioeconômica e logística regional."
  },
  {
    id: 6,
    subject: "Literatura",
    topic: "Modernismo Brasileiro - Semana de 22",
    statement: "No romance 'Macunaíma, o herói sem nenhum caráter' (1928), Mário de Andrade propõe uma reflexão sobre a identidade nacional brasileira por meio de:",
    options: [
      { id: "A", text: "Uma narrativa estritamente verossímil que copia as técnicas do Realismo português de Eça de Queirós." },
      { id: "B", text: "Uma rapsódia que funde mitos indígenas, lendas folclóricas, regionalismos e linguagem coloquial polifônica, desafiando a visão idealizada do índio romântico." },
      { id: "C", text: "Um elogio conservador à tradição clássica parnasiana e à métrica alexandrina decassílaba." },
      { id: "D", text: "Uma crônica biográfica e factual da fundação da Vila de São Paulo pelos jesuítas." },
      { id: "E", text: "Um manifesto político doutrinário em defesa da monarquia parlamentarista." }
    ],
    correctAnswer: "B",
    explanation: "Mário de Andrade estruturou 'Macunaíma' como rapsódia modernista, costurando relatos etnográficos de Koch-Grünberg, folclore amazônico e nordestino e oralidade popular. O 'sem nenhum caráter' significa que o caráter nacional ainda estava em formação plástica.",
    distractorTips: "Macunaíma desconstrói frontalmente o indianismo idealizado de José de Alencar ('O Guarani'), não sendo realista clássico."
  },
  {
    id: 7,
    subject: "Matemática",
    topic: "Geometria Espacial - Cilindros e Volumes",
    statement: "Uma caixa-d'água cilíndrica tem raio da base medindo 2 metros e altura de 3 metros. Considerando π = 3,14, qual é a capacidade aproximada desse reservatório em litros? (Lembre-se: 1 m³ = 1.000 litros)",
    options: [
      { id: "A", text: "12.560 litros" },
      { id: "B", text: "25.120 litros" },
      { id: "C", text: "37.680 litros" },
      { id: "D", text: "50.240 litros" },
      { id: "E", text: "75.360 litros" }
    ],
    correctAnswer: "C",
    explanation: "Volume do cilindro: V = π * r² * h. V = 3,14 * (2)² * 3 = 3,14 * 4 * 3 = 3,14 * 12 = 37,68 m³. Convertendo para litros: 37,68 * 1.000 = 37.680 litros.",
    distractorTips: "Não elevar o raio ao quadrado geraria V = 3,14 * 2 * 3 = 18,84 m³ (18.840 L)."
  },
  {
    id: 8,
    subject: "Filosofia",
    topic: "Teoria Política - Contrato Social em Hobbes e Locke",
    statement: "Enquanto Thomas Hobbes argumentava que no estado de natureza o homem vive em constante 'guerra de todos contra todos', John Locke sustentava que:",
    options: [
      { id: "A", text: "O homem no estado de natureza já possui direitos naturais inalienáveis (vida, liberdade e propriedade), e o Estado surge como árbitro imparcial para protegê-los." },
      { id: "B", text: "O monarca absolutista possui autoridade divina inquestionável para destituir a propriedade privada." },
      { id: "C", text: "A sociedade deve abolir completamente o governo e retornar ao estado selvagem primitivo." },
      { id: "D", text: "O poder político pertence exclusivamente à casta sacerdotal que interpreta os desígnios teológicos." },
      { id: "E", text: "As leis de mercado dispensam totalmente qualquer regulamentação civil ou contratual." }
    ],
    correctAnswer: "A",
    explanation: "Locke é o pai do liberalismo clássico: no estado de natureza, os indivíduos desfrutam de direitos naturais (vida, liberdade e bens/propriedade). O contrato social é firmado para instituir um magistrado comum capaz de dirimir conflitos e coibir abusos.",
    distractorTips: "Hobbes defendia o absolutismo (Leviatã); Locke defendia a limitação estrita do poder governamental com direito de rebelião."
  },
  {
    id: 9,
    subject: "Sociologia",
    topic: "Conceito de Anomia Social em Émile Durkheim",
    statement: "Para o sociólogo clássico Émile Durkheim, o conceito de 'anomia' refere-se:",
    options: [
      { id: "A", text: "À harmonia perfeita e espontânea entre as diferentes classes sociais na indústria moderna." },
      { id: "B", text: "A um estado de fragilização ou ausência relativa de normas sociais reguladoras, gerando desorientação e perda de coesão coletiva." },
      { id: "C", text: "À revolução proletária violenta destinada a confiscar os meios de produção privada." },
      { id: "D", text: "Ao isolamento geográfico de tribos pré-capitalistas no continente americano." },
      { id: "E", text: "À submissão cega do cidadão às leis imperiais de regimes totalitários." }
    ],
    correctAnswer: "B",
    explanation: "Durkheim define anomia (ausência de normas, do grego a-nomos) como uma condição patológica em que as regras sociais não conseguem disciplinar as condutas individuais, ocorrendo frequentemente em momentos de rápida transformação econômica ou crise.",
    distractorTips: "A revolução e luta de classes pertencem ao referencial marxista, e não à sociologia durkheimiana funcionalista."
  },
  {
    id: 10,
    subject: "Química",
    topic: "Eletroquímica e Potencial de Oxirredução",
    statement: "Em uma pilha galvânica de Daniell composta por eletrodos de Zinco (Zn) e Cobre (Cu), sabendo que o potencial padrão de redução do Cu²⁺ (+0,34 V) é maior que o do Zn²⁺ (-0,76 V), é correto afirmar que:",
    options: [
      { id: "A", text: "O zinco sofre redução e atua como cátodo da pilha." },
      { id: "B", text: "O cobre sofre oxidação e perde massa no ânodo." },
      { id: "C", text: "O zinco metálico oxida no ânodo e os elétrons fluem do eletrodo de zinco para o eletrodo de cobre através do circuito externo." },
      { id: "D", text: "A força eletromotriz (diferença de potencial) padrão dessa pilha é de -0,42 V." },
      { id: "E", text: "A reação global da pilha é não espontânea, necessitando de uma fonte externa de energia elétrica." }
    ],
    correctAnswer: "C",
    explanation: "Quem tem menor potencial de redução oxida (Zn -> Zn²⁺ + 2e⁻ no ânodo). Quem tem maior potencial de redução reduz (Cu²⁺ + 2e⁻ -> Cu no cátodo). Os elétrons partem do ânodo para o cátodo. A ddp = E(redução) - E(oxidação) = 0,34 - (-0,76) = +1,10 V (reação espontânea).",
    distractorTips: "O fluxo de elétrons sempre vai do ânodo (oxidação) para o cátodo (redução). A ddp da pilha Daniell é positiva (+1,10 V)."
  },
  {
    id: 11,
    subject: "Língua Inglesa",
    topic: "Reading Comprehension and Connectors",
    context: "'Renewable energy sources such as solar and wind power have expanded exponentially over the past decade. Nevertheless, grid stability and long-duration storage remain significant technical challenges that demand robust infrastructure investments.'",
    statement: "In the context of the sentence above, the transition word 'Nevertheless' conveys an idea of:",
    options: [
      { id: "A", text: "Addition (adding another similar advantage)." },
      { id: "B", text: "Contrast or concession (introducing an unexpected difficulty or limitation)." },
      { id: "C", text: "Chronological sequence (indicating which event happened first in time)." },
      { id: "D", text: "Cause and effect (explaining the direct reason for renewable expansion)." },
      { id: "E", text: "Conclusion (summarizing the final paragraph of an essay)." }
    ],
    correctAnswer: "B",
    explanation: "'Nevertheless' é um conector de contraste/concessão (equivalente a 'contudo', 'todavia', 'no entanto'), introduzindo o contraponto dos desafios de infraestrutura e estabilidade da rede elétrica.",
    distractorTips: "Addition seria 'Furthermore' ou 'Moreover'; causa seria 'Because' ou 'Since'."
  },
  {
    id: 12,
    subject: "Física",
    topic: "Termologia e Calorimetria",
    statement: "Uma barra metálica de 500 gramas com calor específico de 0,10 cal/(g·°C) recebe 2.000 calorias de uma fonte térmica sem mudar de estado físico. Qual é a variação de temperatura (ΔT) experimentada pela barra?",
    options: [
      { id: "A", text: "20 °C" },
      { id: "B", text: "30 °C" },
      { id: "C", text: "40 °C" },
      { id: "D", text: "50 °C" },
      { id: "E", text: "60 °C" }
    ],
    correctAnswer: "C",
    explanation: "Pela equação fundamental da calorimetria: Q = m * c * ΔT. 2.000 = 500 * 0,10 * ΔT => 2.000 = 50 * ΔT => ΔT = 2.000 / 50 = 40 °C.",
    distractorTips: "Cuidado: 500 * 0,10 = 50 cal/°C (capacidade térmica). Dividir 2.000 por 50 dá 40."
  },
  {
    id: 13,
    subject: "Biologia",
    topic: "Ecologia e Relações Ecológicas",
    statement: "A relação ecológica existente entre as orquídeas e as árvores sobre as quais se apoiam para obter melhor incidência de luz solar, sem retirar nutrientes da árvore hospedeira, é classificada como:",
    options: [
      { id: "A", text: "Parasitismo (desarmônica interespecífica)" },
      { id: "B", text: "Epifitismo / Comensalismo (harmônica interespecífica)" },
      { id: "C", text: "Mutualismo obrigatório (harmônica em que nenhuma sobrevive sem a outra)" },
      { id: "D", text: "Predatismo (desarmônica interespecífica)" },
      { id: "E", text: "Amensalismo (desarmônica por secreção de toxinas)" }
    ],
    correctAnswer: "B",
    explanation: "O epifitismo é uma forma de inquilinismo/comensalismo vegetal: a planta epífita usa a árvore apenas como suporte físico para alcançar luz, sem causar prejuízo nem perfurar os vasos condutores da hospedeira (+ / 0).",
    distractorTips: "Plantas parasitas (como o cipó-chumbo ou a erva-de-passarinho) introduzem haustórios na seiva, o que não ocorre com orquídeas."
  },
  {
    id: 14,
    subject: "História",
    topic: "Guerra Fria e América Latina",
    statement: "A crise dos mísseis em Cuba (1962) representou um dos momentos de maior tensão da Guerra Fria. O desfecho dessa crise envolveu o acordo diplomático secreto entre Estados Unidos e União Soviética que estabeleceu:",
    options: [
      { id: "A", text: "A retirada dos mísseis soviéticos de Cuba mediante a garantia norte-americana de não invadir a ilha e a futura retirada de mísseis dos EUA instalados na Turquia." },
      { id: "B", text: "A anexação militar definitiva da ilha de Cuba ao território norte-americano." },
      { id: "C", text: "O bombardeio nuclear preventivo de Moscou pelas forças da OTAN." },
      { id: "D", text: "A rendição incondicional de Fidel Castro e o retorno da ditadura de Fulgencio Batista." },
      { id: "E", text: "A dissolução imediata do Pacto de Varsóvia e a queda do Muro de Berlim." }
    ],
    correctAnswer: "A",
    explanation: "Kennedy e Khrushchev negociaram diretamente: Moscou desmantelou as bases de mísseis nucleares em Cuba em troca do compromisso público de Washington de não invadir a ilha caribenha, além de um acordo reservado para retirar mísseis Júpiter da Turquia e da Itália.",
    distractorTips: "A crise foi solucionada pela via da diplomacia de cúpula, evitando o confronto nuclear direto."
  },
  {
    id: 15,
    subject: "Matemática",
    topic: "Trigonometria no Triângulo Retângulo",
    statement: "Um observador na praia enxerga o topo de um farol sob um ângulo de elevação de 30°. Ele caminha 50 metros em linha reta em direção ao farol e passa a enxergá-lo sob um ângulo de 60°. Sabendo que tg(30°) = √3/3 e tg(60°) = √3, a altura aproximada do farol é:",
    options: [
      { id: "A", text: "25 metros" },
      { id: "B", text: "25√3 metros (aproximadamente 43,3 m)" },
      { id: "C", text: "50 metros" },
      { id: "D", text: "50√3 metros" },
      { id: "E", text: "75 metros" }
    ],
    correctAnswer: "B",
    explanation: "Seja h a altura e x a distância final até o farol. Temos: tg(60°) = h / x => h = x * √3 => x = h / √3. Na primeira posição: tg(30°) = h / (x + 50) => √3 / 3 = h / (h/√3 + 50). Resolvendo: (√3/3)*(h/√3 + 50) = h => h/3 + (50√3)/3 = h => (2/3)h = (50√3)/3 => 2h = 50√3 => h = 25√3 m ≈ 43,3 m.",
    distractorTips: "Trata-se do clássico problema de dois ângulos de visada trigonométricos."
  },
  {
    id: 16,
    subject: "Geografia",
    topic: "Climatologia e Dinâmica das Massas de Ar no Brasil",
    statement: "Durante os meses de inverno no Centro-Sul brasileiro, a ocorrência de quedas bruscas de temperatura, geadas no interior paulista e o fenômeno da 'friagem' na Amazônia ocidental decorrem da atuação da:",
    options: [
      { id: "A", text: "Massa Equatorial Continental (mEc), quente e extremamente instável." },
      { id: "B", text: "Massa Tropical Atlântica (mTa), associada a estiagens prolongadas." },
      { id: "C", text: "Massa Polar Atlântica (mPa), fria e de alta pressão, que sobe pelas planícies do interior do continente." },
      { id: "D", text: "Massa Tropical Continental (mTc), originária da depressão do Chaco." },
      { id: "E", text: "Massa Equatorial Atlântica (mEa), geradora de tempestades tropicais costeiras." }
    ],
    correctAnswer: "C",
    explanation: "A Massa Polar Atlântica (mPa) forma-se no extremo sul do continente. No inverno, penetra pelo corredor de planícies do interior da América do Sul (bacias do Prata e Paraguai), atingindo o Sudeste (trazendo frentes frias e geadas) e o Norte (provocando o fenômeno da friagem).",
    distractorTips: "A mEc é quente e úmida (amazônica); a mTc é quente e seca (chaco)."
  },
  {
    id: 17,
    subject: "Língua Portuguesa",
    topic: "Funções da Linguagem",
    statement: "Em um dicionário, ao ler o verbete: 'Simulado (substantivo masculino): prova ou teste preparatório realizado com formato e condições semelhantes aos de um exame oficial', a função da linguagem que se destaca é a:",
    options: [
      { id: "A", text: "Metalinguística, pois o código linguístico é empregado para explicar o próprio código." },
      { id: "B", text: "Emotiva (ou expressiva), pois manifesta os sentimentos íntimos do lexicógrafo." },
      { id: "C", text: "Conativa (ou apelativa), pois busca persuadir o leitor a adquirir o livro." },
      { id: "D", text: "Fática, pois seu objetivo central é apenas testar o canal de comunicação sonora." },
      { id: "E", text: "Poética, pois prioriza o ritmo, rimas e a musicalidade estética das frases." }
    ],
    correctAnswer: "A",
    explanation: "A função metalinguística ocorre quando a linguagem tem como tema ou foco explicativo ela mesma (o código explicando o código, como ocorre em dicionários, gramáticas e glossários).",
    distractorTips: "Função fática foca no canal ('Alô? Está me ouvindo?'); poética foca na mensagem estética; emotiva no emissor."
  },
  {
    id: 18,
    subject: "Física",
    topic: "Eletrodinâmica - Lei de Ohm e Potência Elétrica",
    statement: "Um chuveiro elétrico residencial opera sob tensão de 220 V com uma potência nominal de 4.400 W. A intensidade da corrente elétrica que percorre o circuito e a resistência elétrica desse aparelho valem, respectivamente:",
    options: [
      { id: "A", text: "10 A e 22 Ω" },
      { id: "B", text: "20 A e 11 Ω" },
      { id: "C", text: "20 A e 22 Ω" },
      { id: "D", text: "40 A e 5,5 Ω" },
      { id: "E", text: "15 A e 14,6 Ω" }
    ],
    correctAnswer: "B",
    explanation: "Potência: P = U * i => 4.400 = 220 * i => i = 4.400 / 220 = 20 A. Resistência pela Primeira Lei de Ohm: U = R * i => 220 = R * 20 => R = 220 / 20 = 11 Ω.",
    distractorTips: "Também pode ser verificado por P = U² / R: R = (220)² / 4.400 = 48.400 / 4.400 = 11 Ω."
  },
  {
    id: 19,
    subject: "Química",
    topic: "Termoquímica - Entalpia de Reação",
    statement: "Dada a equação termoquímica N2(g) + 3 H2(g) -> 2 NH3(g) com ΔH = -92,2 kJ/mol, pode-se afirmar corretamente que a formação de amônia a partir de seus gases simples:",
    options: [
      { id: "A", text: "É um processo endotérmico que absorve calor do meio ambiente." },
      { id: "B", text: "É um processo exotérmico que libera 92,2 kJ de calor a cada 2 mols de amônia produzidos." },
      { id: "C", text: "Apresenta entalpia dos produtos superior à entalpia dos reagentes." },
      { id: "D", text: "Ocorre sem nenhuma troca de energia com o meio externo." },
      { id: "E", text: "Possui calor de reação positivo sob pressão constante." }
    ],
    correctAnswer: "B",
    explanation: "Um ΔH com sinal negativo (ΔH < 0) caracteriza uma reação exotérmica, na qual há liberação de calor para as vizinhanças. Como a equação balanceada produz 2 mols de NH3, liberam-se 92,2 kJ a cada 2 mols gerados.",
    distractorTips: "Processos endotérmicos têm ΔH positivo e entalpia dos produtos maior que a dos reagentes."
  },
  {
    id: 20,
    subject: "Biologia",
    topic: "Fisiologia Humana - Sistema Circulatório e Hematose",
    statement: "No coração humano, o sangue venoso (pobre em O2 e rico em CO2) chega ao átrio direito através das veias cavas e é bombeado pelo ventrículo direito para os pulmões através da:",
    options: [
      { id: "A", text: "Artéria aorta" },
      { id: "B", text: "Artéria pulmonar" },
      { id: "C", text: "Veia pulmonar" },
      { id: "D", text: "Veia porta hepática" },
      { id: "E", text: "Artéria coronária descendente" }
    ],
    correctAnswer: "B",
    explanation: "A pequena circulação (pulmonar) inicia no ventrículo direito, que ejeta sangue venoso para as artérias pulmonares em direção aos pulmões. Lá ocorre a hematose (troca gasosa) e o sangue oxigenado retorna pelas veias pulmonares ao átrio esquerdo.",
    distractorTips: "Atenção: artérias saem do coração; a artéria pulmonar é a única artéria do corpo adulto que transporta sangue venoso."
  }
];
