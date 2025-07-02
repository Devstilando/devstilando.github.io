
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Upload } from 'lucide-react';

const ClientsSection = ({ language }) => {
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

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {/* Aquí puedes agregar las imágenes pequeñas de los clientes */}
          <div className="flex items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
            <img src="/images/bbva.png" alt="Cliente 1" className="mx-auto max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
            <img src="/images/minu.png" alt="Cliente 2" className="mx-auto max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
            <img src="/images/traxi.svg" alt="Cliente 3" className="mx-auto max-h-12" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
            <img src="/images/reddot.png" alt="Cliente 4" className="mx-auto max-h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
