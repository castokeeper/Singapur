import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  // Verificar si hay una preferencia guardada en localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Si no hay preferencia guardada, usar preferencia del sistema
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme());

  // Cambiar entre temas
  const toggleTheme = () => {
    setIsDark(prevIsDark => {
      const newValue = !prevIsDark;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  // Aplicar la clase al elemento body cuando cambia el tema
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark'); // Cambiado de 'dark-theme' a 'dark'
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light'); // Cambiado de 'light-theme' a 'light'
      document.body.classList.remove('dark');
    }
    
    // También asegurar que no haya otras clases de tema
    document.body.classList.remove('dark-mode', 'dark-theme', 'light-theme');
    
    // Actualizar el atributo data-bs-theme para componentes Bootstrap
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const value = {
    isDark,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;