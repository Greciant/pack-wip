# Notas para Claude — Pack WIP, 2026-10-21

## Descarga completa

- `index.html` ahora integra la descarga principal con los 299 mods publicables,
  la carpeta `config/` y `resourcepacks/SPBR-16_2.zip`. Solo shaders y otros
  modpacks quedan como descargas aparte.
- Jade 11.13.3 Forge para Minecraft 1.20.1 y Comforts 6.4.0 para Minecraft 1.20.1
  se descargan de las CDN oficiales de Modrinth, con tamaño y CRC32 comprobados.
  El ZIP incluye atribución y licencias: Jade por Snownee (CC BY-NC-SA 4.0) y
  Comforts por TheIllusiveC4 (LGPL-3.0-or-later).
- El ZIP oficial `descargas/configs-pack-wip.zip` se descarga y se expande en el
  navegador. `extraerZip()` lee su directorio central, descomprime sus archivos y
  los integra bajo `config/` en el ZIP final. Requiere un navegador moderno con
  `DecompressionStream('deflate-raw')`.
- `DATA.mods` muestra Jade y Comforts en la lista y el conteo pasa de 303 a 305;
  `DATA.pack` mantiene 297 archivos de la rama pública y, sumando los dos mods
  oficiales, el paquete principal incluye 299 mods.
- Se actualizó el texto de instalación para que indique que un único ZIP trae
  `mods/`, `config/` y `resourcepacks/`. La sección de Ajustes ahora remite al ZIP
  principal. El `LEEME.txt` generado indica cómo copiar las carpetas y atribuye
  las licencias de Jade y Comforts.
- SPBR 16.2 se obtiene de la CDN oficial y su ZIP original conserva `LICENSE`.
  “Wilderness Bound” / SPBR-22 era una imagen de galería, no el archivo compatible
  con 1.20.1.

## Inventario y servidor

- En el inventario del host, Controlling 12.0.2 ya estaba activo en el cliente y
  en el servidor. Jade estaba en el pool como `.disabled`; Comforts no estaba
  instalado.
- Se añadieron Jade 11.13.3 y Comforts 6.4.0 a la carpeta compartida del cliente y
  a `mods/` del servidor WIP activo. Los SHA-1 de las descargas se verificaron:
  Jade `d08e64e66521d69e083c8525f1fc507f1c202384`, Comforts
  `e7b9fe89566bb1ee013e33745f22f309f679536e`.
- Comforts requiere cliente y servidor para multijugador; la versión 1.20.1 es
  Forge-compatible y la lista del modpack ya contiene Balm. Jade puede instalarse
  solo en el cliente, pero está también en el servidor para habilitar los datos
  adicionales que el servidor provee.
- El puerto 25567 no estaba escuchando al hacer el cambio. No se arrancó ni se
  reinició el servidor, y no se realizó una prueba de conexión en juego.

## Publicación

- Mantener como objetivo de publicación la rama `gh-pages`; el checkout local
  suele estar en `codex/publish-gh-pages`.
- No incluir `.codex-remote-attachments/` en Git: contiene videos adjuntos del
  usuario.
