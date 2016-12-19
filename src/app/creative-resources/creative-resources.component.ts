import { Component, OnInit } from '@angular/core';

import { Resource } from './resource';
import { ResourcesService } from './resources.service';
import resource = http.resource;

@Component({
  selector: 'pd-creative-resources',
  templateUrl: './creative-resources.component.html',
  styleUrls: ['./creative-resources.component.less'],
  providers: [ResourcesService]
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

}
