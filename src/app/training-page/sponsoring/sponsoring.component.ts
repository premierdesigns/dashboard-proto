import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-sponsoring',
  templateUrl: './sponsoring.component.html',
  styleUrls: ['./sponsoring.component.less']
})
export class SponsoringComponent implements OnInit {
  public videos : Array<any> = [
    {
      "title": "Sponsoring Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Sponsoring Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Sponsoring Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Sponsoring Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Sponsoring Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
