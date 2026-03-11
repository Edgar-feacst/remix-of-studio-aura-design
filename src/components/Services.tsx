import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import emprendevisionLogo from '@/assets/emprendevision-logo.png';
import './Services.css';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  number: string;
}

interface ThirdPartyProject {
  title: string;
  description: string;
  image: string;
  link?: string;
  fullDescription: string;
  technologies: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo de Software a Terceros",
    description: "Creamos soluciones de software personalizadas para empresas que buscan digitalizar sus procesos y mejorar su eficiencia operativa.",
    features: [
      "Aplicaciones web personalizadas",
      "Sistemas de gestión empresarial",
      "Automatización de procesos",
      "Integración con sistemas existentes",
      "Mantenimiento y soporte técnico"
    ],
    number: "01"
  }
];

const thirdPartyProjects: ThirdPartyProject[] = [
  {
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para la gestión administrativa de empresas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    fullDescription: "Sistema completo de gestión empresarial que incluye módulos de administración de recursos humanos, control de inventario, gestión financiera y reportes analíticos para optimizar las operaciones del negocio.",
    technologies: ["React", "TypeScript", "Dashboard Design", "Data Analytics"]
  },
  {
    title: "EmprendeVisión",
    description: "Plataforma para emprendimientos estudiantiles de la Universidad del Valle.",
    image: emprendevisionLogo,
    fullDescription: "Esta plataforma fue creada con el propósito de compartir y visibilizar los emprendimientos estudiantiles de la Universidad del Valle Seccional Pacífico con todo el público bonaverense. Queremos mostrar que la Universidad del Valle también puede, que tenemos estudiantes con productos muy interesantes, con talento y con ganas de crecer. Buscamos dar a conocer el potencial emprendedor de nuestra comunidad universitaria y contribuir al desarrollo económico de nuestra región. ¡Apoyemos el talento local y construyamos juntos un futuro mejor!",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"]
  }
];

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Title Section - Giant Typography */}
        <div ref={titleRef} className="mb-32">
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
              lo que hacemos
            </p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.9] mb-8">
              <span className="block text-foreground">nuestros</span>
              <span className="block text-gradient">servicios.</span>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={contentRef} className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-1000 delay-${index * 200} ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-6xl font-heading font-bold text-primary/20">
                  {service.number}
                </span>
              </div>

              {/* Service Content */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  Incluye
                </h4>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-foreground/70 flex items-start group">
                      <span className="w-8 h-[1px] bg-primary/50 mt-3 mr-4 group-hover:w-12 transition-all duration-300" />
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.id === 1 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="mt-8 text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 magnetic flex items-center gap-2 group">
                        Ver ejemplos de proyectos
                        <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-12" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-5xl bg-background/95 backdrop-blur-xl border-primary/20 max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-heading font-bold">Proyectos para Terceros</DialogTitle>
                        <DialogDescription className="text-muted-foreground text-lg">
                          Ejemplos de desarrollo para clientes y organizaciones
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-8 mt-6">
                        {thirdPartyProjects.map((project, idx) => (
                          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-primary/10 pt-8 first:border-0 first:pt-0">
                            <div className="overflow-hidden flex items-center justify-center bg-muted/30 p-4">
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full max-w-[200px] h-auto hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="space-y-4">
                              <h4 className="text-2xl font-heading font-bold text-foreground">{project.title}</h4>
                              <p className="text-foreground/80 leading-relaxed text-sm">
                                {project.fullDescription}
                              </p>
                              
                              <div>
                                <h5 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Tecnologías</h5>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, i) => (
                                    <span 
                                      key={i} 
                                      className="text-xs tracking-wide uppercase px-3 py-1.5 border border-primary/20 text-foreground"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              {project.link && (
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
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
