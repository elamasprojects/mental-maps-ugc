import React from 'react';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import SocialProofSection from '../components/SocialProofSection';
import PricingSection from '../components/PricingSection';
import FinalCTASection from '../components/FinalCTASection';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CTASection />
      <SocialProofSection />
      <PricingSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;