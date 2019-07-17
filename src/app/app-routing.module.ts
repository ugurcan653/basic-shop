import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', component: CenterComponent, pathMatch:'full',data:{title:'Rastgele Urunler'} },
  { path: 'home', component: CenterComponent,data:{title:'Rastgele Urunler'}},
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
