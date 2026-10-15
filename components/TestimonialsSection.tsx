'use client';

import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-20 bg-[#eff4ff] border-t border-[#fed7aa]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
              Comunidade de Vencedores
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0b1c30] tracking-tight mt-1 mb-4">
              Eles praticaram aqui e conquistaram a vaga
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6 font-normal">
              Mais de 18.000 alunos relataram aprovação em vestibulares de medicina, engenharias e concursos de ponta após ciclos intensivos com os simulados gratuitos da plataforma.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex text-[#ff6b00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ff6b00] text-[#ff6b00]" />
                ))}
              </div>
              <span className="font-heading text-base font-bold text-[#0b1c30]">4.9 / 5.0</span>
              <span className="text-xs text-[#64748b] font-medium">(8.420 avaliações)</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-[#fed7aa]/40 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-[#0b1c30] italic mb-6 leading-relaxed font-normal">
                &ldquo;Fiz 24 simulados no escsimulados ao longo do ano. Quando abri o caderno do ENEM oficial, parecia apenas mais um domingo normal de treino na plataforma. Passei em Medicina na USP!&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                <img
                  className="w-11 h-11 rounded-full object-cover shadow-xs ring-2 ring-[#ff6b00]/20"
                  alt="Mariana Queiroz"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcVPvCAS4nWXc20Bna_qUXLmvslMyQfP1FHa35klaKGQ_j3hx5k-aE0iVe2ADVYBtDYcAkZcKsS8MtwNoA9_e8G0wo4LZmFeMHZeUH5hXgyErTzSEvieO8MgA1GTivrqr4xJFk9E7U73JWPR1JiaRFqWYMWzacn2RYhZD-zWqcRLpS3pRoImNIY6TGfmawaBlzyaRSnnXR6EHXHgMQ8lRMSiP0a8-5vh3Z5ZtGMPgmmp9dRRd0yQcuBw"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#0b1c30]">
                    Mariana Queiroz
                  </h4>
                  <p className="text-[11px] text-[#ff6b00] font-semibold">
                    1º Lugar Medicina · USP (FUVEST/ENEM)
                  </p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-[#fed7aa]/40 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-[#0b1c30] italic mb-6 leading-relaxed font-normal">
                &ldquo;A precisão do cronômetro e as questões comentadas da Cesgranrio foram o diferencial absoluto para o CNU. A análise estatística pós-prova me salvou nas matérias de Direito.&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                <img
                  className="w-11 h-11 rounded-full object-cover shadow-xs ring-2 ring-[#ff6b00]/20"
                  alt="Lucas Albuquerque"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVffdQ15sfZhIM4Z106nUO03cKlLX-yBcDdjHTgV8FBWXRMH95ho5QiSDWHOMCG18qs0oYhTLVeDL5pgqgVooWN1v1NTi-pQZr29q8084GtHBQM2g3_NntgbPISv8k-kwxsYyVKXP3EJf7cBzX1Oaa6nsX7MN08Fwdraeqa-rJYSnLesTBXN-W9S8wDmQKeehzfF-rEevs1l7qFiCXZgwxtAkS3D_OdXTwT99L01Vy0JL-8UbU0IeCKQ"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#0b1c30]">
                    Lucas Albuquerque
                  </h4>
                  <p className="text-[11px] text-[#ff6b00] font-semibold">
                    Aprovado Analista · CNU Bloco 7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
