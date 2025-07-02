
import { Card, CardContent } from '@/components/ui/card';
import { User, Target, Lightbulb } from 'lucide-react';

const AboutSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestra Historia',
      subtitle: 'Nacemos de la experiencia',
      description: 'Devstilando nace de la experiencia con varios clientes a través de los años. Nuestra visión es que no debería haber clientes que tengan una mala experiencia por desconocimiento de la tecnología.',
      philosophy: 'Nuestra Filosofía',
      philosophyDescription: 'La tecnología debe ser sencilla de usar y de desarrollar. Por esto, Devstilando surge de esa necesidad, acercando a todo tipo de clientes la tecnología destilada, en su forma más pura.',
      mission: 'Nuestra Misión',
      missionDescription: 'Eliminar las barreras tecnológicas y hacer que la innovación sea accesible para todos.'
    },
    en: {
      title: 'Our Story',
      subtitle: 'Born from experience',
      description: 'Devstilando was born from experience with various clients over the years. Our vision is that there should be no clients who have a bad experience due to lack of knowledge about technology.',
      philosophy: 'Our Philosophy',
      philosophyDescription: 'Technology should be simple to use and develop. This is why Devstilando emerges from that need, bringing distilled technology in its purest form to all types of clients.',
      mission: 'Our Mission',
      missionDescription: 'Remove technological barriers and make innovation accessible to everyone.'
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="text-center mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Target className="w-6 h-6 text-primary mr-2" />
                {t.philosophy}
              </h3>
              <p className="text-foreground/80">
                {t.philosophyDescription}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t.mission}</h3>
                    <p className="text-foreground/80">{t.missionDescription}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
