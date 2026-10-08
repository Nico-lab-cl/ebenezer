/* Datos de la automotora que todavía no existen quedan vacíos o entre corchetes
   ("[Lun a Vie …]") para que `npm run verificar` los liste. En la página no se
   muestran: un dato a medias se ve peor que ninguno. */
export const real = (s: string | undefined | null) => (s && !s.includes('[') ? s : undefined);
