import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Componente que muestra información sobre la modernidad y visión de futuro de Singapur
 */
const ModernidadVision = () => {
  // Imágenes para la galería
  const imagenesModernidad = [
    {
      src: "/images/gardens-by-the-bay.jpg",
      alt: "Gardens by the Bay",
      caption: "Gardens by the Bay, símbolo de la innovación arquitectónica y sostenibilidad"
    },
    {
      src: "/images/singapore-skyline.jpg",
      alt: "Horizonte de Singapur",
      caption: "El moderno horizonte de Singapur, reflejo de su desarrollo económico"
    }
  ];
  
  // Eventos para la línea de tiempo
  const timelineModernidad = [
    {
      year: 1965,
      title: "Independencia",
      description: "Singapur se independiza de Malasia e inicia su camino de desarrollo."
    },
    {
      year: 1980,
      title: "Plan Maestro de Tecnología",
      description: "Se establece el primer plan maestro para la informatización nacional."
    },
    {
      year: 1999,
      title: "Iniciativa Singapore ONE",
      description: "Primera red nacional de banda ancha para conectar hogares y empresas."
    },
    {
      year: 2006,
      title: "iN2015 Master Plan",
      description: "Plan para transformar Singapur en un centro global de tecnología y medios."
    },
    {
      year: 2014,
      title: "Smart Nation Initiative",
      description: "Lanzamiento de la iniciativa para transformar Singapur mediante tecnología digital."
    },
    {
      year: 2020,
      title: "Smart Nation 2025",
      description: "Expansión de la iniciativa con enfoque en IA, datos e infraestructura digital."
    }
  ];

  return (
    <div className="modernidad-vision">
      <section className="mb-5">
        <h2 className="h3 mb-4">Smart Nation Initiative</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="mb-3">
              Lanzada en 2014, la iniciativa Smart Nation busca transformar Singapur mediante 
              la tecnología para mejorar la vida de sus ciudadanos, crear más oportunidades 
              económicas y construir comunidades más fuertes y conectadas.
            </p>
            <p className="mb-3">
              Esta visión aprovecha las redes digitales, datos y tecnologías inteligentes para 
              crear soluciones urbanas innovadoras y sostenibles que posicionen a Singapur a la 
              vanguardia de las ciudades globales.
            </p>
            <p className="mb-3">
              Los proyectos incluyen sistemas de transporte inteligente, pagos digitales universales, 
              y servicios públicos digitalizados que hacen de Singapur uno de los países 
              más conectados tecnológicamente del mundo.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="card border-info mb-4">
              <div className="card-header bg-info text-white">
                Pilares de Smart Nation
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="fas fa-network-wired text-info me-2"></i> Infraestructura digital
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fas fa-database text-info me-2"></i> Economía de datos
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fas fa-university text-info me-2"></i> Gobierno digital
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="fas fa-users text-info me-2"></i> Sociedad digital inclusiva
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesModernidad} 
        title="Infraestructura moderna de Singapur" 
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Proyectos de Innovación Tecnológica</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="text-info mb-3">
                  <i className="fas fa-car fa-2x"></i>
                </div>
                <h5 className="card-title">Transporte Autónomo</h5>
                <p className="card-text">
                  Singapur está a la vanguardia en pruebas de vehículos autónomos, con zonas 
                  designadas para probar taxis sin conductor y buses autónomos que mejorarán 
                  la eficiencia del transporte público.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="text-info mb-3">
                  <i className="fas fa-clinic-medical fa-2x"></i>
                </div>
                <h5 className="card-title">Telemedicina</h5>
                <p className="card-text">
                  La iniciativa de Telemedicina Nacional permite a los pacientes consultar 
                  a médicos a distancia, reduciendo las visitas innecesarias a hospitales y 
                  mejorando el acceso a la atención médica.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="text-info mb-3">
                  <i className="fas fa-wallet fa-2x"></i>
                </div>
                <h5 className="card-title">PayNow</h5>
                <p className="card-text">
                  Un sistema de pago universal que permite transferencias instantáneas entre 
                  cuentas bancarias utilizando solo un número de teléfono o número de identidad, 
                  acelerando la adopción de pagos digitales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="Queremos crear una nación donde las personas vivan de forma significativa y plena, permitidas e impulsadas por la tecnología; un Smart Nation. Esto permitirá que nuestros hijos y nietos tengan oportunidades emocionantes y que nuestras empresas puedan innovar."
        author="Lee Hsien Loong, Primer Ministro de Singapur"
        variant="info"
      />

      <section className="mb-5">
        <h2 className="h3 mb-4">Sostenibilidad y Medio Ambiente</h2>
        <p className="mb-3">
          A pesar de su limitado espacio territorial, Singapur ha logrado equilibrar el desarrollo urbano 
          con la conservación ambiental, implementando iniciativas innovadoras:
        </p>

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-leaf text-success me-2"></i> Ciudad Jardín</h5>
                <p className="card-text">
                  Singapur se conoce como "Ciudad Jardín" gracias a su extensiva cobertura verde. 
                  Más del 50% del territorio está cubierto de vegetación, con parques, reservas naturales 
                  y jardines verticales integrados en los edificios.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-water text-primary me-2"></i> NEWater</h5>
                <p className="card-text">
                  Sistema de reciclaje de agua altamente avanzado que trata aguas residuales hasta 
                  convertirlas en agua potable de alta calidad, reduciendo la dependencia de importaciones 
                  de agua y garantizando la seguridad hídrica.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-solar-panel text-warning me-2"></i> Energía Solar</h5>
                <p className="card-text">
                  Singapur está aumentando significativamente el uso de energía solar con paneles 
                  instalados en tejados de viviendas públicas, estructuras flotantes en embalses y 
                  fachadas de edificios comerciales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title"><i className="fas fa-building text-secondary me-2"></i> Edificios Ecológicos</h5>
                <p className="card-text">
                  La certificación Green Mark incentiva la construcción de edificios sostenibles con 
                  eficiencia energética, conservación de agua y materiales ecológicos. El objetivo es 
                  certificar el 80% de los edificios para 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Desafíos del Futuro</h2>
        <div className="alert alert-info">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-chart-line fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Envejecimiento de la población</h5>
              <p className="mb-0">
                Para 2030, uno de cada cuatro singapurenses tendrá más de 65 años. Singapur está 
                implementando tecnologías para el envejecimiento activo y servicios de salud adaptados 
                a una población mayor.
              </p>
            </div>
          </div>
        </div>
        <div className="alert alert-info">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-globe-asia fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Cambio climático</h5>
              <p className="mb-0">
                Como isla de baja altitud, Singapur es vulnerable a la subida del nivel del mar. 
                El país ha destinado más de S$100 mil millones para infraestructura de protección 
                climática en las próximas décadas.
              </p>
            </div>
          </div>
        </div>
        <div className="alert alert-info">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-robot fa-2x"></i>
            </div>
            <div>
              <h5 className="alert-heading">Adaptación laboral</h5>
              <p className="mb-0">
                La automatización y la IA transformarán el mercado laboral. Singapur invierte en 
                programas de recapacitación como SkillsFuture para preparar a su población para 
                los trabajos del futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Timeline 
        events={timelineModernidad} 
        title="Evolución tecnológica de Singapur" 
        variant="info" 
      />
    </div>
  );
};

export default ModernidadVision;