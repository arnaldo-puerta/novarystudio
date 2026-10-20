# Gree Networks — Sitio web

Sitio de Gree Networks, proveedor de internet inalámbrico residencial en Chihuahua.
Rediseño con el logo nuevo, adaptado a celular, tablet y escritorio.

## Estilo

| Uso | Color |
|---|---|
| Azul principal | `#1E50D6` |
| Verde lima (acentos, botones) | `#8CC63F` |
| Verde para texto | `#4E7D06` |
| Azul marino (fondos oscuros) | `#0B1E40` |

Tipografías de Google Fonts: **Days One** para títulos e **Inter** para el texto.

## Cosas a tomar en cuenta

- **Imágenes:** las fotos (portada, familia, etc.) se cargan desde `tavgreenetworksti.net/wp-content/uploads/`. Si se deja de usar WordPress, hay que descargarlas a `assets/img/` y cambiar las rutas en `index.html`.
- **Mapa de cobertura:** en `index.html` hay un comentario `REEMPLAZAR` donde se pega el enlace de inserción del mapa de Google My Maps (`https://www.google.com/maps/d/embed?mid=...`). Por ahora muestra un mapa general de Chihuahua.
- **Funciones que requieren el servidor:** `soporte.html` y `tienda.html` usan archivos PHP que viven en el hosting actual:
  - `https://tavgreenetworksti.net/soporte/gree-proxy.php` (consulta de cuenta en WispHub, pagos y facturas)
  - `/tienda/productos.php` (productos del carrusel de la tienda)
  - `productos.php` y `mp_pago.php` (catálogo y pago de `tienda.html`, en tienda.tavgreenetworksti.net)


## Publicar en GitHub Pages (opcional)

1. Sube esta carpeta a un repositorio.
2. En el repositorio: **Settings → Pages → Branch: `main` / carpeta `/ (root)`**.
3. El sitio queda en `https://<usuario>.github.io/<repositorio>/`.
