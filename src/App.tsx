/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AdminConfigBanner } from './components/AdminConfigBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductionRealitySection } from './components/ProductionRealitySection';
import { QRCodeFlowSection } from './components/QRCodeFlowSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { VisualDemonstrationSection } from './components/VisualDemonstrationSection';
import { ResultsSection } from './components/ResultsSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { WhatsAppModal } from './components/WhatsAppModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { WhatsAppMessageType, getWhatsAppAction, trackConversionEvent } from './config/commercialConfig';

export default function App() {
  const [whatsAppModal, setWhatsAppModal] = useState<{
    isOpen: boolean;
    type: WhatsAppMessageType;
  }>({
    isOpen: false,
    type: 'CONHECER_SISTEMA'
  });

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenWhatsApp = (type: WhatsAppMessageType) => {
    const action = getWhatsAppAction(type);
    if (action.isConfigured) {
      trackConversionEvent('whatsapp_direct_open', { messageType: type });
      window.open(action.url, '_blank', 'noopener,noreferrer');
    } else {
      // Se o número oficial ainda não foi configurado, abre o modal de aviso e teste
      trackConversionEvent('whatsapp_modal_opened', { messageType: type });
      setWhatsAppModal({
        isOpen: true,
        type
      });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#18332D] flex flex-col selection:bg-[#00C98D] selection:text-[#123B32]">
      {/* Banner de status comercial e atalho para configuração */}
      <AdminConfigBanner />

      {/* Navegação Principal */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Corpo da Landing Page */}
      <main className="flex-grow">
        {/* Seção 1: Hero */}
        <HeroSection
          onOpenWhatsApp={handleOpenWhatsApp}
          onScrollToQrCode={() => handleScrollToSection('qrcode')}
        />

        {/* Seção 2: A Realidade da Produção */}
        <ProductionRealitySection
          onLearnSolution={() => handleScrollToSection('qrcode')}
        />

        {/* Seção 3: O Diferencial do QR Code */}
        <QRCodeFlowSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 4: Como Funciona */}
        <HowItWorksSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 5: Funcionalidades */}
        <FeaturesSection />

        {/* Seção 6: Benefícios Operacionais */}
        <BenefitsSection />

        {/* Seção 7: Demonstração Visual do Software */}
        <VisualDemonstrationSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 8: Resultados e Ganhos Operacionais */}
        <ResultsSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 9: Para Quem É o Sistema */}
        <TargetAudienceSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 9: Oferta Comercial */}
        <PricingSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 10: Perguntas Frequentes */}
        <FaqSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* Seção 11: Chamada Final */}
        <FinalCtaSection onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Seção 12: Rodapé */}
      <Footer
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsAppButton onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Modal de Conexão com o WhatsApp */}
      <WhatsAppModal
        isOpen={whatsAppModal.isOpen}
        onClose={() => setWhatsAppModal((prev) => ({ ...prev, isOpen: false }))}
        messageType={whatsAppModal.type}
      />

      {/* Modal de Política de Privacidade */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
