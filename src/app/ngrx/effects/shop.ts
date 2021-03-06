import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import 'rxjs';

import {REQUEST_PRODUCTS, RECEIVED_PRODUCTS} from '../reducers/products';
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from '../reducers/cart';
// import * as shop from '../api/shop';
import { NxProductService } from '../../services';

@Injectable()
export class ShopEffects {

    constructor(
        private _productService: NxProductService,
        private _actions$: Actions,
        private _store: Store<any>) { 
            this._productService.getProduct().map(res => console.log(res))
        }

    

    @Effect()
    load$ = this._actions$
        .ofType(REQUEST_PRODUCTS)
        .map(action => JSON.stringify(action.payload))
        .switchMap(() => this._productService.getProduct())
        .map(res => {
            return {
                type: RECEIVED_PRODUCTS,
                payload: res
            };
        });

    @Effect()
    checkout$ = this._actions$
        .ofType(CHECKOUT_REQUEST)
        .map(action => JSON.stringify(action.payload))
        // .switchMap(payload => shop.default.buyProducts(payload, 300))
        .map(res => {
            return {
                type: CHECKOUT_SUCCESS,
                payload: res
            };
        });
}