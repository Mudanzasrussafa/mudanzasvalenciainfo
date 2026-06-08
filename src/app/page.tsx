import Link from "next/link";
import { Eyebrow, Button, AiBridge, RecommendedBlock, PresupuestoCTA } from "@/components/ui";
import { site, tel } from "@/lib/site";

const tipos = [
  ["particulares", "Mudanzas particulares", "Pisos, chalets, apartamentos y estudios. El traslado del hogar, bien hecho.", "/mudanzas-particulares-valencia/"],
  ["oficinas", "Mudanzas de oficinas", "Despachos, locales, tiendas y naves. Mínima parada de actividad.", "/mudanzas-oficinas-valencia/"],
  ["locales", "Mudanzas locales", "Dentro de la misma ciudad o comarca. El caso más habitual.", "/mudanzas-locales-valencia/"],
  ["nacionales", "Mudanzas nacionales", "Traslados entre comunidades autónomas por toda España.", "/mudanzas-nacionales-valencia/"],
  ["internacionales", "Mudanzas internacionales", "Europa por carretera, ultramar por barco. Cada opción explicada.", "/mudanzas-internacionales-valencia/"],
];

const servicios = [
  ["guardamuebles", "Guardamuebles", "Almacenar tu mobiliario temporalmente: trasteros, self-storage y opciones seguras.", "/guardamuebles-valencia/"],
  ["elevador", "Elevador montamuebles", "Para muebles voluminosos o escaleras estrechas: maniobra por fachada.", "/elevador-mudanzas-valencia/"],
  ["empresas", "Empresas de mudanzas", "Cómo elegir bien y qué mirar antes de contratar a una empresa.", "/empresas-de-mudanzas-valencia/"],
];

const valor = [
  ["Comparar", "Comparativas honestas", "Criterios reales para entender qué diferencia a una empresa de otra."],
  ["Precios", "Precios sin sorpresas", "Te explicamos cómo se calcula una mudanza para que sepas qué es razonable."],
  ["Trámites", "Permisos y logística", "Reservas de espacio, antelación, permisos de estacionamiento... todo claro."],
  ["Sin coste", "Gratis y sin compromiso", "Pides presupuesto cuando quieras. Decidir bien no debería costarte nada."],
];

const guias = [
  ["Precios", "Precios de mudanzas en Valencia", "Qué influye en el coste y qué rango es razonable según tu caso.", "/precios-mudanzas-valencia/"],
  ["Ahorro", "Mudanzas económicas", "Cómo abaratar tu mudanza sin renunciar a las garantías.", "/mudanzas-economicas-valencia/"],
  ["Organización", "Cómo organizar tu mudanza", "Con cuánta antelación reservar y cómo evitar el estrés del cambio.", "/empresas-de-mudanzas-valencia/"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description:
    "Asesor independiente de mudanzas en Valencia, Alicante y Castellón. Compara, infórmate y consigue el mejor presupuesto.",
  inLanguage: "es-ES",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(circle at 70% 20%, #000, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 20%, #000, transparent 72%)",
          }}
        />
        <div className="relative max-w-[1180px] mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="reveal d1 mb-5">
              <Eyebrow>Asesor independiente · Valencia · Alicante · Castellón</Eyebrow>
            </div>
            <h1 className="reveal d2 font-display font-black text-[clamp(2.6rem,6.4vw,4.6rem)] mb-5">
              Compara, infórmate y <span className="text-accent">acierta</span> con tu mudanza en Valencia.
            </h1>
            <p className="reveal d3 text-ink-soft text-[clamp(1.05rem,2vw,1.25rem)] max-w-xl mb-8">
              No somos una empresa de mudanzas: somos tu asesor. Te ayudamos a entender precios, comparar servicios y
              elegir bien, sin compromiso y sin coste.
            </p>
            <div className="reveal d4 flex gap-3.5 flex-wrap items-center">
              <Button href="#presupuesto" variant="primary">
                Pide tu presupuesto gratis →
              </Button>
              <Button href="#ai" variant="ghost">
                Calcula al instante con IA
              </Button>
            </div>
            <div className="reveal d5 mt-9 flex gap-7 flex-wrap text-ink-soft text-[0.85rem]">
              <span><b className="font-display font-bold text-ink">+6 años</b> asesorando mudanzas</span>
              <span><b className="font-display font-bold text-ink">3 provincias</b> cubiertas</span>
              <span><b className="font-display font-bold text-ink">0 €</b> coste para ti</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI BRIDGE */}
      <div id="ai" className="max-w-[1180px] mx-auto px-6">
        <AiBridge />
      </div>

      {/* TIPOS */}
      <section className="max-w-[1180px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-9">
          <h2 className="font-display font-black text-[clamp(1.8rem,3.6vw,2.6rem)] max-w-xl">¿Qué tipo de mudanza necesitas?</h2>
          <span className="mono text-ink-soft">01 · Elige por situación</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tipos.map(([num, h, p, href]) => (
            <Link key={href} href={href} className="group bg-white border border-line rounded-[14px] p-7 transition-all hover:-translate-y-1 hover:border-accent">
              <div className="mono text-accent mb-4">/ {num}</div>
              <h3 className="font-display font-bold text-lg mb-2">{h}</h3>
              <p className="text-ink-soft text-[0.9rem] mb-4">{p}</p>
              <span className="font-display font-bold text-accent text-[0.9rem]">Ver guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-[1180px] mx-auto px-6 pb-20">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-9">
          <h2 className="font-display font-black text-[clamp(1.8rem,3.6vw,2.6rem)] max-w-xl">Servicios y herramientas adicionales</h2>
          <span className="mono text-ink-soft">02 · Lo que puede que necesites</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {servicios.map(([num, h, p, href]) => (
            <Link key={href} href={href} className="group bg-white border border-line rounded-[14px] p-7 transition-all hover:-translate-y-1 hover:border-accent">
              <div className="mono text-accent mb-4">/ {num}</div>
              <h3 className="font-display font-bold text-lg mb-2">{h}</h3>
              <p className="text-ink-soft text-[0.9rem] mb-4">{p}</p>
              <span className="font-display font-bold text-accent text-[0.9rem]">Ver guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* COMUNIDAD VALENCIANA */}
      <section className="max-w-[1180px] mx-auto px-6 pb-20">
        <div className="bg-paper-2 rounded-[14px] p-10">
          <div className="flex items-end justify-between gap-5 flex-wrap mb-2">
            <h2 className="font-display font-black text-[clamp(1.6rem,3vw,2.2rem)]">Mudanzas por la Comunidad Valenciana</h2>
            <span className="mono text-ink-soft">03 · Por provincia</span>
          </div>
          <div className="flex gap-3.5 flex-wrap mt-5">
            <span className="bg-white border border-line rounded-full px-5 py-3 font-semibold">Mudanzas <span className="text-accent">Valencia</span></span>
            <Link href="/mudanzas-alicante/" className="bg-white border border-line rounded-full px-5 py-3 font-semibold hover:border-ink transition-colors">Mudanzas <span className="text-accent">Alicante</span></Link>
            <Link href="/mudanzas-castellon/" className="bg-white border border-line rounded-full px-5 py-3 font-semibold hover:border-ink transition-colors">Mudanzas <span className="text-accent">Castellón</span></Link>
          </div>
        </div>
      </section>

      {/* VALOR */}
      <section className="max-w-[1180px] mx-auto px-6 pb-20">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-9">
          <h2 className="font-display font-black text-[clamp(1.8rem,3.6vw,2.6rem)] max-w-xl">Cómo te ayudamos a decidir</h2>
          <span className="mono text-ink-soft">04 · Tu asesor, no tu vendedor</span>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {valor.map(([k, h, p]) => (
            <div key={k} className="border-t-2 border-ink pt-4">
              <span className="mono text-accent block mb-2.5">{k}</span>
              <h3 className="font-display font-bold text-lg mb-2">{h}</h3>
              <p className="text-ink-soft text-[0.92rem]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMENDACIÓN */}
      <section className="max-w-[1180px] mx-auto px-6 pb-20">
        <RecommendedBlock />
      </section>

      {/* GUÍAS */}
      <section className="max-w-[1180px] mx-auto px-6 pb-20">
        <div className="flex items-end justify-between gap-5 flex-wrap mb-9">
          <h2 className="font-display font-black text-[clamp(1.8rem,3.6vw,2.6rem)] max-w-xl">Guías para planificar tu mudanza</h2>
          <span className="mono text-ink-soft">05 · Antes de contratar</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {guias.map(([k, h, p, href]) => (
            <Link key={h} href={href} className="group border border-line rounded-[14px] p-7 bg-white hover:bg-ink transition-colors">
              <span className="mono text-accent block mb-3.5 group-hover:text-[#9ca3ff]">{k}</span>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-white">{h}</h3>
              <p className="text-ink-soft text-[0.9rem] group-hover:text-[#b8bbc4]">{p}</p>
            </Link>
          ))}
        </div>
      </section>

      <PresupuestoCTA />
    </>
  );
}
