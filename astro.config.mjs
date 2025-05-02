// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeremy-deurvillier.com',
  server: {host: true, port: 3000},
  integrations: [alpinejs()],

  vite: {
    plugins: [tailwindcss()]
  }
});