"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var contract_info_service_1 = require("./contract-info.service");
var ContractInfoComponent = (function () {
    function ContractInfoComponent(_contractInfoService) {
        this._contractInfoService = _contractInfoService;
        this.people = this._contractInfoService.getPeople();
    }
    ContractInfoComponent.prototype.ngOnInit = function () {
        // this._contractInfoService.getPeople()
        //   .subscribe(
        //     data => this.people = JSON.stringify(data),
        //     error => alert('error getting Swapi data'),
        //     () => console.log(this.people)
        //   );
    };
    return ContractInfoComponent;
}());
ContractInfoComponent = __decorate([
    core_1.Component({
        selector: 'pd-contract-info',
        templateUrl: './contract-info.component.html',
        styleUrls: ['./contract-info.component.less'],
        providers: [contract_info_service_1.ContractInfoService]
    })
], ContractInfoComponent);
exports.ContractInfoComponent = ContractInfoComponent;
