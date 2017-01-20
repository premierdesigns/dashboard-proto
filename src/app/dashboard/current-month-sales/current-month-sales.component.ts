import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-current-month-sales',
  templateUrl: './current-month-sales.component.html',
  styleUrls: ['./current-month-sales.component.less']
})
export class CurrentMonthSalesComponent implements OnInit {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    scales:{
      yAxes: [{
        display: false,
        height: 250
      }],
      xAxes: [{
        display: false
      }],
      left: 200
    },
    animation: {
      animateScale: true,
      easing: 'easeOutBounce'
    },
    responsive: true,
    maintainAspectRatio: false,
    fit: function() {
      console.log(this.maxWidth);
    }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: '#0275d8',
      borderColor: '#ffffff',
      borderWidth: 1,
      pointBackgroundColor: '#0275d8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    }
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
