import {Component, OnInit, Input} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {} from '../accordian-tab/accordian-tab.component';

@Component({
  selector: 'pd-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.less']
})
export class AccordianComponent implements OnInit {
  @Input() orders;
  activeOrderId = 0;

  toggle(order) {
    this.isActive(order) ? this.activeOrderId = 0 : this.activeOrderId = order.id;
  }

  isActive(order) {
    return order.id === this.activeOrderId;
  }

  constructor() { }

  ngOnInit() {
  }

}
