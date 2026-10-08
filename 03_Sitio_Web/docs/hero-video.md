# Video del hero (portada)

El hero de la portada (`src/components/HeroVideo.astro`) muestra un video en
loop detrás del texto. Mientras no existan los archivos, usa la foto de
carretera como fondo fijo; no hay que tocar código para activarlo.

## Archivos (en `public/video/`)

| Archivo | Formato | Uso |
|---|---|---|
| `hero-escritorio.mp4` | 16:9, 1920×1080, H.264, sin audio, ≤ 5 MB | pantallas anchas |
| `hero-movil.mp4` | 9:16, 1080×1920, H.264, sin audio, ≤ 3 MB | celulares (alto > ancho) |
| `hero-escritorio.jpg` / `hero-movil.jpg` | primer cuadro | se ve mientras carga y con "reducir movimiento" |

Referencia de la competencia: Lovende usa 1920×1080, 15 s, loop, muted,
playsinline y poster, en 4,3 MB. Tecfin usa 22 MB sin loop: demasiado pesado.

## Reglas

- Loop perfecto: el primer y el último cuadro son la misma imagen (en
  Seedance 2.0: `--start-image` y `--end-image` con el mismo archivo).
- Movimiento lento y continuo, sin cortes ni texto en el video.
- Paleta EBENEZER: grafito #14171B / #20242A, naranja #F47735, blanco.
- Espacio libre donde va el texto: tercio izquierdo en escritorio, mitad
  inferior en móvil (el velo oscuro está ahí).
- Sin logos de marcas, sin patentes legibles, sin personas.

## Generación (Higgsfield)

1. Cuadro clave con GPT Image 2 (`gpt_image_2`), uno 16:9 y otro 9:16, 2k.
2. Animación con Seedance 2.0 (`seedance_2_0`): 10 s, 1080p, `--generate_audio false`,
   mismo cuadro como inicio y fin.

## Compresión (ffmpeg)

```bash
ffmpeg -i bruto-16x9.mp4 -an -vf "scale=1920:-2,fps=30" -c:v libx264 -profile:v high -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart public/video/hero-escritorio.mp4
ffmpeg -i bruto-9x16.mp4 -an -vf "scale=1080:-2,fps=30" -c:v libx264 -profile:v high -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart public/video/hero-movil.mp4
ffmpeg -i public/video/hero-escritorio.mp4 -frames:v 1 -q:v 3 public/video/hero-escritorio.jpg
ffmpeg -i public/video/hero-movil.mp4 -frames:v 1 -q:v 3 public/video/hero-movil.jpg
```
