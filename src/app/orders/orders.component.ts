import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';

import { Order } from './order';
import { OrderService } from "./order.service";

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {
  title = 'Orders';

  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) {

  }

  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
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

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
