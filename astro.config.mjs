// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'htpps://jeremy-deurvillier.com',
  server: {host: true, port: 3000},
  integrations: [tailwind(), alpinejs()]
});