import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, Action } from '@ngrx/store'; 
import { Observable } from 'rxjs/Observable';
import { getProductsAsArry, getCalculatedCartList,getProductEntities, getCartCnt, getProductState } from '../../ngrx/reducers';
import { getProducts } from '../../ngrx/actions/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Observable<any[]>;
  actions$ = new Subject<Action>();
  cart: any;
  constructor(public store: Store<any>, public router : Router) {
    // this.products = this.store.let(getProductsAsArry());
    this.actions$.subscribe(store);
    this.actions$.next(getProducts());
this.cart = this.store.let(getCalculatedCartList());
this.products=this.store.let(getProductsAsArry())
this.products.subscribe(k=> console.log(k))
  }

  ngOnInit() { }

  ngAfterViewInit(){
  
    
  }
  
  gotoDetail($event){
    // console.log($event);
  this.router.navigate(['/pages/product', $event])
  }

}
