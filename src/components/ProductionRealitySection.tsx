import React from 'react';
import { Search, FileText, Share2, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductionRealitySectionProps {
  onLearnSolution: () => void;
}

export const ProductionRealitySection: React.FC<ProductionRealitySectionProps> = ({
  onLearnSolution
}) => {
  const commonChallenges = [
    {
      icon: Search,
      bgIcon: 'bg-[#FFF9E6]',
      iconColor: 'text-[#123B32]',
      tag: 'Localização de Ordens',
      tagBg: 'bg-[#FFF9E6] text-[#123B32]',
      title: 'Dificuldade para localizar uma ordem de produção',
      description:
        'Saber se um lote ou pedido está no corte, na usinagem, na montagem, com prestador externo ou no acabamento costuma exigir telefonemas, checagens no WhatsApp e idas até a fábrica.',
      realSolution: 'No Linha Têxtil: Pesquisa direta por código da OP (ex.: OP-000026), produto ou referência com status centralizado.'
    },
    {
      icon: FileText,
      bgIcon: 'bg-[#FFEFEF]',
      iconColor: 'text-[#FF796C]',
      tag: 'Controle Físico Disperso',
      tagBg: 'bg-[#FFEFEF] text-[#123B32]',
      title: 'Dependência de fichas de papel para acompanhar movimentações',
      description:
        'Ordens de serviço impressas, cadernos e fichas físicas rasgam, sujam com facilidade ou se perdem durante o fluxo na oficina ou no transporte para terceiros.',
      realSolution: 'No Linha Têxtil: Identificação por QR Code e token manual direto no celular ou computador, sem risco de perda do histórico.'
    },
    {
      icon: Share2,
      bgIcon: 'bg-[#F2EDFF]',
      iconColor: 'text-[#7B61FF]',
      tag: 'Gargalos Entre Etapas',
      tagBg: 'bg-[#F2EDFF] text-[#123B32]',
      title: 'Falta de visibilidade sobre em qual etapa uma ordem se encontra',
      description:
        'Sem um roteiro estruturado, é difícil saber onde a produção travou, quem está com o lote no momento e se o prazo de entrega será cumprido.',
      realSolution: 'No Linha Têxtil: Roteiro de produção configurável com sequência ordenada de etapas produtivas para cada produto.'
    },
    {
      icon: Users,
      bgIcon: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      tag: 'Prestadores & Oficinas',
      tagBg: 'bg-[#DDF8EC] text-[#123B32]',
      title: 'Falta de organização no acompanhamento de prestadores',
      description:
        'Acompanhar serviços terceirizados sem registrar a passagem de responsabilidade gera desencontros no recebimento e dúvidas sobre quem executou cada etapa.',
      realSolution: 'No Linha Têxtil: Gestão de prestadores vinculando código, papel na esteira e registro auditável do recebimento.'
    }
  ];

  return (
    <section id="realidade" className="py-20 md:py-28 bg-[#F8F5EC] relative overflow-hidden">
      
      {/* Elementos orgânicos de fundo */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#FFD84D]/15 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#00C98D]/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Descontraído e Claro */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD84D] text-[#123B32] text-xs font-black">
            <span>A REALIDADE DO CHÃO DE FÁBRICA</span>
            <span>👀</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Problemas comuns a operações que produzem em etapas
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Seja em confecções, marcenarias, gráficas, metalúrgicas ou pequenas indústrias, estes são os gargalos mais frequentes de quem gerencia ordens sem um sistema prático:
          </p>
        </div>

        {/* Grade com os 4 Problemas Identificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {commonChallenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[28px] bg-white border-2 border-[#123B32]/10 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${item.bgIcon} flex items-center justify-center ${item.iconColor} shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className={`text-[11px] font-black px-3 py-1 rounded-full ${item.tagBg}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#123B32] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm font-bold text-[#46665D] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex items-start gap-2 text-xs font-bold text-[#123B32]">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D] shrink-0 mt-0.5" />
                  <span>{item.realSolution}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card de Transição com Fundo Vibrante Verde Escuro */}
        <div className="mt-8 rounded-[32px] bg-[#123B32] text-white p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C98D] text-[#123B32] text-xs font-black">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORGANIZAÇÃO REAL</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Praticidade sem complicar a rotina da sua equipe.
            </h3>
            <p className="text-sm font-bold text-[#C8E6D9] max-w-xl">
              O Linha Têxtil foi desenhado para quem precisa de agilidade no chão de fábrica: direto ao ponto, com telas simples e leitura ágil por QR Code em qualquer smartphone.
            </p>
          </div>

          <button
            onClick={onLearnSolution}
            className="px-8 py-4 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] text-sm font-black transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <span>Ver como o sistema funciona</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
