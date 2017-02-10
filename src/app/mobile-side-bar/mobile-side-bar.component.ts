import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'pd-mobile-side-bar',
  templateUrl: './mobile-side-bar.component.html',
  styleUrls: ['./mobile-side-bar.component.less'],
  host: {
    class: "ui vertical menu"
  }
})
export class MobileSideBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
