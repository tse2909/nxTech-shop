import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { getProductbyId, getCalculatedCartList } from '../../ngrx/reducers';
import { addToCart } from '../../ngrx/actions/products';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  cart;
  actions$ = new Subject<Action>();
  private selectedId: number;
  private sub: any;
  addToCartAction = addToCart;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: Store<any>) {
    this.actions$.subscribe(store);
    this.sub = this.route.params.subscribe(params => {
      this.selectedId = params['id']; // (+) converts string 'id' to a number
      console.log(this.selectedId);
      // In a real app: dispatch action to load the details here.
    });
    this.product = this.store.let(getProductbyId(this.selectedId));
    this.cart = store.let(getCalculatedCartList());
    console.log(this.product);
    // this.product.subscribe(k => console.log(k));
  }

  ngOnInit() {

  }
  addToCartOutput($event) {
    setTimeout(() => {
      this.actions$.next(this.addToCartAction($event));
      this.cart = this.store.let(getCalculatedCartList());
    }, 300);
  }

  gotoBrand($event) {
    this.router.navigate(['/pages/brand', $event])

  }
}
