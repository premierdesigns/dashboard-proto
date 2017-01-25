import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(allOrders: any, args?: any): any {
    if (!allOrders) {
      return null;
    }

    if (!args) {
      return allOrders;
    }

    return allOrders.filter(order => order.orderType === args);


    // if (value.length === 0) {
    //   return value;
    // }
    //
    // let resultArrya = [];
    // for (let item of value) {
    //   if (item.orderType.match(args)) {
    //
    //   }
    // }
  }

}

