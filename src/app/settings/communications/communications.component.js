"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CommunicationsComponent = (function () {
    function CommunicationsComponent() {
    }
    CommunicationsComponent.prototype.ngOnInit = function () {
    };
    return CommunicationsComponent;
}());
__decorate([
    core_1.Input()
], CommunicationsComponent.prototype, "jeweler", void 0);
CommunicationsComponent = __decorate([
    core_1.Component({
        selector: 'pd-communications',
        templateUrl: './communications.component.html',
        styleUrls: ['./communications.component.less']
    })
], CommunicationsComponent);
exports.CommunicationsComponent = CommunicationsComponent;
