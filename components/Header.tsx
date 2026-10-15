'use client';

import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, Award } from 'lucide-react';

interface HeaderProps {
  onStartQuickSimulado: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onStartQuickSimulado,
  onNavigateSection,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#fed7aa]/30">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo */}
        <div 
          onClick={() => onNavigateSection('inicio')}
          className="flex items-center gap-3 shrink-0 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff6b00] to-[#ea580c] flex items-center justify-center text-white shadow-md shadow-[#ff6b00]/25 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <div className="font-heading font-bold text-2xl text-[#0b1c30] tracking-tight">
            esc<span className="text-[#ff6b00]">simulados</span>
          </div>
        </div>

        {/* Navigation - Public & Free */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#0b1c30]">
          <button
            onClick={() => onNavigateSection('inicio')}
            className="hover:text-[#ff6b00] transition-colors py-1 cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => onNavigateSection('simulados')}
            className="hover:text-[#ff6b00] transition-colors py-1 cursor-pointer"
          >
            Simulados
          </button>
          <button
            onClick={() => onNavigateSection('categorias')}
            className="hover:text-[#ff6b00] transition-colors py-1 cursor-pointer"
          >
            Categorias
          </button>
          <button
            onClick={() => onNavigateSection('diferenciais')}
            className="hover:text-[#ff6b00] transition-colors py-1 cursor-pointer"
          >
            Diferenciais
          </button>
          <button
            onClick={() => onNavigateSection('depoimentos')}
            className="hover:text-[#ff6b00] transition-colors py-1 cursor-pointer"
          >
            Aprovados
          </button>
        </nav>

        {/* Right CTA - Strictly Free, NO Login/Password wall */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff1e6] text-[#a04100] text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#ff6b00]" />
            <span>100% Livre e Gratuito</span>
          </div>

          <button
            onClick={onStartQuickSimulado}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#ff6b00] text-white hover:bg-[#ea580c] transition-all px-5 py-2.5 rounded-xl shadow-[0_4px_14px_0_rgba(255,107,0,0.28)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Começar Simulado</span>
          </button>

          <div 
            title="Acesso Público Gratuito Ativo" 
            className="flex items-center gap-2 pl-1"
          >
            <img
              alt="Estudante Ativo"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#ff6b00]/30 shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjKdGsjzQ_yS4H2U1LgqSjM5-1akudjHyIZq95ZizXC10W4b9pa5ElrBCCgeoNZFRaZoV_w9ed5ZEn8_OehSyaXLvFYLEnWoBQN43p8_CydCal4e1lU3ooVmh4nNIYqN3dNnhA5s6yULWQ3Nh5nNoiksZeHYKLy-LKY_0EALlnBWiH53A1vMjGh8iETzp6poVneVCtRPkO2sgtY5ULKEpAd8vyvOr6KsTW3yWLIDa2p_AaaNWhXCshzw"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
