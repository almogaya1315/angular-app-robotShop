import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - ROBOTS" },
  // { path: 'catalog/:filter', component: CatalogComponent, title: "Catalog - ROBOTS" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - ROBOTS" },
  { path: 'cart', component: CartComponent, title: "Cart - ROBOTS" },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
