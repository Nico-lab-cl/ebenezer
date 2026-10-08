// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import ajustes from './src/content/ajustes.json' with { type: 'json' };

/* El dominio sale de "Datos de la automotora" en el CMS (src/content/ajustes.json).
   OJO: el PDF de marca dice www.ebanezer.com (con "a"). Confirmar antes de publicar:
   de este valor dependen las canónicas, el sitemap y las imágenes para redes. */
export const SITE = ajustes.dominio;

export default defineConfig({
  site: SITE,
  // Estático por defecto: todas las páginas se generan al construir.
  // Sólo /keystatic y /api/keystatic corren en el Worker.
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  // 'ignore' para que el callback de inicio de sesión de Keystatic no se
  // redirija con barra final (mismo problema que tuvo Conecta Médica).
  trailingSlash: 'ignore',
  redirects: {
    '/admin': '/keystatic',
    // El catálogo cambió de URL por SEO ("autos usados"); los enlaces viejos siguen funcionando.
    '/comprar': '/autos-usados/',
  },
  integrations: [
    react(),
    keystatic(),
    sitemap({
      // Sólo páginas indexables: fuera el CMS, la landing de anuncios (noindex) y la URL vieja del catálogo.
      // /tasacion/ (landing de anuncios) queda fuera; /vender-mi-auto/tasacion/ sí entra.
      filter: (page) => !/^https?:\/\/[^/]+\/(keystatic|admin|tasacion|comprar|404)(\/|$)/.test(page),
      // Hoja de estilo para que el sitemap se lea como tabla en el navegador (a Google le da lo mismo).
      xslURL: '/sitemap.xsl',
      i18n: { defaultLocale: 'es', locales: { es: 'es-CL' } },
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
