import type { Metadata } from "next";
import { Eyebrow, Button } from "@/components/ui";
import { site, tel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Mudanzas Valencia Info. Te asesoramos sobre tu mudanza en Valencia, Alicante y Castellón. Gratis y sin compromiso.",
  alternates: { canonical: "/contacto/" },
};

export default function Page() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 pt-16 md:pt-20 pb-24">
      <div className="max-w-2xl">
        <div className="mb-5"><Eyebrow>Estamos para ayudarte</Eyebrow></div>
        <h1 className="font-display font-black text-4xl md:text-5xl mb-6">Contacto</h1>
        <p className="text-ink-soft text-lg mb-8">
          ¿Tienes dudas sobre tu mudanza o quieres un presupuesto a medida? Llámanos y te asesoramos sin compromiso.
          Atendemos {site.hours.toLowerCase()}.
        </p>
        <div className="bg-white border border-line rounded-[14px] p-8 mb-6">
          <span className="mono text-ink-soft block mb-2">Teléfono</span>
          <a href={tel} className="font-display font-black text-3xl text-ink hover:text-accent transition-colors">
            {site.phonePretty}
          </a>
        </div>
        <Button href={tel} variant="primary">Llamar ahora →</Button>
      </div>
    </section>
  );
}
