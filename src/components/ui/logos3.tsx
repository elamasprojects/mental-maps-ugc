"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: React.ReactNode;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: "cliente-1", description: "Cliente 1", image: "/clientes/1.png", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
  { id: "cliente-2", description: "Cliente 2", image: "/clientes/2.jpg", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
  { id: "cliente-3", description: "Cliente 3", image: "/clientes/3.png", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
  { id: "cliente-4", description: "Cliente 4", image: "/clientes/4.png", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
  { id: "cliente-5", description: "Cliente 5", image: "/clientes/5.jpg", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
  { id: "cliente-7", description: "Cliente 7", image: "/clientes/7.png", className: "h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain" },
];

const Logos3: React.FC<Logos3Props> = ({
  heading = "Empresas que confían en nosotros",
  logos = defaultLogos,
  className,
}) => {

  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">{heading}</h2>
      </div>
      <div className="pt-8 md:pt-12 lg:pt-16">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <InfiniteSlider gap={32} duration={18} durationOnHover={12} className="w-full">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center h-24 sm:h-32 md:h-36 lg:h-40">
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={cn("max-h-full w-auto max-w-[330px] object-contain animate-logo-sway", logo.className)}
                />
              </div>
            ))}
          </InfiniteSlider>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };


