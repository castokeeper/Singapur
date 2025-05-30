import React from 'react';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Componente para mostrar citas textuales con autor y cita bibliográfica opcional
 */
const Quote = ({ 
  text, 
  author, 
  citation, 
  variant = 'default',
  className = '' 
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Variantes de estilo
  const variantStyles = {
    default: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700',
    success: 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-700',
    warning: 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700',
    danger: 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-700',
    info: 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 dark:border-teal-700',
  };
  
  const style = variantStyles[variant] || variantStyles.default;

  return (
    <blockquote 
      ref={ref}
      className={`
        p-6 border-l-4 rounded-r-lg transition-all duration-700
        ${style}
        ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}
        ${className}
      `}
    >
      <p className="text-lg italic mb-3 font-light">{text}</p>
      <footer className="flex justify-between items-center">
        <cite className="font-medium text-gray-700 dark:text-gray-300">
          — {author}
        </cite>
        
        {citation && (
          <span 
            className="text-sm text-blue-600 dark:text-blue-400 cursor-help hover:underline" 
            title="Ver referencia"
          >
            [cite: {citation}]
          </span>
        )}
      </footer>
    </blockquote>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  citation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),
  className: PropTypes.string
};

export default Quote;