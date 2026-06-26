import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Seo from '../components/Seo';
import LucideIcon from '../components/LucideIcon';
import { SERVICES } from '../data';

export default function Servicios() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [listRef, listInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div className="bg-warm min-h-screen py-12 md:py-16">
      {/* SEO Metadata */}
      <Seo
        title="Servicios Jurídicos Especializados"
        description="Conozca nuestras áreas de práctica legal en Bogotá: Derecho corporativo, laboral, civil, resolución de conflictos y consultoría exclusiva para Sociedades BIC de triple impacto."
        path="/servicios"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
            Nuestras Áreas de Práctica
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-tight">
            Asesoría Jurídica de Excelencia e Impacto Social
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-charcoal/80 font-sans font-light text-base sm:text-lg">
            Combinamos una rigurosa técnica legal con una visión moderna orientada a la sostenibilidad y rentabilidad de su organización.
          </p>
        </motion.div>

        {/* Desktop Interactive Layout (Tabs + Detail Card) */}
        <div ref={listRef} className="hidden lg:grid grid-cols-12 gap-8 items-start mb-16">
          {/* Tab buttons (Left Column) */}
          <div className="col-span-4 space-y-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                id={`tab-${service.id}`}
                onClick={() => setActiveTab(service.id)}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                  activeTab === service.id
                    ? 'bg-navy border-gold text-pure-white shadow-md translate-x-2'
                    : 'bg-pure-white border-gold/10 text-navy hover:bg-gold/5'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    activeTab === service.id ? 'bg-gold text-navy' : 'bg-navy/5 text-navy'
                  }`}>
                    <LucideIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-sm font-bold tracking-wide">
                    {service.title}
                  </span>
                </div>
                <LucideIcon
                  name="ChevronRight"
                  className={`w-5 h-5 transition-transform ${
                    activeTab === service.id ? 'text-gold' : 'text-navy/40'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Details Panel (Right Column) */}
          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-pure-white border border-gold/15 p-10 rounded-sm shadow-lg space-y-6"
              >
                <div className="flex items-center space-x-4 pb-6 border-b border-gold/10">
                  <div className="w-14 h-14 bg-navy text-gold flex items-center justify-center rounded-sm">
                    <LucideIcon name={activeService.iconName} className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy">
                      {activeService.title}
                    </h2>
                    <p className="text-xs text-gold uppercase tracking-widest mt-1 font-semibold">
                      Servicio Técnico Especializado
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                    Descripción del Servicio
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed font-sans font-light text-base">
                    {activeService.longDescription}
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4 font-sans">
                    Nuestras Líneas de Actuación Especializadas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm text-charcoal/85 font-sans">
                        <LucideIcon name="CheckCircle2" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gold/10 flex justify-between items-center">
                  <p className="text-xs text-charcoal/50 font-sans italic">
                    ¿Requiere asesoría inmediata en esta área?
                  </p>
                  <Link
                    to={`/contacto?servicio=${activeService.id}`}
                    className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3 rounded-sm text-sm tracking-wide transition-colors"
                  >
                    <span>Consultar Área</span>
                    <LucideIcon name="Mail" className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-pure-white border border-gold/10 rounded-sm overflow-hidden"
            >
              <button
                id={`accordion-btn-${service.id}`}
                onClick={() => setActiveTab(activeTab === service.id ? '' : service.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-navy text-pure-white"
              >
                <div className="flex items-center space-x-3">
                  <LucideIcon name={service.iconName} className="w-5 h-5 text-gold" />
                  <span className="font-serif text-base font-bold">{service.title}</span>
                </div>
                <LucideIcon
                  name={activeTab === service.id ? 'X' : 'ChevronRight'}
                  className="w-5 h-5 text-gold"
                />
              </button>

              <AnimatePresence initial={false}>
                {activeTab === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gold/10"
                  >
                    <div className="p-6 space-y-4">
                      <p className="text-charcoal/80 text-sm leading-relaxed font-sans font-light">
                        {service.longDescription}
                      </p>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-navy uppercase tracking-wider">Líneas de Actuación:</p>
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-charcoal/90 font-sans">
                            <LucideIcon name="CheckCircle2" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gold/5 flex justify-end">
                        <Link
                          to={`/contacto?servicio=${service.id}`}
                          className="w-full text-center bg-gold hover:bg-gold-hover text-navy font-bold py-2.5 rounded-sm text-xs tracking-wide transition-colors"
                        >
                          Agendar Consulta Sobre {service.title}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Banner Pro Bono & BIC */}
        <div className="bg-navy text-pure-white p-8 md:p-12 rounded-sm border border-gold/10 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.1),transparent_40%)]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-gold font-mono text-xs tracking-wider uppercase">Servicios Legales Pro Bono</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                Comprometidos con el Acceso Democrático a la Justicia
              </h2>
              <p className="text-sm text-pure-white/80 font-sans font-light max-w-2xl leading-relaxed">
                Como Sociedad BIC en Bogotá, designamos el 5% de nuestra capacidad de atención anual a consultorías de alto impacto pro bono para micro-empresarios, fundaciones y emprendimientos sociales de bajos recursos.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                id="pro-bono-cta"
                to="/contacto?probono=true"
                className="w-full md:w-auto inline-flex justify-center items-center space-x-2 bg-transparent hover:bg-pure-white/10 text-pure-white border border-pure-white/50 hover:border-pure-white font-semibold px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
              >
                <span>Postular Proyecto</span>
                <LucideIcon name="HeartHandshake" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
