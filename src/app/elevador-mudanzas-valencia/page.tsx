import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, AiBridge, PresupuestoCTA, Button } from "@/components/ui";
import { site, tel } from "@/lib/site";

const slug = "elevador-mudanzas-valencia";

export const metadata: Metadata = {
  title: "Elevador de mudanzas en Valencia: precios y cuándo se necesita",
  description:
    "Guía del elevador o montamuebles para mudanzas en Valencia: qué es, cuándo lo necesitas, qué influye en el precio y cómo pedir presupuesto. Gratis y sin compromiso.",
  alternates: { canonical: `/${slug}/` },
  openGraph: {
    title: "Elevador de mudanzas en Valencia: precios y cuándo se necesita",
    description:
      "Qué es el elevador montamuebles, cuándo lo necesitas y qué influye en el precio de alquiler en Valencia.",
    url: `${site.url}/${slug}/`,
  },
};

const faqs = [
  {
    q: "¿Cuánto cuesta un elevador de mudanzas en Valencia?",
    a: "El precio depende sobre todo de la altura (número de plantas), del tiempo de uso y de la dificultad de acceso a la fachada. Como orientación, suele facturarse por horas o por servicio dentro de la mudanza. Lo correcto es pedir un presupuesto cerrado tras valorar tu caso concreto.",
  },
  {
    q: "¿Cuándo necesito un elevador montamuebles?",
    a: "Cuando hay muebles voluminosos que no caben por la escalera o el ascensor, cuando la escalera es muy estrecha, o cuando subir a brazo supone un riesgo o un sobrecoste de mano de obra. En esos casos, maniobrar por la fachada con elevador es más rápido y seguro.",
  },
  {
    q: "¿Hace falta permiso para usar el elevador en la calle?",
    a: "Si el elevador ocupa vía pública en Valencia capital, normalmente la empresa de mudanzas tramita el permiso de ocupación con la antelación necesaria. En otros municipios el trámite puede corresponder al cliente. Conviene preverlo con varias semanas de margen.",
  },
  {
    q: "¿Hasta qué altura llega un elevador de mudanzas?",
    a: "Los equipos habituales alcanzan sin problema las plantas de un edificio residencial estándar. Para alturas superiores existen elevadores de mayor alcance; al pedir presupuesto indica la planta para asignar el equipo adecuado.",
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
            <Eyebrow>Servicios adicionales</Eyebrow>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-6">
            Elevador de mudanzas en Valencia
          </h1>
          <p className="text-ink-soft text-lg mb-4 max-w-2xl">
            El elevador o montamuebles es la herramienta que permite subir y bajar muebles por la fachada cuando no
            caben por la escalera o el ascensor. Aquí te explicamos cuándo lo necesitas, qué influye en el precio y
            cómo pedir presupuesto sin compromiso.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-6">
            <Button href={tel} variant="primary">Pedir presupuesto · {site.phonePretty}</Button>
            <Button href="#precio" variant="ghost">Ver qué influye en el precio</Button>
          </div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Muebles voluminosos", "Sofás, armarios o electrodomésticos que no pasan por el hueco de escalera."],
            ["Escaleras estrechas", "Edificios antiguos o rellanos pequeños donde girar el mueble es imposible."],
            ["Sin ascensor o ascensor pequeño", "Cuando subir a brazo dispara la mano de obra y el riesgo de daños."],
          ].map(([h, p]) => (
            <div key={h} className="bg-white border border-line rounded-[14px] p-6">
              <h3 className="font-display font-bold text-lg mb-2">{h}</h3>
              <p className="text-ink-soft text-[0.92rem]">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="precio" className="max-w-[1180px] mx-auto px-6 pb-12">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-5">Qué influye en el precio del elevador</h2>
        <div className="max-w-2xl space-y-3 text-ink-soft">
          <p><b className="text-ink">Altura:</b> a más plantas, mayor equipo y tiempo de montaje.</p>
          <p><b className="text-ink">Tiempo de uso:</b> el número de subidas y bajadas y la duración del servicio.</p>
          <p><b className="text-ink">Acceso a la fachada:</b> aceras estrechas, árboles, cableado o tráfico complican la maniobra.</p>
          <p><b className="text-ink">Permiso de ocupación:</b> en Valencia capital suele tramitarlo la empresa; en otros municipios puede correr por tu cuenta.</p>
          <p><b className="text-ink">Fecha:</b> fines de mes y fines de semana tienen más demanda.</p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <AiBridge />
      </section>

      {/* FAQ */}
      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <h2 className="font-display font-black text-2xl md:text-3xl mb-6">Preguntas frecuentes sobre el elevador</h2>
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
            ["Precios de mudanzas", "/precios-mudanzas-valencia/"],
            ["Guardamuebles", "/guardamuebles-valencia/"],
            ["Mudanzas particulares", "/mudanzas-particulares-valencia/"],
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
