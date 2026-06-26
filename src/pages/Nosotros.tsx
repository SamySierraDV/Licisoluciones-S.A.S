import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Seo from '../components/Seo';
import LucideIcon from '../components/LucideIcon';
import { LAWYERS } from '../data';

export default function Nosotros() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const coreValues = [
    {
      title: 'Excelencia Rigurosa',
      description: 'Estudiamos y resolvemos cada caso con la más estricta técnica legal, garantizando soluciones de alta confiabilidad corporativa.',
      icon: 'Award',
    },
    {
      title: 'Transparencia Ética',
      description: 'Rendimos cuentas abiertas sobre nuestras finanzas, honorarios y reportes de impacto social sin letra chica ni sorpresas.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Beneficio Colectivo',
      description: 'Como firma BIC, nos obligamos estatutariamente a velar por el impacto de nuestras decisiones en la comunidad de Bogotá.',
      icon: 'Users',
    }
  ];

  return (
    <div className="bg-warm min-h-screen py-12 md:py-16">
      {/* SEO Metadata */}
      <Seo
        title="Nuestra Firma y Equipo Legal"
        description="Conozca los valores, la misión y la historia de LICISOLUCIONES S.A.S BIC en Bogotá. Descubra a nuestro equipo de abogados listos para asesorarlo."
        path="/nosotros"
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
            Nuestra Firma
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-tight">
            Excelencia Jurídica, Compromiso Colectivo
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-charcoal/80 font-sans font-light text-base sm:text-lg">
            Nacimos en Bogotá con la convicción de que el ejercicio del derecho debe evolucionar para servir de motor de desarrollo sostenible y justicia social.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Nuestra Historia y Filosofía
            </h2>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-charcoal/80 leading-relaxed font-sans font-light">
              Fundada en la capital colombiana, <strong>LICISOLUCIONES S.A.S BIC</strong> surge de la unión de abogados de destacada trayectoria académica y profesional que compartían una misma insatisfacción: la abogacía corporativa tradicional muchas veces se desvinculaba de la realidad social y ambiental de su entorno.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-sans font-light">
              Decidimos crear una firma diferente. Una firma que no solo resolviera los problemas comerciales y laborales de sus clientes con el más alto rigor técnico, sino que también lo hiciera cuidando el bienestar de su propio equipo de trabajo, minimizando su huella ambiental, apoyando a emprendimientos sociales pro bono y asegurando un gobierno corporativo intachable.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-sans font-light">
              Por eso adoptamos voluntariamente la condición de **Sociedad BIC** (Beneficio e Interés Colectivo) ante la Cámara de Comercio de Bogotá, formalizando nuestro compromiso de triple impacto bajo la Ley 1901 de 2018.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 transform rotate-2 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                alt="Socios analizando documentos legales"
                className="w-full h-[400px] object-cover rounded-sm relative z-10 shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div ref={valuesRef} className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Valores que Gobiernan Nuestras Actuaciones
            </h2>
            <p className="text-charcoal/75 font-sans font-light text-sm sm:text-base">
              Nuestra cultura organizacional se cimenta sobre pilares inquebrantables.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="bg-pure-white p-8 border border-gold/10 rounded-sm shadow-sm flex flex-col items-center text-center space-y-4 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm">
                  <LucideIcon name={val.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy">
                  {val.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed font-sans font-light">
                  {val.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
              Profesionales
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Abogados y Socios Expertos a su Disposición
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
            <p className="text-charcoal/75 font-sans font-light text-sm sm:text-base">
              Un equipo multidisciplinario con sólida preparación académica y amplia trayectoria práctica en litigios y consultorías estratégicas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {LAWYERS.map((lawyer, index) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-pure-white border border-gold/10 hover:border-gold/30 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden bg-navy">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-navy/90 text-gold px-2 py-0.5 rounded-sm text-[10px] uppercase font-mono tracking-wider font-semibold border border-gold/30">
                    Socio
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-navy">{lawyer.name}</h3>
                    <p className="text-xs text-gold uppercase tracking-widest font-semibold">{lawyer.role}</p>
                    <p className="text-xs text-navy/70 italic font-medium">{lawyer.specialization}</p>
                    <p className="text-xs text-charcoal/75 leading-relaxed font-sans font-light pt-2 line-clamp-4">
                      {lawyer.bio}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gold/10 flex items-center space-x-2 text-xs text-navy font-semibold">
                    <LucideIcon name="Mail" className="w-4 h-4 text-gold shrink-0" />
                    <a href={`mailto:${lawyer.email}`} className="hover:text-gold transition-colors break-all">
                      {lawyer.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
