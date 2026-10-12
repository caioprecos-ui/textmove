import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY, PRICING_CONFIG } from '../config/commercialConfig';

export const AdminConfigBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const isConfigured = WHATSAPP_NUMBER !== 'PREENCHER_COM_NUMERO_OFICIAL';

  if (isDismissed) return null;

  return (
    <div className="bg-[#FFF9E6] border-b-2 border-[#FFD84D] text-xs text-[#123B32] font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <Settings className="w-4 h-4 text-[#123B32] shrink-0" />
          <span className="truncate">
            <strong>Configuração Comercial Linha Têxtil:</strong>{' '}
            {isConfigured ? (
              <span className="text-[#00C98D] font-mono font-black">WhatsApp Oficial Ativo ({WHATSAPP_NUMBER_DISPLAY})</span>
            ) : (
              <span className="text-[#123B32] font-bold">
                Número comercial em aberto (editável em <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#FFD84D]">src/config/commercialConfig.ts</code>)
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1 rounded-full bg-white hover:bg-[#FFFDF7] text-[#123B32] text-[11px] font-black border border-[#FFD84D] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{isOpen ? 'Ocultar' : 'Ver Parâmetros'}</span>
            {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dispensar barra de configuração"
            className="p-1 text-[#46665D] hover:text-[#123B32] rounded-full transition-colors"
          >
            <X className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#FFD84D] bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 py-4 space-y-3 animate-fade-in text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#EAE3D2] space-y-1">
              <span className="font-black text-[#123B32] block">1. Número do WhatsApp</span>
              <p className="text-[#46665D]">
                Arquivo: <code className="text-[#00C98D] font-mono font-black">src/config/commercialConfig.ts</code>
              </p>
              <p className="text-[11px] text-[#123B32]">
                Valor ativo: <code className="font-mono text-[#00C98D] font-black bg-[#DDF8EC] px-1.5 py-0.5 rounded">{WHATSAPP_NUMBER_DISPLAY}</code>
              </p>
              <p className="text-[10px] text-[#46665D]">
                Dígitos internacionais: <code className="font-mono">{WHATSAPP_NUMBER}</code>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EAE3D2] space-y-1">
              <span className="font-black text-[#123B32] block">2. Parâmetros de Preços</span>
              <p className="text-[#46665D]">
                Lançamento: <strong className="text-[#00C98D] font-mono font-black">{PRICING_CONFIG.launchPriceFormatted}</strong> / {PRICING_CONFIG.launchPeriod}
              </p>
              <p className="text-[#46665D]">
                Planejado: <strong className="text-[#123B32] font-mono font-black">{PRICING_CONFIG.plannedStandardPriceFormatted}</strong> / {PRICING_CONFIG.plannedStandardPeriod}
              </p>
              <p className="text-[10px] text-[#46665D]">
                Centralizados em <code className="text-[#00C98D] font-mono font-black">PRICING_CONFIG</code>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EAE3D2] space-y-1">
              <span className="font-black text-[#123B32] block">3. Mensagens Padronizadas</span>
              <p className="text-[#46665D]">
                Todas as 6 mensagens por CTA estão codificadas via <code className="font-mono text-[#00C98D] font-black">encodeURIComponent</code>.
              </p>
              <p className="text-[11px] text-[#00C98D] flex items-center gap-1 font-black">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Links funcionam no celular e computador</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
