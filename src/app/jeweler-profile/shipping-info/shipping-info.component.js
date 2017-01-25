"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ShippingInfoComponent = (function () {
    function ShippingInfoComponent() {
    }
    ShippingInfoComponent.prototype.ngOnInit = function () {
    };
    ShippingInfoComponent.prototype.hasInfo = function (info) {
        if (info === '') {
            return false;
        }
        else {
            return true;
        }
    };
    return ShippingInfoComponent;
}());
__decorate([
    core_1.Input()
], ShippingInfoComponent.prototype, "jeweler", void 0);
__decorate([
    core_1.Input('master')
], ShippingInfoComponent.prototype, "masterName", void 0);
ShippingInfoComponent = __decorate([
    core_1.Component({
        selector: 'pd-shipping-info',
        templateUrl: './shipping-info.component.html',
        styleUrls: ['./shipping-info.component.less']
    })
], ShippingInfoComponent);
exports.ShippingInfoComponent = ShippingInfoComponent;
