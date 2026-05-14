import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://example.com");
  const hasConfiguredSite = baseUrl.hostname !== "example.com";
  const sitemapUrl = new URL("/sitemap-index.xml", baseUrl).toString();

  const body = hasConfiguredSite
    ? `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`
    : `User-agent: *
Disallow: /

# Configure PUBLIC_SITE_URL before deploy to enable indexing
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
