import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  // Definir textos directamente como fallback
  const subtitle = currentLanguage === 'en' 
    ? "Discover the fascinating contrast between tradition and modernity"
    : "Descubre el fascinante contraste entre tradición y modernidad";
  
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="mb-0 fs-3 fw-bold">{t('siteTitle')}</h1>
            </Link>
            <p className="mb-0 small d-none d-md-block">
              {t('siteSubtitle') || subtitle}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;