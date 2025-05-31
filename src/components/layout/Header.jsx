import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-context-value';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className="bg-primary text-white py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="mb-0 fs-3 fw-bold">Singapur: Una Mirada Profunda</h1>
            </Link>
            <p className="mb-0 small d-none d-md-block">
              Análisis cultural, económico y social de la Ciudad del León
            </p>
          </div>
          
          <button 
            className="btn btn-outline-light" 
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          >
            {theme === 'light' ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;