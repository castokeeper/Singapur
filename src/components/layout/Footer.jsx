import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { isEnglish } = useLanguage();
  const { t } = useTranslation();
  
  // Determinar clases CSS según el tema actual
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const secondaryTextClass = theme === 'dark' ? 'text-secondary' : 'text-muted';
  const linkClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const borderClass = theme === 'dark' ? 'border-secondary' : 'border-light';
  
  return (
    <footer className={`${bgClass} ${textClass} py-4 mt-auto`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h5>{t('siteTitle')}</h5>
            <p className={`${secondaryTextClass} mb-0`}>
              {t('footer.description')}
            </p>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>{t('footer.sections')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/seccion/linguistica" className={`nav-link p-0 ${linkClass}`}>
                  {t('navigation.linguisticIdentity')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/monetario" className={`nav-link p-0 ${linkClass}`}>
                  {t('navigation.monetarySystem')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/festividades" className={`nav-link p-0 ${linkClass}`}>
                  {t('navigation.festivals')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/modernidad" className={`nav-link p-0 ${linkClass}`}>
                  {t('navigation.modernity')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>{t('footer.links')}</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/referencias" className={`nav-link p-0 ${linkClass}`}>
                  {t('navigation.references')}
                </Link>
              </li>
              <li className="nav-item">
                <a 
                  href={isEnglish ? "https://www.visitsingapore.com/en/" : "https://www.visitsingapore.com/es_es/"} 
                  className={`nav-link p-0 ${linkClass}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('footer.tourism')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className={`my-4 ${borderClass}`} />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <p className="mb-0">© {currentYear} {t('siteTitle')}</p>
          <p className="mb-0">
            <a 
              href="#" 
              className={`${linkClass} me-3`}
              aria-label={t('accessibility.socialMedia.facebook')}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="#" 
              className={`${linkClass} me-3`}
              aria-label={t('accessibility.socialMedia.twitter')}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href="#" 
              className={`${linkClass}`}
              aria-label={t('accessibility.socialMedia.instagram')}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;