import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface NavbarProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'O Problema', href: '#realidade' },
    { label: 'QR Code', href: '#qrcode' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Recursos', href: '#funcionalidades' },
    { label: 'Na Prática', href: '#demonstracao' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Operações', href: '#para-quem' },
    { label: 'Preços', href: '#precos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    trackConversionEvent('nav_cta_click');
    onOpenWhatsApp('CONHECER_SISTEMA');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAE3D2]/80 bg-[#FFFDF7]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand com identidade amigável e arredondada */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-[#00C98D] flex items-center justify-center shadow-md shadow-[#00C98D]/25 group-hover:rotate-6 transition-transform">
            <svg
              className="w-6 h-6 text-[#123B32]"
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
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#123B32]">
                Linha<span className="text-[#00C98D]">Têxtil</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
            </div>
            <p className="text-[11px] font-bold text-[#46665D] tracking-wide">
              Controle simples de produção
            </p>
          </div>
        </a>

        {/* Desktop Nav com pílulas suaves de hover */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-bold text-[#18332D]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-2 rounded-full text-[#18332D] hover:text-[#123B32] hover:bg-[#DDF8EC] transition-all cursor-pointer font-extrabold"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header Actions - Botão Cápsula Vibrante */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleCtaClick}
            className="px-5 py-2.5 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black text-sm shadow-md shadow-[#00C98D]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-[#123B32] group-hover:scale-110 transition-transform" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-[#123B32] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="p-2 text-[#18332D] hover:text-[#123B32] rounded-full hover:bg-[#DDF8EC] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Arredondado */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE3D2] bg-[#FFFDF7] px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-bold">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-2.5 text-[#18332D] hover:bg-[#DDF8EC] hover:text-[#123B32] rounded-2xl transition-colors font-extrabold"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE3D2]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full py-3.5 bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black rounded-full text-center flex items-center justify-center gap-2 shadow-md shadow-[#00C98D]/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp Comercial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
