import Link from "next/link";
import { Logo } from "@/components/ui";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Tipos de mudanza",
    links: [
      ["Particulares", "/mudanzas-particulares-valencia/"],
      ["Oficinas", "/mudanzas-oficinas-valencia/"],
      ["Locales", "/mudanzas-locales-valencia/"],
      ["Nacionales", "/mudanzas-nacionales-valencia/"],
      ["Internacionales", "/mudanzas-internacionales-valencia/"],
    ],
  },
  {
    h: "Servicios y zonas",
    links: [
      ["Guardamuebles", "/guardamuebles-valencia/"],
      ["Elevador", "/elevador-mudanzas-valencia/"],
      ["Empresas de mudanzas", "/empresas-de-mudanzas-valencia/"],
      ["Mudanzas Alicante", "/mudanzas-alicante/"],
      ["Mudanzas Castellón", "/mudanzas-castellon/"],
    ],
  },
  {
    h: "Recursos",
    links: [
      ["Precios mudanzas", "/precios-mudanzas-valencia/"],
      ["Mudanzas económicas", "/mudanzas-economicas-valencia/"],
      ["Contacto", "/contacto/"],
      ["Política de privacidad", "/politica-privacidad/"],
      ["Política de cookies", "/politica-de-cookies/"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-[#b8bbc4] pt-16 pb-9 text-[0.88rem]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 mb-11">
          <div>
            <div className="mb-3">
              <Logo dark />
            </div>
            <p className="max-w-[280px]">
              El asesor independiente de mudanzas en la Comunidad Valenciana. Comparamos, informamos y te ayudamos a
              decidir.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="mono text-[#7a7e8a] mb-4">{c.h}</h4>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3.5 text-[0.78rem] text-[#7a7e8a]">
          <span>© {new Date().getFullYear()} {site.name} · Asesor independiente</span>
          <span>
            Tel. {site.phonePretty} · {site.provinces.join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}
