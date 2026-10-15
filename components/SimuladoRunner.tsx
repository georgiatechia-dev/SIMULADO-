'use client';

import React, { useState, useEffect } from 'react';
import { 
  Simulado, 
  Question, 
  UserAnswerMap, 
  SimuladoResultData 
} from '../data/types';
import { 
  Clock, 
  Pause, 
  Play, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  X,
  Sparkles,
  HelpCircle,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { calculateEstimatedScore } from '../data/simuladosData';

interface SimuladoRunnerProps {
  simulado: Simulado;
  onFinish: (result: SimuladoResultData) => void;
  onExit: () => void;
}

export const SimuladoRunner: React.FC<SimuladoRunnerProps> = ({
  simulado,
  onFinish,
  onExit,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerMap>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState<boolean>(false);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);
  const [showGridDrawer, setShowGridDrawer] = useState<boolean>(false);

  // Timer states
  const totalDurationSeconds = simulado.defaultMinutes * 60;
  const [timeLeft, setTimeLeft] = useState<number>(totalDurationSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isTimerModeUnlimited, setIsTimerModeUnlimited] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);

  const currentQuestion: Question = simulado.questions[currentQuestionIndex];
  const totalQuestions = simulado.questions.length;

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleClearAnswer = () => {
    setUserAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) =>
      prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    );
  };

  const calculateResults = (): SimuladoResultData => {
    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;

    simulado.questions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (!ans) {
        blankCount++;
      } else if (ans === q.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const answeredCount = correctCount + wrongCount;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const scoreInfo = calculateEstimatedScore(simulado, correctCount, totalQuestions);
    const avgTime = answeredCount > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

    return {
      simuladoId: simulado.id,
      examName: simulado.examName,
      title: simulado.title,
      totalQuestions,
      answeredCount,
      correctCount,
      wrongCount,
      blankCount,
      scorePercentage,
      estimatedScore: scoreInfo.score,
      timeSpentSeconds,
      averageTimePerQuestionSeconds: avgTime,
      userAnswers,
      flaggedQuestions,
      completedAt: new Date().toISOString(),
    };
  };

  const handleFinishConfirmed = () => {
    setShowConfirmFinishModal(false);
    const result = calculateResults();
    onFinish(result);
  };

  // Countdown timer effect
  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      setTimeSpentSeconds((prev) => prev + 1);
      if (!isTimerModeUnlimited) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            const res = calculateResults();
            onFinish(res);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, isTimerModeUnlimited]);

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is in an input or modal is open
      if (showConfirmFinishModal || showExitConfirmModal) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        handleSelectOption(key as 'A' | 'B' | 'C' | 'D' | 'E');
      } else if (e.key === 'ArrowRight' && currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, totalQuestions, showConfirmFinishModal, showExitConfirmModal, currentQuestion.id]);

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const isTimeCritical = !isTimerModeUnlimited && timeLeft < 300; // less than 5 minutes

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col font-sans">
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#fed7aa]/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Left: Simulado info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirmModal(true)}
              className="p-2 rounded-xl text-[#64748b] hover:text-[#0b1c30] hover:bg-[#eff4ff] transition-colors cursor-pointer"
              title="Voltar ao início"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#eee0d5] text-[#5a4136]">
                  {simulado.organization}
                </span>
                <span className="hidden sm:inline text-xs text-[#64748b]">
                  {simulado.examName}
                </span>
              </div>
              <h2 className="font-heading text-sm sm:text-base font-bold text-[#0b1c30] truncate max-w-xs sm:max-w-md">
                {simulado.title}
              </h2>
            </div>
          </div>

          {/* Center: Timer widget */}
          <div className="flex items-center gap-2 sm:gap-3 bg-[#eff4ff] px-3.5 py-1.5 rounded-xl border border-[#fed7aa]/60 shadow-inner">
            <div className="flex items-center gap-1.5">
              <Clock
                className={`w-4 h-4 ${
                  isTimeCritical ? 'text-[#ba1a1a] animate-pulse' : 'text-[#ff6b00]'
                }`}
              />
              <span
                className={`font-heading font-bold text-sm sm:text-base tracking-wider ${
                  isTimeCritical ? 'text-[#ba1a1a]' : 'text-[#0b1c30]'
                }`}
              >
                {isTimerModeUnlimited ? formatTime(timeSpentSeconds) : formatTime(timeLeft)}
              </span>
            </div>

            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              title={isTimerRunning ? 'Pausar cronômetro' : 'Continuar cronômetro'}
              className="p-1 rounded-lg text-[#64748b] hover:text-[#0b1c30] hover:bg-white transition-colors cursor-pointer"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-[#ff6b00] text-[#ff6b00]" />}
            </button>

            <button
              onClick={() => setIsTimerModeUnlimited(!isTimerModeUnlimited)}
              title={isTimerModeUnlimited ? 'Mudar para Regressivo' : 'Mudar para Tempo Livre'}
              className="hidden md:inline-flex text-[11px] font-semibold text-[#ff6b00] hover:underline cursor-pointer pl-1 border-l border-[#fed7aa]"
            >
              {isTimerModeUnlimited ? 'Modo Livre' : 'Regressivo'}
            </button>
          </div>

          {/* Right: Actions & Question Navigator Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowGridDrawer(true)}
              className="lg:hidden p-2 rounded-xl bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>{currentQuestionIndex + 1}/{totalQuestions}</span>
            </button>

            <button
              onClick={() => setShowConfirmFinishModal(true)}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_12px_rgba(255,107,0,0.25)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-[#e2e8f0] h-1.5">
          <div
            className="bg-gradient-to-r from-[#ff6b00] to-[#ea580c] h-1.5 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Container: Split View (Question Content + Navigator Panel) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full flex flex-col lg:flex-row gap-8">
        {/* Left: Question Card Area */}
        <section className="flex-1 flex flex-col justify-between">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#fed7aa]/40">
            {/* Question Meta header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#ff6b00] text-white font-heading font-bold text-sm flex items-center justify-center">
                  {currentQuestionIndex + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">
                  {currentQuestion.subject}
                </span>
                <span className="text-xs text-[#94a3b8]">•</span>
                <span className="text-xs font-medium text-[#64748b]">
                  {currentQuestion.topic}
                </span>
              </div>

              {/* Flag button */}
              <button
                onClick={handleToggleFlag}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  flaggedQuestions.includes(currentQuestion.id)
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-[#f8f9ff] text-[#64748b] border-[#e2e8f0] hover:text-[#0b1c30]'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(currentQuestion.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span>{flaggedQuestions.includes(currentQuestion.id) ? 'Marcada para Revisar' : 'Marcar para Revisar'}</span>
              </button>
            </div>

            {/* Context text (if present) */}
            {currentQuestion.context && (
              <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#eff4ff]/60 border-l-4 border-[#ff6b00] text-[#1e293b] text-sm sm:text-base leading-relaxed italic font-normal">
                {currentQuestion.context}
              </div>
            )}

            {/* Statement */}
            <div className="my-6">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#0b1c30] leading-snug">
                {currentQuestion.statement}
              </h3>
            </div>

            {/* Alternatives A, B, C, D, E */}
            <div className="space-y-3.5 my-8">
              {currentQuestion.options.map((option) => {
                const isSelected = userAnswers[currentQuestion.id] === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`group p-4 sm:p-4.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#fff5eb] border-[#ff6b00] shadow-sm'
                        : 'bg-white border-[#e2e8f0] hover:border-[#fed7aa] hover:bg-[#f8f9ff]'
                    }`}
                  >
                    {/* Circle radio */}
                    <div
                      className={`w-8 h-8 rounded-xl font-heading font-bold text-sm flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#ff6b00] text-white shadow-sm'
                          : 'bg-[#f1f5f9] text-[#64748b] group-hover:bg-[#e2e8f0] group-hover:text-[#0b1c30]'
                      }`}
                    >
                      {option.id}
                    </div>

                    {/* Option Text */}
                    <div className="flex-1 pt-0.5 text-sm sm:text-base text-[#0b1c30] font-normal leading-relaxed">
                      {option.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions of the current Question */}
            <div className="flex items-center justify-between pt-6 border-t border-[#e2e8f0] gap-2">
              {userAnswers[currentQuestion.id] ? (
                <button
                  onClick={handleClearAnswer}
                  className="text-xs text-[#94a3b8] hover:text-[#ba1a1a] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar minha resposta</span>
                </button>
              ) : (
                <span className="text-xs text-[#94a3b8] italic">
                  Selecione uma alternativa acima
                </span>
              )}

              <span className="text-xs text-[#64748b] hidden sm:inline">
                Dica: Pressione as teclas <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, <strong>D</strong> ou <strong>E</strong> no teclado
              </span>
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className={`px-5 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer ${
                currentQuestionIndex === 0
                  ? 'bg-transparent text-[#cbd5e1] cursor-not-allowed'
                  : 'bg-white text-[#0b1c30] hover:bg-[#eff4ff] border border-[#e2e8f0] shadow-sm'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="text-xs font-semibold text-[#64748b] hidden sm:block">
              Questão {currentQuestionIndex + 1} de {totalQuestions}
            </div>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#ff6b00] hover:bg-[#ea580c] text-white flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmFinishModal(true)}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#16a34a] hover:bg-[#15803d] text-white flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Revisar e Finalizar</span>
              </button>
            )}
          </div>
        </section>

        {/* Right: Question Navigator Panel (Desktop Sticky) */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#fed7aa]/40 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading text-base font-bold text-[#0b1c30]">
                Mapa de Questões
              </h4>
              <span className="text-xs font-semibold text-[#ff6b00] bg-[#fff1e6] px-2 py-0.5 rounded-md">
                {answeredCount}/{totalQuestions} Respondidas
              </span>
            </div>

            {/* Mini Legend */}
            <div className="flex items-center justify-between text-[11px] text-[#64748b] pb-4 mb-4 border-b border-[#e2e8f0]">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" /> Respondida
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Revisar
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f1f5f9] border border-[#cbd5e1]" /> Em branco
              </span>
            </div>

            {/* Grid 1 to 20 */}
            <div className="grid grid-cols-5 gap-2.5">
              {simulado.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = flaggedQuestions.includes(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`relative h-11 rounded-xl font-heading text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-[#0b1c30] ring-offset-2 scale-105 z-10'
                        : ''
                    } ${
                      isAnswered
                        ? 'bg-[#ff6b00] text-white shadow-sm'
                        : isFlagged
                        ? 'bg-amber-100 text-amber-800 border-2 border-amber-400'
                        : 'bg-[#f8f9ff] text-[#64748b] hover:bg-[#eff4ff] border border-[#e2e8f0]'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick summary stats */}
            <div className="mt-6 pt-5 border-t border-[#e2e8f0] space-y-2 text-xs">
              <div className="flex justify-between text-[#64748b]">
                <span>Tempo decorrido:</span>
                <span className="font-semibold text-[#0b1c30]">{formatTime(timeSpentSeconds)}</span>
              </div>
              <div className="flex justify-between text-[#64748b]">
                <span>Em branco:</span>
                <span className="font-semibold text-[#ba1a1a]">{unansweredCount} itens</span>
              </div>
              <div className="flex justify-between text-[#64748b]">
                <span>Marcadas para revisão:</span>
                <span className="font-semibold text-amber-600">{flaggedQuestions.length} itens</span>
              </div>
            </div>

            <button
              onClick={() => setShowConfirmFinishModal(true)}
              className="mt-6 w-full py-3 rounded-xl bg-[#0b1c30] hover:bg-[#ff6b00] text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer"
            >
              Concluir e Ver Gabarito
            </button>
          </div>
        </aside>
      </main>

      {/* Mobile Grid Drawer (when user clicks question counter) */}
      {showGridDrawer && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end lg:hidden">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-bold text-lg text-[#0b1c30]">
                Navegação Rápida
              </h4>
              <button
                onClick={() => setShowGridDrawer(false)}
                className="p-2 rounded-full bg-[#f1f5f9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2.5 my-4">
              {simulado.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = !!userAnswers[q.id];
                const isFlagged = flaggedQuestions.includes(q.id);

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setShowGridDrawer(false);
                    }}
                    className={`h-11 rounded-xl font-heading text-sm font-bold flex items-center justify-center ${
                      isCurrent ? 'ring-2 ring-[#0b1c30]' : ''
                    } ${
                      isAnswered
                        ? 'bg-[#ff6b00] text-white'
                        : isFlagged
                        ? 'bg-amber-100 text-amber-800 border-2 border-amber-400'
                        : 'bg-[#f1f5f9] text-[#64748b]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                setShowGridDrawer(false);
                setShowConfirmFinishModal(true);
              }}
              className="w-full mt-4 py-3 rounded-xl bg-[#ff6b00] text-white font-semibold"
            >
              Finalizar Simulado Agora
            </button>
          </div>
        </div>
      )}

      {/* Modal: Confirm Finish */}
      {showConfirmFinishModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#fed7aa] animate-scale-in">
            <div className="w-12 h-12 rounded-2xl bg-[#fff1e6] flex items-center justify-center text-[#ff6b00] mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-2">
              Deseja finalizar o simulado?
            </h3>

            <p className="text-sm text-[#64748b] leading-relaxed mb-6">
              Você respondeu a <strong>{answeredCount}</strong> de <strong>{totalQuestions}</strong> questões.
              {unansweredCount > 0 && (
                <span className="block mt-2 text-[#ba1a1a] font-semibold">
                  Atenção: ainda restam {unansweredCount} questões em branco!
                </span>
              )}
              {flaggedQuestions.length > 0 && (
                <span className="block mt-1 text-amber-600">
                  Você marcou {flaggedQuestions.length} questões para revisar.
                </span>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowConfirmFinishModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-[#e2e8f0] text-[#0b1c30] font-semibold text-sm hover:bg-[#f8f9ff] transition-colors cursor-pointer"
              >
                Voltar à Prova
              </button>
              <button
                onClick={handleFinishConfirmed}
                className="flex-1 py-3 px-4 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-semibold text-sm transition-colors shadow-md cursor-pointer"
              >
                Confirmar e Entregar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Confirm Exit */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#fed7aa] animate-scale-in">
            <div className="w-12 h-12 rounded-2xl bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a] mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-2">
              Abandonar Simulado?
            </h3>

            <p className="text-sm text-[#64748b] leading-relaxed mb-6">
              O seu progresso neste simulado não será registrado caso você saia agora sem finalizar. Deseja realmente retornar à tela inicial?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowExitConfirmModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-[#e2e8f0] text-[#0b1c30] font-semibold text-sm hover:bg-[#f8f9ff] transition-colors cursor-pointer"
              >
                Continuar Respondendo
              </button>
              <button
                onClick={onExit}
                className="flex-1 py-3 px-4 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white font-semibold text-sm transition-colors shadow-md cursor-pointer"
              >
                Sair sem Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
