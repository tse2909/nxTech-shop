import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NxProductService } from '../../services/nx-product';
@Component({
  selector: 'app-nx-product-list',
  templateUrl: './nx-product-list.component.html',
  styleUrls: ['./nx-product-list.component.scss']
})
export class NxProductListComponent implements OnInit {
  @Input() products: any;
  @Input() title: any;
  @Output() gotoDetail = new EventEmitter<any>();

  constructor(private _service: NxProductService) {
    // this._service.getProduct().subscribe(k => {this.products = k; console.log(k)});

  }

  ngOnInit() {
    if(!this.title){
      this.title ="ALL ITEMS"
    }
  }

}
