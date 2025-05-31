import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ui/ImageGallery';
import Quote from '../components/common/Quote';
import Hero from '../components/ui/Hero';
import { useTheme } from '../context/ThemeContext';
import { getAssetPath } from '../utils/assetUtils';

const Home = () => {
  const { isDark } = useTheme();
  
  // Imágenes para la galería principal
  const highlightImages = [
    {
      src: getAssetPath('/images/singapore-skyline.jpg'),
      alt: "Vista panorámica de Singapur",
      caption: "El impresionante horizonte de Singapur"
    },
    {
      src: getAssetPath('/images/merlion-statue.jpg'),
      alt: "Estatua del Merlion",
      caption: "El icónico Merlion, símbolo de Singapur"
    },
    {
      src: getAssetPath('/images/gardens-by-the-bay.jpg'),
      alt: "Gardens by the Bay",
      caption: "Los futuristas Supertrees en Gardens by la Bahía"
    }
  ];

  return (
    <div className="theme-transition">
      <Hero 
        backgroundImage={getAssetPath('/images/singapore-skyline.jpg')}
        title="Singapur: Una Mirada Profunda"
        subtitle="Descubre el fascinante contraste entre tradición y modernidad en esta pequeña nación insular del Sudeste Asiático"
        buttonText="Comenzar Exploración"
        buttonLink="/seccion/linguistica"
      />

      <section className="mb-5">
        <ImageGallery images={highlightImages} title="Singapur en Imágenes" />
      </section>

      <section className="mb-5">
        <h2 className={`mb-4 ${isDark ? 'text-light' : ''}`}>¿Qué Exploraremos?</h2>
        <div className="row g-4">
          {/* Tarjeta de Identidad Lingüística */}
          <div className="col-md-6 col-lg-3">
            <div className={`card h-100 shadow-sm theme-transition ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <div className="text-primary mb-3">
                  <i className="fas fa-language fa-2x"></i>
                </div>
                <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>Identidad Lingüística</h3>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Análisis del multilingüismo oficial y su rol en la identidad nacional.
                </p>
                <Link to="/seccion/linguistica" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-primary'} mt-2`}>
                  Explorar
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de Sistema Monetario */}
          <div className="col-md-6 col-lg-3">
            <div className={`card h-100 shadow-sm theme-transition ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <div className={`${isDark ? 'text-success' : 'text-success'} mb-3`}>
                  <i className="fas fa-dollar-sign fa-2x"></i>
                </div>
                <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>Sistema Monetario</h3>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Evolución y relevancia del dólar singapurense en la economía global.
                </p>
                <Link to="/seccion/monetario" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-success'} mt-2`}>
                  Explorar
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de Festividades */}
          <div className="col-md-6 col-lg-3">
            <div className={`card h-100 shadow-sm theme-transition ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <div className={`${isDark ? 'text-warning' : 'text-warning'} mb-3`}>
                  <i className="fas fa-dragon fa-2x"></i>
                </div>
                <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>Festividades</h3>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  Celebraciones multiculturales que reflejan la diversidad étnica del país.
                </p>
                <Link to="/seccion/festividades" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-warning'} mt-2`}>
                  Explorar
                </Link>
              </div>
            </div>
          </div>

          {/* Tarjeta de Modernidad */}
          <div className="col-md-6 col-lg-3">
            <div className={`card h-100 shadow-sm theme-transition ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <div className={`${isDark ? 'text-info' : 'text-info'} mb-3`}>
                  <i className="fas fa-city fa-2x"></i>
                </div>
                <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>Modernidad</h3>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  El avance tecnológico y la visión de Smart Nation de Singapur.
                </p>
                <Link to="/seccion/modernidad" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-info'} mt-2`}>
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Quote 
          text="Singapur es una historia extraordinaria de cómo un pequeño país puede prosperar contra todo pronóstico, reinventándose constantemente."
          author="Lee Hsien Loong, Primer Ministro de Singapur"
          variant={isDark ? "info" : "primary"}
        />
      </section>
    </div>
  );
};

export default Home;