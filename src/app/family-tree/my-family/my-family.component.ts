import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import {Jeweler} from "../../jeweler-profile/jeweler";

import { DownlineService } from '../downline.service';

@Component({
  selector: 'pd-my-family',
  templateUrl: './my-family.component.html',
  styleUrls: ['./my-family.component.less'],
  animations: [
    trigger('createBubble', [
      state("in", style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('1s ' + (Math.floor((Math.random() * 400) + 100)) + 'ms ease-in')
      ])
    ])
  ]
})
export class MyFamilyComponent implements OnInit {
  @Input() jeweler: Jeweler;
  @Input('downlinePeople') downlinePeople: any;
  @Input('firstLevel') firstLevel: any;
  @Input('secondLevel') secondLevel: any;

  constructor() { }

  ngOnInit() {
  }

}
