import { useContext } from 'react';
import LanguageContext from '../context/LanguageContextDefinition';

/**
 * Hook personalizado para acceder al contexto de idioma
 * @returns {Object} Objeto con currentLanguage, changeLanguage e isEnglish
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  
  return context;
};