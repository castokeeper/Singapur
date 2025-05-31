import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Componente que muestra información sobre el sistema monetario de Singapur
 */
const SistemaMonetario = () => {
  // Imágenes para la galería monetaria
  const imagenesBilletes = [
    {
      src: "/images/singapore-skyline.jpg",
      alt: "Distrito financiero de Singapur",
      caption: "El distrito financiero de Singapur, centro del sistema monetario del país"
    },
    {
      src: "/images/merlion-statue.jpg", 
      alt: "Autoridad Monetaria de Singapur",
      caption: "El edificio de la Autoridad Monetaria de Singapur (MAS)"
    }
  ];
  
  // Eventos para la línea de tiempo
  const timelineMonetario = [
    {
      year: 1967,
      title: "Creación del dólar de Singapur",
      description: "Tras la separación de Malasia, Singapur establece su propia moneda independiente."
    },
    {
      year: 1971,
      title: "Fundación de la MAS",
      description: "Se establece la Autoridad Monetaria de Singapur (MAS) como banco central y regulador financiero."
    },
    {
      year: 1985,
      title: "Política de tipo de cambio",
      description: "La MAS adopta una política monetaria centrada en la gestión del tipo de cambio en lugar de tasas de interés."
    },
    {
      year: 1999,
      title: "Acuerdos financieros internacionales",
      description: "Singapur firma acuerdos de libre comercio con énfasis en servicios financieros."
    },
    {
      year: 2004,
      title: "Billetes de polímero",
      description: "Singapur introduce billetes de polímero para mayor durabilidad y seguridad."
    },
    {
      year: 2019,
      title: "Serie conmemorativa del Bicentenario",
      description: "Emisión de billetes conmemorativos por el bicentenario de la fundación moderna de Singapur."
    }
  ];

  return (
    <div className="sistema-monetario">
      <section className="mb-5">
        <h2 className="h3 mb-4">El Dólar Singapurense (SGD)</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="mb-3">
              El dólar de Singapur (SGD) es reconocido como una de las monedas más estables y confiables 
              de Asia. Su estabilidad radica en la sólida economía del país y en las políticas prudentes
              implementadas por la Autoridad Monetaria de Singapur (MAS).
            </p>
            <p className="mb-3">
              A diferencia de muchos bancos centrales que utilizan tasas de interés como principal herramienta
              de política monetaria, la MAS emplea el tipo de cambio como instrumento primario. La moneda
              se gestiona frente a una canasta ponderada de divisas de sus principales socios comerciales.
            </p>
            <p className="mb-3">
              Los billetes de Singapur destacan por su colorido diseño y avanzadas medidas de seguridad,
              representando los diversos aspectos culturales y el progreso del país.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body bg-light">
                <h5 className="card-title">Datos rápidos</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">Código ISO: SGD</li>
                  <li className="list-group-item bg-transparent">Símbolo: S$</li>
                  <li className="list-group-item bg-transparent">Subdivisión: 100 céntimos</li>
                  <li className="list-group-item bg-transparent">Emisor: Autoridad Monetaria de Singapur</li>
                  <li className="list-group-item bg-transparent">Ranking: Entre las 15 monedas más comerciadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesBilletes} 
        title="El sistema financiero de Singapur" 
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Centro Financiero Internacional</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Singapur ha consolidado su posición como uno de los principales centros financieros del 
              mundo, rivalizando con ciudades como Londres, Nueva York y Hong Kong. Su éxito se basa en:
            </p>
            <ul className="mb-4">
              <li>Marco regulatorio estable y transparente</li>
              <li>Excelente infraestructura y conectividad global</li>
              <li>Fuerza laboral altamente calificada y multilingüe</li>
              <li>Régimen fiscal favorable para negocios</li>
              <li>Estabilidad política y económica</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Ranking Global</h5>
                <p className="display-4 text-center mb-3">4º</p>
                <p className="card-text text-center">
                  Posición de Singapur en el Índice de Centros Financieros Globales 
                  (Global Financial Centres Index)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="La política de tipo de cambio de Singapur es única porque responde a la naturaleza de su economía: pequeña, abierta y con un sector comercial importante en relación con el PIB."
        author="Tharman Shanmugaratnam, ex-Ministro de Finanzas de Singapur"
        variant="success"
        citation="4"
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">La Autoridad Monetaria de Singapur (MAS)</h2>
        <p>
          Fundada en 1971, la MAS funciona como banco central y regulador financiero integrado, 
          supervisando todos los aspectos del sector financiero de Singapur: banca, seguros, 
          valores y gestión de activos.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header">Funciones principales de la MAS</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conducir la política monetaria</li>
                <li className="list-group-item">Emitir moneda y administrar reservas</li>
                <li className="list-group-item">Supervisar el sector financiero</li>
                <li className="list-group-item">Desarrollar Singapur como centro financiero</li>
                <li className="list-group-item">Representar a Singapur en foros financieros internacionales</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-header">Enfoque único de la MAS</div>
              <div className="card-body">
                <p className="card-text">
                  A diferencia de otros bancos centrales que establecen tasas de interés para 
                  controlar la inflación, la MAS gestiona el valor del dólar singapurense contra 
                  una canasta ponderada de monedas de los principales socios comerciales.
                </p>
                <p className="card-text mb-0">
                  Este enfoque es adecuado para una economía pequeña y abierta como la de Singapur, 
                  donde el comercio exterior tiene un impacto significativo en la inflación y el 
                  crecimiento económico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Billetes y Monedas</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Serie de billetes "Portrait"</h5>
                <p>
                  La serie actual de billetes de Singapur presenta a Yusof bin Ishak, el primer 
                  presidente de Singapur, junto con motivos que representan la cultura, el patrimonio 
                  y los valores de la nación.
                </p>
                <p>
                  Incorporan avanzadas características de seguridad, incluidos hologramas, 
                  marcas de agua y elementos de tinta que cambian de color.
                </p>
                <div className="mt-3">
                  <span className="badge bg-success me-2">S$2</span>
                  <span className="badge bg-success me-2">S$5</span>
                  <span className="badge bg-success me-2">S$10</span>
                  <span className="badge bg-success me-2">S$50</span>
                  <span className="badge bg-success me-2">S$100</span>
                  <span className="badge bg-success me-2">S$1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Monedas en circulación</h5>
                <p>
                  Las monedas singapurenses presentan motivos que reflejan la identidad y los valores 
                  del país, con diseños que celebran su biodiversidad, arquitectura y cultura.
                </p>
                <p>
                  En 2013, Singapur introdujo una nueva serie de monedas con diseños actualizados y 
                  mejores características de seguridad.
                </p>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">1¢</span>
                  <span className="badge bg-secondary me-2">5¢</span>
                  <span className="badge bg-secondary me-2">10¢</span>
                  <span className="badge bg-secondary me-2">20¢</span>
                  <span className="badge bg-secondary me-2">50¢</span>
                  <span className="badge bg-secondary me-2">S$1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Innovación financiera</h2>
        <div className="alert alert-success">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-lightbulb fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Sandbox regulatorio</h5>
              <p className="mb-0">
                La MAS fue una de las primeras autoridades reguladoras en implementar un sandbox 
                regulatorio para fintech, permitiendo experimentar con innovaciones financieras 
                en un entorno controlado. Esto ha posicionado a Singapur como un centro 
                para la innovación financiera en Asia.
              </p>
            </div>
          </div>
        </div>
        <p>
          El compromiso de Singapur con la innovación financiera se evidencia en sus iniciativas 
          para adoptar pagos digitales, tecnología blockchain y regular de manera equilibrada las 
          criptomonedas y activos digitales.
        </p>
      </section>

      <Timeline 
        events={timelineMonetario} 
        title="Evolución del sistema monetario de Singapur" 
        variant="success" 
      />
    </div>
  );
};

export default SistemaMonetario;