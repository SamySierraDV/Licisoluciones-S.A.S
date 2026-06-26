import React from 'react';
import { Link } from 'react-router-dom';
import LucideIcon from './LucideIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-navy text-pure-white/90 border-t border-gold/20">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link id="footer-logo-link" to="/" className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl font-bold tracking-wider text-pure-white">
                  LICISOLUCIONES
                </span>
                <span className="text-[9px] px-1.5 py-0.5 bg-gold text-navy font-bold rounded-sm">
                  BIC
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-sans -mt-1">
                S.A.S. Abogados
              </span>
            </Link>
            <p className="text-sm text-pure-white/70 leading-relaxed font-sans">
              Somos una firma legal colombiana de vanguardia y de triple impacto (económico, social y ambiental), certificada como Sociedad BIC. Proveemos asesoramiento estratégico con ética, excelencia y compromiso social.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-pure-white/60 hover:text-gold transition-colors">
                <LucideIcon name="Globe" className="w-5 h-5" />
              </a>
              <a href="mailto:Licisolucionessas@gmail.com" aria-label="Send Email" className="text-pure-white/60 hover:text-gold transition-colors">
                <LucideIcon name="Mail" className="w-5 h-5" />
              </a>
              <a href="tel:+573123645004" aria-label="Call Phone" className="text-pure-white/60 hover:text-gold transition-colors">
                <LucideIcon name="Phone" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-gold font-serif text-base font-semibold tracking-wider uppercase mb-4">
              Navegación
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-pure-white/70 hover:text-gold transition-colors duration-150 flex items-center space-x-1">
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-gold/60" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-pure-white/70 hover:text-gold transition-colors duration-150 flex items-center space-x-1">
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-gold/60" />
                  <span>Servicios Jurídicos</span>
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-pure-white/70 hover:text-gold transition-colors duration-150 flex items-center space-x-1">
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-gold/60" />
                  <span>Nuestra Firma</span>
                </Link>
              </li>
              <li>
                <Link to="/bic" className="text-pure-white/70 hover:text-gold transition-colors duration-150 flex items-center space-x-1">
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-gold/60" />
                  <span>Enfoque BIC</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-pure-white/70 hover:text-gold transition-colors duration-150 flex items-center space-x-1">
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-gold/60" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h2 className="text-gold font-serif text-base font-semibold tracking-wider uppercase mb-4">
              Contacto Principal
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-pure-white/75">
                <LucideIcon name="MapPin" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Bogotá D.C., Cundinamarca, Colombia</span>
              </li>
              <li className="flex items-start space-x-3 text-pure-white/75">
                <LucideIcon name="Phone" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <a href="tel:+573123645004" className="hover:text-gold transition-colors">+57 312 364 5004</a>
              </li>
              <li className="flex items-start space-x-3 text-pure-white/75">
                <LucideIcon name="Mail" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <a href="mailto:Licisolucionessas@gmail.com" className="hover:text-gold transition-colors break-all">Licisolucionessas@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3 text-pure-white/75">
                <LucideIcon name="Clock" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Horario de Atención:</p>
                  <p className="text-xs text-pure-white/60">Lunes a Viernes</p>
                  <p className="text-xs text-pure-white/60">07:00 a.m. - 06:00 p.m.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: BIC & Impact Commitment */}
          <div className="space-y-4">
            <h2 className="text-gold font-serif text-base font-semibold tracking-wider uppercase mb-4">
              Compromiso BIC
            </h2>
            <div className="p-4 bg-pure-white/5 border border-gold/10 rounded-sm">
              <div className="flex items-center space-x-2 mb-2">
                <LucideIcon name="Award" className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold text-pure-white">Firma de Triple Impacto</span>
              </div>
              <p className="text-xs text-pure-white/60 leading-relaxed font-sans">
                Las Sociedades de Beneficio e Interés Colectivo (BIC) en Colombia integran voluntariamente objetivos de bienestar social y ambiental a su actividad económica principal.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-pure-white/50 font-sans">
              <LucideIcon name="CheckCircle2" className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Regulado bajo Ley 1901 de 2018</span>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pure-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-pure-white/50 space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} LICISOLUCIONES S.A.S BIC. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <Link to="/bic" className="hover:text-gold transition-colors">Sociedad BIC</Link>
            <Link to="/contacto" className="hover:text-gold transition-colors">Términos y Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
