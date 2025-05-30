import React from 'react';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

/**
 * Componente Timeline para mostrar eventos cronológicos
 * @param {Array} events - Array de eventos para mostrar en la línea del tiempo
 * @param {String} title - Título opcional para la línea del tiempo
 * @param {String} accentColor - Color de acento para la línea y los puntos
 */
const Timeline = ({ 
  events = [], 
  title = null,
  accentColor = 'blue',
  className = '' 
}) => {
  if (!events.length) return null;
  
  const colorClasses = {
    blue: 'bg-blue-500 dark:bg-blue-400',
    teal: 'bg-teal-500 dark:bg-teal-400',
    green: 'bg-green-500 dark:bg-green-400',
    purple: 'bg-purple-500 dark:bg-purple-400',
    red: 'bg-red-500 dark:bg-red-400',
  };
  
  const lineColor = colorClasses[accentColor] || colorClasses.blue;
  
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      
      <div className="relative">
        {/* Línea vertical central */}
        <div className={`absolute left-5 md:left-1/2 h-full w-1 ${lineColor} -translate-x-1/2`} />
        
        {/* Eventos */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <TimelineItem 
              key={index}
              event={event} 
              index={index}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Componente individual para cada evento en la línea de tiempo
 */
const TimelineItem = ({ event, index, accentColor }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
  });
  
  const isEven = index % 2 === 0;
  const colorClasses = {
    blue: 'bg-blue-500 dark:bg-blue-400 text-blue-600 dark:text-blue-300',
    teal: 'bg-teal-500 dark:bg-teal-400 text-teal-600 dark:text-teal-300',
    green: 'bg-green-500 dark:bg-green-400 text-green-600 dark:text-green-300',
    purple: 'bg-purple-500 dark:bg-purple-400 text-purple-600 dark:text-purple-300',
    red: 'bg-red-500 dark:bg-red-400 text-red-600 dark:text-red-300',
  };
  
  const dotColor = colorClasses[accentColor]?.split(' ')[0] || colorClasses.blue.split(' ')[0];
  const textColor = colorClasses[accentColor]?.split(' ')[2] || colorClasses.blue.split(' ')[2];
  
  return (
    <div 
      ref={ref}
      className={`relative flex items-center ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      {/* Punto en la línea de tiempo */}
      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
        <div className={`w-10 h-10 rounded-full ${dotColor} flex items-center justify-center border-4 border-white dark:border-gray-800`}>
          {event.icon ? (
            <span className="text-white">{event.icon}</span>
          ) : (
            <span className="text-white text-sm font-bold">
              {typeof event.year === 'number' ? event.year : '•'}
            </span>
          )}
        </div>
      </div>
      
      {/* Contenido del evento - en móvil siempre a la derecha, en escritorio alternado */}
      <div className={`
        w-full md:w-5/12 
        ml-16 md:ml-0 
        ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
        transform 
        ${isVisible ? 'translate-y-0' : isEven ? 'translate-y-8' : 'translate-y-8'} 
        transition-transform duration-700 delay-300
      `}>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* Fecha del evento */}
          <div className={`font-bold ${textColor} text-xl mb-2`}>
            {event.date || (typeof event.year === 'number' ? event.year : '')}
          </div>
          
          {/* Título del evento */}
          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          
          {/* Descripción */}
          {event.description && (
            <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
          )}
          
          {/* Imagen opcional */}
          {event.image && (
            <div className="mt-3">
              <img 
                src={event.image} 
                alt={event.imageAlt || event.title}
                className="w-full h-40 object-cover rounded-md"
                loading="lazy"
              />
              {event.imageCaption && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
                  {event.imageCaption}
                </p>
              )}
            </div>
          )}
          
          {/* Cita bibliográfica opcional */}
          {event.citation && (
            <div className="mt-3 text-right">
              <span className="text-sm text-blue-500 dark:text-blue-400 cursor-help hover:underline">
                [cite: {event.citation}]
              </span>
            </div>
          )}
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
  accentColor: PropTypes.oneOf(['blue', 'teal', 'green', 'purple', 'red']),
  className: PropTypes.string
};

export default Timeline;