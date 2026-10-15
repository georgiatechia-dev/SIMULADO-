'use client';

import React from 'react';
import { Timer, LineChart, Video, CheckCircle2 } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-white border-t border-[#fed7aa]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
            Tecnologia Pedagógica
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0b1c30] tracking-tight mt-1">
            Por que treinar com o escsimulados?
          </h2>
          <p className="text-sm md:text-base text-[#64748b] mt-3">
            Combinamos simulação idêntica à aplicação real com metodologia analítica que aponta exatamente onde você ganha mais pontos e ganha velocidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#eff4ff]/60 hover:bg-[#dce9ff]/40 p-8 rounded-3xl border border-[#fed7aa]/40 shadow-sm flex flex-col items-start relative overflow-hidden group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#eee0d5] flex items-center justify-center text-[#ff6b00] mb-6 shadow-sm">
              <Timer className="w-7 h-7 stroke-[2.2]" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-3">
              Cronômetro Idêntico à Prova Real
            </h3>

            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
              Contagem regressiva no formato exato da sua banca, alertas inteligentes de ritmo por questão e bloqueio automático para simular a pressão do dia oficial.
            </p>

            <div className="mt-auto w-full pt-4">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#e2e8f0] shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center font-heading font-bold text-xs">
                  03:12
                </div>
                <div className="text-xs text-[#0b1c30]">
                  <span className="font-semibold block">Ritmo ideal: 3min/questão</span>
                  <span className="text-[#64748b]">Você está dentro da média esperada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#eff4ff]/60 hover:bg-[#dce9ff]/40 p-8 rounded-3xl border border-[#fed7aa]/40 shadow-sm flex flex-col items-start relative overflow-hidden group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#eee0d5] flex items-center justify-center text-[#ff6b00] mb-6 shadow-sm">
              <LineChart className="w-7 h-7 stroke-[2.2]" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-3">
              Correção com TRI do Inep
            </h3>

            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
              Nossa calibração com Teoria de Resposta ao Item penaliza chutes incoerentes e valoriza acertos consistentes, entregando sua nota estimada real antes do resultado.
            </p>

            <div className="mt-auto w-full pt-4">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#e2e8f0] shadow-xs">
                <svg className="w-10 h-8 text-[#ff6b00]" fill="none" viewBox="0 0 40 30">
                  <path
                    d="M2 24 C 10 20, 15 25, 20 12 C 25 2, 32 8, 38 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                </svg>
                <div className="text-xs text-[#0b1c30]">
                  <span className="font-semibold block">Nota TRI Estimada: 768.4</span>
                  <span className="text-[#64748b]">Margem de erro ±8.2 pontos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#eff4ff]/60 hover:bg-[#dce9ff]/40 p-8 rounded-3xl border border-[#fed7aa]/40 shadow-sm flex flex-col items-start relative overflow-hidden group transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#eee0d5] flex items-center justify-center text-[#ff6b00] mb-6 shadow-sm">
              <Video className="w-7 h-7 stroke-[2.2]" />
            </div>

            <h3 className="font-heading text-xl font-bold text-[#0b1c30] mb-3">
              Gabarito em Vídeo e Texto
            </h3>

            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
              Não basta saber qual alternativa está certa: entenda detalhadamente a pegadinha de cada distrator com análise passo a passo elaborada por professores especialistas.
            </p>

            <div className="mt-auto w-full pt-4">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-[#e2e8f0] shadow-xs">
                <CheckCircle2 className="w-6 h-6 text-[#16a34a] shrink-0" />
                <div className="text-xs text-[#0b1c30]">
                  <span className="font-semibold block">100% dos distratores comentados</span>
                  <span className="text-[#64748b]">Análise passo a passo por item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
