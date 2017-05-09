import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule'
  // },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  // },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
      { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'new', loadChildren: './product-all/product-all.module#ProductAllModule', data : {type : 'ALL', filter: 'NEW'} },
      { path: 'sale', loadChildren: './product-all/product-all.module#ProductAllModule', data : {type : 'ALL', filter: 'SALE'}  },
      { path: 'product/:id', loadChildren: './product-detail/product-detail.module#ProductDetailModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
