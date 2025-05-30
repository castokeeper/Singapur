import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ImageGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, isVisible] = useIntersectionObserver();
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };
  
  return (
    <div 
      ref={ref}
      className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt || `Imagen ${index + 1}`} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform"
              loading="lazy"
            />
            {image.caption && (
              <p className="p-2 text-sm text-gray-700 dark:text-gray-300">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Modal para vista ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.caption && (
              <p className="mt-4 text-white text-center">{selectedImage.caption}</p>
            )}
            
            <button 
              className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;