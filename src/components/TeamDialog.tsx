import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import './TeamDialog.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
  projects?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Franed Estiwark Asprilla Cabezas",
    role: "Desarrollador Web",
    description: "Arquitecto de soluciones full-stack especializado en React, TypeScript y Supabase. Lidera la implementación de patrones de diseño y arquitectura escalable.",
    image: "/lovable-uploads/ffa0a1b2-c60a-47e2-95b6-e210f4e15530.png",
    skills: ["Liderazgo", "Desarrollo Web", "React"],
    link: "https://preview--franed-design-studio.lovable.app/",
    projects: ["Ecos de los Continentes"]
  },
  {
    id: 2,
    name: "Juan Camilo Escobar Córdoba",
    role: "Frontend Developer - Content Management",
    description: "Desarrollador especializado en interfaces React con TypeScript, integración de Supabase Storage y manejo de estados complejos para gestión de contenido multimedia.",
    image: "/lovable-uploads/527e7bcd-ad27-4b7c-904b-5186d3dfc9df.png",
    skills: ["React", "TypeScript", "Supabase Storage", "State Management", "Content APIs"],
    link: "https://www.linkedin.com/in/camilo-ec-546363300",
    projects: ["Ecos de los Continentes"]
  },
  {
    id: 3,
    name: "Farid Sebastian España",
    role: "Frontend Developer - UI/UX Engineering",
    description: "Especialista en desarrollo de interfaces con React, TypeScript y Tailwind CSS. Implementa animaciones avanzadas y optimización de experiencia de usuario.",
    image: "/lovable-uploads/farid-espana.jpg",
    skills: ["React", "TypeScript", "Tailwind CSS", "CSS Animations", "Responsive Design"],
    link: "http://www.linkedin.com/in/farid-españa-623b24301",
    projects: ["Ecos de los Continentes"]
  },
  {
    id: 4,
    name: "Marcos Duvan Sánchez Tobar",
    role: "Backend Developer",
    description: "Desarrollador backend especializado en arquitectura de servicios, integración de APIs y desarrollo de soluciones escalables.",
    image: "/lovable-uploads/marcos-sanchez.jpg",
    skills: ["Backend Development", "API Integration", "Database Design"],
    link: "https://www.linkedin.com/in/marcos-duvan-sanchez-tobar-8b43732b2/",
    projects: ["Ecos de los Continentes"]
  },
  {
    id: 5,
    name: "Johnny Stanley",
    role: "Backend Developer - Database Engineering",
    description: "Especialista en arquitectura de bases de datos con PostgreSQL y Supabase, diseño de esquemas optimizados y implementación de consultas complejas.",
    image: "/lovable-uploads/johnny-stanley.jpg",
    skills: ["PostgreSQL", "Supabase", "Database Design", "SQL Optimization", "Data Migration"],
    link: "https://www.linkedin.com/in/johnny-stanley-ortiz-mondragón-18b21937a",
    projects: ["Ecos de los Continentes"]
  },
  {
    id: 6,
    name: "Edgar Stiven Garcia Aragon",
    role: "Backend Developer - Auth & Security",
    description: "Desarrollador backend especializado en Supabase Auth, implementación de JWT, desarrollo de Edge Functions y configuración de políticas RLS avanzadas.",
    image: "/lovable-uploads/edgar-garcia.jpg",
    skills: ["Supabase Auth", "JWT", "Edge Functions", "RLS Policies", "API Security"],
    link: "http://www.linkedin.com/in/edgar-stiven-garcia-aragon-50646b378",
    projects: ["Ecos de los Continentes"]
  }
];

const TeamDialog = () => {
  return (
    <DialogContent className="sm:max-w-6xl bg-background border-primary/20 max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-4xl md:text-5xl font-heading font-bold mb-3">
          <span className="block text-foreground">nuestro</span>
          <span className="block text-gradient">equipo.</span>
        </DialogTitle>
        <DialogDescription className="text-muted-foreground text-base tracking-wide">
          Conoce al talentoso equipo detrás de FEAC Studio
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-8 space-y-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="border-t border-primary/10 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Imagen y info básica */}
              <div className="md:col-span-1">
                <div className="relative w-32 h-32 mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">
                  {member.role}
                </p>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{member.name}</h3>
                <a 
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 magnetic flex items-center gap-2 group"
                >
                  Ver Perfil
                  <span className="w-6 h-[1px] bg-primary transition-all duration-300 group-hover:w-10" />
                </a>
              </div>

              {/* Información detallada */}
              <div className="md:col-span-3 space-y-4">
                {/* Descripción */}
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Descripción</h4>
                  <p className="text-foreground/80 leading-relaxed text-base">{member.description}</p>
                </div>

                {/* Habilidades */}
                <div>
                  <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border border-primary/20 text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Proyectos */}
                {member.projects && (
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Proyectos</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.projects.map((project, i) => (
                        <span 
                          key={i} 
                          className="text-[0.65rem] tracking-wide uppercase px-3 py-1.5 bg-primary/10 text-foreground"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  );
};

export default TeamDialog;