import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  // Estado para el tema actual
  const [theme, setTheme] = useState('light');
  
  // Efecto para inicializar el tema desde localStorage o preferencias del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Usar tema guardado si existe
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Sino, detectar preferencias del sistema
      setTheme('dark');
    }
  }, []);
  
  // Efecto para aplicar cambios cuando cambia el tema
  useEffect(() => {
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
    
    // Aplicar al documento HTML para Bootstrap 5
    document.documentElement.setAttribute('data-bs-theme', theme);
    
    // Aplicar clase al body para nuestro CSS personalizado
    // 👇 Esta es la línea clave para el fondo
    document.body.classList.toggle('dark', theme === 'dark');
    
    // Actualizar meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', 
        theme === 'dark' ? '#121212' : '#0d6efd');
    }
  }, [theme]);
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Derivar isDark para facilitar las comprobaciones en componentes
  const isDark = theme === 'dark';
  
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;