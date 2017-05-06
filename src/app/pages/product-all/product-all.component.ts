import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getProductsAsArry, getCalculatedCartList, getProductEntities, getCartCnt, getProductState } from '../../ngrx/reducers';
import { getProducts } from '../../ngrx/actions/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {
  products: Observable<any[]>;
  actions$ = new Subject<Action>();

  constructor(public store: Store<any>, public router: Router) {
    // this.products = this.store.let(getProductsAsArry());
    this.actions$.subscribe(store);
    this.actions$.next(getProducts());

    this.products = this.store.let(getProductsAsArry())
  }

  ngOnInit() {
  }
  gotoDetail($event){
  console.log($event);
  this.router.navigate(['/pages/product', $event ])
  }
}
