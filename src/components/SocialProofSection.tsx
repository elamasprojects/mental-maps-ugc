import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Users, Clock, Sparkles, CheckCircle } from 'lucide-react';
import { Logos3 } from './ui/logos3';
import TestimonialAudioCard from './ui/testimonial-audio-card';

const SocialProofSection: React.FC = () => {
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

        {/* Logos Carousel Section */}
        <div>
          <Logos3
            heading={
              <>
                Algunas de las Empresas que <span className="gradient-text">confían en nosotros</span>
              </>
            }
          />
        </div>

        {/* Examples Section (moved below carousel and redesigned) */}
        <div className="relative text-center space-y-8 p-8 md:p-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-card to-accent/10 shadow-elegant overflow-hidden">
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"></div>

          <div className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="gradient-text">¿Querés ver ejemplos realizados?</span>
          </div>

          <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
            <p className="text-lg font-medium mb-6 text-foreground">
              Accedé a nuestro <span className="gradient-text font-bold">Portfolio Completo</span> con más de 500 videos UGC
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-foreground/80 mb-6">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Videos para diferentes nichos</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Formatos optimizados para ads</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Casos de éxito reales</span>
              </div>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1zKEXdEi5PKD3e6ktBPfpCECkr-jqvH8L?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-golden hover:scale-105 border border-primary/30"
            >
              📁 Ver Portfolio Completo de Ejemplos
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scarcity Section */}
        <div className="bg-urgency text-urgency-foreground p-8 rounded-2xl text-center space-y-4 shadow-elegant">
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-bold">
            ⚠️ Solo trabajamos con 10 clientes por mes
          </div>
          
          <p className="text-lg font-medium max-w-2xl mx-auto">
            <strong>Contactá a Gero para asegurar tu lugar antes de que se completen los cupos</strong>
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Disponibilidad limitada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;