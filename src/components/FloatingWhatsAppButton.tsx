import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface FloatingWhatsAppButtonProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  onOpenWhatsApp
}) => {
  const handleClick = () => {
    trackConversionEvent('floating_whatsapp_click');
    onOpenWhatsApp('CONHECER_SISTEMA');
  };

  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        aria-label="Abrir conversa no WhatsApp Comercial"
        className="group flex items-center gap-2.5 px-5 py-3.5 bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] rounded-full shadow-xl shadow-[#00C98D]/35 hover:shadow-2xl transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00C98D]/40 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#123B32] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#123B32]" />
        </span>
        
        <MessageSquare className="w-5 h-5 text-[#123B32] group-hover:rotate-6 transition-transform" />
        
        <span className="hidden sm:inline font-black text-xs tracking-wide">
          WhatsApp Comercial
        </span>
      </button>
    </aside>
  );
};
