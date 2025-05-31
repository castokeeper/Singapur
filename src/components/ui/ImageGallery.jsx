import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as bootstrap from 'bootstrap';
import ImageWithFallback from '../common/ImageWithFallback';

/**
 * Componente de galería de imágenes con lightbox
 */
const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    // Bootstrap 5 requiere una instancia modal para manejar el modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  };

  return (
    <div className="mb-5 theme-transition">
      {title && (
        <h3 className="h4 mb-4">{title}</h3>
      )}
      
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
        {images.map((image, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm bg-theme theme-transition">
              <ImageWithFallback 
                src={image.src} 
                alt={image.alt || `Imagen ${index + 1}`}
                fallbackSrc="/images/singapore-skyline.jpg" // Imagen de respaldo general
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => openModal(image)}
              />
              {image.caption && (
                <div className="card-body">
                  <p className="card-text small">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal para vista ampliada (Bootstrap) */}
      <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-theme">
            <div className="modal-header border-0">
              <button 
                type="button" 
                className="btn-close" 
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
                    style={{ maxHeight: '70vh' }}
                  />
                  {selectedImage.caption && (
                    <p className="mt-3 text-secondary">{selectedImage.caption}</p>
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