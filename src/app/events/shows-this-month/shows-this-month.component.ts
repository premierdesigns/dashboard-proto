import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-shows-this-month',
  templateUrl: './shows-this-month.component.html',
  styleUrls: ['./shows-this-month.component.less']
})
export class ShowsThisMonthComponent implements OnInit {
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
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
      backgroundColor: 'rgba(148,159,177,0.0)',
      borderColor: '#ffffff',
      borderWidth: 1,
      // pointBackgroundColor: 'rgba(148,159,177,0.0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    }
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
