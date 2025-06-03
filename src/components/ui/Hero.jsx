import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente Hero con imagen de fondo a pantalla completa
 */
const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  const { isDark } = useTheme();
  
  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 2rem',
    color: 'white'
  };
  
  const contentStyles = {
    maxWidth: '600px',
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '8px'
  };
  
  const buttonClass = isDark 
    ? 'btn btn-outline-light btn-lg mt-3' 
    : 'btn btn-light btn-lg mt-3';
    
  return (
    <div style={heroStyles}>
      <div style={contentStyles}>
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">{subtitle}</p>
        {buttonText && (
          <Link to={buttonLink} className={buttonClass}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;