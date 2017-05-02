import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { GlobalState } from './global.state';

import { cartReducer } from './ngrx/reducers/cart';
import { productsReducer } from './ngrx/reducers/products';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShopEffects } from './ngrx/effects/shop';

// import { NxMenuComponent } from './components/nx-menu/nx-menu.component';
// import { NxMenuItemComponent } from './components/nx-menu/components/nx-menu-item/nx-menu-item.component';
// import { NxPageTopComponent } from './components/nx-page-top/nx-page-top.component';

import { PagesModule } from './pages/pages.module';

const APP_PROVIDERS = [
  GlobalState
];

@NgModule({
  declarations: [
    AppComponent,
    // NxMenuComponent,
    // NxMenuItemComponent,
    // NxPageTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    PagesModule,
    ComponentsModule.forRoot(),
    StoreModule.provideStore({
      cart: cartReducer,
      product: productsReducer,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(ShopEffects)
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
