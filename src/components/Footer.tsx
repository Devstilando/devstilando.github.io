
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  language: string;
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    es: {
      company: 'Empresa',
      legal: 'Legal',
      careers: 'Carreras',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      vacancies: 'Vacantes',
      rights: 'Todos los derechos reservados.',
      description: 'Tecnología destilada en su forma más pura'
    },
    en: {
      company: 'Company',
      legal: 'Legal',
      careers: 'Careers',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      vacancies: 'Job Openings',
      rights: 'All rights reserved.',
      description: 'Distilled technology in its purest form'
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/e74031a2-0da2-448a-82a5-7033f4cb58ed.png" alt="Devstilando" className="w-8 h-8" />
              <span className="text-xl font-bold text-gradient">Devstilando</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.about}</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.services}</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.privacy}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.terms}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.careers}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">{t.vacancies}</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Devstilando. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
