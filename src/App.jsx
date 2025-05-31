import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

// Componente de carga para Suspense
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '8rem' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

// Carga perezosa de componentes de página
const Home = lazy(() => import('./pages/Home'));
const DetalleSeccion = lazy(() => import('./pages/DetalleSeccion'));
const Referencias = lazy(() => import('./pages/Referencias'));

function App() {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100 theme-transition">
        <Header />
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seccion/:id" element={<DetalleSeccion />} />
              <Route path="/referencias" element={<Referencias />} />
              <Route path="*" element={
                <div className="text-center py-5">
                  <h2 className="display-6">Página no encontrada</h2>
                  <p className="lead">La página que buscas no existe.</p>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;