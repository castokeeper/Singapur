import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente de imagen con fallback automático
 * @param {string} src - URL de la imagen principal
 * @param {string} alt - Texto alternativo
 * @param {string} fallbackSrc - URL de imagen de respaldo
 * @param {string} className - Clases CSS adicionales
 */
const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = getAssetPath("/images/placeholder.jpg"), 
  className = "",
  ...props 
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <img 
      src={error ? fallbackSrc : src}
      alt={alt || 'Imagen'}
      className={`image-with-fallback ${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onError={handleError}
      onLoad={handleLoad}
      style={{ transition: 'opacity 0.3s ease' }}
      {...props}
    />
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallbackSrc: PropTypes.string,
  className: PropTypes.string
};

export default ImageWithFallback;