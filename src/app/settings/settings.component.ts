import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  title = "Settings";

  constructor() { }

  ngOnInit() {
  }

}
