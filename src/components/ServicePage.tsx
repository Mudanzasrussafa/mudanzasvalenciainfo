import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, AiBridge, PresupuestoCTA } from "@/components/ui";
import { pages, type PageData } from "@/lib/pages";
import { site } from "@/lib/site";

export function buildMetadata(slug: string): Metadata {
  const p = pages[slug];
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title: p.title, description: p.description, url: `${site.url}/${slug}/` },
  };
}

export default function ServicePage({ data }: { data: PageData }) {
  const related = (data.related ?? []).map((s) => pages[s]).filter(Boolean);
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 pt-16 md:pt-20 pb-10">
        <div className="max-w-3xl">
          <div className="mb-5">
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-6">{data.h1}</h1>
          {data.intro.map((t, i) => (
            <p key={i} className="text-ink-soft text-lg mb-4 max-w-2xl">
              {t}
            </p>
          ))}
        </div>
      </section>

      {data.bullets && (
        <section className="max-w-[1180px] mx-auto px-6 pb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.bullets.map((b) => (
              <div key={b.h} className="bg-white border border-line rounded-[14px] p-6">
                <h3 className="font-display font-bold text-lg mb-2">{b.h}</h3>
                <p className="text-ink-soft text-[0.92rem]">{b.p}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-[1180px] mx-auto px-6 pb-12">
        <AiBridge />
      </section>

      {related.length > 0 && (
        <section className="max-w-[1180px] mx-auto px-6 pb-12">
          <span className="mono text-ink-soft block mb-5">Sigue informándote</span>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}/`}
                className="group bg-white border border-line rounded-[14px] p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-display font-bold text-lg mb-1">{r.navLabel}</h3>
                <span className="text-accent font-semibold text-[0.9rem]">Ver guía →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <PresupuestoCTA />
    </>
  );
}
