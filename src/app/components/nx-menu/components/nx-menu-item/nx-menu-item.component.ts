import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nx-menu-item',
  templateUrl: './nx-menu-item.component.html',
  styleUrls: ['./nx-menu-item.component.scss']
})
export class NxMenuItemComponent implements OnInit {
  @Input() menuItem:any;
   @Input() child:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  
}
