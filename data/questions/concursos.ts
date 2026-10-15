import { Question } from '../types';

export const concursosQuestions: Question[] = [
  {
    id: 1,
    subject: "Direito Administrativo",
    topic: "Princípios Constitucionais da Administração Pública (LIMPE)",
    statement: "O artigo 37, caput, da Constituição Federal de 1988 estabelece os cinco princípios expressos que regem a Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios. São eles:",
    options: [
      { id: "A", text: "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência." },
      { id: "B", text: "Legalidade, Isonomia, Motivação, Proporcionalidade e Eficácia." },
      { id: "C", text: "Liberdade, Igualdade, Moralidade, Primazia e Economia." },
      { id: "D", text: "Lealdade, Interesse Público, Mérito, Probidade e Efetividade." },
      { id: "E", text: "Legalidade, Individualidade, Mediação, Positividade e Equidade." }
    ],
    correctAnswer: "A",
    explanation: "Os cinco princípios expressos do caput do art. 37 formam o clássico acrônimo 'LIMPE': Legalidade (a Administração só pode agir conforme a lei), Impessoalidade (vedação à promoção pessoal e tratamento isonômico), Moralidade (probidade e boa-fé), Publicidade (transparência oficial dos atos) e Eficiência (introduzido pela EC 19/1998, rendimento e otimização de recursos).",
    distractorTips: "Atenção: Motivação, Proporcionalidade e Razoabilidade são princípios fundamentais implícitos no regime administrativo, mas expressamente no caput do art. 37 estão apenas L-I-M-P-E."
  },
  {
    id: 2,
    subject: "Políticas Públicas",
    topic: "Ciclo de Políticas Públicas - Fases",
    statement: "No estudo da Administração e da Gestão Governamental, o 'Ciclo de Políticas Públicas' (policy cycle) organiza o processo de decisão estatal nas seguintes etapas sequenciais típicas:",
    options: [
      { id: "A", text: "Cobrança de impostos -> Julgamento penal -> Perdão judicial -> Privatização." },
      { id: "B", text: "Construção de agenda -> Formulação de alternativas -> Tomada de decisão -> Implementação -> Avaliação e monitoramento." },
      { id: "C", text: "Propaganda eleitoral -> Posse executiva -> Votação parlamentar -> Greve geral." },
      { id: "D", text: "Sorteio de cargos -> Auditoria contábil -> Licitação internacional -> Extinção do órgão." },
      { id: "E", text: "Recrutamento militar -> Intervenção federal -> Decreto de calamidade -> Renúncia." }
    ],
    correctAnswer: "B",
    explanation: "O modelo heurístico padrão do ciclo de políticas públicas estrutura-se em: 1. Formação da Agenda (definição do problema público prioritário); 2. Formulação de Alternativas; 3. Tomada de Decisão (escolha da alternativa); 4. Implementação (execução concreta); e 5. Avaliação (feedback dos resultados e impactos gerados).",
    distractorTips: "Conceito clássico exigido nas provas do CNU (Concurso Nacional Unificado) e carreiras de gestão."
  },
  {
    id: 3,
    subject: "Direito Constitucional",
    topic: "Direitos e Garantias Fundamentais - Remédios Constitucionais",
    statement: "Qual ação constitucional tem por finalidade assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, bem como a retificação desses dados?",
    options: [
      { id: "A", text: "Habeas Corpus" },
      { id: "B", text: "Habeas Data" },
      { id: "C", text: "Mandado de Segurança" },
      { id: "D", text: "Mandado de Injunção" },
      { id: "E", text: "Ação Popular" },
    ],
    correctAnswer: "B",
    explanation: "O Habeas Data (art. 5º, LXXII, CF/88) concede-se para: a) assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros ou bancos de dados públicos; b) retificação de dados quando não se prefira fazê-lo por processo sigiloso.",
    distractorTips: "Habeas Corpus protege a liberdade de locomoção; Mandado de Injunção supre falta de norma regulamentadora; Ação Popular visa anular ato lesivo ao patrimônio público."
  },
  {
    id: 4,
    subject: "Conhecimentos Bancários",
    topic: "Sistema Financeiro Nacional (SFN) e Banco Central",
    statement: "No âmbito do Sistema Financeiro Nacional brasileiro, o Conselho Monetário Nacional (CMN) e o Banco Central do Brasil (Bacen) atuam, respectivamente, como:",
    options: [
      { id: "A", text: "Órgão normativo máximo do SFN e autarquia executora da política monetária e cambial." },
      { id: "B", text: "Banco comercial que concede empréstimos consignados a pessoas físicas e agência de seguros privados." },
      { id: "C", text: "Bolsa de valores privada e cooperativa de crédito habitacional." },
      { id: "D", text: "Tribunal judicial de apelação e cartório de registro de imóveis rurais." },
      { id: "E", text: "Empresa estatal de auditoria externa subordinada ao Fundo Monetário Internacional." }
    ],
    correctAnswer: "A",
    explanation: "O CMN é o órgão deliberativo supremo do SFN, responsável por fixar diretrizes da política monetária e metas de inflação (órgão normador sem função executiva). O Banco Central do Brasil (Bacen) é autarquia especial que executa a política monetária, emite papel-moeda, opera a taxa Selic e fiscaliza as instituições financeiras.",
    distractorTips: "Bacen executa; CMN dita as regras e metas (normativo)."
  },
  {
    id: 5,
    subject: "Língua Portuguesa para Concursos",
    topic: "Regência do Verbo 'Visar' e Uso da Preposição",
    statement: "Na redação oficial e jurídica, o verbo 'visar', quando empregado no sentido de 'ter como objetivo / almejar / pretender', rege obrigatoriamente:",
    options: [
      { id: "A", text: "Objeto direto sem nenhuma preposição ('visar o cargo')." },
      { id: "B", text: "Objeto indireto introduzido pela preposição 'a' ('visar ao cargo público')." },
      { id: "C", text: "A preposição 'de' ('visar do cargo')." },
      { id: "D", text: "A preposição 'em' ('visar no cargo')." },
      { id: "E", text: "Pronome oblíquo átono enclítico obrigatório ('visá-lo')." }
    ],
    correctAnswer: "B",
    explanation: "O verbo 'visar' tem regências distintas: 1. Sentido de mirar ou dar visto em documento = transitivo direto ('O atirador visou o alvo'; 'O cônsul visou o passaporte'). 2. Sentido de almejar/ter por meta = transitivo indireto com preposição 'a' ('O candidato visa ao cargo de auditor').",
    distractorTips: "Pegadinha recorrente da Cesgranrio, FGV e Cebraspe: 'visar o cargo' é inadequado na norma culta para concursos."
  },
  {
    id: 6,
    subject: "Direito Administrativo",
    topic: "Atos Administrativos - Atributos (PATI)",
    statement: "A prerrogativa conferida à Administração Pública de impor suas decisões e obrigações aos particulares independentemente da anuência ou concordância prévia destes decorre do atributo do ato administrativo denominado:",
    options: [
      { id: "A", text: "Tipicidade" },
      { id: "B", text: "Imperatividade (ou poder extroverso)" },
      { id: "C", text: "Autoexecutoriedade" },
      { id: "D", text: "Presunção de legitimidade" },
      { id: "E", text: "Motivação discricionária" }
    ],
    correctAnswer: "B",
    explanation: "A Imperatividade é o atributo que impõe a vontade unilateral da Administração a terceiros, criando obrigações coercitivas (ex.: interdição de estabelecimento com produtos vencidos, imposição de multa de trânsito).",
    distractorTips: "Autoexecutoriedade é executar o ato materialmente sem autorização judicial prévia; Imperatividade é o poder de impor a obrigação."
  },
  {
    id: 7,
    subject: "Raciocínio Lógico-Quantitativo",
    topic: "Lógica Proposicional - Negação de Proposição Condicional",
    statement: "Dada a proposição composta condicional: 'Se o edital for publicado hoje, então Maria fará a inscrição amanhã'. A negação lógica correta dessa sentença é:",
    options: [
      { id: "A", text: "'Se o edital não for publicado hoje, então Maria não fará a inscrição amanhã.'" },
      { id: "B", text: "'O edital foi publicado hoje e Maria não fará a inscrição amanhã.'" },
      { id: "C", text: "'O edital não foi publicado hoje ou Maria fará a inscrição amanhã.'" },
      { id: "D", text: "'Se Maria fizer a inscrição amanhã, então o edital foi publicado hoje.'" },
      { id: "E", text: "'Maria não fará a inscrição amanhã se, e somente se, o edital for publicado hoje.'" }
    ],
    correctAnswer: "B",
    explanation: "A negação de uma condicional 'Se P, então Q' (P -> Q) é dada pela regra do 'MANÉ' (Mantém a primeira e Nega a segunda): P ∧ ¬Q. Logo: 'O edital foi publicado hoje E Maria não fará a inscrição amanhã'.",
    distractorTips: "Nunca negue uma condicional (se... então) transformando-a em outra condicional (se... não)."
  },
  {
    id: 8,
    subject: "Administração Pública",
    topic: "Governança Pública e Accountability",
    statement: "No contexto da modernização do Estado e gestão democrática, o conceito de 'accountability' abrange:",
    options: [
      { id: "A", text: "A retenção compulsória de impostos de renda na folha de pagamento de servidores." },
      { id: "B", text: "A obrigação dos gestores públicos de prestar contas com transparência, responsabilidade e responder pelo uso dos recursos e decisões perante a sociedade e os órgãos de controle." },
      { id: "C", text: "O sigilo perpétuo de gastos com publicidade de empresas estatais." },
      { id: "D", text: "A substituição dos concursos públicos por indicações políticas discricionárias." },
      { id: "E", text: "A proibição de auditorias pelo Tribunal de Contas da União (TCU)." }
    ],
    correctAnswer: "B",
    explanation: "Accountability é o dever de prestação de contas dos governantes e administradores públicos aos cidadãos e órgãos fiscalizadores, associada à responsabilidade moral, jurídica e política pelos atos praticados na gestão da coisa pública.",
    distractorTips: "Accountability vertical (exercida pelo cidadão via voto e controle social) e horizontal (exercida por órgãos de freios e contrapesos como TCU e MP)."
  },
  {
    id: 9,
    subject: "Legislação e Ética",
    topic: "Lei de Acesso à Informação (Lei nº 12.527/2011)",
    statement: "Conforme os preceitos fundamentais da Lei de Acesso à Informação (LAI - Lei nº 12.527/2011), no serviço público brasileiro vigora a diretriz de que:",
    options: [
      { id: "A", text: "O sigilo das informações governamentais é a regra geral, e o acesso público é exceção concedida mediante pagamento de taxas cartoriais." },
      { id: "B", text: "A publicidade é a regra geral de todos os atos e gastos públicos, e o sigilo é a exceção estrita admitida apenas nos casos expressamente previstos em lei (segurança nacional ou intimidade)." },
      { id: "C", text: "Qualquer cidadão que solicitar informações deve justificar previamente os motivos íntimos de seu pedido sob pena de processo administrativo." },
      { id: "D", text: "Dados sobre salários e remunerações de servidores públicos jamais podem ser publicados em portais de transparência." },
      { id: "E", text: "As decisões de licitação pública só se tornam acessíveis 30 anos após a contratação." }
    ],
    correctAnswer: "B",
    explanation: "O art. 3º da LAI consagra expressamente a observância da publicidade como preceito geral e do sigilo como exceção; a divulgação de informações de interesse público independe de solicitações (transparência ativa) e não se exige justificação prévia do cidadão solicitante.",
    distractorTips: "É vedado exigir motivos para o cidadão acessar documentos e dados públicos na LAI."
  },
  {
    id: 10,
    subject: "Conhecimentos Bancários",
    topic: "Lavagem de Dinheiro - Etapas (Lei nº 9.613/1998)",
    statement: "O crime de lavagem de dinheiro compreende tradicionalmente três etapas sucessivas na doutrina internacional e na jurisprudência brasileira. A sequência cronológica correta dessas fases é:",
    options: [
      { id: "A", text: "Colocação (Placement) -> Ocultação ou Dissimulação (Layering) -> Integração (Integration)." },
      { id: "B", text: "Integração -> Colocação -> Distribuição." },
      { id: "C", text: "Investimento -> Confisco -> Devolução." },
      { id: "D", text: "Ocultação -> Tributação -> Emissão de ações." },
      { id: "E", text: "Sonegação -> Autuação -> Prescrição." }
    ],
    correctAnswer: "A",
    explanation: "1ª Fase: Colocação (inserção do dinheiro sujo no sistema financeiro fracionado em depósitos menores); 2ª Fase: Ocultação/Estratificação (movimentações complexas entre contas e empresas offshore para distanciar o dinheiro da origem ilícita); 3ª Fase: Integração (retorno dos recursos à economia formal como se fossem investimentos limpos e legítimos).",
    distractorTips: "As três fases clássicas cobradas em concursos bancários: Colocação -> Ocultação -> Integração."
  },
  {
    id: 11,
    subject: "Língua Portuguesa para Concursos",
    topic: "Pontuação e Emprego da Vírgula",
    statement: "Assinale a alternativa em que o emprego da vírgula está estritamente CORRETO de acordo com a norma-padrão:",
    options: [
      { id: "A", text: "O candidato aprovado em primeiro lugar no concurso, assumiu o cargo na segunda-feira." },
      { id: "B", text: "Todos os servidores do departamento receberam, na manhã de ontem, o novo crachá funcional." },
      { id: "C", text: "O diretor assinou, os contratos de prestação de serviços com a empresa terceirizada." },
      { id: "D", text: "Os auditores fiscais verificaram, que a empresa mantinha contabilidade paralela." },
      { id: "E", text: "Durante a reunião os analistas discutiram, sobre as novas metas trimestrais." }
    ],
    correctAnswer: "B",
    explanation: "Na alternativa B, a expressão 'na manhã de ontem' é um adjunto adverbial de tempo intercalado entre o verbo 'receberam' e o objeto direto 'o novo crachá', devendo vir isolado por vírgulas duplas. Nas demais alternativas, há vírgula separando sujeito de predicado (A), verbo de objeto direto (C e D) ou regência errada com vírgula (E).",
    distractorTips: "Regra de ouro das bancas: nunca separar sujeito de predicado nem verbo de seu complemento por vírgula única."
  },
  {
    id: 12,
    subject: "Raciocínio Lógico-Quantitativo",
    topic: "Diagramas Lógicos e Silogismo",
    statement: "Considere verdadeiras as seguintes premissas:\n1. 'Todo auditor é dedicado.'\n2. 'Algum auditor é professor.'\nA partir dessas premissas, é necessariamente CORRETO concluir que:",
    options: [
      { id: "A", text: "Todo professor é auditor." },
      { id: "B", text: "Algum professor é dedicado." },
      { id: "C", text: "Nenhum professor é auditor." },
      { id: "D", text: "Todo dedicado é professor." },
      { id: "E", text: "Nenhum auditor é reprovado." }
    ],
    correctAnswer: "B",
    explanation: "Se todo auditor pertence ao conjunto dos dedicados, e há pelo menos um elemento na interseção entre auditores e professores, esse elemento comum é obrigatoriamente tanto professor quanto auditor, e como é auditor, é dedicado. Logo, 'Algum professor é dedicado'.",
    distractorTips: "Use diagramas de Venn sobrepostos para verificar a dedução incontestável."
  },
  {
    id: 13,
    subject: "Direito Administrativo",
    topic: "Nova Lei de Licitações (Lei nº 14.133/2021) - Modalidades",
    statement: "A Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos) extinguiu as modalidades antigas de 'Tomada de Preços' e 'Convite', e introduziu uma nova modalidade de licitação voltada para inovação tecnológica ou soluções de alta complexidade denominada:",
    options: [
      { id: "A", text: "Pregão Eletrônico" },
      { id: "B", text: "Concurso Artístico" },
      { id: "C", text: "Diálogo Competitivo" },
      { id: "D", text: "Leilão de Bens Móveis" },
      { id: "E", text: "Consulta Prévia Extrajudicial" }
    ],
    correctAnswer: "C",
    explanation: "O Diálogo Competitivo (art. 6º, XLII, Lei 14.133/21) é a nova modalidade em que a Administração dialoga previamente com licitantes previamente qualificados para desenvolver uma ou mais alternativas para atender às suas necessidades complexas, antes do envio da proposta final.",
    distractorTips: "As modalidades da Lei 14.133/2021 são apenas 5: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo."
  },
  {
    id: 14,
    subject: "Políticas Públicas",
    topic: "Avaliação de Políticas Públicas - Eficiência, Eficácia e Efetividade",
    statement: "Na avaliação de desempenho de um programa público de vacinação infantil, a capacidade de o programa erradicar a ocorrência de uma doença na população a longo prazo mede a sua:",
    options: [
      { id: "A", text: "Economicidade simples" },
      { id: "B", text: "Eficiência operacional" },
      { id: "C", text: "Efetividade social (impacto real transformador)" },
      { id: "D", text: "Rentabilidade financeira" },
      { id: "E", text: "Linearidade orçamentária" }
    ],
    correctAnswer: "C",
    explanation: "- Eficiência: relação custo-benefício (gastar menos insumos para produzir doses). - Eficácia: atingir as metas quantitativas (aplicar 95% das doses previstas). - Efetividade: transformação real na realidade social e impacto na vida dos cidadãos (erradicar a doença na sociedade).",
    distractorTips: "Eficiência = meios; Eficácia = metas; Efetividade = impacto real sustentável."
  },
  {
    id: 15,
    subject: "Conhecimentos Bancários",
    topic: "PIX e Arranjos de Pagamentos Instantâneos",
    statement: "O PIX, ecossistema de pagamentos instantâneos criado e gerido pelo Banco Central do Brasil, opera sob qual modelo de liquidação?",
    options: [
      { id: "A", text: "Liquidação diferida no prazo bancário padrão de 3 dias úteis (D+3)." },
      { id: "B", text: "Liquidação em tempo real, 24 horas por dia, 7 dias por semana, inclusive feriados, por meio do Sistema de Pagamentos Instantâneos (SPI)." },
      { id: "C", text: "Liquidação exclusivamente em horário comercial mediante compensação de cheques físicos." },
      { id: "D", text: "Liquidação condicionada à autorização manual prévia do Conselho Administrativo de Defesa Econômica (CADE)." },
      { id: "E", text: "Compensação noturna em lotes fechados sem protocolo eletrônico." }
    ],
    correctAnswer: "B",
    explanation: "O PIX liquida fundos em tempo real diretamente na infraestrutura do SPI (Sistema de Pagamentos Instantâneos) gerenciada pelo Bacen, funcionando 24/7/365 em poucos segundos.",
    distractorTips: "O TED e DOC (este último já extinto) operavam apenas em dias úteis com liquidação em D+0 ou D+1 restrita a horários de expediente."
  },
  {
    id: 16,
    subject: "Direito Constitucional",
    topic: "Organização dos Poderes - Competências do Congresso Nacional",
    statement: "De acordo com o art. 52 da Constituição Federal de 1988, é competência privativa do Senado Federal:",
    options: [
      { id: "A", text: "Processar e julgar o Presidente da República nos crimes de responsabilidade (impeachment)." },
      { id: "B", text: "Iniciar a tramitação de todos os projetos de lei orçamentária anual do Poder Executivo." },
      { id: "C", text: "Decretar o estado de defesa por iniciativa autônoma de sua mesa diretora." },
      { id: "D", text: "Fiscalizar as despesas do poder judiciário estadual através de corregedorias locais." },
      { id: "E", text: "Promulgar emendas constitucionais sem votação da Câmara dos Deputados." }
    ],
    correctAnswer: "A",
    explanation: "A Câmara dos Deputados tem competência para autorizar a abertura do processo (juízo de admissibilidade por 2/3), mas quem processa e julga efetivamente o Presidente e os Ministros do STF em crimes de responsabilidade é o Senado Federal, sob a presidência do Presidente do STF.",
    distractorTips: "Câmara autoriza por 2/3; Senado julga por 2/3."
  },
  {
    id: 17,
    subject: "Língua Portuguesa para Concursos",
    topic: "Semântica e Significação das Palavras - Parônimos e Homônimos",
    statement: "Assinale a opção em que a frase está grafada com a palavra correta entre os parônimos destacados:",
    options: [
      { id: "A", text: "O juiz agiu com extrema descrição ao preservar a identidade dos depoentes protegidos." },
      { id: "B", text: "O juiz agiu com extrema discrição ao preservar a identidade dos depoentes protegidos." },
      { id: "C", text: "A autoridade determinou o cumprimento do mandado com a descriminação dos culpados." },
      { id: "D", text: "O novo secretário de finanças foi envestido no cargo solene perante os presentes." },
      { id: "E", text: "O infrator cometeu uma flagrante infração ao infringir as leis de tráfego com o eminente perigo de colisão." }
    ],
    correctAnswer: "B",
    explanation: "'Discrição' (qualidade de quem é discreto, reservado, prudente). 'Descrição' refere-se ao ato de descrever detalhes de algo. Portanto, agir com cautela e reserva é agir com discrição.",
    distractorTips: "Discrição (discreto) vs. Descrição (descrever); Eminente (ilustre) vs. Iminente (prestes a acontecer); Mandado (ordem judicial) vs. Mandato (tempo de cargo político)."
  },
  {
    id: 18,
    subject: "Direito Administrativo",
    topic: "Responsabilidade Civil do Estado (Art. 37, § 6º da CF/88)",
    statement: "No ordenamento jurídico brasileiro, a responsabilidade civil do Estado por danos que seus agentes, nessa qualidade, causarem a terceiros rege-se pela teoria:",
    options: [
      { id: "A", text: "Subjetiva com culpa presumida civil." },
      { id: "B", text: "Objetiva sob a modalidade do risco administrativo, que dispensa a comprovação de dolo ou culpa do agente para indenizar a vítima." },
      { id: "C", text: "Da irresponsabilidade soberana do poder público." },
      { id: "D", text: "Do risco integral em todos os casos de furto urbano simples." },
      { id: "E", text: "Condicional sujeita à aprovação de lei orçamentária específica prévia." }
    ],
    correctAnswer: "B",
    explanation: "O art. 37, § 6º adota a Teoria do Risco Administrativo (responsabilidade objetiva): para a vítima ser indenizada, basta comprovar o fato (conduta administrativa), o dano sofrido e o nexo de causalidade entre eles, independentemente de dolo ou culpa do servidor público. O Estado pode ajuizar ação de regresso contra o agente causador caso este tenha agido com dolo ou culpa.",
    distractorTips: "Risco integral aplica-se apenas em casos excepcionais (danos nucleares, ambientais graves e atos de terrorismo aéreo)."
  },
  {
    id: 19,
    subject: "Raciocínio Lógico-Quantitativo",
    topic: "Porcentagem e Variação Relativa",
    statement: "Em um concurso público com 1.200 vagas, 40% das vagas foram destinadas à área de tecnologia. Entre as vagas de tecnologia, 25% foram reservadas para candidatos com especialização em inteligência artificial. Quantas vagas foram reservadas para especialistas em inteligência artificial?",
    options: [
      { id: "A", text: "60 vagas" },
      { id: "B", text: "120 vagas" },
      { id: "C", text: "150 vagas" },
      { id: "D", text: "180 vagas" },
      { id: "E", text: "240 vagas" }
    ],
    correctAnswer: "B",
    explanation: "Total de vagas em tecnologia = 1.200 * 0,40 = 480 vagas. Entre estas, 25% (1/4) para inteligência artificial = 480 * 0,25 = 480 / 4 = 120 vagas.",
    distractorTips: "Poderia também ser calculado diretamente: 0,40 * 0,25 = 0,10 (10% do total de 1.200 = 120)."
  },
  {
    id: 20,
    subject: "Ética no Serviço Público",
    topic: "Decreto nº 1.171/1994 (Código de Ética do Servidor Público Federal)",
    statement: "Segundo o Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/1994), é dever fundamental do servidor público:",
    options: [
      { id: "A", text: "Omitir deliberadamente informações públicas para evitar críticas da imprensa ao órgão." },
      { id: "B", text: "Exercer a função com rapidez, probidade e cortesia, tratando com respeito os cidadãos e jamais deixando qualquer pessoa sem atendimento adequado." },
      { id: "C", text: "Aceitar presentes e gratificações em dinheiro de fornecedores em processos licitatórios." },
      { id: "D", text: "Utilizar veículos oficiais para fins particulares e passeios familiares em finais de semana." },
      { id: "E", text: "Dar preferência de atendimento a parentes e amigos na fila das repartições públicas." }
    ],
    correctAnswer: "B",
    explanation: "O servidor público deve ser cortês, pontual, probo e prestativo. A lentidão injustificada no atendimento do cidadão é tipificada no Decreto 1.171 como grave dano moral à comunidade.",
    distractorTips: "Aceitar presentes de partes interessadas ou usar bens públicos para interesses privados é expressamente vedado."
  }
];
