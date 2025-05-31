import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
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
            onClick={toggleTheme} 
            className="btn btn-sm btn-outline-light"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;