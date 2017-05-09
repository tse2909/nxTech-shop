import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { routing }       from './pages.routing';
import { ComponentsModule } from '../components/components.module';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { CartComponent } from './cart/cart.component';
// import { ProductAllComponent } from './product-all/product-all.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  imports: [
    CommonModule,routing,ComponentsModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
