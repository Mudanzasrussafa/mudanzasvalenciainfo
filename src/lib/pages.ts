// Datos de cada página. title y description son los mismos que tenía la web
// de WordPress (Yoast) para no perder posicionamiento. h1 es el título original.
export type PageData = {
  slug: string;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  photo?: { src: string; alt: string };
};

export const pages: Record<string, PageData> = {
  "precios-mudanzas-valencia": {
    slug: "precios-mudanzas-valencia",
    navLabel: "Precios mudanzas Valencia",
    h1: "Precios mudanzas Valencia",
    title: "Precios mudanzas Valencia - Presupuestos cerrados al mejor Precio",
    description:
      "Bienvenido a la tabla de precios de mudanzas Valencia. Pide tu presupuesto sin compromiso realizando una visita a tu domicilio.",
    eyebrow: "Precios",
    photo: { src: "/img/carga.webp", alt: "Operarios de Russafa cargando cajas en el camión" },
  },
  "elevador-mudanzas-valencia": {
    slug: "elevador-mudanzas-valencia",
    navLabel: "Elevador mudanzas Valencia",
    h1: "Elevador mudanzas Valencia",
    title: "Elevador mudanzas Valencia - Servicio mínimo y mudanzas completas",
    description:
      "El uso de un elevador de mudanzas en Valencia garantiza una perfecta ejecución para cualquier tipo de acceso. Mudanzas seguras con elevador.",
    eyebrow: "Servicios adicionales",
  },
  "guardamuebles-valencia": {
    slug: "guardamuebles-valencia",
    navLabel: "Guardamuebles Valencia",
    h1: "Guardamuebles Valencia",
    title: "Guardamuebles Valencia - Trasteros o guardamuebles, ¿qué debo elegir?",
    description:
      "¿Necesitas un guardamuebles en Valencia? Todos los enseres destinados para su custodia estarán debidamente asegurados y embalados.",
    eyebrow: "Servicios adicionales",
    photo: { src: "/img/trastero.webp", alt: "Trasteros de guardamuebles Russafa" },
  },
  "empresas-de-mudanzas-valencia": {
    slug: "empresas-de-mudanzas-valencia",
    navLabel: "Empresas de Mudanzas Valencia",
    h1: "Empresas de Mudanzas Valencia",
    title: "Empresas de Mudanzas Valencia - Líderes en mudanzas Valencia",
    description:
      "Qué te ofrece una empresa de mudanzas en Valencia: servicios, vehículos, embalaje y garantías. Te ofrecemos el mejor servicio y cuidado de tus cosas.",
    eyebrow: "Guía",
  },
  "mudanzas-particulares-valencia": {
    slug: "mudanzas-particulares-valencia",
    navLabel: "Mudanzas particulares Valencia",
    h1: "Mudanzas particulares Valencia",
    title: "Mudanzas particulares Valencia - Mudanzas del hogar",
    description:
      "Mudanzas Valencia Info pone a tu disposición profesionales que realizan mudanzas para particulares. Pide tu presupuesto a medida.",
    eyebrow: "Por tipo de cliente",
    photo: { src: "/img/familia.webp", alt: "Familia junto a cajas de mudanza Russafa" },
  },
  "mudanzas-oficinas-valencia": {
    slug: "mudanzas-oficinas-valencia",
    navLabel: "Mudanzas oficinas Valencia",
    h1: "Mudanzas oficinas Valencia",
    title: "Mudanzas oficinas Valencia - Organización y plan logístico",
    description:
      "Las mudanzas de oficinas Valencia se deben organizar y coordinar de manera precisa. Disponemos de profesionales que analizan las prioridades del traslado.",
    eyebrow: "Por tipo de cliente",
  },
  "mudanzas-locales-valencia": {
    slug: "mudanzas-locales-valencia",
    navLabel: "Mudanzas locales Valencia",
    h1: "Mudanzas locales Valencia",
    title: "Mudanzas locales Valencia - Mudanzas en Valencia y otras localidades",
    description:
      "Las mudanzas locales en Valencia son las que se ejecutan dentro de una misma localidad. Trabajamos con operarios especializados en este tipo de mudanzas.",
    eyebrow: "Por distancia",
  },
  "mudanzas-nacionales-valencia": {
    slug: "mudanzas-nacionales-valencia",
    navLabel: "Mudanzas nacionales Valencia",
    h1: "Mudanzas nacionales Valencia",
    title: "Mudanzas nacionales Valencia - Traslados nacionales directos o grupajes",
    description:
      "¿Te planteas cambiar de comunidad autónoma? Realiza tu traslado a precios competitivos y con los mejores expertos en mudanzas nacionales Valencia.",
    eyebrow: "Por distancia",
  },
  "mudanzas-internacionales-valencia": {
    slug: "mudanzas-internacionales-valencia",
    navLabel: "Mudanzas internacionales Valencia",
    h1: "Mudanzas internacionales Valencia",
    title: "Mudanzas internacionales Valencia - Mudanzas por tierra, aire o mar",
    description:
      "Hablamos de mudanzas internacionales en Valencia cuando el traslado es a otro país. Te asesoramos en todo el proceso para tu tranquilidad.",
    eyebrow: "Por distancia",
  },
  "mudanzas-economicas-valencia": {
    slug: "mudanzas-economicas-valencia",
    navLabel: "Mudanzas económicas Valencia",
    h1: "Mudanzas económicas Valencia",
    title: "Mudanzas económicas Valencia - Consejos para economizar tu Mudanza",
    description:
      "Es posible conseguir mudanzas económicas en Valencia. Hay estrategias y combinaciones que pueden proporcionar beneficios y reducir el coste.",
    eyebrow: "Ahorro",
  },
  "mudanzas-alicante": {
    slug: "mudanzas-alicante",
    navLabel: "Mudanzas Alicante",
    h1: "Mudanzas Alicante",
    title: "Mudanzas Alicante - Pide diferentes presupuestos de manera gratuita",
    description:
      "Si vas a realizar una mudanza en Alicante, lo mejor que puedes hacer es contratar una empresa de mudanzas, será rápido, cómodo y seguro.",
    eyebrow: "Comunidad Valenciana",
  },
  "mudanzas-castellon": {
    slug: "mudanzas-castellon",
    navLabel: "Mudanzas Castellón",
    h1: "Mudanzas Castellón",
    title: "Mudanzas Castellón - Recibe información y presupuesto sin compromiso",
    description:
      "¿Necesitas realizar un traslado? Es aconsejable acordar un servicio con una empresa de mudanzas Castellón. Compara diferentes presupuestos.",
    eyebrow: "Comunidad Valenciana",
  },
};

export const pageList = Object.values(pages);

// Para convertir los títulos de enlace de la web antigua en tarjetas
export const slugByTitle: Record<string, string> = Object.fromEntries(
  pageList.map((p) => [p.h1.toLowerCase(), p.slug]),
);
