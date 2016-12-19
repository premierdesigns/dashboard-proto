import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';

@Component({
  selector: 'pd-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.less']
})
export class ShowsComponent implements OnInit {
  shows = [];
  title: string = 'My first angular2-google-maps project';
  lat: number = 32.889351;
  lng: number = -96.978761;

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.shows = this.showsService.getShows();
  }

}
