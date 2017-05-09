import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { routing }       from './checkout.routing';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule, routing, ComponentsModule
  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule { }
