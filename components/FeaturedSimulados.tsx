'use client';

import React, { useState } from 'react';
import { Play, Flame, Users, Clock, Award, Sparkles, Filter, Search } from 'lucide-react';
import { Simulado, ExamCategory } from '../data/types';
import { allSimulados } from '../data/simuladosData';

interface FeaturedSimuladosProps {
  onStartExam: (simulado: Simulado) => void;
  selectedCategory: ExamCategory | 'all';
  onSelectCategory: (category: ExamCategory | 'all') => void;
  searchQuery: string;
}

export const FeaturedSimulados: React.FC<FeaturedSimuladosProps> = ({
  onStartExam,
  selectedCategory,
  onSelectCategory,
  searchQuery,
}) => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  // Filter tabs
  const tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'populares', label: 'Mais Populares' },
    { id: 'enem', label: 'ENEM' },
    { id: 'vestibulares', label: 'Vestibulares' },
    { id: 'olimpiadas', label: 'Olimpíadas (OBMEP/OBA)' },
    { id: 'concursos', label: 'Concursos' },
    { id: 'sp-estadual', label: 'Saresp & Provão' },
  ];

  // Filtering logic
  const filteredSimulados = allSimulados.filter((simulado) => {
    // 1. Check Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        simulado.title.toLowerCase().includes(q) ||
        simulado.subtitle.toLowerCase().includes(q) ||
        simulado.examName.toLowerCase().includes(q) ||
        simulado.organization.toLowerCase().includes(q) ||
        simulado.categoryLabel.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    // 2. Check Tab selection
    if (activeTab === 'todos') return true;
    if (activeTab === 'populares') return simulado.participantsCount > 25000;
    if (activeTab === 'enem') return simulado.category === 'enem';
    if (activeTab === 'vestibulares') return simulado.category === 'vestibulares';
    if (activeTab === 'olimpiadas') return simulado.category === 'olimpiadas';
    if (activeTab === 'concursos') return simulado.category === 'concursos';
    if (activeTab === 'sp-estadual') return simulado.category === 'sp-estadual';

    return true;
  });

  return (
    <section id="simulados" className="py-16 lg:py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
              Treinamento Intensivo · 100% Gratuito
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1c30] tracking-tight mt-1">
              Simulados em Alta Esta Semana
            </h2>
            <p className="text-sm md:text-base text-[#64748b] mt-2">
              Escolha uma prova completa, execute no tempo oficial ou em modo livre, e veja o seu gabarito comentado imediatamente.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#dce9ff]/60 rounded-xl overflow-x-auto max-w-full scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0b1c30] shadow-sm font-bold'
                      : 'text-[#64748b] hover:text-[#0b1c30] font-medium'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results notice */}
        {searchQuery.trim() && (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-[#fff1e6] border border-[#fed7aa] flex items-center justify-between text-sm text-[#0b1c30]">
            <span>
              Exibindo resultados para a busca: <strong className="text-[#ff6b00]">&ldquo;{searchQuery}&rdquo;</strong> ({filteredSimulados.length} encontrados)
            </span>
          </div>
        )}

        {/* Grid of Simulated Exams */}
        {filteredSimulados.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-dashed border-[#e2e8f0] text-center my-6">
            <Search className="w-10 h-10 text-[#94a3b8] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0b1c30]">Nenhum simulado encontrado</h3>
            <p className="text-sm text-[#64748b] mt-1">
              Tente buscar por termos mais genéricos como &ldquo;ENEM&rdquo;, &ldquo;FUVEST&rdquo;, &ldquo;Saresp&rdquo; ou &ldquo;Matemática&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSimulados.map((simulado) => {
              const isEnem = simulado.category === 'enem';
              const isHard = simulado.difficulty === 'Alta' || simulado.difficulty === 'Muito Difícil';

              return (
                <div
                  key={simulado.id}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-[#fed7aa]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
                >
                  <div>
                    {/* Tags row */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#eee0d5] text-[#5a4136]">
                        {simulado.organization}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold ${simulado.tagColor || 'bg-[#ff6b00] text-white'}`}
                      >
                        {simulado.tag === 'Em Alta' && <Flame className="w-3.5 h-3.5" />}
                        {simulado.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0b1c30] mb-2 group-hover:text-[#ff6b00] transition-colors leading-snug">
                      {simulado.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748b] mb-4 line-clamp-2">
                      {simulado.subtitle}
                    </p>

                    {/* Stats metrics pill */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#eff4ff] rounded-xl mb-6 text-center border border-[#e2e8f0]/60">
                      <div>
                        <span className="block font-heading text-base font-bold text-[#0b1c30]">
                          {simulado.totalQuestions}
                        </span>
                        <span className="text-[11px] font-medium text-[#64748b]">Questões</span>
                      </div>
                      <div>
                        <span className="block font-heading text-base font-bold text-[#0b1c30]">
                          {simulado.defaultMinutes}m
                        </span>
                        <span className="text-[11px] font-medium text-[#64748b]">Tempo</span>
                      </div>
                      <div>
                        <span
                          className={`block text-xs font-bold mt-0.5 ${
                            isHard ? 'text-[#ba1a1a]' : 'text-[#ff6b00]'
                          }`}
                        >
                          {simulado.difficulty}
                        </span>
                        <span className="text-[11px] font-medium text-[#64748b]">Dificuldade</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Metadata line */}
                    <div className="flex items-center justify-between text-[#64748b] text-xs mb-4">
                      <span className="flex items-center gap-1 font-medium">
                        <Users className="w-3.5 h-3.5 text-[#ff6b00]" />
                        {simulado.participantsCount.toLocaleString('pt-BR')} participantes
                      </span>
                      <span className="text-[#ff6b00] font-bold text-[11px] bg-[#fff1e6] px-2 py-0.5 rounded-full border border-[#fed7aa]/50">
                        {simulado.specialFeature}
                      </span>
                    </div>

                    {/* Action button */}
                    <button
                      onClick={() => onStartExam(simulado)}
                      className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm bg-[#ff6b00] text-white hover:bg-[#ea580c] py-3 rounded-xl transition-all shadow-[0_4px_12px_rgba(255,107,0,0.25)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Iniciar Simulado Agora</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
