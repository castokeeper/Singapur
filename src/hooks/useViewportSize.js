import { useState, useEffect } from 'react';

const useViewportSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [device, setDevice] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      
      // Determinar tipo de dispositivo
      if (window.innerWidth < 576) {
        setDevice('mobile');
      } else if (window.innerWidth < 992) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar una vez al inicio
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height, device };
};

export default useViewportSize;