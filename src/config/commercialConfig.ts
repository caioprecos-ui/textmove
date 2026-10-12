/**
 * CONFIGURAÇÃO COMERCIAL CENTRALIZADA — LINHA TÊXTIL
 * 
 * Todos os parâmetros comerciais, número de WhatsApp e regras de precificação
 * devem ser alterados exclusivamente neste arquivo.
 */

// 1. CONFIGURAÇÃO DO WHATSAPP COMERCIAL OFICIAL
// Código do país (55) + DDD 63 + 991080480
export const WHATSAPP_NUMBER: string = "5563991080480";
export const WHATSAPP_NUMBER_DISPLAY: string = "+55 (63) 99108-0480";

// 2. MENSAGENS PADRONIZADAS CONFORME DIRETRIZES
export const WHATSAPP_MESSAGES = {
  // Botão "Quero conhecer o sistema" / Hero CTA
  CONHECER_SISTEMA:
    "Olá! Gostaria de conhecer o Linha Têxtil e entender como ele pode ajudar na organização e acompanhamento das ordens de produção da minha empresa.",

  // Botão "Ver como funciona o QR Code"
  CONHECER_QR_CODE:
    "Olá! Gostaria de ver como funciona a movimentação das ordens de produção por QR Code no Linha Têxtil.",

  // Botão "Consultar valores / Informações comerciais"
  CONSULTAR_VALORES:
    "Olá! Tenho interesse no Linha Têxtil. Gostaria de conhecer os valores, o que está incluído na assinatura e as condições de contratação.",

  // Botão "Quero contratar pelo WhatsApp" / Oferta Comercial
  CONTRATAR:
    "Olá! Tenho interesse em contratar o Linha Têxtil. Poderia me orientar sobre os próximos passos?",

  // Botão "Tirar dúvidas sobre operações e segmentos"
  DUVIDAS_FACCOES:
    "Olá! Trabalho com produção organizada em etapas e prestadores e gostaria de verificar a compatibilidade do Linha Têxtil com o fluxo da minha operação.",

  // Botão "Falar com o Linha Têxtil no WhatsApp" / Chamada Final
  CHAMADA_FINAL:
    "Olá! Gostaria de conversar com a equipe do Linha Têxtil para conhecer a solução e avaliar a implantação na minha empresa."
} as const;

export type WhatsAppMessageType = keyof typeof WHATSAPP_MESSAGES;

// 3. ESTRATÉGIA DE PRECIFICAÇÃO E CONDIÇÕES COMERCIAIS
export const PRICING_CONFIG = {
  // Oferta comercial de lançamento inicial
  launchPriceFormatted: "R$ 99,90",
  launchPriceNumeric: 99.90,
  launchPeriod: "mês",
  launchBadge: "Oferta de Lançamento",

  // Preço padrão planejado para o futuro (indicado como planejado, não como tarifa praticada)
  plannedStandardPriceFormatted: "R$ 149,90",
  plannedStandardPriceNumeric: 149.90,
  plannedStandardPeriod: "mês",

  // Informações obrigatórias de transparência antes da publicação
  commercialDetails: {
    pricingType: "Condição promocional de lançamento para novos assinantes",
    includedInSubscription: [
      "Acesso completo ao painel operacional pelo computador e celular",
      "Geração ilimitada de etiquetas de Ordens de Produção com QR Code",
      "Identificação por QR Code no celular e token manual de 6 dígitos",
      "Cadastro de produtos, referências, variantes e lotes",
      "Cadastro e acompanhamento de prestadores externos e etapas internas",
      "Roteiros de produção configuráveis por produto",
      "Registro de quantidades concluídas, peças com defeito e faltantes por etapa",
      "Histórico detalhado e auditável de todas as movimentações"
    ],
    hiringProcess:
      "A contratação é realizada diretamente com nossa equipe via WhatsApp. Entendemos a rotina da sua operação, preparamos o ambiente e orientamos o início imediato.",
    setupProcess:
      "Configuração inicial guiada: você cadastra suas etapas produtivas e nós ajudamos a estruturar seus primeiros fluxos e prestadores.",
    supportPolicy:
      "Suporte humanizado via WhatsApp e e-mail em horário comercial para tirar dúvidas operacionais da equipe interna e parceiros.",
    cancellationPolicy:
      "Assinatura mensal sem fidelidade obrigatória. O cancelamento pode ser solicitado a qualquer momento diretamente pelo canal de atendimento, sem multas rescisórias."
  }
};

// 4. INFORMAÇÕES INSTITUCIONAIS DA MARCA
export const BRAND_CONFIG = {
  name: "Linha Têxtil",
  tagline: "Sua produção em movimento. Cada etapa sob controle.",
  headline: "Sua produção em movimento. Cada etapa sob controle.",
  subheadline: "Organize ordens de produção, registre movimentações por QR Code e acompanhe o fluxo de trabalho da sua empresa em um só lugar.",
  supportText: "Conheça uma solução desenvolvida para ajudar empresas a organizar suas ordens de produção, registrar movimentações por QR Code e acompanhar o fluxo entre etapas e prestadores em um só lugar.",
  officialEmail: "contato@linhatextil.com.br", // Campo para contato institucional
  officialWhatsApp: "+55 (63) 99108-0480",
  officialWhatsAppRaw: "5563991080480",
  companyStatus: "Disponível para operações em todo o Brasil"
};

// 5. HELPER PARA GERAÇÃO SEGURA DO LINK DO WHATSAPP
export interface WhatsAppLinkResult {
  url: string;
  isConfigured: boolean;
  rawNumber: string;
  messageText: string;
}

/**
 * Valida e formata o link para o WhatsApp.
 * Se o número oficial ainda não estiver preenchido, retorna isConfigured: false
 * para evitar links quebrados e permitir um aviso visual amigável ou modal de teste.
 */
export function getWhatsAppAction(
  type: WhatsAppMessageType,
  overrideNumber?: string
): WhatsAppLinkResult {
  const messageText = WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.CONHECER_SISTEMA;
  const activeNumber = (overrideNumber || WHATSAPP_NUMBER || "").trim();

  // Verifica se o número contém apenas dígitos e possui formato válido (mínimo 10 dígitos)
  const isDigitsOnly = /^\d{10,15}$/.test(activeNumber);
  const isConfigured = activeNumber !== "PREENCHER_COM_NUMERO_OFICIAL" && isDigitsOnly;

  const url = isConfigured
    ? `https://wa.me/${activeNumber}?text=${encodeURIComponent(messageText)}`
    : `https://wa.me/?text=${encodeURIComponent(messageText)}`;

  return {
    url,
    isConfigured,
    rawNumber: activeNumber,
    messageText
  };
}

// 6. RASTREAMENTO DE CONVERSÃO PRONTO PARA ANALYTICS
export function trackConversionEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  try {
    // Log estruturado para auditoria no console
    if (typeof window !== "undefined") {
      // Dispara Google Analytics gtag se estiver presente
      if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, eventParams);
      }
      // Dispara Meta Pixel fbq se estiver presente
      if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", eventName, eventParams);
      }
    }
  } catch {
    // Fallback silencioso sem interromper a navegação do usuário
  }
}
