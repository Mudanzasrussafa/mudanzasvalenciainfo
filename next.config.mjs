/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // La web antigua (WordPress) usaba todas sus URLs con barra final.
  // Mantenerla evita redirecciones en las páginas que ya posicionan.
  trailingSlash: true,
  async redirects() {
    return [
      // Sitemaps de WordPress (Yoast) que Google tiene guardados
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      // Feeds y rutas internas de WordPress
      { source: "/feed/", destination: "/", permanent: true },
      { source: "/comments/feed/", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      // Variantes de las páginas legales
      { source: "/politica-de-privacidad/", destination: "/politica-privacidad/", permanent: true },
      { source: "/aviso-legal/", destination: "/politica-privacidad/", permanent: true },
      { source: "/cookies/", destination: "/politica-de-cookies/", permanent: true },
    ];
  },
};

export default nextConfig;
