import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'pd-side-bar',
  templateUrl: 'side-bar.component.html',
  animations: [
    trigger('openTray', [
      state('in', style ({height: '*'})),
      transition('void => *', [
        style({height: '*'}),
        animate ('100ms ease-in')
      ]),
      transition('* => void', animate ('100ms ease-out'))
    ])
  ]
})

export class SideBarComponent implements OnInit {
  state = 'closed';

  toggleTray() {
    this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
