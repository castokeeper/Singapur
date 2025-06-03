import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { getAssetPath } from '../../utils/assetUtils';
import useViewportSize from '../../hooks/useViewportSize';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const { device } = useViewportSize();
  
  // Determinar clases para temas
  const navbarClasses = isDark 
    ? "navbar navbar-expand-lg navbar-dark bg-dark" 
    : "navbar navbar-expand-lg navbar-light bg-light";
  
  // Manejador para cambiar idioma
  const handleLanguageChange = (lang) => {
    console.log(`Cambiando idioma desde NavBar a: ${lang}`);
    changeLanguage(lang);
  };

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMenu = () => {
    if (device === 'mobile' || device === 'tablet') {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img 
            src={getAssetPath("/images/singapore-icon.png")} 
            alt={currentLanguage === 'en' ? 'Singapore' : 'Singapur'} 
            width="30" 
            height="24" 
            className="d-inline-block align-text-top me-2" 
          />
          {currentLanguage === 'en' ? 'Singapore' : 'Singapur'}
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>{t('navigation.home')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/seccion/linguistica" className="nav-link" onClick={closeMenu}>{t('navigation.linguisticIdentity')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/seccion/monetario" className="nav-link" onClick={closeMenu}>{t('navigation.monetarySystem')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/seccion/festividades" className="nav-link" onClick={closeMenu}>{t('navigation.festivals')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/seccion/modernidad" className="nav-link" onClick={closeMenu}>{t('navigation.modernity')}</NavLink>
            </li>
          </ul>
          
          {/* Selector de idioma */}
          <div className="d-flex align-items-center">
            <div className="dropdown me-2">
              <button 
                className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} dropdown-toggle btn-sm`} 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-globe me-1"></i>
                {currentLanguage === 'en' ? 'English' : 'Español'}
              </button>
              <ul className={`dropdown-menu ${isDark ? 'dropdown-menu-dark' : ''}`}>
                <li>
                  <button 
                    className={`dropdown-item ${currentLanguage === 'en' ? 'active' : ''}`} 
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button 
                    className={`dropdown-item ${currentLanguage === 'es' ? 'active' : ''}`} 
                    onClick={() => handleLanguageChange('es')}
                  >
                    Español
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Selector de tema */}
            <button 
              className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`} 
              onClick={toggleTheme}
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;