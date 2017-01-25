"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var jeweler_1 = require("./jeweler");
var JewelerService = (function () {
    function JewelerService() {
        this.jewelers = [
            {
                firstName: 'Christopher',
                middleName: 'Lee',
                lastName: 'Harris',
                address1: '1234 Main Street',
                address2: 'Suite 100',
                city: 'Irving',
                state: 'TX',
                zipCode: '12345',
                email: 'john.doe@premierdesigns.com',
                phone: '972-123-4567',
                startDate: '06/15/1982',
                anniversaryDate: '07/19/2017'
            }
        ];
    }
    JewelerService.prototype.createEmptyJeweler = function () {
        return new jeweler_1.Jeweler("", "", "", "", "", "", "", "", "", "");
    };
    JewelerService.prototype.getJewelers = function () {
        return this.jewelers;
    };
    JewelerService.prototype.getJeweler = function (id) {
        var jeweler = this.createEmptyJeweler();
        if (this.jewelers && this.jewelers[id]) {
            jeweler = this.jewelers[id];
        }
        return jeweler;
    };
    JewelerService.prototype.createJeweler = function (jeweler) {
        jeweler.id = this.jewelers.length; // poor man's identity field
        this.jewelers.push(jeweler);
    };
    JewelerService.prototype.updateJeweler = function (jeweler) {
        if (jeweler.id) {
            this.jewelers[jeweler.id] = jeweler;
        }
        else {
            this.createJeweler(jeweler);
        }
    };
    JewelerService.prototype.deleteJeweler = function (jeweler) {
        this.jewelers.splice(this.jewelers.indexOf(jeweler), 1);
    };
    return JewelerService;
}());
JewelerService = __decorate([
    core_1.Injectable()
], JewelerService);
exports.JewelerService = JewelerService;
