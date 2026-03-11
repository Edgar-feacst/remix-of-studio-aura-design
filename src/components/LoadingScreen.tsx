import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import feacLogo from '@/assets/feac-logo.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Después de 2.8s, comenzar la animación de salida
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    // Después de 3.6s, notificar que terminó la carga
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo-container">
          <img 
            src={feacLogo} 
            alt="FEAC Studio Logo" 
            className="loading-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
