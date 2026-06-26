import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Enfoque BIC', path: '/bic' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link id="navbar-logo-link" to="/" className="flex flex-col group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-pure-white group-hover:text-gold transition-colors duration-200">
                LICISOLUCIONES
              </span>
              <span className="text-[9px] px-1.5 py-0.5 bg-gold text-navy font-bold rounded-sm self-center">
                BIC
              </span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans -mt-1 font-medium">
              S.A.S. Abogados
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-gold border-b-2 border-gold pb-1'
                      : 'text-pure-white/80 hover:text-gold hover:border-b-2 hover:border-gold/50 pb-1'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              id="desktop-cta-btn"
              to="/contacto"
              className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-semibold px-5 py-2 rounded-sm text-sm tracking-wide transition-all duration-300 hover:shadow-md"
            >
              <span>Consulta Gratuita</span>
              <LucideIcon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-pure-white hover:text-gold focus:outline-none p-1"
          >
            <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-navy/98 border-b border-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-sm text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-gold bg-pure-white/5 border-l-4 border-gold'
                        : 'text-pure-white/80 hover:text-gold hover:bg-pure-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 px-3">
                <Link
                  id="mobile-cta-btn"
                  to="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex justify-center items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-semibold py-2.5 rounded-sm text-sm tracking-wide transition-all duration-200"
                >
                  <span>Consulta Gratuita</span>
                  <LucideIcon name="ArrowRight" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
