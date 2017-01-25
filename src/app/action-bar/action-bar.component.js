"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ActionBarComponent = (function () {
    function ActionBarComponent(router) {
        var _this = this;
        this.router = router;
        this.state = 'closed';
        this.router.events.subscribe(function (route) {
            _this.state = 'closed';
        });
    }
    ActionBarComponent.prototype.openMenu = function () {
        this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
    };
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    return ActionBarComponent;
}());
ActionBarComponent = __decorate([
    core_1.Component({
        selector: 'pd-action-bar',
        templateUrl: 'action-bar.component.html',
        styleUrls: ['./action-bar.component.less'],
        animations: [
            core_1.trigger('toggleMobileMenu', [
                core_1.state('in', core_1.style({
                    transform: 'translateY(0)',
                    opacity: 1,
                    height: '*'
                })),
                core_1.transition('void => *', [
                    core_1.style({
                        height: 0
                    }),
                    core_1.animate('750ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
                ])
            ]),
            core_1.trigger('toggleIcon', [
                core_1.state('closed', core_1.style({
                    'z-index': 1000
                })),
                core_1.state('open', core_1.style({
                    'z-index': 1000
                })),
                core_1.transition('closed <=> open', core_1.animate('250ms ease-in'))
            ])
        ]
    })
], ActionBarComponent);
exports.ActionBarComponent = ActionBarComponent;
