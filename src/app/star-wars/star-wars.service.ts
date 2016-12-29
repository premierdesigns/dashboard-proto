import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class StarWarsService {

  constructor(private _http: Http) {
  }

  swapiRequest: string = '/';

  getSwapi() {
    return this._http.get('http://swapi.co/api' + this.swapiRequest)
      .map(res => res.json())
  }

  postJSON() {

  }

}
