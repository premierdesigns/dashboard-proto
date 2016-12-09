import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import {OrderService} from "./order.service";

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less']
})
export class OrdersComponent implements OnInit {
  orders = [];

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  getStatus(status) {
    console.log(status);
    if (status === 'Shipped')
      return 'table-success';
    else if (status === 'Processing')
      return 'table-warning';
    else if (status === 'Errors')
      return 'table-danger';
    else if (status === 'Submitted')
      return 'table-info';

  }

}
