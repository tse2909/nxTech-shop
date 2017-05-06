import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAllComponent } from './product-all.component';
import { routing }       from './product-all.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule, routing, ComponentsModule
  ],
  declarations: [ProductAllComponent]
})
export class ProductAllModule { }
