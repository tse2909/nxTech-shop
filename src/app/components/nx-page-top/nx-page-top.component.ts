import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nx-page-top',
  templateUrl: './nx-page-top.component.html',
  styleUrls: ['./nx-page-top.component.scss']
})
export class NxPageTopComponent implements OnInit {
  @Input() cart: any;
  constructor() { }

  ngOnInit() {
  }

}
