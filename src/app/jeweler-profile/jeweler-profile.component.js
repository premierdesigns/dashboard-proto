"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var JewelerProfileComponent = (function () {
    function JewelerProfileComponent(jewelerService) {
        this.jewelerService = jewelerService;
        this.title = 'Profile';
        this.isEdit = true;
        this.subscriptions = [];
    }
    JewelerProfileComponent.prototype.ngOnInit = function () {
        this.jeweler = this.jewelerService.getJeweler(0) || this.jewelerService.createEmptyJeweler();
    };
    JewelerProfileComponent.prototype.onSubmit = function (jeweler) {
        if (!this.isEdit) {
            this.jewelerService.createJeweler(jeweler);
        }
        else {
            this.jewelerService.updateJeweler(jeweler);
        }
        //this.navigateBack();
    };
    JewelerProfileComponent.prototype.ngOnDestroy = function () {
        // unsubscribe from all of our subscriptions or we will have memory leaks
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
    };
    return JewelerProfileComponent;
}());
JewelerProfileComponent = __decorate([
    core_1.Component({
        selector: 'pd-jeweler-profile',
        templateUrl: './jeweler-profile.component.html',
        styleUrls: ['./jeweler-profile.component.less']
    })
], JewelerProfileComponent);
exports.JewelerProfileComponent = JewelerProfileComponent;
