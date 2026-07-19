// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), sitemap()],
});
