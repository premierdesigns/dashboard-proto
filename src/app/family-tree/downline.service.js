"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DownlineService = (function () {
    function DownlineService(http) {
        this.http = http;
    }
    DownlineService.prototype.loadDownline = function () {
        var _this = this;
        if (this.downline) {
            return Promise.resolve(this.downline);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=16&nat=us&gender=female')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.downline = data.results;
                resolve(_this.downline);
            });
        });
    };
    DownlineService.prototype.loadFirstLevel = function () {
        var _this = this;
        if (this.firstLevel) {
            return Promise.resolve(this.firstLevel);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=4&nat=us&gender=female')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.firstLevel = data.results;
                resolve(_this.firstLevel);
            });
        });
    };
    DownlineService.prototype.loadSecondLevel = function () {
        var _this = this;
        if (this.secondLevel) {
            return Promise.resolve(this.secondLevel);
        }
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=64&nat=us&gender=female')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.secondLevel = data.results;
                resolve(_this.secondLevel);
            });
        });
    };
    return DownlineService;
}());
DownlineService = __decorate([
    core_1.Injectable()
], DownlineService);
exports.DownlineService = DownlineService;
