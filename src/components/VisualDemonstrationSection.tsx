import React, { useState } from 'react';
import { LayoutDashboard, ListFilter, Users, GitMerge, ArrowRight, QrCode, Search, Check, Activity, Box, CheckCircle2, AlertTriangle, Clock, ExternalLink } from 'lucide-react';
import { WhatsAppMessageType, trackConversionEvent } from '../config/commercialConfig';

interface VisualDemonstrationSectionProps {
  onOpenWhatsApp: (type: WhatsAppMessageType) => void;
}

export const VisualDemonstrationSection: React.FC<VisualDemonstrationSectionProps> = ({
  onOpenWhatsApp
}) => {
  const [activeTab, setActiveTab] = useState<'painel' | 'producoes' | 'fluxos' | 'prestadores'>('painel');

  const tabs = [
    { id: 'painel', label: '1. Painel Operacional', icon: LayoutDashboard, route: 'textmove.com.br/dashboard' },
    { id: 'producoes', label: '2. Ordens de Produção', icon: ListFilter, route: 'textmove.com.br/producoes' },
    { id: 'fluxos', label: '3. Roteiros de Produção', icon: GitMerge, route: 'textmove.com.br/fluxos' },
    { id: 'prestadores', label: '4. Prestadores & Facções', icon: Users, route: 'textmove.com.br/prestadores' },
  ] as const;

  return (
    <section id="demonstracao" className="py-20 md:py-28 bg-[#F8F5EC] relative overflow-hidden">
      
      {/* Elementos orgânicos */}
      <div className="absolute top-1/4 right-5 w-80 h-80 rounded-full bg-[#FFD84D]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD84D] text-[#123B32] text-xs font-black">
            <span>INTERFACE REAL DO SISTEMA</span>
            <span>🖥️</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#123B32] tracking-tight leading-tight">
            Veja as telas reais do Linha Têxtil em funcionamento
          </h2>

          <p className="text-[#3A5950] text-base sm:text-lg font-bold leading-relaxed">
            Uma interface limpa, intuitiva e pensada para quem precisa acompanhar ordens, lotes e etapas produtivas todos os dias.
          </p>
        </div>

        {/* Abas das 4 Telas Reais */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar justify-start lg:justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  trackConversionEvent('demo_tab_click', { tab: tab.id });
                }}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#123B32] text-white shadow-md scale-105'
                    : 'bg-white hover:bg-[#DDF8EC] text-[#123B32] border border-[#123B32]/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00C98D]' : 'text-[#46665D]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Moldura de Software Fiel às Capturas Reais */}
        <div className="rounded-[36px] border-4 border-[#123B32]/10 bg-white shadow-2xl overflow-hidden">
          
          {/* Barra Superior do Navegador */}
          <div className="px-6 py-4 border-b border-[#F0ECE1] bg-[#FFFDF7] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF796C]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFD84D]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#00C98D]" />
              <span className="text-xs font-mono font-bold text-[#46665D] ml-2">
                {tabs.find((t) => t.id === activeTab)?.route}
              </span>
            </div>
            <div className="text-xs font-black text-[#123B32] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C98D] animate-ping" />
              <span>Ambiente Oficial Linha Têxtil</span>
            </div>
          </div>

          {/* Área Principal de Exibição das Telas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Barra Lateral (Sidebar) Autêntica do Linha Têxtil */}
            <div className="hidden lg:block lg:col-span-3 border-r border-[#F0ECE1] bg-[#FAF8F2] p-5 space-y-6">
              
              {/* Marca LT */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#EAE3D2]">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs">
                  LT
                </div>
                <span className="font-black text-sm text-[#123B32]">Linha Têxtil</span>
              </div>

              {/* Menu Lateral do Sistema */}
              <nav className="space-y-1 text-xs font-bold text-[#46665D]">
                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer ${activeTab === 'painel' ? 'bg-white text-[#123B32] font-black shadow-xs' : 'hover:bg-white/60'}`} onClick={() => setActiveTab('painel')}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Painel</span>
                </div>
                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer ${activeTab === 'producoes' ? 'bg-white text-[#123B32] font-black shadow-xs' : 'hover:bg-white/60'}`} onClick={() => setActiveTab('producoes')}>
                  <ListFilter className="w-4 h-4" />
                  <span>Produções</span>
                </div>
                <div className="p-2.5 rounded-xl flex items-center gap-2.5 text-[#46665D]">
                  <QrCode className="w-4 h-4 text-[#00C98D]" />
                  <span>Escanear QR</span>
                </div>
                <div className="p-2.5 rounded-xl flex items-center gap-2.5 text-[#46665D]">
                  <Box className="w-4 h-4" />
                  <span>Produtos</span>
                </div>
                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer ${activeTab === 'prestadores' ? 'bg-white text-[#123B32] font-black shadow-xs' : 'hover:bg-white/60'}`} onClick={() => setActiveTab('prestadores')}>
                  <Users className="w-4 h-4" />
                  <span>Prestadores</span>
                </div>
                <div className={`p-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer ${activeTab === 'fluxos' ? 'bg-white text-[#123B32] font-black shadow-xs' : 'hover:bg-white/60'}`} onClick={() => setActiveTab('fluxos')}>
                  <GitMerge className="w-4 h-4" />
                  <span>Fluxos</span>
                </div>
                <div className="p-2.5 rounded-xl flex items-center gap-2.5 text-[#46665D]">
                  <span>Configurações</span>
                </div>
                <div className="p-2.5 rounded-xl flex items-center gap-2.5 text-[#46665D]">
                  <span>Usuários e acessos</span>
                </div>
              </nav>

              {/* Rodapé da Sidebar Protegendo Privacidade */}
              <div className="pt-6 border-t border-[#EAE3D2] text-[11px] text-[#46665D]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#123B32] text-white flex items-center justify-center font-black text-[10px]">
                    C
                  </div>
                  <div>
                    <p className="font-black text-[#123B32]">Minha Confecção</p>
                    <p className="text-[10px]">Gestor de Produção</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Área de Conteúdo da Tela Selecionada (9 colunas) */}
            <div className="lg:col-span-9 p-6 md:p-8 bg-white text-[#123B32]">
              
              {/* TELA 1: Painel Operacional (/dashboard - Captura de Tela 18) */}
              {activeTab === 'painel' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="text-2xl font-black text-[#123B32]">Painel Operacional</h3>
                      <p className="text-xs sm:text-sm font-bold text-[#46665D]">Visão geral da produção em tempo real.</p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-black text-white text-xs font-black self-start sm:self-auto">
                      + Nova Ordem
                    </button>
                  </div>

                  {/* 4 Cards de Métricas */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                    <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-xs font-black">Total Ativas</span>
                        <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center">
                          <Box className="w-3.5 h-3.5 text-slate-700" />
                        </div>
                      </div>
                      <p className="text-3xl font-black text-[#123B32] font-mono mt-2">2</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-xs font-black">Em Produção</span>
                        <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Activity className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                      </div>
                      <p className="text-3xl font-black text-[#123B32] font-mono mt-2">1</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#46665D]">
                        <span className="text-xs font-black">Concluídas</span>
                        <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                      </div>
                      <p className="text-3xl font-black text-[#123B32] font-mono mt-2">1</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] shadow-xs flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[#FF796C]">
                        <span className="text-xs font-black">Paradas / Atrasos</span>
                        <div className="w-6 h-6 rounded-lg bg-rose-50 flex items-center justify-center">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                        </div>
                      </div>
                      <p className="text-3xl font-black text-[#FF796C] font-mono mt-2">0</p>
                    </div>
                  </div>

                  {/* Linha com Ordens por Etapa e Atenção Necessária */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8 p-5 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black flex items-center gap-1.5 text-[#123B32]">
                          <Activity className="w-4 h-4 text-[#00C98D]" />
                          <span>Ordens por Etapa</span>
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs font-bold text-[#123B32]">
                        <div className="flex items-center justify-between">
                          <span className="w-24">Finalizada</span>
                          <div className="flex-1 mx-3 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-black rounded-full" />
                          </div>
                          <span className="font-mono">1</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="w-24">traveti</span>
                          <div className="flex-1 mx-3 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-black rounded-full" />
                          </div>
                          <span className="font-mono">1</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-4 p-5 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] flex flex-col justify-between">
                      <span className="text-xs font-black text-[#FF796C] flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Atenção Necessária</span>
                      </span>
                      <p className="text-xs font-bold text-[#46665D] py-4 text-center">
                        Nenhuma ordem parada.
                      </p>
                      <div className="h-1" />
                    </div>
                  </div>

                  {/* Atividade Recente */}
                  <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#EAE3D2] space-y-3">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="flex items-center gap-1.5 text-[#123B32]">
                        <Clock className="w-4 h-4 text-[#00C98D]" />
                        <span>Atividade Recente</span>
                      </span>
                      <span className="text-[#46665D] flex items-center gap-1">Ver todas ➔</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-[#EAE3D2] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-slate-100 rounded font-mono font-black text-xs text-[#123B32]">
                          0026
                        </span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">OP-000026 Produção recebida por galego</p>
                          <p className="text-[10px] text-[#46665D]">10/10/2026 às 12:14</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-[#00C98D] bg-[#DDF8EC] px-2.5 py-0.5 rounded-full">
                        Recebida
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TELA 2: Ordens de Produção (/producoes - Captura de Tela 19) */}
              {activeTab === 'producoes' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="text-2xl font-black text-[#123B32]">Ordens de Produção</h3>
                      <p className="text-xs sm:text-sm font-bold text-[#46665D]">Gerencie e acompanhe OPs.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-2 rounded-xl bg-white border border-[#EAE3D2] text-[#123B32] text-xs font-black flex items-center gap-1.5 shadow-xs">
                        <QrCode className="w-4 h-4 text-[#00C98D]" />
                        <span>Escanear OP</span>
                      </button>
                      <button className="px-4 py-2 rounded-xl bg-black text-white text-xs font-black">
                        + Nova Ordem
                      </button>
                    </div>
                  </div>

                  {/* Barra de Filtros */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-[#46665D]" />
                      <input
                        type="text"
                        readOnly
                        value="Buscar por código, produto ou referência..."
                        className="w-full pl-9 pr-3 py-2 bg-[#FFFDF7] rounded-xl border border-[#EAE3D2] text-xs font-bold text-[#46665D]"
                      />
                    </div>
                    <div className="w-40 px-3 py-2 bg-[#FFFDF7] rounded-xl border border-[#EAE3D2] text-xs font-bold text-[#123B32]">
                      Todos os status ▾
                    </div>
                  </div>

                  {/* Tabela Real de OPs */}
                  <div className="rounded-2xl border border-[#EAE3D2] overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FFFDF7] text-[#46665D] font-bold border-b border-[#EAE3D2]">
                        <tr>
                          <th className="py-3 px-4">Código OP</th>
                          <th className="py-3 px-4">Produto</th>
                          <th className="py-3 px-4">Etapa Atual</th>
                          <th className="py-3 px-4">Progresso</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F0ECE1] font-bold text-[#123B32]">
                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3.5 px-4 font-mono font-black">
                            <span>OP - 000026</span>
                            <span className="block text-[10px] text-[#46665D] font-normal">18 set, 26</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-black">wide leg</span>
                            <span className="block text-[10px] text-[#46665D]">Ref: 00 • marmorizada</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span>traveti</span>{' '}
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-black">galego</span>
                            <span className="block text-[10px] text-[#46665D]">3 de 5</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-black rounded-full" />
                              </div>
                              <span className="font-mono text-xs">300 / 300</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[#123B32] text-[10px] font-black">
                              Aguardando
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="text-[#00C98D] font-black text-sm cursor-pointer">➔</span>
                          </td>
                        </tr>

                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3.5 px-4 font-mono font-black">
                            <span>OP - 000025</span>
                            <span className="block text-[10px] text-[#46665D] font-normal">10 set, 26</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-black">wide leg</span>
                            <span className="block text-[10px] text-[#46665D]">Ref: 00 • marmorizada</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-black text-[#00C98D]">Finalizada</span>
                            <span className="block text-[10px] text-[#46665D]">5 de 5</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-black rounded-full" />
                              </div>
                              <span className="font-mono text-xs">4 / 4</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[#123B32] text-[10px] font-black">
                              Aguardando
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <span className="text-[#00C98D] font-black text-sm cursor-pointer">➔</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TELA 3: Roteiros de Produção (/fluxos - Captura de Tela 21) */}
              {activeTab === 'fluxos' && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="text-2xl font-black text-[#123B32] flex items-center gap-2">
                        <GitMerge className="w-6 h-6 text-[#00C98D]" />
                        <span>Roteiros de Produção</span>
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#46665D]">Configure as etapas pelas quais os produtos passam.</p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-black text-white text-xs font-black">
                      + Novo Fluxo
                    </button>
                  </div>

                  {/* Card do Fluxo calça jeans */}
                  <div className="max-w-md p-6 rounded-[28px] bg-[#FFFDF7] border-2 border-[#EAE3D2] space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D2]">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-black text-[#123B32]">calça jeans</h4>
                        <div className="w-10 h-5 bg-black rounded-full relative p-0.5">
                          <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                        </div>
                      </div>
                      <span className="text-xs text-[#46665D] cursor-pointer">✏️</span>
                    </div>

                    {/* As 5 Etapas Configuradas na Captura Real */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-[#EAE3D2]">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs text-[#123B32]">1</span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">cortador</p>
                          <p className="text-[10px] text-[#46665D]">Papel: corte</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-[#EAE3D2]">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs text-[#123B32]">2</span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">costureiro</p>
                          <p className="text-[10px] text-[#46665D]">Papel: costura</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-xl bg-[#DDF8EC] border border-[#00C98D]/40">
                        <span className="w-6 h-6 rounded-full bg-[#00C98D] text-[#123B32] flex items-center justify-center font-black text-xs">3</span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">traveti</p>
                          <p className="text-[10px] text-[#123B32] font-bold">Papel: traveti</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-[#EAE3D2]">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs text-[#123B32]">4</span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">lavanderia</p>
                          <p className="text-[10px] text-[#46665D]">Papel: lavanderia</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-[#EAE3D2]">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs text-[#123B32]">5</span>
                        <div>
                          <p className="text-xs font-black text-[#123B32]">acabamento</p>
                          <p className="text-[10px] text-[#46665D]">Papel: acabamento</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TELA 4: Prestadores & Facções (/prestadores - Captura de Tela 20) */}
              {activeTab === 'prestadores' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="text-2xl font-black text-[#123B32] flex items-center gap-2">
                        <Users className="w-6 h-6 text-[#00C98D]" />
                        <span>Prestadores & Facções</span>
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#46665D]">Gerencie quem faz parte do seu ecossistema de produção.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 rounded-xl bg-black text-white text-xs font-black">
                        + Novo Prestador
                      </button>
                    </div>
                  </div>

                  {/* Tabela Real de Prestadores */}
                  <div className="rounded-2xl border border-[#EAE3D2] overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FFFDF7] text-[#46665D] font-bold border-b border-[#EAE3D2]">
                        <tr>
                          <th className="py-3 px-4">Cód</th>
                          <th className="py-3 px-4">Nome</th>
                          <th className="py-3 px-4">Empresa</th>
                          <th className="py-3 px-4">Função</th>
                          <th className="py-3 px-4">Telefone</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F0ECE1] font-bold text-[#123B32]">
                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3 px-4 font-mono font-black">PRES-000028</td>
                          <td className="py-3 px-4 font-black">gabriel</td>
                          <td className="py-3 px-4 text-[#46665D]">-</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black">cortador</span>
                          </td>
                          <td className="py-3 px-4 font-mono">00</td>
                          <td className="py-3 px-4">
                            <div className="w-8 h-4 bg-black rounded-full relative p-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-xs">🔗 ✏️</td>
                        </tr>

                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3 px-4 font-mono font-black">PRES-000030</td>
                          <td className="py-3 px-4 font-black">galego</td>
                          <td className="py-3 px-4 text-[#46665D]">-</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black">traveti</span>
                          </td>
                          <td className="py-3 px-4 font-mono">00</td>
                          <td className="py-3 px-4">
                            <div className="w-8 h-4 bg-black rounded-full relative p-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-xs">🔗 ✏️</td>
                        </tr>

                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3 px-4 font-mono font-black">PRES-000031</td>
                          <td className="py-3 px-4 font-black">iuda</td>
                          <td className="py-3 px-4 text-[#46665D]">-</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black">acabamento</span>
                          </td>
                          <td className="py-3 px-4 font-mono">00</td>
                          <td className="py-3 px-4">
                            <div className="w-8 h-4 bg-black rounded-full relative p-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-xs">🔗 ✏️</td>
                        </tr>

                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3 px-4 font-mono font-black">PRES-000029</td>
                          <td className="py-3 px-4 font-black">janio</td>
                          <td className="py-3 px-4 text-[#46665D]">-</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black">costura</span>
                          </td>
                          <td className="py-3 px-4 font-mono">00</td>
                          <td className="py-3 px-4">
                            <div className="w-8 h-4 bg-black rounded-full relative p-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-xs">🔗 ✏️</td>
                        </tr>

                        <tr className="hover:bg-[#FFFDF7]">
                          <td className="py-3 px-4 font-mono font-black">PRES-000032</td>
                          <td className="py-3 px-4 font-black">jeam</td>
                          <td className="py-3 px-4 text-[#46665D]">-</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-black">lavanderia</span>
                          </td>
                          <td className="py-3 px-4 font-mono">00</td>
                          <td className="py-3 px-4">
                            <div className="w-8 h-4 bg-black rounded-full relative p-0.5">
                              <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-xs">🔗 ✏️</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Rodapé da Moldura com CTA */}
          <div className="p-5 border-t border-[#F0ECE1] bg-[#FFFDF7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#46665D]">
            <p>
              Quer ver como o Linha Têxtil organiza a sua produção na prática?
            </p>
            <button
              onClick={() => onOpenWhatsApp('CONHECER_SISTEMA')}
              className="px-6 py-3 bg-[#00C98D] hover:bg-[#00B57E] text-[#123B32] font-black rounded-full transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md hover:-translate-y-0.5"
            >
              <span>Solicitar Demonstração no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
