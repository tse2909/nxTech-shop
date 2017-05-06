import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { routing }       from './product-detail.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    routing
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
