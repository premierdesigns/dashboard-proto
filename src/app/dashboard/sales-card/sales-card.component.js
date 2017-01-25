"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// let template = require('./sales-card.component.html');
var SalesCardComponent = (function () {
    function SalesCardComponent() {
        //Doughnut
        this.doughnutChartLabels = ['eComm', 'Jewelery Show', 'In Person'];
        this.doughnutChartData = [25, 50, 33];
        this.chartType = 'doughnut';
        this.chartOptions = {
            animation: {
                animateRotate: true,
                animateScale: false,
                easing: 'easeOutBounce'
            },
            legend: {
                display: true,
                position: 'bottom',
                fontFamily: "Lato",
                fontColor: '#8a8c8d'
            },
            tooltips: {
                bodyFontSize: 12
            },
            circumference: 2 * Math.PI,
            defaultFontSize: 24
        };
        this.chartColors = [
            {
                backgroundColor: ['#e8417b', '#59c5c7', '#FF645A']
            },
            {
                hoverBackgroundColor: ['#e8417b', '#59c5c7', '#f0473d']
            },
            {
                hoverBorderColor: ['#8a8c8d', '#8a8c8d', '#8a8c8d']
            },
            {
                hoverBorderWidth: ['3']
            }
        ];
    }
    //events
    SalesCardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    SalesCardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    SalesCardComponent.prototype.ngOnInit = function () {
    };
    return SalesCardComponent;
}());
SalesCardComponent = __decorate([
    core_1.Component({
        selector: 'pd-sales-card',
        templateUrl: './sales-card.component.html',
        styleUrls: ['./sales-card.component.less']
    })
], SalesCardComponent);
exports.SalesCardComponent = SalesCardComponent;
