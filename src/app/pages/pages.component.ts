import { Component, OnInit, OnChanges, Renderer } from '@angular/core';
import { Routes } from '@angular/router';

import { NxMenuService } from '../services';
import { PAGES_MENU } from './pages.menu';
import { Store } from '@ngrx/store';
import { getCalculatedCartList } from '../ngrx/reducers';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnChanges  {
  cart: any;
  constructor(private _menuService: NxMenuService, private store: Store<any>, private renderer: Renderer) { 
    this.cart = this.store.let(getCalculatedCartList());
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  ngOnChanges() {
      this.cart = this.store.let(getCalculatedCartList());
    }
   onDeactivate() {
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }
}
