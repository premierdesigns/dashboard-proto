import {Component, OnInit, Input} from '@angular/core';
import {Card} from "../dashboard-card.model";

@Component({
  selector: 'pd-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.less']
})
export class DashboardCardComponent implements OnInit {
  // @Input() header: string;
  // @Input() footer: string;
  @Input() size: string;
  @Input() cardType: string;

  cardSize(cardSize) {
    return 'col-lg-' + cardSize;
  }

  constructor() { }

  ngOnInit() {
    // let temp = this.thisCard;
    // this.card = new Card({
    //   type: 'promoAd'
    // });
  }

}
