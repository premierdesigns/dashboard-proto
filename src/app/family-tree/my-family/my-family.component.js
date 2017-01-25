"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MyFamilyComponent = (function () {
    function MyFamilyComponent() {
    }
    MyFamilyComponent.prototype.ngOnInit = function () {
    };
    return MyFamilyComponent;
}());
__decorate([
    core_1.Input()
], MyFamilyComponent.prototype, "jeweler", void 0);
__decorate([
    core_1.Input('downlinePeople')
], MyFamilyComponent.prototype, "downlinePeople", void 0);
__decorate([
    core_1.Input('firstLevel')
], MyFamilyComponent.prototype, "firstLevel", void 0);
__decorate([
    core_1.Input('secondLevel')
], MyFamilyComponent.prototype, "secondLevel", void 0);
MyFamilyComponent = __decorate([
    core_1.Component({
        selector: 'pd-my-family',
        templateUrl: './my-family.component.html',
        styleUrls: ['./my-family.component.less'],
        animations: [
            core_1.trigger('createBubble', [
                core_1.state("in", core_1.style({
                    opacity: 1,
                    transform: 'scale(1)'
                })),
                core_1.transition(':enter', [
                    core_1.style({
                        opacity: 0,
                        transform: 'scale(0)'
                    }),
                    core_1.animate('1s ' + (Math.floor((Math.random() * 400) + 100)) + 'ms ease-in')
                ])
            ])
        ]
    })
], MyFamilyComponent);
exports.MyFamilyComponent = MyFamilyComponent;
