import { Component, OnInit } from '@angular/core';


// let template = require('./sales-card.component.html');

@Component({
  selector: 'pd-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.less']
})

export class SalesCardComponent implements OnInit {
  //Doughnut
  public doughnutChartLabels:string[] = ['eComm', 'Jewelery Show', 'In Person'];
  public doughnutChartData:number[] = [25, 50, 33];
  public chartType:string = 'doughnut';
  public chartOptions:any = {
    animation: {
      animateRotate: true,
      animateScale: true,
      easing: 'easeInOutCubic'
    },
    legend: {
      display: true,
      position: 'bottom',
      fontFamily: "Lato",
      fontColor: '#8a8c8d'
    },
    tooltips: {
      bodyFontSize: 16
    },
    circumference: 2*Math.PI,
    defaultFontSize: 24
  }
  public chartColors:Array<any> = [
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
  ]

  //events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
