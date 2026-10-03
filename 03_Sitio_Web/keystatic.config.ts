import { config, fields, collection, singleton } from '@keystatic/core';

/* CMS de EBENEZER, en /admin (redirige a /keystatic).

   En desarrollo es `local`: edita los archivos del repo directamente.
   En producción usa Keystatic Cloud si existe PUBLIC_KEYSTATIC_PROJECT: el dueño
   entra con correo y contraseña y cada guardado es un commit en GitHub, que
   Cloudflare publica solo. Paso a paso en README.md › "CMS en producción". */
const proyecto = import.meta.env.PUBLIC_KEYSTATIC_PROJECT as string | undefined;

const ayudaPublicado =
  'Desmarcado = borrador: no aparece en el sitio publicado. Desmarca en vez de borrar.';

export default config({
  storage: import.meta.env.PROD && proyecto ? { kind: 'cloud' } : { kind: 'local' },
  ...(proyecto ? { cloud: { project: proyecto } } : {}),

  ui: {
    brand: { name: 'EBENEZER' },
    navigation: {
      Inventario: ['vehiculos'],
      Contenido: ['testimonios'],
      Configuración: ['ajustes'],
    },
  },

  collections: {
    vehiculos: collection({
      label: 'Autos',
      slugField: 'slug',
      path: 'src/content/vehiculos/*',
      format: { data: 'json' },
      columns: ['marca', 'modelo', 'anio', 'precio'],
      schema: {
        slug: fields.slug({
          name: {
            label: 'Nombre interno',
            description: 'Marca, modelo y año. Ej: Audi TT 2011. Genera la dirección de la ficha.',
          },
        }),
        publicado: fields.checkbox({ label: 'Publicado', description: ayudaPublicado, defaultValue: false }),
        destacado: fields.checkbox({ label: 'Destacado en la portada', defaultValue: false }),
        etiqueta: fields.select({
          label: 'Etiqueta',
          options: [
            { label: 'Ninguna', value: 'ninguna' },
            { label: 'Seminuevo', value: 'seminuevo' },
            { label: 'Nuevo ingreso', value: 'nuevo' },
            { label: 'Rebajado', value: 'rebajado' },
            { label: 'Vendido', value: 'vendido' },
          ],
          defaultValue: 'ninguna',
        }),
        marca: fields.text({ label: 'Marca', validation: { isRequired: true } }),
        modelo: fields.text({ label: 'Modelo', validation: { isRequired: true } }),
        anio: fields.integer({ label: 'Año', validation: { isRequired: true, min: 1990 } }),
        version: fields.text({ label: 'Versión', description: 'Ej: 2.0 TFSI Coupé S tronic' }),
        km: fields.integer({ label: 'Kilometraje', validation: { isRequired: true, min: 0 } }),
        transmision: fields.select({
          label: 'Transmisión',
          options: [
            { label: 'Automática', value: 'Automática' },
            { label: 'Manual', value: 'Manual' },
          ],
          defaultValue: 'Automática',
        }),
        combustible: fields.select({
          label: 'Combustible',
          options: [
            { label: 'Bencina', value: 'Bencina' },
            { label: 'Diésel', value: 'Diésel' },
            { label: 'Híbrido', value: 'Híbrido' },
            { label: 'Eléctrico', value: 'Eléctrico' },
          ],
          defaultValue: 'Bencina',
        }),
        precio: fields.integer({
          label: 'Precio final (CLP)',
          description: 'Con IVA incluido. Sin puntos: 12990000',
          validation: { isRequired: true, min: 1 },
        }),
        precioAnterior: fields.integer({
          label: 'Precio anterior (CLP)',
          description: 'Sólo si está rebajado. Se muestra tachado.',
        }),
        cuotaDesde: fields.integer({
          label: 'Cuota referencial desde (CLP)',
          description: 'Vacío = se calcula sola con 30% de pie a 36 meses.',
        }),
        fotos: fields.array(
          fields.object({
            imagen: fields.image({
              label: 'Foto',
              directory: 'src/assets/vehiculos',
              publicPath: '../../assets/vehiculos/',
              validation: { isRequired: true },
            }),
            vista: fields.text({ label: 'Vista', description: 'Frontal, 3/4 trasero, trasera, interior…' }),
          }),
          {
            label: 'Fotos',
            description: 'La primera es la portada. Fondo de estudio gris, misma altura de cámara.',
            itemLabel: (p) => p.fields.vista.value || 'Foto',
          }
        ),
        color: fields.text({ label: 'Color' }),
        duenos: fields.integer({ label: 'Dueños anteriores' }),
        motor: fields.text({ label: 'Motor', description: 'Ej: 2.0 TFSI 200 hp' }),
        traccion: fields.text({ label: 'Tracción' }),
        puertas: fields.integer({ label: 'Puertas' }),
        equipamiento: fields.array(fields.text({ label: 'Ítem' }), {
          label: 'Equipamiento',
          itemLabel: (p) => p.value,
        }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        ingreso: fields.date({ label: 'Fecha de ingreso', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
      },
    }),

    testimonios: collection({
      label: 'Testimonios',
      slugField: 'nombre',
      path: 'src/content/testimonios/*',
      format: { data: 'json' },
      schema: {
        nombre: fields.slug({ name: { label: 'Nombre del cliente' } }),
        publicado: fields.checkbox({ label: 'Publicado', description: 'Sólo testimonios reales, con permiso del cliente.', defaultValue: false }),
        comuna: fields.text({ label: 'Comuna' }),
        auto: fields.text({ label: 'Auto', description: 'Ej: Compró un Mazda 3 2019' }),
        texto: fields.text({ label: 'Testimonio', multiline: true, validation: { length: { min: 20 } } }),
      },
    }),
  },

  singletons: {
    ajustes: singleton({
      label: 'Datos de la automotora',
      path: 'src/content/ajustes',
      format: { data: 'json' },
      schema: {
        nombre: fields.text({ label: 'Nombre comercial' }),
        dominio: fields.url({ label: 'Dominio', description: 'Con https://. Se usa en canónicas y sitemap.' }),
        whatsapp: fields.text({ label: 'WhatsApp', description: 'Sólo dígitos con código país. Ej: 56912345678' }),
        telefono: fields.text({ label: 'Teléfono visible' }),
        email: fields.text({ label: 'Email' }),
        direccion: fields.text({ label: 'Dirección' }),
        comuna: fields.text({ label: 'Comuna' }),
        horario: fields.text({ label: 'Horario de atención' }),
        mapaUrl: fields.text({ label: 'Enlace a Google Maps' }),
        instagram: fields.text({ label: 'Instagram (URL)' }),
        facebook: fields.text({ label: 'Facebook (URL)' }),
        tasaMensual: fields.number({ label: 'Tasa mensual referencial', description: 'Ej: 0.0169 = 1,69% mensual', step: 0.0001 }),
        pieMinimo: fields.number({ label: 'Pie mínimo', description: 'Ej: 0.2 = 20%', step: 0.01 }),
        financieras: fields.text({ label: 'Financieras con las que trabajan' }),
        comision: fields.text({ label: 'Comisión de consignación', description: 'Ej: 5% del precio de venta. Se muestra en la portada y en las preguntas frecuentes.' }),
        plazoPago: fields.text({ label: 'Plazo de pago al dueño', description: 'Ej: el mismo día de la firma.' }),
        canales: fields.array(fields.text({ label: 'Canal' }), {
          label: 'Dónde promocionan los autos en consignación',
          itemLabel: (p) => p.value,
        }),
        sheetsUrl: fields.text({
          label: 'URL de Google Sheets (Apps Script)',
          description: 'Dirección /exec del script que guarda los contactos. Ver docs/google-sheets.md. Vacío = sólo WhatsApp.',
        }),
        metaPixelId: fields.text({ label: 'Meta Pixel ID', description: 'Sólo dígitos. Vacío = sin píxel.' }),
        ga4Id: fields.text({ label: 'Google Analytics 4 ID', description: 'Ej: G-XXXXXXX. Vacío = sin Analytics.' }),
        confianza: fields.array(
          fields.object({
            icono: fields.text({ label: 'Ícono (nombre Lucide)' }),
            titulo: fields.text({ label: 'Título' }),
            texto: fields.text({ label: 'Texto', multiline: true }),
          }),
          { label: 'Bloque de confianza', itemLabel: (p) => p.fields.titulo.value }
        ),
      },
    }),
  },
});
