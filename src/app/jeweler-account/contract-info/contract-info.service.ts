import {Injectable} from '@angular/core';
import {Http, Response, Headers, Jsonp} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContractInfoService {

  constructor(private http: Http) {
  }

  getPeople() {
    return this.http.get('https://randomuser.me/api/?results=8?format=jsonp')
      .map(response => response.json());
  }

}
