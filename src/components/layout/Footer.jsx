import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h5>Singapur: Una Mirada Profunda</h5>
            <p className="text-secondary mb-0">
              Análisis detallado de la identidad cultural, sistema monetario, 
              festividades y modernidad de Singapur.
            </p>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>Secciones</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/seccion/linguistica" className="nav-link p-0 text-white">
                  Identidad Lingüística
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/monetario" className="nav-link p-0 text-white">
                  Sistema Monetario
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/festividades" className="nav-link p-0 text-white">
                  Festividades
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seccion/modernidad" className="nav-link p-0 text-white">
                  Modernidad
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-md-3">
            <h5>Enlaces</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/referencias" className="nav-link p-0 text-white">
                  Referencias
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://www.visitsingapore.com/es_es/" className="nav-link p-0 text-white" target="_blank" rel="noopener noreferrer">
                  Turismo en Singapur
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          <p className="mb-0">© {currentYear} Singapur: Una Mirada Profunda</p>
          <p className="mb-0">
            <a href="#" className="text-white me-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;