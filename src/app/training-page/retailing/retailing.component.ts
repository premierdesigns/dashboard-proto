import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-retailing',
  templateUrl: './retailing.component.html',
  styleUrls: ['./retailing.component.less']
})
export class RetailingComponent implements OnInit {
  public videos : Array<any> = [
    {
      "title": "Retailing Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Retailing Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Retailing Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Retailing Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Retailing Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
