import React from 'react';
import { Button } from './ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { StarBorder } from '@/components/ui/star-border';
import { trackFacebookEvent } from '@/lib/utils';

const CTASection: React.FC = () => {
  return (
    <section className="pt-8 pb-12 md:py-20 px-6 md:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main CTA Text */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          <strong>
            <span className="gradient-text">Escribime directo</span>{' '}
            y te guío paso a paso
          </strong>{' '}
          para conseguir tus videos UGC
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Button
            asChild
            variant="default"
            size="lg"
            className="gradient-cta text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-golden text-lg px-8 py-6 w-full sm:w-auto font-semibold"
            onClick={() => trackFacebookEvent('Schedule')}
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3MpbAJzSWhU6Ixucb9UOaYPl0rXSrP1fSoc7N5zadqTUYp0VdrzX4VQCinkuVSoReLY_0xC9bh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Calendar className="h-5 w-5" />
              Agendar Llamada
            </a>
          </Button>

          <StarBorder as="a"
            color="hsl(var(--primary))"
            href="https://api.whatsapp.com/send/?phone=5492346506111&text=Hola%2C+quiero+recibir+el+formulario+para+avanzar+con+los+videos+UGC&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <span className="flex items-center gap-3 text-foreground font-semibold text-lg px-8">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </span>
          </StarBorder>
        </div>

        {/* Additional emphasis */}
        <div className="mt-8 animate-bounce-gentle">
          <p className="text-lg font-medium text-muted-foreground">
            👆 <strong>Elegí la opción que prefieras</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;