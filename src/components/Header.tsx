import Link from "next/link";
import Image from "next/image";
import { site, tel } from "@/lib/site";

const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Precios", href: "/precios-mudanzas-valencia/" },
  { label: "Elevador", href: "/elevador-mudanzas-valencia/" },
  { label: "Guardamuebles", href: "/guardamuebles-valencia/" },
  { label: "Zonas", href: "/#zonas" },
];

const menu = [
  { label: "Particulares", href: "/mudanzas-particulares-valencia/" },
  { label: "Económicas", href: "/mudanzas-economicas-valencia/" },
  { label: "Oficinas", href: "/mudanzas-oficinas-valencia/" },
  { label: "Locales", href: "/mudanzas-locales-valencia/" },
  { label: "Nacionales", href: "/mudanzas-nacionales-valencia/" },
  { label: "Internacionales", href: "/mudanzas-internacionales-valencia/" },
  { label: "Elevador montamuebles", href: "/elevador-mudanzas-valencia/" },
  { label: "Guardamuebles", href: "/guardamuebles-valencia/" },
  { label: "Precios", href: "/precios-mudanzas-valencia/" },
  { label: "Alicante", href: "/mudanzas-alicante/" },
  { label: "Castellón", href: "/mudanzas-castellon/" },
  { label: "Contacto", href: "/contacto/" },
];

export default function Header() {
  return (
    <header className="r-top">
      <div className="r-wrap">
        <Link className="r-marca" href="/" aria-label={`${site.company}, inicio`}>
          <Image src="/img/logo-blanco.png" alt="Russafa" width={900} height={198} priority />
          <span>
            Guía de mudanzas
            <br />
            en Valencia
          </span>
        </Link>
        <nav className="r-nav" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a className="r-tel" href={tel}>
          {site.phonePretty}
        </a>
        <details className="r-menu">
          <summary aria-label="Abrir menú">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="r-panel">
            {menu.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
