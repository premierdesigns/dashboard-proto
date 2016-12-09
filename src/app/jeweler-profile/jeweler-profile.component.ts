import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-jeweler-profile',
  templateUrl: './jeweler-profile.component.html',
  styleUrls: ['./jeweler-profile.component.less']
})
export class JewelerProfileComponent implements OnInit {
  jeweler: {};

  constructor() {
    this.jeweler = {
      firstName: 'Christopher',
      middleName: 'Lee',
      lastName: 'Harris',
      shipAddress1: '1234 Main Street',
      shipAddress2: '',
      shipCity: 'Irving',
      shipState: 'TX',
      shipZip: '12345',
      email: 'john.doe@premierdesigns.com',
      phone: '972-123-4567',
      startDate: '06/15/1982',
      anniversaryDate: '07/19/2017'
    }
  }

  ngOnInit() {
  }

}
