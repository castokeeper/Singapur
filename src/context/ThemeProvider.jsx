import React, { useState, useEffect } from 'react';
import { ThemeContext } from './theme-context-value';

export const ThemeProvider = ({ children }) => {
  // Verifica si hay una preferencia guardada en localStorage, si no, usa la preferencia del sistema
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Verifica preferencia del sistema
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
    
    return 'light'; // Tema por defecto
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Actualiza el atributo data-theme en el documento HTML y guarda el tema en localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;