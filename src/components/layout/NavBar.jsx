import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  // Obtener el tema actual
  const { isDark } = useTheme();
  
  // Determinar las clases según el tema actual
  const navbarClasses = isDark 
    ? "navbar navbar-expand-lg bg-dark navbar-dark" 
    : "navbar navbar-expand-lg bg-light navbar-light";
  
  return (
    <nav className={navbarClasses}>
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src="/images/singapore-icon.png" alt="Singapur" width="30" height="24" className="d-inline-block align-text-top me-2" />
          Singapur
        </NavLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
                end
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/seccion/linguistica" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
              >
                Identidad Lingüística
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/seccion/monetario" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
              >
                Sistema Monetario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/seccion/festividades" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
              >
                Festividades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/seccion/modernidad" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
              >
                Modernidad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/referencias" 
                className={({isActive}) => 
                  `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                }
              >
                Referencias
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;