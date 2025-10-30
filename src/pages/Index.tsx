import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import SocialProofSection from '../components/SocialProofSection';
import EnhancedPricingSection from '../components/ui/pricing-section-enhanced';
import BetaProductAnnouncement from '../components/BetaProductAnnouncement';
import CreatorsBrandsSection from '../components/CreatorsBrandsSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CTASection />
      <SocialProofSection />
      <EnhancedPricingSection />
      <BetaProductAnnouncement />
      <CreatorsBrandsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;