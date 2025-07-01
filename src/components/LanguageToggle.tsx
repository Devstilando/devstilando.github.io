
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-background/50 backdrop-blur-sm"
      >
        <Globe size={16} />
        {currentLanguage === 'es' ? 'ES' : 'EN'}
      </Button>
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background/90 backdrop-blur-sm border rounded-md shadow-lg z-50">
          <button
            onClick={() => {
              onLanguageChange('es');
              setIsOpen(false);
            }}
            className="block w-full px-4 py-2 text-left hover:bg-accent/50 transition-colors"
          >
            Español
          </button>
          <button
            onClick={() => {
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
