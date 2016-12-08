import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Jeweler} from "./jeweler";

@Injectable()
export class JewelerService {
  private jewelers: Jeweler[];
  private jewelerApiUrl = 'https://portal-dd4f7.firebaseio.com';
  jewelersChanged = new EventEmitter<Jeweler[]>();
  constructor(private http: Http) { }

  getJeweler(id: number) {
    this.getJewelers();
    return this.jewelers[id];
  }

  createJeweler(jeweler: Jeweler) {
    this.jewelers.push(jeweler);
    this.saveJewelers();
  }

  updateJeweler(oldJeweler: Jeweler, newJeweler: Jeweler) {
    this.jewelers[this.jewelers.indexOf(oldJeweler)] = newJeweler;
    this.saveJewelers();
  }

  deleteJeweler(jeweler: Jeweler) {
    this.jewelers.splice(this.jewelers.indexOf(jeweler), 1);
    this.saveJewelers();
  }

  getJewelers() {
    return this.http.get(this.jewelerApiUrl + '/jewelers.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Jeweler[]) => {
          this.jewelers = data;
          this.jewelersChanged.emit(this.jewelers);
        }
      );
  }

  saveJewelers() {
    const body = JSON.stringify(this.jewelers);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.jewelerApiUrl + '/jewelers.json', body, { headers: headers });
  }
}
