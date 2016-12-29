import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[pdOrderStatus]'
})
export class OrderStatusDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementClass(el.nativeElement, 'list-group-item-success', true);
  }

  @Input()
  set pdOrderStatus(orderStatus:string){
    if (orderStatus === 'Shipped') {
      console.log("order has shipped");
      this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-success', true);
    } else if (orderStatus === 'Submitted') {
      console.log("order has been submitted to PDI");
      this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-info', true);
    } else if (orderStatus === 'Errors') {
      console.log("order has errors, please fix them");
      this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-danger', true);
    } else if (orderStatus === 'Processing') {
      console.log("order has is being processed");
      this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-warning', true);
    } else if (orderStatus === 'Open') {
      console.log("order is open, you need to do something with it.");
    }
  }

}
