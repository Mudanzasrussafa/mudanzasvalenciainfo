import Link from "next/link";
import Image from "next/image";
import { site, tel } from "@/lib/site";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Image
      src="/img/logo-blanco.png"
      alt="Russafa"
      width={900}
      height={198}
      style={{ height: 22, width: "auto", filter: dark ? undefined : "brightness(0.15)" }}
    />
  );
}

type BtnProps = { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "light" };
export function Button({ href, children, variant = "primary" }: BtnProps) {
  const base =
    "inline-flex items-center gap-2 font-display font-extrabold uppercase tracking-[0.02em] text-[0.95rem] px-6 py-3 rounded-full transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-accent text-crema hover:bg-accent-press",
    ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
    light: "bg-lima text-accent hover:bg-paper",
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
    <span className="mono inline-flex items-center gap-2 text-ink-soft">
      <span className="w-[9px] h-[9px] rounded-[3px] bg-lima border border-accent" />
      {children}
    </span>
  );
}

export function AiBridge() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-accent text-crema p-8 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="relative max-w-xl">
        <span className="mono inline-block text-hoja mb-3">mudanzasvalencia.ai</span>
        <h3 className="font-display font-extrabold text-2xl mb-1.5">¿Prefieres escribir que llamar?</h3>
        <p className="text-[#c2d0c4] text-[0.98rem]">
          Aitana, la asistente de inteligencia artificial de Mudanzas Russafa, resuelve tus dudas a cualquier hora en
          español, valenciano e inglés, y pasa tu solicitud al equipo para que te prepare el presupuesto.
        </p>
      </div>
      <div className="relative shrink-0">
        <Button href="https://mudanzasvalencia.ai" variant="light">
          Hablar con Aitana
        </Button>
      </div>
    </div>
  );
}

export function PresupuestoCTA() {
  return (
    <section id="presupuesto" className="bg-accent text-crema py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl mb-4" style={{ fontStretch: "78%" }}>
          Pide tu presupuesto
        </h2>
        <p className="text-[#c2d0c4] text-lg mb-7 max-w-md mx-auto">
          Visita gratuita en mudanzas completas y presupuesto detallado por escrito. Te atendemos{" "}
          {site.hours.toLowerCase()}.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button href={tel} variant="light">
            Llamar al {site.phonePretty}
          </Button>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-display font-extrabold uppercase tracking-[0.02em] text-[0.95rem] px-6 py-3 rounded-full border-2 border-crema text-crema hover:bg-crema hover:text-accent transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
