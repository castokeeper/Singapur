import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import { useTheme } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetUtils';
import useViewportSize from '../../hooks/useViewportSize';

/**
 * Componente que muestra información sobre la modernidad y visión de futuro de Singapur
 */
const ModernidadVision = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const { device } = useViewportSize();
  
  // Imágenes para la galería con traducciones
  const imagenesModernidad = [
    {
      src: getAssetPath("/images/smart-nation-center.jpg"),
      alt: t('sections.modernity.images.smartNation.alt'),
      caption: t('sections.modernity.images.smartNation.caption')
    },
    {
      src: getAssetPath("/images/gardens-by-the-bay.jpg"),
      alt: t('sections.modernity.images.gardens.alt'),
      caption: t('sections.modernity.images.gardens.caption')
    },
    {
      src: getAssetPath("/images/autonomous-vehicle.jpg"),
      alt: t('sections.modernity.images.autonomous.alt'),
      caption: t('sections.modernity.images.autonomous.caption')
    },
    {
      src: getAssetPath("/images/digital-services.jpg"),
      alt: t('sections.modernity.images.digitalServices.alt'),
      caption: t('sections.modernity.images.digitalServices.caption')
    }
  ];
  
  // Línea de tiempo con datos de traducción
  const hitos = [
    {
      year: "1980",
      title: t('sections.modernity.timeline.computerization.title'),
      description: t('sections.modernity.timeline.computerization.description'),
      importance: "medium"
    },
    {
      year: "1992",
      title: t('sections.modernity.timeline.itMasterPlan.title'),
      description: t('sections.modernity.timeline.itMasterPlan.description'),
      importance: "medium"
    },
    {
      year: "2006",
      title: t('sections.modernity.timeline.broadband.title'),
      description: t('sections.modernity.timeline.broadband.description'),
      importance: "medium"
    },
    {
      year: "2014",
      title: t('sections.modernity.timeline.smartNation.title'),
      description: t('sections.modernity.timeline.smartNation.description'),
      importance: "high"
    },
    {
      year: "2016",
      title: t('sections.modernity.timeline.researchInnovation.title'),
      description: t('sections.modernity.timeline.researchInnovation.description'),
      importance: "medium"
    },
    {
      year: "2018",
      title: t('sections.modernity.timeline.digitalEconomy.title'),
      description: t('sections.modernity.timeline.digitalEconomy.description'),
      importance: "high"
    },
    {
      year: "2020",
      title: t('sections.modernity.timeline.digitalGovernment.title'),
      description: t('sections.modernity.timeline.digitalGovernment.description'),
      importance: "high"
    }
  ];

  return (
    <div className="modernidad-vision">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.smartNationTitle')}
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.modernity.smartNationP1')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.modernity.smartNationP2')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.modernity.smartNationP3')}
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-info bg-opacity-75' : 'bg-info'} text-white`}>
                <h5 className="card-title mb-0">{t('sections.modernity.keyFeatures')}</h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.modernity.keyFeature1')}</span>
                  <i className="fas fa-check-circle text-info"></i>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.modernity.keyFeature2')}</span>
                  <i className="fas fa-check-circle text-info"></i>
                </li>
                <li className={`list-group-item d-flex justify-content-between align-items-center ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <span className="fw-medium">{t('sections.modernity.keyFeature3')}</span>
                  <i className="fas fa-check-circle text-info"></i>
                </li>
              </ul>
            </div>

            {/* Estadísticas digitales */}
            <div className="card bg-info text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">{t('sections.modernity.stats.digitalRanking')}</h5>
                <p className="display-4 text-center mb-3">{t('sections.modernity.stats.rankPosition')}</p>
                <p className="card-text text-center">
                  {t('sections.modernity.stats.rankDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery 
        images={imagenesModernidad} 
        title={t('sections.modernity.galleryTitle')} 
        variant="info"
      />

      {/* Sección de proyectos clave */}
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.keyProjects.title')}
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-id-card text-info me-2"></i>
                  {t('sections.modernity.keyProjects.digitalIdentity.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.digitalIdentity.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-network-wired text-info me-2"></i>
                  {t('sections.modernity.keyProjects.sensorsNetwork.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.sensorsNetwork.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-credit-card text-info me-2"></i>
                  {t('sections.modernity.keyProjects.payments.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.payments.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-car text-info me-2"></i>
                  {t('sections.modernity.keyProjects.autonomousVehicles.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.autonomousVehicles.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-heartbeat text-info me-2"></i>
                  {t('sections.modernity.keyProjects.healthtech.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.healthtech.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-shield-alt text-info me-2"></i>
                  {t('sections.modernity.keyProjects.cybersecurity.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.keyProjects.cybersecurity.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.urbanPlanningTitle')}
        </h2>
        <p className={`mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.urbanPlanningDesc')}
        </p>
        
        {/* Estadísticas adicionales */}
        <div className="row row-cols-2 row-cols-md-3 g-2 g-md-4 mb-4">
          <div className="col">
            <div className={`card ${isDark ? 'bg-dark border-secondary text-light' : 'bg-light'}`}>
              <div className="card-body text-center p-2 p-md-3">
                <h5 className={`card-title ${device === 'mobile' ? 'fs-6' : ''}`}>
                  {t('sections.modernity.stats.highSpeedTitle')}
                </h5>
                <p className={`${device === 'mobile' ? 'fs-5' : 'display-4'} fw-bold text-info mb-1`}>
                  {t('sections.modernity.stats.highSpeedValue')}
                </p>
                <p className="text-muted small">{t('sections.modernity.stats.highSpeedDesc')}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${isDark ? 'bg-dark border-secondary text-light' : 'bg-light'}`}>
              <div className="card-body text-center p-2 p-md-3">
                <h5 className={`card-title ${device === 'mobile' ? 'fs-6' : ''}`}>
                  {t('sections.modernity.stats.digitalLiteracyTitle')}
                </h5>
                <p className={`${device === 'mobile' ? 'fs-5' : 'display-4'} fw-bold text-info mb-1`}>
                  {t('sections.modernity.stats.digitalLiteracyValue')}
                </p>
                <p className="text-muted small">{t('sections.modernity.stats.digitalLiteracyDesc')}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${isDark ? 'bg-dark border-secondary text-light' : 'bg-light'}`}>
              <div className="card-body text-center p-2 p-md-3">
                <div className="d-flex flex-column align-items-center">
                  <i className="fas fa-laptop-code text-info fa-3x mb-3"></i>
                  <p className="mb-1">
                    {t('sections.modernity.digitalEconomy.title')}
                  </p>
                  <p className={`${isDark ? 'text-light' : 'text-dark'} small`}>
                    {t('sections.modernity.digitalEconomy.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className={`small text-muted mt-2 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.stats.statsSource')}
        </p>
      </section>

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.modernity.challengeOpportunities.title')}
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-user-friends text-info me-2"></i>
                  {t('sections.modernity.challengeOpportunities.aging.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.challengeOpportunities.aging.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-user-shield text-info me-2"></i>
                  {t('sections.modernity.challengeOpportunities.privacy.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.challengeOpportunities.privacy.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-users-cog text-info me-2"></i>
                  {t('sections.modernity.challengeOpportunities.workforce.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.challengeOpportunities.workforce.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-wifi text-info me-2"></i>
                  {t('sections.modernity.challengeOpportunities.digital.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.modernity.challengeOpportunities.digital.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Quote 
        text={t('quote.modernity')}
        author={t('quote.modernitySource')}
        variant="info"
        citation="15"
      />

      <div className={`alert ${isDark ? 'alert-info bg-opacity-25' : 'alert-info bg-opacity-25'} mb-5`}>
        <h5 className="alert-heading">
          {t('sections.modernity.futureDirections.title')}
        </h5>
        <p>
          {t('sections.modernity.futureDirections.description')}
        </p>
      </div>

      <Timeline 
        events={hitos} 
        title={t('sections.modernity.timeline.title')} 
        variant="info" 
      />
    </div>
  );
};

export default ModernidadVision;