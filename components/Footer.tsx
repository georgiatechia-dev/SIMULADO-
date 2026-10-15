'use client';

import React from 'react';
import { BookOpen, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectCategoryFilter: (categorySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategoryFilter }) => {
  return (
    <footer className="w-full bg-[#131b2e] text-[#dae2fd]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#ff6b00] flex items-center justify-center text-white">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                esc<span className="text-[#ff6b00]">simulados</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9198b1] max-w-sm leading-relaxed font-normal">
              A plataforma definitiva de simulados e questões comentadas para o ENEM, principais vestibulares e concursos do Brasil. Rigor pedagógico e métricas em tempo real para a sua aprovação.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b00]" />
                Portaria MEC nº 341
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b00]" />
                Padrão TRI ENEM
              </span>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#9198b1]">
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados" onClick={() => onSelectCategoryFilter('enem')}>ENEM & SiSU</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados" onClick={() => onSelectCategoryFilter('vestibulares')}>Vestibulares Tradicionais (USP/Unicamp)</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados" onClick={() => onSelectCategoryFilter('concursos')}>Concursos Públicos (CNU/Caixa)</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados" onClick={() => onSelectCategoryFilter('olimpiadas')}>Olimpíadas (OBMEP & OBA)</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados" onClick={() => onSelectCategoryFilter('sp-estadual')}>Saresp & Provão Paulista</a>
              </li>
            </ul>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Plataforma
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#9198b1]">
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados">Banco de Questões</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#simulados">Provas Anteriores</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#diferenciais">Estatísticas e TRI Oficial</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#diferenciais">Cronômetro Padrão Inep</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <a href="#diferenciais">Gabarito Comentado</a>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#9198b1]">
              <li className="hover:text-white transition-colors cursor-pointer">
                <span>Sobre a escsimulados</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <span>Termos de Uso</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <span>Política de Privacidade</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <span>Central de Ajuda</span>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                <span>Fale Conosco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9198b1]">
          <p>© 2025 escsimulados Educação Tecnológica S.A. Todos os direitos reservados. CNPJ 00.000.000/0001-00.</p>
          <p className="flex items-center gap-1.5">
            Feito com <Heart className="w-3.5 h-3.5 text-[#ff6b00] fill-[#ff6b00]" /> para vestibulandos e concurseiros em todo o Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};
