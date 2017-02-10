import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../order";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'pd-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.snapshot.params['id'];
  }

}
