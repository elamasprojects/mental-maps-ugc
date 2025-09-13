"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle, Users, MessageCircle } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const packages = [
  {
    name: "Paquete Starter",
    videos: "10 videos",
    price: 79,
    totalPrice: 790,
    total: "40 piezas finales",
    creators: "de 1 a 5 creadores",
    popular: false,
    installments: "SE REALIZA EN UN SOLO PLAZO"
  },
  {
    name: "Paquete Growth",
    videos: "50 videos", 
    price: 49,
    totalPrice: 2450,
    total: "200 piezas finales",
    creators: "de 1 a 10 creadores",
    popular: true,
    installments: "PODEMOS REALIZAR LOS VIDEOS EN HASTA 2 PLAZOS (ej: 25 videos en 1er mes, y los otros 25 en un 2do mes)"
  },
  {
    name: "Paquete Scale",
    videos: "100 videos",
    price: 39,
    totalPrice: 3900,
    total: "400 piezas finales",
    creators: "de 1 a 20 creadores",
    popular: false,
    installments: "PODEMOS REALIZAR LOS VIDEOS EN HASTA 3 PLAZOS (ej 30 videos 1er mes, otros 30 en un 2do mes y 40 en el 3er mes)"
  }
];

export default function EnhancedPricingSection() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: 30,
      opacity: 0,
    },
  };

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
      ref={pricingRef}
    >
      {/* Background Effects */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#d4af3710_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={800}
          speed={1}
          color="#d4af37"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Pricing Header */}
        <div className="text-center space-y-6">
          <TimelineContent
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.15}
                staggerFrom="center"
                containerClassName="justify-center"
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 40,
                  delay: 0,
                }}
              >
                💸 PRECIOS POR PACK
              </VerticalCutReveal>
            </h2>
          </TimelineContent>

          {/* Product Description */}
          <TimelineContent
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <div className="max-w-4xl mx-auto p-0 md:bg-card md:p-8 md:rounded-2xl md:shadow-elegant md:border md:border-primary/20">
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-6 text-foreground">
                Cada video incluye:
              </h3>
              <div className="text-base md:text-lg font-semibold md:text-center">
                🎥 1 video editado con 2 hooks + 1 crudo con 2 hooks = <span className="gradient-text font-bold text-lg md:text-xl">4 piezas finales por video</span>
              </div>
            </div>
          </TimelineContent>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <TimelineContent
              key={pkg.name}
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={`relative transition-all duration-300 hover:scale-105 shadow-elegant h-full flex flex-col ${
                  pkg.popular 
                    ? 'border-2 border-primary shadow-golden transform scale-105 bg-gradient-to-b from-card via-card/95 to-primary/5' 
                    : 'border border-border hover:border-primary/50 bg-card'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="gradient-cta text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-golden">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-xl md:text-2xl font-bold mb-4">
                    🔹 <span className="gradient-text">{pkg.name}</span> | {pkg.videos}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-xl font-medium text-muted-foreground">USD</span>
                      <NumberFlow
                        value={pkg.price}
                        className="text-3xl md:text-4xl font-bold text-foreground"
                      />
                      <span className="text-lg font-medium text-muted-foreground">por video</span>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      <NumberFlow
                        value={pkg.totalPrice}
                        prefix="USD "
                        className="gradient-text"
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex flex-col flex-1">
                  <div className="space-y-4 flex-1">
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

                  <a
                    href={`https://api.whatsapp.com/send/?phone=5492346506111&text=${encodeURIComponent(`Hola, quiero recibir el formulario para avanzar con los videos UCC. Elegí el paquete ${pkg.name}`)}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <InteractiveHoverButton
                      text={`Elegir ${pkg.name}`}
                      showBullet={false}
                      className={cn(
                        "w-full py-4 text-lg",
                        pkg.popular
                          ? "border-primary/40 bg-primary/10 text-foreground"
                          : "border-primary/30 bg-card text-foreground",
                      )}
                    />
                  </a>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>

        {/* Additional Benefits */}
        <TimelineContent
          animationNum={6}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-elegant border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Beneficios adicionales incluidos:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span className="font-semibold">🎯 Todo listo en 7 a 14 días</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-semibold">📥 Entrega optimizada para Ads (Meta, TikTok, YouTube, etc.)</span>
              </div>
            </div>
          </div>
        </TimelineContent>
      </div>
    </section>
  );
}