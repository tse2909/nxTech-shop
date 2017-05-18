import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nx-product-detail',
  templateUrl: './nx-product-detail.component.html',
  styleUrls: ['./nx-product-detail.component.scss']
})
export class NxProductDetailComponent implements OnInit {
  @Input() product: any;
  @Output() addtoCart = new EventEmitter();
  @Output() gotoBrand = new EventEmitter();
  buttonText: string = 'ADD TO BAG';
  addingCart: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

  addtoCartClick() {
    this.addingCart = !this.addingCart;
    console.log(this.addingCart);
    setTimeout(() => {
      this.addingCart = !this.addingCart;
      console.log(this.addingCart);
      let data = { id: this.product.id, quantity: 1 }
      this.addtoCart.emit(data);
    }, 1000);



  }

}
