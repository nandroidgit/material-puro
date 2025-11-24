import { Component, Inject, Renderer2 } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isDarkTheme = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const htmlElement = this.document.documentElement;

    if (this.isDarkTheme) {
      this.renderer.addClass(htmlElement, 'dark-theme');
    } else {
      this.renderer.removeClass(htmlElement, 'dark-theme');
    }
  }
}
