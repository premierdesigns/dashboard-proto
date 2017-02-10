import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-share-to-social',
  templateUrl: './share-to-social.component.html',
  styleUrls: ['./share-to-social.component.less']
})
export class ShareToSocialComponent implements OnInit {
  public socialList = [
    {
      'connected': true,
      'platform': 'facebook',
      "icon": "icon-social-facebook",
      "url": "http://www.facebook.com"
    }, {
      'connected': true,
      "platform": "twitter",
      "icon": "icon-social-twitter",
      "url": "http://www.twitter.com"
    }, {
      'connected': false,
      "platform": "pinterest",
      "icon": "icon-social-pinterest",
      "url": "http://www.pinterest.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
