import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';

/**
 * Componente Hero para la sección principal de una página
 * Compatible con tema oscuro/claro
 */
const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  const { isDark } = useTheme();
  
  // Ajustar la luminosidad de la imagen según el tema
  const imageBrightness = isDark ? 'brightness(0.6)' : 'brightness(0.7)';
  
  // Ajustar la opacidad del overlay según el tema
  const overlayBg = isDark 
    ? 'bg-black bg-opacity-60' 
    : 'bg-dark bg-opacity-50';
  
  // Ajustar el botón según el tema
  const buttonClass = isDark 
    ? 'btn btn-outline-light btn-lg border-2' 
    : 'btn btn-primary btn-lg';
  
  return (
    <div className={`position-relative mb-5 overflow-hidden rounded-3 ${isDark ? 'border border-secondary' : ''}`} 
         style={{ maxHeight: '500px' }}>
      <ImageWithFallback 
        src={backgroundImage}
        alt="Singapur"
        className="w-100 theme-transition"
        style={{ 
          objectFit: 'cover', 
          height: '500px', 
          filter: imageBrightness 
        }}
      />
      
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className={`${overlayBg} p-4 rounded-3 text-white shadow`}>
                <h1 className="display-5 fw-bold">{title}</h1>
                <p className="fs-5 mb-4">{subtitle}</p>
                {buttonText && (
                  <Link to={buttonLink} className={buttonClass}>
                    {buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;