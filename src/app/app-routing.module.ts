import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: { title: 'Rastgele Urunler' }},// url boşsa gidece yeri belirten yol ve title 
  { path: 'home', component: CenterComponent, data: { title: 'Rastgele Urunler' } },//url home ise hangi componente gideceğini belirten yol
  { path: 'categories/:url', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:url', component: DetailsComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full', data: { title: 'Rastgele Urunler' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
