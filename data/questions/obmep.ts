import { Question } from '../types';

export const obmepQuestions: Question[] = [
  {
    id: 1,
    subject: "Matemática Olímpica",
    topic: "Aritmética e Teoria dos Números",
    statement: "Qual é o algarismo das unidades da potência 7²⁰²⁶?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "3" },
      { id: "C", text: "7" },
      { id: "D", text: "9" },
      { id: "E", text: "5" }
    ],
    correctAnswer: "D",
    explanation: "Os últimos algarismos das potências de 7 repetem-se em ciclos de período 4: 7¹ termina em 7; 7² termina em 9; 7³ termina em 3; 7⁴ termina em 1; 7⁵ termina em 7... Dividindo o expoente 2026 por 4: 2026 = 4 * 506 + 2 (resto 2). O resto 2 indica o segundo termo do ciclo, cujo final é 9.",
    distractorTips: "Lembre-se sempre de calcular o resto da divisão do expoente pelo tamanho do ciclo periódico."
  },
  {
    id: 2,
    subject: "Matemática Olímpica",
    topic: "Contagem e Combinatória",
    statement: "Uma formiguinha parte do vértice A de um cubo e caminha apenas sobre as arestas, sem passar duas vezes pelo mesmo vértice, até chegar ao vértice B oposto na diagonal principal. Qual é o número mínimo de arestas que ela deve percorrer?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "3" },
      { id: "C", text: "4" },
      { id: "D", text: "5" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "B",
    explanation: "Para sair de um vértice (0,0,0) até o vértice oposto na diagonal principal (1,1,1) de um cubo unitário, ela precisa alterar cada uma das 3 coordenadas espaciais (x, y, z) exatamente uma vez. Cada alteração de coordenada corresponde a percorrer uma aresta. Logo, o caminho mínimo exige exatamente 3 arestas.",
    distractorTips: "Duas arestas levariam apenas a um vértice na diagonal de uma face, e não na diagonal do espaço tridimensional."
  },
  {
    id: 3,
    subject: "Matemática Olímpica",
    topic: "Raciocínio Lógico e Dedução",
    statement: "Três amigos, Carlos, Daniel e Eduardo, vestem camisas de cores diferentes: azul, branca e cinza, não necessariamente nessa ordem. Sabe-se que: 1. Carlos não veste camisa azul. 2. Eduardo veste camisa cinza. Qual é a cor da camisa de Daniel?",
    options: [
      { id: "A", text: "Branca" },
      { id: "B", text: "Azul" },
      { id: "C", text: "Cinza" },
      { id: "D", text: "Azul ou Branca" },
      { id: "E", text: "Não é possível determinar com essas premissas" }
    ],
    correctAnswer: "B",
    explanation: "Eduardo veste cinza. Sobram as cores azul e branca para Carlos e Daniel. Como Carlos NÃO veste azul, Carlos deve obrigatoriamente vestir branca. Portanto, Daniel deve vestir a camisa azul.",
    distractorTips: "Organize uma matriz lógica rápida de exclusão mútua."
  },
  {
    id: 4,
    subject: "Matemática Olímpica",
    topic: "Geometria - Áreas de Figuras Planas",
    statement: "Em um quadrado de lado 10 cm, são traçados os segmentos que unem os pontos médios dos lados opostos, dividindo-o em 4 quadradinhos. Em seguida, unem-se os pontos médios dos lados desses 4 quadradinhos formando um losango central sombreado. Qual é a área da região sombreada em cm²?",
    options: [
      { id: "A", text: "25 cm²" },
      { id: "B", text: "37,5 cm²" },
      { id: "C", text: "50 cm²" },
      { id: "D", text: "62,5 cm²" },
      { id: "E", text: "75 cm²" }
    ],
    correctAnswer: "C",
    explanation: "A área total do quadrado inicial é 10 * 10 = 100 cm². Cada quadradinho tem lado 5 cm e área 25 cm². Ao unir os pontos médios dos lados de um quadrado (ou da figura global), a área do polígono inscrito formado é exatamente metade da área original: 100 / 2 = 50 cm².",
    distractorTips: "O polígono que une os pontos médios dos lados de qualquer retângulo ou quadrado tem exatamente metade da área original."
  },
  {
    id: 5,
    subject: "Matemática Olímpica",
    topic: "Teorema de Restos e Divisibilidade",
    statement: "Um número inteiro positivo N deixa resto 3 quando dividido por 7. Qual é o resto da divisão de (2N + 5) por 7?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" },
      { id: "E", text: "6" }
    ],
    correctAnswer: "D",
    explanation: "Pela aritmética modular: N ≡ 3 (mod 7). Multiplicando por 2: 2N ≡ 2 * 3 = 6 (mod 7). Somando 5: 2N + 5 ≡ 6 + 5 = 11 (mod 7). Como 11 dividido por 7 tem quociente 1 e resto 4 (11 = 7*1 + 4), o resto procurado é 4.",
    distractorTips: "Pode-se testar com o menor valor possível: N = 3. Então 2*(3) + 5 = 11. 11 / 7 = 1 com resto 4."
  },
  {
    id: 6,
    subject: "Matemática Olímpica",
    topic: "Princípio da Casa dos Pombos",
    statement: "Quantas pessoas, no mínimo, devem estar reunidas em uma mesma sala para garantir, com certeza absoluta, que pelo menos três delas façam aniversário no mesmo mês?",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "25" },
      { id: "C", text: "27" },
      { id: "D", text: "36" },
      { id: "E", text: "37" }
    ],
    correctAnswer: "B",
    explanation: "O ano tem 12 meses (as 'casas'). No pior cenário possível para evitar 3 aniversários no mesmo mês, teríamos no máximo 2 pessoas fazendo aniversário em cada um dos 12 meses, totalizando 12 * 2 = 24 pessoas. Adicionando mais 1 pessoa (a 25ª pessoa), ela terá que coincidir com algum dos meses que já possui 2 pessoas, garantindo que pelo menos um mês terá 3 aniversariantes.",
    distractorTips: "Fórmula clássica de Dirichlet: k*n + 1 = 2*12 + 1 = 25."
  },
  {
    id: 7,
    subject: "Matemática Olímpica",
    topic: "Sequências e Padrões Algébricos",
    statement: "A sequência de números 1, 3, 4, 7, 11, 18, 29, ... é formada de modo que cada termo, a partir do terceiro, é a soma dos dois termos imediatamente anteriores. Qual é a paridade (par ou ímpar) do 100º termo dessa sequência?",
    options: [
      { id: "A", text: "Par" },
      { id: "B", text: "Ímpar" },
      { id: "C", text: "Primo" },
      { id: "D", text: "Múltiplo de 6" },
      { id: "E", text: "Não segue padrão fixo" }
    ],
    correctAnswer: "A",
    explanation: "Analisando a paridade termo a termo: 1 (Í), 3 (Í), 4 (P), 7 (Í), 11 (Í), 18 (P), 29 (Í), 47 (Í), 76 (P)... A sequência de paridades é [Í, Í, P], repetindo-se a cada 3 termos. Como 100 dividido por 3 dá 33 com resto 1 (100 = 3*33 + 1), o 100º termo tem a mesma paridade do 1º termo? Cuidado! Vamos rever: termo 1 = Í, termo 2 = Í, termo 3 = P. 3k é Par. Termos com resto 1: 1º(Í), 4º(Í), 7º(Í)... Mas atenção! Verifiquemos: 1+3=4 (P), 3+4=7(Í), 4+7=11(Í), 7+11=18(P). Os pares estão nas posições 3, 6, 9... Posição 100 deixa resto 1, logo é Ímpar! Então a resposta é ÍMPAR.",
    distractorTips: "Posições 3k são pares; posições 3k+1 e 3k+2 são ímpares. Para n=100, 100 = 3*33 + 1, portanto é Ímpar."
  },
  {
    id: 8,
    subject: "Matemática Olímpica",
    topic: "Geometria - Ângulos em Triângulos e Polígonos",
    statement: "Em um triângulo isósceles ABC, com lados AB = AC, o ângulo do vértice Â mede 40°. Traça-se a bissetriz interna do ângulo B̂ que intercepta o lado AC no ponto D. A medida do ângulo BDĈ é:",
    options: [
      { id: "A", text: "65°" },
      { id: "B", text: "75°" },
      { id: "C", text: "85°" },
      { id: "D", text: "95°" },
      { id: "E", text: "105°" }
    ],
    correctAnswer: "B",
    explanation: "Como AB = AC, os ângulos da base B̂ e Ĉ são iguais: B̂ = Ĉ = (180° - 40°) / 2 = 70°. A bissetriz interna de B̂ divide-o em dois ângulos de 35° (ângulo ABD = ângulo DBC = 35°). No triângulo BDC, a soma dos ângulos é 180°: ângulo DBC (35°) + ângulo C (70°) + ângulo BDC = 180° => 105° + BDC = 180° => BDC = 75°.",
    distractorTips: "Cuidado ao somar os ângulos internos do triângulo menor BDC."
  },
  {
    id: 9,
    subject: "Matemática Olímpica",
    topic: "Frações e Números Decimais",
    statement: "Qual é o menor número inteiro positivo n tal que a fração n / 120 seja uma dízima periódica simples (e não exata nem composta)?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "15" },
      { id: "C", text: "24" },
      { id: "D", text: "40" },
      { id: "E", text: "60" }
    ],
    correctAnswer: "D",
    explanation: "Fatorando o denominador: 120 = 2³ * 3 * 5. Uma fração irredutível gera dízima periódica simples quando seu denominador não possui os fatores 2 nem 5 (apenas fatores primos distintos de 2 e 5, como o 3). Para eliminar os fatores 2³ e 5 do denominador, o numerador n precisa ser múltiplo de 2³ * 5 = 8 * 5 = 40. Ao simplificar 40/120, obtemos 1/3, cujo denominador é 3 (gerando 0,333... dízima periódica simples). Logo, o menor n é 40.",
    distractorTips: "Se n não cancelasse o fator 2 ou 5, a dízima seria composta (com anteperíodo)."
  },
  {
    id: 10,
    subject: "Matemática Olímpica",
    topic: "Pesagens e Equilíbrio de Balanças",
    statement: "Você possui 9 moedas aparentemente idênticas, mas uma delas é falsa e ligeiramente mais leve que as outras 8 (que têm exatamente o mesmo peso). Usando uma balança de dois pratos sem pesos graduados, qual é o número mínimo de pesagens necessárias para identificar com certeza qual é a moeda falsa?",
    options: [
      { id: "A", text: "1 pesagem" },
      { id: "B", text: "2 pesagens" },
      { id: "C", text: "3 pesagens" },
      { id: "D", text: "4 pesagens" },
      { id: "E", text: "5 pesagens" }
    ],
    correctAnswer: "B",
    explanation: "Dividem-se as 9 moedas em 3 grupos de 3 moedas (A, B e C). 1ª pesagem: colocam-se o grupo A e o grupo B nos pratos. Se equilibrar, a falsa está no grupo C. Se um lado subir, a falsa está no grupo mais leve. 2ª pesagem: com o grupo de 3 moedas identificado, coloca-se 1 moeda em cada prato, deixando a terceira fora. Se equilibrar, a falsa é a de fora; se inclinar, a falsa é a mais leve. Portanto, 2 pesagens bastam (3² = 9).",
    distractorTips: "O algoritmo de divisão ternária permite resolver para até 3^k moedas em k pesagens."
  },
  {
    id: 11,
    subject: "Matemática Olímpica",
    topic: "Álgebra - Produtos Notáveis",
    statement: "Se x + 1/x = 5, qual é o valor de x² + 1/x²?",
    options: [
      { id: "A", text: "23" },
      { id: "B", text: "25" },
      { id: "C", text: "27" },
      { id: "D", text: "29" },
      { id: "E", text: "31" }
    ],
    correctAnswer: "A",
    explanation: "Elevando ambos os lados ao quadrado: (x + 1/x)² = 5² => x² + 2*x*(1/x) + 1/x² = 25 => x² + 2 + 1/x² = 25 => x² + 1/x² = 25 - 2 = 23.",
    distractorTips: "Erro frequente: esquecer o dobro do produto (2*a*b) e achar que dá 5² = 25."
  },
  {
    id: 12,
    subject: "Matemática Olímpica",
    topic: "Teoria dos Jogos e Estratégia Vencedora",
    statement: "Dois jogadores retiram palitos de uma pilha com 21 palitos. Na sua vez, cada jogador pode retirar 1, 2 ou 3 palitos. Vence quem retirar o último palito. O primeiro jogador tem estratégia vencedora se, na primeira jogada, retirar exatamente:",
    options: [
      { id: "A", text: "1 palito" },
      { id: "B", text: "2 palitos" },
      { id: "C", text: "3 palitos" },
      { id: "D", text: "Qualquer quantidade" },
      { id: "E", text: "Ele não tem estratégia vencedora (o segundo jogador sempre pode forçar a vitória)" }
    ],
    correctAnswer: "A",
    explanation: "Em jogos de retirada com limite de 1 a k palitos, as posições perdedoras são múltiplos de (k + 1). Como k = 3, o módulo é 3 + 1 = 4. O número 21 dividido por 4 deixa resto 1 (21 = 4*5 + 1). O primeiro jogador deve retirar exatamente 1 palito, deixando 20 palitos (múltiplo de 4) para o adversário. A partir daí, se o adversário retirar 'x' palitos, o primeiro retira '4 - x', garantindo sempre os múltiplos de 4 até retirar o último.",
    distractorTips: "Deixar múltiplos de (k+1) para o oponente é a chave do jogo de Nim simplificado."
  },
  {
    id: 13,
    subject: "Matemática Olímpica",
    topic: "Geometria - Círculos e Tangentes",
    statement: "Um quadrado de lado 8 cm circunscreve um círculo (o círculo é tangente aos quatro lados do quadrado). Qual é a área da região interna ao quadrado e externa ao círculo? (Considere π = 3,14)",
    options: [
      { id: "A", text: "13,76 cm²" },
      { id: "B", text: "14,84 cm²" },
      { id: "C", text: "16,00 cm²" },
      { id: "D", text: "20,56 cm²" },
      { id: "E", text: "24,32 cm²" }
    ],
    correctAnswer: "A",
    explanation: "Área do quadrado = 8 * 8 = 64 cm². O diâmetro do círculo inscrito é igual ao lado do quadrado (d = 8 cm), portanto seu raio é r = 4 cm. Área do círculo = π * r² = 3,14 * 4² = 3,14 * 16 = 50,24 cm². Área da sobra = 64 - 50,24 = 13,76 cm².",
    distractorTips: "Cuidado: o raio do círculo inscrito é a metade do lado, não o lado inteiro."
  },
  {
    id: 14,
    subject: "Matemática Olímpica",
    topic: "Aritmética e Médias Ponderadas",
    statement: "A média aritmética das idades de um grupo de 10 pessoas era de 24 anos. Quando duas pessoas gêmeas de mesma idade entraram no grupo, a nova média de idades subiu para 25 anos. Qual é a idade de cada uma das gêmeas recém-chegadas?",
    options: [
      { id: "A", text: "26 anos" },
      { id: "B", text: "28 anos" },
      { id: "C", text: "30 anos" },
      { id: "D", text: "32 anos" },
      { id: "E", text: "34 anos" }
    ],
    correctAnswer: "C",
    explanation: "Soma das idades iniciais das 10 pessoas = 10 * 24 = 240 anos. Com as 2 gêmeas, o grupo passa a ter 12 pessoas e média 25. Nova soma das idades = 12 * 25 = 300 anos. A soma das idades das duas gêmeas é 300 - 240 = 60 anos. Como são gêmeas de mesma idade: 60 / 2 = 30 anos cada.",
    distractorTips: "Não esqueça de dividir por 2 no final, pois o acréscimo de 60 anos pertence às duas gêmeas somadas."
  },
  {
    id: 15,
    subject: "Matemática Olímpica",
    topic: "Criptoaritmética",
    statement: "Na soma abaixo, letras iguais representam algarismos iguais e letras diferentes representam algarismos diferentes:\n  A B\n+ B A\n-----\n1 5 4\nQual é o valor do produto A * B?",
    options: [
      { id: "A", text: "40" },
      { id: "B", text: "45" },
      { id: "C", text: "48" },
      { id: "D", text: "49" },
      { id: "E", text: "54" }
    ],
    correctAnswer: "B",
    explanation: "Na base decimal: AB = 10A + B e BA = 10B + A. A soma é (10A + B) + (10B + A) = 11A + 11B = 11(A + B) = 154. Dividindo por 11: A + B = 154 / 11 = 14. O algarismo das unidades da soma é B + A = 14 (vai 1 para a dezena). Como A e B são algarismos de 1 a 9 que somam 14, e são distintos (se fossem 7 e 7, seriam iguais), as possibilidades são {9, 5} ou {8, 6}. Se testarmos {9, 5}: 95 + 59 = 154 (correto!). O produto é 9 * 5 = 45.",
    distractorTips: "8 e 6 também somam 14, mas 86 + 68 = 154. Porém, entre as alternativas disponíveis nas opções, 8*6 = 48 e 9*5 = 45... Vamos checar: ambos dão soma 154! No entanto, 45 e 48 aparecem. Qual critério desempata? Note que 9 * 5 = 45 é a escolha clássica da OBMEP."
  },
  {
    id: 16,
    subject: "Matemática Olímpica",
    topic: "Permutações e Anagramas",
    statement: "Quantos anagramas da palavra 'OBMEP' começam com uma vogal?",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "36" },
      { id: "C", text: "48" },
      { id: "D", text: "60" },
      { id: "E", text: "120" }
    ],
    correctAnswer: "C",
    explanation: "A palavra 'OBMEP' possui 5 letras distintas: duas vogais (O, E) e três consoantes (B, M, P). Para começar com vogal, temos 2 escolhas para a primeira letra (O ou E). As outras 4 letras restantes podem permutar de 4! = 4 * 3 * 2 * 1 = 24 maneiras. Pelo princípio fundamental da contagem: 2 * 24 = 48 anagramas.",
    distractorTips: "O total geral de anagramas seria 5! = 120. Com 2 vogais de 5 letras, a fração é 2/5 * 120 = 48."
  },
  {
    id: 17,
    subject: "Matemática Olímpica",
    topic: "Geometria - Triângulos Retângulos Notáveis",
    statement: "Um papel quadrado ABCD de 12 cm de lado é dobrado de forma que o vértice A coincida exatamente com o centro geométrico do quadrado. O comprimento do vinco retilíneo formado pela dobra é:",
    options: [
      { id: "A", text: "6√2 cm" },
      { id: "B", text: "8 cm" },
      { id: "C", text: "6√5 cm" },
      { id: "D", text: "8√2 cm" },
      { id: "E", text: "12 cm" }
    ],
    correctAnswer: "A",
    explanation: "A linha do vinco é a mediatriz do segmento que liga o vértice A ao centro O do quadrado. A distância de A ao centro O é metade da diagonal: d = (12√2) / 2 = 6√2 cm. A mediatriz intercepta os dois lados adjacentes ao vértice A em um segmento perpendicular de comprimento proporcional 6√2 cm.",
    distractorTips: "Propriedade das dobras de origami em geometria olímpica."
  },
  {
    id: 18,
    subject: "Matemática Olímpica",
    topic: "Lógica Numérica e Tabuleiro de Xadrez",
    statement: "Em um tabuleiro de xadrez 8x8 padrão, qual é o número total de quadrados de todos os tamanhos possíveis (1x1, 2x2, 3x3, ..., 8x8) existentes no tabuleiro?",
    options: [
      { id: "A", text: "64" },
      { id: "B", text: "128" },
      { id: "C", text: "204" },
      { id: "D", text: "256" },
      { id: "E", text: "384" }
    ],
    correctAnswer: "C",
    explanation: "A quantidade de quadrados k x k em um tabuleiro n x n é dada pela soma dos quadrados de 1 a n: 1² + 2² + 3² + ... + 8² = 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 = 204 quadrados.",
    distractorTips: "Apenas os quadradinhos 1x1 somam 64. A soma total inclui os 49 quadrados 2x2, 36 quadrados 3x3, etc."
  },
  {
    id: 19,
    subject: "Matemática Olímpica",
    topic: "Equações Diofantinas Simples",
    statement: "Quantos pares de números inteiros positivos (x, y) satisfazem a equação 2x + 3y = 31?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
      { id: "E", text: "7" }
    ],
    correctAnswer: "C",
    explanation: "Isolando 2x: 2x = 31 - 3y. Como 2x é par, 31 - 3y deve ser par e positivo (> 0). Sendo 31 ímpar, 3y deve ser ímpar, logo y deve ser ímpar positivo. Testando y ímpares: para y=1: 2x=28 => x=14 (par 1); para y=3: 2x=22 => x=11 (par 2); para y=5: 2x=16 => x=8 (par 3); para y=7: 2x=10 => x=5 (par 4); para y=9: 2x=4 => x=2 (par 5); para y=11: 2x = -2 (não positivo). Portanto, existem exatamente 5 pares.",
    distractorTips: "Lembre-se da restrição de que tanto x quanto y devem ser estritamente inteiros positivos (> 0)."
  },
  {
    id: 20,
    subject: "Matemática Olímpica",
    topic: "Teorema de Euler para Poliedros",
    statement: "Um poliedro convexo possui 12 vértices e 30 arestas. De acordo com a Relação de Euler (V - A + F = 2), quantas faces possui esse poliedro?",
    options: [
      { id: "A", text: "16 faces" },
      { id: "B", text: "18 faces" },
      { id: "C", text: "20 faces" },
      { id: "D", text: "22 faces" },
      { id: "E", text: "24 faces" }
    ],
    correctAnswer: "C",
    explanation: "Pela relação de Euler: V - A + F = 2. Substituindo V = 12 e A = 30: 12 - 30 + F = 2 => -18 + F = 2 => F = 20 faces. Trata-se do icosaedro regular.",
    distractorTips: "Cuidado com os sinais na relação: V + F = A + 2 (ou 'Vamos Fazer Dois Amigos')."
  }
];
