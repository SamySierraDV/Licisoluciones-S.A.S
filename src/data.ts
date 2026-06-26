import { Lawyer, ServiceItem, BicPillar, Testimonial } from './types';

export const LAWYERS: Lawyer[] = [
  {
    id: 'juan-rivera',
    name: 'Dr. Juan Carlos Rivera',
    role: 'Socio Principal & Fundador',
    specialization: 'Derecho Corporativo, Comercial y Estructuración BIC',
    bio: 'Especialista en Derecho Comercial de la Universidad del Rosario con más de 15 años de experiencia asesorando a empresas nacionales y multinacionales en gobierno corporativo, fusiones y adquisiciones. Pionero en Colombia en la estructuración de sociedades con la condición BIC.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'jrivera@licisoluciones.com',
  },
  {
    id: 'maria-restrepo',
    name: 'Dra. María Camila Restrepo',
    role: 'Directora Jurídica',
    specialization: 'Derecho Laboral y de la Seguridad Social',
    bio: 'Abogada con mención de honor de la Universidad de los Andes, especialista en Derecho Laboral de la Pontificia Universidad Javeriana. Con amplia trayectoria en consultoría preventiva para la mitigación del riesgo legal laboral y la implementación de planes de bienestar de interés colectivo.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'mrestrepo@licisoluciones.com',
  },
  {
    id: 'andres-rojas',
    name: 'Dr. Andrés Felipe Rojas',
    role: 'Socio de Litigios',
    specialization: 'Derecho Civil, Litigios y Solución de Conflictos',
    bio: 'Especialista en Derecho Procesal Civil con Maestría en Análisis de Conflictos. Cuenta con una destacada trayectoria en representación judicial ante tribunales de arbitramento y jueces de la República, priorizando siempre métodos alternativos de solución de conflictos de alto impacto.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'arojas@licisoluciones.com',
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'corporativo',
    title: 'Derecho Corporativo y Comercial',
    description: 'Estructuración y protección de empresas con altos estándares de transparencia y ética empresarial.',
    iconName: 'Briefcase',
    longDescription: 'Asesoramos integralmente a micro, pequeñas, medianas y grandes empresas en todas las fases de su ciclo de vida. Creemos que una estructura jurídica sólida es la base del crecimiento sostenible y responsable.',
    benefits: [
      'Constitución, reforma y liquidación de sociedades mercantiles.',
      'Diseño y redacción de contratos mercantiles a la medida.',
      'Auditorías legales preventivas (Due Diligence).',
      'Elaboración de acuerdos de accionistas y protocolos de familia.'
    ]
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral y Seguridad Social',
    description: 'Gestión estratégica del talento humano con enfoque en la equidad y el cumplimiento normativo.',
    iconName: 'Users',
    longDescription: 'Ofrecemos soluciones innovadoras para el manejo de las relaciones laborales. Buscamos balancear el crecimiento de la empresa con el bienestar integral de los trabajadores, construyendo ambientes laborales estables.',
    benefits: [
      'Estructuración de contratos de trabajo y reglamentos internos.',
      'Defensa judicial ante la jurisdicción laboral ordinaria.',
      'Asesoría preventiva y atención de requerimientos de la UGPP.',
      'Programas de equidad salarial y políticas de teletrabajo.'
    ]
  },
  {
    id: 'bic',
    title: 'Consultoría y Transformación BIC',
    description: 'Acompañamiento integral para la adopción y mantenimiento del estatus de Beneficio e Interés Colectivo.',
    iconName: 'Sparkles',
    longDescription: 'Como firma BIC, somos apasionados por guiar a otras organizaciones colombianas en su transición hacia este modelo. Te ayudamos a transformar tu objeto social para generar un impacto positivo en la sociedad y el medio ambiente.',
    benefits: [
      'Diagnóstico inicial de viabilidad para adopción de la condición BIC.',
      'Reformas estatutarias y formalización ante la Cámara de Comercio.',
      'Diseño de planes estratégicos en las 5 dimensiones BIC.',
      'Acompañamiento en la elaboración y auditoría del reporte anual de impacto.'
    ]
  },
  {
    id: 'litigios',
    title: 'Litigios y Solución de Conflictos',
    description: 'Defensa técnica especializada y promoción de mecanismos alternativos para solucionar controversias.',
    iconName: 'Scale',
    longDescription: 'Cuando las disputas surgen, ofrecemos una representación legal rigurosa y estratégica. Nos enfocamos en la negociación y conciliación como primera opción para ahorrar costos y preservar las relaciones comerciales de nuestros clientes.',
    benefits: [
      'Representación ante jueces civiles, comerciales y administrativos.',
      'Tramitación de procesos de conciliación en centros de arbitraje.',
      'Atención de controversias contractuales de alta complejidad.',
      'Defensa frente a reclamaciones de protección al consumidor.'
    ]
  }
];

export const BIC_PILLARS: BicPillar[] = [
  {
    title: 'Modelo de Negocio',
    description: 'Seleccionamos proveedores éticos, promovemos el comercio justo y evaluamos el impacto social y ambiental de nuestras operaciones.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Gobierno Corporativo',
    description: 'Mantenemos transparencia absoluta en nuestras finanzas, equidad de género en el liderazgo y divulgación abierta de nuestros reportes de impacto.',
    iconName: 'Building',
  },
  {
    title: 'Prácticas Laborales',
    description: 'Ofrecemos salarios dignos, oportunidades reales de desarrollo profesional, flexibilidad horaria y condiciones idóneas de seguridad y salud en el trabajo.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Prácticas Ambientales',
    description: 'Implementamos políticas estrictas de cero papel, reciclaje de materiales tecnológicos y optimización del uso de energía en nuestras oficinas.',
    iconName: 'Leaf',
  },
  {
    title: 'Prácticas de Comunidad',
    description: 'Dedicamos un porcentaje de nuestras horas de servicio a asesorías Pro Bono para emprendimientos sociales y comunidades vulnerables en Bogotá.',
    iconName: 'Globe',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Alejandro Gómez',
    company: 'Fundador de BioEmpaques de Colombia',
    feedback: 'LICISOLUCIONES nos guio de manera excepcional en nuestra transformación a Sociedad BIC. Su dominio técnico en la materia y su sensibilidad social marcaron la diferencia.',
    rating: 5,
  },
  {
    id: '2',
    clientName: 'Diana Carolina Ruiz',
    company: 'Gerente de Gestión Humana - Logística Andina',
    feedback: 'Gracias a su asesoría preventiva en derecho laboral logramos reestructurar nuestras políticas de contratación, logrando cero demandas y un clima de confianza increíble.',
    rating: 5,
  },
  {
    id: '3',
    clientName: 'Mateo Restrepo',
    company: 'Director Legal - Constructora Urbana',
    feedback: 'Su capacidad estratégica para resolver un litigio comercial sumamente complejo en etapa de conciliación nos ahorró millones en pérdidas de tiempo y dinero.',
    rating: 5,
  }
];
