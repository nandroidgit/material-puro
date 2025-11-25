import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

interface SubPanel {
  title: string;
  content: string;
}

interface Panel {
  title: string;
  description: string;
  content: string;
  subPanels?: SubPanel[];
}

@Component({
  selector: 'app-panels',
  imports: [MatExpansionModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './panels.html',
  styleUrl: './panels.css',
})
export class Panels {
  panelOpenState = false;
  step = 0;

  panels: Panel[] = [
    {
      title: 'Configuración General',
      description: 'Opciones básicas del sistema',
      content: 'Aquí puedes configurar las opciones generales de la aplicación.',
      subPanels: [
        {
          title: 'Idioma',
          content: 'Selecciona el idioma de la interfaz: Español, Inglés, Francés, Alemán.'
        },
        {
          title: 'Zona Horaria',
          content: 'Configura tu zona horaria para mostrar las fechas correctamente.'
        },
        {
          title: 'Formato de Fecha',
          content: 'Elige cómo quieres que se muestren las fechas: DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD.'
        }
      ]
    },
    {
      title: 'Notificaciones',
      description: 'Gestiona tus preferencias de notificaciones',
      content: 'Controla qué notificaciones quieres recibir y cómo.',
      subPanels: [
        {
          title: 'Email',
          content: 'Recibe notificaciones por correo electrónico sobre actualizaciones importantes.'
        },
        {
          title: 'Push',
          content: 'Activa las notificaciones push en tu navegador para recibir alertas en tiempo real.'
        },
        {
          title: 'SMS',
          content: 'Configura notificaciones por SMS para alertas críticas.'
        }
      ]
    },
    {
      title: 'Seguridad',
      description: 'Opciones de seguridad y privacidad',
      content: 'Mantén tu cuenta segura con estas opciones.',
      subPanels: [
        {
          title: 'Autenticación de Dos Factores',
          content: 'Añade una capa extra de seguridad requiriendo un código adicional al iniciar sesión.'
        },
        {
          title: 'Contraseña',
          content: 'Cambia tu contraseña regularmente para mantener tu cuenta segura.'
        },
        {
          title: 'Sesiones Activas',
          content: 'Revisa y cierra las sesiones activas en otros dispositivos.'
        },
        {
          title: 'Historial de Acceso',
          content: 'Consulta el historial de accesos a tu cuenta para detectar actividad sospechosa.'
        }
      ]
    },
    {
      title: 'Personalización',
      description: 'Personaliza tu experiencia',
      content: 'Ajusta la apariencia y el comportamiento de la aplicación.',
      subPanels: [
        {
          title: 'Tema',
          content: 'Elige entre tema claro, oscuro o automático según la hora del día.'
        },
        {
          title: 'Colores',
          content: 'Personaliza los colores principales de la interfaz.'
        }
      ]
    }
  ];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
