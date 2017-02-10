import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

import { Resource } from './resource';
import { ResourcesService } from './resources.service';
import resource = http.resource;
import * as http from "selenium-webdriver/http";

@Component({
  selector: 'pd-creative-resources',
  templateUrl: './creative-resources.component.html',
  styleUrls: ['./creative-resources.component.less'],
  providers: [ResourcesService],
  animations: [
    trigger('loadResource', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(500%)'}),
        animate('2s 2s ease-in-out')
      ])
    ])
  ]
})
export class CreativeResourcesComponent implements OnInit {
  resources: Resource[];

  constructor(private resourceService: ResourcesService) { }

  getResources(): void {
    this.resourceService.getResources().then(resources => this.resources = resources);
  }

  ngOnInit() {
    this.getResources();
  }

  mouseEnter(eventObject){
    console.log("mouse enter : " + eventObject);
  }

  mouseLeave(div : string){
    console.log('mouse leave :' + div);
  }

}
