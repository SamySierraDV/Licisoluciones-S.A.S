import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Seo from '../components/Seo';
import LucideIcon from '../components/LucideIcon';
import { SERVICES, TESTIMONIALS } from '../data';

export default function Home() {
  // Setup inView triggers for sections
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [bicTeaserRef, bicTeaserInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: '2+', label: 'Años de Experiencia' },
    { value: '150+', label: 'Casos Exitosos' },
    { value: '100%', label: 'Compromiso Ético' },
    { value: 'BIC', label: 'Estatus de Triple Impacto' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Dynamic SEO metadata */}
      <Seo
        title="Asesoría Jurídica Integral"
        description="Firma legal experta en Bogotá. Ofrecemos asesoría corporativa, laboral, civil y consultoría especializada en Sociedades BIC de triple impacto. Contáctanos hoy."
        path="/"
      />

      {/* 1. Hero Section */}
      <section
        id="hero-section"
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center bg-navy text-pure-white py-20"
      >
        {/* Background Image with 40% Navy Overlay as specified */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
            alt="Palacio de justicia y escala legal"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/40 z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-3 py-1 bg-pure-white/10 rounded-full border border-gold/30">
              Sociedad de Beneficio e Interés Colectivo (BIC)
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Justicia, Ética y Sostenibilidad Jurídica para su Empresa
            </h1>
            <p className="text-lg sm:text-xl text-pure-white/80 font-sans mb-10 leading-relaxed font-light">
              En <strong className="font-semibold text-gold">LICISOLUCIONES S.A.S BIC</strong> somos su aliado estratégico en Bogotá. Fusionamos la excelencia en asesoramiento legal con un genuino impacto social, ambiental y económico.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                id="hero-services-cta"
                to="/servicios"
                className="inline-flex justify-center items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-semibold px-8 py-4 rounded-sm text-base tracking-wide transition-all duration-300 shadow-lg hover:translate-y-[-2px]"
              >
                <span>Nuestros Servicios</span>
                <LucideIcon name="ChevronRight" className="w-5 h-5" />
              </Link>
              <Link
                id="hero-contact-cta"
                to="/contacto"
                className="inline-flex justify-center items-center space-x-2 bg-transparent hover:bg-pure-white/10 text-pure-white border-2 border-pure-white/80 hover:border-pure-white font-semibold px-8 py-4 rounded-sm text-base tracking-wide transition-all duration-300"
              >
                <span>Consulta Gratuita</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section
        id="stats-section"
        ref={statsRef}
        className="relative z-30 -mt-16 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-pure-white border border-gold/15 shadow-xl py-8 px-6 sm:px-12 rounded-sm grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x divide-gold/10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center first:border-0 pl-2 sm:pl-4">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-1.5">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-sans text-charcoal/80 uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. Quiénes Somos Teaser */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border-4 border-gold/30 absolute -top-4 -left-4 w-full h-full rounded-sm z-0" />
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
                alt="Reunión legal corporativa"
                className="w-full h-[400px] object-cover rounded-sm relative z-10 shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
                Nuestra Identidad
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
                Comprometidos con el Éxito Corporativo y el Bienestar Social
              </h2>
              <p className="text-charcoal leading-relaxed font-sans font-light">
                En LICISOLUCIONES S.A.S BIC no vemos el derecho solo como un conjunto de normas, sino como una herramienta potente para fomentar la justicia, la equidad social y la rentabilidad empresarial ética.
              </p>
              <p className="text-charcoal/80 leading-relaxed font-sans font-light">
                Nuestra condición como Sociedad BIC nos impulsa formalmente a trabajar bajo altos estándares ambientales, laborales y de transparencia, promoviendo el desarrollo inclusivo en la ciudad de Bogotá y la región de Cundinamarca.
              </p>
              <div className="pt-4">
                <Link
                  id="about-learn-more"
                  to="/nosotros"
                  className="inline-flex items-center space-x-2 text-navy hover:text-gold font-semibold tracking-wider text-sm uppercase transition-colors"
                >
                  <span>Conozca Nuestra Historia</span>
                  <LucideIcon name="ChevronRight" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid Section */}
      <section id="services-summary" ref={servicesRef} className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
              Áreas de Práctica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              Especialidades Jurídicas con Sentido Humano y de Negocio
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
            <p className="text-charcoal/80 font-sans font-light">
              Ofrecemos servicios de asesoría y litigios con un enfoque preventivo, minimizando riesgos y promoviendo la sostenibilidad empresarial en todas las áreas del derecho.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-warm hover:bg-pure-white border border-gold/10 hover:border-gold/30 p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm mb-6">
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-6 font-sans font-light">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Link
                    to="/servicios"
                    className="inline-flex items-center space-x-2 text-gold hover:text-navy font-semibold text-sm transition-colors"
                  >
                    <span>Ver detalles</span>
                    <LucideIcon name="ChevronRight" className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. BIC Teaser Section */}
      <section
        id="bic-teaser-section"
        ref={bicTeaserRef}
        className="py-20 bg-navy text-pure-white relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
                ¿Qué es una Empresa BIC?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Liderando la Revolución de las Empresas de Triple Impacto en Colombia
              </h2>
              <p className="text-pure-white/80 leading-relaxed font-sans font-light">
                Una <strong>Sociedad BIC (Beneficio e Interés Colectivo)</strong> es aquella empresa que voluntariamente combina la rentabilidad económica con acciones concretas para el bienestar de sus empleados, la comunidad, el medio ambiente y sus buenas prácticas de gobierno corporativo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3">
                  <LucideIcon name="CheckCircle2" className="w-5 h-5 text-gold" />
                  <span className="text-sm text-pure-white/90">Garantía de Transparencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LucideIcon name="CheckCircle2" className="w-5 h-5 text-gold" />
                  <span className="text-sm text-pure-white/90">Prácticas Laborales Justas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LucideIcon name="CheckCircle2" className="w-5 h-5 text-gold" />
                  <span className="text-sm text-pure-white/90">Impacto Ambiental Positivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LucideIcon name="CheckCircle2" className="w-5 h-5 text-gold" />
                  <span className="text-sm text-pure-white/90">Apoyo Comunitario y Pro Bono</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  id="bic-learn-more"
                  to="/bic"
                  className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-semibold px-6 py-3 rounded-sm text-sm tracking-wide transition-all duration-300"
                >
                  <span>Ver Nuestro Enfoque BIC</span>
                  <LucideIcon name="ArrowRight" className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ rotate: -5, scale: 0.95 }}
                animate={bicTeaserInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-pure-white/5 border border-gold/30 p-8 rounded-sm relative text-center max-w-sm"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-serif text-lg font-bold">
                  B
                </div>
                <h3 className="font-serif text-lg font-semibold text-gold mt-4 mb-2">Compromiso Legal Colectivo</h3>
                <p className="text-xs text-pure-white/70 leading-relaxed font-sans">
                  "Obligamos jurídicamente a nuestra administración a velar por fines que trascienden el mero interés económico de los socios."
                </p>
                <div className="mt-4 pt-4 border-t border-pure-white/10 text-xs text-gold font-mono uppercase tracking-wider">
                  Ley 1901 de 2018 - Colombia
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials-section" ref={testimonialsRef} className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
              Opiniones de Clientes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
              La Confianza de Nuestros Aliados es Nuestra Mayor Virtud
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-pure-white p-8 rounded-sm border border-gold/10 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex space-x-1 mb-4 text-gold">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <LucideIcon key={i} name="Star" className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal/80 text-sm italic font-sans font-light leading-relaxed mb-6">
                    "{testimonial.feedback}"
                  </p>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <h4 className="font-serif text-sm font-bold text-navy">{testimonial.clientName}</h4>
                  <p className="text-xs text-gold uppercase tracking-wider mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Call To Action (Bottom) */}
      <section id="contact-cta-section" ref={ctaRef} className="py-20 bg-pure-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-navy text-pure-white p-8 sm:p-12 md:p-16 rounded-sm border border-gold/20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.1),transparent_40%)]" />
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <span className="text-gold font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Inicie su Consulta Hoy Mismo
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                ¿Listo para estructurar su negocio legalmente y con propósito BIC?
              </h2>
              <p className="text-sm sm:text-base text-pure-white/70 font-sans font-light leading-relaxed max-w-xl mx-auto">
                No deje el futuro de su empresa al azar. Agende una consulta con nuestros abogados expertos en Bogotá y descubra el valor del triple impacto jurídico.
              </p>
              <div className="pt-4">
                <Link
                  id="bottom-cta-btn"
                  to="/contacto"
                  className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-bold px-8 py-4 rounded-sm text-base tracking-wide transition-all duration-300 shadow-md hover:translate-y-[-2px]"
                >
                  <span>Agendar Consulta</span>
                  <LucideIcon name="Phone" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
