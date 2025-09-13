import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Users, Clock } from 'lucide-react';

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { id: 1, src: "/testimonios/testimonio1.jpg", alt: "Testimonio creadora UGC 1" },
              { id: 2, src: "/testimonios/testimonio2.jpg", alt: "Testimonio creador UGC 2" },
              { id: 3, src: "/testimonios/testimonio3.jpg", alt: "Testimonio marca exitosa 3" },
              { id: 4, src: "/testimonios/testimonio4.jpg", alt: "Testimonio creador UGC 4" }
            ].map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 shadow-elegant">
                <CardContent className="p-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={testimonial.src} 
                      alt={testimonial.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Examples Section */}
        <div className="text-center space-y-6 bg-card p-8 rounded-2xl shadow-elegant">
          <div className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground">
            🔍 ¿Querés ver ejemplos realizados?
          </div>
          
          <a
            href="https://drive.google.com/drive/folders/1zKEXdEi5PKD3e6ktBPfpCECkr-jqvH8L?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-colors duration-300 underline decoration-2 underline-offset-4"
          >
            Ver Portfolio de Ejemplos
            <ExternalLink className="h-5 w-5" />
          </a>
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