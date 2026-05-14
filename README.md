# AFdevelopers Landing

Landing page en Astro + Tailwind.

## Requisitos

- Node.js 18+

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## SEO y dominio

Antes de publicar con dominio propio, definí la variable:

```bash
PUBLIC_SITE_URL=https://tudominio.com
```

Podés copiar `.env.example` a `.env` y ajustar ese valor.

Con eso queda correcto:

- `canonical` y metadatos Open Graph
- `robots.txt`
- `sitemap-index.xml` (generado por `@astrojs/sitemap`)
