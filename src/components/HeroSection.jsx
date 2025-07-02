
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Zap, TrendingUp } from 'lucide-react';
import CircularNode from './CircularNode';
import { useState, useEffect, useRef } from 'react';

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

  // Number of nodes
  const NODE_COUNT = 50;

  // Ref for animation frame
  const animationRef = useRef();

  // State for nodes positions
  const [nodes, setNodes] = useState(() => {
    // Initialize nodes with random parameters for elliptical movement
    const initialNodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      initialNodes.push({
        // Center position in percentage of container width/height
        cx: Math.random() * 100,
        cy: Math.random() * 100,
        // Radii for ellipse in percentage
        rx: 5 + Math.random() * 10,
        ry: 3 + Math.random() * 7,
        // Speed of movement (radians per frame)
        speed: 0.01 + Math.random() * 0.02,
        // Initial angle
        angle: Math.random() * 2 * Math.PI,
        // Size variant randomly chosen
        size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)],
        // Variant randomly chosen
        variant: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)],
      });
    }
    return initialNodes;
  });

  useEffect(() => {
    const animate = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newAngle = node.angle + node.speed;
          if (newAngle > 2 * Math.PI) newAngle -= 2 * Math.PI;
          return { ...node, angle: newAngle };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-devstilando-950/20">
      {/* Animated Background Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {nodes.map((node, index) => {
          // Calculate position based on elliptical movement
          const left = node.cx + node.rx * Math.cos(node.angle);
          const top = node.cy + node.ry * Math.sin(node.angle);
          return (
            <CircularNode
              key={index}
              size={node.size}
              variant={node.variant}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}

        {/* Connection Lines */}
        
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e74031a2-0da2-448a-82a5-7033f4cb58ed.png" 
              alt="Devstilando Logo" 
              className="w-24 h-24 mx-auto mb-6 animate-float rounded-full border-0"
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
