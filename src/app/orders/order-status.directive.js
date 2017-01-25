"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrderStatusDirective = (function () {
    function OrderStatusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // renderer.setElementClass(el.nativeElement, 'list-group-item-success', true);
    }
    Object.defineProperty(OrderStatusDirective.prototype, "pdOrderStatus", {
        set: function (orderStatus) {
            if (orderStatus === 'Shipped') {
                console.log("order has shipped");
                this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-success', true);
            }
            else if (orderStatus === 'Submitted') {
                console.log("order has been submitted to PDI");
                this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-info', true);
            }
            else if (orderStatus === 'Errors') {
                console.log("order has errors, please fix them");
                this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-danger', true);
            }
            else if (orderStatus === 'Processing') {
                console.log("order has is being processed");
                this.renderer.setElementClass(this.el.nativeElement, 'list-group-item-warning', true);
            }
            else if (orderStatus === 'Open') {
                console.log("order is open, you need to do something with it.");
            }
        },
        enumerable: true,
        configurable: true
    });
    return OrderStatusDirective;
}());
__decorate([
    core_1.Input()
], OrderStatusDirective.prototype, "pdOrderStatus", null);
OrderStatusDirective = __decorate([
    core_1.Directive({
        selector: '[pdOrderStatus]'
    })
], OrderStatusDirective);
exports.OrderStatusDirective = OrderStatusDirective;
