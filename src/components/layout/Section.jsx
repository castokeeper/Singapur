import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Section = ({ 
  id, 
  title, 
  subtitle,
  paragraph, 
  icon, 
  accent = 'blue',
  children 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const accentColors = {
    blue: 'text-blue-600 border-blue-500',
    green: 'text-green-600 border-green-500',
    red: 'text-red-600 border-red-500',
    teal: 'text-teal-600 border-teal-500',
    purple: 'text-purple-600 border-purple-500'
  };

  const iconComponents = {
    'language': <i className="fas fa-language text-2xl"></i>,
    'currency-dollar': <i className="fas fa-dollar-sign text-2xl"></i>,
    'calendar-event': <i className="fas fa-calendar-alt text-2xl"></i>,
    'building-skyscraper': <i className="fas fa-city text-2xl"></i>,
    'book': <i className="fas fa-book text-2xl"></i>,
  };

  return (
    <section 
      id={id} 
      className={`py-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={ref}
    >
      <div className="mb-8 flex items-center">
        {icon && (
          <div className={`mr-4 p-3 rounded-full bg-white shadow-md ${accentColors[accent]}`}>
            {iconComponents[icon] || <i className="fas fa-info-circle text-2xl"></i>}
          </div>
        )}
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>
      </div>
      
      {paragraph && (
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">{paragraph}</p>
      )}
      
      {children}
    </section>
  );
};

export default Section;