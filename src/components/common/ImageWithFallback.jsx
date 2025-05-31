import React, { useState } from 'react';

/**
 * Componente de imagen con manejo de errores
 * Muestra una imagen de reemplazo si la original no se puede cargar
 */
const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = "/images/singapore-skyline.jpg", 
  className = "",
  ...props 
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
      className={`img-fluid ${className}`}
      {...props}
    />
  );
};

export default ImageWithFallback;