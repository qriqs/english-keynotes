import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

export default defineConfig({
  integrations: [tailwind(), mdx(), pagefind()],
  site: 'https://english-master-binder.netlify.app',
});
