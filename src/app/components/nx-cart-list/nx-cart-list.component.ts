import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nx-cart-list',
  templateUrl: './nx-cart-list.component.html',
  styleUrls: ['./nx-cart-list.component.scss']
})
export class NxCartListComponent implements OnInit {
  @Input() cart;
  @Output() deleteItem = new EventEmitter();
  cartCount: number = 0;
  cartTotal: number = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.cart);
    if (this.cart == undefined) {
      this.cartCount = 0;
    } else {
      this.cartCount = 0;
      this.cartTotal = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartCount += Number(this.cart[i].quantity);
        this.cartTotal += this.cart[i].quantity * this.cart[i].price
        console.log(this.cartTotal);
      }
    }
  }

  ngOnChanges(){
     console.log(this.cart);
    if (this.cart == undefined) {
      this.cartCount = 0;
    } else {
      this.cartCount = 0;
      this.cartTotal = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartCount += Number(this.cart[i].quantity);
        this.cartTotal += this.cart[i].quantity * this.cart[i].price
        console.log(this.cartTotal);
      }
    }
  }

}
