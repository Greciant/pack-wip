# Notas para Claude — Pack WIP, 2026-10-21

## Cambios de esta actualización

- `index.html`: añadida la sección “Texturas y mods recomendados” con una descarga
  oficial de SPBR 16.2 y enlaces oficiales filtrados para Forge 1.20.1 de Jade,
  Comforts y Controlling.
- El ZIP generado desde la página ahora incluye los mods públicos listados en
  `DATA.pack` y `resourcepacks/SPBR-16_2.zip`. SPBR se obtiene de la CDN oficial de
  Modrinth; su ZIP original contiene `LICENSE`.
- Se actualizaron el texto de instalación y el `LEEME.txt` generado para copiar
  también `resourcepacks/` y activar SPBR desde Opciones → Paquetes de recursos.
- SPBR es opcional y de cliente. Su licencia indicada por Modrinth es
  GPL-3.0-or-later. El video muestra “Wilderness Bound” / SPBR-22, una imagen de
  galería; la descarga compatible con Minecraft 1.20.1 es `SPBR-16_2.zip`.
- Añadido `Extras` a la navegación y al observador de sección.

## Inventario contrastado en Greciant

- El pack web lista 303 mods; el archivo web contiene los 297 publicables. Los seis
  privados (Archaion, Ancient Remnants, Roaring, Show My World, shineport y el
  parche de Beyond the Abyss para cliente) siguen fuera de la descarga pública.
- `Controlling-forge-1.20.1-12.0.2.jar` sí está activo en la carpeta compartida.
- `Jade-1.20.1-Forge-11.13.3.jar.disabled` está en el pool, pero desactivado y
  fuera del pack instalado.
- Comforts no aparece en el inventario actual; requiere cliente y servidor.
- SPBR se agregó a `/home/grec/Sync/Compartida/1-MODPACK/1.20.1/resourcepacks/`
  después de comprobar SHA-1 `55221318c6b0a817f7edea282f308ddd15b133e5`.

No se modificaron los mods ni el mundo del servidor activo. Si se decide activar
Jade o instalar Comforts, hay que revisar/probar el cambio aparte y, para Comforts,
actualizar ambos lados.
