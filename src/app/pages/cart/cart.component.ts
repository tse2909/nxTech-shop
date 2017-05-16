import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { getCalculatedCartList } from '../../ngrx/reducers';
import { removeItem } from '../../ngrx/actions/products';
import { updateItem } from '../../ngrx/actions/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart;
  actions$ = new Subject<Action>();
  constructor(private store: Store<any>) {
    this.actions$.subscribe(store);
    this.cart = this.store.let(getCalculatedCartList());
  }

  ngOnInit() {
  }
  
  deleteItem($event){
  this.actions$.next(removeItem($event));
  this.cart= this.store.let(getCalculatedCartList());
  }

  changeQty($event){
    this.actions$.next(updateItem($event));
  }
}
