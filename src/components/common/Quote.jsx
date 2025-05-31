import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente para mostrar citas textuales con autor y cita bibliográfica opcional
 */
const Quote = ({ 
  text, 
  author, 
  citation, 
  variant = 'primary',
  className = '' 
}) => {
  // Mapeo de variantes a colores de Bootstrap
  const variantClasses = {
    primary: 'border-primary bg-primary bg-opacity-10',
    success: 'border-success bg-success bg-opacity-10',
    warning: 'border-warning bg-warning bg-opacity-10',
    danger: 'border-danger bg-danger bg-opacity-10',
    info: 'border-info bg-info bg-opacity-10'
  };
  
  const borderClass = variantClasses[variant] || variantClasses.primary;

  return (
    <blockquote 
      className={`card border-start border-4 ${borderClass} mb-4 ${className}`}
    >
      <div className="card-body py-3">
        <p className="fs-5 fst-italic mb-3">{text}</p>
        <footer className="d-flex justify-content-between align-items-center">
          <cite className="fw-medium">
            — {author}
          </cite>
          
          {citation && (
            <span 
              className="text-primary small" 
              title="Ver referencia"
            >
              [cite: {citation}]
            </span>
          )}
        </footer>
      </div>
    </blockquote>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  citation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info']),
  className: PropTypes.string
};

export default Quote;