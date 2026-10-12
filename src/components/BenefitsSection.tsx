import React from 'react';
import { Check, ClipboardList, Eye, Database, Search, Calculator, GitFork, Sparkles } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: ClipboardList,
      bg: 'bg-[#DDF8EC]',
      color: 'text-[#00C98D]',
      title: 'Mais organização no acompanhamento das ordens',
      description: 'Fichas centralizadas em um ambiente limpo e acessível, substituindo blocos de papel e anotações dispersas.'
    },
    {
      icon: Eye,
      bg: 'bg-[#FFF9E6]',
      color: 'text-[#123B32]',
      title: 'Melhor visibilidade das etapas produtivas',
      description: 'Saiba em qual estágio cada lote se encontra sem precisar ligar repetidamente para prestadores.'
    },
    {
      icon: Database,
      bg: 'bg-[#F2EDFF]',
      color: 'text-[#7B61FF]',
      title: 'Registro estruturado das movimentações',
      description: 'Histórico auditável de quem entregou, quem recebeu e quando cada transição foi confirmada.'
    },
    {
      icon: Search,
      bg: 'bg-[#FFEFEF]',
      color: 'text-[#FF796C]',
      title: 'Consulta facilitada às informações disponíveis',
      description: 'Localização rápida de qualquer ordem por número de OP ou referência têxtil no computador ou smartphone.'
    },
    {
      icon: Calculator,
      bg: 'bg-[#DDF8EC]',
      color: 'text-[#00C98D]',
      title: 'Melhor acompanhamento das quantidades registradas',
      description: 'Apontamento transparente de peças prontas, faltantes e defeitos em cada etapa, sem surpresas no acerto.'
    },
    {
      icon: GitFork,
      bg: 'bg-[#FFF9E6]',
      color: 'text-[#123B32]',
      title: 'Mais clareza sobre o fluxo entre prestadores',
      description: 'Relação mais transparente e organizada com facções parceiras, lavanderias e oficinas de costura.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-1/3 w-80 h-80 rounded-full bg-[#00C98D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF8EC] text-[#123B32] text-xs font-black">
            <span>BENEFÍCIOS REAIS</span>
            <span>🌱</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Ganhos práticos para o dia a dia da sua operação
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Sem promessas irreais ou estatísticas inventadas. Benefícios que você percebe no primeiro dia no chão de fábrica e na relação com equipes e parceiros.
          </p>
        </div>

        {/* Grade de Benefícios Abertos e Arredondados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-[28px] bg-white border-2 border-[#123B32]/10 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${b.bg} flex items-center justify-center ${b.color} shadow-xs`}>
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#123B32] mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-sm font-bold text-[#46665D] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0ECE1] flex items-center gap-2 text-xs font-black text-[#00C98D]">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Impacto direto na sua rotina</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
