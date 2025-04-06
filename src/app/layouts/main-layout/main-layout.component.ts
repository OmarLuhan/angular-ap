import { Component } from '@angular/core';
import { NavMenuComponent } from '@layouts/nav-menu/nav-menu.component';
import { FooterComponent } from '@layouts/footer/footer.component';
@Component({
  selector: 'app-main-layout',
  imports: [NavMenuComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
