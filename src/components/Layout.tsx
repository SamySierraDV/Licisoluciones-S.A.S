import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-warm text-charcoal font-sans selection:bg-gold/30 selection:text-navy">
      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Main Content with Route Transitions */}
      <main className="flex-grow pt-[70px] md:pt-[80px]">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          {children}
        </motion.div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
