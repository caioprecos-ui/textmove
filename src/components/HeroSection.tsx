import React, { useState } from 'react';
import { MessageSquare, QrCode, ArrowUpRight, Check, Sparkles, Smartphone, Layers, ChevronRight, Activity, Box, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface HeroSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
  onScrollToQrCode: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
  onScrollToQrCode
}) => {
  const [activeTab, setActiveTab] = useState<'painel' | 'op'>('painel');

  const handlePrimaryCta = () => {
    trackConversionEvent('hero_primary_cta_click');
    onOpenWhatsApp('CONHECER_SISTEMA');
  };

  const handleSecondaryCta = () => {
    trackConversionEvent('hero_secondary_cta_click');
    onScrollToQrCode();
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#FFFDF7]">
      
      {/* Formas orgânicas e energéticas ao fundo */}
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#DDF8EC]/70 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#FFD84D]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 right-1/4 w-72 h-72 rounded-full bg-[#B9A5FF]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Conteúdo (6 colunas) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tag em formato de cápsula com personalidade */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DDF8EC] border border-[#00C98D]/30 text-[#123B32] text-xs font-black shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C98D] animate-ping" />
              <span>ORGANIZAÇÃO E RASTREABILIDADE DE ORDENS</span>
              <span className="text-[#00C98D]">✦</span>
            </div>

            {/* Título com destaque visual orgânico vibrante */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#123B32] tracking-tight leading-[1.12]">
              Sua produção{' '}
              <span className="relative inline-block text-[#123B32]">
                <span className="relative z-10">em movimento.</span>
                <span className="absolute bottom-1.5 left-0 w-full h-4 bg-[#FFD84D] -rotate-1 rounded-sm -z-0 opacity-80" />
              </span>{' '}
              Cada etapa sob controle.
            </h1>

            {/* Subtítulo leve e confortável */}
            <p className="text-lg sm:text-xl text-[#3A5950] font-bold leading-relaxed max-w-xl">
              Organize ordens de produção, registre movimentações por QR Code e acompanhe o fluxo de trabalho da sua empresa em um só lugar.
            </p>

            {/* Botões em Cápsula */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handlePrimaryCta}
                className="px-8 py-4 rounded-full bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black text-base shadow-lg shadow-[#00C98D]/35 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Quero conhecer o sistema</span>
                <ArrowUpRight className="w-5 h-5 text-[#123B32] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button
                onClick={handleSecondaryCta}
                className="px-6 py-4 rounded-full bg-white hover:bg-[#DDF8EC]/40 border-2 border-[#123B32]/15 text-[#123B32] font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:border-[#00C98D]"
              >
                <QrCode className="w-4 h-4 text-[#00C98D]" />
                <span>Ver como funciona</span>
              </button>
            </div>

            {/* Micro-benefícios com ícones amigáveis */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-[#3A5950]">
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#EAE3D2]">
                <span className="w-2 h-2 rounded-full bg-[#00C98D]" />
                <span>QR Code + Token manual</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#EAE3D2]">
                <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
                <span>Funciona direto no celular</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#EAE3D2]">
                <span className="w-2 h-2 rounded-full bg-[#FF796C]" />
                <span>Sem complicação de ERP</span>
              </div>
            </div>

          </div>

          {/* Composição Visual com Interface Real do Sistema (6 colunas) */}
          <div className="lg:col-span-6 relative">
            
            {/* Elemento de blob decorativo colorido */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#DDF8EC] via-[#FFD84D]/20 to-[#B9A5FF]/30 rounded-[40px] -rotate-2 -z-10" />

            {/* Janela de Software Real com Layout Fiel do Linha Têxtil */}
            <div className="relative bg-white rounded-[32px] p-5 sm:p-6 shadow-2xl shadow-[#123B32]/15 border-2 border-[#123B32]/10 space-y-4">
              
              {/* Barra Superior do Sistema com Marca Oficial */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#F0ECE1]">
                <div className="flex items-center gap-2.5">
                  {/* Logotipo Oficial Idêntico à Captura de Tela */}
                  <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-black text-xs tracking-tighter">
                    LT
                  </div>
                  <div>
                    <span className="text-sm font-black text-[#123B32] block leading-tight">Linha Têxtil</span>
                    <span className="text-[10px] font-bold text-[#46665D]">Interface Real do Sistema</span>
                  </div>
                </div>

                {/* Seletor de visualização rápida */}
                <div className="flex items-center gap-1.5 bg-[#F4F0E6] p-1 rounded-full text-[11px] font-black">
                  <button
                    onClick={() => setActiveTab('painel')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'painel'
                        ? 'bg-[#123B32] text-white shadow-xs'
                        : 'text-[#46665D] hover:text-[#123B32]'
                    }`}
                  >
                    Painel
                  </button>
                  <button
                    onClick={() => setActiveTab('op')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      activeTab === 'op'
                        ? 'bg-[#123B32] text-white shadow-xs'
                        : 'text-[#46665D] hover:text-[#123B32]'
                    }`}
                  >
                    Ordem OP
                  </button>
                </div>
              </div>

              {/* Visão 1: Painel Operacional Real (Captura de Tela 18) */}
              {activeTab === 'painel' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-black text-[#123B32]">Painel Operacional</h3>
                      <p className="text-[11px] font-bold text-[#46665D]">Visão geral da produção em tempo real.</p>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-black text-white text-[11px] font-black flex items-center gap-1">
                      <span>+ Nova Ordem</span>
                    </span>
                  </div>

                  {/* 4 Cards de Métricas Reais do Sistema */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-[10px] font-black">Total Ativas</span>
                        <Box className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-2xl font-black text-[#123B32] font-mono mt-1">2</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-[10px] font-black">Em Produção</span>
                        <Activity className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <p className="text-2xl font-black text-[#123B32] font-mono mt-1">1</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-[10px] font-black">Concluídas</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <p className="text-2xl font-black text-[#123B32] font-mono mt-1">1</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#FF796C]">
                        <span className="text-[10px] font-black">Paradas / Atrasos</span>
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-2xl font-black text-[#FF796C] font-mono mt-1">0</p>
                    </div>
                  </div>

                  {/* Ordens por Etapa e Atividade Recente */}
                  <div className="p-3.5 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-black text-[#123B32]">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#00C98D]" />
                        <span>Ordens por Etapa</span>
                      </span>
                      <span className="text-[#46665D] font-mono">2 em processo</span>
                    </div>

                    <div className="space-y-1.5 text-[10px] font-bold text-[#123B32]">
                      <div className="flex justify-between items-center">
                        <span>Finalizada</span>
                        <div className="w-36 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-black rounded-full" />
                        </div>
                        <span className="font-mono">1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>traveti</span>
                        <div className="w-36 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-black rounded-full" />
                        </div>
                        <span className="font-mono">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Atividade Recente Real */}
                  <div className="p-3 rounded-2xl bg-[#DDF8EC] border border-[#00C98D]/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-black text-white font-mono text-[9px] flex items-center justify-center font-bold">
                        0026
                      </span>
                      <div>
                        <p className="font-black text-[#123B32] text-[11px]">
                          OP-000026 recebida por galego
                        </p>
                        <p className="text-[9px] text-[#46665D]">10/10/2026 às 12:14</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-[#00C98D] bg-white px-2 py-0.5 rounded-full">
                      Confirmado
                    </span>
                  </div>
                </div>
              )}

              {/* Visão 2: Ficha Real de Ordem de Produção (Captura de Tela 19) */}
              {activeTab === 'op' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-black text-[#123B32]">Ordens de Produção</h3>
                      <p className="text-[11px] font-bold text-[#46665D]">Gerencie e acompanhe OPs.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-white border border-[#EAE3D2] text-[#123B32] text-[11px] font-black flex items-center gap-1 shadow-xs">
                        <QrCode className="w-3.5 h-3.5 text-[#00C98D]" />
                        <span>Escanear OP</span>
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-black text-white text-[11px] font-black">
                        + Nova Ordem
                      </span>
                    </div>
                  </div>

                  {/* Tabela Real de OPs */}
                  <div className="rounded-2xl border border-[#EAE3D2] overflow-hidden text-xs">
                    <div className="p-3 bg-[#FFFDF7] border-b border-[#EAE3D2] space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-mono font-black text-[#123B32] text-sm">OP - 000026</span>
                          <p className="text-[10px] font-bold text-[#46665D]">18 set, 26</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#123B32] border border-[#FFD84D] text-[10px] font-black">
                          Aguardando
                        </span>
                      </div>

                      <div className="pt-1 flex justify-between items-center text-[11px]">
                        <div>
                          <p className="font-black text-[#123B32]">wide leg</p>
                          <p className="text-[10px] text-[#46665D]">Ref: 00 • marmorizada</p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#123B32]">traveti</span>{' '}
                          <span className="px-1.5 py-0.5 rounded bg-[#F4F0E6] text-[10px] font-black">galego</span>
                          <p className="text-[10px] text-[#46665D]">Etapa 3 de 5</p>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-[#46665D]">Progresso:</span>
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-black rounded-full" />
                          </div>
                          <span className="font-mono font-black text-[#123B32]">300 / 300</span>
                        </div>
                        <span className="text-[#00C98D] font-black text-xs">➔</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white space-y-1 opacity-90">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-mono font-black text-[#123B32] text-sm">OP - 000025</span>
                          <p className="text-[10px] font-bold text-[#46665D]">10 set, 26</p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#DDF8EC] text-[#123B32] text-[10px] font-black">
                          Finalizada
                        </span>
                      </div>

                      <div className="pt-1 flex justify-between items-center text-[11px]">
                        <div>
                          <p className="font-black text-[#123B32]">wide leg</p>
                          <p className="text-[10px] text-[#46665D]">Ref: 00 • marmorizada</p>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-[#00C98D]">Finalizada</span>
                          <p className="text-[10px] text-[#46665D]">Etapa 5 de 5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rodapé com Destaque para Leitura de QR Code */}
              <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white">
                    <QrCode className="w-5 h-5 text-[#00C98D]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#123B32]">Botão Real 'Escanear OP'</p>
                    <p className="text-[10px] font-bold text-[#46665D]">Aponte a câmera e movimente a ordem</p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-[#FFD84D] text-[#123B32] text-[11px] font-black shadow-xs rotate-1">
                  Direto no navegador
                </div>
              </div>

            </div>

            {/* Sticker Flutuante com Sombra Suave */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#B9A5FF] text-[#123B32] font-black px-4 py-2 rounded-2xl shadow-lg shadow-[#B9A5FF]/30 text-xs items-center gap-2 -rotate-3 border-2 border-white">
              <Sparkles className="w-4 h-4 text-[#123B32]" />
              <span>Exemplo prático de esteira real: rotas, prestadores e lotes</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
