import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://example.com");
  const isLocalDev = baseUrl.hostname === "localhost";
  const hasConfiguredSite = baseUrl.hostname !== "example.com" || isLocalDev;
  const sitemapUrl = new URL("/sitemap-index.xml", baseUrl).toString();

  const body = hasConfiguredSite
    ? `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`
    : `User-agent: *
Disallow: /

# Configura PUBLIC_SITE_URL antes de deployar para habilitar el indexing
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
