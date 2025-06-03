import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from '../components/ui/ImageGallery';
import Timeline from '../components/ui/Timeline';
import Quote from '../components/common/Quote';
import MapView from '../components/ui/MapView';
import { useTheme } from '../context/ThemeContext';

// Importaciones de componentes específicos
import SistemaMonetario from '../components/sections/SistemaMonetario';
import IdentidadLinguistica from '../components/sections/IdentidadLinguistica';
import Festividades from '../components/sections/FestividadesTradiciones';
import ModernidadVision from '../components/sections/ModernidadVision';

import { seccionesData } from '../data/secciones';
import useViewportSize from '../hooks/useViewportSize';

const DetalleSeccion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seccion, setSeccion] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();
  const { device } = useViewportSize();

  useEffect(() => {
    // Simulación de carga de datos
    setLoading(true);
    
    // Buscar la sección correspondiente por ID
    const seccionEncontrada = seccionesData.find(s => s.id === id);
    
    if (seccionEncontrada) {
      setSeccion(seccionEncontrada);
      // Establecer el título de la página
      document.title = `${seccionEncontrada.titulo} | Singapur`;
    } else {
      // Redireccionar a 404 si no existe la sección
      navigate('/pagina-no-encontrada', { replace: true });
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className={`spinner-border ${isDark ? 'text-light' : 'text-primary'}`} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!seccion) return null;

  // Renderizar componente específico según el ID
  const renderComponenteEspecifico = () => {
    switch(id) {
      case 'monetario':
        return <SistemaMonetario />;
      case 'linguistica':
        return <IdentidadLinguistica />;
      case 'festividades':
        return <Festividades />;
      case 'modernidad':
        return <ModernidadVision />;
      default:
        // Si no hay componente específico, renderizar contenido genérico
        return (
          <>
            {seccion.contenido && seccion.contenido.map((bloque, index) => (
              <div key={index} className="mb-5">
                <h2 className={`mb-4 ${isDark ? 'text-light' : ''}`}>{bloque.titulo}</h2>
                <div className={`fs-5 ${isDark ? 'text-light' : ''}`}>
                  {bloque.parrafos.map((parrafo, i) => (
                    <p key={i}>{parrafo}</p>
                  ))}
                </div>

                {/* Galería de imágenes si existe */}
                {bloque.imagenes && bloque.imagenes.length > 0 && (
                  <ImageGallery 
                    images={bloque.imagenes} 
                    title={bloque.galeriaTitle} 
                  />
                )}

                {/* Citación si existe */}
                {bloque.cita && (
                  <Quote 
                    text={bloque.cita.texto}
                    author={bloque.cita.autor}
                    citation={bloque.cita.referencia}
                    variant={getVariantClass()}
                  />
                )}
              </div>
            ))}
          </>
        );
    }
  };

  // Determinar la clase de color de la sección
  const getVariantClass = () => {
    // Para tema oscuro, algunos colores pueden ser ajustados para mejor contraste
    if (isDark) {
      switch (id) {
        case 'linguistica': return 'primary';
        case 'monetario': return 'success';
        case 'festividades': return 'info'; // cambiado de warning para mejor contraste en oscuro
        case 'modernidad': return 'info';
        default: return 'primary';
      }
    } else {
      // Tema claro - colores originales
      switch (id) {
        case 'linguistica': return 'primary';
        case 'monetario': return 'success';
        case 'festividades': return 'warning';
        case 'modernidad': return 'info';
        default: return 'primary';
      }
    }
  };

  // Determinar clases para el header según el tema
  const getHeaderClass = () => {
    const baseClass = `p-4 rounded-3 bg-${getVariantClass()} mb-4 `;
    return isDark 
      ? `${baseClass} bg-opacity-25 border border-${getVariantClass()}` 
      : `${baseClass} bg-opacity-10`;
  };

  return (
    <div className={`theme-transition ${isDark ? 'text-light' : ''}`}>
      {/* Encabezado de la sección */}
      <div className={getHeaderClass()}>
        <h1 className={`${device === 'mobile' ? 'h2' : 'display-5'} fw-bold`}>
          {seccion.titulo}
        </h1>
        <p className={`${device === 'mobile' ? 'fs-6' : 'fs-5'}`}>
          {seccion.descripcion}
        </p>
      </div>

      {/* Contenido principal */}
      <div className="row">
        <div className={device === 'mobile' ? 'col-12 mb-4' : 'col-lg-8'}>
          {/* Renderizar componente específico o contenido genérico */}
          {renderComponenteEspecifico()}
          
          {/* Mostrar línea de tiempo genérica solo para secciones que no tienen componente específico */}
          {seccion.timeline && !['monetario', 'linguistica', 'festividades', 'modernidad'].includes(id) && (
            <Timeline 
              title="Cronología" 
              events={seccion.timeline}
              variant={getVariantClass()} 
            />
          )}
        </div>
        <div className={device === 'mobile' ? 'col-12' : 'col-lg-4'}>
          {/* Información lateral */}
          <div className={`card mb-4 shadow-sm ${isDark ? 'bg-dark border-secondary' : ''}`}>
            <div className="card-body">
              <h3 className={`card-title h4 ${isDark ? 'text-light' : ''}`}>Datos Clave</h3>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                {seccion.datosClave && seccion.datosClave.map((dato, index) => (
                  <li key={index} className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <strong>{dato.titulo}:</strong> {dato.valor}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mapa si existe */}
          {seccion.ubicaciones && (
            <div className={`card mb-4 shadow-sm ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h3 className={`card-title h4 ${isDark ? 'text-light' : ''}`}>Ubicaciones Relevantes</h3>
                <MapView 
                  markers={seccion.ubicaciones}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalleSeccion;