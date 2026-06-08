import Link from "next/link";
import { Logo, Button } from "@/components/ui";
import { site, tel } from "@/lib/site";

const nav = [
  { label: "Particulares", href: "/mudanzas-particulares-valencia/" },
  { label: "Oficinas", href: "/mudanzas-oficinas-valencia/" },
  { label: "Locales", href: "/mudanzas-locales-valencia/" },
  { label: "Nacionales", href: "/mudanzas-nacionales-valencia/" },
  { label: "Internacionales", href: "/mudanzas-internacionales-valencia/" },
  { label: "Empresas", href: "/empresas-de-mudanzas-valencia/" },
  { label: "Económicas", href: "/mudanzas-economicas-valencia/" },
  { label: "Guardamuebles", href: "/guardamuebles-valencia/" },
  { label: "Elevador", href: "/elevador-mudanzas-valencia/" },
  { label: "Precios", href: "/precios-mudanzas-valencia/" },
  { label: "Alicante", href: "/mudanzas-alicante/" },
  { label: "Castellón", href: "/mudanzas-castellon/" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <Link href="/" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden xl:flex gap-5 items-center">
          {nav.slice(0, 6).map((n) => (
            <Link key={n.href} href={n.href} className="text-[0.9rem] font-medium text-ink-soft hover:text-ink transition-colors">
              {n.label}
            </Link>
          ))}
          <Link href="/precios-mudanzas-valencia/" className="text-[0.9rem] font-semibold text-accent hover:text-accent-press transition-colors">
            Precios
          </Link>
        </nav>

        <div className="hidden sm:flex gap-3 items-center">
          <Button href={tel} variant="ghost">
            {site.phonePretty}
          </Button>
          <Button href="#presupuesto" variant="primary">
            Presupuesto
          </Button>
        </div>

        {/* Menú móvil sin JavaScript */}
        <details className="sm:hidden relative">
          <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Abrir menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#15171C" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 w-64 bg-white border border-line rounded-[14px] shadow-xl p-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-[0.95rem] py-1.5 text-ink-soft hover:text-ink">
                {n.label}
              </Link>
            ))}
            <a href={tel} className="mt-2 text-center bg-accent text-white font-semibold rounded-full py-2.5">
              Llamar {site.phonePretty}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
