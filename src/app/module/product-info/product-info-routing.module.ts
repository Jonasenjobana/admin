import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product-info.component'
import { CreateComponent } from './components/create/create.component'
import { DetailComponent } from './components/detail/detail.component'
import { EditComponent } from './components/edit/edit.component'
const routes: Routes = [
  {path: 'detail', component: DetailComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit',  component: EditComponent},
  {path: 'manage', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductInfoRoutingModule { }
