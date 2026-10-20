# Gree Networks — Sitio web

Sitio de Gree Networks, proveedor de internet inalámbrico residencial en Chihuahua.
Rediseño con el logo nuevo, adaptado a celular, tablet y escritorio.

## Estructura

```
gree-networks/
├── index.html              Página principal (planes, cobertura, pagos, contacto, legal)
├── soporte.html            Soporte técnico (consulta de cuenta, facturación CFDI, asistente virtual)
├── tienda.html             Tienda en línea (catálogo, carrito, pago con Mercado Pago / SPEI / WhatsApp)
├── assets/
│   └── img/
│       ├── logo.svg               Logo horizontal para fondos claros
│       ├── logo-fondo-oscuro.svg  Logo horizontal para fondos oscuros
│       ├── simbolo.svg            Solo el símbolo (globo + señal)
│       ├── icono-app.svg          Ícono cuadrado para app / redes sociales
│       └── favicon.svg            Favicon de la pestaña del navegador
└── README.md
```

Las dos páginas son HTML, CSS y JavaScript sin dependencias: no necesitan instalación ni compilación.

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

  Funcionan al subir el sitio al mismo dominio. En GitHub Pages u otro hosting estático, la página se ve completa pero esas consultas no responden (el carrusel muestra los anuncios solo con texto y botón).
- **Tienda en modo demo:** si `productos.php` no responde (al abrir el archivo localmente o en GitHub Pages), `tienda.html` muestra un catálogo de ejemplo de 56 productos sin fotos. En el servidor real siempre usa el catálogo y las fotos de `productos.php`.
- **Emojis del asistente:** las respuestas del bot se escriben con emojis en el JavaScript; un script al final de `soporte.html` los cambia automáticamente por íconos SVG.

## Publicar en GitHub Pages (opcional)

1. Sube esta carpeta a un repositorio.
2. En el repositorio: **Settings → Pages → Branch: `main` / carpeta `/ (root)`**.
3. El sitio queda en `https://<usuario>.github.io/<repositorio>/`.
