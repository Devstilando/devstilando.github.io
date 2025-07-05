import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';

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
      title: 'Contáctanos',
      subtitle: '¿Tienes preguntas? Escríbenos',
      email: 'Correo electrónico',
      linkedin: 'LinkedIn',
      location: 'Ubicación',
      cta: 'Enviar mensaje',
      ctaDescription: 'Estamos aquí para ayudarte',
      formEmail: 'Tu correo',
      formMessage: 'Tu mensaje'
    },
    en: {
      title: 'Get in Touch',
      subtitle: 'Have questions? Drop us a message',
      email: 'Email',
      linkedin: 'LinkedIn',
      location: 'Location',
      cta: 'Send Message',
      ctaDescription: 'We’re here to help',
      formEmail: 'Your email',
      formMessage: 'Your message'
    }
  };

  const t = translations[language];
  const formRef = useRef(null);

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
        </div>
        <div className="flex justify-center">
          <form
            action="https://formsubmit.co/contacto@devstilando.com"
            method="POST"
            className="w-full max-w-md"
            ref={formRef}
          >
            <input
              type="hidden"
              name="_subject"
              value="Contacto devstilando.com"
            />
            <div className="mb-4">
              <label
                className="block text-gray-200 text-sm mb-2"
                htmlFor="email"
              >
                {t.formEmail}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder={t.formEmail}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-200 text-sm mb-2"
                htmlFor="message"
              >
                {t.formMessage}
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder={t.formMessage}
                rows="4"
                required
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://devstilando.com/?messageSent=success" />
            </div>
            <div className="flex items-center justify-between">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={() => {

                  formRef.current?.checkValidity() && formRef.current.submit();
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                {t.cta}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
