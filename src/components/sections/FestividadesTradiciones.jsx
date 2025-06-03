import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Quote from '../common/Quote';
import ImageGallery from '../ui/ImageGallery';
import Timeline from '../ui/Timeline';
import { getAssetPath } from '../../utils/assetUtils';

const FestividadesTradiciones = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  
  // Imágenes con rutas correctas y claves de traducción
  const imagenesFestividades = [
    {
      src: getAssetPath('/images/festividades/festival-chino.jpg'),
      alt: t('sections.festivals.images.chineseNewYear.alt'),
      caption: t('sections.festivals.images.chineseNewYear.caption')
    },
    {
      src: getAssetPath('/images/festividades/festival-deepavali.jpg'),
      alt: t('sections.festivals.images.deepavali.alt'),
      caption: t('sections.festivals.images.deepavali.caption')
    },
    {
      src: getAssetPath('/images/festividades/festival-hari-raya.jpg'),
      alt: t('sections.festivals.images.hariRaya.alt'),
      caption: t('sections.festivals.images.hariRaya.caption')
    }
  ];
  
  // Timeline con eventos festivos traducidos y formato consistente
  const eventosFestivos = [
    {
      year: t('timeline.months.janFeb'),
      title: t('sections.festivals.chineseNewYear'),
      description: t('sections.festivals.chineseNewYearDesc'),
      importance: "high"
    },
    {
      year: t('timeline.months.aprMay'),
      title: t('sections.festivals.vesak'),
      description: t('sections.festivals.vesakDesc'),
      importance: "medium"
    },
    {
      year: t('timeline.months.mayJun'),
      title: t('sections.festivals.hariRaya'),
      description: t('sections.festivals.hariRayaDesc'),
      importance: "high"
    },
    {
      year: t('timeline.months.julAug'),
      title: t('sections.festivals.hungryGhost'),
      description: t('sections.festivals.hungryGhostDesc'),
      importance: "medium"
    },
    {
      year: t('timeline.months.aug'),
      title: t('sections.festivals.nationalDay'),
      description: t('sections.festivals.nationalDayDesc'),
      importance: "high"
    },
    {
      year: t('timeline.months.octNov'),
      title: t('sections.festivals.deepavali'),
      description: t('sections.festivals.deepavaliDesc'),
      importance: "high"
    },
    {
      year: t('timeline.months.dec'),
      title: t('sections.festivals.christmas'),
      description: t('sections.festivals.christmasDesc'),
      importance: "medium"
    }
  ];

  return (
    <div className="festividades-tradiciones">
      {/* Sección de armonía cultural */}
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.festivals.culturalHarmony')}
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.festivals.introduction.p1')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.festivals.introduction.p2')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.festivals.introduction.p3')}
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} text-white`}>
                <h5 className="card-title mb-0">
                  {t('sections.festivals.mainFestivals')}
                </h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.festivals.chineseNewYear')}</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    {t('sections.festivals.communities.chinese')}
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.festivals.hariRaya')}</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    {t('sections.festivals.communities.malay')}
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.festivals.deepavali')}</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    {t('sections.festivals.communities.indian')}
                  </span>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.festivals.nationalDay')}</span>
                  <span className={`badge ${isDark ? 'bg-warning bg-opacity-75' : 'bg-warning'} rounded-pill`}>
                    {t('sections.festivals.communities.national')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de imágenes */}
      <ImageGallery 
        images={imagenesFestividades} 
        title={t('sections.festivals.galleryTitle')}
        variant="warning"
        maxHeight="300px"
      />

      {/* Sección de tradiciones culturales */}
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.festivals.traditions.title')}
        </h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          {t('sections.festivals.traditions.description')}
        </p>
        
        {/* Subtítulo y visión general */}
        <h4 className={`h5 mb-3 ${isDark ? 'text-light' : ''}`}>
          {t('sections.festivals.traditions.subtitle')}
        </h4>
        <p className={`mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.festivals.traditions.overview')}
        </p>

        {/* Tarjetas de tradiciones */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          {/* Tradiciones culinarias */}
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-utensils text-warning me-2"></i>
                  {t('sections.festivals.traditions.culinary.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.culinary.description')}
                </p>
                
                {/* Ejemplos de platos tradicionales */}
                <h6 className={`mt-3 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.culinary.examples')}
                </h6>
                <ul className={`mb-0 ${isDark ? 'text-light' : ''}`}>
                  <li>{t('sections.festivals.traditions.culinary.chineseDishes')}</li>
                  <li>{t('sections.festivals.traditions.culinary.malayDishes')}</li>
                  <li>{t('sections.festivals.traditions.culinary.indianDishes')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Artes escénicas */}
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-theater-masks text-warning me-2"></i>
                  {t('sections.festivals.traditions.performingArts.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.performingArts.description')}
                </p>
                
                {/* Esfuerzos de preservación */}
                <h6 className={`mt-3 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.performingArts.preservationEfforts')}
                </h6>
                <p className={`mb-0 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.performingArts.preservationDescription')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Rituales familiares */}
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-hands text-warning me-2"></i>
                  {t('sections.festivals.traditions.familyRituals.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.familyRituals.description')}
                </p>
                
                {/* Adaptaciones modernas */}
                <h6 className={`mt-3 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.familyRituals.modernAdaptations')}
                </h6>
                <p className={`mb-0 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.familyRituals.adaptationsDescription')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Mercados festivos */}
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-store-alt text-warning me-2"></i>
                  {t('sections.festivals.traditions.festiveMarkets.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.festiveMarkets.description')}
                </p>
                
                {/* Ubicaciones populares */}
                <h6 className={`mt-3 ${isDark ? 'text-light' : ''}`}>
                  {t('sections.festivals.traditions.festiveMarkets.popularLocations')}
                </h6>
                <ul className={`mb-0 ${isDark ? 'text-light' : ''}`}>
                  <li>{t('sections.festivals.traditions.festiveMarkets.chinatownMarket')}</li>
                  <li>{t('sections.festivals.traditions.festiveMarkets.geylangSerai')}</li>
                  <li>{t('sections.festivals.traditions.festiveMarkets.littleIndia')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de evolución de tradiciones */}
        <div className={`alert ${isDark ? 'alert-warning bg-opacity-25' : 'alert-warning bg-opacity-25'} mt-4`}>
          <h5 className="alert-heading">
            {t('sections.festivals.traditions.evolutionOfTraditions.title')}
          </h5>
          <p>
            {t('sections.festivals.traditions.evolutionOfTraditions.description')}
          </p>
          <hr />
          <p className="mb-0">
            <strong>{t('sections.festivals.traditions.evolutionOfTraditions.blendingCultures')}:</strong> {' '}
            {t('sections.festivals.traditions.evolutionOfTraditions.blendingDescription')}
          </p>
        </div>
      </section>

      {/* Cita destacada */}
      <Quote 
        text={t('quote.festivals')}
        author={t('quote.festivalSource')}
        variant="warning"
        citation="9"
      />

      {/* Timeline de festividades */}
      <Timeline 
        events={eventosFestivos} 
        title={t('timeline.festivalCalendar')} 
        variant="warning" 
      />
    </div>
  );
};

export default FestividadesTradiciones;