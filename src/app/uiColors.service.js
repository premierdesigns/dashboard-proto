"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UiColors = (function () {
    function UiColors() {
        this.theme = { currentBackground: 'purple' };
    }
    ;
    // ngOnInit() {
    //   this.theme = {
    //     currentBackground: 'purple'
    //   };
    // }
    UiColors.prototype.getTheme = function () {
        return this.theme;
    };
    UiColors.prototype.setTheme = function (key, value) {
        this.theme[key] = value;
    };
    return UiColors;
}());
UiColors = __decorate([
    core_1.Injectable()
], UiColors);
exports.UiColors = UiColors;
