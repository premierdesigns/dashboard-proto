import {
  Component, OnInit, EventEmitter, Output, trigger, state, style, Input, transition,
  animate
} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pd-action-bar',
  templateUrl: 'action-bar.component.html',
  styleUrls: ['./action-bar.component.less'],
  animations: [
    trigger('toggleMobileMenu', [
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1,
        height: '*'
      })),
      transition('void => *', [
        style({
          height: 0
        }),
        animate('750ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
      ])
    ]),
    trigger('toggleIcon', [
      state('closed', style({
        'z-index': 1000
      })),
      state('open', style({
        'z-index': 1000
      })),
      transition('closed <=> open',
        animate('250ms ease-in'))
    ])
  ]
})
export class ActionBarComponent implements OnInit {
  state = 'closed';

  openMenu() {
    this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(route => {
      this.state = 'closed';
    });
  }

  ngOnInit() {

  }

}
