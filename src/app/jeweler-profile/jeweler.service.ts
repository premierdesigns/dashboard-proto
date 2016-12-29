import {Injectable, EventEmitter} from '@angular/core';
import {Jeweler} from "./jeweler";

@Injectable()
export class JewelerService {
  private jewelers: Jeweler[] = [
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

  constructor() { }

  createEmptyJeweler() {
    return new Jeweler("", "", "", "", "", "", "", "", "", "");
  }

  getJewelers() {
    return this.jewelers;
  }

  getJeweler(id: number) {
    let jeweler = this.createEmptyJeweler();

    if (this.jewelers && this.jewelers[id]) {
      jeweler = this.jewelers[id];
    }

    return jeweler;
  }

  createJeweler(jeweler: Jeweler) {
    jeweler.id = this.jewelers.length; // poor man's identity field
    this.jewelers.push(jeweler);
  }

  updateJeweler(jeweler: Jeweler) {
    if (jeweler.id) {
      this.jewelers[jeweler.id] = jeweler;
    }
    else {
      this.createJeweler(jeweler);
    }
  }

  deleteJeweler(jeweler: Jeweler) {
    this.jewelers.splice(this.jewelers.indexOf(jeweler), 1);
  }

}
