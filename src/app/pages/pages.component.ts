import { Component, OnInit } from '@angular/core';
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
export class PagesComponent implements OnInit {
  cart: any;
  constructor(private _menuService: NxMenuService, private store: Store<any>) { 
    this.cart = this.store.let(getCalculatedCartList());
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
