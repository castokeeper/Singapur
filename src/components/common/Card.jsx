import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Card = ({ 
  title, 
  text, 
  imageSrc, 
  imageAlt, 
  citation,
  onClick,
  className = '',
  imageClassName = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} 
        hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className={`w-full h-full object-cover ${imageClassName}`}
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{text}</p>
        
        {citation && (
          <div className="mt-3 text-right">
            <span className="text-sm text-blue-500 cursor-help hover:underline" title="Ver referencia">
              [cite: {citation}]
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;