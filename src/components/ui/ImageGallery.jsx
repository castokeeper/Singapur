import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as bootstrap from 'bootstrap';
import ImageWithFallback from '../common/ImageWithFallback';
import { useTheme } from '../../context/ThemeContext';
import { getAssetPath } from '../../utils/assetUtils';

/**
 * Componente de galería de imágenes con lightbox
 * Compatible con tema oscuro/claro
 */
const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isDark } = useTheme();

  const openModal = (image) => {
    setSelectedImage(image);
    // Bootstrap 5 requiere una instancia modal para manejar el modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  };

  return (
    <div className={`mb-5 theme-transition image-gallery ${isDark ? 'gallery-dark' : 'gallery-light'}`}>
      {title && (
        <h3 className={`h4 mb-4 ${isDark ? 'text-light' : ''}`}>{title}</h3>
      )}
      
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
        {images.map((image, index) => (
          <div key={index} className="col">
            <div className={`card h-100 shadow-sm theme-transition ${
              isDark ? 'bg-dark text-light border-secondary' : 'bg-white'
            }`}>
              <ImageWithFallback 
                src={getAssetPath(image.src)} 
                alt={image.alt || `Imagen ${index + 1}`}
                fallbackSrc="/images/singapore-skyline.jpg" // Imagen de respaldo general
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => openModal(image)}
              />
              {image.caption && (
                <div className="card-body">
                  <p className={`card-text small ${isDark ? 'text-light' : ''}`}>
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal para vista ampliada (Bootstrap) */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className={`modal-content ${isDark ? 'bg-dark text-light border-secondary' : ''}`}>
            <div className={`modal-header ${isDark ? 'border-secondary' : 'border-light'}`}>
              <button 
                type="button" 
                className={`btn-close ${isDark ? 'btn-close-white' : ''}`}
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center p-0">
              {selectedImage && (
                <>
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="img-fluid rounded"
                    style={{ 
                      maxHeight: '70vh',
                      // Reducir el brillo de las imágenes en modo oscuro para mayor comodidad visual
                      filter: isDark ? 'brightness(0.9)' : 'none' 
                    }}
                  />
                  {selectedImage.caption && (
                    <p className={`mt-3 ${isDark ? 'text-light' : 'text-secondary'}`}>
                      {selectedImage.caption}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
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