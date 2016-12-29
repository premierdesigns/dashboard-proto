import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Order } from './order';
import { OrderService } from "./order.service";

import { OrderStatusDirective } from './order-status.directive';
import {count} from "rxjs/operator/count";

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {
  title = 'Orders';
  public isCollapsed = true;
  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService ) { }

  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }

  ngOnInit() {
    this.getOrders();
  }

  getStatus(status) {
    console.log(status);
    if (status === 'Shipped')
      return 'success';
    else if (status === 'Processing')
      return 'warning';
    else if (status === 'Errors')
      return 'danger';
    else if (status === 'Submitted')
      return 'info';
  }

  // typeCount(orderType): void {
  //   return count
  // }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
