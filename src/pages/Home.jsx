import React from 'react';
import { Link } from 'react-router-dom';
import IdentidadLinguistica from '../components/sections/IdentidadLinguistica';
import SistemaMonetario from '../components/sections/SistemaMonetario';
import FestividadesTradiciones from '../components/sections/FestividadesTradiciones';
import ModernidadVision from '../components/sections/ModernidadVision';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden rounded-xl mb-12 shadow-lg">
        <img 
          src="/images/singapore_skyline.jpg" 
          alt="Skyline de Singapur" 
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Singapur: Una Mirada Profunda
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Del tercer mundo al primero: explorando la extraordinaria transformación de una nación.
          </p>
        </div>
      </div>
      
      {/* Navegación de secciones */}
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm mb-10 py-3">
        <div className="flex justify-center overflow-x-auto space-x-6 px-4">
          <a href="#identidad-linguistica" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
            Identidad Lingüística
          </a>
          <a href="#sistema-monetario" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
            Sistema Monetario
          </a>
          <a href="#festividades-tradiciones" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
            Festividades y Tradiciones
          </a>
          <a href="#modernidad-singapur" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
            Modernidad y Visión
          </a>
          <Link to="/referencias" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">
            Referencias
          </Link>
        </div>
      </nav>

      {/* Secciones de contenido */}
      <IdentidadLinguistica />
      <SistemaMonetario />
      <FestividadesTradiciones />
      <ModernidadVision />
      
      {/* Botón para volver arriba */}
      <button 
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Home;