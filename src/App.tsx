import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const Shop = lazy(() => import('./pages/Shop'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:category" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
