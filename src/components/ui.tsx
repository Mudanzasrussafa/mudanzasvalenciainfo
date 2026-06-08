import Link from "next/link";
import { site, tel } from "@/lib/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "#fff" : "#15171C";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="9" cy="16" r="3.6" stroke={stroke} strokeWidth="2.3" />
        <circle cx="23" cy="16" r="3.6" fill="#1F3BE5" />
        <path d="M12.6 16h6.8" stroke={stroke} strokeWidth="2.3" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display font-bold text-[1.02rem] tracking-tight"
          style={{ color: dark ? "#fff" : "var(--color-ink)" }}
        >
          mudanzas valencia
        </span>
        <span className="mono block mt-[-3px]" style={{ color: dark ? "#9aa0ad" : "var(--color-ink-soft)", fontSize: "0.55rem" }}>
          info · asesor independiente
        </span>
      </span>
    </span>
  );
}

type BtnProps = { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "light" };
export function Button({ href, children, variant = "primary" }: BtnProps) {
  const base =
    "inline-flex items-center gap-2 font-body font-semibold text-[0.92rem] px-5 py-2.5 rounded-full transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-accent text-white hover:bg-accent-press",
    ghost: "border border-ink text-ink hover:bg-ink hover:text-paper",
    light: "bg-paper text-ink hover:bg-white",
  };
  const external = href.startsWith("tel:") || href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono inline-flex items-center gap-2 text-accent">
      <span className="w-[7px] h-[7px] rounded-full bg-accent" />
      {children}
    </span>
  );
}

export function AiBridge() {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-ink text-paper p-8 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div
        className="pointer-events-none absolute -right-16 -top-16 w-60 h-60 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(31,59,229,.55), transparent 70%)" }}
      />
      <div className="relative max-w-xl">
        <span className="mono inline-block bg-white/10 px-2.5 py-1 rounded-full mb-3" style={{ fontSize: "0.55rem" }}>
          Nuevo · mudanzasvalencia.ai
        </span>
        <h3 className="font-display font-bold text-2xl mb-1.5">¿Quieres un número al instante?</h3>
        <p className="text-[#b8bbc4] text-[0.98rem]">
          Aitana, nuestra asistente de IA, calcula una estimación de tu mudanza en segundos y resuelve tus dudas en
          español, valenciano e inglés.
        </p>
      </div>
      <div className="relative shrink-0">
        <Button href="https://mudanzasvalencia.ai" variant="light">
          Hablar con Aitana →
        </Button>
      </div>
    </div>
  );
}

export function PresupuestoCTA() {
  return (
    <section id="presupuesto" className="text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-black text-4xl md:text-5xl mb-4">Pide tu presupuesto a medida</h2>
        <p className="text-ink-soft text-lg mb-7 max-w-md mx-auto">
          Gratis y sin compromiso. Te respondemos {site.hours.toLowerCase()}.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button href={tel} variant="primary">
            Llamar al {site.phonePretty}
          </Button>
          <Button href="/contacto/" variant="ghost">
            Escríbenos →
          </Button>
        </div>
      </div>
    </section>
  );
}

export function RecommendedBlock() {
  return (
    <div className="rounded-[14px] bg-ink text-paper p-8 md:p-12 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div>
        <span className="mono block text-[#9ca3ff] mb-4">Nuestra recomendación</span>
        <h2 className="font-display font-black text-3xl text-white mb-3.5">Mudanzas Russafa</h2>
        <p className="text-[#b8bbc4] mb-5">
          Entre los profesionales con los que trabajamos, esta es la empresa que recomendamos en Valencia por
          trayectoria, garantías y trato. Pide presupuesto a través nuestro, sin compromiso.
        </p>
        <Button href={tel} variant="light">
          Pedir presupuesto →
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          ["+15", "años de experiencia"],
          ["4,9", "valoración media"],
          ["+3000", "mudanzas realizadas"],
          ["FEDEM", "FVET · AEMCV"],
        ].map(([big, small]) => (
          <div key={big} className="rounded-lg border border-white/15 p-4 text-[#d7d9e0] text-[0.8rem]">
            <b className="block font-display font-bold text-white text-[1.35rem] mb-0.5">{big}</b>
            {small}
          </div>
        ))}
      </div>
    </div>
  );
}
