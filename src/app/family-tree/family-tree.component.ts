import {Component, OnInit, Input} from '@angular/core';

import { MyFamilyComponent } from './my-family/my-family.component';

import { Jeweler } from '../jeweler-profile/jeweler';
import { JewelerService } from '../jeweler-profile/jeweler.service';
import { DownlineService } from './downline.service';

@Component({
  selector: 'pd-family-tree',
  entryComponents: [MyFamilyComponent],
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.less'],
  providers: [DownlineService]
})
export class FamilyTreeComponent implements OnInit {
  title = 'Family Tree';
  @Input() jeweler: Jeweler;

  public downlinePeople: any;
  public firstLevel: any;

  constructor( public downline: DownlineService) { }

  ngOnInit() {
    this.loadDownline();
    this.getFirstLevel();
  }

  loadDownline() {
    this.downline.loadDownline().then(data => {
      this.downlinePeople = data;
      console.log(this.downlinePeople);
    });
  }

  getFirstLevel() {
    this.downline.loadFirstLevel().then(data => {
      this.firstLevel = data;
      console.log(this.firstLevel);
    });
  }

}
