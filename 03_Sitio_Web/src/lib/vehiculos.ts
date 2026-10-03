import { getCollection, type CollectionEntry } from 'astro:content';
import ajustes from '@/content/ajustes.json';
import { cuota, redondear } from './formato';

export type Vehiculo = CollectionEntry<'vehiculos'>;

export const ETIQUETAS: Record<string, string> = {
  seminuevo: 'Seminuevo',
  nuevo: 'Nuevo ingreso',
  rebajado: 'Rebajado',
  vendido: 'Vendido',
};

/* Publicados en producción; en `npm run dev` también los borradores, para
   poder revisar cómo quedan antes de publicarlos. */
export async function vehiculos() {
  const todos = await getCollection('vehiculos', (v) => import.meta.env.DEV || v.data.publicado);
  return todos.sort((a, b) => b.data.ingreso.getTime() - a.data.ingreso.getTime());
}

export const nombre = (v: Vehiculo) => `${v.data.marca} ${v.data.modelo} ${v.data.anio}`;
export const url = (v: Vehiculo) => `/autos/${v.id}/`;
export const etiqueta = (v: Vehiculo) => ETIQUETAS[v.data.etiqueta] ?? '';

/* Cuota "desde": la del CMS si existe; si no, 30% de pie a 36 meses con la tasa referencial. */
export function cuotaDesde(v: Vehiculo) {
  if (v.data.cuotaDesde) return v.data.cuotaDesde;
  const pie = redondear(v.data.precio * 0.3);
  return redondear(cuota(v.data.precio - pie, ajustes.tasaMensual, 36), 1000);
}

export const autoWa = (v: Vehiculo) => ({
  marca: v.data.marca,
  modelo: v.data.modelo,
  anio: v.data.anio,
  condicion: etiqueta(v) && v.data.etiqueta !== 'vendido' ? etiqueta(v) : undefined,
});
