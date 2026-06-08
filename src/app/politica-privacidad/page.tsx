import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Mudanzas Valencia Info.",
  alternates: { canonical: "/politica-privacidad/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="max-w-[760px] mx-auto px-6 pt-16 md:pt-20 pb-24">
      <h1 className="font-display font-black text-4xl mb-6">Política de privacidad</h1>
      <p className="text-ink-soft mb-4">
        En esta página se detalla cómo Mudanzas Valencia Info trata los datos personales que nos facilitas al solicitar
        información o presupuesto. (Texto pendiente de portar desde la versión anterior del sitio.)
      </p>
      <p className="text-ink-soft">
        Para cualquier consulta sobre el tratamiento de tus datos, puedes contactar con nosotros a través de la página
        de contacto.
      </p>
    </section>
  );
}
