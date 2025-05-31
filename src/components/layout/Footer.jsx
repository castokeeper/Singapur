import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  // Determinar clases CSS según el tema actual
  const bgClass = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const secondaryTextClass = theme === 'dark' ? 'text-secondary' : 'text-muted';
  const linkClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const borderClass = theme === 'dark' ? 'border-secondary' : 'border-light';
  
  return (
    <footer className={`${bgClass} ${textClass} py-4 mt-auto`}>
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h5>Singapur: Una Mirada Profunda</h5>
            <p className={`${secondaryTextClass} mb-0`}>
              Análisis detallado de la identidad cultural, sistema monetario, 
              festividades y modernidad de Singapur.
            </p>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>Secciones</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/seccion/linguistica" className={`nav-link p-0 ${linkClass}`}>
                  Identidad Lingüística
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/monetario" className={`nav-link p-0 ${linkClass}`}>
                  Sistema Monetario
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/festividades" className={`nav-link p-0 ${linkClass}`}>
                  Festividades
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/modernidad" className={`nav-link p-0 ${linkClass}`}>
                  Modernidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>Enlaces</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/referencias" className={`nav-link p-0 ${linkClass}`}>
                  Referencias
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://www.visitsingapore.com/es_es/" className={`nav-link p-0 ${linkClass}`} target="_blank" rel="noopener noreferrer">
                  Turismo en Singapur
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className={`my-4 ${borderClass}`} />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <p className="mb-0">© {currentYear} Singapur: Una Mirada Profunda</p>
          <p className="mb-0">
            <a href="#" className={`${linkClass} me-3`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={`${linkClass} me-3`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={`${linkClass}`}>
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;