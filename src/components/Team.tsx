import React, { useState } from 'react';
import { Dialog } from "@/components/ui/dialog";
import TeamDialog from './TeamDialog';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Team.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
  visible?: boolean;
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
    visible: true
  },
  {
    id: 2,
    name: "Juan Camilo Escobar Córdoba",
    role: "Frontend Developer - Content Management",
    description: "Desarrollador especializado en interfaces React con TypeScript, integración de Supabase Storage y manejo de estados complejos para gestión de contenido multimedia.",
    image: "/lovable-uploads/527e7bcd-ad27-4b7c-904b-5186d3dfc9df.png",
    skills: ["React", "TypeScript", "Supabase Storage", "State Management", "Content APIs"],
    link: "https://www.linkedin.com/in/camilo-ec-546363300",
    visible: true
  },
  {
    id: 3,
    name: "Farid Sebastian España",
    role: "Frontend Developer - UI/UX Engineering",
    description: "Especialista en desarrollo de interfaces con React, TypeScript y Tailwind CSS. Implementa animaciones avanzadas y optimización de experiencia de usuario.",
    image: "/lovable-uploads/farid-espana.jpg",
    skills: ["React", "TypeScript", "Tailwind CSS", "CSS Animations", "Responsive Design"],
    link: "http://www.linkedin.com/in/farid-españa-623b24301",
    visible: true
  },
  {
    id: 4,
    name: "Marcos Duvan Sánchez Tobar",
    role: "Backend Developer",
    description: "Desarrollador backend especializado en arquitectura de servicios, integración de APIs y desarrollo de soluciones escalables.",
    image: "/lovable-uploads/marcos-sanchez.jpg",
    skills: ["Backend Development", "API Integration", "Database Design"],
    link: "https://www.linkedin.com/in/marcos-duvan-sanchez-tobar-8b43732b2/",
    visible: true
  },
  {
    id: 5,
    name: "Johnny Stanley",
    role: "Backend Developer - Database Engineering",
    description: "Especialista en arquitectura de bases de datos con PostgreSQL y Supabase, diseño de esquemas optimizados y implementación de consultas complejas.",
    image: "/lovable-uploads/johnny-stanley.jpg",
    skills: ["PostgreSQL", "Supabase", "Database Design", "SQL Optimization", "Data Migration"],
    link: "https://www.linkedin.com/in/johnny-stanley-ortiz-mondragón-18b21937a",
    visible: true
  },
  {
    id: 6,
    name: "Edgar Stiven Garcia Aragon",
    role: "Backend Developer - Auth & Security",
    description: "Desarrollador backend especializado en Supabase Auth, implementación de JWT, desarrollo de Edge Functions y configuración de políticas RLS avanzadas.",
    image: "/lovable-uploads/edgar-garcia.jpg",
    skills: ["Supabase Auth", "JWT", "Edge Functions", "RLS Policies", "API Security"],
    link: "http://www.linkedin.com/in/edgar-stiven-garcia-aragon-50646b378",
    visible: true
  }
];

const Team = () => {
  const visibleMembers = teamMembers.filter(member => member.visible);
  const [teamDialogOpen, setTeamDialogOpen] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Title Section */}
        <div ref={titleRef} className="mb-16">
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              quienes somos
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-8">
              <span className="block text-foreground">nuestro</span>
              <span className="block text-gradient">equipo.</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl">
              Un equipo multidisciplinar de especialistas técnicos comprometidos con la excelencia en cada proyecto.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleMembers.map((member, index) => (
            <a
              key={member.id}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-1000 delay-${index * 100} ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                </div>

                {/* Info */}
                <div>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Skills - Minimal */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill, i) => (
                      <span 
                        key={i}
                        className="text-[0.65rem] tracking-wide text-muted-foreground/70"
                      >
                        {skill}{i < 2 && i < member.skills.slice(0, 3).length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Ver Más Button */}
        <div className={`text-center transition-all duration-1000 delay-600 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <button 
            onClick={() => setTeamDialogOpen(true)}
            className="text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 magnetic flex items-center gap-2 group mx-auto"
          >
            Ver más detalles
            <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-16" />
          </button>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={teamDialogOpen} onOpenChange={setTeamDialogOpen}>
        <TeamDialog />
      </Dialog>
    </section>
  );
};

export default Team;
