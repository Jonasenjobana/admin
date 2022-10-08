import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productInfo', 
    loadChildren: () => import('./module/product-info/product-info.module').then(x => x.ProductInfoModule)
  },
  {
    path: 'product', 
    loadChildren: () => import('./module/product/product.module').then(x => x.ProductModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(x => x.HomeModule)
  },
  {
    path: '**', 
    loadChildren: () => import('./module/home/home.module').then(x => x.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
