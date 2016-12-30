import {Injectable} from '@angular/core';

import { Order } from './order';
//import { ORDERS } from './mock-orders';
import {BehaviorSubject, Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class OrderService {
  orders: Observable<Order[]>;
  private _orders: BehaviorSubject<Order[]>;
  private baseUrl: string;
  private dataStore: {  // This is where we will store our data in memory
    orders: Order[]
  };

  constructor(private http: Http) {
    this.baseUrl = 'http://www.mockaroo.com/api/generate.json?key=24395590&schema=';
    this.dataStore = { orders: [] };
    this._orders = <BehaviorSubject<Order[]>>new BehaviorSubject([]);
    this.orders = this._orders.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}Orders`).map(response => response.json()).subscribe(data => {
      this.dataStore.orders = data;
      // Push a new copy of our order list to all subscribers
      this._orders.next(Object.assign({}, this.dataStore).orders);
    }, error => console.log('Could not load orders.'));
  }

  // load(id: number | string) {
  //   this.http.get(`${this.baseUrl}/orders/${id}`).map(response => response.json()).subscribe(data => {
  //     let notFound = true;
  //
  //     this.dataStore.orders.forEach((item, index) => {
  //       if (item.id === data.id) {
  //         this.dataStore.orders[index] = data;
  //         notFound = false;
  //       }
  //     });
  //
  //     if (notFound) {
  //       this.dataStore.orders.push(data);
  //     }
  //
  //     this._orders.next(Object.assign({}, this.dataStore).orders);
  //   }, error => console.log('Could not load order.'));
  // }
  //
  // create(order: Order) {
  //   this.http.post(`${this.baseUrl}/orders`, JSON.stringify(order))
  //     .map(response => response.json()).subscribe(data => {
  //     this.dataStore.orders.push(data);
  //     this._orders.next(Object.assign({}, this.dataStore).orders);
  //   }, error => console.log('Could not create order.'));
  // }
  //
  // update(order: Order) {
  //   this.http.put(`${this.baseUrl}/orders/${order.id}`, JSON.stringify(order))
  //     .map(response => response.json()).subscribe(data => {
  //     this.dataStore.orders.forEach((t, i) => {
  //       if (t.id === data.id) { this.dataStore.orders[i] = data; }
  //     });
  //
  //     this._orders.next(Object.assign({}, this.dataStore).orders);
  //   }, error => console.log('Could not update order.'));
  // }
  //
  // remove(id: number) {
  //   this.http.delete(`${this.baseUrl}/orders/${id}`).subscribe(response => {
  //     this.dataStore.orders.forEach((t, i) => {
  //       if (t.id === id) { this.dataStore.orders.splice(i, 1); }
  //     });
  //
  //     this._orders.next(Object.assign({}, this.dataStore).orders);
  //   }, error => console.log('Could not delete order.'));
  // }

}
