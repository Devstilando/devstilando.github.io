
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-primary mb-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.6h-5V8z" />
  </svg>
);

const ContactSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Contacto',
      subtitle: 'Comencemos a transformar tu tecnología',
      email: 'Correo Electrónico',
      linkedin: 'LinkedIn',
      location: 'Ubicación',
      cta: 'Enviar Correo',
      ctaDescription: 'Contáctanos para una consulta gratuita'
    },
    en: {
      title: 'Contact',
      subtitle: 'Let\'s start transforming your technology',
      email: 'Email',
      linkedin: 'LinkedIn',
      location: 'Location',
      cta: 'Send E-mail',
      ctaDescription: 'Contact us for a free consultation'
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-devstilando-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-primary mb-2" />
                    {t.email}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contacto@devstilando.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <LinkedInIcon />
                  {t.linkedin}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/company/devstilando"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:underline"
                >
                  /devstilando
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  {t.location}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">CDMX, México</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">{t.ctaDescription}</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
              onClick={() => window.open('mailto:contacto@devstilando.com', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
