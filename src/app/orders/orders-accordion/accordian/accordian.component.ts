import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { AccordianTabComponent } from '../accordian-tab/accordian-tab.component';
import {Order} from "../../order";

@Component({
  selector: 'pd-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.less']
})
export class AccordianComponent implements OnInit {
  @Input() orders;
  activeOrderId = 0;

  @Input() filterOrders;

  @Output() orderSelected = new EventEmitter<any>();

  toggle(order) {
    this.isActive(order) ? this.activeOrderId = 0 : this.activeOrderId = order.id;
    this.orderSelected.emit(order);
  }

  isActive(order) {
    return order.id === this.activeOrderId;
  }

  constructor() { }

  ngOnInit() {

  }

}
