import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Video, Users, Calendar, MessageCircle } from 'lucide-react';

const PricingSection: React.FC = () => {
  const packages = [
    {
      name: "Paquete Starter",
      videos: "10 videos",
      price: "USD 79 por video | 790 USD",
      total: "40 piezas finales",
      creators: "de 1 a 5 creadores",
      popular: false,
      installments: null
    },
    {
      name: "Paquete Growth",
      videos: "50 videos", 
      price: "USD 49 por video | 2450 USD",
      total: "200 piezas finales",
      creators: "de 1 a 10 creadores",
      popular: true,
      installments: "PODEMOS REALIZAR LOS VIDEOS EN HASTA 2 PLAZOS (ej: 25 videos en 1er mes, y los otros 25 en un 2do mes)"
    },
    {
      name: "Paquete Scale",
      videos: "100 videos",
      price: "USD 39 por video | 3900 USD", 
      total: "400 piezas finales",
      creators: "de 1 a 20 creadores",
      popular: false,
      installments: "PODEMOS REALIZAR LOS VIDEOS EN HASTA 3 PLAZOS (ej 30 videos 1er mes, otros 30 en un 2do mes y 40 en el 3er mes)"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Pricing Header */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            💸 <span className="gradient-text">PRECIOS POR PACK</span>
          </h2>

          {/* Product Description */}
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-elegant">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
              Cada video incluye:
            </h3>
            <div className="text-lg font-semibold text-center">
              🎥 1 video editado con 2 hooks + 1 crudo con 2 hooks = <span className="gradient-text font-bold text-xl">4 piezas finales por video</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:scale-105 shadow-elegant ${
              pkg.popular 
                ? 'border-2 border-primary shadow-golden transform scale-105' 
                : 'border border-border hover:border-primary/50'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-cta text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-golden">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold">
                  🔹 <span className="gradient-text">{pkg.name}</span> | {pkg.videos}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {pkg.price}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="font-semibold">Total: {pkg.total}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Incluye {pkg.creators}</span>
                  </div>

                  {pkg.installments && (
                    <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
                      <p className="text-sm font-medium text-foreground">
                        <strong>{pkg.installments}</strong>
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'gradient-cta text-primary-foreground hover:opacity-90 shadow-golden' 
                      : 'hover:bg-primary/10 hover:border-primary'
                  }`}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=5492346506111&text=Hola%2C+quiero+recibir+el+formulario+para+avanzar+con+los+videos+UGC&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Elegir {pkg.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-elegant">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Beneficios adicionales incluidos:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-success flex-shrink-0" />
              <span className="font-semibold">🎯 Todo listo en 7 a 14 días</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-semibold">📥 Entrega optimizada para Ads (Meta, TikTok, YouTube, etc.)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;