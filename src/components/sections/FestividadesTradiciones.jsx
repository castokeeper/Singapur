import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Quote from '../common/Quote';
import ImageGallery from '../ui/ImageGallery';
import Timeline from '../ui/Timeline';
import { getAssetPath } from '../../utils/assetUtils';

const FestividadesTradiciones = () => {
  const { isDark } = useTheme();
  
  const imagenesFestividades = [
    {
      src: getAssetPath("/images/festival-chino.jpg"),
      alt: "Celebración del Año Nuevo Chino en Chinatown",
      caption: "Luces y decoraciones durante el Año Nuevo Chino en Chinatown"
    },
    {
      src: getAssetPath("/images/festival-deepavali.jpg"),
      alt: "Celebración de Deepavali en Little India",
      caption: "Colorida decoración de luces y rangolis para Deepavali"
    },
    {
      src: getAssetPath("/images/festival-hari-raya.jpg"),
      alt: "Celebración de Hari Raya Puasa",
      caption: "Familias celebrando Hari Raya en Geylang Serai"
    }
  ];
  
  // Línea de tiempo de eventos festivos
  const eventosFestivos = [
    {
      año: "Enero/Febrero",
      titulo: "Año Nuevo Chino",
      descripcion: "La celebración más importante para la comunidad china, incluye desfiles, danzas de león y reuniones familiares con intercambio de sobres rojos.",
      importancia: "alta"
    },
    {
      año: "Abril/Mayo",
      titulo: "Vesak",
      descripcion: "Celebración budista del nacimiento, iluminación y fallecimiento de Buda. Los templos se llenan de devotos para ceremonias y ofrendas.",
      importancia: "media"
    },
    {
      año: "Mayo/Junio",
      titulo: "Hari Raya Puasa",
      descripcion: "Marca el fin del Ramadán con oraciones especiales, visitas familiares y platos tradicionales como rendang y ketupat.",
      importancia: "alta"
    },
    {
      año: "Julio/Agosto",
      titulo: "Festival del Dragón Hambriento",
      descripcion: "Conocido por sus carreras de botes dragón y el consumo de zongzi (bollos de arroz glutinoso envueltos en hojas de bambú).",
      importancia: "media"
    },
    {
      año: "Agosto",
      titulo: "Día Nacional",
      descripcion: "Conmemora la independencia de Singapur con un desfile militar, exhibiciones aéreas y espectáculos culturales masivos.",
      importancia: "alta"
    },
    {
      año: "Octubre/Noviembre",
      titulo: "Deepavali",
      descripcion: "Festival hindú de las luces que simboliza el triunfo del bien sobre el mal, con iluminación de lámparas y elaborados rangolis (patrones decorativos).",
      importancia: "alta"
    },
    {
      año: "Diciembre",
      titulo: "Navidad",
      descripcion: "Celebrada ampliamente con decoraciones en Orchard Road, conciertos y mercados navideños que reflejan la influencia occidental.",
      importancia: "media"
    }
  ];

  return (
    <div className="festividades-tradiciones">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>Multiculturalidad Festiva</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              Singapur celebra una rica variedad de festividades culturales y religiosas que 
              reflejan la diversidad étnica de su población. El calendario festivo oficial reconoce 
              celebraciones de todas las principales religiones y grupos étnicos.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              Las principales festividades incluyen el Año Nuevo Chino, Hari Raya Puasa, 
              Deepavali, Navidad y el Día Nacional de Singapur. Cada celebración se caracteriza 
              por decoraciones distintivas en espacios públicos, eventos comunitarios y 
              tradiciones culinarias específicas.
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              El gobierno promueve activamente la participación intercultural en estas festividades 
              como parte de su política de armonía racial, animando a los singapurenses de todos los 
              orígenes a compartir y experimentar las tradiciones de los demás.
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} text-white`}>
                <h5 className="card-title mb-0">Principales festividades</h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Año Nuevo Chino</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    Comunidad china
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Hari Raya</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    Comunidad malaya
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Deepavali</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    Comunidad india
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">Día Nacional</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    Nacional
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesFestividades} 
        title="Festivales culturales" 
      />

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>Tradiciones culturales</h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          Más allá de las festividades oficiales, Singapur mantiene tradiciones culturales específicas 
          de cada comunidad étnica. Estas prácticas han evolucionado para adaptarse al contexto urbano 
          y a la sociedad moderna, pero siguen siendo importantes marcadores de identidad.
        </p>

        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-utensils text-warning me-2"></i>
                  Tradiciones culinarias
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  La gastronomía de cada grupo étnico se destaca durante sus festividades. Los mooncakes 
                  durante el Festival del Medio Otoño, el rendang durante Hari Raya, y los dulces durante 
                  Deepavali forman parte integral de las celebraciones.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-theater-masks text-warning me-2"></i>
                  Artes escénicas
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  La ópera china, el wayang kulit (teatro de sombras malayo) y el bharatanatyam (danza clásica india)
                  se presentan regularmente durante festivales culturales, preservando formas artísticas ancestrales.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-hands text-warning me-2"></i>
                  Rituales familiares
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Las reuniones familiares durante festividades, como la cena de reunión en Año Nuevo Chino 
                  o la ruptura del ayuno durante Ramadán, mantienen la cohesión social y la transmisión de valores.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-store-alt text-warning me-2"></i>
                  Mercados festivos
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Los bazares temporales como el Pasar Malam durante Ramadán o los mercados de Año Nuevo Chino 
                  en Chinatown son espacios vibrantes donde se comercian artículos festivos especiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text="Las festividades en Singapur no son solo celebraciones, sino puentes culturales que permiten a los ciudadanos experimentar y apreciar las tradiciones de sus compatriotas de diferentes etnias."
        author="Lawrence Wong, Ministro de Finanzas de Singapur"
        variant="warning"
        citation="9"
      />

      <Timeline 
        events={eventosFestivos} 
        title="Calendario festivo anual" 
        variant="warning" 
      />
    </div>
  );
};

export default FestividadesTradiciones;