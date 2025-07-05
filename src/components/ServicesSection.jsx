
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react';

const ServicesSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Qué ofrecemos',
      subtitle: 'Soluciones fáciles para tu negocio',
      cloudTitle: 'Servicios en la nube',
      cloudDescription: 'En un mundo que necesita de alta disponibilidad la nube es la solución perfecta, pero hay más de un proveedor, nosotros te ayudamos a escoger el mejor para ti, y nos adaptamos si ya usas alguna solución',
      auditTitle: 'Revisión de tu nube',
      auditDescription: 'La seguridad en lo más importante, somos expertos en auditorías en seguridad, dale confianza a tus clientes y aumenta la seguridad de tus sistemas cumpliendo con certificaciones, normas y políticas de seguridad.',
      talentTitle: 'Equipo especializado',
      talentDescription: 'Conectamos tu empresa con profesionales expertos en tecnología.',
      customDevelopmentTitle: 'Proyectos a tu medida',
      customDevelopmentDescription: 'Creamos herramientas adaptadas a lo que tu negocio necesita.',
      legacyMigrationTitle: 'Actualización de tus sistemas antiguos',
      legacyMigrationDescription: 'Llevamos tus aplicaciones actuales a plataformas más sencillas y confiables.',
      bestPracticesTitle: 'Buenas prácticas',
      bestPracticesDescription: 'Te guiamos paso a paso para mejorar tus procesos de desarrollo.',
      principles: 'Por qué elegirnos',
      easy: 'Fácil de usar',
      secure: 'Seguro',
      efficient: 'Eficiente',
      scalable: 'Crece contigo',
      techSouldBe: 'La tecnología debería ser sencilla'
    },
    en: {
      title: 'What We Offer',
      subtitle: 'Simple solutions for your business',
      cloudTitle: 'Cloud Services',
      cloudDescription: 'In a world that needs high availability, the cloud is the perfect solution, but there are more than one provider, we help you choose the best for you, and we adapt if you already use some solution',
      auditTitle: 'Cloud Review',
      auditDescription: 'Security is the most important thing, we are experts in security audits, give confidence to your clients and increase security by complying with certifications, standards and security policies.',
      talentTitle: 'Expert Team',
      talentDescription: 'We connect you with professionals skilled in technology.',
      customDevelopmentTitle: 'Tailored Projects',
      customDevelopmentDescription: 'We build tools designed specifically for your needs.',
      legacyMigrationTitle: 'Updating Your Old Systems',
      legacyMigrationDescription: 'We move your existing apps to simpler, more reliable platforms.',
      bestPracticesTitle: 'Best Practices',
      bestPracticesDescription: 'We guide you step-by-step to improve your development processes.',
      principles: 'Why Choose Us',
      easy: 'Easy to use',
      secure: 'Secure',
      efficient: 'Efficient',
      scalable: 'Grows with you',
      techSouldBe: 'Technology should be simple'
    }
  };

  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Cloud className="w-6 h-6 text-primary mr-2" />
                {t.cloudTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 text-justify">
                {t.cloudDescription}
              </p>
              <div className="flex space-x-4">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AWS</div>
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">GCP</div>
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Azure</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="w-6 h-6 text-primary mr-2" />
                {t.auditTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4 text-justify">{t.auditDescription}</p>
              <div className="flex space-x-4">
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">ISO 27001</div>
                <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">SOC 1/2</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Award className="w-6 h-6 text-primary mr-2" />
                {t.customDevelopmentTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{t.customDevelopmentDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Zap className="w-6 h-6 text-primary mr-2" />
                {t.legacyMigrationTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{t.legacyMigrationDescription}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                {t.bestPracticesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{t.bestPracticesDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">{t.principles}</h3>
          <h3 className="text-xl font-semibold mb-6 italic text-muted-foreground">
            {t.techSouldBe}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/15 border border-primary/30">
              <Cloud className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.easy}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/15 border border-primary/30">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.secure}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/15 border border-primary/30">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.efficient}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/15 border border-primary/30">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.scalable}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
