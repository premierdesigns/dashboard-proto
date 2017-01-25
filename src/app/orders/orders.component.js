"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var orders_stats_component_1 = require("./orders-stats/orders-stats.component");
var OrdersComponent = (function () {
    function OrdersComponent(orderService) {
        this.orderService = orderService;
        this.title = 'Orders';
        this.isCollapsed = true;
    }
    OrdersComponent.prototype.changeOrderFilter = function (changeTo) {
        console.log(changeTo);
        this.orderFilterString = changeTo;
    };
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders().then(function (orders) { return _this.orders = orders; });
        console.log(this.orders);
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.orders = this.orderService.orders; // subscribe to the entire collection
        this.orderService.loadAll(); // load all the orders
    };
    OrdersComponent.prototype.getStatus = function (status) {
        console.log(status);
        if (status === 'Shipped')
            return 'success';
        else if (status === 'Processing')
            return 'warning';
        else if (status === 'Errors')
            return 'danger';
        else if (status === 'Submitted')
            return 'info';
    };
    OrdersComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
    };
    return OrdersComponent;
}());
__decorate([
    core_1.ViewChild(orders_stats_component_1.OrdersStatsComponent)
], OrdersComponent.prototype, "title", void 0);
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'pd-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.less'],
        providers: [order_service_1.OrderService],
        animations: [
            core_1.trigger('showProgress', [
                core_1.state("in", core_1.style({
                    opacity: 1,
                    width: '*'
                })),
                core_1.transition(':enter', [
                    core_1.style({
                        opacity: 0,
                        width: '0'
                    }),
                    core_1.animate('2s 500ms ease-in-out')
                ])
            ])
        ]
    })
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
