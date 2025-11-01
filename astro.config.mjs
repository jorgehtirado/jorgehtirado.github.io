// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jorgehtirado.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  redirects: {
    '/': '/about'  // Redirige raíz a about
  },
 vite: {
   plugins: [tailwindcss()],
 }
});
