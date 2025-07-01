
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';

const ClientsSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Nuestros Clientes',
      subtitle: 'Empresas que confían en nosotros',
      placeholder: 'Logo del cliente',
      note: 'Sección preparada para agregar logos de clientes'
    },
    en: {
      title: 'Our Clients',
      subtitle: 'Companies that trust us',
      placeholder: 'Client logo',
      note: 'Section ready to add client logos'
    }
  };

  const t = translations[language];

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

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center text-xl">
              <Building className="w-6 h-6 text-primary mr-2" />
              {t.note}
            </CardTitle>
          </CardHeader>
          <CardContent className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-24 bg-muted/20 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="text-center">
                    <Building className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">{t.placeholder} {index}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientsSection;
