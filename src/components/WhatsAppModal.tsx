import React, { useState } from 'react';
import { MessageSquare, ExternalLink, AlertCircle, Check, X, ShieldAlert } from 'lucide-react';
import { getWhatsAppAction, WhatsAppMessageType, WHATSAPP_NUMBER, trackConversionEvent } from '../config/commercialConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageType: WhatsAppMessageType;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  messageType
}) => {
  const [testNumber, setTestNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const currentAction = getWhatsAppAction(messageType);

  const handleOpenWithTestNumber = () => {
    const clean = testNumber.replace(/\D/g, '');
    if (clean.length < 10) {
      setErrorMsg('Digite um número válido com DDD (exemplo: 11999998888 ou 47988887777)');
      return;
    }

    const testAction = getWhatsAppAction(messageType, clean.startsWith('55') ? clean : `55${clean}`);
    trackConversionEvent('whatsapp_test_open', { messageType, phone: clean });
    window.open(testAction.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B32]/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-white border-4 border-[#123B32]/10 rounded-[32px] p-7 shadow-2xl text-[#18332D]">
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 p-2 text-[#46665D] hover:text-[#123B32] rounded-full hover:bg-[#F4F0E6] transition-colors"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#DDF8EC] flex items-center justify-center text-[#00C98D]">
            <MessageSquare className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h3 id="whatsapp-modal-title" className="text-xl font-black text-[#123B32]">
              Atendimento Linha Têxtil
            </h3>
            <p className="text-xs font-bold text-[#46665D]">
              Configuração comercial do WhatsApp
            </p>
          </div>
        </div>

        {!currentAction.isConfigured ? (
          <div className="space-y-4">
            <div className="p-5 rounded-[24px] bg-[#FFF9E6] border-2 border-[#FFD84D] text-[#123B32] text-xs font-bold">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#123B32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-sm text-[#123B32]">
                    Aviso ao Administrador da Landing Page:
                  </p>
                  <p className="mt-1 leading-relaxed text-[#46665D]">
                    O número comercial está atualmente configurado como <code className="px-1.5 py-0.5 rounded bg-white font-mono text-[#123B32] font-black border border-[#FFD84D]">"{WHATSAPP_NUMBER}"</code> no arquivo <code className="px-1.5 py-0.5 rounded bg-white font-mono text-[#123B32] font-black border border-[#FFD84D]">src/config/commercialConfig.ts</code>.
                  </p>
                  <p className="mt-1 text-[#46665D]">
                    Para evitar links quebrados para o usuário final, você pode preencher o número oficial ou testar agora abaixo:
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-[24px] bg-[#FFFDF7] border-2 border-[#EAE3D2] space-y-3">
              <label htmlFor="test-phone-input" className="block text-xs font-black text-[#123B32]">
                Testar envio agora com seu próprio número (opcional):
              </label>
              <div className="flex gap-2">
                <input
                  id="test-phone-input"
                  type="tel"
                  placeholder="DDD + Número (ex: 47988887777)"
                  value={testNumber}
                  onChange={(e) => {
                    setTestNumber(e.target.value);
                    setErrorMsg('');
                  }}
                  className="flex-1 px-4 py-3 rounded-full bg-white border-2 border-[#EAE3D2] text-[#123B32] placeholder-[#8EA89F] text-xs font-bold focus:outline-none focus:border-[#00C98D]"
                />
                <button
                  onClick={handleOpenWithTestNumber}
                  className="px-5 py-3 bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] text-xs font-black rounded-full transition-all flex items-center gap-1.5 shrink-0 shadow-md hover:-translate-y-0.5"
                >
                  <span>Testar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
              {errorMsg && (
                <p className="text-xs text-[#FF796C] font-black flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errorMsg}
                </p>
              )}
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#46665D] mb-1.5">
                Mensagem que será enviada:
              </p>
              <div className="p-4 rounded-2xl bg-[#F8F5EC] border border-[#EAE3D2] text-xs font-bold text-[#18332D] italic leading-relaxed">
                "{currentAction.messageText}"
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm font-bold text-[#46665D]">
              Você será direcionado para o WhatsApp com a mensagem abaixo pré-configurada para nossa equipe de atendimento:
            </p>
            <div className="p-4 rounded-2xl bg-[#F8F5EC] border border-[#EAE3D2] text-xs font-bold text-[#18332D] italic leading-relaxed">
              "{currentAction.messageText}"
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-black text-[#46665D] hover:text-[#123B32] transition-colors"
              >
                Voltar
              </button>
              <a
                href={currentAction.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackConversionEvent('whatsapp_click', { messageType });
                  onClose();
                }}
                className="px-6 py-3 bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] text-xs font-black rounded-full shadow-lg transition-all flex items-center gap-2"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Abrir WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
