import {Component, OnInit, Input} from '@angular/core';

import { Jeweler } from '../../jeweler-profile/jeweler';

@Component({
  selector: 'pd-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.less']
})
export class CommunicationsComponent implements OnInit {
  @Input() jeweler: Jeweler;

  constructor() {
  }

  ngOnInit() {
  }

}
