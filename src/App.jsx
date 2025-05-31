import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import LoadingFallback from './components/ui/LoadingFallback';

// Corregir importaciones - separar ThemeProvider y useTheme
import ThemeProvider from './context/ThemeProvider';
import { useTheme } from './context/ThemeContext';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const DetalleSeccion = lazy(() => import('./pages/DetalleSeccion'));
const Referencias = lazy(() => import('./pages/Referencias'));

function App() {
  
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// Componente adicional para usar el contexto dentro del Provider
const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`app-container ${isDark ? 'bg-dark text-light' : ''}`}>
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
                  <h2 className={`display-6 ${isDark ? 'text-light' : ''}`}>Página no encontrada</h2>
                  <p className="lead">La página que buscas no existe.</p>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;