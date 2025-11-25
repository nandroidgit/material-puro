import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

interface ColorToken {
  name: string;
  variable: string;
  description: string;
  tone?: string;
}

interface ColorCategory {
  title: string;
  icon: string;
  tokens: ColorToken[];
}

@Component({
  selector: 'app-tokens',
  standalone: true,
  imports: [RouterLink, CommonModule, MatCardModule, MatRippleModule, MatButtonModule, MatIcon],
  templateUrl: './tokens.html',
  styleUrl: './tokens.css'
})
export class TokensComponent {
  colorCategories: ColorCategory[] = [
    {
      title: 'Colores Primarios',
      icon: 'palette',
      tokens: [
        { name: 'Primary', variable: '--mat-sys-primary', description: 'Color principal de la marca', tone: 'Primary 40. Cambiado a 60!!' },
        { name: 'On Primary', variable: '--mat-sys-on-primary', description: 'Texto/iconos sobre primary', tone: 'Primary 100, Cambiado a 10!!' },
        { name: 'Primary Container', variable: '--mat-sys-primary-container', description: 'Contenedor con color primario', tone: 'Primary 90' },
        { name: 'On Primary Container', variable: '--mat-sys-on-primary-container', description: 'Texto/iconos sobre primary container', tone: 'Primary 10' },
        { name: 'Primary Fixed', variable: '--mat-sys-primary-fixed', description: 'Primary fijo (no cambia con tema)', tone: 'Primary 90' },
        { name: 'Primary Fixed Dim', variable: '--mat-sys-primary-fixed-dim', description: 'Primary fijo atenuado', tone: 'Primary 80' },
        { name: 'On Primary Fixed', variable: '--mat-sys-on-primary-fixed', description: 'Texto sobre primary fixed', tone: 'Primary 10' },
        { name: 'On Primary Fixed Variant', variable: '--mat-sys-on-primary-fixed-variant', description: 'Variante de texto sobre primary fixed', tone: 'Primary 30' },
      ]
    },
    {
      title: 'Colores Secundarios',
      icon: 'color_lens',
      tokens: [
        { name: 'Secondary', variable: '--mat-sys-secondary', description: 'Color secundario de la marca', tone: 'Secondary 40' },
        { name: 'On Secondary', variable: '--mat-sys-on-secondary', description: 'Texto/iconos sobre secondary', tone: 'Secondary 100' },
        { name: 'Secondary Container', variable: '--mat-sys-secondary-container', description: 'Contenedor con color secundario', tone: 'Secondary 90' },
        { name: 'On Secondary Container', variable: '--mat-sys-on-secondary-container', description: 'Texto/iconos sobre secondary container', tone: 'Secondary 10' },
        { name: 'Secondary Fixed', variable: '--mat-sys-secondary-fixed', description: 'Secondary fijo (no cambia con tema)', tone: 'Secondary 90' },
        { name: 'Secondary Fixed Dim', variable: '--mat-sys-secondary-fixed-dim', description: 'Secondary fijo atenuado', tone: 'Secondary 80' },
        { name: 'On Secondary Fixed', variable: '--mat-sys-on-secondary-fixed', description: 'Texto sobre secondary fixed', tone: 'Secondary 10' },
        { name: 'On Secondary Fixed Variant', variable: '--mat-sys-on-secondary-fixed-variant', description: 'Variante de texto sobre secondary fixed', tone: 'Secondary 30' },
      ]
    },
    {
      title: 'Colores Terciarios',
      icon: 'gradient',
      tokens: [
        { name: 'Tertiary', variable: '--mat-sys-tertiary', description: 'Color terciario de la marca', tone: 'Tertiary 40' },
        { name: 'On Tertiary', variable: '--mat-sys-on-tertiary', description: 'Texto/iconos sobre tertiary', tone: 'Tertiary 100' },
        { name: 'Tertiary Container', variable: '--mat-sys-tertiary-container', description: 'Contenedor con color terciario', tone: 'Tertiary 90' },
        { name: 'On Tertiary Container', variable: '--mat-sys-on-tertiary-container', description: 'Texto/iconos sobre tertiary container', tone: 'Tertiary 10' },
        { name: 'Tertiary Fixed', variable: '--mat-sys-tertiary-fixed', description: 'Tertiary fijo (no cambia con tema)', tone: 'Tertiary 90' },
        { name: 'Tertiary Fixed Dim', variable: '--mat-sys-tertiary-fixed-dim', description: 'Tertiary fijo atenuado', tone: 'Tertiary 80' },
        { name: 'On Tertiary Fixed', variable: '--mat-sys-on-tertiary-fixed', description: 'Texto sobre tertiary fixed', tone: 'Tertiary 10' },
        { name: 'On Tertiary Fixed Variant', variable: '--mat-sys-on-tertiary-fixed-variant', description: 'Variante de texto sobre tertiary fixed', tone: 'Tertiary 30' },
      ]
    },
    {
      title: 'Colores de Error',
      icon: 'error',
      tokens: [
        { name: 'Error', variable: '--mat-sys-error', description: 'Color para estados de error', tone: 'Error 40' },
        { name: 'On Error', variable: '--mat-sys-on-error', description: 'Texto/iconos sobre error', tone: 'Error 100' },
        { name: 'Error Container', variable: '--mat-sys-error-container', description: 'Contenedor con color de error', tone: 'Error 90' },
        { name: 'On Error Container', variable: '--mat-sys-on-error-container', description: 'Texto/iconos sobre error container', tone: 'Error 10' },
      ]
    },
    {
      title: 'Superficies',
      icon: 'layers',
      tokens: [
        { name: 'Surface', variable: '--mat-sys-surface', description: 'Superficie base', tone: 'Neutral 98' },
        { name: 'On Surface', variable: '--mat-sys-on-surface', description: 'Texto/iconos sobre surface', tone: 'Neutral 10' },
        { name: 'Surface Dim', variable: '--mat-sys-surface-dim', description: 'Superficie atenuada', tone: 'Neutral 87' },
        { name: 'Surface Bright', variable: '--mat-sys-surface-bright', description: 'Superficie brillante', tone: 'Neutral 98' },
        { name: 'Surface Container Lowest', variable: '--mat-sys-surface-container-lowest', description: 'Contenedor más bajo', tone: 'Neutral 100' },
        { name: 'Surface Container Low', variable: '--mat-sys-surface-container-low', description: 'Contenedor bajo', tone: 'Neutral 96' },
        { name: 'Surface Container', variable: '--mat-sys-surface-container', description: 'Contenedor estándar', tone: 'Neutral 94' },
        { name: 'Surface Container High', variable: '--mat-sys-surface-container-high', description: 'Contenedor alto', tone: 'Neutral 92' },
        { name: 'Surface Container Highest', variable: '--mat-sys-surface-container-highest', description: 'Contenedor más alto', tone: 'Neutral 90' },
      ]
    },
    {
      title: 'Variantes de Superficie',
      icon: 'texture',
      tokens: [
        { name: 'Surface Variant', variable: '--mat-sys-surface-variant', description: 'Variante de superficie', tone: 'Neutral Variant 90' },
        { name: 'On Surface Variant', variable: '--mat-sys-on-surface-variant', description: 'Texto/iconos sobre surface variant', tone: 'Neutral Variant 30' },
        { name: 'Surface Tint', variable: '--mat-sys-surface-tint', description: 'Tinte de superficie', tone: 'Primary 40' },
      ]
    },
    {
      title: 'Fondos',
      icon: 'wallpaper',
      tokens: [
        { name: 'Background', variable: '--mat-sys-background', description: 'Color de fondo principal', tone: 'Neutral 98' },
        { name: 'On Background', variable: '--mat-sys-on-background', description: 'Texto/iconos sobre background', tone: 'Neutral 10' },
      ]
    },
    {
      title: 'Contornos y Sombras',
      icon: 'border_style',
      tokens: [
        { name: 'Outline', variable: '--mat-sys-outline', description: 'Bordes y divisores', tone: 'Neutral Variant 50' },
        { name: 'Outline Variant', variable: '--mat-sys-outline-variant', description: 'Variante de bordes', tone: 'Neutral Variant 80' },
        { name: 'Shadow', variable: '--mat-sys-shadow', description: 'Color de sombras', tone: 'Neutral 0' },
        { name: 'Scrim', variable: '--mat-sys-scrim', description: 'Overlay oscuro', tone: 'Neutral 0' },
      ]
    },
    {
      title: 'Colores Inversos',
      icon: 'invert_colors',
      tokens: [
        { name: 'Inverse Surface', variable: '--mat-sys-inverse-surface', description: 'Superficie inversa', tone: 'Neutral 20' },
        { name: 'Inverse On Surface', variable: '--mat-sys-inverse-on-surface', description: 'Texto sobre superficie inversa', tone: 'Neutral 95' },
        { name: 'Inverse Primary', variable: '--mat-sys-inverse-primary', description: 'Primary inverso', tone: 'Primary 80' },
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
