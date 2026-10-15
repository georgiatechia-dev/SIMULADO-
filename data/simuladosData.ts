import { Simulado, SimuladoMeta } from './types';
import { sarespQuestions } from './questions/saresp';
import { provaoPaulistaQuestions } from './questions/provaoPaulista';
import { obmepQuestions } from './questions/obmep';
import { obaQuestions } from './questions/oba';
import { enem1Questions } from './questions/enem1';
import { enem2Questions } from './questions/enem2';
import { fuvestQuestions } from './questions/fuvest';
import { concursosQuestions } from './questions/concursos';

export const allSimulados: Simulado[] = [
  {
    id: 'enem-1',
    slug: 'simulado-nacional-enem-1-dia',
    title: 'Simulado Nacional ENEM 2024 - 1º Dia',
    subtitle: 'Linguagens, Códigos e suas Tecnologias + Ciências Humanas e suas Tecnologias.',
    examName: 'ENEM 1º Dia',
    organization: 'Inep · MEC',
    category: 'enem',
    categoryLabel: 'ENEM & SiSU',
    tag: 'Em Alta',
    tagColor: 'bg-primary-container text-on-primary',
    defaultMinutes: 60, // 20 questions in sprint simulation (~3 min/question = 60 min)
    difficulty: 'Média/Alta',
    totalQuestions: enem1Questions.length,
    participantsCount: 42150,
    specialFeature: 'TRI Padrão MEC',
    description: 'Simulação idêntica ao primeiro dia do ENEM com questões interdisciplinares de interpretação, literatura, artes, história, geografia, filosofia e sociologia.',
    scoringType: 'tri',
    questions: enem1Questions,
  },
  {
    id: 'enem-2',
    slug: 'simulado-nacional-enem-2-dia',
    title: 'Simulado Nacional ENEM 2024 - 2º Dia',
    subtitle: 'Matemática e suas Tecnologias + Ciências da Natureza e suas Tecnologias.',
    examName: 'ENEM 2º Dia',
    organization: 'Inep · MEC',
    category: 'enem',
    categoryLabel: 'ENEM & SiSU',
    tag: 'Recomendado',
    tagColor: 'bg-secondary-fixed text-on-secondary-fixed',
    defaultMinutes: 60,
    difficulty: 'Alta',
    totalQuestions: enem2Questions.length,
    participantsCount: 38920,
    specialFeature: 'TRI Padrão MEC',
    description: 'Prova prática focada nas competências matemáticas, física ondulatória e mecânica, química geral/orgânica e biologia evolutiva e ambiental.',
    scoringType: 'tri',
    questions: enem2Questions,
  },
  {
    id: 'fuvest',
    slug: 'fuvest-1-fase-geral',
    title: 'FUVEST 2024 - 1ª Fase Geral',
    subtitle: 'Conhecimentos Gerais interdisciplinares: Biologia, Física, Química, História, Geografia e Literatura.',
    examName: 'FUVEST (USP)',
    organization: 'Fundação Universitária para o Vestibular',
    category: 'vestibulares',
    categoryLabel: 'Vestibulares Tradicionais',
    tag: 'Oficial 2024',
    tagColor: 'bg-surface-container-highest text-on-surface',
    defaultMinutes: 60,
    difficulty: 'Muito Difícil',
    totalQuestions: fuvestQuestions.length,
    participantsCount: 14300,
    specialFeature: 'Corte estimado 68 pts',
    description: 'O vestibular mais concorrido do país. Questões com enunciado denso, raciocínio analítico apurado e obras literárias de leitura obrigatória da USP.',
    scoringType: 'vestibular',
    questions: fuvestQuestions,
  },
  {
    id: 'concursos',
    slug: 'cnu-bloco-7-concurso-federal',
    title: 'CNU Bloco 7 - Gestão Governamental & Bancos',
    subtitle: 'Políticas Públicas, Administração Pública Federal, Ética e Conhecimentos Bancários.',
    examName: 'CNU & Caixa Econômica',
    organization: 'Cesgranrio · MGI',
    category: 'concursos',
    categoryLabel: 'Concursos Públicos',
    tag: 'Concurso Federal',
    tagColor: 'bg-[#ffdbcc] text-[#7a3000]',
    defaultMinutes: 50,
    difficulty: 'Média/Alta',
    totalQuestions: concursosQuestions.length,
    participantsCount: 29800,
    specialFeature: 'Gabarito com Recurso',
    description: 'Preparação para o Concurso Nacional Unificado e grandes certames federais (Caixa, Banco do Brasil, Ministérios e Tribunais).',
    scoringType: 'concurso',
    questions: concursosQuestions,
  },
  {
    id: 'obmep',
    slug: 'obmep-olimpiada-matematica',
    title: 'OBMEP - Olimpíada de Matemática',
    subtitle: 'Raciocínio lógico, teoria dos números, geometria investigativa e combinatória olímpica.',
    examName: 'OBMEP (Nível 2 e 3)',
    organization: 'IMPA · SBM',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas Científicas',
    tag: 'Desafio Lógico',
    tagColor: 'bg-emerald-100 text-emerald-800',
    defaultMinutes: 60,
    difficulty: 'Alta',
    totalQuestions: obmepQuestions.length,
    participantsCount: 31200,
    specialFeature: 'Medalhistas Nacionais',
    description: 'Desenvolva sua criatividade com problemas de raciocínio não-convencional que premiam medalhistas com bolsas de iniciação científica PIC-OBMEP.',
    scoringType: 'raw',
    questions: obmepQuestions,
  },
  {
    id: 'oba',
    slug: 'oba-olimpiada-astronomia-astronautica',
    title: 'OBA - Olimpíada de Astronomia & Astronáutica',
    subtitle: 'Sistema Solar, Leis de Kepler, evolução estelar, foguetes espaciais e cosmologia.',
    examName: 'OBA (Astronomia)',
    organization: 'SAB · AEB',
    category: 'olimpiadas',
    categoryLabel: 'Olimpíadas Científicas',
    tag: 'Ciência & Espaço',
    tagColor: 'bg-indigo-100 text-indigo-800',
    defaultMinutes: 50,
    difficulty: 'Média',
    totalQuestions: obaQuestions.length,
    participantsCount: 19400,
    specialFeature: 'Classificatória Internacional',
    description: 'Prova oficial preparatória para a Olimpíada Brasileira de Astronomia, credenciando estudantes para jornadas espaciais e olimpíadas internacionais.',
    scoringType: 'raw',
    questions: obaQuestions,
  },
  {
    id: 'provao-paulista',
    slug: 'provao-paulista-seriado',
    title: 'Provão Paulista Seriado 2024',
    subtitle: 'Avaliação seriada de acesso direto a vagas na USP, Unicamp, Unesp e Fatec.',
    examName: 'Provão Paulista',
    organization: 'Secretaria da Educação SP · Vunesp',
    category: 'sp-estadual',
    categoryLabel: 'SP Estadual & Paulista',
    tag: 'Acesso Direto SP',
    tagColor: 'bg-amber-100 text-amber-800',
    defaultMinutes: 60,
    difficulty: 'Média/Alta',
    totalQuestions: provaoPaulistaQuestions.length,
    participantsCount: 26500,
    specialFeature: 'Vagas Diretas USP/Unesp',
    description: 'Simulado completo com a matriz de referência da Vunesp para o Provão Paulista, principal porta de entrada dos alunos da rede pública nas universidades de SP.',
    scoringType: 'vestibular',
    questions: provaoPaulistaQuestions,
  },
  {
    id: 'saresp',
    slug: 'saresp-diagnostico-estadual',
    title: 'SAESP / SAEB - Diagnóstico Escolar',
    subtitle: 'Língua Portuguesa e Matemática para o 9º ano EF e 3º ano do Ensino Médio.',
    examName: 'Saresp (SP)',
    organization: 'Secretaria da Educação SP',
    category: 'sp-estadual',
    categoryLabel: 'SP Estadual & Paulista',
    tag: 'BNCC Padrão',
    tagColor: 'bg-sky-100 text-sky-800',
    defaultMinutes: 50,
    difficulty: 'Média',
    totalQuestions: sarespQuestions.length,
    participantsCount: 34100,
    specialFeature: 'Relatório por Habilidade',
    description: 'Sistema de Avaliação do Rendimento Escolar do Estado de São Paulo. Questões calibradas pela matriz de descritores curriculares da BNCC.',
    scoringType: 'raw',
    questions: sarespQuestions,
  },
];

export function getSimuladoById(id: string): Simulado | undefined {
  return allSimulados.find(s => s.id === id || s.slug === id);
}

export function searchSimulados(query: string): Simulado[] {
  const q = query.toLowerCase().trim();
  if (!q) return allSimulados;
  return allSimulados.filter(s => 
    s.title.toLowerCase().includes(q) ||
    s.subtitle.toLowerCase().includes(q) ||
    s.examName.toLowerCase().includes(q) ||
    s.organization.toLowerCase().includes(q) ||
    s.categoryLabel.toLowerCase().includes(q) ||
    s.questions.some(item => 
      item.subject.toLowerCase().includes(q) ||
      item.topic.toLowerCase().includes(q) ||
      item.statement.toLowerCase().includes(q)
    )
  );
}

// TRI (Item Response Theory) estimation formula simulation based on difficulty consistency
export function calculateEstimatedScore(
  simulado: Simulado,
  correctCount: number,
  totalQuestions: number
): { score: string; feedback: string } {
  const pct = Math.round((correctCount / totalQuestions) * 100);

  if (simulado.scoringType === 'tri') {
    // ENEM TRI scale: 300 to ~960 pts
    let triScore = 320 + (correctCount / totalQuestions) * 620;
    // Add small realistic nuance
    if (correctCount >= 18) triScore += 35;
    else if (correctCount <= 3) triScore = Math.max(300, triScore - 20);
    const formatted = Math.round(triScore * 10) / 10;
    return {
      score: `${formatted} pts (TRI Estimada)`,
      feedback: pct >= 80 ? 'Proficiência Avançada (Adequada para Medicina e Engenharias)' : pct >= 50 ? 'Proficiência Média (Adequada para ampla concorrência no SiSU)' : 'Requer reforço nos descritores básicos'
    };
  }

  if (simulado.scoringType === 'vestibular') {
    const rawPoints = Math.round((correctCount / totalQuestions) * 90);
    return {
      score: `${rawPoints} / 90 pontos (Escala FUVEST)`,
      feedback: rawPoints >= 65 ? 'Acima da nota de corte das carreiras mais disputadas!' : rawPoints >= 45 ? 'Competitivo para a maioria dos cursos da 1ª Fase.' : 'Continue treinando para ultrapassar a linha de corte.'
    };
  }

  if (simulado.scoringType === 'concurso') {
    return {
      score: `${pct}% de aproveitamento líquido`,
      feedback: pct >= 85 ? 'Nota na zona de nomeação imediata!' : pct >= 70 ? 'Na zona de classificação do cadastro de reserva.' : 'Necessário aprofundar nas disciplinas específicas.'
    };
  }

  return {
    score: `${correctCount} / ${totalQuestions} acertos (${pct}%)`,
    feedback: pct >= 80 ? 'Desempenho excelente!' : pct >= 50 ? 'Bom desempenho, continue praticando.' : 'Revise os comentários do gabarito para fixar o conteúdo.'
  };
}
