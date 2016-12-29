import {Component, OnInit, Input} from '@angular/core';
import { Jeweler } from '.././jeweler';

@Component({
  selector: 'pd-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.less']
})
export class ShippingInfoComponent implements OnInit {
  @Input() jeweler: Jeweler;
  @Input('master') masterName: any;

  constructor() { }

  ngOnInit() {
  }

  hasInfo(info) {
    if(info === ''){
      return false;
    } else {
      return true;
    }
  }

}
