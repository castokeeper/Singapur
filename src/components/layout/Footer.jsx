import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Proyecto Singapur</h2>
          <p className="mb-4">
            Un análisis detallado de la identidad cultural, sistema monetario, festividades y modernidad
            de la ciudad-estado del sudeste asiático.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fas fa-globe"></i> Portfolio
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fas fa-envelope"></i> Contacto
            </a>
          </div>
          
          <div className="mt-6 text-sm">
            &copy; {new Date().getFullYear()} Proyecto Singapur - Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;