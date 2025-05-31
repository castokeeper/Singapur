import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const MapView = ({
  markers = [],
  className = '',
  height = 400
}) => {
  const { isDark } = useTheme();
  
  if (!markers.length) return null;

  // Clases condicionales según el tema
  const cardClass = isDark ? 'bg-dark border-secondary' : '';
  const itemClass = isDark ? 'bg-dark text-light border-secondary' : '';
  const coordClass = isDark ? 'text-secondary' : 'text-muted';
  const buttonClass = isDark 
    ? 'btn-outline-light border-secondary' 
    : 'btn-outline-primary';

  return (
    <div className={`card ${className} ${cardClass}`} style={{ minHeight: `${height}px` }}>
      <div className="card-body">
        <h5 className={`card-title mb-3 ${isDark ? 'text-light' : ''}`}>Ubicaciones destacadas</h5>
        <div className="list-group">
          {markers.map((marker, idx) => (
            <div key={idx} className={`list-group-item ${itemClass}`}>
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{marker.name || `Ubicación ${idx + 1}`}</h6>
                <small className={coordClass}>
                  {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
                </small>
              </div>
              
              {marker.popup && (
                <div className="mb-1">
                  {typeof marker.popup === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: marker.popup }} />
                  ) : (
                    marker.popup
                  )}
                </div>
              )}
              
              <div className="mt-2">
                <a 
                  href={`https://www.google.com/maps/@${marker.lat},${marker.lng},15z`}
                  className={`btn btn-sm ${buttonClass}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-map-marker-alt me-1"></i> Ver en Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;