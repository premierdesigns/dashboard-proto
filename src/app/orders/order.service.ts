import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Order } from './order';
import { ORDERS } from './mock-orders';

@Injectable()
export class OrderService {
  mockOrders: string;

  getOrders(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }

  constructor( private http: Http ) {
  }

}
