import React from 'react';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog from './ContactDialog';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-32 pb-12 relative overflow-hidden border-t border-foreground/10">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Large Text Section */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-8">
              <span className="block text-foreground">hablemos de</span>
              <span className="block text-gradient">tu proyecto.</span>
            </h2>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors duration-300 magnetic flex items-center gap-2 group mt-8">
                  Contactar
                  <span className="w-8 h-[1px] bg-primary transition-all duration-300 group-hover:w-16" />
                </button>
              </DialogTrigger>
              <ContactDialog />
            </Dialog>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">
            {/* Navigation */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Navegación</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    Portafolio
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    Equipo
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Social</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.instagram.com/feac_studio?igsh=MWtyN28wems5M2hlZg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div>
              <h1 className="text-xl font-heading font-bold tracking-tight">
                <span className="text-foreground">FEAC</span>
                <span className="text-primary">.</span>
              </h1>
            </div>

            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              <p>&copy; 2024 FEAC Studio.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
