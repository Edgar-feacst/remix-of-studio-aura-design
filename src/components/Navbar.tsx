import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import AboutDialog from './AboutDialog';
import ContactDialog from './ContactDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import feacLogo from '@/assets/feac-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: "portfolio", href: "#portfolio" },
    { text: "servicios", href: "#services" },
    { text: "equipo", href: "#team" },
    { text: "contacto", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="navbar-container container">
          <div className="flex items-center">
            <a href="#home" className="group flex items-center gap-3">
              <img 
                src={feacLogo} 
                alt="FEAC Studio" 
                className="navbar-logo-img"
              />
              <h1 className="navbar-logo">
                <span className="navbar-logo-text">FEAC</span>
                <span className="navbar-logo-dot">.</span>
              </h1>
            </a>
          </div>

          {!isMobile ? (
            <div className="navbar-desktop">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="navbar-link">
                  {link.text}
                  <span className="navbar-link-underline" />
                </a>
              ))}
              
              <button 
                onClick={() => setAboutDialogOpen(true)}
                className="navbar-about-btn magnetic"
              >
                nosotros
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="navbar-mobile-toggle magnetic"
                aria-label="Toggle menu"
              >
                <div className="navbar-mobile-toggle-lines">
                  <span className={`navbar-mobile-toggle-line navbar-mobile-toggle-line-1 ${menuOpen ? 'open' : ''}`} />
                  <span className={`navbar-mobile-toggle-line navbar-mobile-toggle-line-2 ${menuOpen ? 'open' : ''}`} />
                  <span className={`navbar-mobile-toggle-line navbar-mobile-toggle-line-3 ${menuOpen ? 'open' : ''}`} />
                </div>
              </button>

              {menuOpen && (
                <div className="navbar-mobile-menu">
                  <div className="navbar-mobile-links">
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="navbar-mobile-link"
                        onClick={() => setMenuOpen(false)}
                        style={{ animation: `text-reveal 0.8s ease-out ${index * 0.1}s both` }}
                      >
                        {link.text}
                      </a>
                    ))}
                    
                    <button 
                      onClick={() => {
                        setAboutDialogOpen(true);
                        setMenuOpen(false);
                      }}
                      className="navbar-mobile-about"
                      style={{ animation: `text-reveal 0.8s ease-out ${navLinks.length * 0.1}s both` }}
                    >
                      nosotros
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </nav>

      {/* Dialogs */}
      <Dialog open={aboutDialogOpen} onOpenChange={setAboutDialogOpen}>
        <AboutDialog />
      </Dialog>

      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <ContactDialog />
      </Dialog>
    </>
  );
};

export default Navbar;