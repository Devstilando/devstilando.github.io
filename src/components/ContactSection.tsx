
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  language: string;
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const translations = {
    es: {
      title: 'Contacto',
      subtitle: 'Comencemos a transformar tu tecnología',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      location: 'Ubicación',
      cta: 'Enviar Mensaje',
      ctaDescription: 'Contáctanos para una consulta gratuita'
    },
    en: {
      title: 'Contact',
      subtitle: 'Let\'s start transforming your technology',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      cta: 'Send Message',
      ctaDescription: 'Contact us for a free consultation'
    }
  };

  const t = translations[language as keyof typeof translations];

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
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  {t.phone}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+52 (555) 123-4567</p>
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
                <p className="text-muted-foreground">México</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">{t.ctaDescription}</p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
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
