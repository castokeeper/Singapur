import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Timeline = ({ events, title, variant = "primary", device = "desktop" }) => {
  const { isDark } = useTheme();
  
  // Determinar las clases de color según la variante y el tema
  const getVariantClass = () => {
    const baseClass = isDark ? "border-" : "border-";
    switch (variant) {
      case "primary": return baseClass + "primary";
      case "info": return baseClass + "info";
      case "success": return baseClass + "success";
      case "warning": return baseClass + "warning";
      case "danger": return baseClass + "danger";
      default: return baseClass + "primary";
    }
  };

  // Clases condicionales para el tema
  const timelineClass = `timeline ${getVariantClass()} ${isDark ? 'timeline-dark' : ''}`;
  
  return (
    <div className={`timeline-container mb-4 ${timelineClass}`}>
      {title && <h3 className={`${device === 'mobile' ? 'h4' : 'h3'} mb-4 ${isDark ? 'text-light' : ''}`}>{title}</h3>}
      
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`timeline-item ${event.importance === 'high' ? 'border-' + variant : ''}`}
          style={{ 
            paddingLeft: device === 'mobile' ? '1.5rem' : '2rem',
            marginBottom: device === 'mobile' ? '1.5rem' : '2rem'
          }}
        >
          <div className={`timeline-badge bg-${variant} ${event.importance === 'high' ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
            {event.year}
          </div>
          <h4 className={`h5 ${isDark ? 'text-light' : ''}`}>{event.title}</h4>
          <p className={`${isDark ? 'text-light' : ''} ${device === 'mobile' ? 'small' : ''}`}>
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;