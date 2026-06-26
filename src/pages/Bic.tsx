import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Seo from '../components/Seo';
import LucideIcon from '../components/LucideIcon';
import { BIC_PILLARS } from '../data';

export default function Bic() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pillarsRef, pillarsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [reportRef, reportInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-warm min-h-screen py-12 md:py-16">
      {/* SEO Metadata */}
      <Seo
        title="Enfoque y Modelo BIC"
        description="Conozca qué significa ser una Sociedad BIC en Colombia. Descubra nuestras 5 dimensiones de impacto social, ambiental, laboral y comunitario en Bogotá."
        path="/bic"
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
            Modelo de Triple Impacto
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-tight">
            ¿Qué es ser una Sociedad BIC?
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-charcoal/80 font-sans font-light text-base sm:text-lg">
            Las Sociedades de Beneficio e Interés Colectivo (BIC) redefinen el propósito empresarial en Colombia, uniendo el éxito comercial con el bienestar social y la protección ambiental.
          </p>
        </motion.div>

        {/* Legal Context & Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 -left-3 border-4 border-gold/30 w-full h-full rounded-sm z-0" />
            <div className="bg-navy p-8 text-pure-white rounded-sm relative z-10 shadow-lg space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold">
                Sustento Jurídico
              </h2>
              <p className="text-sm text-pure-white/80 leading-relaxed font-sans font-light">
                La <strong>Ley 1901 del 18 de junio de 2018</strong> en Colombia faculta a las empresas para agregar a su razón social la sigla BIC, obligándolas de manera estatutaria a actuar bajo un modelo de sostenibilidad integral.
              </p>
              <div className="pt-2 border-t border-gold/20 flex items-center space-x-3 text-xs text-gold font-mono uppercase tracking-widest">
                <LucideIcon name="Award" className="w-5 h-5" />
                <span>Cámara de Comercio de Bogotá</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Redefiniendo el Rol del Abogado en la Sociedad
            </h2>
            <div className="w-12 h-0.5 bg-gold" />
            <p className="text-charcoal/80 leading-relaxed font-sans font-light">
              Históricamente, las firmas de abogados se han centrado únicamente en maximizar la rentabilidad de sus socios mediante la prestación de servicios técnicos. En **LICISOLUCIONES S.A.S BIC** rompemos con ese molde tradicional.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-sans font-light">
              Entendemos que un excelente asesoramiento legal corporativo es compatible con el comercio justo, el trato laboral digno, la reducción del papel en los juzgados y el apoyo jurídico pro bono a las comunidades vulnerables de Bogotá. Nuestra labor jurídica se diseña para generar valor a largo plazo para todos los grupos de interés.
            </p>
          </div>
        </div>

        {/* The 5 BIC Dimensions Grid */}
        <div ref={pillarsRef} className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Nuestras Cinco Dimensiones de Impacto
            </h2>
            <p className="text-charcoal/75 font-sans font-light text-sm sm:text-base">
              Las 5 áreas operativas donde materializamos diariamente nuestra condición BIC.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={pillarsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BIC_PILLARS.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-pure-white border border-gold/10 hover:border-gold/30 p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 space-y-5"
              >
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center rounded-sm">
                    <LucideIcon name={pillar.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-gold font-mono uppercase tracking-widest font-semibold bg-gold/10 px-2 py-0.5 rounded-sm">
                    Dimensión {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-navy">
                  {pillar.title}
                </h3>
                <p className="text-charcoal/75 text-sm leading-relaxed font-sans font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Report Section / Call To Action */}
        <div ref={reportRef} className="bg-navy text-pure-white p-8 md:p-12 rounded-sm border border-gold/15 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_50%)]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <LucideIcon name="ShieldCheck" className="w-12 h-12 text-gold mx-auto" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
              Reporte de Impacto Anual de LICISOLUCIONES S.A.S BIC
            </h2>
            <p className="text-sm md:text-base text-pure-white/80 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              De acuerdo con las normativas legales que rigen el estatus BIC, anualmente auditamos y publicamos de forma transparente nuestro reporte de impacto social, laboral y ambiental. Este reporte es revisado por firmas de auditoría externas y divulgado al público en general.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => alert('Su reporte se ha solicitado con éxito. El documento PDF será enviado a su correo de contacto de inmediato.')}
                className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-navy font-bold px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <span>Solicitar Reporte de Impacto</span>
                <LucideIcon name="Mail" className="w-4 h-4" />
              </button>
              <a
                href="https://www.sic.gov.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-pure-white text-xs font-semibold uppercase tracking-wider underline underline-offset-4"
              >
                Verificar en Superintendencia (SIC)
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
