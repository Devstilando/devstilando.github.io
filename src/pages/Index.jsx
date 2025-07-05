
import { useState, useEffect } from 'react';
import NavigationMenu from '@/components/NavigationMenu';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const translations = {
  en: {
    messageSentSuccess: "Your message was sent! We'll reach out shortly",
  },
  es: {
    messageSentSuccess: "¡Mensaje enviado! Te contactaremos pronto",
  },
};

const Index = () => {
  const [language, setLanguage] = useState('es');
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const t = translations[language];

    if (searchParams.get("messageSent") === "success") {
      toast({
        title: t.messageSentSuccess
      });
      navigate("/");
    }
  }, [searchParams, toast, language, navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationMenu language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <ExperienceSection language={language} />
      <ClientsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
