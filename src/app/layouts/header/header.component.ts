import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingCart, Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);
  readonly cartIcon = ShoppingCart;
  readonly menuIcon = Menu;
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
}
