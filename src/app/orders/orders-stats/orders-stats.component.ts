import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'pd-orders-stats',
  templateUrl: './orders-stats.component.html',
  styleUrls: ['./orders-stats.component.less']
})
export class OrdersStatsComponent implements OnInit {
  @Input() currentFilter: string;
  @Output() changeFilterString = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeOrderFilter(changeTo: string) {
    console.log(changeTo);
    this.changeFilterString.emit(changeTo);
  }

}
