import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Mudanzas Valencia Info.",
  alternates: { canonical: "/politica-de-cookies/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="max-w-[760px] mx-auto px-6 pt-16 md:pt-20 pb-24">
      <h1 className="font-display font-black text-4xl mb-6">Política de cookies</h1>
      <p className="text-ink-soft mb-4">
        Esta página describe el uso de cookies en Mudanzas Valencia Info. (Texto pendiente de portar desde la versión
        anterior del sitio.)
      </p>
      <p className="text-ink-soft">
        Puedes configurar o rechazar las cookies desde los ajustes de tu navegador en cualquier momento.
      </p>
    </section>
  );
}
