import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ui/ImageGallery';
import Quote from '../components/common/Quote';
import { useTheme } from '../context/ThemeContext';
import { getAssetPath } from '../utils/assetUtils';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  
  // Imágenes para la galería principal
  const highlightImages = [
    {
      src: getAssetPath('/images/singapore-skyline.jpg'),
      alt: isEnglish ? "Panoramic view of Singapore" : "Vista panorámica de Singapur",
      caption: isEnglish ? "The impressive Singapore skyline" : "El impresionante horizonte de Singapur"
    },
    {
      src: getAssetPath('/images/merlion-statue.jpg'),
      alt: isEnglish ? "Merlion statue" : "Estatua del Merlion",
      caption: isEnglish ? "The iconic Merlion, symbol of Singapore" : "El icónico Merlion, símbolo de Singapur"
    },
    {
      src: getAssetPath('/images/gardens-by-the-bay.jpg'),
      alt: isEnglish ? "Gardens by the Bay" : "Gardens by the Bay",
      caption: isEnglish ? "The futuristic Supertrees at Gardens by the Bay" : "Los futuristas Supertrees en Gardens by la Bahía"
    }
  ];

  // Utilizar la función getAssetPath para la imagen de fondo
  const heroBackgroundImage = "https://images.unsplash.com/photo-1565967511849-76a60a516170";

  return (
    <div className="theme-transition">
      {/* Hero con imagen de fondo */}
      <div className="hero-container">
        <img 
          src={heroBackgroundImage} 
          alt={isEnglish ? "Singapore at night" : "Singapur de noche"} 
          className="hero-bg-image"
          loading="lazy" // Para mejorar rendimiento
        />
        <div className="hero-content-wrapper">
          <div className="hero-text-container">
            <h1 className="display-4 fw-bold">{t('siteTitle')}</h1>
            <p className="lead">{t('siteDescription')}</p>
            <Link to="/seccion/linguistica" className="btn btn-light btn-lg mt-3">
              {t('exploreButton')}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container">
        <section className="mb-5">
          <ImageGallery 
            images={highlightImages} 
            title={isEnglish ? "Singapore in Images" : "Singapur en Imágenes"} 
          />
        </section>

        <section className="mb-5">
          <h2 className={`mb-4 ${isDark ? 'text-light' : ''}`}>{t('sections.whatExplore')}</h2>
          <div className="row g-4">
            {/* Tarjeta de Identidad Lingüística */}
            <div className="col-md-6 col-lg-3">
              <div className={`card h-100 shadow-sm theme-transition ${isDark ? 'bg-dark border-secondary' : ''}`}>
                <div className="card-body">
                  <div className="text-primary mb-3">
                    <i className="fas fa-language fa-2x"></i>
                  </div>
                  <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>
                    {t('sections.linguisticSection.title')}
                  </h3>
                  <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                    {t('sections.linguisticSection.description')}
                  </p>
                  <Link to="/seccion/linguistica" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-primary'} mt-2`}>
                    {t('sections.linguisticSection.explore')}
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
                  <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>
                    {t('sections.monetarySystem.title')}
                  </h3>
                  <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                    {t('sections.monetarySystem.description')}
                  </p>
                  <Link to="/seccion/monetario" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-success'} mt-2`}>
                    {t('sections.monetarySystem.explore')}
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
                  <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>
                    {t('sections.festivals.title')}
                  </h3>
                  <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                    {t('sections.festivals.description')}
                  </p>
                  <Link to="/seccion/festividades" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-warning'} mt-2`}>
                    {t('sections.festivals.explore')}
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
                  <h3 className={`h5 card-title ${isDark ? 'text-light' : ''}`}>
                    {t('sections.modernity.title')}
                  </h3>
                  <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                    {t('sections.modernity.description')}
                  </p>
                  <Link to="/seccion/modernidad" className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-info'} mt-2`}>
                    {t('sections.modernity.explore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <Quote 
            text={t('quote.singapore')}
            author={t('quote.author')}
            variant={isDark ? "info" : "primary"}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;