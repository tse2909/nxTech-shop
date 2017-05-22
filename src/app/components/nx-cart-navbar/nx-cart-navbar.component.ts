import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nx-cart-navbar',
  templateUrl: './nx-cart-navbar.component.html',
  styleUrls: ['./nx-cart-navbar.component.scss']
})
export class NxCartNavbarComponent implements OnInit {
  @Input() cart: any;
  cartCount;
  constructor() { }

  ngOnInit() {
    if (this.cart == undefined) {
      this.cartCount = 0;
    } else {
      this.cartCount = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartCount += Number(this.cart[i].quantity);

      }
    }

  }
  ngOnChanges() {
    console.log(this.cart);
    if (this.cart == undefined) {
      this.cartCount = 0;
    } else {
      this.cartCount = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartCount += Number(this.cart[i].quantity);

      }
    }

  }
}
