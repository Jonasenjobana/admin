import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductInfoRoutingModule } from './product-info-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    DetailComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProductInfoRoutingModule
  ]
})
export class ProductInfoModule { }
