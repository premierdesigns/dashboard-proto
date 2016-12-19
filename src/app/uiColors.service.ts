import {Injectable, OnInit} from '@angular/core';

@Injectable()

export class UiColors {
  theme = {currentBackground: 'purple'};
  constructor() {};

  // ngOnInit() {
  //   this.theme = {
  //     currentBackground: 'purple'
  //   };
  // }

  getTheme() {
    return this.theme;
  }

  setTheme(key, value) {
    this.theme[key] = value;
  }
}
