import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones directamente
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Recursos de traducción
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  // Cargar traducciones
  .use(Backend)
  // Detectar idioma
  .use(LanguageDetector)
  // Pasar i18n a react-i18next
  .use(initReactI18next)
  // Inicializar configuración
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto: inglés
    debug: 'development',
    
    interpolation: {
      escapeValue: false // No es necesario para React
    },
    
    // Opciones de detección
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;