import {Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';

@Component({
  selector: 'pd-accordian-tab',
  templateUrl: './accordian-tab.component.html',
  styleUrls: ['./accordian-tab.component.less'],
  animations: [
    trigger('showContent', [
      state("in", style({height: '*', opacity: 1})),
      transition('void => *', [
        style({height: '0', opacity: 0}),
        animate('250ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({height: '0', opacity: 0}))
      ])
    ])
  ]
})
export class AccordianTabComponent implements OnInit {
  jewelerName: string = 'User Name';
  @Input() title;
  @Input() extended;
  @Input() order;

  @Output() toggle = new EventEmitter<any>();

  toggleContent() {
    // this.toggle.emit(null)
  }

  constructor() { }

  ngOnInit() {
  }

}
