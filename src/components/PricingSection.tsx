import React from 'react';
import { MessageSquare, Check, HelpCircle, ShieldCheck, Clock, FileCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_CONFIG, WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface PricingSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenWhatsApp
}) => {
  const { launchPriceFormatted, launchPeriod, launchBadge, plannedStandardPriceFormatted, plannedStandardPeriod, commercialDetails } = PRICING_CONFIG;

  const handleHireClick = () => {
    trackConversionEvent('pricing_hire_cta_click', { price: launchPriceFormatted });
    onOpenWhatsApp('CONTRATAR');
  };

  const handleConsultValues = () => {
    trackConversionEvent('pricing_consult_values_click');
    onOpenWhatsApp('CONSULTAR_VALORES');
  };

  return (
    <section id="precos" className="py-20 md:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Luz ambiente orgânica */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#00C98D]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD84D] text-[#123B32] text-xs font-black">
            <span>VALORES TRANSPARENTES</span>
            <span>🏷️</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Assinatura simples para a sua empresa
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Sem fidelidade forçada ou pegadinhas de contrato. Uma assinatura acessível para organizar de vez o chão de fábrica e a esteira produtiva.
          </p>
        </div>

        {/* Card Principal de Oferta Comercial Convidativo */}
        <div className="max-w-3xl mx-auto rounded-[36px] bg-white border-4 border-[#123B32]/10 shadow-2xl p-7 sm:p-11 relative">
          
          {/* Header da Oferta com Badge Amarelo Alegre */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#F0ECE1]">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full bg-[#FFD84D] text-[#123B32] text-xs font-black shadow-xs rotate-[-1deg]">
                {launchBadge} 🚀
              </span>
            </div>
            <span className="text-xs font-bold text-[#46665D]">
              {commercialDetails.pricingType}
            </span>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Bloco de Preço (5 colunas) */}
            <div className="md:col-span-5 space-y-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#F0ECE1] pb-6 md:pb-0 md:pr-6">
              <div>
                <span className="text-xs font-black text-[#46665D] block mb-1">
                  Valor cobrado na assinatura:
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-5xl font-black text-[#123B32] font-mono tracking-tight">
                    {launchPriceFormatted}
                  </span>
                  <span className="text-sm font-black text-[#46665D]">
                    / {launchPeriod}
                  </span>
                </div>
              </div>

              {/* Parâmetro de Preço Planejado */}
              <div className="p-4 rounded-2xl bg-[#FFFDF7] border-2 border-[#123B32]/10 text-xs font-bold text-[#46665D] space-y-1">
                <span className="text-[11px] font-black text-[#123B32] block">
                  Planejamento Comercial:
                </span>
                <p>
                  Preço padrão planejado: <strong className="text-[#123B32]">{plannedStandardPriceFormatted}</strong> / {plannedStandardPeriod}.
                </p>
                <p className="text-[10px] text-[#46665D]">
                  Condição inicial de lançamento válida para novos assinantes.
                </p>
              </div>

              {/* Botão Cápsula de Conversão Principal */}
              <button
                onClick={handleHireClick}
                className="w-full py-4 px-6 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black text-base shadow-lg shadow-[#00C98D]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 text-[#123B32] group-hover:scale-110 transition-transform" />
                <span>CONTRATAR PELO WHATSAPP</span>
              </button>

              <button
                onClick={handleConsultValues}
                className="w-full py-2 text-xs font-bold text-[#46665D] hover:text-[#123B32] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Tirar dúvidas sobre os valores</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00C98D]" />
              </button>
            </div>

            {/* O que está incluso (7 colunas) */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#123B32]">
                O que está incluso na assinatura:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm font-bold text-[#18332D]">
                {commercialDetails.includedInSubscription.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#DDF8EC] flex items-center justify-center text-[#00C98D] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Esclarecimentos Obrigatórios com Estilo Descomplica */}
          <div className="pt-6 border-t border-[#F0ECE1] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-[#46665D]">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2]">
              <FileCheck className="w-4 h-4 text-[#00C98D] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[#123B32]">Como funciona a contratação?</p>
                <p className="mt-0.5 leading-relaxed">{commercialDetails.hiringProcess}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2]">
              <Clock className="w-4 h-4 text-[#FFD84D] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[#123B32]">Configuração inicial guiada</p>
                <p className="mt-0.5 leading-relaxed">{commercialDetails.setupProcess}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2]">
              <ShieldCheck className="w-4 h-4 text-[#00C98D] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[#123B32]">Condições de cancelamento</p>
                <p className="mt-0.5 leading-relaxed">{commercialDetails.cancellationPolicy}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2]">
              <HelpCircle className="w-4 h-4 text-[#7B61FF] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-[#123B32]">Suporte humanizado</p>
                <p className="mt-0.5 leading-relaxed">{commercialDetails.supportPolicy}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
