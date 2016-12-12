import {Component, OnInit, Input} from '@angular/core';
import { Image } from '../../image.interface';

@Component({
  selector: 'pd-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.less']
})
export class PromoCarouselComponent implements OnInit {
  @Input() interval;

  constructor() { }

  ngOnInit() {
  }

}
