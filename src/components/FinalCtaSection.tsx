import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface FinalCtaSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenWhatsApp
}) => {
  const handleClick = () => {
    trackConversionEvent('final_cta_click');
    onOpenWhatsApp('CHAMADA_FINAL');
  };

  return (
    <section className="py-20 md:py-28 bg-[#123B32] text-white relative overflow-hidden">
      
      {/* Formas orgânicas e luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#00C98D]/20 blur-[130px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-[#FFD84D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Tag amigável */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C98D] text-[#123B32] text-xs font-black shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VAMOS ORGANIZAR SUA PRODUÇÃO?</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Sua produção em movimento. Cada etapa sob controle.
          </h2>
          <p className="text-[#C8E6D9] text-base sm:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
            Organize ordens de produção, registre movimentações por QR Code e acompanhe o fluxo de trabalho da sua empresa em um só lugar. Converse com nossa equipe para conhecer a solução.
          </p>
        </div>

        {/* Botão de WhatsApp Grande e em Cápsula */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black text-lg shadow-2xl shadow-[#00C98D]/40 transition-all flex items-center justify-center gap-3 cursor-pointer group hover:scale-105"
          >
            <MessageSquare className="w-6 h-6 text-[#123B32] group-hover:scale-110 transition-transform" />
            <span>FALAR COM O LINHA TÊXTIL NO WHATSAPP</span>
            <ArrowRight className="w-5 h-5 text-[#123B32] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Micro-benefícios com ícones */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-[#C8E6D9]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00C98D]" />
            <span>Atendimento humano sem burocracia</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FFD84D]" />
            <span>Configuração rápida para suas etapas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
