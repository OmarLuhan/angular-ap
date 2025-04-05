import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { UserComponent } from '@pages/user/user.component';
import { ProductComponent } from '@pages/product/product.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'products', component: ProductComponent },
];
