import { useEffect, useState } from 'react';

const Image = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState('');
  
  useEffect(() => {
    // Intenta primero cargar desde la ruta base
    const basePath = import.meta.env.BASE_URL || '/';
    // Elimina cualquier / inicial del src para evitar dobles slashes
    const cleanSrc = src.startsWith('/') ? src.substring(1) : src;
    setImgSrc(`${basePath}${cleanSrc}`);
  }, [src]);

  return <img src={imgSrc} alt={alt} {...props} />;
};

export default Image;