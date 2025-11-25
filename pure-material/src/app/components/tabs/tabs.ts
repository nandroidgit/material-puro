import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

interface TabContent {
  label: string;
  icon: string;
  title: string;
  content: string;
  items?: string[];
}

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, MatButtonModule, MatIconModule, MatCardModule, RouterLink],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {
  tabs: TabContent[] = [
    {
      label: 'Inicio',
      icon: 'home',
      title: 'Bienvenido',
      content: 'Esta es la pestaña de inicio. Aquí puedes encontrar información general sobre la aplicación.',
      items: [
        'Explorar funcionalidades',
        'Ver tutoriales',
        'Acceder a recursos'
      ]
    },
    {
      label: 'Proyectos',
      icon: 'folder',
      title: 'Mis Proyectos',
      content: 'Gestiona todos tus proyectos desde aquí.',
      items: [
        'Proyecto Alpha - En desarrollo',
        'Proyecto Beta - Completado',
        'Proyecto Gamma - Planificación',
        'Proyecto Delta - En revisión'
      ]
    },
    {
      label: 'Tareas',
      icon: 'task',
      title: 'Lista de Tareas',
      content: 'Organiza tus tareas pendientes y completadas.',
      items: [
        'Revisar documentación',
        'Actualizar componentes',
        'Hacer pruebas unitarias',
        'Desplegar a producción'
      ]
    },
    {
      label: 'Configuración',
      icon: 'settings',
      title: 'Configuración',
      content: 'Personaliza tu experiencia en la aplicación.',
      items: [
        'Preferencias de usuario',
        'Temas y apariencia',
        'Notificaciones',
        'Seguridad y privacidad'
      ]
    }
  ];
}
