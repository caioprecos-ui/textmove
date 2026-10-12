import React, { useState } from 'react';
import { Layers, QrCode, RefreshCw, BarChart3, ArrowRight, CheckCircle2, Box, Users, ArrowUpRight } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface HowItWorksSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenWhatsApp
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      badgeBg: 'bg-[#FFD84D] text-[#123B32]',
      title: 'Cadastre ou localize uma ordem de produção',
      subtitle: 'Controle de lotes, produtos e referências',
      description:
        'Crie uma nova OP com o botão "+ Nova Ordem" ou pesquise ordens existentes pelo código (ex.: OP-000026), nome do produto (ex.: wide leg) ou referência têxtil.',
      icon: Layers,
      highlight: 'Passo 1 · Gestão de OPs',
      uiMock: {
        screenTitle: 'textmove.com.br/producoes',
        badge: 'Ordens de Produção',
        code: 'OP - 000026',
        product: 'wide leg (Ref: 00 • marmorizada)',
        detail: 'Lote de 300 peças cadastrado no sistema',
        actionLabel: '+ Nova Ordem'
      }
    },
    {
      number: '02',
      badgeBg: 'bg-[#00C98D] text-[#123B32]',
      title: 'Identifique a ordem utilizando o QR Code ou o token manual',
      subtitle: 'Leitura rápida no botão "Escanear OP"',
      description:
        'Cada ordem gerada pode ser identificada rapidamente. O responsável utiliza o recurso de escanear o QR Code pela câmera ou informa o token manual diretamente na interface.',
      icon: QrCode,
      highlight: 'Passo 2 · Identificação Ágil',
      uiMock: {
        screenTitle: 'Escanear OP',
        badge: 'Leitor de QR Code Integrado',
        code: 'Escanear OP',
        product: 'Reconhecimento da ordem em segundos',
        detail: 'Câmera do celular ou digitação do código da OP',
        actionLabel: 'Escanear OP'
      }
    },
    {
      number: '03',
      badgeBg: 'bg-[#B9A5FF] text-[#123B32]',
      title: 'Registre a movimentação na etapa ou com o prestador correspondente',
      subtitle: 'Roteiros de produção com etapas claras',
      description:
        'Conforme o produto avança pelo roteiro configurado (ex.: cortador ➔ costureiro ➔ traveti ➔ lavanderia ➔ acabamento), a movimentação é atribuída ao prestador parceiro responsável.',
      icon: RefreshCw,
      highlight: 'Passo 3 · Roteiro e Prestador',
      uiMock: {
        screenTitle: 'textmove.com.br/fluxos',
        badge: 'Roteiro de Produção: calça jeans',
        code: 'Etapa 3 de 5: traveti',
        product: 'Prestador: galego (Papel: traveti)',
        detail: 'Transição confirmada entre oficinas',
        actionLabel: 'Novo Fluxo'
      }
    },
    {
      number: '04',
      badgeBg: 'bg-[#FF796C] text-white',
      title: 'Consulte o histórico e acompanhe o andamento da produção',
      subtitle: 'Painel operacional com atividades recentes',
      description:
        'Acompanhe no Painel Operacional as ordens ativas, em produção ou concluídas, com registro de atividades recentes (ex.: "OP-000026 recebida por galego") e progresso de peças.',
      icon: BarChart3,
      highlight: 'Passo 4 · Acompanhamento',
      uiMock: {
        screenTitle: 'textmove.com.br/dashboard',
        badge: 'Painel Operacional',
        code: 'Progresso: 300 / 300',
        product: 'OP-000026 recebida por galego',
        detail: 'Visão consolidada da esteira da confecção',
        actionLabel: 'Ver todas'
      }
    }
  ];

  const handleCta = () => {
    trackConversionEvent('how_it_works_cta');
    onOpenWhatsApp('CONHECER_SISTEMA');
  };

  const current = steps[activeStep];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#FFFDF7] relative overflow-hidden">
      
      {/* Elementos orgânicos */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#DDF8EC]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDF8EC] text-[#123B32] text-xs font-black">
            <span>PASSO A PASSO DO SISTEMA</span>
            <span>⚡</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Como funciona a operação no dia a dia
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Uma esteira de controle simples, estruturada nas 4 etapas essenciais de acompanhamento de qualquer produção em lotes:
          </p>
        </div>

        {/* Layout Interativo com os 4 Passos e Visual da Tela Real */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna da Esquerda: Navegação dos 4 Passos (7 colunas) */}
          <div className="lg:col-span-7 space-y-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-[28px] border-2 transition-all cursor-pointer text-left ${
                    isCurrent
                      ? 'bg-white border-[#00C98D] shadow-lg ring-2 ring-[#00C98D]/20 scale-[1.01]'
                      : 'bg-white/80 border-[#123B32]/10 hover:border-[#123B32]/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-black px-3 py-1 rounded-full shrink-0 ${step.badgeBg}`}>
                      {step.number}
                    </span>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-[#123B32] leading-snug">
                          {step.title}
                        </h3>
                        {isCurrent && (
                          <span className="hidden sm:inline-block text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#DDF8EC] text-[#123B32]">
                            Etapa ativa
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-bold text-[#00C98D]">
                        {step.subtitle}
                      </p>

                      <p className="text-sm font-bold text-[#46665D] pt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coluna da Direita: Card com Demonstração da Tela Real Correspondente (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="rounded-[36px] bg-white border-4 border-[#123B32]/10 p-6 sm:p-7 shadow-2xl space-y-4">
              
              {/* Barra Superior da Janela Real */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#F0ECE1]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs">
                    LT
                  </div>
                  <span className="text-xs font-mono font-bold text-[#46665D]">
                    {current.uiMock.screenTitle}
                  </span>
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#DDF8EC] text-[#123B32]">
                  {current.highlight}
                </span>
              </div>

              {/* Box Demonstrativo Fiel às Capturas */}
              <div className="p-5 rounded-[24px] bg-[#FFFDF7] border-2 border-[#EAE3D2] space-y-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-[#123B32]">
                    {current.uiMock.badge}
                  </h4>
                  <span className="px-2.5 py-1 rounded-lg bg-black text-white text-[10px] font-black">
                    {current.uiMock.actionLabel}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE3D2] space-y-1">
                  <p className="font-mono font-black text-sm text-[#123B32]">
                    {current.uiMock.code}
                  </p>
                  <p className="text-xs font-bold text-[#123B32]">
                    {current.uiMock.product}
                  </p>
                  <p className="text-[11px] font-bold text-[#46665D]">
                    {current.uiMock.detail}
                  </p>
                </div>

                {/* Exibição específica conforme o passo */}
                {activeStep === 0 && (
                  <div className="p-3 rounded-xl bg-[#DDF8EC] text-[11px] font-bold text-[#123B32] space-y-1">
                    <p className="font-black">Filtros da tela de OPs:</p>
                    <p>• Buscar por código, produto ou referência</p>
                    <p>• Filtro por status (Aguardando, Finalizada, etc.)</p>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="p-3 rounded-xl bg-[#FFF9E6] text-[11px] font-bold text-[#123B32] space-y-1">
                    <p className="font-black">Recursos de leitura:</p>
                    <p>• Leitura instantânea com a câmera do smartphone</p>
                    <p>• Entrada manual para quem estiver no computador</p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="p-3 rounded-xl bg-[#F2EDFF] text-[11px] font-bold text-[#123B32] space-y-1">
                    <p className="font-black">Roteiro real (calça jeans):</p>
                    <p className="text-[10px]">1. cortador ➔ 2. costureiro ➔ 3. traveti ➔ 4. lavanderia ➔ 5. acabamento</p>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="p-3 rounded-xl bg-[#DDF8EC] text-[11px] font-bold text-[#123B32] space-y-1">
                    <p className="font-black">Histórico auditável:</p>
                    <p>Registro automático de data, horário e prestador que recebeu a ordem.</p>
                  </div>
                )}
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-bold text-[#46665D]">
                  Operação fluida testada no chão de fábrica e na entrega.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Banner de Chamada em Fundo Verde Claro */}
        <div className="mt-14 p-7 sm:p-9 rounded-[32px] bg-[#DDF8EC] border-2 border-[#00C98D]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-xl font-black text-[#123B32]">
              Quer ver como o fluxo se adapta às etapas da sua produção?
            </h4>
            <p className="text-sm font-bold text-[#3A5950]">
              Confecção, marcenaria, comunicação visual, metalurgia ou pequenas indústrias: nossa equipe explica no WhatsApp como configurar seus roteiros.
            </p>
          </div>
          <button
            onClick={handleCta}
            className="px-7 py-4 rounded-full bg-[#123B32] hover:bg-[#0C2620] text-white text-sm font-black transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            <span>Tirar dúvidas no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#00C98D]" />
          </button>
        </div>

      </div>
    </section>
  );
};
