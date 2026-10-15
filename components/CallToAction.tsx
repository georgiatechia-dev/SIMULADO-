'use client';

import React from 'react';
import { Sparkles, Play, Compass } from 'lucide-react';

interface CallToActionProps {
  onStartSimulado: () => void;
  onExplore: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onStartSimulado,
  onExplore,
}) => {
  return (
    <section className="py-16 lg:py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-gradient-to-r from-[#e5eeff] via-[#eff4ff] to-[#eee0d5] p-8 sm:p-12 lg:p-16 rounded-3xl shadow-md border border-[#fed7aa]/60 overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Background blur */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#ff6b00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-xs font-bold text-[#ff6b00] mb-4 shadow-xs border border-[#fed7aa]/50">
              🚀 Acesso 100% Livre e Gratuito
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c30] tracking-tight leading-snug">
              Pronto para testar seus conhecimentos e garantir sua vaga?
            </h2>

            <p className="text-sm sm:text-base text-[#5a6881] mt-3 max-w-xl font-normal leading-relaxed">
              Sem burocracia, sem formulários e sem cartão: comece a resolver os 8 simulados completos agora mesmo e receba o gabarito comentado na hora.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full sm:w-auto">
            <button
              onClick={onStartSimulado}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm bg-[#ff6b00] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(255,107,0,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Fazer Simulado Agora</span>
            </button>

            <button
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-sm bg-white text-[#0b1c30] hover:bg-[#f1f5f9] border border-[#cbd5e1] px-6 py-4 rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#ff6b00]" />
              <span>Ver Todas as Bancas</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
