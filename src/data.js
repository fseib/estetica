// Datos del negocio: editá este archivo para personalizar la landing.

export const business = {
  name: 'Aurea',
  tagline: 'Estética & Bienestar',
  // Formato internacional sin "+", espacios ni guiones (Argentina móvil: 549 + área + número)
  whatsapp: '5491123456789',
  whatsappDisplay: '+54 9 11 2345-6789',
  email: 'hola@aureaestetica.com.ar',
  instagram: 'aurea.estetica',
  address: 'Av. Santa Fe 3450, Palermo',
  city: 'Ciudad Autónoma de Buenos Aires',
  mapQuery: 'Av. Santa Fe 3450, Palermo, CABA, Argentina',
  hours: [
    { days: 'Lunes a viernes', time: '9:00 a 20:00' },
    { days: 'Sábados', time: '9:00 a 14:00' },
    { days: 'Domingos y feriados', time: 'Cerrado' },
  ],
}

export const waLink = (text = '¡Hola! Quisiera hacer una consulta.') =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`

export const services = [
  {
    icon: 'face',
    title: 'Tratamientos faciales',
    description:
      'Limpieza profunda, peeling, dermaplaning e hidratación con ácido hialurónico, adaptados a tu tipo de piel.',
    items: ['Limpieza facial profunda', 'Peeling químico', 'Hydrafacial'],
    duration: '60–90 min',
  },
  {
    icon: 'laser',
    title: 'Depilación láser',
    description:
      'Tecnología de diodo soprano para resultados definitivos, apta para todo fototipo y prácticamente indolora.',
    items: ['Zonas pequeñas y grandes', 'Cuerpo completo', 'Packs por sesiones'],
    duration: '15–60 min',
  },
  {
    icon: 'body',
    title: 'Corporales',
    description:
      'Modelado, reducción y reafirmación con aparatología de última generación y masoterapia.',
    items: ['Radiofrecuencia', 'Drenaje linfático', 'Criolipólisis'],
    duration: '45–75 min',
  },
  {
    icon: 'spa',
    title: 'Bienestar & spa',
    description:
      'Rituales de relajación para desconectar: masajes descontracturantes, piedras calientes y aromaterapia.',
    items: ['Masaje descontracturante', 'Piedras calientes', 'Ritual de pareja'],
    duration: '50–90 min',
  },
]

export const stats = [
  { value: 12, suffix: '+', label: 'años de experiencia' },
  { value: 8500, suffix: '+', label: 'clientas felices' },
  { value: 4.9, suffix: '★', label: 'calificación en Google', decimals: 1 },
]

export const steps = [
  { title: 'Consultá', text: 'Escribinos por WhatsApp y contanos qué estás buscando.' },
  { title: 'Evaluación', text: 'Hacemos un diagnóstico personalizado sin cargo.' },
  { title: 'Tu tratamiento', text: 'Diseñamos un plan a medida y lo acompañamos sesión a sesión.' },
]

export const testimonials = [
  {
    name: 'Camila R.',
    location: 'Palermo',
    rating: 5,
    service: 'Hydrafacial',
    text: 'La atención es impecable. Me explicaron todo con mucha paciencia y la piel me quedó luminosa desde la primera sesión. Ya es mi lugar fijo.',
  },
  {
    name: 'Lucía M.',
    location: 'Belgrano',
    rating: 5,
    service: 'Depilación láser',
    text: 'Probé en varios centros y acá es otra cosa. Profesionales, puntuales y el ambiente es súper cálido. Los resultados se notan.',
  },
  {
    name: 'Martina G.',
    location: 'Recoleta',
    rating: 5,
    service: 'Drenaje linfático',
    text: 'Fui por recomendación de una amiga y no me arrepiento. Las chicas son divinas y el lugar es hermoso, se respira tranquilidad.',
  },
  {
    name: 'Sofía P.',
    location: 'Villa Crespo',
    rating: 5,
    service: 'Masaje con piedras',
    text: 'Un mimo total. Salí renovada. Reservar por WhatsApp es facilísimo y siempre responden rápido.',
  },
  {
    name: 'Valentina D.',
    location: 'Colegiales',
    rating: 4,
    service: 'Peeling químico',
    text: 'Muy conforme con el tratamiento. Me hicieron un seguimiento después de cada sesión, algo que valoro muchísimo.',
  },
]

export const faqs = [
  {
    q: '¿Cómo reservo un turno?',
    a: 'Escribinos por WhatsApp y te ofrecemos los horarios disponibles. Te confirmamos el turno en el momento.',
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'Efectivo, transferencia, Mercado Pago y tarjetas de débito y crédito. Consultá por cuotas sin interés en packs.',
  },
  {
    q: '¿La primera consulta tiene costo?',
    a: 'No. La evaluación inicial es sin cargo y nos permite recomendarte el tratamiento ideal para vos.',
  },
  {
    q: '¿Puedo cancelar o reprogramar?',
    a: 'Sí, te pedimos que nos avises con al menos 24 horas de anticipación para poder ofrecer el turno a otra persona.',
  },
]
