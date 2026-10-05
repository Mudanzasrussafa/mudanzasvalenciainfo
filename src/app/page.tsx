import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CopyPhone from "@/components/CopyPhone";
import { Article, readContent } from "@/components/Article";
import { site, tel } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Mudanzas Valencia Info - Asesor de mudanzas en Valencia" },
  description:
    "Mudanzas Valencia - Trabajamos con los mejores profesionales de mudanzas en Valencia - Infórmate de todos los servicios de mudanza.",
  alternates: { canonical: "/" },
};

const servicios = [
  { img: "i-vaciado", w: 360, h: 318, t: "Mudanzas particulares", p: "Pisos y casas: embalaje, desmontaje, transporte y montaje en destino.", ir: "Particulares", href: "/mudanzas-particulares-valencia/" },
  { img: "i-mejores", w: 360, h: 357, t: "Mudanzas económicas", p: "Pocos muebles, un traslado corto o solo transporte. Presupuesto a distancia.", ir: "Económicas", href: "/mudanzas-economicas-valencia/" },
  { img: "i-desmontaje", w: 360, h: 284, t: "Oficinas", p: "Puestos, archivo y equipos informáticos, planificados para no parar la actividad.", ir: "Oficinas", href: "/mudanzas-oficinas-valencia/" },
  { img: "i-embalaje", w: 360, h: 243, t: "Locales y negocios", p: "Tiendas, almacenes y restauración. Mobiliario, género y maquinaria.", ir: "Locales", href: "/mudanzas-locales-valencia/" },
  { img: "i-mudanzas", w: 360, h: 292, t: "Nacionales", p: "De Valencia a cualquier provincia de la península, con salida desde Torrent.", ir: "Nacionales", href: "/mudanzas-nacionales-valencia/" },
  { img: "i-presupuestos", w: 284, h: 360, t: "Internacionales", p: "Traslados a Europa: documentación, inventario y plazos claros desde el principio.", ir: "Internacionales", href: "/mudanzas-internacionales-valencia/" },
];

const volumenes = [
  { t: "Estudio", r: "8–15 m³", min: 8, max: 15 },
  { t: "Piso de 2 habitaciones", r: "18–28 m³", min: 18, max: 28 },
  { t: "Piso de 3 habitaciones", r: "28–40 m³", min: 28, max: 40 },
  { t: "Chalet o casa grande", r: "40–60 m³", min: 40, max: 60 },
];

const pasos = [
  { t: "Nos cuentas tu mudanza", p: "Por teléfono, WhatsApp o el formulario. Origen, destino, fechas aproximadas y qué hay que mover." },
  { t: "Visita o valoración a distancia", p: "Si es una mudanza completa, vamos a verla sin coste. Si es pequeña, nos basta con fotos o un vídeo." },
  { t: "Presupuesto por escrito", p: "Detallado partida a partida, sin letra pequeña. Fijamos el día contigo cuando lo aceptas." },
  { t: "El día de la mudanza", p: "Embalamos, protegemos, cargamos y montamos en destino. Tú solo decides dónde va cada cosa." },
];

const zonas = [
  { m: "Ciudad y área metropolitana", t: "Valencia", href: "/empresas-de-mudanzas-valencia/" },
  { m: "Provincia", t: "Alicante", href: "/mudanzas-alicante/" },
  { m: "Provincia", t: "Castellón", href: "/mudanzas-castellon/" },
  { m: "Península", t: "Nacionales", href: "/mudanzas-nacionales-valencia/" },
  { m: "Europa", t: "Internacionales", href: "/mudanzas-internacionales-valencia/" },
];

const cinta = "Russafa · Mudanzas & guardamuebles · Cada mudanza es un nuevo comienzo".split(" · ");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      inLanguage: "es-ES",
      publisher: { "@id": `${site.url}/#empresa` },
    },
    {
      "@type": "MovingCompany",
      "@id": `${site.url}/#empresa`,
      name: site.company,
      legalName: site.legalName,
      telephone: "+34603280171",
      email: site.leadEmail,
      url: site.url,
      image: `${site.url}/img/hero.webp`,
      address: { "@type": "PostalAddress", addressLocality: "Torrent", addressRegion: "Valencia", addressCountry: "ES" },
      areaServed: ["Valencia", "Alicante", "Castellón", "España"],
    },
  ],
};

export default function Home() {
  return (
    <div className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="r-hero">
        <div className="r-wrap">
          <div className="r-hero-txt">
            <h1 className="r-d">
              Tu mudanza en Valencia, <em>bien hecha.</em>
            </h1>
            <p className="r-lead">
              Todo lo que necesitas saber para mudarte sin sustos: qué cuesta, cómo se organiza y quién lo hace. Esta
              guía la escribe el equipo de Mudanzas Russafa, con base en Torrent.
            </p>
            <div className="r-acts">
              <Link className="r-btn r-lima" href="/contacto/">
                Pedir presupuesto
              </Link>
              <a className="r-btn r-borde" href={site.whatsapp} target="_blank" rel="noopener">
                Escribir por WhatsApp
              </a>
            </div>
            <ul className="r-datos mono">
              <li>Visita gratuita en mudanzas completas</li>
              <li>Presupuesto detallado por escrito</li>
              <li>Seguro de responsabilidad civil</li>
            </ul>
          </div>
          <div className="r-hero-foto">
            <Image
              className="r-f"
              src="/img/hero.webp"
              alt="Dos operarios de Russafa cargan una caja en el camión de mudanzas"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 560px"
            />
            <Image className="r-iso" src="/img/isotipo.png" alt="" width={600} height={600} />
          </div>
        </div>
      </section>

      <div className="r-precinto-clip" aria-hidden>
        <div className="r-precinto">
          <div className="r-cinta">
            {[0, 1].map((k) => (
              <span key={k}>
                {[...cinta, ...cinta].map((c, i) => (
                  <span key={i}>
                    {c}
                    <b />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="servicios">
        <div className="r-wrap">
          <div className="r-cab">
            <div>
              <span className="mono">Servicios</span>
              <h2 className="r-d">Cada mudanza pide algo distinto</h2>
            </div>
            <p className="r-lead">
              Un estudio en Ruzafa no se mueve igual que una oficina en Paterna. Elige tu caso y te contamos cómo se
              hace, qué incluye y qué conviene preguntar antes de contratar.
            </p>
          </div>
          <div className="r-servicios">
            {servicios.map((s) => (
              <Link key={s.href} className="r-srv" href={s.href}>
                <Image src={`/img/${s.img}.png`} alt="" width={s.w} height={s.h} />
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                </div>
                <span className="r-ir">
                  <span>{s.ir}</span>
                  <span>→</span>
                </span>
              </Link>
            ))}
            <Link className="r-srv r-dest" href="/elevador-mudanzas-valencia/">
              <span className="r-mark">
                <Image src="/img/i-elevador.png" alt="" width={360} height={338} />
              </span>
              <div>
                <h3>Elevador montamuebles</h3>
                <p>Subimos y bajamos por la fachada lo que no cabe por la escalera.</p>
              </div>
              <span className="r-ir">
                <span>Elevador</span>
                <span>→</span>
              </span>
            </Link>
            <Link className="r-srv" href="/guardamuebles-valencia/">
              <Image src="/img/i-guardamuebles.png" alt="" width={360} height={260} />
              <div>
                <h3>Guardamuebles</h3>
                <p>Guarda tus cosas entre una casa y otra, o mientras haces obra.</p>
              </div>
              <span className="r-ir">
                <span>Guardamuebles</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="r-elevador" id="elevador">
        <div className="r-wrap">
          <div className="r-ico">
            <Image src="/img/i-elevador.png" alt="Ilustración de un elevador montamuebles" width={360} height={338} />
          </div>
          <div className="r-txt">
            <span className="mono">Elevador montamuebles en Valencia</span>
            <h2 className="r-d">Cuando el sofá no cabe por la escalera</h2>
            <p className="r-lead">
              El elevador se coloca en la calle y sube los muebles por el balcón o la ventana. Es más rápido, cuida la
              escalera de la comunidad y evita desmontar lo que no se debe desmontar.
            </p>
            <ul className="r-usos">
              <li>Fincas antiguas sin ascensor</li>
              <li>Sofás, armarios y colchones grandes</li>
              <li>Ascensores pequeños o escaleras estrechas</li>
              <li>Pisos altos donde la escalera se hace eterna</li>
            </ul>
            <div className="r-acts">
              <Link className="r-btn r-pino" href="/elevador-mudanzas-valencia/">
                Cómo funciona el elevador
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="r-precios" id="precios">
        <div className="r-wrap">
          <div>
            <span className="mono" style={{ color: "var(--suave)" }}>
              Precios de mudanzas en Valencia
            </span>
            <h2 className="r-d" style={{ marginTop: 14 }}>
              ¿Cuánto cuesta mudarse?
            </h2>
            <p className="r-lead" style={{ marginTop: 20 }}>
              Depende de tu mudanza, no de una tarifa cerrada. Estos son los factores que mueven el precio, para que
              sepas qué mirar cuando compares presupuestos.
            </p>
            <ol className="r-factores">
              <li><div><b>Volumen en m³</b><span>Cuánto ocupan tus muebles y cajas dentro del camión.</span></div></li>
              <li><div><b>Distancia</b><span>Dentro de Valencia, a otra provincia o fuera de España.</span></div></li>
              <li><div><b>Accesos</b><span>Plantas, ascensor, escalera y si hace falta elevador.</span></div></li>
              <li><div><b>Embalaje</b><span>Si lo haces tú o lo hacemos nosotros con material propio.</span></div></li>
              <li><div><b>Desmontaje y montaje</b><span>Armarios, camas y muebles que hay que desarmar.</span></div></li>
            </ol>
            <div className="r-acts" style={{ marginTop: 28 }}>
              <Link className="r-btn r-pino" href="/precios-mudanzas-valencia/">
                Guía completa de precios
              </Link>
            </div>
          </div>
          <div className="r-m3" aria-label="Volumen orientativo por tipo de vivienda">
            <div>
              <span className="mono">Volumen orientativo</span>
              <h3>¿Cuántos m³ es tu casa?</h3>
            </div>
            {volumenes.map((v) => (
              <div key={v.t} className="r-fila">
                <div className="r-et">
                  <span>{v.t}</span>
                  <span>{v.r}</span>
                </div>
                <div className="r-barra">
                  <i className="r-r" style={{ width: `${(v.max / 60) * 100}%` }} />
                  <i style={{ width: `${(v.min / 60) * 100}%` }} />
                </div>
              </div>
            ))}
            <div className="r-escala">
              <span>0</span>
              <span>15</span>
              <span>30</span>
              <span>45</span>
              <span>60 m³</span>
            </div>
            <p className="r-nota">
              Cifras orientativas. El volumen real y el precio te los damos por escrito, después de la visita gratuita
              o con fotos y vídeo si la mudanza es pequeña.
            </p>
          </div>
        </div>
      </section>

      <section className="r-proceso">
        <div className="r-wrap">
          <div className="r-foto">
            <Image
              src="/img/carga.webp"
              alt="Operarios de Russafa cargando cajas de colores en el camión"
              width={1200}
              height={686}
              sizes="(max-width: 860px) 100vw, 520px"
            />
          </div>
          <div>
            <span className="mono" style={{ color: "var(--suave)" }}>
              Cómo trabajamos
            </span>
            <h2 className="r-d" style={{ marginTop: 14 }}>
              De la primera llamada a la última caja
            </h2>
            <ol className="r-pasos">
              {pasos.map((p, i) => (
                <li key={p.t} className="r-paso">
                  <span className="r-n">{i + 1}</span>
                  <div>
                    <h3>{p.t}</h3>
                    <p>{p.p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="r-guarda" id="guardamuebles">
        <div className="r-wrap">
          <Image
            src="/img/trastero.webp"
            alt="Trasteros de guardamuebles Russafa con la persiana abierta"
            width={1300}
            height={743}
            sizes="(max-width: 860px) 100vw, 620px"
          />
          <div className="r-txt">
            <span className="mono" style={{ color: "var(--suave)" }}>
              Guardamuebles en Valencia
            </span>
            <h2 className="r-d">Un sitio seguro para lo que no cabe todavía</h2>
            <p className="r-lead">
              Entre una casa y otra, durante una obra o en un cambio de oficina. Recogemos, guardamos y te lo llevamos
              cuando lo necesites.
            </p>
            <ul className="r-chips">
              <li>Por meses</li>
              <li>Particulares y empresas</li>
              <li>Recogida y entrega</li>
            </ul>
            <div className="r-acts">
              <Link className="r-btn r-pino" href="/guardamuebles-valencia/">
                Ver guardamuebles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="r-garantias">
        <div className="r-wrap">
          <div className="r-cab">
            <div>
              <span className="mono">Lo que tienes asegurado</span>
              <h2 className="r-d">Sin sorpresas el día de la mudanza</h2>
            </div>
            <p className="r-lead" style={{ color: "#cfd9cf" }}>
              Una mudanza sale bien cuando todo está claro antes de empezar. Por eso trabajamos así con cada cliente.
            </p>
          </div>
          <div className="r-gar">
            <div className="r-g">
              <Image src="/img/i-presupuestos.png" alt="" width={284} height={360} />
              <h3>Presupuesto detallado</h3>
              <p>Por escrito y partida a partida. Sabes qué pagas y por qué antes de decir que sí.</p>
            </div>
            <div className="r-g">
              <Image src="/img/i-seguros.png" alt="" width={308} height={360} />
              <h3>Seguro incluido</h3>
              <p>Responsabilidad civil y seguro de la mercancía transportada en cada servicio.</p>
            </div>
            <div className="r-g">
              <Image src="/img/i-atencion.png" alt="" width={360} height={286} />
              <h3>Atención directa</h3>
              <p>Hablas con el equipo que hace tu mudanza, no con una centralita.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="zonas">
        <div className="r-wrap">
          <div className="r-cab">
            <div>
              <span className="mono">Dónde trabajamos</span>
              <h2 className="r-d">Desde Torrent a toda la Comunitat</h2>
            </div>
            <p className="r-lead">
              Nuestra única base está en Torrent. Desde allí salimos cada día hacia Valencia, su área metropolitana,
              Alicante, Castellón y el resto de España.
            </p>
          </div>
          <div className="r-lista">
            <div className="r-z r-base">
              <span className="mono">Base</span>
              <h3>Torrent</h3>
            </div>
            {zonas.map((z) => (
              <Link key={z.t} className="r-z" href={z.href}>
                <span className="mono">{z.m}</span>
                <h3>{z.t} →</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="r-guia" id="guia">
        <div className="r-wrap">
          <div className="r-cab">
            <div>
              <span className="mono">Guía de mudanzas en Valencia</span>
              <h2 className="r-d">Sobre mudanzas Valencia</h2>
            </div>
          </div>
          <Article src={readContent("home")} />
        </div>
      </section>

      <section className="r-cta" id="contacto">
        <div className="r-cta-grid">
          <div className="r-txt">
            <span className="mono" style={{ color: "var(--hoja)" }}>
              Hablemos de tu mudanza
            </span>
            <h2 className="r-d">
              Cada mudanza es un <em>nuevo comienzo.</em>
            </h2>
            <div className="r-numero">
              <a href={tel}>{site.phonePretty}</a>
              <CopyPhone phone={site.phone} />
            </div>
            <p className="r-horario">
              {site.hours}. Fuera de horario, déjanos un WhatsApp y te respondemos al empezar el día.
            </p>
            <div className="r-acts">
              <Link className="r-btn r-lima" href="/contacto/">
                Pedir presupuesto
              </Link>
              <a className="r-btn r-borde" href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="r-foto">
            <Image
              src="/img/familia.webp"
              alt="Familia con su bebé junto a cajas de mudanza Russafa"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
