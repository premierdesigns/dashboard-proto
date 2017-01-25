"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var star_wars_service_1 = require("./star-wars.service");
var StarWarsComponent = (function () {
    function StarWarsComponent(_starWarsService) {
        this._starWarsService = _starWarsService;
    }
    StarWarsComponent.prototype.ngOnInit = function () {
    };
    StarWarsComponent.prototype.onTestGet = function () {
        var _this = this;
        this._starWarsService.getSwapi()
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert('error getting Swapi data'); }, function () { return console.log(_this.getData); });
    };
    StarWarsComponent.prototype.getPeople = function () {
    };
    return StarWarsComponent;
}());
StarWarsComponent = __decorate([
    core_1.Component({
        selector: 'pd-star-wars',
        templateUrl: './star-wars.component.html',
        styleUrls: ['./star-wars.component.less'],
        providers: [star_wars_service_1.StarWarsService]
    })
], StarWarsComponent);
exports.StarWarsComponent = StarWarsComponent;
