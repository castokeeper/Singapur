import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente que muestra información detallada sobre la identidad lingüística de Singapur
 */
const IdentidadLinguistica = () => {
  const { isDark } = useTheme();

  // Imágenes para la galería - usar getAssetPath para normalizar rutas
  const imagenesLinguistica = [
    {
      src: getAssetPath("/images/merlion-statue.jpg"),
      alt: "Señalización multilingüe en Singapur",
      caption: "Las señales públicas en Singapur incluyen los cuatro idiomas oficiales"
    },
    {
      src: getAssetPath("/images/singapore-skyline.jpg"),
      alt: "Barrio chino de Singapur",
      caption: "El barrio chino, donde se puede apreciar la influencia del mandarín y los dialectos chinos"
    }
  ];
  
  // Eventos para la línea de tiempo
  const timelineLinguistico = [
    {
      year: 1819,
      title: "Fundación de Singapur",
      description: "Sir Stamford Raffles establece un puesto comercial británico, iniciando la influencia del idioma inglés."
    },
    {
      year: 1959,
      title: "Autogobierno",
      description: "Singapur obtiene el autogobierno, comenzando a formular sus propias políticas lingüísticas."
    },
    {
      year: 1965,
      title: "Independencia",
      description: "Tras la independencia, Singapur adopta una política de multilingüismo con inglés como lengua principal para los negocios y la administración."
    },
    {
      year: 1979,
      title: "Campaña 'Habla Mandarín'",
      description: "Lanzamiento de la campaña para promover el mandarín sobre los dialectos chinos entre la comunidad china."
    },
    {
      year: 2000,
      title: "Speak Good English Movement",
      description: "Iniciativa gubernamental para mejorar el uso del inglés estándar y reducir la dependencia del Singlish."
    }
  ];

  // Ejemplos de Singlish
  const ejemplosSinglish = [
    { frase: "Can or not?", traduccion: "¿Es posible?" },
    { frase: "Don't play play!", traduccion: "¡No bromees!" },
    { frase: "Shiok!", traduccion: "¡Excelente! (expresión de deleite)" },
    { frase: "Kiasu", traduccion: "Miedo a perder o quedarse atrás" },
    { frase: "Makan", traduccion: "Comer (del malayo)" }
  ];

  return (
    <div className="identidad-linguistica">
      <section className="mb-5">
        <h2 className="h3 mb-4">Multilingüismo Oficial</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="mb-3">
              Singapur reconoce cuatro idiomas oficiales: inglés, mandarín, malayo y tamil. Esta política refleja 
              la diversidad étnica de la nación y su compromiso con el mantenimiento de las raíces culturales.
            </p>
            <p className="mb-3">
              El inglés funciona como la lengua franca en los negocios, el gobierno y la educación, facilitando 
              la comunicación entre los diversos grupos étnicos y posicionando a Singapur en la economía global.
            </p>
            <p className="mb-3">
              El malayo es el idioma nacional, reflejando la herencia histórica y la ubicación geográfica de Singapur 
              en el mundo malayo. El himno nacional, "Majulah Singapura" (Adelante Singapur), está en malayo.
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'} text-white`}>
                <h5 className="card-title mb-0">Idiomas oficiales</h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">Inglés</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      Administración y negocios
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">Mandarín</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      Comunidad china
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">Malayo</span>
                      <i className="fas fa-flag text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      Idioma nacional
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">Tamil</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      Comunidad india
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesLinguistica} 
        title="Multilingüismo en el espacio público" 
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Singlish: El Inglés Singapurense</h2>
        <p className="mb-3">
          El Singlish es una forma coloquial de inglés único de Singapur, que incorpora elementos del 
          mandarín, dialectos chinos, malayo y tamil. Aunque no es oficialmente promovido por el gobierno, 
          representa una parte importante de la identidad cultural singapurense.
        </p>
        <p className="mb-3">
          Este dialecto local incluye expresiones como "lah", "lor" y "meh" que añaden matices de 
          significado, y ha evolucionado como una expresión de la identidad nacional compartida.
        </p>
        
        <div className={`card ${isDark ? 'bg-dark border-secondary' : 'bg-white'} mb-4`}>
          <div className="card-body">
            <h3 className={`h4 mb-3 ${isDark ? 'text-light' : ''}`}>Ejemplos de Singlish</h3>
            
            {ejemplosSinglish.map((ejemplo, index) => (
              <div key={index} className="mb-3">
                <div className={`p-3 rounded ${isDark ? 'bg-secondary bg-opacity-25 text-light' : 'bg-light'}`}>
                  <p className="mb-0 font-monospace">"{ejemplo.frase}"</p>
                </div>
                <p className={`mt-2 ${isDark ? 'text-light' : ''}`}>
                  <span className="fw-bold">Traducción:</span> 
                  <span className={`ms-2 ${isDark ? 'text-info' : 'text-primary'}`}>
                    {ejemplo.traduccion}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <Quote 
          text="El Singlish no es solo un modo de hablar, sino una expresión de la singapuridad, reflejando las diversas influencias culturales que han dado forma a nuestra sociedad."
          author="Catherine Lim, escritora singapurense"
          variant="primary"
          citation="3"
        />
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Políticas Lingüísticas</h2>
        <p className="mb-3">
          El gobierno de Singapur ha implementado diversas políticas lingüísticas para equilibrar la 
          cohesión social, la identidad cultural y las necesidades económicas globales.
        </p>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Speak Good English Movement</h5>
                <p className="card-text">
                  Lanzada en 2000, esta campaña busca mejorar el nivel de inglés estándar entre 
                  los singapurenses y reducir el uso del Singlish en contextos formales.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Speak Mandarin Campaign</h5>
                <p className="card-text">
                  Iniciada en 1979, promueve el uso del mandarín entre la población china en lugar 
                  de los diversos dialectos chinos como el hokkien o el cantonés.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Sistema educativo bilingüe</h5>
                <p className="card-text">
                  Los estudiantes aprenden inglés como primer idioma y su "lengua materna" 
                  (mandarín, malayo o tamil) como segundo idioma obligatorio.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Política de traducción</h5>
                <p className="card-text">
                  Todos los documentos oficiales, señalizaciones públicas y anuncios 
                  gubernamentales se proporcionan en los cuatro idiomas oficiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Desafíos lingüísticos actuales</h2>
        <p className="mb-3">
          A pesar del éxito de su política multilingüe, Singapur enfrenta diversos desafíos:
        </p>
        
        <div className="alert alert-primary">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-language fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Disminución del uso de lenguas maternas</h5>
              <p className="mb-0">
                Las generaciones más jóvenes tienden a preferir el inglés sobre sus lenguas maternas, 
                lo que ha llevado a una disminución en el dominio de idiomas como el mandarín, 
                el malayo y el tamil.
              </p>
            </div>
          </div>
        </div>
        
        <div className="alert alert-primary">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-comments fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Tensión entre Singlish e inglés estándar</h5>
              <p className="mb-0">
                Existe una continua tensión entre la promoción del inglés estándar para la competitividad 
                global y el valor cultural del Singlish como expresión de identidad nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline 
        events={timelineLinguistico} 
        title="Evolución lingüística de Singapur" 
        variant="primary" 
      />
    </div>
  );
};

export default IdentidadLinguistica;