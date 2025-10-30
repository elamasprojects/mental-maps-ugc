"use client";
import { Card } from "@/components/ui/card";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { CheckCircle, Sparkles, Clock, TriangleAlert, TrendingDown, Zap, Video } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";

const BetaProductAnnouncement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterDataUrl, setPosterDataUrl] = useState<string | undefined>();

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      const targetTime = Math.min(0.1, video.duration ? video.duration * 0.01 : 0.1);
      video.currentTime = isFinite(targetTime) ? targetTime : 0;
    } catch {}
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    try {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      setPosterDataUrl(dataUrl);
    } catch {}
  };

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
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

  const benefits = [
    {
      icon: <TrendingDown className="h-5 w-5 text-green-500" />,
      text: "68% más económico que UGC tradicional"
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      text: "Entrega ultra rápida (2-5 días)"
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      text: "Calidad realista y profesional con IA de última generación"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-purple-500" />,
      text: "Mismo formato optimizado para Ads"
    }
  ];

  return (
    <section 
      className="py-16 md:py-20 px-6 md:px-8 bg-gradient-to-b from-background via-violet-950/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TimelineContent
          animationNum={0}
          timelineRef={sectionRef}
          customVariants={revealVariants}
        >
          <Card className="border-2 border-violet-500/30 bg-gradient-to-br from-card via-violet-950/10 to-card shadow-2xl overflow-hidden">
            {/* Beta Badge */}
            <div className="absolute top-4 right-4 z-20">
              <motion.div
                className="flex items-center gap-2 bg-violet-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Sparkles className="h-4 w-4" />
                BETA
              </motion.div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {/* Header Section */}
              <div className="text-center space-y-4">
                {/* Limited Time Badge */}
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-bold shadow-lg animate-pulse-slow">
                  <Clock className="h-4 w-4" />
                  OFERTA POR TIEMPO LIMITADO
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Pre-lanzamiento UGC con IA
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                  Estamos lanzando una plataforma revolucionaria que crea el mismo contenido UGC de alta calidad, 
                  pero usando <strong className="text-foreground">inteligencia artificial</strong> para ofrecerte 
                  <strong className="text-foreground"> precios increíbles</strong>.
                </p>
              </div>

              {/* Video Section */}
              <div className="max-w-3xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-violet-500/20">
                  <video
                    ref={videoRef}
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                    poster={posterDataUrl || "/placeholder.svg"}
                    playsInline
                    controlsList="nodownload"
                    onLoadedMetadata={handleLoadedMetadata}
                    onSeeked={handleSeeked}
                  >
                    <source src="/ugc_prueba/Ahorra%20hasta%2030%25%20en%20tu%20seguro%20de%20auto%20en%205%20minutos.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  
                  {/* Video overlay badge */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold">
                    📹 Video de Muestra - Creado con IA
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="text-center space-y-4 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-blue-500/10 p-6 md:p-8 rounded-2xl border border-violet-500/20">
                <div className="space-y-3">
                  <p className="text-lg md:text-xl text-muted-foreground font-medium">
                    Precio de lanzamiento especial
                  </p>
                  
                  {/* Price comparison */}
                  <div className="space-y-1">
                    {/* Original price - crossed out */}
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through opacity-60">
                        $32
                      </span>
                      <span className="text-sm md:text-base font-medium text-muted-foreground opacity-60">USD por video</span>
                    </div>
                    
                    {/* Current discounted price */}
                    <div className="flex items-baseline justify-center gap-3">
                      <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                        $19
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-muted-foreground">USD</span>
                      <span className="text-lg md:text-xl font-semibold text-muted-foreground">/video</span>
                    </div>
                  </div>
                  
                  <div className="inline-block bg-yellow-500/20 border-2 border-yellow-500/50 px-4 py-2 rounded-lg">
                    <p className="text-base md:text-lg font-bold text-foreground">
                      📦 Mínimo: 10 videos ($190 USD total)
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/50 rounded-xl border border-border/50 hover:border-violet-500/50 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {benefit.icon}
                    </div>
                    <p className="font-semibold text-foreground text-sm md:text-base">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-6 pt-4">
                <div className="flex flex-col items-center gap-4">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=5492346506111&text=${encodeURIComponent('Hola! Me interesa el pre-lanzamiento de UGC con IA a $19 por video. Quiero ser de los primeros en probarlo.')}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <ButtonColorful
                      label="Solicitar videos con IA con descuento"
                      className="h-12 px-8 text-base md:text-lg font-bold"
                    />
                  </a>

                  {/* Urgency Badge (reduced ~25% and warning icon) */}
                  <motion.div 
                    className="inline-flex items-center gap-1.5 bg-red-600/90 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <TriangleAlert className="h-3 w-3" />
                    Este descuento termina muy pronto
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </TimelineContent>
      </div>
    </section>
  );
};

export default BetaProductAnnouncement;

