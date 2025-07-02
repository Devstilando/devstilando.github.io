import PropTypes from 'prop-types';

const sizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
};

const variantClasses = {
  primary: 'bg-primary',
  secondary: 'bg-purple-500',
  accent: 'bg-pink-500',
};

const CircularNode = ({
  size = 'md',
  variant = 'primary',
  className = '',
  delay = 0,
  style = {},
}) => (
  <div
    className={`
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      rounded-full
      animate-pulse-glow
      glow-effect
      ${className}
    `}
    style={{ animationDelay: `${delay}s`, ...style }}
  />
);

CircularNode.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent']),
  className: PropTypes.string,
  delay: PropTypes.number,
};

export default CircularNode;
