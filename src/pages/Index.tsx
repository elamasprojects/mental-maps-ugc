import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import SocialProofSection from '../components/SocialProofSection';
import EnhancedPricingSection from '../components/ui/pricing-section-enhanced';
import FinalCTASection from '../components/FinalCTASection';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CTASection />
      <SocialProofSection />
      <EnhancedPricingSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;