import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import './AboutDialog.css';

const AboutDialog = () => {
  return (
    <DialogContent className="sm:max-w-4xl bg-background border-primary/20 max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-4xl md:text-5xl font-heading font-bold mb-3">
          <span className="block text-foreground">sobre</span>
          <span className="block text-gradient">nosotros.</span>
        </DialogTitle>
        <DialogDescription className="text-muted-foreground text-base tracking-wide">
          Conoce más sobre FEAC Studio y nuestra filosofía
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-8 space-y-8">
        <div className="border-t border-primary/10 pt-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Nuestra Historia</h3>
          <p className="text-foreground/80 text-base leading-relaxed">
            FEAC Studio nació en 2023 con la visión de combinar diseño excepcional y tecnología avanzada para crear experiencias digitales impactantes. Desde entonces, hemos crecido hasta convertirnos en un estudio multidisciplinario con clientes en toda Latinoamérica.
          </p>
        </div>
        
        <div className="border-t border-primary/10 pt-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Nuestra Misión</h3>
          <p className="text-foreground/80 text-base leading-relaxed">
            Transformar ideas en soluciones digitales que impulsen el éxito de nuestros clientes a través de un enfoque centrado en la creatividad, la innovación tecnológica y la excelencia en la ejecución.
          </p>
        </div>

        <div className="border-t border-primary/10 pt-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Nuestra Visión</h3>
          <p className="text-foreground/80 text-base leading-relaxed">
            Ser el estudio de desarrollo digital líder en Latinoamérica, reconocido por crear experiencias digitales innovadoras que marquen la diferencia en la industria tecnológica y contribuyan al crecimiento de nuestros clientes y comunidades.
          </p>
        </div>
        
        <div className="border-t border-primary/10 pt-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Valores</h3>
          <div className="space-y-2.5">
            <p className="text-foreground/80 text-base leading-relaxed flex items-start gap-3">
              <span className="text-primary mt-1">—</span>
              <span>Excelencia en cada detalle del diseño y desarrollo</span>
            </p>
            <p className="text-foreground/80 text-base leading-relaxed flex items-start gap-3">
              <span className="text-primary mt-1">—</span>
              <span>Innovación constante en técnicas y tecnologías</span>
            </p>
            <p className="text-foreground/80 text-base leading-relaxed flex items-start gap-3">
              <span className="text-primary mt-1">—</span>
              <span>Colaboración estrecha con nuestros clientes</span>
            </p>
            <p className="text-foreground/80 text-base leading-relaxed flex items-start gap-3">
              <span className="text-primary mt-1">—</span>
              <span>Compromiso con resultados medibles y de calidad</span>
            </p>
            <p className="text-foreground/80 text-base leading-relaxed flex items-start gap-3">
              <span className="text-primary mt-1">—</span>
              <span>Adaptabilidad ante los cambios del mercado digital</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary/10 pt-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Enfoque</h3>
          <p className="text-foreground/80 text-base leading-relaxed">
            En FEAC Studio combinamos estrategia, diseño y tecnología para entregar soluciones digitales completas con una velocidad excepcional. Trabajamos de forma MUY rápida sin sacrificar la calidad - para nosotros, la rapidez no significa poco detalle. Nuestro proceso ágil se basa en la investigación profunda, el diseño centrado en el usuario y el desarrollo iterativo, asegurando resultados de máxima calidad en tiempos récord.
          </p>
        </div>
      </div>
    </DialogContent>
  );
};

export default AboutDialog;
