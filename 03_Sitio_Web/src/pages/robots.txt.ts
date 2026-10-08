import type { APIRoute } from 'astro';
export const prerender = true;

/* robots.txt
   - Todo el sitio público se puede rastrear.
   - El panel del CMS (/keystatic, /admin) y su API no aportan nada a Google.
   - /tasacion NO se bloquea aquí: es la landing de anuncios y lleva
     <meta name="robots" content="noindex">. Si se bloqueara, Google no podría
     leer ese noindex y podría indexar la URL igual (sin contenido).
   - Se declara el sitemap para que Google y Bing lo encuentren solos. */
export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      'Disallow: /keystatic',
      'Disallow: /admin',
      'Disallow: /api/',
      '',
      `Sitemap: ${new URL('/sitemap-index.xml', site).href}`,
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
