import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NxMenuComponent, NxMenuItemComponent, NxPageTopComponent, NxProductListComponent } from '../components';
import { NxMenuService, NxProductService } from '../services';

const NX_COMPONENTS = [
  NxMenuComponent,
  NxMenuItemComponent,
  NxPageTopComponent,
  NxProductListComponent
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
    ...NX_COMPONENTS
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
