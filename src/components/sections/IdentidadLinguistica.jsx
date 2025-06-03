import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Quote from '../common/Quote';
import Timeline from '../ui/Timeline';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente que muestra información detallada sobre la identidad lingüística de Singapur
 */
const IdentidadLinguistica = () => {
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  const { t } = useTranslation();

  // Imágenes para la galería - usar getAssetPath para normalizar rutas y traducciones
  const imagenesLinguistica = [
    {
      src: getAssetPath("/images/merlion-statue.jpg"),
      alt: t('sections.linguisticSection.images.multilingualSigns.alt'),
      caption: t('sections.linguisticSection.images.multilingualSigns.caption')
    },
    {
      src: getAssetPath("/images/singapore-skyline.jpg"),
      alt: t('sections.linguisticSection.images.schoolBilingual.alt'),
      caption: t('sections.linguisticSection.images.schoolBilingual.caption')
    },
    {
      src: getAssetPath("/images/singlish-example.jpg"),
      alt: t('sections.linguisticSection.images.singlish.alt'),
      caption: t('sections.linguisticSection.images.singlish.caption')
    },
    {
      src: getAssetPath("/images/language-campaign.jpg"),
      alt: t('sections.linguisticSection.images.languageCampaign.alt'),
      caption: t('sections.linguisticSection.images.languageCampaign.caption')
    }
  ];
  
  // Eventos para la línea de tiempo usando claves de traducción
  const timelineLinguistico = [
    {
      year: 1965,
      title: t('sections.linguisticSection.timeline.independence.title'),
      description: t('sections.linguisticSection.timeline.independence.description'),
      importance: "high"
    },
    {
      year: 1966,
      title: t('sections.linguisticSection.timeline.bilingualPolicy.title'),
      description: t('sections.linguisticSection.timeline.bilingualPolicy.description'),
      importance: "high"
    },
    {
      year: 1979,
      title: t('sections.linguisticSection.timeline.speakMandarin.title'),
      description: t('sections.linguisticSection.timeline.speakMandarin.description'),
      importance: "medium"
    },
    {
      year: 1987,
      title: t('sections.linguisticSection.timeline.englishMain.title'),
      description: t('sections.linguisticSection.timeline.englishMain.description'),
      importance: "medium"
    },
    {
      year: 2004,
      title: t('sections.linguisticSection.timeline.mothertongue.title'),
      description: t('sections.linguisticSection.timeline.mothertongue.description'),
      importance: "medium"
    },
    {
      year: 2000,
      title: t('sections.linguisticSection.timeline.singlishDebate.title'),
      description: t('sections.linguisticSection.timeline.singlishDebate.description'),
      importance: "medium"
    }
  ];

  // Ejemplos de Singlish usando claves de traducción
  const ejemplosSinglish = [
    { 
      frase: t('sections.linguisticSection.singlishExamples.example1.phrase'), 
      traduccion: t('sections.linguisticSection.singlishExamples.example1.meaning') 
    },
    { 
      frase: t('sections.linguisticSection.singlishExamples.example2.phrase'), 
      traduccion: t('sections.linguisticSection.singlishExamples.example2.meaning') 
    },
    { 
      frase: t('sections.linguisticSection.singlishExamples.example3.phrase'), 
      traduccion: t('sections.linguisticSection.singlishExamples.example3.meaning') 
    },
    { 
      frase: t('sections.linguisticSection.singlishExamples.example4.phrase'), 
      traduccion: t('sections.linguisticSection.singlishExamples.example4.meaning') 
    },
    { 
      frase: t('sections.linguisticSection.singlishExamples.example5.phrase'), 
      traduccion: t('sections.linguisticSection.singlishExamples.example5.meaning') 
    }
  ];

  return (
    <div className="identidad-linguistica">
      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.linguisticSection.multilinguismTitle')}
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.linguisticSection.multilinguismP1')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.linguisticSection.multilinguismP2')}
            </p>
            <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.linguisticSection.multilinguismP3')}
            </p>
          </div>
          <div className="col-lg-4">
            <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className={`card-header ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'} text-white`}>
                <h5 className="card-title mb-0">{t('sections.linguisticSection.keyFeatures')}</h5>
              </div>
              <ul className={`list-group list-group-flush ${isDark ? 'bg-dark' : ''}`}>
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">{t('sections.linguisticSection.languages.english.title')}</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      {t('sections.linguisticSection.languages.english.status')}
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">{t('sections.linguisticSection.languages.mandarin.title')}</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      {t('sections.linguisticSection.languages.mandarin.status')}
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">{t('sections.linguisticSection.languages.malay.title')}</span>
                      <i className="fas fa-flag text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      {t('sections.linguisticSection.languages.malay.status')}
                    </span>
                  </div>
                </li>
                
                <li className={`list-group-item ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fw-medium fs-5 me-2">{t('sections.linguisticSection.languages.tamil.title')}</span>
                      <i className="fas fa-check-circle text-primary ms-1"></i>
                    </div>
                    <span className={`badge ${isDark ? 'bg-primary bg-opacity-75' : 'bg-primary'}`}>
                      {t('sections.linguisticSection.languages.tamil.status')}
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
        title={t('sections.linguisticSection.galleryTitle')}
        variant="primary"
      />

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.linguisticSection.singlishTitle')}
        </h2>
        <p className={`mb-3 ${isDark ? 'text-light' : ''}`}>
          {t('sections.linguisticSection.singlishDesc')}
        </p>
        
        <div className={`card ${isDark ? 'bg-dark border-secondary' : 'bg-white'} mb-4`}>
          <div className="card-body">
            <h3 className={`h4 mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.linguisticSection.singlishExamples.title')}
            </h3>
            
            {ejemplosSinglish.map((ejemplo, index) => (
              <div key={index} className="mb-3">
                <div className={`p-3 rounded ${isDark ? 'bg-secondary bg-opacity-25 text-light' : 'bg-light'}`}>
                  <p className="mb-0 font-monospace">"{ejemplo.frase}"</p>
                </div>
                <p className={`mt-2 ${isDark ? 'text-light' : ''}`}>
                  <span className="fw-bold">{isEnglish ? 'Meaning:' : 'Traducción:'}</span> 
                  <span className={`ms-2 ${isDark ? 'text-info' : 'text-primary'}`}>
                    {ejemplo.traduccion}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <Quote 
          text={t('quote.linguisticPolicy')}
          author={t('quote.linguisticPolicySource')}
          variant="primary"
          citation="3"
        />
      </section>

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.linguisticSection.languageCampaigns.title')}
        </h2>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-bullhorn text-primary me-2"></i>
                  {t('sections.linguisticSection.languageCampaigns.speakGoodEnglish.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.linguisticSection.languageCampaigns.speakGoodEnglish.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-comment-alt text-primary me-2"></i>
                  {t('sections.linguisticSection.languageCampaigns.speakMandarin.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.linguisticSection.languageCampaigns.speakMandarin.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-calendar-alt text-primary me-2"></i>
                  {t('sections.linguisticSection.languageCampaigns.malayLanguage.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.linguisticSection.languageCampaigns.malayLanguage.desc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <div className="card-body">
                <h5 className={`card-title ${isDark ? 'text-light' : ''}`}>
                  <i className="fas fa-music text-primary me-2"></i>
                  {t('sections.linguisticSection.languageCampaigns.tamilLanguage.title')}
                </h5>
                <p className={`card-text ${isDark ? 'text-light' : ''}`}>
                  {t('sections.linguisticSection.languageCampaigns.tamilLanguage.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className={`h3 mb-4 ${isDark ? 'text-light' : ''}`}>
          {t('sections.linguisticSection.languageStats')}
        </h2>
        
        <div className={`card mb-4 ${isDark ? 'bg-dark border-secondary' : ''}`}>
          <div className="card-body">
            <h3 className={`h5 mb-3 ${isDark ? 'text-light' : ''}`}>
              {t('sections.linguisticSection.mostSpokenLanguage')}
            </h3>
            
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.english')}
                    </span>
                    <span className="fw-bold text-primary">
                      {t('sections.linguisticSection.english%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '48.3%'}}></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.mandarin')}
                    </span>
                    <span className="fw-bold text-info">
                      {t('sections.linguisticSection.mandarin%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '29.9%'}}></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.malay')}
                    </span>
                    <span className="fw-bold text-success">
                      {t('sections.linguisticSection.malay%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '9.2%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.dialect')}
                    </span>
                    <span className="fw-bold text-warning">
                      {t('sections.linguisticSection.dialect%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '8.7%'}}></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.tamil')}
                    </span>
                    <span className="fw-bold text-danger">
                      {t('sections.linguisticSection.tamil%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '2.5%'}}></div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className={isDark ? 'text-light' : ''}>
                      {t('sections.linguisticSection.others')}
                    </span>
                    <span className="fw-bold text-secondary">
                      {t('sections.linguisticSection.others%')}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" role="progressbar" style={{width: '1.4%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className={`small mt-3 mb-0 ${isDark ? 'text-light' : 'text-secondary'}`}>
              {t('sections.linguisticSection.statsSource')}
            </p>
          </div>
        </div>
      </section>

      <Timeline 
        events={timelineLinguistico} 
        title={t('sections.linguisticSection.timeline.title')} 
        variant="primary" 
      />
    </div>
  );
};

export default IdentidadLinguistica;