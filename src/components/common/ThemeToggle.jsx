import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={`btn btn-sm ${isDark ? 'btn-light' : 'btn-dark'}`}
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      <span className="ms-2 d-none d-md-inline">
        {isDark ? 'Modo claro' : 'Modo oscuro'}
      </span>
    </button>
  );
};

export default ThemeToggle;