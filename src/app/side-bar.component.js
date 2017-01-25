"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SideBarComponent = (function () {
    function SideBarComponent() {
        this.state = 'closed';
    }
    SideBarComponent.prototype.toggleTray = function () {
        this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
    };
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    core_1.Component({
        selector: 'pd-side-bar',
        templateUrl: 'side-bar.component.html',
        animations: [
            core_1.trigger('openTray', [
                core_1.state('in', core_1.style({ height: '*' })),
                core_1.transition('void => *', [
                    core_1.style({ height: '*' }),
                    core_1.animate('100ms ease-in')
                ]),
                core_1.transition('* => void', core_1.animate('100ms ease-out'))
            ])
        ]
    })
], SideBarComponent);
exports.SideBarComponent = SideBarComponent;
