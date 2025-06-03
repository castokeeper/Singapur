import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Crear el contexto
const LanguageContext = createContext({
  currentLanguage: 'en',
  changeLanguage: () => {},
  isEnglish: true
});

// Provider
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  // Cambiar idioma
  const changeLanguage = (lang) => {
    console.log(`Cambiando idioma a: ${lang}`);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    // Cambiar el atributo lang del HTML
    document.documentElement.setAttribute('lang', lang);
  };

  // Inicialización
  useEffect(() => {
    // Obtener el idioma guardado o usar el predeterminado
    const savedLanguage = localStorage.getItem('i18nextLng');
    const initialLanguage = savedLanguage || 'en';
    
    // Establecer idioma inicial
    if (i18n.language !== initialLanguage) {
      i18n.changeLanguage(initialLanguage);
      setCurrentLanguage(initialLanguage);
    }

    // Actualizar cuando cambie i18n
    const handleLanguageChanged = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  // Valor del contexto
  const contextValue = {
    currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};

export default LanguageContext;