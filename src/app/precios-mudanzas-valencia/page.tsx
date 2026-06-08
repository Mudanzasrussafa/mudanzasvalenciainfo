import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, AiBridge, PresupuestoCTA, Button } from "@/components/ui";
import { site, tel } from "@/lib/site";

const slug = "precios-mudanzas-valencia";

export const metadata: Metadata = {
  title: "Precios de mudanzas en Valencia: qué influye y cómo calcularlos",
  description:
    "Guía de precios de mudanzas en Valencia: qué factores determinan el coste (volumen, distancia, acceso, embalaje) y cómo conseguir un presupuesto cerrado y sin sorpresas.",
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title: "Precios de mudanzas en Valencia: qué influye y cómo calcularlos",
    description:
      "Qué factores determinan el precio de una mudanza en Valencia y cómo conseguir un presupuesto cerrado sin sorpresas.",
    url: `${site.url}/${slug}/`,
  },
};

const factores = [
  ["Volumen", "Lo que más pesa en el precio. Se mide en metros cúbicos: cuántos muebles y cajas hay que mover."],
  ["Distancia", "Entre origen y destino. En traslados locales influye poco; en nacionales e internacionales, mucho."],
  ["Acceso", "Planta, ascensor, anchura de calle y posibilidad de aparcar el camión cerca del portal."],
  ["Elevador", "Si se necesita montamuebles por fachada, se suma al presupuesto."],
  ["Embalaje", "Si lo hace la empresa o lo haces tú, y si hay objetos delicados (cuadros, piano, electrónica)."],
  ["Fecha", "Fin de mes y fin de semana tienen más demanda y suelen ser más caros."],
];

const faqs = [
  {
    q: "¿Cuánto cuesta una mudanza en Valencia?",
    a: "No hay un precio único: depende del volumen, la distancia, el acceso de las dos viviendas y los servicios extra (embalaje, elevador, guardamuebles). Una mudanza local pequeña no tiene nada que ver con un traslado de un chalet entre provincias. Por eso lo recomendable es pedir un presupuesto cerrado tras valorar tu caso.",
  },
  {
    q: "¿Cómo consigo un presupuesto sin sorpresas?",
    a: "Pide siempre un presupuesto cerrado y por escrito, con el desglose de lo que incluye (mano de obra, vehículo, embalaje, permisos, seguro). Desconfía de los precios orientativos por teléfono que luego cambian el día de la mudanza.",
  },
  {
    q: "¿Cómo puedo abaratar mi mudanza?",
    a: "Evitando el fin de mes, embalando tú mismo lo más sencillo, reduciendo volumen antes de mudarte y comparando varios presupuestos con los mismos datos. Puedes ver más en nuestra guía de mudanzas económicas.",
  },
  {
    q: "¿El presupuesto incluye seguro?",
    a: "Debería. Comprueba que el presupuesto incluya un seguro de transporte y responsabilidad civil, y pregunta por la cobertura máxima ante daños o pérdidas.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="max-w-[1180px] mx-auto px-6 pt-16 md:pt-20 pb-10">
        <div className="max-w-3xl">
          <div className="mb-5">
            <Eyebrow>Antes de contratar</Eyebrow>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-6">Precios de mudanzas en Valencia</h1>
          <p className="text-ink-soft text-lg mb-4 max-w-2xl">
            ¿Cuánto cuesta una mudanza en Valencia? La respuesta honesta es: depende. Aquí te explicamos exactamente qué
            factores determinan el precio para que sepas qué es razonable y puedas comparar presupuestos con criterio.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-6">
            <Button href={tel} variant="primary">Pedir presupuesto · {site.phonePretty}</Button>
            <Button href="#factores" variant="ghost">Ver qué influye en el precio</Button>
          </div>
        </div>
      </section>

      <section id="factores" className="max-w-[1180px] mx-auto px-6 pb-12">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-6">Qué determina el precio de tu mudanza</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factores.map(([h, p]) => (
            <div key={h} className="bg-white border border-line rounded-[14px] p-6">
              <h3 className="font-display font-bold text-lg mb-2">{h}</h3>
              <p className="text-ink-soft text-[0.92rem]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <div className="bg-paper-2 rounded-[14px] p-8 md:p-10 max-w-3xl">
          <h2 className="font-display font-bold text-xl mb-3">El precio orientativo no sirve para decidir</h2>
          <p className="text-ink-soft">
            Dos mudanzas con el mismo número de habitaciones pueden costar muy distinto según el acceso, la fecha o el
            embalaje. Lo único fiable es un presupuesto cerrado tras valorar tu caso. Si quieres una primera estimación
            en segundos, prueba con Aitana; y cuando quieras un precio en firme, te lo damos sin compromiso.
          </p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <AiBridge />
      </section>

      {/* FAQ */}
      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-6">Preguntas frecuentes sobre precios</h2>
        <div className="space-y-3 max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white border border-line rounded-[14px] p-5">
              <summary className="font-display font-bold cursor-pointer">{f.q}</summary>
              <p className="text-ink-soft mt-3 text-[0.95rem]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <span className="mono text-ink-soft block mb-5">Sigue informándote</span>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Mudanzas económicas", "/mudanzas-economicas-valencia/"],
            ["Empresas de mudanzas", "/empresas-de-mudanzas-valencia/"],
            ["Elevador de mudanzas", "/elevador-mudanzas-valencia/"],
          ].map(([h, href]) => (
            <Link key={href} href={href} className="bg-white border border-line rounded-[14px] p-6 hover:border-accent transition-colors">
              <h3 className="font-display font-bold text-lg mb-1">{h}</h3>
              <span className="text-accent font-semibold text-[0.9rem]">Ver guía →</span>
            </Link>
          ))}
        </div>
      </section>

      <PresupuestoCTA />
    </>
  );
}
