
import { Card, CardContent } from '@/components/ui/card';
import { Award, Calendar, Users, Target } from 'lucide-react';

const ExperienceSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestra Experiencia',
      subtitle: 'Más de una década transformando empresas',
      experience: '10+ Años',
      experienceDesc: 'de experiencia en TI',
      clients: 'Múltiples',
      clientsDesc: 'clientes satisfechos',
      partnerships: 'Colaboraciones',
      partnershipsDesc: 'con consultoras líderes',
      expertise: 'Especialización',
      expertiseDesc: 'en tecnologías cloud'
    },
    en: {
      title: 'Our Experience',
      subtitle: 'More than a decade transforming companies',
      experience: '10+ Years',
      experienceDesc: 'of IT experience',
      clients: 'Multiple',
      clientsDesc: 'satisfied clients',
      partnerships: 'Partnerships',
      partnershipsDesc: 'with leading consultancies',
      expertise: 'Specialization',
      expertiseDesc: 'in cloud technologies'
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
