import React, { lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/NavBar';
import LoadingFallback from './components/ui/LoadingFallback';
import ThemeProvider from './context/ThemeProvider';
import { useTheme } from './context/ThemeContext';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const DetalleSeccion = lazy(() => import('./pages/DetalleSeccion'));
const Referencias = lazy(() => import('./pages/Referencias'));

// Componentes
const NotFound = () => {
  const { isDark } = useTheme();
  return (
    <div className="text-center py-5">
      <h2 className={`display-6 ${isDark ? 'text-light' : ''}`}>Página no encontrada</h2>
      <p className="lead">La página que buscas no existe.</p>
    </div>
  );
};

const Layout = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`app-container ${isDark ? 'bg-dark text-light' : ''}`}>
      <div className="d-flex flex-column min-vh-100 theme-transition">
        <Header />
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Definir las rutas
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "seccion/:id", element: <DetalleSeccion /> },
      { path: "/referencias", element: <Referencias /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

// Componente principal
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;