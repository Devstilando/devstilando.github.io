
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

const NavigationMenu = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    es: {
      about: 'Sobre nosotros',
      services: 'Soluciones',
      experience: 'Nuestra trayectoria',
      clients: 'Clientes',
      contact: 'Contacto'
    },
    en: {
      about: 'About Us',
      services: 'What We Offer',
      experience: 'Our Journey',
      clients: 'Our Clients',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/e74031a2-0da2-448a-82a5-7033f4cb58ed.png" alt="Devstilando" className="w-8 h-8" />
            <span className="text-xl font-bold text-gradient">Devstilando</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">{t.about}</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">{t.services}</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">{t.experience}</button>
            <button onClick={() => scrollToSection('clients')} className="hover:text-primary transition-colors">{t.clients}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">{t.contact}</button>
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">{t.about}</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">{t.services}</button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-primary transition-colors">{t.experience}</button>
              <button onClick={() => scrollToSection('clients')} className="text-left hover:text-primary transition-colors">{t.clients}</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">{t.contact}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;
