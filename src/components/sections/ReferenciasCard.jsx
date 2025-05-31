import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente para mostrar una tarjeta de referencia bibliográfica
 * Adaptado para trabajar con la estructura de datos de referenciasData
 */
const ReferenciasCard = ({
  titulo,
  autores,
  año,
  // tipo = "Referencia",  // Removed unused prop
  editorial,  // Usar editorial en lugar de fuente
  lugar,      // Añadir soporte para lugar
  url,        // Usar url en lugar de enlace
  categoria,
  descripcion = "",  // Valor por defecto
  variant = 'primary'
}) => {
  // Iconos según la categoría
  const getIcon = () => {
    switch (categoria?.toLowerCase()) {
      case 'historia':
        return 'fas fa-book-open';
      case 'linguistica':
        return 'fas fa-language';
      case 'monetario':
        return 'fas fa-money-bill-wave';
      case 'festividades':
        return 'fas fa-calendar-alt';
      case 'modernidad':
        return 'fas fa-city';
      default:
        return 'fas fa-bookmark';
    }
  };

  return (
    <div className={`card mb-3 border-${variant}`}>
      <div className={`card-header bg-${variant} bg-opacity-10 d-flex align-items-center`}>
        <i className={`${getIcon()} me-2 text-${variant}`}></i>
        <span className="fw-bold">{categoria || 'Referencia'}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        {autores && <h6 className="card-subtitle mb-2 text-muted">{autores}</h6>}
        
        <div className="mb-2 small">
          {editorial && <span className="me-2">{editorial}</span>}
          {lugar && <span className="me-2">{lugar}</span>}
          {año && <span className="badge bg-light text-dark">{año}</span>}
        </div>
        
        {descripcion && descripcion !== "" && <p className="card-text">{descripcion}</p>}
        
        {url && (
          <a 
            href={url} 
            className={`btn btn-sm btn-outline-${variant}`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt me-1"></i>
            Acceder
          </a>
        )}
      </div>
    </div>
  );
};

// Actualizar PropTypes
ReferenciasCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  autores: PropTypes.string,
  año: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // tipo: PropTypes.string, // Removed unused prop
  editorial: PropTypes.string,
  lugar: PropTypes.string,
  url: PropTypes.string,
  descripcion: PropTypes.string,
  categoria: PropTypes.string,
  variant: PropTypes.string
};

export default ReferenciasCard;