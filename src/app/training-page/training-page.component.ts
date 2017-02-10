import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pd-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.less']
})
export class TrainingPageComponent implements OnInit {
  public isCollapsed = true;

  public trainingSections: Array<any> = [
    {
      "title": "Regional Rally 2017",
      "ref": "RegionalRally",
      "icon": "fa fa-bullhorn"
    },
    {
      "title": "Jewelry Show Basics",
      "ref": "JewelryShowBasics",
      "icon": "fa fa-television"
    },
    {
      "title": "Booking",
      "ref": "Booking",
      "icon": "fa fa-calendar-check-o"
    },
    {
      "title": "Retailing",
      "ref": "Retailing",
      "icon": "icon-tag"
    },
    {
      "title": "Sponsoring",
      "ref": "Sponsoring",
      "icon": "icon-rocket"
    },
    {
      "title": "Product Versatility",
      "ref": "ProductVersatility",
      "icon": "icon-organization"
    },
    {
      "title": "My Premier Awards",
      "ref": "MyPremierAwards",
      "icon": "icon-trophy"
    },
    {
      "title": "Premier Life",
      "ref": "PremierLife",
      "icon": "icon-support"
    },
    {
      "title": "Inspiration",
      "ref": "Inspiration",
      "icon": "icon-bulb"
    },
    {
      "title": "Marketing Tools",
      "ref": "MarketingTools",
      "icon": "icon-wrench"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
