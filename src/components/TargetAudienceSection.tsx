import React from 'react';
import { Scissors, Hammer, Printer, Cog, Package, Layers, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface TargetAudienceSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onOpenWhatsApp
}) => {
  const segments = [
    {
      id: 'textil',
      title: 'Confecções e Indústria Têxtil',
      subtitle: 'Caso de uso nativo do sistema',
      badge: 'Nativo',
      badgeColor: 'bg-[#DDF8EC] text-[#123B32]',
      icon: Scissors,
      iconBg: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      flowExample: 'Corte ➔ Costura (facções) ➔ Traveti ➔ Lavanderia ➔ Acabamento',
      description:
        'Acompanhamento de grades, referências e passagens por facções parceiras ou oficinas terceirizadas com leitura rápida de QR Code.'
    },
    {
      id: 'marcenaria',
      title: 'Marcenarias e Fabricação de Móveis',
      subtitle: 'Móveis sob medida e seriados',
      badge: 'Potencial',
      badgeColor: 'bg-[#FFF9E6] text-[#123B32]',
      icon: Hammer,
      iconBg: 'bg-[#FFF9E6]',
      iconColor: 'text-[#123B32]',
      flowExample: 'Plano de corte ➔ Fita de borda ➔ Usinagem CNC ➔ Montagem ➔ Pintura',
      description:
        'Identificação de peças e módulos por ordem de serviço para que a equipe de montagem saiba exatamente o que já passou pela fita e usinagem.'
    },
    {
      id: 'grafica',
      title: 'Gráficas e Comunicação Visual',
      subtitle: 'Impressão e acabamentos especiais',
      badge: 'Potencial',
      badgeColor: 'bg-[#F2EDFF] text-[#7B61FF]',
      icon: Printer,
      iconBg: 'bg-[#F2EDFF]',
      iconColor: 'text-[#7B61FF]',
      flowExample: 'Pré-impressão ➔ Impressão ➔ Corte e vinco ➔ Laminação ➔ Embalagem',
      description:
        'Rastreabilidade de tiragens e pedidos personalizados entre máquinas e processos de acabamento terceirizados ou internos.'
    },
    {
      id: 'metalurgia',
      title: 'Metalúrgicas e Oficinas de Fabricação',
      subtitle: 'Peças industriais e estruturas',
      badge: 'Potencial',
      badgeColor: 'bg-[#FFEFEF] text-[#FF796C]',
      icon: Cog,
      iconBg: 'bg-[#FFEFEF]',
      iconColor: 'text-[#FF796C]',
      flowExample: 'Corte (laser/serra) ➔ Dobra ➔ Solda ➔ Tratamento/Pintura ➔ Montagem',
      description:
        'Acompanhamento de lotes de peças e subconjuntos que transitam entre postos de trabalho e fornecedores de galvanoplastia ou pintura.'
    },
    {
      id: 'embalagens',
      title: 'Pequenas Indústrias e Embalagens',
      subtitle: 'Transformação e empacotamento',
      badge: 'Potencial',
      badgeColor: 'bg-[#DDF8EC] text-[#123B32]',
      icon: Package,
      iconBg: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      flowExample: 'Preparação ➔ Enchimento/Envase ➔ Rotulagem ➔ Selagem ➔ Encaixotamento',
      description:
        'Controle sequencial da esteira fabril para identificar gargalos e saber o saldo de peças concluídas por operador.'
    },
    {
      id: 'outros',
      title: 'Outras Operações em Etapas',
      subtitle: 'Produção organizada em processos',
      badge: 'Sob Consulta',
      badgeColor: 'bg-[#F4F0E6] text-[#46665D]',
      icon: Layers,
      iconBg: 'bg-[#F4F0E6]',
      iconColor: 'text-[#46665D]',
      flowExample: 'Etapa 1 ➔ Etapa 2 ➔ Etapa 3 ➔ Etapa 4 ➔ Expedição final',
      description:
        'Qualquer operação que precise associar uma ordem a um código com QR Code e registrar quem recebeu ou concluiu a etapa.'
    }
  ];

  const handleCta = () => {
    trackConversionEvent('target_audience_cta');
    onOpenWhatsApp('DUVIDAS_FACCOES');
  };

  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/3 -left-10 w-80 h-80 rounded-full bg-[#FFD84D]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#00C98D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Nome Solicitado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF8EC] text-[#123B32] text-xs font-black">
            <span>MERCADOS & APLICAÇÕES</span>
            <span>🏭</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Para quais operações pode fazer sentido?
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Se a sua empresa produz sob encomenda ou em lotes e precisa acompanhar a passagem de cada ordem entre diferentes etapas ou terceiros, o Linha Têxtil foi desenhado para resolver essa organização.
          </p>
        </div>

        {/* Grade de Segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-7 rounded-[28px] bg-white border-2 border-[#123B32]/10 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#123B32] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#00C98D]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#46665D] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Exemplo de Roteiro */}
                  <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] space-y-1">
                    <span className="text-[10px] font-black uppercase text-[#46665D] block">
                      Exemplo de esteira produtiva:
                    </span>
                    <p className="text-[11px] font-bold text-[#123B32]">
                      {item.flowExample}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0ECE1] flex items-center gap-1.5 text-xs font-black text-[#00C98D]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Compatível com esteiras em etapas</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Box de Transparência sobre Adequação Operacional (Obrigatório conforme item 6) */}
        <div className="mt-12 p-6 sm:p-7 rounded-[32px] bg-[#FFF9E6] border-2 border-[#FFD84D] text-[#123B32] max-w-4xl mx-auto shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#123B32] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm font-bold">
              <p className="font-black text-base text-[#123B32]">
                Nota sobre a adequação para o seu segmento:
              </p>
              <p className="text-[#46665D] leading-relaxed">
                O Linha Têxtil possui uma estrutura flexível de roteiros e prestadores. No entanto, a adequação exata à sua operação dependerá dos tipos de etapas, campos e rotinas que o sistema suporta na versão atual.
              </p>
              <p className="text-[#123B32] font-black pt-1">
                Converse conosco pelo WhatsApp: analisamos o fluxo da sua esteira e confirmamos se o sistema atende às suas necessidades hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Banner de Fechamento com CTA */}
        <div className="mt-8 rounded-[36px] bg-[#123B32] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C98D] text-[#123B32] text-xs font-black">
              <span>AVALIAÇÃO DE FLUXO</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Quer verificar se o Linha Têxtil se encaixa na sua produção?
            </h3>
            <p className="text-sm font-bold text-[#C8E6D9] max-w-xl leading-relaxed">
              Fale diretamente com nossa equipe comercial. Explicamos o funcionamento prático e avaliamos juntos a compatibilidade da sua esteira produtiva.
            </p>
          </div>

          <button
            onClick={handleCta}
            className="px-8 py-4 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] text-sm font-black shadow-lg shadow-[#00C98D]/30 transition-all flex items-center gap-2.5 shrink-0 cursor-pointer hover:-translate-y-0.5 relative z-10"
          >
            <MessageSquare className="w-5 h-5 text-[#123B32]" />
            <span>Verificar no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
