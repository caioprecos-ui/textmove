import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { PRICING_CONFIG, WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface FaqSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { launchPriceFormatted, launchPeriod, plannedStandardPriceFormatted, plannedStandardPeriod } = PRICING_CONFIG;

  const faqs = [
    {
      q: 'O que é o Linha Têxtil?',
      a: 'O Linha Têxtil é um sistema web especializado na organização, identificação e acompanhamento de ordens de produção. Ele permite identificar lotes com QR Code ou token manual, registrar movimentações entre etapas operacionais e prestadores de serviços, e acompanhar quantidades concluídas, faltantes e com defeito em tempo real.'
    },
    {
      q: 'Para quais empresas o sistema foi desenvolvido?',
      a: 'O sistema foi concebido com base em processos sequenciais reais, atendendo tanto confecções e indústria têxtil quanto marcenarias, gráficas, metalúrgicas, pequenas indústrias de embalagens e qualquer negócio que produza em etapas ou lotes e precise rastrear a passagem entre postos e prestadores.'
    },
    {
      q: 'Como funciona a movimentação por QR Code?',
      a: 'Cada ordem de produção gerada recebe uma etiqueta com QR Code e um token manual alfanumérico de 6 dígitos. Na entrega ou recebimento do lote, o responsável aponta a câmera do smartphone para o QR Code (ou digita o código) e confirma a movimentação com as quantidades de peças, atualizando o sistema na hora.'
    },
    {
      q: 'Posso acompanhar ordens entre prestadores e etapas externas?',
      a: 'Sim! Você cadastra seus prestadores, oficinas parceiras ou fornecedores externos no sistema. A cada movimentação, a ordem fica vinculada ao responsável atual, permitindo saber onde cada lote se encontra e quanto tempo está em cada etapa.'
    },
    {
      q: 'Posso utilizar o sistema pelo celular?',
      a: 'Com certeza! O Linha Têxtil conta com interface totalmente adaptada para celulares, permitindo leitura de QR Code e apontamento direto pelo navegador do smartphone no chão de fábrica, na van de entrega ou na oficina parceira.'
    },
    {
      q: 'Como funciona a contratação?',
      a: 'A contratação é realizada diretamente com nossa equipe comercial pelo WhatsApp. Conversamos sobre a rotina da sua produção, tiramos todas as dúvidas e iniciamos o processo de ativação imediata.'
    },
    {
      q: 'Quanto custa a assinatura?',
      a: `A oferta de lançamento está fixada em ${launchPriceFormatted} por ${launchPeriod} para novos assinantes. O preço padrão planejado para etapas futuras é de ${plannedStandardPriceFormatted} por ${plannedStandardPeriod}. Sem taxas ocultas.`
    },
    {
      q: 'O que está incluído no plano?',
      a: 'Está incluído o acesso completo ao painel de gestão, geração ilimitada de ordens com QR Code, cadastro de produtos, etapas e facções, registro de peças prontas, faltantes e defeitos, histórico auditável de movimentações e suporte humanizado.'
    },
    {
      q: 'Como funciona a configuração inicial?',
      a: 'A configuração é rápida e assistida. Você cadastra as etapas da sua linha produtiva (ex.: Corte, Costura, Lavanderia, Acabamento) e nós ajudamos você a cadastrar seus primeiros produtos e prestadores para começar a rodar.'
    },
    {
      q: 'Como posso obter suporte?',
      a: 'O suporte técnico é prestado de forma humanizada diretamente pelo WhatsApp e por e-mail em horário comercial, para atender prontamente sua equipe interna e seus prestadores parceiros.'
    }
  ];

  const toggle = (idx: number) => {
    const newIdx = openIndex === idx ? null : idx;
    setOpenIndex(newIdx);
    if (newIdx !== null) {
      trackConversionEvent('faq_item_opened', { questionIndex: idx });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8F5EC] relative overflow-hidden">
      
      {/* Elemento orgânico */}
      <div className="absolute top-1/2 -right-10 w-72 h-72 rounded-full bg-[#00C98D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD84D] text-[#123B32] text-xs font-black">
            <span>PERGUNTAS FREQUENTES</span>
            <span>💬</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Tire suas dúvidas sobre o Linha Têxtil
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Respostas diretas e transparentes sobre o sistema, a rotina de QR Code e as condições comerciais.
          </p>
        </div>

        {/* Lista Accordion Arredondada */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[24px] border-2 transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#00C98D] shadow-md'
                    : 'bg-white border-[#123B32]/10 hover:border-[#123B32]/25 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer text-[#123B32] transition-colors"
                >
                  <span className="text-base sm:text-lg font-black leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? 'bg-[#00C98D] text-[#123B32] rotate-180 shadow-xs'
                        : 'bg-[#F4F0E6] text-[#123B32]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-bold text-[#46665D] leading-relaxed border-t border-[#F0ECE1] animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Amigável */}
        <div className="mt-14 text-center">
          <p className="text-sm font-bold text-[#46665D] mb-3">
            Ficou com alguma dúvida que não está aqui?
          </p>
          <button
            onClick={() => onOpenWhatsApp('CONHECER_SISTEMA')}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#123B32] hover:bg-[#0C2620] text-white font-black text-sm transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 text-[#00C98D]" />
            <span>Falar com nosso time no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
