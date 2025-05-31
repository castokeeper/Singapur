import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente de tarjeta para secciones de información
 * Compatible con tema oscuro/claro
 * 
 * @param {string} title - Título de la sección
 * @param {string|React.ReactNode} description - Descripción o contenido
 * @param {React.ReactNode} icon - Icono opcional (puede ser un componente)
 * @param {string} className - Clases adicionales para personalización
 * @param {React.ReactNode} children - Contenido adicional opcional
 */
const SectionCard = ({
  title,
  description,
  icon,
  className = '',
  children,
  ...props
}) => {
  const { isDark } = useTheme();
  
  // Clases CSS según el tema
  const cardClasses = [
    'card',
    'theme-transition',
    'shadow-sm',
    'h-100',
    isDark ? 'border-secondary bg-dark' : 'border-light',
    className
  ].filter(Boolean).join(' ');

  const titleClass = isDark ? 'text-light' : '';
  const textClass = isDark ? 'text-light' : '';
  
  return (
    <div className={cardClasses} {...props}>
      <div className="card-body">
        {icon && (
          <div className={`card-icon mb-3 ${isDark ? 'text-info' : 'text-primary'}`}>
            {icon}
          </div>
        )}
        
        <h5 className={`card-title ${titleClass}`}>{title}</h5>
        
        {typeof description === 'string' ? (
          <p className={`card-text ${textClass}`}>{description}</p>
        ) : (
          <div className={`card-text ${textClass}`}>{description}</div>
        )}
        
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

export default SectionCard;