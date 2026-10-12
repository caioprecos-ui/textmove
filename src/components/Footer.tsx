import React from 'react';
import { MessageSquare, Mail, Shield, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG, WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface FooterProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWhatsApp,
  onOpenPrivacy
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFDF7] border-t-2 border-[#EAE3D2] text-[#46665D] text-xs font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#EAE3D2]">
          
          {/* Coluna da Marca (5 colunas) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#00C98D] flex items-center justify-center text-[#123B32] shadow-xs">
                <svg
                  className="w-5 h-5 text-[#123B32]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                  <circle cx="8" cy="6" r="2.2" fill="currentColor" />
                  <circle cx="16" cy="12" r="2.2" fill="currentColor" />
                  <circle cx="10" cy="18" r="2.2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-black text-[#123B32] tracking-tight">
                Linha<span className="text-[#00C98D]">Têxtil</span>
              </span>
            </div>

            <p className="text-[#46665D] text-sm leading-relaxed max-w-sm">
              Solução para organização, identificação e acompanhamento de ordens de produção com QR Code e etapas operacionais.
            </p>

            <p className="text-[#123B32] text-xs font-black">
              {BRAND_CONFIG.companyStatus}
            </p>
          </div>

          {/* Links Rápidos (3 colunas) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#123B32]">
              Navegação
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#realidade" className="hover:text-[#00C98D] transition-colors">
                  A Realidade da Produção
                </a>
              </li>
              <li>
                <a href="#qrcode" className="hover:text-[#00C98D] transition-colors">
                  Fluxo do QR Code
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#00C98D] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-[#00C98D] transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#00C98D] transition-colors">
                  Resultados & Impacto
                </a>
              </li>
              <li>
                <a href="#para-quem" className="hover:text-[#00C98D] transition-colors">
                  Operações & Segmentos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-[#00C98D] transition-colors">
                  Preços e Condições
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00C98D] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Contato Comercial (4 colunas) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#123B32]">
              Atendimento Comercial
            </p>
            
            <p className="text-xs leading-relaxed text-[#46665D]">
              Fale diretamente com nossa equipe comercial para tirar dúvidas ou iniciar o uso:
            </p>

            <div className="space-y-2.5 pt-1">
              <button
                onClick={() => {
                  trackConversionEvent('footer_whatsapp_click');
                  onOpenWhatsApp('CONHECER_SISTEMA');
                }}
                className="w-full py-3 px-4 rounded-full bg-[#123B32] hover:bg-[#0C2620] text-white flex items-center justify-between transition-all cursor-pointer shadow-xs hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00C98D]" />
                  <span className="font-black text-xs">WhatsApp Comercial</span>
                </div>
                <span className="text-[11px] text-[#00C98D] font-black">{BRAND_CONFIG.officialWhatsApp} ↗</span>
              </button>

              <div className="p-3 rounded-2xl bg-white border border-[#EAE3D2] flex items-center gap-2 text-[#123B32]">
                <Mail className="w-4 h-4 text-[#00C98D] shrink-0" />
                <span className="font-mono text-xs font-bold">{BRAND_CONFIG.officialEmail}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Políticas e Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#46665D]">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#123B32] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-[#00C98D]" />
              <span>Política de Privacidade</span>
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao início da página"
              className="hover:text-[#123B32] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
