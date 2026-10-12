import React from 'react';
import { X, Shield } from 'lucide-react';
import { BRAND_CONFIG } from '../config/commercialConfig';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B32]/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-white border-4 border-[#123B32]/10 rounded-[32px] p-7 sm:p-9 shadow-2xl text-[#18332D] max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Fechar política de privacidade"
          className="absolute top-5 right-5 p-2 text-[#46665D] hover:text-[#123B32] rounded-full hover:bg-[#F4F0E6] transition-colors"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#DDF8EC] flex items-center justify-center text-[#00C98D]">
            <Shield className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h3 id="privacy-modal-title" className="text-2xl font-black text-[#123B32]">
              Política de Privacidade
            </h3>
            <p className="text-xs font-bold text-[#46665D]">
              {BRAND_CONFIG.name} · Compromisso com a privacidade da sua confecção
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm font-bold text-[#46665D] leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como o <strong>{BRAND_CONFIG.name}</strong> trata as informações operacionais e de contato de usuários e visitantes de acordo com a legislação brasileira (Lei Geral de Proteção de Dados - Lei 13.709/2018).
          </p>

          <h4 className="text-base font-black text-[#123B32] pt-2">1. Coleta de Informações</h4>
          <p>
            Nesta landing page comercial, não coletamos dados pessoais sensíveis sem seu consentimento expresso. Ao iniciar uma conversa pelo WhatsApp comercial ou solicitar contato, coletamos apenas os dados informados voluntariamente (como nome, telefone e nome da confecção) estritamente para fins de atendimento comercial e suporte técnico.
          </p>

          <h4 className="text-base font-black text-[#123B32] pt-2">2. Dados Operacionais de Produção</h4>
          <p>
            Na utilização do sistema de gestão, as informações de produtos, quantidades, facções e ordens de produção pertencem exclusivamente à confecção contratante. Não compartilhamos nem comercializamos dados de lotes, clientes ou prestadores com terceiros.
          </p>

          <h4 className="text-base font-black text-[#123B32] pt-2">3. Canais de Comunicação</h4>
          <p>
            A interação via WhatsApp é iniciada por iniciativa do próprio usuário através dos botões da página. Não enviamos mensagens não solicitadas (spam).
          </p>

          <h4 className="text-base font-black text-[#123B32] pt-2">4. Segurança das Informações</h4>
          <p>
            Adotamos medidas técnicas e organizacionais de segurança para proteger o tráfego de dados e resguardar as informações da sua empresa.
          </p>

          <h4 className="text-base font-black text-[#123B32] pt-2">5. Contato sobre Privacidade</h4>
          <p>
            Para dúvidas ou solicitações referentes à privacidade de dados, utilize o canal de contato oficial informado no rodapé desta página.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#F0ECE1] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#123B32] hover:bg-[#0C2620] text-white text-xs font-black rounded-full transition-all"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
