import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  LOCALE_ID,
  Inject
} from '@angular/core';

@Component({
  selector: 'pd-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.less']
})
export class EventCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
