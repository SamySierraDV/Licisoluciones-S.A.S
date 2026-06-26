import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Performance Optimization: Lazy Load sections/pages as requested
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Bic = lazy(() => import('./pages/Bic'));
const Contacto = lazy(() => import('./pages/Contacto'));

// Elegant spinner fallback for Suspense load stages
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-warm flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-navy border-t-gold rounded-full animate-spin" />
      <span className="font-serif text-sm tracking-widest text-navy uppercase font-bold animate-pulse">
        LICISOLUCIONES
      </span>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/bic" element={<Bic />} />
              <Route path="/contacto" element={<Contacto />} />
              {/* Fallback route redirection */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
