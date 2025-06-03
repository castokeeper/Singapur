import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Loading from '../components/common/Loading';

// Importaciones dinámicas
const Home = lazy(() => import('../pages/Home'));
const LinguisticIdentity = lazy(() => import('../pages/LinguisticIdentity'));
const MonetarySystem = lazy(() => import('../pages/MonetarySystem'));
const Festivals = lazy(() => import('../pages/Festivals'));
const Modernity = lazy(() => import('../pages/Modernity'));
const References = lazy(() => import('../pages/References'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'linguistic-identity',
        element: (
          <Suspense fallback={<Loading />}>
            <LinguisticIdentity />
          </Suspense>
        )
      },
      // Continúa con el resto de rutas de manera similar
      // ...
    ]
  }
]);

export default router;