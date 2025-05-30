import { useState, useEffect, useRef } from 'react';

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport
 * @param {Object} options - Opciones de configuración del IntersectionObserver
 * @param {Boolean} freezeOnceVisible - Si es true, una vez que el elemento es visible, el observer se desconecta
 * @returns {Array} - [ref, isVisible]
 */
const useIntersectionObserver = (
  options = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
  },
  freezeOnceVisible = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementVisible = entry.isIntersecting;
      
      setIsVisible(isElementVisible);
      
      // Si el elemento ya es visible y queremos "congelar" ese estado, desconectamos
      if (isElementVisible && freezeOnceVisible) {
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, freezeOnceVisible]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;