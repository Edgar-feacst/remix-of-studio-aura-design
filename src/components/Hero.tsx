import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Hero.css';

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrolled / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient-bg" />
      </div>
      
      <div className="hero-particles">
        <div 
          className="hero-particle hero-particle-1"
          style={{ transform: `translateY(${scrollProgress * 200}px)` }}
        />
        <div 
          className="hero-particle hero-particle-2"
          style={{ transform: `translateY(${scrollProgress * -150}px)` }}
        />
        <div 
          className="hero-particle hero-particle-3"
          style={{ transform: `translateY(${scrollProgress * 100}px)` }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 hero-content">
        <div className="max-w-7xl mx-auto">
          <div className={`hero-subtitle ${isVisible ? 'visible' : 'hidden'}`}>
            <p>transformamos ideas en</p>
          </div>

          <h1 className="hero-title">
            <div className={`hero-title-line hero-title-line-1 ${isVisible ? 'visible' : 'hidden'}`}>
              <span className="hero-title-text">experiencias</span>
            </div>
            <div className={`hero-title-line hero-title-line-2 ${isVisible ? 'visible' : 'hidden'}`}>
              <span className="hero-title-text text-gradient">digitales.</span>
            </div>
          </h1>

          <div className="hero-cta-section">
            <div className={`hero-description ${isVisible ? 'visible' : 'hidden'}`}>
              <p className="hero-description-main">Estrategia, diseño y tecnología</p>
              <p className="hero-description-sub">combinadas con velocidad récord</p>
            </div>

            <div className={`hero-buttons ${isVisible ? 'visible' : 'hidden'}`}>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-none magnetic group relative overflow-hidden"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Ver Proyectos</span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-base font-medium rounded-none magnetic"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Servicios
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
