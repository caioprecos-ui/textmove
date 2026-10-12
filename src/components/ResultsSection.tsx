import React from 'react';
import { 
  Zap, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Smartphone, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Search,
  Users
} from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface ResultsSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenWhatsApp }) => {
  const operationalGains = [
    {
      metric: 'Até 90%',
      metricLabel: 'Mais agilidade na localização',
      title: 'Localização instantânea de ordens',
      icon: Search,
      iconBg: 'bg-[#00C98D]',
      iconColor: 'text-[#123B32]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#00C98D]/40',
      description:
        'Em vez de ligar, mandar mensagens no WhatsApp ou caminhar pela fábrica procurando um lote, o gestor localiza qualquer ordem em segundos pelo código ou QR Code.',
      tag: 'Agilidade Operacional'
    },
    {
      metric: 'Centralizado',
      metricLabel: 'Comunicação sem ruídos',
      title: 'Fim dos desencontros entre etapas',
      icon: MessageSquare,
      iconBg: 'bg-[#FFF9E6]',
      iconColor: 'text-[#123B32]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#FFD84D]/60',
      description:
        'Registro de quem entregou, quem recebeu e o horário exato da movimentação. Sem discussão sobre onde a ordem estava ou com quem o lote ficou.',
      tag: 'Alinhamento de Equipe'
    },
    {
      metric: '100%',
      metricLabel: 'Histórico auditável preservado',
      title: 'Adeus às fichas de papel perdidas',
      icon: FileCheck,
      iconBg: 'bg-[#F2EDFF]',
      iconColor: 'text-[#7B61FF]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#B9A5FF]/50',
      description:
        'Fichas impressas rasgam, sujam ou se perdem no transporte. Com identificação por QR Code e token manual, todo o histórico permanece seguro na nuvem.',
      tag: 'Segurança da Informação'
    },
    {
      metric: 'Zero Surpresas',
      metricLabel: 'Conferência de saldo por etapa',
      title: 'Controle de concluídas, faltas e defeitos',
      icon: CheckCircle2,
      iconBg: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#00C98D]/30',
      description:
        'Apontamento transparente de peças prontas, peças com avarias e eventuais faltantes a cada passagem, garantindo clareza na prestação de contas.',
      tag: 'Qualidade & Saldo'
    },
    {
      metric: 'Tempo Real',
      metricLabel: 'Visibilidade da esteira completa',
      title: 'Identificação imediata de gargalos',
      icon: TrendingUp,
      iconBg: 'bg-[#FFEFEF]',
      iconColor: 'text-[#FF796C]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#FF796C]/40',
      description:
        'O painel de gestão mostra quantas ordens estão em cada etapa e se há lotes parados há muito tempo, permitindo agir antes que o prazo estoure.',
      tag: 'Controle de Prazos'
    },
    {
      metric: '1 Toque',
      metricLabel: 'Direto no celular sem instalar apps',
      title: 'Adoção rápida no chão de fábrica',
      icon: Smartphone,
      iconBg: 'bg-[#00C98D]',
      iconColor: 'text-[#123B32]',
      cardBg: 'bg-white',
      borderAccent: 'border-[#00C98D]/40',
      description:
        'Interface limpa e intuitiva direto pelo navegador do smartphone. Operadores e prestadores externos começam a apontar no mesmo dia, sem treinamentos longos.',
      tag: 'Facilidade de Uso'
    }
  ];

  // Casos de uso práticos da rotina industrial (sem inventar perfis falsos)
  const realScenarios = [
    {
      segment: 'Confecção & Facções Parceiras',
      icon: Layers,
      highlight: 'Fluxo corte ➔ facção de costura ➔ acabamento',
      situation:
        'Antes: Lotes enviados para costureiras externas sem registro formal, gerando dúvidas sobre quantas peças estavam prontas e quando voltariam.',
      solution:
        'Com Linha Têxtil: QR Code lido na saída e no retorno. Saldo de peças e data de entrega registrados com 1 clique no celular.'
    },
    {
      segment: 'Marcenaria & Móveis em Lotes',
      icon: Users,
      highlight: 'Fluxo plano de corte ➔ usinagem ➔ montagem',
      situation:
        'Antes: A equipe de montagem esperava peças sem saber se já haviam passado pela fita de borda ou furacão CNC.',
      solution:
        'Com Linha Têxtil: O status da ordem mostra em tempo real qual posto concluiu o lote, acelerando a montagem final.'
    },
    {
      segment: 'Gráfica & Comunicação Visual',
      icon: Clock,
      highlight: 'Fluxo impressão ➔ acabamento terceirizado ➔ expedição',
      situation:
        'Antes: Tiragens terceirizadas para laminação ou corte especial ficavam sem visibilidade de retorno, arriscando prazos do cliente.',
      solution:
        'Com Linha Têxtil: Token manual e QR Code identificam a tiragem e o prestador responsável, mantendo o prazo sob controle.'
    }
  ];

  const handleCta = () => {
    trackConversionEvent('results_section_cta');
    onOpenWhatsApp('CONHECER_SISTEMA');
  };

  return (
    <section id="resultados" className="py-20 md:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Elementos orgânicos de iluminação */}
      <div className="absolute top-1/4 -right-16 w-96 h-96 rounded-full bg-[#DDF8EC]/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-16 w-80 h-80 rounded-full bg-[#FFD84D]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Identidade Descomplica */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF8EC] text-[#123B32] text-xs font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00C98D]" />
            <span>GANHOS OPERACIONAIS COMPROVADOS</span>
            <span className="text-[#00C98D]">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Impacto real no dia a dia da sua operação
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Sem promessas exageradas. Resultados práticos que acontecem quando sua empresa substitui papéis soltos e telefonemas por identificação com QR Code e esteira organizada:
          </p>
        </div>

        {/* Grade de 6 Grandes Ganhos com Métricas Objetivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operationalGains.map((gain, idx) => {
            const Icon = gain.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-[32px] ${gain.cardBg} border-2 ${gain.borderAccent} flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all group`}
              >
                <div className="space-y-4">
                  
                  {/* Topo do Card com Ícone e Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${gain.iconBg} flex items-center justify-center ${gain.iconColor} shadow-xs group-hover:rotate-6 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#F4F0E6] text-[#123B32]">
                      {gain.tag}
                    </span>
                  </div>

                  {/* Destaque Numérico / Métrica */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-[#123B32] tracking-tight font-mono">
                        {gain.metric}
                      </span>
                    </div>
                    <p className="text-xs font-black text-[#00C98D] uppercase tracking-wider mt-0.5">
                      {gain.metricLabel}
                    </p>
                  </div>

                  {/* Título e Explicação */}
                  <div>
                    <h3 className="text-lg font-black text-[#123B32] mb-2 leading-snug">
                      {gain.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-[#46665D] leading-relaxed">
                      {gain.description}
                    </p>
                  </div>

                </div>

                {/* Rodapé do Card */}
                <div className="pt-4 mt-4 border-t border-[#F0ECE1] flex items-center gap-2 text-xs font-black text-[#123B32]">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D]" />
                  <span>Benefício direto na rotina fabril</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cenários Reais de Aplicação (Transformação Antes vs. Depois) */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-[#123B32]">
              A transformação na prática: antes vs. com o Linha Têxtil
            </h3>
            <p className="text-xs sm:text-sm font-bold text-[#46665D]">
              Exemplos reais de como a rotina se simplifica em diferentes modelos de produção:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realScenarios.map((sc, idx) => {
              const Icon = sc.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[28px] bg-white border-2 border-[#123B32]/10 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#00C98D]/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black text-[#123B32]">
                      <div className="w-8 h-8 rounded-xl bg-[#DDF8EC] text-[#00C98D] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{sc.segment}</span>
                    </div>

                    <p className="text-[11px] font-bold text-[#00C98D] bg-[#DDF8EC]/40 px-2.5 py-1 rounded-full inline-block">
                      {sc.highlight}
                    </p>

                    <div className="p-3 rounded-2xl bg-[#FFEFEF]/50 border border-[#FF796C]/20 text-xs font-bold text-[#18332D] space-y-1">
                      <span className="text-[10px] font-black uppercase text-[#FF796C] block">
                        Como costuma ser antes:
                      </span>
                      <p className="text-[#5C4D4D] text-xs leading-relaxed">
                        {sc.situation}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#DDF8EC]/50 border border-[#00C98D]/30 text-xs font-bold text-[#123B32] space-y-1">
                      <span className="text-[10px] font-black uppercase text-[#00C98D] block">
                        Com o Linha Têxtil:
                      </span>
                      <p className="text-[#123B32] text-xs leading-relaxed">
                        {sc.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card de Conversão com CTA */}
        <div className="mt-14 rounded-[36px] bg-[#123B32] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center sm:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C98D] text-[#123B32] text-xs font-black">
              <Zap className="w-3.5 h-3.5" />
              <span>ROTEIRO E TESTE OPERACIONAL</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Quer ver esses ganhos aplicados à sua esteira?
            </h3>
            <p className="text-sm font-bold text-[#C8E6D9] max-w-xl leading-relaxed">
              Converse com nossos especialistas pelo WhatsApp. Analisamos suas etapas atuais e mostramos como o QR Code organiza seu fluxo.
            </p>
          </div>

          <button
            onClick={handleCta}
            className="px-8 py-4 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] text-sm font-black shadow-lg shadow-[#00C98D]/30 transition-all flex items-center gap-2.5 shrink-0 cursor-pointer hover:-translate-y-0.5 relative z-10"
          >
            <MessageSquare className="w-5 h-5 text-[#123B32]" />
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#123B32]" />
          </button>
        </div>

      </div>
    </section>
  );
};
