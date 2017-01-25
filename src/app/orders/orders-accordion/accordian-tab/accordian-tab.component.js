"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AccordianTabComponent = (function () {
    function AccordianTabComponent() {
        this.jewelerName = 'User Name';
        this.toggle = new core_1.EventEmitter();
    }
    AccordianTabComponent.prototype.toggleContent = function () {
        // this.toggle.emit(null)
    };
    AccordianTabComponent.prototype.ngOnInit = function () {
    };
    return AccordianTabComponent;
}());
__decorate([
    core_1.Input()
], AccordianTabComponent.prototype, "title", void 0);
__decorate([
    core_1.Input()
], AccordianTabComponent.prototype, "extended", void 0);
__decorate([
    core_1.Input()
], AccordianTabComponent.prototype, "order", void 0);
__decorate([
    core_1.Output()
], AccordianTabComponent.prototype, "toggle", void 0);
AccordianTabComponent = __decorate([
    core_1.Component({
        selector: 'pd-accordian-tab',
        templateUrl: './accordian-tab.component.html',
        styleUrls: ['./accordian-tab.component.less'],
        animations: [
            core_1.trigger('showContent', [
                core_1.state("in", core_1.style({ height: '*', opacity: 1 })),
                core_1.transition('void => *', [
                    core_1.style({ height: '0', opacity: 0 }),
                    core_1.animate('250ms ease-in-out')
                ]),
                core_1.transition('* => void', [
                    core_1.animate('500ms ease-in-out', core_1.style({ height: '0', opacity: 0 }))
                ])
            ])
        ]
    })
], AccordianTabComponent);
exports.AccordianTabComponent = AccordianTabComponent;
