
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Shield, Zap, TrendingUp, Users, Award } from 'lucide-react';

interface ServicesSectionProps {
  language: string;
}

const ServicesSection = ({ language }: ServicesSectionProps) => {
  const translations = {
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Especialistas en la nube',
      cloudTitle: 'Cloud Computing',
      cloudDescription: 'Trabajamos con los 3 principales proveedores: AWS, GCP y Azure. Más de 10 años de experiencia en Tecnologías de la Información.',
      auditTitle: 'Auditoría de Cloud',
      auditDescription: 'Colaboramos con otras consultoras como expertos auditores de la nube, asegurando las mejores prácticas y optimización.',
      talentTitle: 'Atracción de Talento',
      talentDescription: 'Ayudamos en la atracción de talento preparado y especializado en tecnologías de la nube.',
      principles: 'Nuestros Principios',
      easy: 'Fácil de usar',
      secure: 'Segura',
      efficient: 'Eficiente',
      scalable: 'Escalable'
    },
    en: {
      title: 'Our Services',
      subtitle: 'Cloud specialists',
      cloudTitle: 'Cloud Computing',
      cloudDescription: 'We work with the 3 main providers: AWS, GCP and Azure. More than 10 years of experience in Information Technologies.',
      auditTitle: 'Cloud Audit',
      auditDescription: 'We collaborate with other consultancies as expert cloud auditors, ensuring best practices and optimization.',
      talentTitle: 'Talent Attraction',
      talentDescription: 'We help in attracting prepared talent specialized in cloud technologies.',
      principles: 'Our Principles',
      easy: 'Easy to use',
      secure: 'Secure',
      efficient: 'Efficient',
      scalable: 'Scalable'
    }
  };

  const t = translations[language as keyof typeof translations];

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
              <p className="text-foreground/80 mb-4">{t.cloudDescription}</p>
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
              <p className="text-foreground/80">{t.auditDescription}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="w-6 h-6 text-primary mr-2" />
                {t.talentTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{t.talentDescription}</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">{t.principles}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/10 border border-primary/20">
              <Cloud className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.easy}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.secure}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/10 border border-primary/20">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <span className="font-medium">{t.efficient}</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary/10 border border-primary/20">
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
