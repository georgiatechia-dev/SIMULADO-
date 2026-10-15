'use client';

import React from 'react';
import { GraduationCap, Landmark, Scale, BookOpen, ChevronRight, Award, Compass } from 'lucide-react';
import { ExamCategory } from '../data/types';

interface CategoryGridProps {
  onSelectCategory: (category: ExamCategory | 'all') => void;
  onOpenExam: (examId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  onOpenExam,
}) => {
  const categories = [
    {
      id: 'enem' as ExamCategory,
      examId: 'enem-1',
      title: 'ENEM & SiSU',
      badge: 'Mais procurado',
      badgeStyle: 'bg-[#ff6b00] text-white',
      badgeAux: '1º e 2º Dias',
      icon: GraduationCap,
      description: 'Simulados de 1º e 2º dia, TRI calculada com precisão estatística, redação nota 1000 e acervo de questões interdisciplinares.',
      actionText: 'Ver simulados ENEM',
    },
    {
      id: 'vestibulares' as ExamCategory,
      examId: 'fuvest',
      title: 'Vestibulares Tradicionais',
      badge: 'USP, Unicamp, UFRJ',
      badgeStyle: 'bg-[#eee0d5] text-[#5a4136]',
      badgeAux: 'FUVEST 2024',
      icon: Landmark,
      description: 'FUVEST, UNICAMP, UNESP, UERJ e as maiores universidades públicas estaduais e federais com questões objetivas e discursivas.',
      actionText: 'Ver Vestibulares',
    },
    {
      id: 'concursos' as ExamCategory,
      examId: 'concursos',
      title: 'Concursos Públicos',
      badge: 'Federais & Bancários',
      badgeStyle: 'bg-[#eee0d5] text-[#5a4136]',
      badgeAux: 'CNU & Bancos',
      icon: Scale,
      description: 'CNU Bloco 7, Caixa Econômica, Carreiras Policiais, Tribunais, INSS e Fiscal com foco nas bancas Cesgranrio, Cebraspe e FGV.',
      actionText: 'Ver Concursos',
    },
    {
      id: 'olimpiadas' as ExamCategory,
      examId: 'obmep',
      title: 'Olimpíadas Científicas',
      badge: 'OBMEP & OBA',
      badgeStyle: 'bg-emerald-100 text-emerald-800',
      badgeAux: 'Nível 2 e 3',
      icon: Award,
      description: 'Olimpíada Brasileira de Matemática (OBMEP) e Olimpíada de Astronomia (OBA). Desafios de lógica pura e física espacial.',
      actionText: 'Ver Olimpíadas',
    },
    {
      id: 'sp-estadual' as ExamCategory,
      examId: 'provao-paulista',
      title: 'Saresp & Provão Paulista',
      badge: 'Vagas Diretas SP',
      badgeStyle: 'bg-amber-100 text-amber-800',
      badgeAux: 'USP / Unesp / Fatec',
      icon: Compass,
      description: 'Avaliação seriada oficial do Estado de São Paulo para ingresso direto na USP, Unesp, Unicamp e Fatec, além do diagnóstico SAEB.',
      actionText: 'Ver Provas de SP',
    },
    {
      id: 'fundamental-medio' as ExamCategory,
      examId: 'saresp',
      title: 'Ensino Fundamental & Médio',
      badge: 'Reforço & BNCC',
      badgeStyle: 'bg-sky-100 text-sky-800',
      badgeAux: 'Diagnóstico Escolar',
      icon: BookOpen,
      description: 'Simulados de nivelamento, SAEB, Prova Brasil e preparação contínua com foco na fixação de conteúdos de base.',
      actionText: 'Ver Escolar',
    },
  ];

  return (
    <section id="categorias" className="py-16 lg:py-24 bg-white border-y border-[#fed7aa]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
              Frentes Educacionais
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1c30] tracking-tight mt-1">
              Escolha a sua jornada de estudos
            </h2>
            <p className="text-sm md:text-base text-[#64748b] mt-2">
              Bancas e conteúdos estruturados especificamente para o perfil de cada exame nacional. Acesso 100% gratuito.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="inline-flex items-center gap-1.5 text-[#ff6b00] hover:text-[#ea580c] font-semibold text-sm group cursor-pointer"
          >
            Ver todos os simulados disponíveis
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group bg-[#eff4ff]/60 hover:bg-[#dce9ff]/40 p-6 rounded-2xl border border-[#fed7aa]/40 hover:border-[#ff6b00]/40 shadow-sm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#eee0d5] flex items-center justify-center text-[#ff6b00] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.badgeStyle}`}>
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-2 group-hover:text-[#ff6b00] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => onOpenExam(cat.examId)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white group-hover:bg-[#ff6b00] text-[#0b1c30] group-hover:text-white font-semibold text-xs sm:text-sm text-center transition-all shadow-sm border border-[#e2e8f0] group-hover:border-[#ff6b00] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{cat.actionText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
