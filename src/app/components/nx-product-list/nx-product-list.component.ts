import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NxProductService } from '../../services/nx-product';
@Component({
  selector: 'app-nx-product-list',
  templateUrl: './nx-product-list.component.html',
  styleUrls: ['./nx-product-list.component.scss']
})
export class NxProductListComponent implements OnInit, OnChanges {
  @Input() products: any;
  @Input() title: any;
  @Input() pager: any;
  @Output() gotoDetail = new EventEmitter<any>();
  @Output() setPageEmit = new EventEmitter<any>();
  constructor(private _service: NxProductService) {
    // this._service.getProduct().subscribe(k => {this.products = k; console.log(k)});

  }

  ngOnInit() {
    if (!this.title) {
      this.title = "ALL ITEMS"
    }
    console.log(this.pager);
  }

  ngOnChanges() {
    console.log(this.products);
  }

  setPage($event) {
    console.log($event);
    this.setPageEmit.emit($event);
  }

}
