import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  const { isEnglish } = useLanguage();
  const { t } = useTranslation();
  
  // Podemos usar el idioma para establecer atributos a nivel del documento
  // que pueden ayudar a la accesibilidad y SEO
  React.useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'es';
    
    // Opcional: actualizar el título del documento basado en el idioma
    document.title = t('siteTitle');
    
    // También podemos agregar una meta description para SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('siteDescription'));
    }
  }, [isEnglish, t]);
  
  return (
    <div className={`main-container ${theme}`} dir={isEnglish ? 'ltr' : 'ltr'}>
      {children}
    </div>
  );
};

export default MainLayout;