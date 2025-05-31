import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente de fallback para mostrar durante la carga de componentes lazy
 * Muestra un spinner y un mensaje de carga
 * Compatible con tema oscuro/claro y robusto ante uso fuera del ThemeProvider
 */
const LoadingFallback = () => {
  // Estado local para manejar el tema en caso de error
  const [themeState, setThemeState] = useState('light');
  
  // Obtener el tema del contexto de forma segura
  let theme = 'light';
  try {
    const themeContext = useTheme();
    if (themeContext && themeContext.theme) {
      theme = themeContext.theme;
    }
  } catch (error) {
    // Tema por defecto si no hay contexto disponible
    theme = themeState;
  }
  
  // Effect para determinar el tema si no hay contexto
  useEffect(() => {
    // Si el tema ya viene del contexto, no necesitamos hacer nada
    if (theme !== 'light') return;
    
    try {
      if (typeof window !== 'undefined') {
        // Verificar localStorage primero
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setThemeState(savedTheme);
          return;
        }
        
        // Si no hay tema guardado, usar preferencias del sistema
        const prefersDarkMode = window.matchMedia && 
          window.matchMedia('(prefers-color-scheme: dark)').matches;
          
        setThemeState(prefersDarkMode ? 'dark' : 'light');
      }
    } catch (error) {
      console.log('Error al determinar el tema:', error);
    }
  }, [theme]);

  // Determinar clases en base al tema final (contexto o fallback)
  const isDark = theme === 'dark';
  const spinnerColorClass = isDark ? 'text-light' : 'text-primary';
  const containerClass = isDark ? 'bg-dark' : '';
  const textClass = isDark ? 'text-light' : 'text-dark';
  const subTextClass = isDark ? 'text-secondary' : 'text-muted';

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center py-5 ${containerClass}`} style={{ minHeight: '300px' }}>
      <div className={`spinner-border ${spinnerColorClass} mb-4`} role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className={`lead fw-bold mb-2 ${textClass}`}>
        Cargando contenido...
      </p>
      <p className={`small ${subTextClass}`}>
        Por favor espere mientras se prepara la información sobre Singapur.
      </p>
    </div>
  );
};

export default LoadingFallback;