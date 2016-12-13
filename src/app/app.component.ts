import { Component } from '@angular/core';

@Component({
  selector: 'pd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pd works!';
  sideBarColor: string;
  constructor() {
    this.sideBarColor = 'purple';
  }
}
