import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Card } from './dashboard-card.model';

@Component({
  selector: 'pd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  animations: [
    trigger('alertTrigger', [
      state('in', style({transform: 'translateY(0)', height: '*', opacity: 1})),
      transition(':enter', [
        style({transform: 'translateY(-10px)', height: 0, opacity: 0}),
        animate('500ms 5s')
      ]),
      transition(':leave', [
        animate(100, style({transform: 'translateY(-100px)', opacity: 0, height: 0}))
      ])
    ])
  ]
})

export class DashboardComponent implements OnInit {
  cards: Card[];

  lat: number = 51.678418;
  lng: number = 7.809007;

  public isCollapsed = true;

  constructor() {
    this.cards = [
      new Card ({
        title: "Latest Orders",
        description: "You have 5 new orders!",
        size: '3'
      })
      // new Card({
      //   header: 'Next Event',
      //   title: 'National Rally',
      //   type: 'announcement',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa dolore dolores fuga fugiat ipsa ipsum iusto laudantium libero minima, molestiae, perspiciatis quas quasi rem suscipit tempore voluptate! Excepturi, pariatur?',
      //   size: '8'
      // }),
      // new Card ({
      //   type: 'promoAd',
      //   image: '../../assets/images/JWS-slider-RR2017-preorder.png',
      //   size: '4'
      // }),
    ];
  }

  ngOnInit() {
    let i = 0;
  }

}
