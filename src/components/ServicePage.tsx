import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PresupuestoCTA } from "@/components/ui";
import { Article, Inline, readContent } from "@/components/Article";
import { pages } from "@/lib/pages";
import { site, tel } from "@/lib/site";

export function buildMetadata(slug: string): Metadata {
  const p = pages[slug];
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title: p.title, description: p.description, url: `${site.url}/${slug}/`, locale: "es_ES", type: "article" },
  };
}

export default function ServicePage({ slug }: { slug: string }) {
  const data = pages[slug];
  const src = readContent(slug);
  const [lead, ...rest] = src.split("\n");
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: data.h1, item: `${site.url}/${slug}/` },
    ],
  };
  return (
    <div className="home r-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="r-phero">
        <div className="r-wrap">
          <div className="r-phero-txt">
            <nav className="r-miga mono" aria-label="Ruta">
              <Link href="/">Inicio</Link> <span>/</span> {data.eyebrow}
            </nav>
            <h1 className="r-d">{data.h1}</h1>
            <p className="r-lead">
              <Inline text={lead} />
            </p>
            <div className="r-acts">
              <Link className="r-btn r-lima" href="/contacto/">
                Pedir presupuesto
              </Link>
              <a className="r-btn r-borde" href={tel}>
                Llamar al {site.phonePretty}
              </a>
            </div>
          </div>
          {data.photo && (
            <div className="r-phero-foto">
              <Image src={data.photo.src} alt={data.photo.alt} fill sizes="(max-width: 860px) 100vw, 480px" priority />
            </div>
          )}
        </div>
      </section>

      <section className="r-cuerpo">
        <div className="r-wrap r-cuerpo-grid">
          <Article src={rest.join("\n")} />
          <aside className="r-aside">
            <div className="r-aside-box">
              <span className="mono">Mudanzas Russafa</span>
              <h3>Pide tu presupuesto a medida</h3>
              <p>Gratis y sin compromiso. Visita a domicilio en mudanzas completas y presupuesto detallado por escrito.</p>
              <a className="r-aside-tel" href={tel}>
                {site.phonePretty}
              </a>
              <p className="r-aside-h">{site.hours}</p>
              <Link className="r-btn r-lima" href="/contacto/">
                Pedir presupuesto
              </Link>
              <a className="r-btn r-borde" href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      <PresupuestoCTA />
    </div>
  );
}
