# Mudanzas Valencia Info — web Next.js

Rediseño en Next.js 15 + React 19 + TypeScript + Tailwind v4 del comparador/asesor
**mudanzasvalenciainfo.com**, respetando la arquitectura de URLs original para no perder SEO.

## Cómo desplegar (GitHub Desktop + Vercel)

1. Crea un repositorio nuevo en GitHub (p. ej. `Mudanzasrussafa/mudanzasvalenciainfo`).
2. Clónalo con GitHub Desktop a tu ordenador.
3. Copia **todo el contenido de esta carpeta** dentro de la carpeta del repositorio.
4. En GitHub Desktop: *Commit to main* → *Push origin*.
5. En Vercel: *Add New… → Project* → importa el repositorio. Framework: **Next.js** (lo detecta solo).
6. Deploy. Vercel te dará una URL `.vercel.app` para revisar.

> ⚠️ **IMPORTANTE — versión de Next.** Si en algún momento se regenera el `package.json`,
> verifica que ponga `"next": "^15.5.0"` y **nunca** una versión 15.1.x (tiene una
> vulnerabilidad conocida).

> ⚠️ **No tocar el dominio todavía.** Esta web se despliega en una URL de pruebas de Vercel.
> El dominio real `mudanzasvalenciainfo.com` (WordPress) sigue en producción intacto.
> No haremos el cambio (cutover) hasta que estén terminadas TODAS las páginas, para no
> romper ninguna URL que ya posiciona.

## Estado actual (v0)

- ✅ Arquitectura de 13 URLs de contenido + contacto, privacidad y cookies replicada exacta.
- ✅ Diseño tech-minimalista con identidad propia (NO marca Russafa).
- ✅ Páginas trabajadas a fondo: **elevador** (el nicho que ya posiciona) y **precios**
  (la página con 100k+ impresiones por desbloquear), ambas con FAQ + schema.
- ✅ Home completa, header/footer con enlazado interno completo, sitemap.xml y robots.txt.
- ⏳ Pendiente: enriquecer el resto de páginas, formulario de presupuesto (Resend),
  textos legales reales, y el cutover con redirecciones 301.

## Identidad

- Tipografías: Schibsted Grotesk (display) + Hanken Grotesk (texto) + JetBrains Mono (etiquetas).
- Color: cobalto `#1F3BE5` sobre grafito `#15171C` y papel `#F6F4EF`.
- Teléfono: 603 280 171.
