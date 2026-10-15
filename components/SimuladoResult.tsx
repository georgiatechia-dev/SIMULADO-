'use client';

import React, { useState } from 'react';
import { Simulado, SimuladoResultData } from '../data/types';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  ArrowLeft, 
  Share2, 
  BookOpen, 
  Printer, 
  Award, 
  Check, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface SimuladoResultProps {
  simulado: Simulado;
  result: SimuladoResultData;
  onRetry: () => void;
  onBackToHome: () => void;
}

export const SimuladoResult: React.FC<SimuladoResultProps> = ({
  simulado,
  result,
  onRetry,
  onBackToHome,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct' | 'blank'>('all');
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}m ${s.toString().padStart(2, '0')}s`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Fiz o ${result.title} no escsimulados e acertei ${result.correctCount}/${result.totalQuestions} questões (${result.scorePercentage}%)! Treine grátis em escsimulados!`
      );
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  // Filter questions for the commentary list
  const filteredQuestions = simulado.questions.filter((q) => {
    const userChoice = result.userAnswers[q.id];
    if (filterMode === 'correct') return userChoice === q.correctAnswer;
    if (filterMode === 'wrong') return userChoice && userChoice !== q.correctAnswer;
    if (filterMode === 'blank') return !userChoice;
    return true;
  });

  const isExcellent = result.scorePercentage >= 75;
  const isGood = result.scorePercentage >= 50 && result.scorePercentage < 75;

  return (
    <div className="min-h-screen bg-[#f8f9ff] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Top Back Nav */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b1c30] hover:text-[#ff6b00] transition-colors cursor-pointer bg-white px-4 py-2 rounded-xl shadow-xs border border-[#e2e8f0]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Simulados</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748b] hover:text-[#0b1c30] bg-white px-3.5 py-2 rounded-xl border border-[#e2e8f0] cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir Relatório</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a04100] bg-[#fff1e6] hover:bg-[#fed7aa]/50 px-3.5 py-2 rounded-xl border border-[#fed7aa] cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#ff6b00]" />
              <span>{copiedShare ? 'Copiado para área de transferência!' : 'Compartilhar Desempenho'}</span>
            </button>
          </div>
        </div>

        {/* Main Score Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#fed7aa]/50 mb-8 overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#ff6b00]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Diagnosis */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee0d5] text-[#5a4136] text-xs font-bold mb-3">
                <span>{simulado.organization}</span>
                <span>•</span>
                <span>{simulado.examName}</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-2 leading-tight">
                Resultado do Simulado
              </h1>

              <p className="text-sm sm:text-base text-[#64748b] max-w-lg mb-4">
                {result.title} — Simulação finalizada com sucesso. Veja abaixo o seu diagnóstico pedagógico e a análise detalhada de cada questão.
              </p>

              {/* Performance Tag */}
              <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-[#eff4ff] border border-[#dce9ff]">
                <Award className="w-5 h-5 text-[#ff6b00] shrink-0" />
                <div className="text-left text-xs sm:text-sm">
                  <span className="font-bold text-[#0b1c30] block">
                    {result.estimatedScore}
                  </span>
                  <span className="text-[#64748b]">
                    {isExcellent
                      ? 'Nível de excelência competitivo para vagas de alta disputa.'
                      : isGood
                      ? 'Desempenho consistente com margem segura de aprovação.'
                      : 'Oportunidade de aprimorar os tópicos com menor taxa de acerto.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Score Gauge Circle */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#fff1e6] to-[#eff4ff] border-4 border-[#ff6b00] shadow-md">
                <div className="text-center">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0b1c30] block">
                    {result.scorePercentage}%
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">
                    Aproveitamento
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#64748b]">
                <Trophy className="w-4 h-4 text-[#ff6b00]" />
                <span>{result.correctCount} acertos em {result.totalQuestions} questões</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-[#e2e8f0]">
            <div className="bg-[#f0fdf4] p-4 rounded-2xl border border-emerald-200 text-center">
              <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-bold text-xl sm:text-2xl font-heading">
                <CheckCircle2 className="w-5 h-5" />
                <span>{result.correctCount}</span>
              </div>
              <span className="text-xs text-emerald-800 font-medium">Acertos</span>
            </div>

            <div className="bg-[#fef2f2] p-4 rounded-2xl border border-red-200 text-center">
              <div className="flex items-center justify-center gap-1.5 text-red-600 font-bold text-xl sm:text-2xl font-heading">
                <XCircle className="w-5 h-5" />
                <span>{result.wrongCount}</span>
              </div>
              <span className="text-xs text-red-800 font-medium">Erros</span>
            </div>

            <div className="bg-[#f8fafc] p-4 rounded-2xl border border-slate-200 text-center">
              <div className="flex items-center justify-center gap-1.5 text-slate-700 font-bold text-xl sm:text-2xl font-heading">
                <HelpCircle className="w-5 h-5 text-slate-400" />
                <span>{result.blankCount}</span>
              </div>
              <span className="text-xs text-slate-600 font-medium">Em branco</span>
            </div>

            <div className="bg-[#fff7ed] p-4 rounded-2xl border border-amber-200 text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-700 font-bold text-xl sm:text-2xl font-heading">
                <Clock className="w-5 h-5 text-[#ff6b00]" />
                <span>{formatSeconds(result.timeSpentSeconds)}</span>
              </div>
              <span className="text-xs text-amber-800 font-medium">
                Média: {formatSeconds(result.averageTimePerQuestionSeconds)}/q
              </span>
            </div>
          </div>

          {/* Bottom Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-4">
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer este Simulado</span>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#e2e8f0] text-[#0b1c30] hover:bg-[#f8f9ff] font-semibold text-sm transition-all shadow-xs cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#ff6b00]" />
              <span>Escolher Outro Simulado</span>
            </button>
          </div>
        </div>

        {/* Section: Gabarito Comentado Interativo */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#fed7aa]/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
                Análise Pedagógica
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#0b1c30] mt-0.5">
                Gabarito Comentado Completo
              </h2>
              <p className="text-xs sm:text-sm text-[#64748b] mt-1">
                Entenda a justificativa de cada alternativa e as armadilhas conceituais mais comuns.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-[#eff4ff] p-1 rounded-xl">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterMode === 'all'
                    ? 'bg-white text-[#0b1c30] shadow-xs'
                    : 'text-[#64748b] hover:text-[#0b1c30]'
                }`}
              >
                Todas ({simulado.questions.length})
              </button>
              <button
                onClick={() => setFilterMode('wrong')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterMode === 'wrong'
                    ? 'bg-red-50 text-red-700 shadow-xs'
                    : 'text-[#64748b] hover:text-red-600'
                }`}
              >
                Erradas ({result.wrongCount})
              </button>
              <button
                onClick={() => setFilterMode('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterMode === 'correct'
                    ? 'bg-emerald-50 text-emerald-700 shadow-xs'
                    : 'text-[#64748b] hover:text-emerald-600'
                }`}
              >
                Certas ({result.correctCount})
              </button>
            </div>
          </div>

          {/* List of Questions with Comments */}
          <div className="divide-y divide-[#e2e8f0] space-y-8 mt-6">
            {filteredQuestions.map((q, idx) => {
              const userChoice = result.userAnswers[q.id];
              const isCorrect = userChoice === q.correctAnswer;
              const isBlank = !userChoice;

              return (
                <div key={q.id} className="pt-8 first:pt-2">
                  {/* Status header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0b1c30] text-white font-heading font-bold text-xs flex items-center justify-center">
                        {q.id}
                      </span>
                      <span className="text-xs font-bold text-[#ff6b00] uppercase">
                        {q.subject}
                      </span>
                      <span className="text-xs text-[#cbd5e1]">•</span>
                      <span className="text-xs text-[#64748b] font-medium">
                        {q.topic}
                      </span>
                    </div>

                    {/* Badge right */}
                    {isBlank ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-300">
                        Não Respondida
                      </span>
                    ) : isCorrect ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <Check className="w-3.5 h-3.5" />
                        Você Acertou!
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-300">
                        <XCircle className="w-3.5 h-3.5" />
                        Você Errou
                      </span>
                    )}
                  </div>

                  {/* Context text if any */}
                  {q.context && (
                    <div className="my-3 p-3.5 rounded-xl bg-[#eff4ff]/60 border-l-3 border-[#ff6b00] text-xs sm:text-sm italic text-[#334155]">
                      {q.context}
                    </div>
                  )}

                  {/* Statement */}
                  <p className="font-heading font-semibold text-sm sm:text-base text-[#0b1c30] mb-4">
                    {q.statement}
                  </p>

                  {/* Alternatives overview */}
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt) => {
                      const isOptionCorrect = opt.id === q.correctAnswer;
                      const isOptionUserChoice = opt.id === userChoice;

                      let style = 'bg-[#f8fafc] border-[#e2e8f0] text-[#334155]';
                      if (isOptionCorrect) {
                        style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium';
                      } else if (isOptionUserChoice && !isCorrect) {
                        style = 'bg-red-50 border-red-400 text-red-950';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ${style}`}
                        >
                          <div
                            className={`w-6 h-6 rounded-lg font-heading text-xs font-bold flex items-center justify-center shrink-0 ${
                              isOptionCorrect
                                ? 'bg-emerald-600 text-white'
                                : isOptionUserChoice
                                ? 'bg-red-600 text-white'
                                : 'bg-[#e2e8f0] text-[#64748b]'
                            }`}
                          >
                            {opt.id}
                          </div>
                          <div className="flex-1 pt-0.5">
                            {opt.text}
                            {isOptionCorrect && (
                              <span className="ml-2 text-xs font-bold text-emerald-700">
                                (Gabarito Oficial)
                              </span>
                            )}
                            {isOptionUserChoice && !isCorrect && (
                              <span className="ml-2 text-xs font-bold text-red-600">
                                (Sua escolha)
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pedagogical Commentary Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#fff8f3] border border-[#fed7aa] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#ff6b00] uppercase tracking-wide">
                      <Sparkles className="w-4 h-4" />
                      <span>Comentário do Professor</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0b1c30] leading-relaxed font-normal">
                      {q.explanation}
                    </p>

                    {q.distractorTips && (
                      <div className="pt-2 mt-2 border-t border-[#fed7aa]/60 text-xs text-[#78350f]">
                        <strong>Dica para não cair em pegadinha:</strong> {q.distractorTips}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
