/* Patentes chilenas de autos (PPU):
   - formato actual (desde 2007): 4 letras + 2 números, BBBB12. Sólo consonantes,
     sin M, N, Ñ ni Q.
   - formato antiguo: 2 letras + 4 números, AB1234.
   Se acepta con o sin guiones, puntos o espacios ("dg-lr-28" → "DGLR28"). */
const ACTUAL = /^[BCDFGHJKLPRSTVWXYZ]{4}\d{2}$/;
const ANTIGUA = /^[A-Z]{2}[1-9]\d{3}$/;

export const normalizarPatente = (v: string) => v.toUpperCase().replace(/[^A-Z0-9]/g, '');

export const patenteValida = (v: string) => {
  const p = normalizarPatente(v);
  return ACTUAL.test(p) || ANTIGUA.test(p);
};

export const MENSAJE_PATENTE = 'Revisa la patente, son 4 letras y 2 números (ej. DGLR28) o 2 letras y 4 números (ej. AB1234).';
