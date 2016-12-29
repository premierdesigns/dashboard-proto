import { Component, OnInit, Input } from '@angular/core';
import { Jeweler } from '.././jeweler';

@Component({
  selector: 'pd-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.less']
})
export class BillingInfoComponent implements OnInit {
  @Input() jeweler: Jeweler;
  @Input('master') masterName: any;

  constructor() { }

  ngOnInit() {
  }

}
