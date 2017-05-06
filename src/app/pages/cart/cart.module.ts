import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { routing }       from './cart.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    ComponentsModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
