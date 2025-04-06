import { Component } from '@angular/core';
import { HeaderComponent } from '@app/layouts/header/header.component';
import { FooterComponent } from '@layouts/footer/footer.component';
@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
