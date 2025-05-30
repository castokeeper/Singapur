import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import DetalleSeccion from './pages/DetalleSeccion';
import Referencias from './pages/Referencias';
import './App.css';

// Componente de carga para Suspense
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seccion/:id" element={<DetalleSeccion />} />
              <Route path="/referencias" element={<Referencias />} />
              <Route path="*" element={<div className="text-center py-10"><h2 className="text-2xl">Página no encontrada</h2></div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;