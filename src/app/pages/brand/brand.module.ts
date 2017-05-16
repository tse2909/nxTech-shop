import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { routing }       from './brand.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    ComponentsModule
  ],
  declarations: [BrandComponent]
})
export class CartModule { }
