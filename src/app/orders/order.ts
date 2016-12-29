/**
 * Created by clharris on 12/15/2016.
 */

export class Order {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  payment: string;
  orderDate: string;
  orderType: string;
  orderStatus: string;
  progress: number;
  showOrders?: any[];
}
