import React from 'react';
import logo from '../assets/logo.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-background flex flex-col">
      {/* Header (hidden on all viewports) */}
      <header className="hidden w-full py-4 px-6 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center">
          <img 
            src={logo} 
            alt="Mental Maps Consultora" 
            className="h-12 w-auto"
          />
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-start md:items-center justify-center px-6 md:px-8 pt-4 pb-4 md:pt-8 md:pb-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Centered Logo */}
          <div className="flex justify-center mt-2 md:mt-0">
            <img
              src={logo}
              alt="Mental Maps Consultora"
              className="h-20 w-20 md:h-24 md:w-24 rounded-xl object-cover shadow-golden"
            />
          </div>
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            🚨No pierdas más{' '}
            <span className="gradient-text">TIEMPO</span>{' '}
            ni{' '}
            <span className="gradient-text">PLATA</span>{' '}
            en Creativos que no funcionan
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Creamos 10-100 videos UGC con{' '}
            <span className="gradient-text font-bold">creadores de todo LATAM</span>{' '}
            en 7 a 14 días</strong>
          </h2>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-elegant bg-card">
              <iframe
                src="https://www.loom.com/embed/4f524ab0ec9b4487b72536028be47acb?sid=595f833e-03b7-4530a7bb-4f3a3da610d4"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                title="Mental Maps Consultora - Video VSL"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;