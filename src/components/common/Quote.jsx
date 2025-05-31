import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente para mostrar citas
 * Compatible con tema oscuro/claro
 */
const Quote = ({ text, author, citation, variant = 'primary' }) => {
  const { isDark } = useTheme();
  
  // Ajustar variante para modo oscuro si es necesario
  const quoteVariant = isDark && variant === 'warning' ? 'info' : variant;
  const borderClass = `border-${quoteVariant}`;
  const textClass = isDark ? 'text-light' : '';
  const captionClass = isDark ? 'text-secondary' : 'text-muted';
  
  return (
    <blockquote className={`blockquote p-4 border-start border-5 ${borderClass} bg-opacity-10 bg-${quoteVariant} rounded theme-transition mb-4`}>
      <p className={textClass}>{text}</p>
      {author && (
        <footer className={`blockquote-footer mt-2 ${isDark ? 'text-secondary' : ''}`}>
          {author}
          {citation && <span className={captionClass}> [cite: {citation}]</span>}
        </footer>
      )}
    </blockquote>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  citation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string
};

export default Quote;