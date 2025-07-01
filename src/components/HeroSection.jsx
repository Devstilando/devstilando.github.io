
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Zap, TrendingUp } from 'lucide-react';
import CircularNode from './CircularNode';

const HeroSection = ({ language }) => {
  const translations = {
    es: {
      title: 'Tecnología Destilada',
      subtitle: 'En su forma más pura',
      description: 'Transformamos la complejidad tecnológica en soluciones simples, seguras y eficientes. Especialistas en cloud computing con más de 10 años de experiencia.',
      cta: 'Conoce más',
      features: {
        easy: 'Fácil de usar',
        secure: 'Segura',
        efficient: 'Eficiente',
        scalable: 'Escalable'
      }
    },
    en: {
      title: 'Distilled Technology',
      subtitle: 'In its purest form',
      description: 'We transform technological complexity into simple, secure, and efficient solutions. Cloud computing specialists with over 10 years of experience.',
      cta: 'Learn more',
      features: {
        easy: 'Easy to use',
        secure: 'Secure',
        efficient: 'Efficient',
        scalable: 'Scalable'
      }
    }
  };

  const t = translations[language];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dense Node Network - 30+ nodes */}
        <CircularNode size="sm" className="absolute top-10 left-10 animate-float" delay={0} />
        <CircularNode size="md" variant="secondary" className="absolute top-20 right-20 animate-float" delay={0.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-32 left-32 animate-float" delay={1} />
        <CircularNode size="sm" className="absolute top-16 left-64 animate-float" delay={1.5} />
        <CircularNode size="md" variant="primary" className="absolute top-40 right-40 animate-float" delay={2} />
        <CircularNode size="sm" variant="secondary" className="absolute top-24 left-80 animate-float" delay={2.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-60 right-60 animate-float" delay={3} />
        <CircularNode size="md" className="absolute top-44 left-96 animate-float" delay={3.5} />
        <CircularNode size="sm" variant="primary" className="absolute top-72 right-80 animate-float" delay={4} />
        <CircularNode size="md" variant="secondary" className="absolute top-80 left-20 animate-float" delay={4.5} />
        
        <CircularNode size="lg" variant="accent" className="absolute top-96 right-32 animate-float" delay={5} />
        <CircularNode size="sm" className="absolute top-52 left-48 animate-float" delay={5.5} />
        <CircularNode size="md" variant="primary" className="absolute top-64 right-96 animate-float" delay={6} />
        <CircularNode size="sm" variant="secondary" className="absolute top-88 left-72 animate-float" delay={6.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-36 right-48 animate-float" delay={7} />
        <CircularNode size="md" className="absolute top-48 left-24 animate-float" delay={7.5} />
        <CircularNode size="sm" variant="primary" className="absolute top-76 right-72 animate-float" delay={8} />
        <CircularNode size="md" variant="secondary" className="absolute top-84 left-40 animate-float" delay={8.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-28 right-64 animate-float" delay={9} />
        <CircularNode size="sm" className="absolute top-56 left-88 animate-float" delay={9.5} />
        
        <CircularNode size="md" variant="primary" className="absolute top-68 right-24 animate-float" delay={10} />
        <CircularNode size="sm" variant="secondary" className="absolute top-92 left-56 animate-float" delay={10.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-12 right-88 animate-float" delay={11} />
        <CircularNode size="md" className="absolute top-100 left-8 animate-float" delay={11.5} />
        <CircularNode size="sm" variant="primary" className="absolute top-4 right-56 animate-float" delay={12} />
        <CircularNode size="md" variant="secondary" className="absolute top-104 left-64 animate-float" delay={12.5} />
        <CircularNode size="lg" variant="accent" className="absolute top-8 right-8 animate-float" delay={13} />
        <CircularNode size="sm" className="absolute top-108 left-80 animate-float" delay={13.5} />
        <CircularNode size="md" variant="primary" className="absolute top-2 right-40 animate-float" delay={14} />
        <CircularNode size="sm" variant="secondary" className="absolute top-112 left-16 animate-float" delay={14.5} />
        
        {/* Neural Network Connection Lines */}
        <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent transform rotate-45 opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-1 bg-gradient-to-r from-purple-500/70 via-purple-500/50 to-transparent transform -rotate-12 opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 left-32 w-48 h-1 bg-gradient-to-r from-pink-500/70 via-pink-500/50 to-transparent transform rotate-30 opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 right-40 w-36 h-1 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent transform -rotate-45 opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-60 right-60 w-44 h-1 bg-gradient-to-r from-purple-500/70 via-purple-500/50 to-transparent transform rotate-60 opacity-60 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-80 left-20 w-52 h-1 bg-gradient-to-r from-pink-500/70 via-pink-500/50 to-transparent transform -rotate-30 opacity-60 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-96 right-32 w-38 h-1 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent transform rotate-15 opacity-60 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-64 right-96 w-42 h-1 bg-gradient-to-r from-purple-500/70 via-purple-500/50 to-transparent transform -rotate-60 opacity-60 animate-pulse" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-36 right-48 w-34 h-1 bg-gradient-to-r from-pink-500/70 via-pink-500/50 to-transparent transform rotate-75 opacity-60 animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-76 right-72 w-46 h-1 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent transform -rotate-15 opacity-60 animate-pulse" style={{animationDelay: '4.5s'}}></div>
        
        {/* Vertical Connections */}
        <div className="absolute top-24 left-64 w-1 h-32 bg-gradient-to-b from-primary/60 to-transparent opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-44 left-96 w-1 h-28 bg-gradient-to-b from-purple-500/60 to-transparent opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-52 left-48 w-1 h-36 bg-gradient-to-b from-pink-500/60 to-transparent opacity-70 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-68 right-24 w-1 h-24 bg-gradient-to-b from-primary/60 to-transparent opacity-60 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-84 left-40 w-1 h-32 bg-gradient-to-b from-purple-500/60 to-transparent opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Neural Network Circles */}
        <div className="absolute top-20 left-40 w-24 h-24 border-2 border-primary/40 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 right-80 w-32 h-32 border-2 border-purple-500/40 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-80 left-60 w-28 h-28 border-2 border-pink-500/40 rounded-full animate-pulse opacity-70" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-primary/50 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-100 left-80 w-36 h-36 border-2 border-purple-500/30 rounded-full animate-pulse opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-16 right-60 w-26 h-26 border-2 border-pink-500/50 rounded-full animate-pulse opacity-70" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-88 left-24 w-30 h-30 border-2 border-primary/40 rounded-full animate-pulse opacity-60" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-72 right-40 w-22 h-22 border-2 border-purple-500/50 rounded-full animate-pulse opacity-80" style={{animationDelay: '4.5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-14 left-14 w-16 h-16 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-14 right-14 w-20 h-20 bg-gradient-radial from-purple-500/20 to-transparent rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-14 w-12 h-12 bg-gradient-radial from-pink-500/20 to-transparent rounded-full animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/2 right-14 w-24 h-24 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse opacity-50" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e74031a2-0da2-448a-82a5-7033f4cb58ed.png" 
              alt="Devstilando Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">{t.title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">{t.features.secure}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">{t.features.efficient}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <TrendingUp className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">{t.features.scalable}</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Cloud className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium">{t.features.easy}</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
            onClick={scrollToAbout}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
