import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar si una media query coincide con el tamaño de pantalla actual
 * @param {string} query - Media query CSS (ej: '(max-width: 768px)')
 * @returns {boolean} - Retorna true si la media query coincide, false en caso contrario
 */
const useMediaQuery = (query) => {
  // Estado inicial basado en si la media query coincide al cargar el componente
  const getMatches = (mediaQuery) => {
    // Verificar que window está disponible (para SSR)
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  // Efecto para manejar cambios en la media query
  useEffect(() => {
    // Función para actualizar el estado
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    // Registrar el listener para cambios de tamaño
    const mediaQueryList = window.matchMedia(query);
    
    // Verificar el método apropiado (addEventListener es el estándar moderno)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      // Fallback para navegadores antiguos
      mediaQueryList.addListener(handleChange);
    }

    // Ejecutar una vez para establecer el valor inicial
    handleChange();

    // Limpieza al desmontar
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        // Fallback para navegadores antiguos
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;