import { Component, OnInit, trigger, state, style, transition, animate, Pipe, PipeTransform } from '@angular/core';

import { Order } from './order';
import { OrderService } from "./order.service";
import {} from './orders-accordion/accordian/accordian.component';

@Component({
  selector: 'pd-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.less'],
  providers: [OrderService],
  animations: [
    trigger('showProgress', [
      state("in", style({
        opacity: 1,
        width: '*'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          width: '0'
        }),
        animate('2s 500ms ease-in-out')
      ])
    ])
  ]
})

export class OrdersComponent implements OnInit {
  title = 'Orders';
  public isCollapsed = true;
  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService ) { }

  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
    console.log(this.orders);
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

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
