import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'pd-mobile-side-bar',
  templateUrl: './mobile-side-bar.component.html',
  styleUrls: ['./mobile-side-bar.component.less'],
  animations: [
    trigger('mbProfileTray', [
      state('in', style({
        opacity: 1,
        height: '*'
      })),
      transition('void => *', [
        style({
          height: 0,
          opacity: 0
        }),
        animate('750ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ])
    ])
  ]
})
export class MobileSideBarComponent implements OnInit {
  profileState = 'closed';

  profileTray() {
    this.profileState == 'closed' ? this.profileState = 'open' : this.profileState = 'closed';
  }

  constructor() { }

  ngOnInit() {
  }

}
