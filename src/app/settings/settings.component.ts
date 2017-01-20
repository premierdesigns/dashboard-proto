import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

import { Jeweler } from '../jeweler-profile/jeweler';
import { JewelerService } from '../jeweler-profile/jeweler.service';

@Component({
  selector: 'pd-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  title = "Settings";
  jeweler: Jeweler;

  constructor(private jewelerService: JewelerService) { }

  ngOnInit() {
    this.jeweler = this.jewelerService.getJeweler(0) || this.jewelerService.createEmptyJeweler();
  }

}
