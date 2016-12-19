import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "./star-wars.service";
import {error} from "util";

@Component({
  selector: 'pd-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.less'],
  providers: [StarWarsService]
})
export class StarWarsComponent implements OnInit {
  getData: string;
  peopleData: string;

  constructor(private _starWarsService: StarWarsService) { }

  ngOnInit() {
  }

  onTestGet() {
    this._starWarsService.getSwapi()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert('error getting Swapi data'),
        () => console.log(this.getData)
      );
  }

  getPeople() {

  }

}
