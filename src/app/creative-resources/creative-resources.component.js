"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var resources_service_1 = require("./resources.service");
var CreativeResourcesComponent = (function () {
    function CreativeResourcesComponent(resourceService) {
        this.resourceService = resourceService;
    }
    CreativeResourcesComponent.prototype.getResources = function () {
        var _this = this;
        this.resourceService.getResources().then(function (resources) { return _this.resources = resources; });
    };
    CreativeResourcesComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    return CreativeResourcesComponent;
}());
CreativeResourcesComponent = __decorate([
    core_1.Component({
        selector: 'pd-creative-resources',
        templateUrl: './creative-resources.component.html',
        styleUrls: ['./creative-resources.component.less'],
        providers: [resources_service_1.ResourcesService]
    })
], CreativeResourcesComponent);
exports.CreativeResourcesComponent = CreativeResourcesComponent;
