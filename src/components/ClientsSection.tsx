
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Upload } from 'lucide-react';

interface ClientsSectionProps {
  language: string;
}

const ClientsSection = ({ language }: ClientsSectionProps) => {
  const translations = {
    es: {
      title: 'Nuestros Clientes',
      subtitle: 'Empresas que confían en nosotros',
      placeholder: 'Aquí se mostrarán los logos de nuestros clientes',
      uploadNote: 'Sección preparada para agregar imágenes de clientes'
    },
    en: {
      title: 'Our Clients',
      subtitle: 'Companies that trust us',
      placeholder: 'Client logos will be displayed here',
      uploadNote: 'Section ready to add client images'
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-devstilando-950/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 border-dashed">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center text-xl">
              <Building className="w-6 h-6 text-primary mr-2" />
              {t.uploadNote}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">{t.placeholder}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientsSection;
