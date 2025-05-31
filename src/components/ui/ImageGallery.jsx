import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Componente para mostrar galerías de imágenes
 * @param {Array} images - Array de objetos de imágenes con src, alt y caption
 * @param {String} title - Título opcional para la galería
 */
const ImageGallery = ({ images, title }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="image-gallery mb-5">
      {title && <h3 className={`h4 mb-4 ${isDark ? 'text-light' : ''}`}>{title}</h3>}
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {images.map((image, index) => (
          <div className="col" key={index}>
            <div className={`card h-100 ${isDark ? 'bg-dark border-secondary' : ''}`}>
              <ImageWithFallback 
                src={image.src} // ImageWithFallback ya utiliza getAssetPath internamente
                alt={image.alt || 'Imagen de Singapur'}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '220px' }}
              />
              <div className={`card-body ${isDark ? 'text-light' : ''}`}>
                {image.caption && (
                  <p className={`card-text small ${isDark ? 'text-light' : 'text-muted'}`}>
                    {image.caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string
};

export default ImageGallery;