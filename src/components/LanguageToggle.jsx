
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = ({ onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('es')) {
      setDetectedLanguage('es');
      onLanguageChange('es');
    } else {
      setDetectedLanguage('en');
      onLanguageChange('en');
    }
  }, [onLanguageChange]);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-background/50 backdrop-blur-sm"
      >
        <Globe size={16} />
        {detectedLanguage === 'es' ? 'ES' : 'EN'}
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background/90 backdrop-blur-sm border rounded-md shadow-lg z-50">
          <button
            onClick={() => {
              setDetectedLanguage('es');
              onLanguageChange('es');
              setIsOpen(false);
            }}
            className="block w-full px-4 py-2 text-left hover:bg-accent/50 transition-colors"
          >
            Español
          </button>
          <button
            onClick={() => {
              setDetectedLanguage('en');
              onLanguageChange('en');
              setIsOpen(false);
            }}
            className="block w-full px-4 py-2 text-left hover:bg-accent/50 transition-colors"
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
