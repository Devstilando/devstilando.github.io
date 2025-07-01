
interface CircularNodeProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  delay?: number;
}

const CircularNode = ({ size = 'md', variant = 'primary', className = '', delay = 0 }: CircularNodeProps) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-purple-500',
    accent: 'bg-pink-500'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        rounded-full 
        animate-pulse-glow 
        glow-effect
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default CircularNode;
