import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from '../toolbar/toolbar';

interface ColorToken {
  name: string;
  variable: string;
  description: string;
  tone?: string;
  toneLightTheme?: string;
  toneDarkTheme?: string;
}

interface ColorCategory {
  title: string;
  icon: string;
  tokens: ColorToken[];
}

interface ContrastLevel {
  name: string;
  description: string;
  lightTone: number;
  darkTone: number;
}

@Component({
  selector: 'app-tokens',
  standalone: true,
  imports: [RouterLink, CommonModule, MatCardModule, MatRippleModule, MatButtonModule, MatIcon, MatGridListModule, ToolbarComponent],
  templateUrl: './tokens.html',
  styleUrl: './tokens.css'
})
export class TokensComponent {
  contrastLevels: ContrastLevel[] = [
    {
      name: 'Estándar',
      description: 'Contraste normal recomendado para la mayoría de casos',
      lightTone: 40,
      darkTone: 80
    },
    {
      name: 'Medio',
      description: 'Contraste intermedio para mejor legibilidad en algunos contextos',
      lightTone: 50,
      darkTone: 70
    },
    {
      name: 'Alto',
      description: 'Máximo contraste para accesibilidad y legibilidad extrema',
      lightTone: 70,
      darkTone: 90
    }
  ];

  colorCategories: ColorCategory[] = [
    {
      title: 'Colores Primarios',
      icon: 'palette',
      tokens: [
        { name: 'Primary', variable: '--mat-sys-primary', description: 'Color principal de la marca', toneLightTheme: 'Primary 60', toneDarkTheme: 'Primary 80' },
        { name: 'On Primary', variable: '--mat-sys-on-primary', description: 'Texto/iconos sobre primary', toneLightTheme: 'Primary 10', toneDarkTheme: 'Primary 20' },
        { name: 'Primary Container', variable: '--mat-sys-primary-container', description: 'Contenedor con color primario', toneLightTheme: 'Primary 90', toneDarkTheme: 'Primary 30' },
        { name: 'On Primary Container', variable: '--mat-sys-on-primary-container', description: 'Texto/iconos sobre primary container', toneLightTheme: 'Primary 10', toneDarkTheme: 'Primary 90' },
      ]
    },
    {
      title: 'Colores Secundarios',
      icon: 'color_lens',
      tokens: [
        { name: 'Secondary', variable: '--mat-sys-secondary', description: 'Color secundario de la marca', toneLightTheme: 'Secondary 40', toneDarkTheme: 'Secondary 80' },
        { name: 'On Secondary', variable: '--mat-sys-on-secondary', description: 'Texto/iconos sobre secondary', toneLightTheme: 'Secondary 100', toneDarkTheme: 'Secondary 20' },
        { name: 'Secondary Container', variable: '--mat-sys-secondary-container', description: 'Contenedor con color secundario', toneLightTheme: 'Secondary 90', toneDarkTheme: 'Secondary 30' },
        { name: 'On Secondary Container', variable: '--mat-sys-on-secondary-container', description: 'Texto/iconos sobre secondary container', toneLightTheme: 'Secondary 10', toneDarkTheme: 'Secondary 90' },
      ]
    },
    {
      title: 'Colores Terciarios',
      icon: 'gradient',
      tokens: [
        { name: 'Tertiary', variable: '--mat-sys-tertiary', description: 'Color terciario de la marca', toneLightTheme: 'Tertiary 40', toneDarkTheme: 'Tertiary 80' },
        { name: 'On Tertiary', variable: '--mat-sys-on-tertiary', description: 'Texto/iconos sobre tertiary', toneLightTheme: 'Tertiary 100', toneDarkTheme: 'Tertiary 20' },
        { name: 'Tertiary Container', variable: '--mat-sys-tertiary-container', description: 'Contenedor con color terciario', toneLightTheme: 'Tertiary 90', toneDarkTheme: 'Tertiary 30' },
        { name: 'On Tertiary Container', variable: '--mat-sys-on-tertiary-container', description: 'Texto/iconos sobre tertiary container', toneLightTheme: 'Tertiary 10', toneDarkTheme: 'Tertiary 90' },
      ]
    },
    {
      title: 'Colores de Error',
      icon: 'error',
      tokens: [
        { name: 'Error', variable: '--mat-sys-error', description: 'Color para estados de error', toneLightTheme: 'Error 40', toneDarkTheme: 'Error 80' },
        { name: 'On Error', variable: '--mat-sys-on-error', description: 'Texto/iconos sobre error', toneLightTheme: 'Error 100', toneDarkTheme: 'Error 20' },
        { name: 'Error Container', variable: '--mat-sys-error-container', description: 'Contenedor con color de error', toneLightTheme: 'Error 90', toneDarkTheme: 'Error 30' },
        { name: 'On Error Container', variable: '--mat-sys-on-error-container', description: 'Texto/iconos sobre error container', toneLightTheme: 'Error 10', toneDarkTheme: 'Error 90' },
      ]
    },
    {
      title: 'Superficies',
      icon: 'layers',
      tokens: [
        { name: 'Surface', variable: '--mat-sys-surface', description: 'Superficie base', toneLightTheme: 'Secondary 98', toneDarkTheme: 'Secondary 6' },
        { name: 'On Surface', variable: '--mat-sys-on-surface', description: 'Texto/iconos sobre surface', toneLightTheme: 'Secondary 10', toneDarkTheme: 'Secondary 90' },
        { name: 'Surface Dim', variable: '--mat-sys-surface-dim', description: 'Superficie atenuada', toneLightTheme: 'Secondary 87', toneDarkTheme: 'Secondary 6' },
        { name: 'Surface Bright', variable: '--mat-sys-surface-bright', description: 'Superficie brillante', toneLightTheme: 'Secondary 98', toneDarkTheme: 'Secondary 24' },
        { name: 'Surface Container Lowest', variable: '--mat-sys-surface-container-lowest', description: 'Contenedor más bajo', toneLightTheme: 'Secondary 100', toneDarkTheme: 'Secondary 4' },
        { name: 'Surface Container Low', variable: '--mat-sys-surface-container-low', description: 'Contenedor bajo', toneLightTheme: 'Secondary 96', toneDarkTheme: 'Secondary 10' },
        { name: 'Surface Container', variable: '--mat-sys-surface-container', description: 'Contenedor estándar', toneLightTheme: 'Secondary 94', toneDarkTheme: 'Secondary 12' },
        { name: 'Surface Container High', variable: '--mat-sys-surface-container-high', description: 'Contenedor alto', toneLightTheme: 'Secondary 92', toneDarkTheme: 'Secondary 17' },
        { name: 'Surface Container Highest', variable: '--mat-sys-surface-container-highest', description: 'Contenedor más alto', toneLightTheme: 'Secondary 90', toneDarkTheme: 'Secondary 22' },
      ]
    },
    {
      title: 'Variantes de Superficie',
      icon: 'texture',
      tokens: [
        { name: 'Surface Variant', variable: '--mat-sys-surface-variant', description: 'Variante de superficie', toneLightTheme: 'Neutral Variant 90', toneDarkTheme: 'Neutral Variant 30' },
        { name: 'On Surface Variant', variable: '--mat-sys-on-surface-variant', description: 'Texto/iconos sobre surface variant', toneLightTheme: 'Neutral Variant 30', toneDarkTheme: 'Neutral Variant 80' },
        { name: 'Surface Tint', variable: '--mat-sys-surface-tint', description: 'Tinte de superficie', toneLightTheme: 'Primary 60', toneDarkTheme: 'Primary 80' },
      ]
    },
    {
      title: 'Fondos',
      icon: 'wallpaper',
      tokens: [
        { name: 'Background', variable: '--mat-sys-background', description: 'Color de fondo principal', toneLightTheme: 'Neutral 98', toneDarkTheme: 'Neutral 10' },
        { name: 'On Background', variable: '--mat-sys-on-background', description: 'Texto/iconos sobre background', toneLightTheme: 'Neutral 10', toneDarkTheme: 'Neutral 90' },
      ]
    },
    {
      title: 'Contornos y Sombras',
      icon: 'border_style',
      tokens: [
        { name: 'Outline', variable: '--mat-sys-outline', description: 'Bordes y divisores', toneLightTheme: 'Neutral Variant 50', toneDarkTheme: 'Neutral Variant 60' },
        { name: 'Outline Variant', variable: '--mat-sys-outline-variant', description: 'Variante de bordes', toneLightTheme: 'Neutral Variant 80', toneDarkTheme: 'Neutral Variant 30' },
        { name: 'Shadow', variable: '--mat-sys-shadow', description: 'Color de sombras', toneLightTheme: 'Neutral 0', toneDarkTheme: 'Neutral 0' },
        { name: 'Scrim', variable: '--mat-sys-scrim', description: 'Overlay oscuro', toneLightTheme: 'Neutral 0', toneDarkTheme: 'Neutral 0' },
      ]
    },
    {
      title: 'Colores Inversos',
      icon: 'invert_colors',
      tokens: [
        { name: 'Inverse Surface', variable: '--mat-sys-inverse-surface', description: 'Superficie inversa', toneLightTheme: 'Neutral 20', toneDarkTheme: 'Neutral 95' },
        { name: 'Inverse On Surface', variable: '--mat-sys-inverse-on-surface', description: 'Texto sobre superficie inversa', toneLightTheme: 'Neutral 95', toneDarkTheme: 'Neutral 20' },
        { name: 'Inverse Primary', variable: '--mat-sys-inverse-primary', description: 'Primary inverso', toneLightTheme: 'Primary 80', toneDarkTheme: 'Primary 60' },
      ]
    }
  ];

  // Método para copiar el nombre de la variable al portapapeles
  copyToClipboard(variable: string): void {
    navigator.clipboard.writeText(`var(${variable})`).then(() => {
      console.log('Copiado:', variable);
    });
  }
}
