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
  const captionClass = isDark ? 'text-secondary' : 'text-muted';
  
  return (
    <blockquote className={`blockquote p-3 p-md-4 border-${variant} ${borderClass}`}>
      <p className={`fs-5 mb-2 ${isDark ? 'text-light' : ''}`}>
        {text}
      </p>
      <footer className={`blockquote-footer ${isDark ? 'text-light opacity-75' : ''}`}>
        <cite title={author}>{author}</cite>
        {citation && <span className={`ms-2 ${captionClass}`}>({citation})</span>}
      </footer>
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