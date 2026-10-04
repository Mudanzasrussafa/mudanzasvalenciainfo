import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Servicios",
    links: [
      ["Particulares", "/mudanzas-particulares-valencia/"],
      ["Económicas", "/mudanzas-economicas-valencia/"],
      ["Oficinas", "/mudanzas-oficinas-valencia/"],
      ["Locales", "/mudanzas-locales-valencia/"],
      ["Elevador montamuebles", "/elevador-mudanzas-valencia/"],
      ["Guardamuebles", "/guardamuebles-valencia/"],
    ],
  },
  {
    h: "Zonas",
    links: [
      ["Empresas de mudanzas en Valencia", "/empresas-de-mudanzas-valencia/"],
      ["Alicante", "/mudanzas-alicante/"],
      ["Castellón", "/mudanzas-castellon/"],
      ["Nacionales", "/mudanzas-nacionales-valencia/"],
      ["Internacionales", "/mudanzas-internacionales-valencia/"],
    ],
  },
  {
    h: "Contacto",
    links: [
      ["Precios de mudanzas", "/precios-mudanzas-valencia/"],
      ["Pedir presupuesto", "/contacto/"],
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="r-foot">
        <div className="r-wrap">
          <div className="r-rej">
            <div>
              <Image className="r-logo" src="/img/logo-blanco.png" alt="Russafa" width={900} height={198} />
              <p>
                mudanzasvalenciainfo.com es la guía de mudanzas de {site.company}. {site.legalName} · {site.base}.
              </p>
            </div>
            {cols.map((c) => (
              <div key={c.h}>
                <h4>{c.h}</h4>
                <ul>
                  {c.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                  {c.h === "Contacto" && (
                    <>
                      <li>{site.phonePretty}</li>
                      <li>{site.leadEmail}</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="r-legal">
            <span>
              © {new Date().getFullYear()} {site.legalName}
            </span>
            <span>
              <Link href="/politica-privacidad/">Privacidad</Link> · <Link href="/politica-de-cookies/">Cookies</Link>
            </span>
          </div>
        </div>
      </footer>
      <div className="r-flot">
        <Link className="r-btn r-lima" href="/contacto/">
          Presupuesto
        </Link>
        <a className="r-btn r-pino" href={site.whatsapp} target="_blank" rel="noopener">
          WhatsApp
        </a>
      </div>
    </>
  );
}
