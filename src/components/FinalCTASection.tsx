import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Gift } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Doubts Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            💬 ¿Tenés dudas antes de avanzar?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Escribime por WhatsApp y resolvemos todo:
          </p>

          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-elegant text-lg px-8 py-6 font-semibold"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5492346506111&text=Hola%2C+quiero+recibir+el+formulario+para+avanzar+con+los+videos+UGC&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              Resolver Dudas por WhatsApp
            </a>
          </Button>
        </div>

        {/* Special Offer */}
        <div className="relative">
          <div className="gradient-hero p-8 md:p-12 rounded-2xl text-primary-foreground shadow-golden">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold">
                <Gift className="h-8 w-8 animate-bounce-gentle" />
                ⚡ Cupos limitados
              </div>
              
              <div className="space-y-4">
                <p className="text-lg md:text-xl font-semibold">
                  Si llegaste hasta acá, te voy a dejar un regalo:
                </p>
                
                <div className="text-2xl md:text-3xl font-bold">
                  "Pack de 10 VIDEOS a 49 USD c/u"
                </div>
                
                <p className="text-lg font-medium">
                  Envíame la palabra <strong className="text-xl">"Regalo"</strong>
                </p>
                
                <p className="text-base font-medium">
                  <strong>Esto solamente si llegaste a leerlo y me mandas por wpp por tu regalo!</strong>
                </p>
              </div>

              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg text-lg px-8 py-6 font-semibold"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5492346506111&text=Regalo&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  Reclamar Regalo
                </a>
              </Button>

              {/* Availability Counter */}
              <div className="bg-urgency text-urgency-foreground px-6 py-3 rounded-full inline-block font-bold text-lg shadow-lg">
                3/5 DISPONIBLES EN SEPTIEMBRE
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 gradient-bg rounded-full animate-pulse-slow opacity-70"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-pulse-slow opacity-70"></div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Mental Maps Consultora - Creamos videos UGC que convierten
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;