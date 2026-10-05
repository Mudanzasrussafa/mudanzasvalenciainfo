export type PageData = {
  slug: string;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string[];
  bullets?: { h: string; p: string }[];
  related?: string[]; // slugs
};

export const pages: Record<string, PageData> = {
  "mudanzas-particulares-valencia": {
    slug: "mudanzas-particulares-valencia",
    navLabel: "Particulares",
    h1: "Mudanzas particulares en Valencia",
    title: "Mudanzas particulares en Valencia | Guía y presupuesto",
    description:
      "Todo sobre las mudanzas de hogar en Valencia: pisos, chalets, apartamentos y estudios. Infórmate y pide presupuesto gratis y sin compromiso.",
    eyebrow: "Por tipo de cliente",
    intro: [
      "Las mudanzas particulares son los traslados del hogar: pisos, chalets, casas, apartamentos y estudios. Son el caso más habitual y, aunque parezcan sencillas, conviene planificarlas para evitar imprevistos y sobrecostes.",
      "Aquí te explicamos qué tener en cuenta según tu tipo de vivienda y cómo conseguir el presupuesto más ajustado sin renunciar a las garantías.",
    ],
    bullets: [
      { h: "Pisos y apartamentos", p: "El acceso (planta, ascensor, calle estrecha) es lo que más influye en el precio." },
      { h: "Chalets y casas", p: "Mayor volumen y, a menudo, necesidad de desmontaje y embalaje especial." },
      { h: "Estudios", p: "Traslados rápidos donde lo que más se valora es flexibilidad de fecha y precio cerrado." },
    ],
    related: ["precios-mudanzas-valencia", "mudanzas-locales-valencia", "elevador-mudanzas-valencia"],
  },
  "mudanzas-oficinas-valencia": {
    slug: "mudanzas-oficinas-valencia",
    navLabel: "Oficinas",
    h1: "Mudanzas de oficinas en Valencia",
    title: "Mudanzas de oficinas y locales en Valencia | Guía",
    description:
      "Mudanzas de oficinas, despachos, locales comerciales, tiendas y naves en Valencia. Cómo minimizar la parada de actividad. Presupuesto sin compromiso.",
    eyebrow: "Por tipo de cliente",
    intro: [
      "Las mudanzas profesionales incluyen oficinas y despachos, locales comerciales, tiendas y grandes traslados de naves industriales, talleres o fábricas. El objetivo siempre es el mismo: parar la actividad lo mínimo posible.",
      "La clave está en la planificación previa, la coordinación de fechas (mejor en fin de semana) y el etiquetado por departamentos.",
    ],
    related: ["empresas-de-mudanzas-valencia", "precios-mudanzas-valencia", "guardamuebles-valencia"],
  },
  "mudanzas-locales-valencia": {
    slug: "mudanzas-locales-valencia",
    navLabel: "Locales",
    h1: "Mudanzas locales en Valencia",
    title: "Mudanzas locales en Valencia | Guía y presupuesto",
    description:
      "Mudanzas dentro de la misma ciudad o comarca de Valencia. El caso más frecuente. Infórmate de cómo organizarla y pide presupuesto gratis.",
    eyebrow: "Por distancia",
    intro: [
      "Las mudanzas locales son los traslados dentro de una misma ciudad o pueblo, e incluyen también las regionales (cambiar de localidad dentro de la misma comunidad). La gran mayoría de cambios de domicilio son mudanzas locales.",
      "Al ser trayectos cortos, el coste depende sobre todo del volumen y del acceso, no de la distancia.",
    ],
    related: ["mudanzas-particulares-valencia", "precios-mudanzas-valencia", "mudanzas-nacionales-valencia"],
  },
  "mudanzas-nacionales-valencia": {
    slug: "mudanzas-nacionales-valencia",
    navLabel: "Nacionales",
    h1: "Mudanzas nacionales desde Valencia",
    title: "Mudanzas nacionales desde Valencia | Guía y precios",
    description:
      "Mudanzas entre comunidades autónomas desde Valencia. Cómo se calculan, qué influye en el precio y cómo organizarlas. Presupuesto sin compromiso.",
    eyebrow: "Por distancia",
    intro: [
      "Hablamos de mudanza nacional cuando el traslado se realiza entre comunidades autónomas. Suele estar asociado a cambios de trabajo, estudios o el retorno a la tierra natal.",
      "En los traslados de larga distancia cobran importancia la consolidación de carga y la fecha, ya que permiten ajustar mucho el precio.",
    ],
    related: ["precios-mudanzas-valencia", "mudanzas-internacionales-valencia", "guardamuebles-valencia"],
  },
  "mudanzas-internacionales-valencia": {
    slug: "mudanzas-internacionales-valencia",
    navLabel: "Internacionales",
    h1: "Mudanzas internacionales desde Valencia",
    title: "Mudanzas internacionales desde Valencia | Guía completa",
    description:
      "Mudanzas internacionales desde Valencia: Europa por carretera, ultramar por barco y opciones aéreas. Aduanas, plazos y cómo elegir. Presupuesto gratis.",
    eyebrow: "Por distancia",
    intro: [
      "Cuando se cambia de país se realiza una mudanza internacional. Predominan las mudanzas por Europa y por carretera (camión). Al cambiar de continente, el transporte es marítimo, con navieras y contenedores; también es posible por avión cuando el volumen es pequeño.",
      "Aquí intervienen factores adicionales como la documentación de aduanas, los plazos de tránsito y el seguro, que conviene tener claros desde el principio.",
    ],
    bullets: [
      { h: "Europa (carretera)", p: "La opción más habitual y ágil dentro del continente." },
      { h: "Ultramar (marítima)", p: "Por contenedor. Plazos más largos y trámites de aduana." },
      { h: "Aérea", p: "Solo recomendable para volúmenes pequeños y urgentes." },
    ],
    related: ["mudanzas-nacionales-valencia", "precios-mudanzas-valencia", "empresas-de-mudanzas-valencia"],
  },
  "empresas-de-mudanzas-valencia": {
    slug: "empresas-de-mudanzas-valencia",
    navLabel: "Empresas de mudanzas",
    h1: "Empresas de mudanzas en Valencia",
    title: "Empresas de mudanzas en Valencia | Cómo elegir bien",
    description:
      "Qué mirar antes de contratar una empresa de mudanzas en Valencia: seguro, garantías, reseñas y presupuesto cerrado por escrito. Comparativa honesta.",
    eyebrow: "Antes de contratar",
    intro: [
      "Elegir bien la empresa es la decisión que más impacto tiene en cómo va a salir tu mudanza. No se trata solo del precio: el seguro, las garantías y la experiencia marcan la diferencia.",
      "Te damos los criterios reales para comparar y no dejar tu traslado en manos de cualquiera.",
    ],
    bullets: [
      { h: "Seguro y responsabilidad civil", p: "Pide siempre cobertura por escrito ante daños o pérdidas." },
      { h: "Presupuesto cerrado", p: "Desconfía de los precios orientativos que luego cambian el día de la mudanza." },
      { h: "Reseñas reales", p: "Valoraciones verificables en Google y trayectoria contrastable." },
    ],
    related: ["precios-mudanzas-valencia", "mudanzas-economicas-valencia", "mudanzas-particulares-valencia"],
  },
  "mudanzas-economicas-valencia": {
    slug: "mudanzas-economicas-valencia",
    navLabel: "Económicas",
    h1: "Mudanzas económicas en Valencia",
    title: "Mudanzas económicas en Valencia | Cómo ahorrar",
    description:
      "Cómo conseguir una mudanza económica en Valencia sin renunciar a las garantías: fechas, embalaje propio, consolidación de carga y comparación de presupuestos.",
    eyebrow: "Antes de contratar",
    intro: [
      "Una mudanza económica no es la más barata, sino la que mejor relación calidad-precio te da. Hay varias palancas para abaratarla sin perder seguridad.",
      "La fecha, el embalaje y la flexibilidad de horario son las que más margen te dan.",
    ],
    bullets: [
      { h: "Evita el fin de mes", p: "La mayoría de traslados se concentran en los últimos días; mover la fecha abarata." },
      { h: "Embala tú lo sencillo", p: "Reservar el embalaje profesional solo para lo delicado reduce coste." },
      { h: "Compara varios presupuestos", p: "Pide al menos tres y compara con los mismos datos." },
    ],
    related: ["precios-mudanzas-valencia", "empresas-de-mudanzas-valencia", "mudanzas-locales-valencia"],
  },
  "guardamuebles-valencia": {
    slug: "guardamuebles-valencia",
    navLabel: "Guardamuebles",
    h1: "Guardamuebles en Valencia",
    title: "Guardamuebles en Valencia | Guía de almacenaje",
    description:
      "Guardamuebles, trasteros y self-storage en Valencia para almacenar tu mobiliario de forma temporal y segura. Cómo elegir y qué precio esperar.",
    eyebrow: "Servicios adicionales",
    intro: [
      "Según cómo sea tu cambio de hogar, puede que necesites almacenar los muebles temporalmente. Existen diferentes espacios para depositar tu mobiliario: guardamuebles, trasteros, self-storage o incluso espacios propios.",
      "Te ayudamos a elegir el formato y el tamaño adecuados para no pagar de más.",
    ],
    related: ["mudanzas-particulares-valencia", "precios-mudanzas-valencia", "elevador-mudanzas-valencia"],
  },
  "mudanzas-alicante": {
    slug: "mudanzas-alicante",
    navLabel: "Alicante",
    h1: "Mudanzas en Alicante",
    title: "Mudanzas en Alicante desde Valencia | Guía y presupuesto",
    description:
      "Mudanzas a y desde la provincia de Alicante con Mudanzas Russafa, con salida desde nuestra base de Torrent. Visita gratuita y presupuesto por escrito.",
    eyebrow: "Comunidad Valenciana",
    intro: [
      "Mudanzas Russafa también trabaja en la provincia de Alicante. Salimos desde nuestra base de Torrent con nuestro propio equipo y camiones, y te acompañamos durante todo el proceso.",
      "Infórmate de los tipos de servicio y pide tu presupuesto adaptado a tu zona.",
    ],
    related: ["mudanzas-castellon", "precios-mudanzas-valencia", "empresas-de-mudanzas-valencia"],
  },
  "mudanzas-castellon": {
    slug: "mudanzas-castellon",
    navLabel: "Castellón",
    h1: "Mudanzas en Castellón",
    title: "Mudanzas en Castellón desde Valencia | Guía y presupuesto",
    description:
      "Mudanzas a y desde la provincia de Castellón con Mudanzas Russafa, con salida desde nuestra base de Torrent. Visita gratuita y presupuesto por escrito.",
    eyebrow: "Comunidad Valenciana",
    intro: [
      "Mudanzas Russafa también hace mudanzas en la provincia de Castellón. Te atendemos desde nuestra base de Torrent, con el mismo equipo y las mismas garantías que en Valencia.",
      "Consulta los servicios disponibles y solicita tu presupuesto a medida.",
    ],
    related: ["mudanzas-alicante", "precios-mudanzas-valencia", "empresas-de-mudanzas-valencia"],
  },
};

export const pageList = Object.values(pages);
