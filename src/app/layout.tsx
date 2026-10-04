import type { Metadata } from "next";
import { Archivo, Figtree, DM_Mono } from "next/font/google";
import "./globals.css";
import "./russafa.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dmmono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mudanzas en Valencia: guía, precios y presupuesto | Mudanzas Russafa",
    template: "%s | Mudanzas Valencia Info",
  },
  description:
    "Guía de mudanzas en Valencia de Mudanzas Russafa: precios, elevador montamuebles, guardamuebles y mudanzas a Alicante y Castellón. Visita gratuita y presupuesto por escrito.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/img/hero.webp", width: 1700, height: 1281 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${figtree.variable} ${dmMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
