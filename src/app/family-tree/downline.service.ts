import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DownlineService {
  downline: string;
  firstLevel: string;
  secondLevel: string;
  thirdLevel: string;

  constructor( private http: Http ) { }

  loadDownline() {
    if (this.downline) {
      return Promise.resolve(this.downline);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=16&nat=us&gender=female')
        .map(res => res.json())
        .subscribe(data => {
          this.downline = data.results;
          resolve(this.downline);
        });
    });
  }

  loadFirstLevel() {
    if (this.firstLevel) {
      return Promise.resolve(this.firstLevel);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=4&nat=us&gender=female')
        .map(res => res.json())
        .subscribe(data => {
          this.firstLevel = data.results;
          resolve(this.firstLevel);
        });
    });
  }

  loadSecondLevel() {
    if (this.secondLevel) {
      return Promise.resolve(this.secondLevel);
    }

    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=64&nat=us&gender=female')
        .map(res => res.json())
        .subscribe(data => {
          this.secondLevel = data.results;
          resolve(this.secondLevel);
        });
    });
  }

}
