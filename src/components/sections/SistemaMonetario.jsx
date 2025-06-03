import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetUtils';
import useViewportSize from '../../hooks/useViewportSize';

/**
 * Componente que muestra información sobre el sistema monetario de Singapur
 */
const SistemaMonetario = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const { device } = useViewportSize();
  
  // Imágenes para la galería monetaria con rutas actualizadas y claves de traducción
  const imagenesBilletes = [
    {
      src: getAssetPath("/images/sgd-notes.jpg"),
      alt: t('sections.monetarySystem.images.notes.alt'),
      caption: t('sections.monetarySystem.images.notes.caption')
    },
    {
      src: getAssetPath("/images/mas-building.jpg"), 
      alt: t('sections.monetarySystem.images.mas.alt'),
      caption: t('sections.monetarySystem.images.mas.caption')
    },
    {
      src: getAssetPath("/images/singapore-coins.jpg"),
      alt: t('sections.monetarySystem.images.coins.alt'),
      caption: t('sections.monetarySystem.images.coins.caption')
    }
  ];
  
  // Línea de tiempo del sistema monetario con claves de traducción
  const eventosMoney = [
    {
      year: "1967",
      title: t('sections.monetarySystem.timeline.creation.title'),
      description: t('sections.monetarySystem.timeline.creation.description'),
      importance: "high"
    },
    {
      year: "1971",
      title: t('sections.monetarySystem.timeline.mas.title'),
      description: t('sections.monetarySystem.timeline.mas.description'),
      importance: "high"
    },
    {
      year: "1985",
      title: t('sections.monetarySystem.timeline.exchangePolicy.title'),
      description: t('sections.monetarySystem.timeline.exchangePolicy.description'),
      importance: "medium"
    },
    {
      year: "2002",
      title: t('sections.monetarySystem.timeline.portraitSeries.title'),
      description: t('sections.monetarySystem.timeline.portraitSeries.description'),
      importance: "medium"
    },
    {
      year: "2011",
      title: t('sections.monetarySystem.timeline.coreInflation.title'),
      description: t('sections.monetarySystem.timeline.coreInflation.description'),
      importance: "medium"
    },
    {
      year: "2017",
      title: t('sections.monetarySystem.timeline.fintechFestival.title'),
      description: t('sections.monetarySystem.timeline.fintechFestival.description'),
      importance: "high"
    }
  ];

  return (
    <div className="sistema-monetario">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.monetarySystem.dollarTitle')}
        </h2>
        <div className="row">
          <div className={device === 'mobile' ? 'col-12 mb-4' : 'col-lg-8'}>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.monetarySystem.dollarP1')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.monetarySystem.dollarP2')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.monetarySystem.dollarP3')}
            </p>
          </div>
          <div className={device === 'mobile' ? 'col-12' : 'col-lg-4'}>
            <div className="mb-4">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">{t('sections.monetarySystem.globalRanking')}</h5>
                  <p className="display-4 text-center mb-3">{t('sections.monetarySystem.rankPosition')}</p>
                  <p className="card-text text-center">
                    {t('sections.monetarySystem.rankDescription')}
                  </p>
                </div>
              </div>
            </div>
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  {t('sections.monetarySystem.keyFeatures')}
                </h5>
                <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-chart-line text-success me-2"></i>
                    {t('sections.monetarySystem.keyFeature1')}
                  </li>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-lock text-success me-2"></i>
                    {t('sections.monetarySystem.keyFeature2')}
                  </li>
                  <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                    <i className="fas fa-exchange-alt text-success me-2"></i>
                    {t('sections.monetarySystem.keyFeature3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesBilletes} 
        title={t('sections.monetarySystem.galleryTitle')} 
        variant="success"
      />

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.monetarySystem.financialCenterTitle')}
        </h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          {t('sections.monetarySystem.financialCenterDesc')}
        </p>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-university text-success me-2"></i>
                  {t('sections.monetarySystem.banking.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.monetarySystem.banking.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-chart-pie text-success me-2"></i>
                  {t('sections.monetarySystem.wealthManagement.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.monetarySystem.wealthManagement.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-laptop-code text-success me-2"></i>
                  {t('sections.monetarySystem.fintech.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.monetarySystem.fintech.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-balance-scale text-success me-2"></i>
                  {t('sections.monetarySystem.regulation.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.monetarySystem.regulation.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text={t('quote.monetarySystem')}
        author={t('quote.monetarySystemSource')}
        variant="success"
        citation="8"
      />

      <Timeline 
        events={eventosMoney} 
        title={t('sections.monetarySystem.timeline.title')} 
        variant="success" 
      />
    </div>
  );
};

export default SistemaMonetario;