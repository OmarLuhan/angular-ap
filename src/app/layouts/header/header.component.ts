import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
}
