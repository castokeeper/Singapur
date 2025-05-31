import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente que muestra información sobre el sistema monetario de Singapur
 */
const SistemaMonetario = () => {
  const { isDark } = useTheme();
  
  // Imágenes para la galería monetaria con rutas actualizadas
  const imagenesBilletes = [
    {
      src: getAssetPath("/images/sgd-notes.jpg"),
      alt: "Billetes del dólar de Singapur",
      caption: "Serie actual de billetes del dólar singapurense con motivos nacionales"
    },
    {
      src: getAssetPath("/images/mas-building.jpg"), 
      alt: "Autoridad Monetaria de Singapur",
      caption: "El edificio de la Autoridad Monetaria de Singapur (MAS)"
    },
    {
      src: getAssetPath("/images/singapore-coins.jpg"),
      alt: "Monedas de Singapur",
      caption: "Serie actual de monedas del dólar singapurense"
    },
    {
      src: getAssetPath("/images/singapore-fintech.jpg"),
      alt: "Fintech en Singapur",
      caption: "Festival Fintech de Singapur, reflejo de la innovación financiera del país"
    }
  ];
  
  // Línea de tiempo del sistema monetario
  const eventosMoney = [
    {
      año: "1967",
      titulo: "Creación del dólar singapurense",
      descripcion: "Tras su independencia, Singapur establece su propia moneda separándose del dólar malayo.",
      importancia: "alta"
    },
    {
      año: "1971",
      titulo: "Establecimiento de la MAS",
      descripcion: "Se crea la Autoridad Monetaria de Singapur (MAS) como banco central y regulador financiero.",
      importancia: "alta"
    },
    {
      año: "1985",
      titulo: "Política cambiaria",
      descripcion: "Adopción de una política cambiaria basada en bandas de fluctuación administradas.",
      importancia: "media"
    },
    {
      año: "2002",
      titulo: "Serie Portrait",
      descripcion: "Lanzamiento de la serie Portrait de billetes con medidas de seguridad avanzadas.",
      importancia: "media"
    },
    {
      año: "2011",
      titulo: "Core Inflation",
      descripcion: "MAS comienza a usar la inflación núcleo como indicador principal para la política monetaria.",
      importancia: "media"
    },
    {
      año: "2017",
      titulo: "Singapore FinTech Festival",
      descripcion: "Singapur establece el mayor festival fintech del mundo, reforzando su posición como hub fintech.",
      importancia: "alta"
    }
  ];

  return (
    <div className="sistema-monetario">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>El Dólar de Singapur</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              El dólar de Singapur (SGD) es la moneda oficial de la República de Singapur desde 1967, 
              cuando el país estableció su propia autoridad monetaria tras separarse de Malasia. Actualmente, 
              es una de las monedas más estables y fuertes de Asia, reflejo de la solidez económica del país.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              La Autoridad Monetaria de Singapur (MAS), que funciona como banco central, gestiona la política 
              monetaria principalmente a través del tipo de cambio en lugar de las tasas de interés, un enfoque 
              único adaptado a la economía abierta y dependiente del comercio exterior de Singapur.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              Los billetes actuales presentan al primer presidente de Singapur, Yusof bin Ishak, e incorporan 
              avanzadas medidas de seguridad. Las monedas muestran motivos de la flora y fauna local, reflejando 
              la identidad cultural y natural del país.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="mb-4">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">Ranking Global</h5>
                  <p className="display-4 text-center mb-3">4º</p>
                  <p className="card-text text-center">
                    Posición de Singapur en el Índice de Centros Financieros Globales
                  </p>
                </div>
              </div>
            </div>
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>Características clave</h5>
                <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-chart-line text-success me-2"></i>
                    Moneda de reserva en Asia
                  </li>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-lock text-success me-2"></i>
                    Alta seguridad anticopia
                  </li>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-exchange-alt text-success me-2"></i>
                    Política cambiaria administrada
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesBilletes} 
        title="Sistema monetario singapurense" 
      />

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>Centro Financiero Global</h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          Singapur se ha consolidado como uno de los principales centros financieros del mundo, 
          compitiendo directamente con Nueva York, Londres y Hong Kong. Su estabilidad política, 
          marco regulatorio transparente y ubicación estratégica lo han posicionado como hub 
          financiero de referencia en Asia-Pacífico.
        </p>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-university text-success me-2"></i>
                  Banca internacional
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Más de 200 bancos tienen presencia en Singapur, incluyendo las principales 
                  instituciones financieras del mundo que utilizan la ciudad como base para 
                  sus operaciones en el sureste asiático.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-chart-pie text-success me-2"></i>
                  Gestión de patrimonios
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  El país gestiona más de 4 billones de SGD en activos, posicionándose como 
                  el principal centro de gestión de patrimonios de Asia y atrayendo fortunas 
                  de toda la región.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-laptop-code text-success me-2"></i>
                  Hub Fintech
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Con más de 1.400 empresas fintech, Singapur lidera la innovación financiera 
                  en áreas como pagos digitales, blockchain, seguros tecnológicos y banca digital.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-balance-scale text-success me-2"></i>
                  Marco regulatorio
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  La MAS ha desarrollado un sistema regulatorio robusto pero flexible que 
                  equilibra la innovación con la estabilidad, incluyendo sandbox regulatorios 
                  para nuevas tecnologías financieras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="El sistema financiero de Singapur representa uno de los mejores ejemplos de cómo una visión clara, políticas consistentes y adaptación a las tendencias globales pueden transformar un pequeño mercado local en un centro financiero de clase mundial."
        author="Ravi Menon, Director Ejecutivo de la MAS"
        variant="success"
        citation="8"
      />

      <Timeline 
        events={eventosMoney} 
        title="Evolución del sistema monetario" 
        variant="success" 
      />
    </div>
  );
};

export default SistemaMonetario;