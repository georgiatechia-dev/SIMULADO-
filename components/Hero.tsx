'use client';

import React from 'react';
import { PlayCircle, Compass, Search, Clock, Users, BookOpenCheck, Trophy } from 'lucide-react';

interface HeroProps {
  onStartSimulado: () => void;
  onExploreCategories: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartSimulado,
  onExploreCategories,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#eff4ff] to-[#f8f9ff] pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#d3e4fe]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top highlight chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eee0d5]/70 border border-[#fed7aa]/50 text-[#0b1c30] shadow-sm mb-6 animate-fade-in">
            <span className="text-[#ff6b00] text-base font-bold">🎯</span>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-[#0b1c30]">
              Mais de 50.000 questões comentadas e simulados cronometrados
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b1c30] tracking-tight mb-6 leading-[1.15]">
            Prepare-se para o{' '}
            <span className="relative inline-block text-[#0b1c30]">
              futuro
              <span className="absolute left-0 bottom-1.5 w-full h-3 bg-[#ff6b00]/25 -z-10 rounded-full" />
            </span>{' '}
            com os <span className="text-[#ff6b00] font-extrabold">melhores simulados</span> do país
          </h1>

          {/* Explanatory Subtitle */}
          <p className="text-base sm:text-lg text-[#5a6881] max-w-2xl mb-8 leading-relaxed font-normal">
            Treine com questões reais de provas anteriores, sem cadastro e 100% gratuito. Acompanhe seu desempenho com estatísticas detalhadas, cronômetro oficial e gabarito comentado passo a passo.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={onStartSimulado}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-base font-semibold bg-[#ff6b00] text-white hover:bg-[#ea580c] transition-all px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(255,107,0,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Começar Simulado Grátis</span>
            </button>

            <button
              onClick={onExploreCategories}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold bg-white text-[#0b1c30] hover:bg-[#f1f5f9] border border-[#e2e8f0] transition-all px-7 py-4 rounded-xl shadow-sm cursor-pointer"
            >
              <Compass className="w-5 h-5 text-[#ff6b00]" />
              <span>Explorar Categorias</span>
            </button>
          </div>

          {/* Integrated Search Bar */}
          <div className="w-full max-w-3xl bg-white p-2.5 rounded-2xl shadow-lg border border-[#e2e8f0] flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-3 px-4 py-2 w-full">
              <Search className="w-5 h-5 text-[#94a3b8] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Busque por prova, cargo, ano ou disciplina (ex: ENEM 2024, Saresp, OBMEP, FUVEST...)"
                className="w-full bg-transparent text-sm sm:text-base text-[#0b1c30] placeholder:text-[#94a3b8] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs text-[#94a3b8] hover:text-[#0b1c30] px-2 py-1 rounded bg-[#f1f5f9]"
                >
                  Limpar
                </button>
              )}
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('simulados');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto shrink-0 bg-[#ff6b00] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Pesquisar
            </button>
          </div>

          {/* Metric Counter Panels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 w-full pt-4">
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e2e8f0]/80 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 text-[#0b1c30]">
                <Users className="w-5 h-5 text-[#ff6b00]" />
                <span className="font-heading text-2xl md:text-3xl font-bold">120k+</span>
              </div>
              <span className="text-xs text-[#64748b] uppercase font-semibold tracking-wider mt-1.5">
                Estudantes ativos
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e2e8f0]/80 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 text-[#ff6b00]">
                <BookOpenCheck className="w-5 h-5 text-[#ff6b00]" />
                <span className="font-heading text-2xl md:text-3xl font-bold">4.800+</span>
              </div>
              <span className="text-xs text-[#64748b] uppercase font-semibold tracking-wider mt-1.5">
                Simulados online
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e2e8f0]/80 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 text-[#0b1c30]">
                <Trophy className="w-5 h-5 text-[#16a34a]" />
                <span className="font-heading text-2xl md:text-3xl font-bold">94%</span>
              </div>
              <span className="text-xs text-[#64748b] uppercase font-semibold tracking-wider mt-1.5">
                Taxa de aprovação
              </span>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-[#e2e8f0]/80 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5 text-[#0b1c30]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00] animate-pulse" />
                <Clock className="w-5 h-5 text-[#ff6b00]" />
                <span className="font-heading text-xl md:text-2xl font-bold">Tempo Real</span>
              </div>
              <span className="text-xs text-[#64748b] text-center font-semibold mt-1.5">
                Cronômetro Padrão Inep
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
