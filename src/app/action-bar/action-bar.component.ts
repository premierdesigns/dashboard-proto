import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pd-action-bar',
  templateUrl: 'action-bar.component.html'
})
export class ActionBarComponent implements OnInit {

  @Output() openNav = new EventEmitter();
  openSideNav(e:any){
    console.log("open nav");
    this.openNav.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
