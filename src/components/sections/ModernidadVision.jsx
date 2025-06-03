import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import { useTheme } from '../../context/ThemeContext';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente que muestra información sobre la modernidad y visión de futuro de Singapur
 */
const ModernidadVision = () => {
  const { isDark } = useTheme();
  
  // Imágenes para la galería con rutas actualizadas
  const imagenesModernidad = [
    {
      src: getAssetPath("/images/gardens-by-the-bay.jpg"),
      alt: "Gardens by the Bay",
      caption: "Gardens by the Bay, símbolo de la innovación arquitectónica y sostenibilidad"
    },
    {
      src: getAssetPath("/images/changi_airport.jpg"),
      alt: "Aeropuerto Changi",
      caption: "El premiado aeropuerto Changi, considerado uno de los mejores del mundo"
    },
    {
      src: getAssetPath("/images/singapore-skyline.jpg"),
      alt: "Horizonte de Singapur",
      caption: "El moderno horizonte de Singapur, reflejo de su desarrollo económico"
    }
  ];
  
  // Línea de tiempo de desarrollo urbano
  const hitos = [
    {
      año: "1965",
      titulo: "Independencia",
      descripcion: "Separación de Malasia y fundación de la República independiente de Singapur bajo el liderazgo de Lee Kuan Yew.",
      importancia: "alta"
    },
    {
      año: "1972",
      titulo: "Estrategia industrial",
      descripcion: "Cambio de política hacia industrias intensivas en tecnología y atracción de inversión extranjera.",
      importancia: "media"
    },
    {
      año: "1980s",
      titulo: "Centro financiero",
      descripcion: "Desarrollo como centro financiero regional con la liberalización del sector bancario.",
      importancia: "media"
    },
    {
      año: "2000",
      titulo: "Focus en conocimiento",
      descripcion: "Transición hacia una economía basada en el conocimiento con inversiones en biotecnología y educación superior.",
      importancia: "media"
    },
    {
      año: "2014",
      titulo: "Smart Nation",
      descripcion: "Lanzamiento de la iniciativa Smart Nation para integrar tecnología en todos los aspectos de la vida urbana.",
      importancia: "alta"
    },
    {
      año: "2019",
      titulo: "Plan Verde 2030",
      descripcion: "Ambicioso plan de sostenibilidad para combatir el cambio climático y mantener la ciudad habitable.",
      importancia: "alta"
    }
  ];

  return (
    <div className="modernidad-vision">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>Ciudad del Futuro</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              Singapur se ha establecido como un modelo global de planificación urbana innovadora, 
              combinando alta densidad de población con excelente calidad de vida. La ciudad-estado 
              ha transformado sus limitaciones geográficas en catalizadores para la innovación.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              Con una visión estratégica clara, Singapur ha desarrollado infraestructuras de 
              vanguardia como el aeropuerto Changi, el sistema de transporte público MRT, y proyectos 
              emblemáticos como Marina Bay Sands y Gardens by the Bay que han redefinido su horizonte.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              La iniciativa Smart Nation, lanzada en 2014, busca aprovechar la tecnología para 
              mejorar la vida urbana, implementando soluciones innovadoras en movilidad, salud, 
              administración pública y servicios al ciudadano.
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-success bg-opacity-75' : 'bg-success'} text-white`}>
                <h5 className="card-title mb-0">Pilares de desarrollo</h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Planificación a largo plazo</span>
                  <i className="fas fa-check-circle text-success"></i>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Uso eficiente del espacio</span>
                  <i className="fas fa-check-circle text-success"></i>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Sostenibilidad ambiental</span>
                  <i className="fas fa-check-circle text-success"></i>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Innovación tecnológica</span>
                  <i className="fas fa-check-circle text-success"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesModernidad} 
        title="Símbolos de modernidad" 
      />

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>Sostenibilidad Urbana</h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          A pesar de su limitada extensión territorial, Singapur ha desarrollado estrategias 
          innovadoras para lograr un desarrollo sostenible que equilibra crecimiento económico, 
          conservación ambiental y bienestar social.
        </p>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-leaf text-success me-2"></i>
                  Ciudad Jardín
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Desde la visión de Lee Kuan Yew de convertir Singapur en una "Ciudad Jardín", 
                  el país ha integrado la vegetación en el diseño urbano, con corredores verdes, 
                  jardines verticales y más de 350 parques.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-water text-success me-2"></i>
                  Gestión del agua
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  El sistema NEWater recicla aguas residuales hasta estándares potables, cubriendo 
                  hasta el 40% de las necesidades hídricas del país y reduciendo la dependencia 
                  de importaciones desde Malasia.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-subway text-success me-2"></i>
                  Movilidad sostenible
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  El sistema de cuotas vehiculares (COE) y peajes electrónicos (ERP) limitan la 
                  congestión vehicular, mientras que el transporte público eficiente cubre el 78% 
                  de los desplazamientos en hora punta.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-building text-success me-2"></i>
                  Edificios verdes
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  El programa Green Mark certifica edificios sostenibles, con más del 80% 
                  de edificios proyectados para 2030 con certificación verde, reduciendo el 
                  consumo energético de la isla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="Singapur es una ciudad creada a partir de la imaginación. Dentro de una generación, hemos pasado de un asentamiento de bajos ingresos a una metrópolis global que supera por mucho nuestro tamaño."
        author="Lee Hsien Loong, Primer Ministro de Singapur"
        variant="success"
        citation="14"
      />

      <Timeline 
        events={hitos} 
        title="Evolución urbana" 
        variant="success" 
      />
    </div>
  );
};

export default ModernidadVision;