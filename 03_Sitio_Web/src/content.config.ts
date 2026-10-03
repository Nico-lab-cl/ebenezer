import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Inventario. Cada auto es un JSON en src/content/vehiculos/, editable desde /admin.
   Las fotos viven en src/assets/vehiculos/<slug>/ y Astro las optimiza al construir. */
const vehiculos = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/vehiculos' }),
  schema: ({ image }) =>
    z.object({
      marca: z.string(),
      modelo: z.string(),
      anio: z.number().int().min(1990).max(2100),
      version: z.string().default(''),
      km: z.number().int().min(0),
      transmision: z.enum(['Automática', 'Manual']),
      combustible: z.enum(['Bencina', 'Diésel', 'Híbrido', 'Eléctrico']),
      precio: z.number().int().positive(),
      precioAnterior: z.number().int().positive().nullable().optional(),
      cuotaDesde: z.number().int().positive().nullable().optional(),
      etiqueta: z.enum(['ninguna', 'seminuevo', 'nuevo', 'rebajado', 'vendido']).default('ninguna'),
      fotos: z
        .array(z.object({ imagen: image(), vista: z.string().default('') }))
        .default([]),
      color: z.string().default(''),
      duenos: z.number().int().nullable().optional(),
      motor: z.string().default(''),
      traccion: z.string().default(''),
      puertas: z.number().int().nullable().optional(),
      equipamiento: z.array(z.string()).default([]),
      descripcion: z.string().default(''),
      destacado: z.boolean().default(false),
      /* Un auto con `publicado: false` sólo se ve en `npm run dev`. Así se puede
         cargar un borrador sin que aparezca en el sitio. */
      publicado: z.boolean().default(false),
      ingreso: z.coerce.date(),
    }),
});

const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonios' }),
  schema: z.object({
    nombre: z.string(),
    comuna: z.string().default(''),
    auto: z.string().default(''),
    texto: z.string().min(20),
    publicado: z.boolean().default(false),
  }),
});

export const collections = { vehiculos, testimonios };
