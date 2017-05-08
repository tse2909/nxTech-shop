import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NxMenuComponent, NxMenuItemComponent, NxPageTopComponent,NxCartNavbarComponent, NxProductListComponent, NxProductDetailComponent, NxCartListComponent, NxPageFooterComponent } from '../components';
import { NxMenuService, NxProductService } from '../services';
// import { CartNavbarComponent } from './cart-navbar/cart-navbar.component';
// import { NxCartNavbarComponent } from './nx-cart-navbar/nx-cart-navbar.component';
// import { NxPageFooterComponent } from './nx-page-footer/nx-page-footer.component';
// import { NxCartListComponent } from './nx-cart-list/nx-cart-list.component';
// import { NxProductDetailComponent } from './nx-product-detail/nx-product-detail.component';

const NX_COMPONENTS = [
  NxMenuComponent,
  NxMenuItemComponent,
  NxPageTopComponent,
  NxProductListComponent,
  NxProductDetailComponent,
  NxCartNavbarComponent,
  NxCartListComponent,
  NxPageFooterComponent
];

const NX_DIRECTIVES = [

];

const NX_PIPES = [

];

const NX_SERVICES = [
  NxMenuService,
  NxProductService
];

const NX_VALIDATORS = [

];

@NgModule({
  declarations: [
    ...NX_PIPES,
    ...NX_DIRECTIVES,
    ...NX_COMPONENTS,
    
    // NxProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    ...NX_PIPES,
    ...NX_DIRECTIVES,
    ...NX_COMPONENTS
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ComponentsModule,
      providers: [
        ...NX_VALIDATORS,
        ...NX_SERVICES
      ],
    };
  }
 }
