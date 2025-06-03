import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

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
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  
  const accentColors = {
    blue: 'text-blue-600 border-blue-500',
    green: 'text-green-600 border-green-500',
    red: 'text-red-600 border-red-500',
    teal: 'text-teal-600 border-teal-500',
    purple: 'text-purple-600 border-purple-500',
    yellow: 'text-yellow-600 border-yellow-500',
    orange: 'text-orange-600 border-orange-500'
  };

  const iconComponents = {
    'language': <i className="fas fa-language text-2xl"></i>,
    'currency-dollar': <i className="fas fa-dollar-sign text-2xl"></i>,
    'calendar-event': <i className="fas fa-calendar-alt text-2xl"></i>,
    'building-skyscraper': <i className="fas fa-city text-2xl"></i>,
    'book': <i className="fas fa-book text-2xl"></i>,
  };

  // Clases adaptadas al tema oscuro/claro
  const textColorClass = isDark ? 'text-white' : 'text-gray-900';
  const subtitleColorClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const paragraphColorClass = isDark ? 'text-gray-200' : 'text-gray-700';
  const iconBgClass = isDark ? 'bg-gray-800' : 'bg-white';

  return (
    <section 
      id={id} 
      className={`py-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={ref}
      aria-labelledby={`${id}-title`}
      lang={isEnglish ? 'en' : 'es'}
    >
      <div className="mb-8 flex items-center">
        {icon && (
          <div className={`mr-4 p-3 rounded-full ${iconBgClass} shadow-md ${accentColors[accent]}`}>
            {iconComponents[icon] || <i className="fas fa-info-circle text-2xl"></i>}
          </div>
        )}
        <div>
          <h2 
            id={`${id}-title`} 
            className={`text-3xl font-bold ${textColorClass}`}
          >
            {title}
          </h2>
          {subtitle && <p className={`text-xl ${subtitleColorClass}`}>{subtitle}</p>}
        </div>
      </div>
      
      {paragraph && (
        <p className={`text-lg ${paragraphColorClass} mb-8 max-w-4xl`}>{paragraph}</p>
      )}
      
      {children}
    </section>
  );
};

export default Section;