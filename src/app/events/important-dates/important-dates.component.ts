import { Component, OnInit } from '@angular/core';

import { importantDate } from './important-date';

const DATES: importantDate[] = [
  {
    year: '2017',
    month: 'January',
    date: '2',
    title: 'Home Office closed for New Years'
  },
  {
    year: '2017',
    month: 'January',
    date: '6',
    title: 'Leadership Event'
  },
  {
    year: '2017',
    month: 'January',
    date: '7',
    title: 'Regional Rally'
  }
];

@Component({
  selector: 'pd-important-dates',
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.less']
})
export class ImportantDatesComponent implements OnInit {
  dates = DATES;

  constructor() { }

  ngOnInit() {
  }

}
