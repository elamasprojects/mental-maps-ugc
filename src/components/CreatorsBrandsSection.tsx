import React from 'react';
import { Card, CardContent } from './ui/card';
import TestimonialAudioCard from './ui/testimonial-audio-card';

const CreatorsBrandsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Social Proof Header */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Estamos felices de ayudar a marcas a crecer… y a{' '}
            <span className="gradient-text">creadores a generar ingresos</span>{' '}
            desde casa.
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-6xl mx-auto">
            {[
              { id: 5, src: "/testimonios/testimonio5.jpeg", alt: "Testimonio conversación WhatsApp cliente satisfecho" },
              { id: 6, src: "/testimonios/testimonio6.png", alt: "Testimonio feedback positivo de marca" },
              { id: 7, src: "/testimonios/testimonio7.jpeg", alt: "Testimonio entrega rápida de videos UGC" },
              { id: 8, src: "/testimonios/testimonio8.jpeg", alt: "Testimonio calidad del servicio UGC" },
              { id: 9, src: "/testimonios/testimonio9.jpg", alt: "Testimonio adicional satisfacción del cliente" }
            ].map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="aspect-[9/16] rounded-lg overflow-hidden">
                    <img 
                      src={testimonial.src} 
                      alt={testimonial.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-xl mx-auto mt-8 w-full">
            <TestimonialAudioCard
              audioSrc="/testimonios/audio1.opus"
              personName=""
              roleCompany="Treinta App | Directora de Marketing"
              description="Excelente coordinación y tiempos de entrega. Los videos cumplieron con lo que necesitábamos para performance."
              logoSrc="/clientes/audiologo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsBrandsSection;

