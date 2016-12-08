import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.less']
})
export class ShowsComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
