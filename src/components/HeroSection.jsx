
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-devstilando-950/20">
      {/* Enhanced Animated Background Nodes with More Connections */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Nodes */}
        <CircularNode size="sm" className="absolute top-20 left-20 animate-float" delay={0} />
        <CircularNode size="md" variant="secondary" className="absolute top-40 right-32 animate-float" delay={1} />
        <CircularNode size="lg" variant="accent" className="absolute bottom-40 left-16 animate-float" delay={2} />
        <CircularNode size="md" className="absolute bottom-20 right-20 animate-float" delay={0.5} />
        <CircularNode size="sm" variant="secondary" className="absolute top-1/2 left-1/3 animate-float" delay={1.5} />
        
        {/* Additional Nodes for More Texture */}
        <CircularNode size="sm" variant="accent" className="absolute top-32 right-16 animate-float" delay={2.5} />
        <CircularNode size="md" variant="primary" className="absolute top-60 left-1/2 animate-float" delay={3} />
        <CircularNode size="sm" className="absolute bottom-32 left-1/4 animate-float" delay={1.2} />
        <CircularNode size="lg" variant="secondary" className="absolute top-1/3 right-1/4 animate-float" delay={0.8} />
        <CircularNode size="sm" variant="accent" className="absolute bottom-60 right-1/3 animate-float" delay={2.2} />
        
        {/* Enhanced Connection Lines - More Visible and Varied */}
        <div className="absolute top-20 left-20 w-48 h-1 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent transform rotate-45 opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-1 bg-gradient-to-r from-purple-500/60 via-purple-500/40 to-transparent transform -rotate-12 opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-16 w-56 h-1 bg-gradient-to-r from-pink-500/60 via-pink-500/40 to-transparent transform rotate-12 opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-1 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent transform -rotate-45 opacity-40 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-32 right-16 w-36 h-1 bg-gradient-to-r from-pink-500/60 via-pink-500/40 to-transparent transform rotate-30 opacity-50 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-44 h-1 bg-gradient-to-r from-purple-500/60 via-purple-500/40 to-transparent transform -rotate-20 opacity-40 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        {/* Circular Connection Arcs - More Visible */}
        <div className="absolute top-40 left-40 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 border-2 border-purple-500/30 rounded-full animate-pulse opacity-50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-pink-500/30 rounded-full animate-pulse opacity-70 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-20 right-1/3 w-20 h-20 border-2 border-primary/40 rounded-full animate-pulse opacity-40" style={{animationDelay: '3s'}}></div>
        
        {/* Dotted Connection Paths */}
        <div className="absolute top-24 left-24 w-0.5 h-32 bg-gradient-to-b from-primary/40 to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-0.5 h-28 bg-gradient-to-t from-purple-500/40 to-transparent opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-0.5 bg-gradient-to-r from-pink-500/40 to-transparent opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
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
