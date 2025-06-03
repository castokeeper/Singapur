import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importar i18n primero para que esté disponible
import './i18n';

// Importar proveedores
import ThemeProvider from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageContext';

// Estilos globales
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);