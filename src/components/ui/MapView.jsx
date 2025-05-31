import React from 'react';

/**
 * Versión simplificada de MapView que no requiere react-leaflet
 * Muestra las ubicaciones como una lista con enlaces a Google Maps
 */
const MapView = ({
  markers = [],
  className = '',
  height = 400
}) => {
  if (!markers.length) return null;

  return (
    <div className={`card ${className}`} style={{ minHeight: `${height}px` }}>
      <div className="card-body">
        <h5 className="card-title mb-3">Ubicaciones destacadas</h5>
        <div className="list-group">
          {markers.map((marker, idx) => (
            <div key={idx} className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{marker.name || `Ubicación ${idx + 1}`}</h6>
                <small className="text-muted">
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
                  className="btn btn-sm btn-outline-primary"
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