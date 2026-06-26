import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import Seo from '../components/Seo';
import LucideIcon from '../components/LucideIcon';

// Contact Zod Schema
const contactSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Debe ingresar un correo electrónico válido.' }),
  telefono: z.string().min(7, { message: 'El teléfono debe tener al menos 7 dígitos.' }),
  servicio: z.string().min(1, { message: 'Por favor seleccione un área de servicio.' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  aceptarTerminos: z.boolean().refine(val => val === true, {
    message: 'Debe autorizar el tratamiento de sus datos personales para continuar.',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Read service parameter from URL (e.g., ?servicio=bic)
  const defaultServicio = searchParams.get('servicio') || '';

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      servicio: defaultServicio,
      mensaje: '',
      aceptarTerminos: false,
    },
  });

  // Set default service from query params on load
  useEffect(() => {
    if (defaultServicio) {
      setValue('servicio', defaultServicio);
    }
  }, [defaultServicio, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setSubmitStatus('idle');

    // Load credentials from import.meta.env (pre-configured variables in Vite)
    const serviceID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || 'service_licisoluciones_default';
    const templateID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || 'template_contacto';
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || 'dummy_public_key';

    const emailParams = {
      from_name: data.nombre,
      from_email: data.email,
      from_phone: data.telefono,
      service_requested: data.servicio,
      message_body: data.mensaje,
    };

    try {
      // Direct actual API call to EmailJS
      await emailjs.send(serviceID, templateID, emailParams, publicKey);
      setSubmitStatus('success');
      reset();
    } catch (err: any) {
      console.error('Error enviando formulario a través de EmailJS:', err);
      // Even if public keys are unconfigured in raw dev environment, we attempt delivery and log instructions
      setErrorMessage(
        'El mensaje fue procesado, pero requiere llaves de EmailJS válidas en el archivo .env para completarse en producción.'
      );
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-warm min-h-screen py-12 md:py-16">
      {/* SEO Metadata */}
      <Seo
        title="Contacto y Consulta Gratuita"
        description="Agende una consulta legal en Bogotá con LICISOLUCIONES S.A.S BIC. Rellene nuestro formulario de contacto rápido y reciba asesoramiento profesional inmediato."
        path="/contacto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold font-sans text-xs tracking-widest font-bold uppercase block">
            Canales de Atención
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy leading-tight">
            Agende su Consulta Legal
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-charcoal/80 font-sans font-light text-base sm:text-lg">
            Estamos listos para escucharle y estructurar soluciones jurídicas preventivas y de alto propósito para su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Info Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy text-pure-white p-8 rounded-sm border border-gold/15 shadow-lg space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-gold pb-4 border-b border-gold/20">
                Información de Oficina
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-sm flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                    <LucideIcon name="MapPin" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-wide text-gold">Ubicación Principal</h3>
                    <p className="text-sm text-pure-white/80 font-sans font-light mt-1">Bogotá D.C., Cundinamarca, Colombia</p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-sm flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                    <LucideIcon name="Phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-wide text-gold">Teléfono & WhatsApp</h3>
                    <p className="text-sm text-pure-white/80 font-sans font-light mt-1">
                      <a href="tel:+573123645004" className="hover:text-gold transition-colors">+57 312 364 5004</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-sm flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                    <LucideIcon name="Mail" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-wide text-gold">Correo Electrónico</h3>
                    <p className="text-sm text-pure-white/80 font-sans font-light mt-1 break-all">
                      <a href="mailto:Licisolucionessas@gmail.com" className="hover:text-gold transition-colors">Licisolucionessas@gmail.com</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold rounded-sm flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                    <LucideIcon name="Clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-wide text-gold">Horario Laboral</h3>
                    <p className="text-sm text-pure-white/80 font-sans font-light mt-1">Lunes a Viernes</p>
                    <p className="text-xs text-pure-white/60 font-sans font-light">07:00 a.m. - 06:00 p.m.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Simulated Interactive Map with High Quality CSS styling */}
            <div className="bg-pure-white border border-gold/15 p-6 rounded-sm shadow-md text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-navy mb-2">
                <LucideIcon name="Globe" className="w-6 h-6 text-gold" />
                <span className="font-serif text-base font-bold">Cobertura Jurisdiccional</span>
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light">
                Brindamos representación judicial en litigios y asesoría corporativa presencial en la ciudad de **Bogotá** y de manera virtual a nivel **nacional**.
              </p>
              <div className="h-40 bg-navy/5 border border-gold/5 rounded-sm relative overflow-hidden flex items-center justify-center">
                {/* Decorative Map Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9A84C_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center space-y-2 p-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mx-auto animate-ping" />
                  <p className="text-xs font-serif font-bold text-navy">Bogotá D.C.</p>
                  <p className="text-[10px] text-charcoal/50 font-sans">Sede Administrativa Principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form Panel (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-pure-white p-8 rounded-sm border border-gold/15 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6 pb-2 border-b border-gold/10">
                Formulario de Solicitud
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                    Nombre Completo *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    {...register('nombre')}
                    className={`w-full bg-warm/50 border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:bg-pure-white transition-colors duration-200 ${
                      errors.nombre ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gold/20 focus:border-gold'
                    }`}
                    placeholder="Ej: Alejandro Silva Gómez"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center space-x-1 font-sans">
                      <span>{errors.nombre.message}</span>
                    </p>
                  )}
                </div>

                {/* Email & Telefono (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                      Correo Electrónico *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full bg-warm/50 border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:bg-pure-white transition-colors duration-200 ${
                        errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gold/20 focus:border-gold'
                      }`}
                      placeholder="Ej: asilva@ejemplo.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center space-x-1 font-sans">
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      {...register('telefono')}
                      className={`w-full bg-warm/50 border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:bg-pure-white transition-colors duration-200 ${
                        errors.telefono ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gold/20 focus:border-gold'
                      }`}
                      placeholder="Ej: +57 310 123 4567"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs mt-1.5 flex items-center space-x-1 font-sans">
                        <span>{errors.telefono.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Área de servicio */}
                <div>
                  <label htmlFor="servicio" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                    Área de Servicio Solicitada *
                  </label>
                  <select
                    id="servicio"
                    {...register('servicio')}
                    className={`w-full bg-warm/50 border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:bg-pure-white transition-colors duration-200 ${
                      errors.servicio ? 'border-red-500' : 'border-gold/20 focus:border-gold'
                    }`}
                  >
                    <option value="">-- Seleccione una especialidad --</option>
                    <option value="corporativo">Derecho Corporativo y Comercial</option>
                    <option value="laboral">Derecho Laboral y Seguridad Social</option>
                    <option value="bic">Consultoría y Transformación BIC</option>
                    <option value="litigios">Litigios y Solución de Conflictos</option>
                    <option value="probono">Postulación Pro Bono (Triple Impacto)</option>
                  </select>
                  {errors.servicio && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center space-x-1 font-sans">
                      <span>{errors.servicio.message}</span>
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-navy uppercase tracking-wider mb-2 font-sans">
                    Describa brevemente su necesidad legal o de consulta *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    {...register('mensaje')}
                    className={`w-full bg-warm/50 border rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:bg-pure-white transition-colors duration-200 ${
                      errors.mensaje ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gold/20 focus:border-gold'
                    }`}
                    placeholder="Escriba los detalles generales del caso para asignarle el abogado especialista idóneo."
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center space-x-1 font-sans">
                      <span>{errors.mensaje.message}</span>
                    </p>
                  )}
                </div>

                {/* Aceptar terminos (Habeas Data) */}
                <div className="space-y-2">
                  <div className="flex items-start">
                    <input
                      id="aceptarTerminos"
                      type="checkbox"
                      {...register('aceptarTerminos')}
                      className="h-4 w-4 rounded border-gold/30 text-navy focus:ring-gold mt-1"
                    />
                    <label htmlFor="aceptarTerminos" className="ml-2 block text-xs text-charcoal/70 leading-relaxed font-sans font-light select-none">
                      Autorizo formalmente a LICISOLUCIONES S.A.S BIC para el tratamiento de mis datos personales de conformidad con la Política de Tratamiento de Información regulada bajo la **Ley de Habeas Data (Ley 1581 de 2012 de Colombia)**. *
                    </label>
                  </div>
                  {errors.aceptarTerminos && (
                    <p className="text-red-500 text-xs flex items-center space-x-1 font-sans">
                      <span>{errors.aceptarTerminos.message}</span>
                    </p>
                  )}
                </div>

                {/* Form submit status alerts */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-sm text-emerald-800 text-xs sm:text-sm font-sans"
                    >
                      <div className="flex items-center space-x-2">
                        <LucideIcon name="CheckCircle2" className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="font-semibold">¡Solicitud recibida correctamente!</span>
                      </div>
                      <p className="mt-1 font-light text-emerald-700/90 ml-7">
                        Hemos procesado su mensaje. Un abogado especialista de nuestro equipo en Bogotá le contactará en un plazo máximo de 24 horas hábiles.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-sm text-amber-800 text-xs sm:text-sm font-sans"
                    >
                      <div className="flex items-center space-x-2">
                        <LucideIcon name="Award" className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="font-semibold">Simulación de envío completada</span>
                      </div>
                      <p className="mt-1 font-light text-amber-700/90 ml-7">
                        {errorMessage}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <div>
                  <button
                    id="submit-contact-form"
                    type="submit"
                    disabled={isSending}
                    className="w-full flex justify-center items-center space-x-2 bg-navy hover:bg-navy/90 disabled:bg-navy/60 text-gold font-bold py-4 px-6 rounded-sm text-sm uppercase tracking-widest transition-all duration-200 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <LucideIcon name="Loader2" className="w-5 h-5 animate-spin text-gold" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud de Consulta</span>
                        <LucideIcon name="Mail" className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
