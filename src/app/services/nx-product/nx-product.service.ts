import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { getCalculatedCartList } from '../../ngrx/reducers';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class NxProductService {

  rooturl = "https://sandora-api.herokuapp.com";

  constructor(public http: Http) {
    console.log('Hello ImageService Provider');
    this.http = http;
  }

  getProduct() {
    let headers = new Headers();
    return this.http.get(this.rooturl + "/getProducts", )
      .do((res: Response) => console.log(res))
      .map((res: Response) => res.json().body)
      .map((res) => JSON.parse(res))
  }

  getProductEffect() {
    let headers = new Headers();
    return this.http.get(this.rooturl + "/getProducts", )
      .do((res: Response) => console.log(res))
      .map((res: Response) => res.json().body)
      .map((res) => JSON.parse(res)).subscribe()
  }

  postOrders(data) {
    let headers = new Headers();
    return this.http.post(this.rooturl + "/postOrders", JSON.stringify(data), { headers: headers }).map(k => console.log(k))
  }

}
