"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var my_family_component_1 = require("./my-family/my-family.component");
var downline_service_1 = require("./downline.service");
var FamilyTreeComponent = (function () {
    function FamilyTreeComponent(downline) {
        this.downline = downline;
        this.title = 'Family Tree';
    }
    FamilyTreeComponent.prototype.ngOnInit = function () {
        this.loadDownline();
        this.getFirstLevel();
        this.getSecondLevel();
    };
    FamilyTreeComponent.prototype.loadDownline = function () {
        var _this = this;
        this.downline.loadDownline().then(function (data) {
            _this.downlinePeople = data;
            console.log(_this.downlinePeople);
        });
    };
    FamilyTreeComponent.prototype.getFirstLevel = function () {
        var _this = this;
        this.downline.loadFirstLevel().then(function (data) {
            _this.firstLevel = data;
            console.log(_this.firstLevel);
        });
    };
    FamilyTreeComponent.prototype.getSecondLevel = function () {
        var _this = this;
        this.downline.loadSecondLevel().then(function (data) {
            _this.secondLevel = data;
            console.log(_this.secondLevel);
        });
    };
    return FamilyTreeComponent;
}());
__decorate([
    core_1.Input()
], FamilyTreeComponent.prototype, "jeweler", void 0);
FamilyTreeComponent = __decorate([
    core_1.Component({
        selector: 'pd-family-tree',
        entryComponents: [my_family_component_1.MyFamilyComponent],
        templateUrl: './family-tree.component.html',
        styleUrls: ['./family-tree.component.less'],
        providers: [downline_service_1.DownlineService]
    })
], FamilyTreeComponent);
exports.FamilyTreeComponent = FamilyTreeComponent;
