import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';

/**
 * Página principal del sitio
 * 
 * Estructura del sitio:
 * 1. CustomCursor - Cursor personalizado
 * 2. Navbar - Navegación principal
 * 3. Hero - Sección principal de bienvenida
 * 4. Portfolio - Muestra de proyectos filtrable
 * 5. Services - Servicios ofrecidos
 * 6. Team - Sección del equipo
 * 7. Footer - Pie de página con información de contacto
 */
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeño delay antes de mostrar el contenido
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div 
        className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CustomCursor />
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Index;
