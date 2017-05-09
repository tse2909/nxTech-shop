import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getProductsAsArry, getCalculatedCartList, getProductEntities, getCartCnt, getProductState } from '../../ngrx/reducers';
import { getProducts } from '../../ngrx/actions/products';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {
  products: Observable<any[]>;
  actions$ = new Subject<Action>();
  data; brandProducts;
  brandProductList;

  sortedData;
  title;
  constructor(public store: Store<any>, public router: Router, public route: ActivatedRoute) {
    // this.products = this.store.let(getProductsAsArry());
    this.actions$.subscribe(store);
    this.actions$.next(getProducts());

    this.products = this.store.let(getProductsAsArry());

    this.products.subscribe(k => this.brandProducts = k);
    this.route
      .data
      .subscribe(v => { this.data = v; console.log(this.data) });
    if (this.data.type === 'ALL') {
      if (this.data.filter === 'HOT') {
        this.brandProductList = this.brandProducts.sort(function (a, b) {
          return b.total_sales - a.total_sales
        })
        this.sortedData = this.brandProductList;
        this.title = "HOT ITEM"
      } else if (this.data.filter === 'NEW') {
        this.brandProductList = this.brandProducts.sort(function (a, b) {
          return b.id - a.id
        })
        this.sortedData = this.brandProductList;
        this.title = "NEW ITEM"
      } else if (this.data.filter === 'SALE') {
        this.brandProductList = this.brandProducts.filter(k => k.on_sale !== false)
        this.sortedData = this.brandProductList;
        this.title = "SALE ITEM"
      }
    }
    setInterval(() => {
      if (this.data.type === 'ALL') {
        if (this.data.filter === 'HOT') {
          this.brandProductList = this.brandProducts.sort(function (a, b) {
            return b.total_sales - a.total_sales
          })
          this.sortedData = this.brandProductList;
          this.title = "HOT ITEM"
        } else if (this.data.filter === 'NEW') {
          this.brandProductList = this.brandProducts.sort(function (a, b) {
            return b.id - a.id
          })
          this.sortedData = this.brandProductList;
          this.title = "NEW ITEM"
        } else if (this.data.filter === 'SALE') {
          this.brandProductList = this.brandProducts.filter(k => k.on_sale !== false)
          this.sortedData = this.brandProductList;
          this.title = "SALE ITEM"
        }
      }
    }, 2000)



  }

  ngOnInit() {
  }
  gotoDetail($event) {
    console.log($event);
    this.router.navigate(['/pages/product', $event])
  }
}
