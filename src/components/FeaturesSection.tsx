import React from 'react';
import { Package, Users, Search, QrCode, GitMerge, CheckSquare, History, AlertOctagon, LayoutDashboard, Smartphone, Sparkles, Activity } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const verifiedFeatures = [
    {
      icon: Search,
      iconBg: 'bg-[#F2EDFF]',
      iconColor: 'text-[#7B61FF]',
      title: 'Ordens de Produção com QR Code e Token Manual',
      description: 'Geração ágil de OPs com código exclusivo (ex.: OP-000026), identificação por QR Code e token manual para escanear na câmera.',
      isHighlighted: true,
      badge: 'Identificação Ágil'
    },
    {
      icon: GitMerge,
      iconBg: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      title: 'Movimentação Sequencial Entre Etapas',
      description: 'Roteiros configuráveis com o passo a passo exato do seu processo produtivo, direcionando o lote de uma etapa à próxima sem gargalos.',
      isHighlighted: true,
      badge: 'Roteiros de Produção'
    },
    {
      icon: Users,
      iconBg: 'bg-[#FFF9E6]',
      iconColor: 'text-[#123B32]',
      title: 'Produtos e Prestadores de Serviços',
      description: 'Cadastro centralizado de produtos, referências, variantes e prestadores de serviços externos ou postos internos com funções e contatos.',
      isHighlighted: true,
      badge: 'Prestadores & Itens'
    },
    {
      icon: CheckSquare,
      iconBg: 'bg-[#DDF8EC]',
      iconColor: 'text-[#00C98D]',
      title: 'Registro de Peças Concluídas e Faltantes',
      description: 'Apontamento transparente do saldo de peças em cada transição, evitando desencontros no recebimento e desvios de quantidades.',
      isHighlighted: false,
      badge: 'Controle de Saldo'
    },
    {
      icon: AlertOctagon,
      iconBg: 'bg-[#FFEFEF]',
      iconColor: 'text-[#FF796C]',
      title: 'Registro de Problemas de Qualidade e Defeitos',
      description: 'Controle preventivo de peças com avarias ou defeitos por etapa, identificando retrabalhos antes da entrega final.',
      isHighlighted: false,
      badge: 'Controle de Qualidade'
    },
    {
      icon: History,
      iconBg: 'bg-[#F2EDFF]',
      iconColor: 'text-[#7B61FF]',
      title: 'Histórico Completo de Movimentações',
      description: 'Registro auditável com data, hora exata e prestador/operador responsável por cada recebimento ou entrega de lote.',
      isHighlighted: false,
      badge: 'Rastreabilidade Viva'
    },
    {
      icon: LayoutDashboard,
      iconBg: 'bg-[#FFF9E6]',
      iconColor: 'text-[#123B32]',
      title: 'Painel de Gestão em Tempo Real',
      description: 'Visão consolidada de ordens ativas, em produção, concluídas e paradas, com distribuição do volume por etapa da esteira.',
      isHighlighted: false,
      badge: 'Painel Operacional'
    },
    {
      icon: Smartphone,
      iconBg: 'bg-[#00C98D]',
      iconColor: 'text-[#123B32]',
      title: 'Telas Adaptadas para Celular',
      description: 'Navegação rápida sem necessidade de baixar apps pesados, direto pelo navegador do celular no chão de fábrica e nas oficinas.',
      isHighlighted: true,
      badge: '100% Mobile'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-[#F8F5EC] relative overflow-hidden">
      
      {/* Círculo decorativo */}
      <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-[#B9A5FF]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD84D] text-[#123B32] text-xs font-black">
            <span>RECURSOS REAIS DO SISTEMA</span>
            <span>✨</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Recursos reais para manter cada etapa sob controle
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Sem burocracia nem módulos contábeis desnecessários. Recursos objetivos para organizar produtos, ordens, prestadores e movimentações de ponta a ponta.
          </p>
        </div>

        {/* Grade Editorial com Formas Arredondadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-[28px] border-2 transition-all flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 ${
                  feat.isHighlighted
                    ? 'bg-white border-[#00C98D]/40 ring-2 ring-[#00C98D]/20'
                    : 'bg-white border-[#123B32]/10 hover:border-[#123B32]/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center ${feat.iconColor} shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#F4F0E6] text-[#123B32]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#123B32] mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-[#46665D] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota de transparência */}
        <div className="mt-12 p-6 rounded-[28px] bg-white border-2 border-[#123B32]/10 text-center shadow-xs max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[#123B32]">
            🎯 <strong>Estrutura flexível para processos em etapas:</strong> Telas comprovadas em esteiras reais de produção, com suporte a produtos, variantes, rotas e apontamentos práticos por QR Code.
          </p>
        </div>

      </div>
    </section>
  );
};
