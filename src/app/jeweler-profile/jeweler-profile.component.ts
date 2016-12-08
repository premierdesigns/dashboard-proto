import { Component, OnInit } from '@angular/core';
import {JewelerService} from "./jeweler-profile.service";

@Component({
  selector: 'pd-jeweler-profile',
  templateUrl: './jeweler-profile.component.html',
  styleUrls: ['./jeweler-profile.component.less']
})
export class JewelerProfileComponent implements OnInit {

  constructor(private jewelerService: JewelerService) { }

  ngOnInit() {

  }

}
