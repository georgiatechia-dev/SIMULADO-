export type QuestionOption = {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
};

export type Question = {
  id: number;
  subject: string; // e.g. "Matemática", "Língua Portuguesa", "Física", "Astronomia", "Direito Administrativo"
  topic: string; // e.g. "Geometria Espacial", "Figuras de Linguagem", "Leis de Kepler"
  context?: string; // Text fragment, poem, situation or quote
  statement: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string; // Detailed pedagogical commentary on why this answer is correct
  distractorTips?: string; // Analysis of traps and common misconceptions
};

export type ExamCategory = 
  | 'enem'
  | 'vestibulares'
  | 'concursos'
  | 'fundamental-medio'
  | 'olimpiadas'
  | 'sp-estadual';

export type SimuladoMeta = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  examName: string;
  organization: string; // e.g. "Inep", "FUVEST", "IMPA", "SAB", "Vunesp", "Cesgranrio"
  category: ExamCategory;
  categoryLabel: string;
  tag: string;
  tagColor?: string;
  defaultMinutes: number; // e.g. 90 or 120 or 240
  difficulty: 'Fácil' | 'Média' | 'Média/Alta' | 'Alta' | 'Muito Difícil';
  totalQuestions: number;
  participantsCount: number;
  specialFeature: string;
  description: string;
  scoringType: 'tri' | 'raw' | 'vestibular' | 'concurso';
};

export type Simulado = SimuladoMeta & {
  questions: Question[];
};

export type UserAnswerMap = Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;

export type SimuladoResultData = {
  simuladoId: string;
  examName: string;
  title: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  scorePercentage: number;
  estimatedScore: number | string; // e.g. TRI 782.5 or 85/100
  timeSpentSeconds: number;
  averageTimePerQuestionSeconds: number;
  userAnswers: UserAnswerMap;
  flaggedQuestions: number[];
  completedAt: string;
};
