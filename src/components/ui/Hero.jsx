import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../common/ImageWithFallback';

const Hero = ({ backgroundImage, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="position-relative mb-5 overflow-hidden rounded-3" style={{ maxHeight: '500px' }}>
      <ImageWithFallback 
        src={backgroundImage}
        alt="Singapur"
        className="w-100"
        style={{ objectFit: 'cover', height: '500px', filter: 'brightness(0.7)' }}
      />
      
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <div className="bg-dark bg-opacity-50 p-4 rounded-3 text-white">
                <h1 className="display-5 fw-bold">{title}</h1>
                <p className="fs-5 mb-4">{subtitle}</p>
                {buttonText && (
                  <Link to={buttonLink} className="btn btn-primary btn-lg">
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