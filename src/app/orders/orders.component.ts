import {
  Component, OnInit, trigger, state, style, transition, animate, Pipe, PipeTransform,
  ViewChild
} from '@angular/core';

import { Order } from './order';
import { OrderService } from "./order.service";
import { AccordianComponent } from './orders-accordion/accordian/accordian.component';
import { OrdersStatsComponent } from './orders-stats/orders-stats.component';
import {OrderDetailComponent} from "./order-detail/order-detail.component";

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
  @ViewChild(OrdersStatsComponent)
  public isCollapsed = true;
  orders: Order[];
  selectedOrder: Order;

  orderFilterString: string;

  changeOrderFilter(changeTo: string) {
    console.log(changeTo);
    this.orderFilterString = changeTo;
  }

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

  orderSelected(order: Order): void {
    this.selectedOrder = order;
  }

  // sortedOrders(): Order[] {
  //   return this.orders.sort((a:Order, b: Order) => b.orderDate - a.orderDate);
  // }

}
