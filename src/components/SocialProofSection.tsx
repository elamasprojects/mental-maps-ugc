import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Users, Clock } from 'lucide-react';
import { Logos3 } from './ui/logos3';

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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
            {[
              { id: 5, src: "/testimonios/testimonio5.jpeg", alt: "Testimonio conversación WhatsApp cliente satisfecho" },
              { id: 6, src: "/testimonios/testimonio6.png", alt: "Testimonio feedback positivo de marca" },
              { id: 7, src: "/testimonios/testimonio7.jpeg", alt: "Testimonio entrega rápida de videos UGC" },
              { id: 8, src: "/testimonios/testimonio8.jpeg", alt: "Testimonio calidad del servicio UGC" }
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
        </div>

        {/* Examples Section */}
        <div className="text-center space-y-8 bg-gradient-to-r from-card via-primary/5 to-card p-8 rounded-2xl shadow-elegant border border-primary/20">
          <div className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground">
            🔍 ¿Querés ver ejemplos realizados?
          </div>
          
          <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
            <p className="text-lg font-medium mb-4 text-foreground">
              Accede a nuestro <span className="gradient-text font-bold">Portfolio Completo</span> con más de 500 videos UGC
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                Videos para diferentes nichos
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Formatos optimizados para ads
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Casos de éxito reales
              </div>
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

        {/* Logos Carousel Section */}
        <div>
          <Logos3 heading="Empresas que confían en nosotros" />
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