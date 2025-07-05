
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar, Users, Target } from 'lucide-react';

const ExperienceSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestra trayectoria',
      subtitle: 'Más de 10 años ayudando a negocios',
      experience: '10+ años',
      experienceDesc: 'ayudando a tu negocio',
      clients: 'Clientes satisfechos',
      clientsDesc: 'empresas felices con nuestro servicio',
      partnerships: 'Alianzas',
      partnershipsDesc: 'con socios estratégicos',
      expertise: 'Especialidad',
      expertiseDesc: 'soluciones en la nube'
    },
    en: {
      title: 'Our Journey',
      subtitle: 'Over 10 years supporting businesses',
      experience: '10+ years',
      experienceDesc: 'helping your business',
      clients: 'Happy Clients',
      clientsDesc: 'businesses delighted with our service',
      partnerships: 'Partnerships',
      partnershipsDesc: 'with strategic partners',
      expertise: 'What We Specialize In',
      expertiseDesc: 'cloud solutions'
    }
  };

  const t = translations[language];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-devstilando-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.experience}</h3>
              <p className="text-muted-foreground">{t.experienceDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.clients}</h3>
              <p className="text-muted-foreground">{t.clientsDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.partnerships}</h3>
              <p className="text-muted-foreground">{t.partnershipsDesc}</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center">
            <CardContent className="p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t.expertise}</h3>
              <p className="text-muted-foreground">{t.expertiseDesc}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
