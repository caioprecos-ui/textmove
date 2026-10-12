import React, { useState } from 'react';
import { QrCode, Smartphone, UserCheck, CheckCircle2, History, ArrowRight, KeyRound, Sparkles } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface QRCodeFlowSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const QRCodeFlowSection: React.FC<QRCodeFlowSectionProps> = ({
  onOpenWhatsApp
}) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      number: '1',
      title: 'A ordem de produção ganha identificação',
      subtitle: 'Etiqueta com QR Code e token manual',
      badgeColor: 'bg-[#FFD84D] text-[#123B32]',
      description:
        'Ao lançar uma nova ordem de produção (OP), o Linha Têxtil gera automaticamente o QR Code e um token alfanumérico curto (ex.: LT-8420). A etiqueta acompanha o lote desde a primeira etapa.',
      icon: QrCode,
      screenContent: {
        badge: 'PASSO 1 · IDENTIFICAÇÃO',
        title: 'Ficha da Ordem #1048',
        meta: 'Vestido Canelado Manga Longa · 850 Peças',
        visualType: 'tag'
      }
    },
    {
      number: '2',
      title: 'O responsável lê o QR Code no celular',
      subtitle: 'Sem baixar aplicativos pesados',
      badgeColor: 'bg-[#00C98D] text-[#123B32]',
      description:
        'Quem recebe ou finaliza o lote aponta a câmera do celular para o QR Code. Quem preferir ou estiver sem câmera pode simplesmente digitar o token manual de 6 dígitos na tela.',
      icon: Smartphone,
      screenContent: {
        badge: 'PASSO 2 · LEITURA ÁGIL',
        title: 'Câmera do Celular em Ação',
        meta: 'Reconhecimento instantâneo na ponta do processo',
        visualType: 'scanner'
      }
    },
    {
      number: '3',
      title: 'O prestador ou posto é identificado',
      subtitle: 'Etapa interna ou parceiro externo',
      badgeColor: 'bg-[#B9A5FF] text-[#123B32]',
      description:
        'O sistema confirma quem é o responsável pela etapa (ex.: oficina parceira, posto de montagem ou acabamento), registrando a transição sem desencontros.',
      icon: UserCheck,
      screenContent: {
        badge: 'PASSO 3 · RESPONSÁVEL',
        title: 'Facção Ramos Costuras',
        meta: 'Operação: Costura Overloque e Reta',
        visualType: 'provider'
      }
    },
    {
      number: '4',
      title: 'A movimentação é confirmada com quantidades',
      subtitle: 'Apontamento de prontas, faltas e defeitos',
      badgeColor: 'bg-[#FF796C] text-white',
      description:
        'O operador confere as quantidades: total entregue, eventuais faltas e peças separadas com avarias. A movimentação é salva na mesma hora.',
      icon: CheckCircle2,
      screenContent: {
        badge: 'PASSO 4 · CONFERÊNCIA',
        title: 'Balanço das Peças',
        meta: 'Concluídas: 840 · Faltantes: 7 · Defeitos: 3',
        visualType: 'counts'
      }
    },
    {
      number: '5',
      title: 'O gestor visualiza tudo no painel',
      subtitle: 'Rastreabilidade em tempo real',
      badgeColor: 'bg-[#00C98D] text-[#123B32]',
      description:
        'No computador ou celular, o gestor enxerga imediatamente onde o lote está, quem fez o registro e o saldo exato de peças, sem depender de telefonemas.',
      icon: History,
      screenContent: {
        badge: 'PASSO 5 · HISTÓRICO VIVO',
        title: 'Linha do Tempo Atualizada',
        meta: 'Registrado em 12/10 às 14:15 pelo Encarregado',
        visualType: 'history'
      }
    }
  ];

  const handleCtaClick = () => {
    trackConversionEvent('qr_code_section_cta');
    onOpenWhatsApp('CONHECER_QR_CODE');
  };

  const current = steps[selectedStep];

  return (
    <section id="qrcode" className="py-20 md:py-28 bg-[#123B32] text-white relative overflow-hidden">
      
      {/* Círculos e formas vibrantes de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#00C98D]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#FFD84D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho de Alto Contraste */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C98D] text-[#123B32] text-xs font-black shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>O DIFERENCIAL DO QR CODE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Acompanhe suas ordens com um fluxo de movimentação mais organizado.
          </h2>

          <p className="text-[#C8E6D9] text-base sm:text-lg font-bold leading-relaxed">
            Sem equipamentos caros nem coletores industriais complexos. Uma rotina leve usando a câmera do celular para identificar ordens e registrar cada etapa operacional.
          </p>
        </div>

        {/* Layout do Fluxo: Passos na esquerda e Smartphone na direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Navegação dos Passos (7 colunas) */}
          <div className="lg:col-span-7 space-y-3">
            {steps.map((step, idx) => {
              const isCurrent = selectedStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-5 rounded-[24px] transition-all cursor-pointer text-left border-2 ${
                    isCurrent
                      ? 'bg-white text-[#123B32] border-[#00C98D] shadow-xl scale-[1.01]'
                      : 'bg-[#18463C] text-white border-transparent hover:border-[#00C98D]/50 hover:bg-[#1E5246]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition-colors shadow-xs ${
                        isCurrent
                          ? 'bg-[#00C98D] text-[#123B32]'
                          : 'bg-[#123B32] text-[#00C98D]'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base sm:text-lg font-black ${isCurrent ? 'text-[#123B32]' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        {isCurrent && (
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${step.badgeColor}`}>
                            Passo {step.number} de 5
                          </span>
                        )}
                      </div>

                      <p className={`text-xs font-bold ${isCurrent ? 'text-[#00C98D]' : 'text-[#A0D4C5]'}`}>
                        {step.subtitle}
                      </p>

                      {isCurrent && (
                        <p className="text-xs sm:text-sm font-bold text-[#46665D] pt-2 leading-relaxed animate-fade-in">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Smartphone com Visual Arredondado Amigável (5 colunas) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-[40px] border-8 border-[#0C2620] bg-white p-5 shadow-2xl text-[#123B32]">
              
              {/* Entalhe do Smartphone */}
              <div className="w-24 h-4 bg-[#0C2620] rounded-full mx-auto mb-4" />

              {/* Tela do Aplicativo Linha Têxtil */}
              <div className="rounded-[28px] bg-[#FFFDF7] border-2 border-[#EAE3D2] p-5 space-y-4">
                
                {/* Header do App Móvel */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE1]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-[#00C98D] flex items-center justify-center text-[#123B32] font-black text-xs">
                      LT
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#123B32] block">Linha Têxtil Móvel</span>
                      <span className="text-[10px] font-bold text-[#46665D]">Modo Apontamento</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-black px-2 py-0.5 rounded-lg bg-[#DDF8EC] text-[#123B32]">
                    OP #1048
                  </span>
                </div>

                {/* Conteúdo Dinâmico da Etapa Ativa */}
                <div className="p-4 rounded-2xl bg-white border border-[#EAE3D2] space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#123B32] border border-[#FFD84D]">
                      {current.screenContent.badge}
                    </span>
                    <span className="text-[10px] font-bold text-[#46665D]">Ao vivo</span>
                  </div>
                  
                  <h4 className="text-base font-black text-[#123B32] leading-tight">
                    {current.screenContent.title}
                  </h4>
                  
                  <p className="text-xs font-bold text-[#46665D]">
                    {current.screenContent.meta}
                  </p>

                  {/* Variações Visuais de Acordo com o Passo */}
                  {current.screenContent.visualType === 'tag' && (
                    <div className="pt-2 flex flex-col items-center justify-center p-4 bg-[#FFFDF7] rounded-2xl border-2 border-dashed border-[#00C98D]/40 space-y-2">
                      <div className="w-24 h-24 bg-white p-2 rounded-2xl flex items-center justify-center shadow-sm border border-[#EAE3D2]">
                        <QrCode className="w-full h-full text-[#123B32]" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-black text-[#123B32] bg-[#FFD84D] px-3 py-1 rounded-full">
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>Token: LT-8420</span>
                      </div>
                    </div>
                  )}

                  {current.screenContent.visualType === 'scanner' && (
                    <div className="h-32 rounded-2xl bg-[#123B32] p-3 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="w-20 h-20 border-2 border-dashed border-[#00C98D] rounded-xl flex items-center justify-center relative">
                        <div className="absolute w-full h-0.5 bg-[#00C98D] animate-pulse" />
                        <QrCode className="w-10 h-10 text-[#00C98D]/70" />
                      </div>
                      <p className="text-[10px] font-bold text-[#C8E6D9] mt-2">Aponte para a etiqueta do lote</p>
                    </div>
                  )}

                  {current.screenContent.visualType === 'provider' && (
                    <div className="p-3 bg-[#DDF8EC] rounded-2xl border border-[#00C98D]/30 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="font-bold text-[#46665D]">Oficina Parceira:</span>
                        <span className="font-black text-[#123B32]">Claudio Ramos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-[#46665D]">Operação:</span>
                        <span className="font-black text-[#123B32]">Costura Externa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-bold text-[#46665D]">Prazo Estimado:</span>
                        <span className="font-black text-[#123B32]">3 dias úteis</span>
                      </div>
                    </div>
                  )}

                  {current.screenContent.visualType === 'counts' && (
                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="flex justify-between items-center p-2 rounded-xl bg-[#DDF8EC]">
                        <span className="font-bold text-[#123B32]">Peças Concluídas:</span>
                        <span className="font-mono font-black text-[#123B32]">840 un</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-xl bg-[#FFF9E6]">
                        <span className="font-bold text-[#123B32]">Defeitos de Costura:</span>
                        <span className="font-mono font-black text-[#123B32]">3 un</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-xl bg-[#FFEFEF]">
                        <span className="font-bold text-[#123B32]">Faltantes no Retorno:</span>
                        <span className="font-mono font-black text-[#123B32]">7 un</span>
                      </div>
                    </div>
                  )}

                  {current.screenContent.visualType === 'history' && (
                    <div className="p-3 rounded-2xl bg-[#DDF8EC] border border-[#00C98D]/30 space-y-1 text-xs">
                      <div className="flex justify-between text-[10px] font-bold text-[#46665D]">
                        <span>Hoje às 14:15</span>
                        <span className="text-[#00C98D] font-black">Confirmado ✓</span>
                      </div>
                      <p className="font-black text-[#123B32]">Entrada em Acabamento</p>
                      <p className="text-[11px] font-bold text-[#46665D]">Facção Ramos ➔ Confecção Galpão</p>
                    </div>
                  )}

                </div>

                <div className="pt-2 text-center">
                  <p className="text-[11px] font-bold text-[#46665D]">
                    Confirmação simples com 1 toque no celular.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA em Cápsula Amarela/Verde */}
            <div className="mt-8 text-center">
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black text-sm shadow-lg shadow-[#00C98D]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Tirar dúvidas sobre a rotina de QR Code no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
