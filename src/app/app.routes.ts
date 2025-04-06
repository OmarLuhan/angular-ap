import { Routes } from '@angular/router';
import { StoreComponent } from '@app/pages/store/store.component';
import { UserComponent } from '@app/pages/admin/user/user.component';
import { ProductComponent } from '@app/pages/admin/product/product.component';
export const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'users', component: UserComponent },
  { path: 'products', component: ProductComponent },
];
