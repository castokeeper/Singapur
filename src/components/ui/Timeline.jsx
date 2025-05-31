import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente Timeline para mostrar eventos cronológicos
 * Compatible con tema oscuro/claro
 * 
 * @param {Array} events - Array de eventos para mostrar en la línea del tiempo
 * @param {String} title - Título opcional para la línea del tiempo
 * @param {String} variant - Variante de color para la línea y los puntos
 * @param {String} className - Clases adicionales
 */
const Timeline = ({ 
  events = [], 
  title = null,
  variant = 'primary',
  className = '' 
}) => {
  const { isDark } = useTheme();
  
  if (!events.length) return null;
  
  // Ajustar variante si es modo oscuro para mejor contraste
  const timelineVariant = isDark && variant === 'primary' ? 'info' : variant;
  const titleClass = isDark ? 'text-light' : '';
  
  return (
    <div className={`mb-5 ${className}`}>
      {title && (
        <h2 className={`h3 mb-4 ${titleClass}`}>{title}</h2>
      )}
      
      <div className="position-relative">
        {/* Eventos */}
        {events.map((event, index) => (
          <TimelineItem 
            key={index}
            event={event} 
            index={index}
            variant={timelineVariant}
            isLast={index === events.length - 1}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Componente individual para cada evento en la línea de tiempo
 */
const TimelineItem = ({ event, index, variant = 'primary', isLast, isDark }) => {
  const isEven = index % 2 === 0;
  
  // Clases para la tarjeta según el tema
  const cardClass = isDark ? 'bg-dark text-light border-secondary' : '';
  const captionClass = isDark ? 'text-secondary' : 'text-muted';
  const citationClass = isDark ? 'text-info small' : 'text-primary small';
  
  return (
    <div className="row mb-4">
      {/* Año/Fecha - visible solo en móvil */}
      <div className="col-12 d-md-none mb-2">
        <div className={`badge bg-${variant} p-2`}>
          {event.date || (typeof event.year === 'number' ? event.year : '')}
        </div>
      </div>
      
      {/* Lado izquierdo - Para eventos en posiciones pares */}
      <div className={`col-md-5 ${isEven ? '' : 'd-none d-md-block'}`}>
        {isEven && (
          <div className="text-md-end">
            <div className={`d-none d-md-inline-block badge bg-${variant} p-2 mb-2`}>
              {event.date || (typeof event.year === 'number' ? event.year : '')}
            </div>
            {!isLast && <div className={`position-absolute top-0 end-0 h-100 border-end border-${variant}`} style={{width: '50%', zIndex: -1}}></div>}
          </div>
        )}
      </div>
      
      {/* Punto central - visible solo en pantallas md+ */}
      <div className="col-md-2 d-none d-md-flex justify-content-center">
        <div className={`bg-${variant} rounded-circle d-flex align-items-center justify-content-center`}
             style={{width: '40px', height: '40px', zIndex: 1}}>
          {event.icon ? (
            <span className="text-white">{event.icon}</span>
          ) : (
            <span className="text-white fw-bold">
              {typeof event.year === 'number' ? event.year.toString().slice(-2) : '•'}
            </span>
          )}
        </div>
      </div>
      
      {/* Lado derecho - Para eventos en posiciones impares */}
      <div className={`col-md-5 ${!isEven ? '' : 'd-none d-md-block'}`}>
        {!isEven && (
          <div className="text-md-start">
            <div className={`d-none d-md-inline-block badge bg-${variant} p-2 mb-2`}>
              {event.date || (typeof event.year === 'number' ? event.year : '')}
            </div>
          </div>
        )}
      </div>
      
      {/* Contenido del evento - siempre visible */}
      <div className="col-12 col-md-5 offset-md-0">
        <div className={`card shadow-sm h-100 ${cardClass}`}>
          <div className="card-body">
            <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>{event.title}</h3>
            
            {/* Descripción */}
            {event.description && (
              <p className={`card-text ${isDark ? 'text-light' : ''}`}>{event.description}</p>
            )}
            
            {/* Imagen opcional */}
            {event.image && (
              <div className="mt-3">
                <img 
                  src={event.image} 
                  alt={event.imageAlt || event.title}
                  className="img-fluid rounded"
                  style={{ filter: isDark ? 'brightness(0.9)' : 'none' }} // Suavizar imagen en modo oscuro
                />
                {event.imageCaption && (
                  <p className={`small ${captionClass} mt-1 fst-italic`}>
                    {event.imageCaption}
                  </p>
                )}
              </div>
            )}
            
            {/* Cita bibliográfica opcional */}
            {event.citation && (
              <div className="mt-3 text-end">
                <span className={citationClass}>
                  [cite: {event.citation}]
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      date: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      image: PropTypes.string,
      imageAlt: PropTypes.string,
      imageCaption: PropTypes.string,
      citation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  title: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string
};

export default Timeline;