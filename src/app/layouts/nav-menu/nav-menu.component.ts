import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {
  ToggleNavMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      navMenu.classList.toggle('hidden');
    }
  }
}
