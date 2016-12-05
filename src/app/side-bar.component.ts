import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-side-bar',
  templateUrl: 'side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
