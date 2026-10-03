/* Formatos de la marca: $12.990.000 (punto de miles, sin decimales, sin "CLP"),
   98.000 km. Se hace a mano y no con toLocaleString para no depender del ICU
   del entorno de build. */
export const miles = (n: number) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const clp = (n: number) => '$' + miles(n);
export const km = (n: number) => miles(n) + ' km';

/* Cuota francesa. tasa = mensual (0.0169), n = cuotas. */
export function cuota(capital: number, tasa: number, n: number) {
  if (tasa === 0) return capital / n;
  return (capital * tasa) / (1 - Math.pow(1 + tasa, -n));
}

export const redondear = (n: number, paso = 100000) => Math.round(n / paso) * paso;
