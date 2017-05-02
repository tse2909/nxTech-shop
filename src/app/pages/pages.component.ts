import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { NxMenuService } from '../services';
import { PAGES_MENU } from './pages.menu';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private _menuService: NxMenuService,) { }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
