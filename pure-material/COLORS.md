# Guía de Personalización de Colores Material Design 3

## 📋 Ubicación del Tema

El tema de colores se encuentra en:
**`src/custom-theme.scss`**

## 🎨 Paletas Definidas

El tema actual incluye 6 paletas de color completas:

### 1. **Primary** (Azul Cyan)
Color principal de la marca, usado en elementos destacados como botones primarios, FABs, etc.

### 2. **Secondary** (Gris Azulado)
Color secundario para elementos de soporte y variaciones.

### 3. **Tertiary** (Púrpura)
Color terciario para acentos adicionales y variedad visual.

### 4. **Error** (Rojo)
Color para estados de error, alertas y validaciones.

### 5. **Neutral** (Gris)
Paleta neutral para fondos, superficies y textos.

### 6. **Neutral Variant** (Gris Azulado)
Variante neutral para bordes, divisores y elementos sutiles.

## 🔧 Cómo Personalizar

### Opción 1: Usar Paletas Predefinidas de Material

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: (
      primary: mat.$azure-palette,      // Azul
      secondary: mat.$rose-palette,     // Rosa
      tertiary: mat.$violet-palette,    // Violeta
      theme-type: light,
    ),
    typography: Roboto,
    density: 0,
  ));
}
```

**Paletas disponibles:**
- `mat.$red-palette`
- `mat.$pink-palette`
- `mat.$purple-palette`
- `mat.$violet-palette`
- `mat.$blue-palette`
- `mat.$azure-palette`
- `mat.$cyan-palette`
- `mat.$teal-palette`
- `mat.$green-palette`
- `mat.$chartreuse-palette`
- `mat.$yellow-palette`
- `mat.$orange-palette`
- `mat.$rose-palette`
- `mat.$magenta-palette`

### Opción 2: Crear Paleta Personalizada

Cada paleta necesita tonos del 0 al 100 (en incrementos específicos):

```scss
$mi-paleta-personalizada: (
  0: #000000,    // Negro puro
  10: #1a0033,   // Muy oscuro
  20: #330066,   // Oscuro
  25: #400080,
  30: #4d0099,
  35: #5900b3,
  40: #6600cc,   // Tono medio-oscuro
  50: #8000ff,   // Tono medio
  60: #9933ff,
  70: #b366ff,   // Tono medio-claro
  80: #cc99ff,
  90: #e6ccff,   // Muy claro
  95: #f2e6ff,
  98: #faf5ff,
  99: #fdfaff,
  100: #ffffff,  // Blanco puro
);
```

### Opción 3: Generar desde un Color Base

Puedes usar herramientas online para generar paletas Material 3:

1. **Material Theme Builder**
   - URL: https://material-foundation.github.io/material-theme-builder/
   - Elige un color base
   - Descarga el tema generado
   - Copia las paletas al archivo `custom-theme.scss`

2. **Material Color Tool**
   - URL: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

## 🌓 Tema Oscuro

Para habilitar el tema oscuro, cambia `theme-type`:

```scss
html {
  @include mat.theme((
    color: (
      primary: $primary-palette,
      secondary: $secondary-palette,
      tertiary: $tertiary-palette,
      theme-type: dark,  // Cambiar a 'dark'
    ),
    typography: Roboto,
    density: 0,
  ));
}
```

## 📊 Tokens Generados Automáticamente

Material 3 genera automáticamente ~49 tokens de color a partir de las 6 paletas:

### Tokens Principales
- `--mat-sys-primary`
- `--mat-sys-on-primary`
- `--mat-sys-primary-container`
- `--mat-sys-on-primary-container`

### Tokens de Superficie
- `--mat-sys-surface`
- `--mat-sys-surface-dim`
- `--mat-sys-surface-bright`
- `--mat-sys-surface-container`
- `--mat-sys-surface-container-low`
- `--mat-sys-surface-container-high`
- etc.

## 💡 Consejos

1. **Contraste**: Asegúrate de que los tonos 40 y 90 tengan buen contraste para accesibilidad
2. **Consistencia**: Usa el mismo método (predefinidas o personalizadas) para todas las paletas
3. **Pruebas**: Verifica los colores en `/tokens` después de cada cambio
4. **Tema oscuro**: Los mismos tonos funcionan para tema claro y oscuro (Material 3 los invierte automáticamente)

## 🔄 Aplicar Cambios

Después de modificar `custom-theme.scss`:
1. Guarda el archivo
2. El servidor de desarrollo recargará automáticamente
3. Verifica los cambios en `http://localhost:4200/tokens`

## 📚 Recursos

- [Material Design 3 Color](https://m3.material.io/styles/color/overview)
- [Angular Material Theming](https://material.angular.io/guide/theming)
- [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
