import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  image: string;
  link: string;
  fullDescription: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ecos de los Continentes",
    category: "Proyectos propios",
    subcategory: "Desarrollo web",
    description: "Descubre mitos, leyendas e historias fascinantes de todos los continentes.",
    image: "/lovable-uploads/5fafe013-23d0-4257-bdc8-1496d2c3c430.png",
    link: "https://preview--mundo-de-historias-globales.lovable.app/story/africa-myths-8",
    fullDescription: "Una plataforma interactiva donde puedes descubrir mitos, leyendas e historias fascinantes de todos los continentes. Explora las ricas tradiciones narrativas del mundo de manera inmersiva.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
  }
];

const Portfolio = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="mb-16">
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              nuestro trabajo
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9]">
              <span className="block text-foreground">port</span>
              <span className="block text-gradient">folio.</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={contentRef} className="space-y-16">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-${index * 200} ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              >
                {/* Project Image */}
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-foreground/20 group-hover:border-primary flex items-center justify-center transition-all duration-300">
                      <span className="text-xl text-foreground group-hover:text-primary">+</span>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-heading font-bold text-primary/30">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        {project.subcategory}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs tracking-wide uppercase px-3 py-1.5 border border-primary/20 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 magnetic flex items-center gap-2 group"
                  >
                    Ver proyecto
                    <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-16" />
                  </button>
                </div>
              </div>

              {/* Project Dialog */}
              <DialogContent className="sm:max-w-5xl bg-background/95 backdrop-blur-xl border-primary/20 max-h-[85vh] overflow-y-auto">
                <DialogHeader className="sr-only">
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.subcategory}</DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  {/* Image Left */}
                  <div className="overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Info Right */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                        {project.subcategory}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                    </div>

                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Descripción</h4>
                      <p className="text-foreground/80 leading-relaxed text-base">
                        {project.fullDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border border-primary/20 text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 text-sm font-medium rounded-none magnetic group relative overflow-hidden"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Ver Proyecto
                        <ExternalLink className="w-4 h-4" />
                      </span>
                      <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
