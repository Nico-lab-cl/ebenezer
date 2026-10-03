/* Íconos inline (SVG en el HTML, sin pedir nada a un CDN).

   El design system usaba Lucide desde jsDelivr como máscara CSS. En producción
   eso son 40 peticiones externas y un parpadeo; acá se leen los mismos archivos
   de lucide-static@0.460.0 (la versión del design system) al construir.

   Para usar un ícono nuevo hay que agregarlo a la lista: así el build sólo
   incluye los que el sitio realmente usa. */
const lucide = import.meta.glob(
  '/node_modules/lucide-static/icons/{arrow-right,arrow-left,search,menu,x,chevron-left,chevron-right,chevron-down,gauge,cog,fuel,calendar,zap,move-3d,car,palette,users,heart,share-2,clipboard-check,shield-check,file-pen-line,file-search,check,map-pin,phone,mail,clock,sliders-horizontal,minus,plus,scan-line,calculator,banknote,receipt,message-circle,file-down,camera}.svg',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

const marcas = import.meta.glob('/node_modules/simple-icons/icons/{whatsapp,instagram,facebook}.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const interior = (svg: string) => (svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1] ?? '').replace(/<title>.*?<\/title>/, '').trim();

const LUCIDE = new Map(Object.entries(lucide).map(([ruta, svg]) => [ruta.split('/').pop()!.replace('.svg', ''), interior(svg)]));
const MARCAS = new Map(Object.entries(marcas).map(([ruta, svg]) => [ruta.split('/').pop()!.replace('.svg', ''), interior(svg)]));

export function svgIcono(nombre: string): { cuerpo: string; relleno: boolean } {
  const marca = MARCAS.get(nombre);
  if (marca) return { cuerpo: marca, relleno: true };
  const linea = LUCIDE.get(nombre);
  if (linea) return { cuerpo: linea, relleno: false };
  throw new Error(`Ícono "${nombre}" no está en src/lib/iconos.ts. Agrégalo a la lista.`);
}
