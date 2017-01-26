import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.less']
})
export class InspirationComponent implements OnInit {
  public videos : Array<any> = [
    {
      "title": "Inspiration Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Inspiration Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Inspiration Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Inspiration Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Inspiration Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
